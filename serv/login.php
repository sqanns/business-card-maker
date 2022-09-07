<?php
	require_once('dbConnect.php');

	session_start();

	$loginData = json_decode(stripslashes(file_get_contents("php://input")));

	$conn = databaseConnect();
	$arrOutput = array();

	$addSuccess = NULL;
	$login = checkInput($loginData->login);
	$password = checkInput($loginData->password);
	$email = checkInput($loginData->email);

	if($login !== '' && $password !== '') {
		if($conn !== NULL) {

			$id = tryLogin($conn, $login, $password);

			if($id === '0' && $email !== '')			{
				$addSuccess = addUserToDB($conn, $login, $password, $email);
			}

			if($id !== '0' && $id !== 'p') {
				$arrOutput += ["Status" => "1"]; //logowanie przebiegło pomyślnie
				$arrOutput += ["id" => $id];
				$arrOutput += ["Log" => $login];
				if(!isset($_SESSION["login"])) {
					$_SESSION["login"] = "yes";  //zalogowany w sesji
					$arrOutput += ["Session" => "yes"];
				}
				else {
					$arrOutput += ["Session" => "no"];
				}
			}
			else if($addSuccess !== '0' && $addSuccess !== NULL) {
				$arrOutput += ["Status" => "2"];
				$arrOutput += ["id" => $addSuccess];
				$arrOutput += ["Log" => $login];
				$_SESSION["login"] = "yes"; //zalogowany w sesji
				$arrOutput += ["Session" => "yes"];
			}
			else if($id === 'p') {
				$arrOutput += ["Status" => "4"]; //incorrect password
			}
			else if($addSuccess === NULL) {
				$arrOutput += ["Status" => "5"]; //email empty and not exist accont or cannot add user
			}

		}
		else $arrOutput += ["Status" => "100"]; //Database connection error

		echo json_encode($arrOutput);
	}
	else {
		$arrOutput += ["Status" => "99"]; //login or password empty
		echo json_encode($arrOutput);
	}
	$arrOutput = array("Info" => "Zalogowany", "Email" => "Jeszcze nie wiem");
	$conn->close();


