<?php
	require_once('dbConnect.php');

	session_start();
	$arrOutput = array();

	$cardData = json_decode(stripslashes(file_get_contents("php://input")));

	$conn = databaseConnect();

	if(isset($_SESSION["login"])) {
		if($_SESSION["login"] === "yes") {

			$conn->select_db("paw");

			if(!tableExist($conn, 'card')) {
				printf("Problematyczny exist del card: %s\n", $conn->error);
				$conn->close();
				return '0';
			}

			if($cardData->id !== 0) {
				$sql = "DELETE FROM card WHERE id_card='$cardData->id';";
				$result = $conn->query($sql);
				if($result) {
					$arrOutput += ["Status" => "1"];
					$arrOutput += ["id" => $cardData->id];
				}
				else $arrOutput += ["Status" => "0"];
			}

			echo json_encode($arrOutput);
		}
		else echo json_encode(($arrOutput += ["Session" => "no"]));
	}
	else echo json_encode(($arrOutput += ["Session" => "no"]));
