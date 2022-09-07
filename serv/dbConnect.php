<?php
	function databaseConnect() {
		$servername = "localhost";
		$username = "root";
		$password = "usbw";

		// Create connection
		$conn = new mysqli($servername, $username, $password);

		// Check connection
		if ($conn->connect_error) {
			return null;
		}
		return $conn;
	}

	function checkInput($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}

	function tableExist($conn, $table) {
		$sql = "SHOW TABLES LIKE '$table';";
		$result = $conn->query($sql);
			
		if($result->num_rows > 0)
			return true;
		
		return false;
	}

	function getIdUser($conn, $login) {
		
		$sql = "SELECT user_id FROM users WHERE login='$login' LIMIT 1;";
        $result = $conn->query($sql);
				
		if ($result && ($result->num_rows > 0)) {	
			$row = $result->fetch_assoc();							
			return $row["user_id"];
		}
		else return 0;
	}

	function createDatabaseIfNotExist($conn) {
		
		$sql = "CREATE DATABASE IF NOT EXISTS paw";		
		if($conn->query($sql) !== TRUE)
		{
			printf("Problematyczny: %s\n", $conn->error);
			$conn->close();
			return false;
		}		
		return true;
	}

	function addUserToDB($conn, $login, $password, $email) {
	
		$hashedPassword = hash('sha256', $password);
	
		createDatabaseIfNotExist($conn);
		
		$conn->select_db("paw");
		
		if(!tableExist($conn, 'users')) {
			$sql = "CREATE TABLE users( ".
            "user_id INT NOT NULL AUTO_INCREMENT, ".
            "login VARCHAR(50) NOT NULL, ".
            "password VARCHAR(300) NOT NULL, ".
            "email VARCHAR(50) NOT NULL, ".
            "PRIMARY KEY (user_id)); ";
			
			$result = $conn->query($sql);
			if(!$result) {
				printf("Problematyczny: %s\n", $conn->error);
				$conn->close();
				return '0';
			}
		}

        $sql = "INSERT INTO users (login , password, email) VALUES('$login', '$hashedPassword', '$email');";
        $result = $conn->query($sql);
		
        if($result){			
			return tryLogin($conn, $login, $password);
        }
        else
		{
			printf("Problematyczny: %s\n", $conn->error);
            return '0';
		}
	}

	function tryLogin($conn, $login, $password) {
		$hashedPassword = hash('sha256', $password);

		createDatabaseIfNotExist($conn);
		$conn->select_db("paw");

		if(!tableExist($conn, 'users')) {
			return '0';
		}

		$sql = "SELECT user_id, login, password FROM users WHERE login='$login' LIMIT 1;";
        $result = $conn->query($sql);

		if ($result->num_rows > 0) {
			$row = $result->fetch_assoc();

			if($row["password"] === $hashedPassword){
				return $row["user_id"];
			}
			else {
				return 'p'; //password not valid
			}
		}
		return '0';
	}