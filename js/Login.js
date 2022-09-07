// JavaScript Document
/*jshint strict: false */
/*jshint esversion: 6 */

import saveAndGetCardFromDB from './saveAndGetCardFromDB.js';
import delUser from './DelUser.js';
import getCards from './GetCards.js';

class Login {

	constructor(){}

	createLoginForm() {

		let loginWindow;

		if(!document.getElementById("loginPop")) {
			
			loginWindow = document.createElement("div");
			loginWindow.id = "loginPop";
			loginWindow.style.position = "absolute";
			loginWindow.style.width = "526px";
			loginWindow.style.height = "380px";
			loginWindow.className = "popBoxShadow";
			loginWindow.style.margin = "auto";
			loginWindow.style.background = "white";
			loginWindow.style.color = "black";
			loginWindow.style.zIndex = "100";
			let content = document.getElementById("content");
			content.appendChild(loginWindow);
			
			let loginHead = document.createElement("h2");
			loginHead.textContent = "Logowanie";
			loginWindow.appendChild(loginHead);
			
			let label = document.createElement("label");
			label.textContent = "Login";
			label.setAttribute("for", "loginLog");
			loginWindow.appendChild(label);
			
			let input = document.createElement("input");
			input.id = "loginLog";
			input.type = "text";
			input.require = true;
			input.style.marginBottom = "20px";
			loginWindow.appendChild(input);
			
			label = document.createElement("label");
			label.textContent = "Hasło";
			label.setAttribute("for", "passwordLog");
			loginWindow.appendChild(label);
			
			input = document.createElement("input");
			input.id = "passwordLog";
			input.type = "password";
			input.require = true;
			input.style.marginBottom = "20px";
			loginWindow.appendChild(input);
			
			label = document.createElement("label");
			label.textContent = "E-mail (wymagany przy rejestracji)";
			label.setAttribute("for", "email");
			loginWindow.appendChild(label);
			
			input = document.createElement("input");
			input.id = "emailLog";
			input.type = "email";
			input.style.marginBottom = "20px";
			loginWindow.appendChild(input);
			
			let button = document.createElement("button");
			button.id="LogEnter";
			button.textContent = "Zaloguj";
			loginWindow.appendChild(button);
			
			button = document.createElement("button");
			button.id="LogExit";
			button.textContent = "x";
			button.style.position = "absolute";
			button.style.top = "0";
			button.style.right = "0";
			loginWindow.appendChild(button);

			console.log('create login div');

			document.addEventListener('click', function(e){				
				if(e.target && e.target.id === 'LogEnter'){	
					e.stopImmediatePropagation();
					Login.tryLoginAjax();					
					console.log("Kliknięto logowanie");
				}
			}, false);
			
			document.addEventListener('click', function(e){
				if(e.target && e.target.id === 'LogExit'){
					e.stopImmediatePropagation();
					loginWindow = document.getElementById("loginPop");
					loginWindow.parentNode.removeChild(loginWindow);
				}
			}, false);
			
			console.log('create event for login');
		}
		else {
			loginWindow = document.getElementById("loginPop");
			loginWindow.parentNode.removeChild(loginWindow);
		}
	}

	afterLoginMenu() {
		//destroy all login po before

		if(document.getElementById("loginMenuPop"))
		{
			let menu = document.getElementById("loginMenuPop");
			menu.parentNode.removeChild(menu);
			return;
		}

		if(document.getElementById("messagePop")) {
			let message = document.getElementById("messagePop");
			message.parentNode.removeChild(message);
		}

		if(document.getElementById("loginPop"))
		{
			let loginWindow = document.getElementById("loginPop");
			loginWindow.parentNode.removeChild(loginWindow);
		}

		//todo inside other method
		let menuLoginWindow = document.createElement("div");
		menuLoginWindow.id = "loginMenuPop";
		menuLoginWindow.style.position = "absolute";
		menuLoginWindow.style.width = "526px";
		menuLoginWindow.style.height = "380px";
		menuLoginWindow.className = "popBoxShadow";
		menuLoginWindow.style.margin = "auto";
		menuLoginWindow.style.background = "white";
		menuLoginWindow.style.color = "black";
		menuLoginWindow.style.zIndex = "100";
		let content = document.getElementById("content");
		content.appendChild(menuLoginWindow);

		let button = document.createElement("button");
		button.id="MenuLogExit";
		button.textContent = "x";
		button.style.position = "absolute";
		button.style.top = "0";
		button.style.right = "0";
		menuLoginWindow.appendChild(button);

		button = document.createElement("button");
		button.id="ShowSavedCards";
		button.textContent = "Pokaż zapisane wizytówki";
		button.style.width = "200px";
		button.style.height = "35px";
		menuLoginWindow.appendChild(button);

		button = document.createElement("button");
		button.id="DeleteAccount";
		button.textContent = "Usuń konto";
		menuLoginWindow.appendChild(button);

		button = document.createElement("button");
		button.id="LogoutExit";
		button.textContent = "Wyloguj";
		menuLoginWindow.appendChild(button);

		document.addEventListener('click', function(e) {
			if(e.target && e.target.id === 'MenuLogExit') {
				if(document.getElementById("loginMenuPop"))
				{
					e.stopImmediatePropagation();
					let menu = document.getElementById("loginMenuPop");
					menu.parentNode.removeChild(menu);
					return;
				}
			}
			if(e.target && e.target.id === "ShowSavedCards") {
					e.stopImmediatePropagation();
					getCards.getAllUserCardsAjax();
					return;
			}
			if(e.target && e.target.id === "DeleteAccount") {
					e.stopImmediatePropagation();
					delUser.tryDeleteUserAjax();
					return;
			}
			if(e.target && e.target.id === "LogoutExit") {
					e.stopImmediatePropagation();
					Login.tryLogOutAjax();
					return;
			}
		}, false);
	}

