// JavaScript Document
/*jshint strict: false */
/*jshint esversion: 6 */

export default class saveAndGetCardFromDB {

	static saveCard() {

		let canvas = document.getElementById("card_V");
		let dataURL = canvas.toDataURL('image/png');

		let login = document.getElementById("login").textContent;
		if(login === "Login") {
			return;
		}

		let cardData = {};
		cardData.login = login;
		cardData.data = dataURL;
		let cardDataJSON = JSON.stringify(cardData);

		const xhr = new XMLHttpRequest();

		xhr.onload = function() {
			if(this.readyState === 4 && this.status === 200){
				console.log("Odebrano wiadomość z serwera");
				let json = JSON.parse(xhr.responseText);
				console.log(json);
				saveAndGetCardFromDB.createSaveResponse(json.Status);
			}
				console.log("On load");
		};

		let url = "/paw/serv/saveCard.php";
		xhr.open('POST', url, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(cardDataJSON);

		console.log("Card Send");
	}

	static createSaveResponse(messageCode){

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

		let saveHead = document.createElement("h2");

		//switch in future
		if(messageCode === "1") {
			saveHead.textContent = "Zapiano Wizytówkę!";
		}
		else{
			saveHead.textContent = "Nie udało się zapisać wizytówki. Przepraszamy!";
		}

		messageWindow.appendChild(saveHead);

		let button = document.createElement("button");
		button.id="MessageOk";
		button.textContent = "Ok";
		messageWindow.appendChild(button);

		document.addEventListener('click', function(e){
				e.stopPropagation();
				if(e.target && e.target.id === 'MessageOk'){
					if(document.getElementById("messagePop")) {
						let messageWindow = document.getElementById("messagePop");
						messageWindow.parentNode.removeChild(messageWindow);
					}
					console.log("Close message window.");
				}
		}, false);
	}
}