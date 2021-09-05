<?php 
class Tonk_Rest_Server {      
    // Register our REST Server

    public function hook_rest_server(){
        add_action( 'rest_api_init', array( $this, 'register_routes' ));
    }
    public function register_routes() {
        register_rest_route( 'cj/v2', '/content', array(
            'methods' => 'GET',
            'callback' => array( $this, 'get_content' ),
        ));
        register_rest_route( 'cj/v2', '/gallery-images', array(
            'methods' => 'POST',
            'callback' => array( $this, 'post_gallery_images' ),
        ));
        register_rest_route( 'cj/v2', '/login', array(
            'methods' => 'POST',
            'callback' => array( $this, 'post_login' ),
        ));
        register_rest_route( 'cj/v2', '/complete-rsvp', array(
            'methods' => 'POST',
            'callback' => array( $this, 'post_complete_rsvp' ),
        ));
        register_rest_route( 'cj/v2', '/not-attending', array(
            'methods' => 'POST',
            'callback' => array( $this, 'post_not_attending' ),
        ));
        register_rest_route( 'cj/v2', '/guests', array(
            'methods' => 'GET',
            'callback' => array( $this, 'get_guest_list' ),
        ));
    }
    public function get_content() {
        $obj = new \stdClass;

        //home
        $obj->home = new \stdClass;
        $obj->home->title = get_the_title(55);
        $obj->home->navigationTitle = get_field('navigation_title', 55);
        $obj->home->backgroundImage = get_field('background_image', 55);
        $obj->home->overlayContent = get_field('overlay_content', 55);
        $obj->home->subContent = get_field('sub_content', 55);

        //guest
        $obj->guest = new \stdClass;
        $obj->guest->title = get_the_title(57);
        $obj->guest->navigationTitle = get_field('navigation_title', 57);
        $obj->guest->repeaterContent = get_field('repeater_content', 57);
        
        //map
        $obj->map = new \stdClass;
        $obj->map->title = get_the_title(59);
        $obj->map->navigationTitle = get_field('navigation_title', 59);
        $obj->map->centreMapLat = get_field('centre_map_lat', 59);
        $obj->map->centreMapLong = get_field('centre_map_long', 59);
        $obj->map->mapLocations = get_field('map_locations', 59);

         //gallery
        $galleryItem = [];
        $galleryItem['title'] = 'blank-upload';
        $obj->gallery = new \stdClass;
        $obj->gallery->title = get_the_title(53);
        $gallery = get_field('gallery', 53);

        //menu
        $obj->courses = new \stdClass;
        $obj->courses = get_field('course', 'options');
        $obj->childrensMenu = get_field('children_menu', 'options');

        $newGallery = [];
        foreach ($gallery as $g) {
            if(get_field('show_on_gallery', $g['ID'])) {
                $g['source'] = $g['url'];
                array_push($newGallery, $g);
            }
        }
        array_unshift($newGallery, $galleryItem);
        $obj->gallery->gallery = $newGallery;
        
        return $obj;
    }
    public function post_complete_rsvp() {
        $_POST = json_decode(file_get_contents("php://input"),true);
        
        $mainGuest = $_POST['mainGuest']['value'];
        if($_POST['specialRequirements']) {
            $new_post = array(
                'post_title' => $mainGuest.' Request',
                'post_content' => $_POST['specialRequirements'],
                'post_status' => 'publish',
                'post_date' => date('Y-m-d H:i:s'),
                'post_author' => 1,
                'post_type' => 'request'
            );
            $post_id = wp_insert_post($new_post);
        }
        if($_POST['attendingGuests']) {
            foreach ($_POST['attendingGuests'] as $attendingGuest) {
                $selections = $attendingGuest['selection'];
                if($attendingGuest['selected']) {
                    update_field('field_5eb6c3fd62d52', 1, $attendingGuest['id']);
                    foreach ($selections as $selection) {
                        $row = array(
                            'field_5eb6c39a62d50'   => $selection['id'],
                            'field_5eb6c3ee62d51'   => $selection['choice']
                        );
                        add_row('field_5eb6c37962d4f', $row, $attendingGuest['id']);
                    }
                }
            }
        }
    }
    public function post_not_attending() {
        $_POST = json_decode(file_get_contents("php://input"),true);
        $mainGuest = $_POST['mainGuest']['value'];
        $id = get_page_by_title($mainGuest, '', 'guest');
        update_field('field_5f4c091fde05b', 1, $id);
        return true;
    }
    public function post_gallery_images() {
        $filename = $_FILES['file']['name'];

        // Valid file extensions
        $valid_extensions = array("jpg","jpeg","png","pdf");
        $extension = pathinfo($filename, PATHINFO_EXTENSION);

        // Check extension
        if(in_array(strtolower($extension),$valid_extensions) ) {
            $id = uniqid();
            $key = 'field_5eb0435127fb7';
            $post_id = 53;
            $name = 'wp-content/uploads/'.$id.'-'.$filename;
            if(move_uploaded_file($_FILES['file']['tmp_name'], $name)){
                $attachment = array(
                    'guid'=> $_FILES['file']['tmp_name'], 'wp-content/uploads/'.$id.'-'.$filename,
                    'post_mime_type' => $_FILES['file']['type'],
                    'post_title' => '',
                    'post_content' => '',
                    'post_status' => 'inherit'
                );
                $attach_id = wp_insert_attachment( $attachment, $name );
                require_once( ABSPATH . 'wp-admin/includes/image.php' );
                $attach_data = wp_generate_attachment_metadata( $attach_id, $name);
                wp_update_attachment_metadata( $attach_id, $attach_data );
                // add to gallery
                $gallery_array = get_field('gallery', $post_id, false);

                if (!is_array($gallery_array )) {
                    $gallery_array = array();
                }
                array_unshift($gallery_array, $attach_id);
                update_field($key, $gallery_array , $post_id);

                return $id.'-'.$filename;
            }
        }else{
            echo 0;
        }
    }
    public function post_login() {
        $_POST = json_decode(file_get_contents("php://input"),true);
        $password = $_POST['password'];
        $user = $_POST['user'];
        if($user) {
            $group = get_the_terms($user['id'], 'group');
            if(sizeof($group) == 1) {
                $group = $group[0];
                if($password == get_field('password', 'term_'.$group->term_id)) {
                    $notAttending = 0;
                    $posts = get_posts(array(
                        'post_type' => 'guest',
                        'taxonomy' => 'group',
                        'term' => $group->slug,
                        'nopaging' => true
                    ));
                    foreach($posts as $post):
                        $attending = get_field('attending', $post->ID);
                        if(!$attending) {
                            $notAttending++;
                        }
                    endforeach;
                    if($notAttending > 0) {
                        return 'extra information';
                    } else {
                        return 'complete';
                    }
                }
            }
        }
        return false;
    }