	loginMenu() {
		let isLogin = (document.getElementById("login").textContent === "Login") ? false : true;
		
		if(!isLogin){
			instance.createLoginForm();
		}
		else{
			instance.afterLoginMenu();
		}
	}

	static tryLogOutAjax() {
		const xhr = new XMLHttpRequest();	
		
		xhr.onload = function() {
			if(this.readyState === 4 && this.status === 200){
				console.log("Odebrano wiadomość z serwera");
				let servStatus;
				let json = JSON.parse(xhr.responseText);
				console.log(json);
				servStatus = json.Status;
					
				if(servStatus === '1') {
					if(document.getElementById("saveInDBButton")){
						let button = document.getElementById("saveInDBButton");
						button.parentNode.removeChild(button);
					}
					if(document.getElementById("loginMenuPop")){
						let menu = document.getElementById("loginMenuPop");
						menu.parentNode.removeChild(menu);
					}
					document.getElementById("login").textContent = "Login";
						
				}
				else if(servStatus !== '1') {					
					alert("Przykro mi ale nie udało się wylogować sprawdź połącznie z siecią.");
				}
			}
				console.log("On load");
		};
		
		let url = "/paw/serv/logout.php";
		xhr.open('POST', url, true);
		xhr.send();
	}

	static createLoginResponse(messageCode, loginName) {
		
		//destroy login pop window
		if(document.getElementById("loginPop")) {
			let loginWindow = document.getElementById("loginPop");
			loginWindow.parentNode.removeChild(loginWindow);
		}

		//create return message info
		let messageWindow = document.createElement("div");
		messageWindow.id = "messagePop";
		messageWindow.style.position = "absolute";
		messageWindow.style.width = "526px";
		messageWindow.style.height = "250px";
		messageWindow.className = "popBoxShadow";
		messageWindow.style.margin = "auto";
		messageWindow.style.background = "white";
		messageWindow.style.color = "black";
		messageWindow.style.zIndex = "100";
		let content = document.getElementById("content");
		content.appendChild(messageWindow);

		let loginHead = document.createElement("h2");
		
		//switch in future
		if(messageCode === "1") {
			loginHead.textContent = "Zalogowano!";
			document.getElementById("login").textContent = loginName;
		}
		else if(messageCode === "2") {
			loginHead.textContent = "Dodano nowe Konto! Zalogowany!";
			document.getElementById("login").textContent = loginName;
		}
		else if(messageCode === "4") {
			loginHead.textContent = "Nieprawidłowe hasło!";
		}
		else if(messageCode === "5") {
			loginHead.textContent = "Konto nie istnieje, podaj email aby się zarejstrować!";
		}
		else if(messageCode === "99") {
			loginHead.textContent = "Login lub hasło jest puste!";
		}
		else if(messageCode === "100") {
			loginHead.textContent = "Problem z połączenie z bazą danych!";
		}
		else{
			loginHead.textContent = "Nieznany błąd. Przepraszamy!";
		}
		
		messageWindow.appendChild(loginHead);
		
		let button = document.createElement("button");
		button.id="MessageOk";
		button.textContent = "Ok";
		messageWindow.appendChild(button);
		
		document.addEventListener('click', function(e){
				if(e.target && e.target.id === 'MessageOk'){
					e.stopImmediatePropagation();
					if(document.getElementById("messagePop")) {
						let messageWindow = document.getElementById("messagePop");
						messageWindow.parentNode.removeChild(messageWindow);
						if(messageCode === '1' || messageCode === "2" ) {
							
							if(!document.getElementById("saveInDBButton")) {
							
								let saveImageButton = document.createElement("button");
								saveImageButton.id = "saveInDBButton";
								saveImageButton.style.marginLeft = "20px";
								saveImageButton.textContent = "Zapisz Online";
								let parent = document.getElementById("canvasButton");
								parent.appendChild(saveImageButton);	

								document.addEventListener('click', function(e) {
									if(e.target && e.target.id === 'saveInDBButton') {
										e.stopImmediatePropagation();
										saveAndGetCardFromDB.saveCard();										
									}
								}, false);
							}
						}
					}
					console.log("Close message window.");
				}
		}, false);
		
	}

	static tryLoginAjax() {
		//todo nowsza metoda Fetch API
		console.log('Starting Ajax');

		let login = document.getElementById("loginLog").value;
		let password = document.getElementById("passwordLog").value;
		let email = document.getElementById("emailLog").value;
		console.log("Login wpisany to: " + login);

		let loginData = {};
		loginData.login = login;
		loginData.password  = password;
		loginData.email = email;
		var loginDataJSON = JSON.stringify(loginData);
		
		const xhr = new XMLHttpRequest();	
		
		xhr.onload = function() {
			if(this.readyState === 4 && this.status === 200){
				console.log("Odebrano wiadomość z serwera");
				let servStatus;
				let loginName;
				try{
					let json = JSON.parse(xhr.responseText);
					console.log(json);
					servStatus = json.Status;
					loginName = json.Log;
				}
				catch(err) {
                    servStatus = "101";
                    loginName = "";
                    console.error(err);
				} 
				
				Login.createLoginResponse(servStatus, loginName);
			}
				console.log("On load");
		};
		
		let url = "/paw/serv/login.php";
		xhr.open('POST', url, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(loginDataJSON);	
		
		console.log("Send Ajax");
	}
}

const instance = new Login();
export default instance;