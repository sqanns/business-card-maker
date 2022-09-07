<!doctype html>
<html lang="pl">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- , chrome=1"> Not allow in W3C -->
	<title>Kreator Wizytówek</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="Projekt na obronę studiów podyplomowych PAW Edycja 9">
	<meta name="keywords" content=""/>
	<meta name="author" content="Wiktor Woźniak" />
	
	<link rel="shortcut icon" type="image/png" href="icon/favicon.png"/> <!-- free icons from flaticon.com -->
	<!-- <link rel="shortcut icon" type="image/png" href="icon/favicon_apple.png"/> -->
	
	<link href="css/normalize.css" rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="css/main.css">
	<link rel="stylesheet" href="css/input.css">

</head>	
<body>
	<header>
		<!--<div class="formIcon">Ikona</div>-->
		<img src="img/canva.png" alt="ikona" style="display:block"; height="150px; cursor: pointer;" onClick="window.location.reload()">
		<h1>
			<span class="familyMotionPicture">&nbsp;</span>
			<span class="familyGreatVibes">&nbsp;</span>
			<span class="familyFadliScript">&nbsp;</span>
			<span>Kreator Wizytówek</span>
			<span class="familyMergeLight">&nbsp;</span>
			<span class="familyGreatVibes">&nbsp;</span>
			<span class="familyDiavlo">&nbsp;</span>
		</h1>
		<div id="login" class="logIn noSelect">Login</div>
	</header>
	<div id="params"> 
		<form id="mainForm" action="">
			<div class="formElement">
				<label for="pattern">Wybierz wzór:</label>
				<select id="pattern">
					<option value="1" selected="selected">Wzrór 1</option>
					<option value="2">Wzór 2</option>
				</select>
			</div>
			
			<div class="formElement">
				<label for="firstBackgroundColor">Kolor nr1:</label>
				<input id="firstBackgroundColor" type="color" required>
			</div>

			<div class="formElement">
				<label for="secondBackgroundColor">Kolor nr2:</label>
				<input id="secondBackgroundColor" type="color" required>
			</div>
			<div class="formElement">
				<label for="thirdBackgroundColor">Kolor nr3:</label>	
				<input id="thirdBackgroundColor" type="color" required>
			</div>

			<div class="formElement">
				<label for="fourthBackgroundColor">Kolor nr4:</label>
				<input id="fourthBackgroundColor" type="color" required>
			</div>

			<div class="formElement">
				<label for="font">Czcionka:</label>
				<select id="font" required>
					<option class="familyDiavlo" value="Diavlo">Diavlo</option>
					<option class="familyMotionPicture" value="MotionPicture">Motion Picture</option>
					<option class="familyFadliScript" value="Fadli Script">Fadli Script</option>
					<option class="familyMergeLight" value="MergeLight">Merge Light</option>
				</select>
			</div>

			<div class="formElement">
				<label for="fontColorCompanyName">Kolor dla nazwy firmy:</label>
				<input id="fontColorCompanyName" type="color" required>
			</div>
			
			<div class="formElement">
				<label for="fontColorName">Kolor dla imienia i nazwiska:</label>
				<input id="fontColorName" type="color" required>
			</div>
			
			<div class="formElement">
				<label for="fontColorPosition">Kolor dla stanowiska:</label>
				<input id="fontColorPosition" type="color" required>
			</div>
			
			<div class="formElement">
				<label for="fontColorContactData">Kolor dla danych kontaktowych:</label>
				<input id="fontColorContactData" type="color" required> 
			</div>
			
			<div class="formElement">
				<label for="fontSizeCompanyName">Rozmiar czcionki dla nazwy firmy:</label>
				<input id="fontSizeCompanyName" type="number" min="1" max="50" required>
			</div>
			
			
			<div class="formElement">
				<label for="fontSizeName">Rozmiar czcionki dla imienia i nazwiska:</label>
				<input id="fontSizeName" type="number" min="1" max="50" required>
			</div>
			
			<div class="formElement">
				<label for="fontSizePosition">Rozmiar czcionki dla stanowiska:</label>
				<input id="fontSizePosition" type="number" min="1" max="50" required>
			</div>
			
			<div class="formElement">
				<label for="fontSizeContactData">Rozmiar czcionki dla danych kontaktowych:</label>
				<input id="fontSizeContactData" type="number" min="1" max="50" required>
			</div>
			
			<div class="formElement">
				<label for="firstLineCompanyName">Nazwa Firmy (pierwsza linia):</label>
				<input id="firstLineCompanyName" type="text" title="Wciśnij spacje jeśli chcesz zostawić puste" required>
			</div>
			
			<div class="formElement">
				<label for="secondLineCompanyName">Nazwa Firmy (druga linia):</label>
				<input id="secondLineCompanyName" type="text" title="Wciśnij spacje jeśli chcesz zostawić puste" required>
			</div>
			
			<div class="formElement">
				<label for="name">Imie:</label>
				<input id="name" type="text" required>
			</div>
			
			<div class="formElement">
				<label for="surname">Nazwisko:</label>
				<input id="surname" type="text" required>
			</div>
			
			<div class="formElement">
				<label for="position">Stanowisko:</label>
				<input id="position" type="text" required>
			</div>
			
			<div class="formElement">
				<label for="mail">E-mail:</label>
				<input id="mail" type="email" required>
			</div>

			<div class="formElement">
				<label for="localisation">Adres:</label>
				<input id="localisation" type="text" required>
			</div>
			
			<div class="formElement">
				<label for="phoneNumber">Nr Telefonu:</label>
				<input id="phoneNumber" type="tel" required>
			</div>
			
			<div class="formElement">
				<button id="submitParams" type="submit">Zatwierdź</button>
				<button id="resetForms" type="button">Resetuj</button>
			</div>		  
		</form>
	</div>
	
	<div id="content">
		<canvas id="card_V" title="Wizytówka"></canvas> 
		<!--fix in progress on Edge: https://github.com/eligrey/FileSaver.js-->
		<div id="canvasButton">
			<a id="downloadCard" download="YourVisitingCards.png">
				<div id="download" class="noSelect" title="Pobierz plik png">Pobierz</div> 
			</a>
		</div>
	</div>

	<div id="upload">
		<h5> Drag and Drop </h5>
		<img id="hidden_img" alt="obrazek">
	</div>
	
	<script src="js/dragImage.js" type="module"></script>
	<script src="js/Main.js" type="module"></script>

</body>
</html>
