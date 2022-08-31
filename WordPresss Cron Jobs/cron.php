<?php
add_action( 'init','sh_json_refresh_cron');
function sh_json_refresh_cron(){
	if ( !wp_next_scheduled( 'sh_task_hook' ) ) {
		wp_schedule_event( time(), 'sh_cron_worker_two', 'sh_task_hook' );
	}
}


add_filter( 'cron_schedules', 'sh_uni_add_schedule');
function sh_uni_add_schedule(){
 	$schedules['sh_cron_worker_two'] = array( 'interval' => 60, 'display' => 'My Cron Worker 2' );
 	return $schedules;
}


add_action( 'sh_task_hook', 'sh_task_function');
function sh_task_function() {
	wp_mail( 'sumith.harshan@gmail.com', 'Automatic Email', 'Automatic scheduled email from WordPress.');
}
?>