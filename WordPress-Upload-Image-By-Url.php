<?php

function uploadImageByUrl($image_url=NULL, $name=NULL, $alt=NULL){
 
			// it allows us to use download_url() and wp_handle_sideload() functions
			require_once( ABSPATH . 'wp-admin/includes/file.php' );

			// download to temp dir
			$temp_file = download_url( $image_url );

			if( is_wp_error( $temp_file ) ) {
				return false;
			}

			// move the temp file into the uploads directory
			$file = array(
				'name'     => basename( $image_url ),
				'type'     => mime_content_type( $temp_file ),
				'tmp_name' => $temp_file,
				'size'     => filesize( $temp_file ),
			);
			$sideload = wp_handle_sideload(
				$file,
				array(
					'test_form'   => false // no needs to check 'action' parameter
				)
			);

			if( ! empty( $sideload[ 'error' ] ) ) {
				// you may return error message if you want
				return false;
			}

			// it is time to add our uploaded image into WordPress media library
			$attachment_id = wp_insert_attachment(
				array(
					'guid'           => $sideload[ 'url' ],
					'post_mime_type' => $sideload[ 'type' ],
					'post_title'     => $name, //basename( $sideload[ 'file' ] ),
					'post_content'   => '',
					'post_status'    => 'inherit',
				),
				$sideload[ 'file' ]
			);

			// Set the image Alt-Text
			update_post_meta( $attachment_id, '_wp_attachment_image_alt', $alt );


			if( is_wp_error( $attachment_id ) || ! $attachment_id ) {
				return false;
			}

			// update medatata, regenerate image sizes
			require_once( ABSPATH . 'wp-admin/includes/image.php' );

			wp_update_attachment_metadata(
				$attachment_id,
				wp_generate_attachment_metadata( $attachment_id, $sideload[ 'file' ] )
			);

			return $attachment_id;


	}
	
	// call_user_func
	$image_url = 'https://smithwebstore.com/wp-content/uploads/2022/02/logo-blue.png';
	$name = 'smith_webstore_logo';
	$alt = 'Smith WebStore Logo';
	$attach_id = uploadImageByUrl($image_url, $name, $alt;
	
	//assign featured image to post
	set_post_thumbnail( $post_id, $attach_id );
		
?>		