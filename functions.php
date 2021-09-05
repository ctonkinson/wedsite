<?php

/* Include extra admin files
-------------------------------------------------------------- */
include_once 'admin/custom-post-types.php';
include_once 'admin/api-endpoints.php';


add_action('after_setup_theme', 'aespink_setup');
function aespink_setup() {
    load_theme_textdomain('cj', get_template_directory() . '/languages');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}
add_action('wp_enqueue_scripts', 'cj_load_scripts');
function cj_load_scripts()
{
    wp_enqueue_style('cj-style', get_stylesheet_uri());
    wp_deregister_script( 'jquery' );
   	wp_register_script( 'jquery', "https://code.jquery.com/jquery-3.4.1.min.js", array(), '3.4.1', true );
    wp_enqueue_script( 'jquery' );
}
 register_nav_menus(array(
    'main-menu' => esc_html__('Main Menu', 'cj')
));

/* Adds ACF options page
-------------------------------------------------------------- */
if (function_exists('acf_add_options_page')) {
    acf_add_options_page('Global Options');
}

/* Adds js script to footer
-------------------------------------------------------------- */
add_action('wp_footer', 'footer_script'); // Add Custom Scripts to footer
function footer_script()
{
    if ($GLOBALS['pagenow'] != 'wp-login.php' && !is_admin()) {
        wp_register_script('cScripts', get_template_directory_uri() . '/assets/js/min/script-min.js', array('jquery'), '1.0.0'); // Custom scripts
        wp_enqueue_script('cScripts'); // Enqueue it!
    }
}

/*
 * Add columns to guest post list
 */
 function add_acf_columns ( $columns ) {
    return array_merge ( $columns, array ( 
        'attending' => __ ( 'Attending' ),
    ));
 }
 add_filter ( 'manage_guest_posts_columns', 'add_acf_columns' );

/*
 * Add columns to guest post list
 */
 function exhibition_custom_column ( $column, $post_id ) {
    switch ( $column ) {
        case 'attending':
            if(get_post_meta ( $post_id, 'attending', true ) == 1) {
                echo "Attending";
            } 
            if(get_post_meta ( $post_id, 'not_attending', true ) == 1) {
                echo "Not Attending";
            } 
        break;
    }
 }
 add_action ( 'manage_guest_posts_custom_column', 'exhibition_custom_column', 10, 2 );


add_action( 'wp_dashboard_setup', 'register_my_dashboard_widget' );
function register_my_dashboard_widget() {
    wp_add_dashboard_widget(
        'my_dashboard_widget',
        'RSVP Status',
        'my_dashboard_widget_display'
    );

}

function my_dashboard_widget_display() {
    $attending = new WP_Query(
        array(
            'post_type' => 'guest',
            'posts_per_page' => -1,
            'posts_status' => 'publish',
            'meta_query'    => array(
                array(
                    'key'       => 'attending',
                    'value'     => 1,
                    'compare'   => '=',
                )
            )
        )
    );
    $attending = $attending->found_posts;
    $not_attending = new WP_Query(
        array(
            'post_type' => 'guest',
            'posts_per_page' => -1,
            'posts_status' => 'publish',
            'meta_query'    => array(
                array(
                    'key'       => 'not_attending',
                    'value'     => 1,
                    'compare'   => '=',
                )
            )
        )
    );
    $not_attending = $not_attending->found_posts;
    $neither = new WP_Query(
        array(
            'post_type' => 'guest',
            'posts_per_page' => -1,
            'posts_status' => 'publish',
            'meta_query'    => array(
                'relation'      => 'AND',
                array(
                    'key'       => 'attending',
                    'value'     => 1,
                    'compare'   => '!=',
                ),
                array(
                    'key'       => 'not_attending',
                    'value'     => 1,
                    'compare'   => '!=',
                )
            )
        )
    );
    $neither = $neither->found_posts;
    echo '<canvas data-attending="'.$attending.'" data-not-attending="'.$not_attending.'" data-neither="'.$neither.'" id="myChart" width="400" height="400"></canvas>';
}


function load_custom_wp_admin() {
    wp_register_style( 'custom_wp_admin_css', get_template_directory_uri() . '/assets/admin/css/admin-style.css', false, '1.0.0' );
    wp_enqueue_style( 'custom_wp_admin_css' );
    wp_register_script('aScripts', get_template_directory_uri() . '/assets/admin/js/admin-script.js', array('jquery'), '1.0.0', true); // Custom Admin scripts
     wp_enqueue_script('aScripts'); // Enqueue it!
}
add_action( 'admin_enqueue_scripts', 'load_custom_wp_admin' );