    public function get_guest_list() {
        $loop = new WP_Query(
            array(
                'post_type' => 'guest',
                'posts_per_page' => -1
            )
        );
        $guests = [];
        while ( $loop->have_posts() ) : $loop->the_post();
            $attending = get_field('attending', $obj->id);
            $obj = new \stdClass;
            $obj->value = get_the_title();
            $obj->id = get_the_ID();
            $obj->selected = false;
            $obj->selection = [];
            $obj->child = get_field('child', $obj->id);
            $obj->attending = get_field('attending', $obj->id);
            //get group
            $group = get_the_terms($obj->id, 'group');
            if(sizeof($group) > 0) {
                foreach ($group as $g) {
                    $group = [];
                    $posts = get_posts(array(
                        'post_type' => 'guest',
                        'taxonomy' => 'group',
                        'term' => $g->slug,
                        'nopaging' => true, // to show all posts in this category, could also use 'numberposts' => -1 instead
                    ));
                    foreach($posts as $post):
                        $obj2 = new \stdClass;
                        $obj2->selected = false;
                        $obj2->selection = [];
                        $obj2->value = $post->post_title;
                        $obj2->id = $post->ID;
                        $obj2->attending = get_field('attending', $post->ID);
                        $obj2->child = get_field('child', $post->ID);
                        array_push($group, $obj2);
                    endforeach;
                }
                $obj->group = $group;
            }
            array_push($guests, $obj);
        endwhile;
        return $guests;
        wp_reset_postdata();
    }
}

$Tonk_Rest_Server = new Tonk_Rest_Server();
$Tonk_Rest_Server->hook_rest_server();