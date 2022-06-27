<?php
/**
 * @package SGEM Investment Cal
 */
/*
Plugin Name: SGEM Investment Cal
Plugin URI: https://surge.global
Description: SGEM Investment Cal
Version: 1.0
Author: Surge Web Dev Team 
Author URI: https://surge.global
License: GPLv2 or later
Text Domain: sgem-investment-cal
*/ 

/* Custom JS */
function sgem_cal_js(){
	wp_enqueue_script('sgem-retirement-calculator-popper', 'https://unpkg.com/@popperjs/core@2.11.5/dist/umd/popper.min.js', array('jquery'), '1.12', true);
	wp_enqueue_script('sgem-retirement-calculator-tippy', 'https://unpkg.com/tippy.js@6.3.7/dist/tippy-bundle.umd.min.js', array('jquery'), '1.12', true);
	wp_enqueue_script('sgem-retirement-calculator-popperjs', 'https://unpkg.com/@popperjs/core@2', array('jquery'), '1.12', true);
	wp_enqueue_script('sgem-retirement-calculator-tippyjs', 'https://unpkg.com/tippy.js@6', array('jquery'), '1.12', true);	
	wp_enqueue_script('sgem-retirement-calculator-scripts', plugins_url('/assets/js/cal-scripts.js', __FILE__), array('jquery'), '1.33', true); 	 
}
add_action('wp_enqueue_scripts', "sgem_cal_js");

/* Custom css */
function sgem_cal_custom_css() {
	wp_enqueue_style( 'sgem-retirement-calculator-tooltip', plugins_url('/assets/css/tooltipster.bundle.min.css', __FILE__),false,'1.5','all');
	wp_enqueue_style( 'sgem-retirement-calculator-style', plugins_url('/assets/css/styles.css', __FILE__),false,'1.488','all'); 
}
add_action( 'wp_enqueue_scripts', 'sgem_cal_custom_css'); 

// Calculator Shortcode
function sgem_retirement_cal_shortcode() {   
 	$sgem_cal_content = '<div id="sgem-retirement-cal-main-id"></div>'; 
 	return $sgem_cal_content;
}
add_shortcode('sgem-retirement-calculator', 'sgem_retirement_cal_shortcode');