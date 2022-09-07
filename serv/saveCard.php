<?php
	require_once('dbConnect.php');

	session_start();
	$arrOutput = array();

	$cardData = json_decode(stripslashes(file_get_contents("php://input")));

	$conn = databaseConnect();

	if(isset($_SESSION["login"])) {
		if($_SESSION["login"] === "yes") {
			$arrOutput += ["Session" => "yes"];

			$conn->select_db("paw");

			if(!tableExist($conn, 'card')) {
				$sql = "CREATE TABLE card( ".
				"id_card INT UNSIGNED NOT NULL AUTO_INCREMENT, ".
				"card_image MEDIUMTEXT NOT NULL, ".
				"user_id INT NOT NULL, ".
				"PRIMARY KEY (id_card), ".
				"FOREIGN KEY (user_id) REFERENCES users (user_id) ".
					"ON DELETE CASCADE ".
					"ON UPDATE RESTRICT);";

				$result = $conn->query($sql);
				if(!$result) {
					printf("Problematyczny: %s\n", $conn->error);
					$conn->close();
					return '0';
				}
			}

			$idUser = getIdUser($conn, $cardData->login);
			$dataURL = $cardData->data;

			if($idUser !== 0) {
				$sql = "INSERT INTO card (card_image, user_id) VALUES('$dataURL', '$idUser');";
				$result = $conn->query($sql);
				if($result) {
					$arrOutput += ["Status" => "1"];
				}
				else $arrOutput += ["Status" => "0"];
			}

			echo json_encode($arrOutput);
		}
		else echo json_encode(($arrOutput += ["Session" => "no"]));
	}
	else echo json_encode(($arrOutput += ["Session" => "no"]));