// JavaScript Document
/*jshint strict: false */
/*jshint esversion: 6 */

export default class Delete {

	static tryDeleteUserAjax() {
		console.log('Starting Ajax');

		let loginData = {};
		loginData.login = document.getElementById("login").textContent;
		var loginDataJSON = JSON.stringify(loginData);

		const xhr = new XMLHttpRequest();

		xhr.onload = function() {
			if(this.readyState === 4 && this.status === 200){
				console.log("Odebrano wiadomość z serwera");
				let servStatus;
				let logout;
				try{
					let json = JSON.parse(xhr.responseText);
					console.log(json);
					servStatus = json.Status;
					logout = json.logout;
				}
				catch(err) {
				    servStatus = "0";
					console.error(err);
				}

				Delete.responseToDeleteUser(servStatus);
			}
			console.log("On load");
		};

		let url = "/paw/serv/deleteAccount.php";
		xhr.open('POST', url, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(loginDataJSON);

		console.log("Send Ajax");
	}

	static responseToDeleteUser(messageCode) {
		//destroy login pop window
		if(document.getElementById("delMessagePop")) {
			let loginWindow = document.getElementById("loginPop");
			loginWindow.parentNode.removeChild(loginWindow);
		}
		//create return message info
		let messageWindow = document.createElement("div");
		messageWindow.id = "delMessagePop";
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

		let messageHead = document.createElement("h2");

		if(messageCode === "1") {
			messageHead.textContent = "Pomyślnie usunięto konto wraz z zapisanymi danymi.";
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
		else{
			messageHead.textContent = "Nie udało się usunąć konta. Przepraszamy!";
		}

		messageWindow.appendChild(messageHead);

		let button = document.createElement("button");
		button.id="OkMessage";
		button.textContent = "OK";
		messageWindow.appendChild(button);

		document.addEventListener('click', function(e){
				if(e.target && e.target.id === 'OkMessage'){
					e.stopImmediatePropagation();
					if(document.getElementById("delMessagePop")) {
						let messageWindow = document.getElementById("delMessagePop");
						messageWindow.parentNode.removeChild(messageWindow);
						console.log("OkMessage activ");
					}
				}
		}, false);
	}
}