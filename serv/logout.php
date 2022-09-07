<?php
	session_start();

	if(isset($_SESSION["login"])) {
		session_unset();
		session_destroy();
		$_SESSION = array();
		$arrOutput = array("Status" => "1");
		echo json_encode($arrOutput);
	}
	else {
		$arrOutput = array("Status" => "0");
		echo json_encode($arrOutput);
	}