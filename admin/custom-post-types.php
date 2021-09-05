<?php 
	function create_guest_post_type() {
		$labels = array(
			'name' => _x( 'Guests', 'post type general name' ),
			'singular_name' => _x( 'Guest', 'post type singular name' ),
			'add_new' => _x( 'Add New', 'Guest' ),
			'add_new_item' => __( 'Add New Guest' ),
			'edit_item' => __( 'Edit Guest' ),
			'new_item' => __( 'New Guest' ),
			'all_items' => __( 'All Guests' ),
			'view_item' => __( 'View Guest' ),
			'search_items' => __( 'Search guests' ),
			'not_found' => __( 'No guests found' ),
			'not_found_in_trash' => __( 'No guests found in the Trash' ),
			'parent_item_colon' => '',
			'menu_name' => 'Guests'
		);

		$args = array(
			'labels' => $labels,
			'description' => 'Displays guest information',
			'public' => true,
			'menu_position' => 4,
			'supports' => array( 'title', 'editor', 'thumbnail', 'excerpt', 'comments' ),
			'has_archive' => true,
		);
		
		register_post_type( 'guest', $args );
	}
	add_action( 'init', 'create_guest_post_type' );

	function create_group_taxonomy() {  
        register_taxonomy(  
            'group',  
            'guest',        //post type name
            array(  
                'hierarchical' => true,  
                'label' => 'Groups',  //Display name
                'query_var' => true,
                'rewrite'      => array('slug' => 'groups', 'with_front' => false)
            )  
        );  
    }  
    add_action( 'init', 'create_group_taxonomy');

    function create_request_post_type() {
		$labels = array(
			'name' => _x( 'Request', 'post type general name' ),
			'singular_name' => _x( 'Request', 'post type singular name' ),
			'add_new' => _x( 'Add New', 'Request' ),
			'add_new_item' => __( 'Add New Request' ),
			'edit_item' => __( 'Edit Request' ),
			'new_item' => __( 'New Request' ),
			'all_items' => __( 'All Requests' ),
			'view_item' => __( 'View Request' ),
			'search_items' => __( 'Search requests' ),
			'not_found' => __( 'No requests found' ),
			'not_found_in_trash' => __( 'No requests found in the Trash' ),
			'parent_item_colon' => '',
			'menu_name' => 'Requests'
		);

		$args = array(
			'labels' => $labels,
			'description' => 'Displays request information',
			'public' => true,
			'menu_position' => 4,
			'supports' => array( 'title', 'editor', 'thumbnail', 'excerpt', 'comments' ),
			'has_archive' => true,
		);
		
		register_post_type( 'request', $args );
	}
	add_action( 'init', 'create_request_post_type' );