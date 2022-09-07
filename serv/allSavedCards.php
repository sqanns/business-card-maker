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
				printf("Problematyczny card: %s\n", $conn->error);
				$conn->close();
				return '0';
			}

			$idUser = getIdUser($conn, $cardData->login);

			if($idUser !== 0) {
				$dataArr = array();
				$sql = "SELECT id_card, card_image FROM card WHERE user_id='$idUser';";
				$result = $conn->query($sql);
				if ($result->num_rows > 0) {
					// output data of each row
					$i = 0;
					while($row = $result->fetch_assoc()) {
						$dataArr[$i] = array("Id" => $row["id_card"],"data"=>$row["card_image"]);
						$i++;
					}
					$arrOutput += ["Status" => "1"];
					$arrOutput += ["cards" => $dataArr];
				}
				else $arrOutput += ["Status" => "2"];
			}
			echo json_encode($arrOutput);
		}
		else echo json_encode(($arrOutput += ["Session" => "no"]));
	}
	else echo json_encode(($arrOutput += ["Session" => "no"]));	
?>