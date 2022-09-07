<?php

	require_once('dbConnect.php');

	session_start();
	$arrOutput = array();

	$cardData = json_decode(stripslashes(file_get_contents("php://input")));

	$conn = databaseConnect();

	if(isset($_SESSION["login"])) {
		if($_SESSION["login"] === "yes") {

			$conn->select_db("paw");

			if(!tableExist($conn, 'users')) {
				printf("Problematyczny exist del user: %s\n", $conn->error);
				$conn->close();
				return '0';
			}

			$idUser = getIdUser($conn, $cardData->login);

			if($idUser !== 0) {
				$sql = "DELETE FROM users WHERE user_id='$idUser';";
				$result = $conn->query($sql);
				if($result) {
					$arrOutput += ["Status" => "1"];
					try
					{
						if(isset($_SESSION["login"])) {
							//setcookie(session_name(), '', 100);
							session_unset();
							session_destroy();
							$_SESSION = array();
							$arrOutput += ["logout" => "1"];
						}
					}
					catch (Exception $e) {$arrOutput += ["logout" => "0"]; $arrOutput += ["exception" => $e];}
				}
				else $arrOutput += ["Status" => "0"];
			}

			echo json_encode($arrOutput);
		}
		else echo json_encode(($arrOutput += ["Session" => "no"]));
	}
	else echo json_encode(($arrOutput += ["Session" => "no"]));