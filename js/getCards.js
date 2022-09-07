// JavaScript Document
/*jshint strict: false */
/*jshint esversion: 6 */

export default class getCards {

	static getAllUserCardsAjax() {

		let loginData = {};
		loginData.login = document.getElementById("login").textContent;
		let loginDataJSON = JSON.stringify(loginData);

		const xhr = new XMLHttpRequest();

		xhr.onload = function() {
			if(this.readyState === 4 && this.status === 200){
				console.log("Odebrano wiadomość z serwera");
				let json = JSON.parse(xhr.responseText);
				console.log(json);
				//servStatus = json.Status;
				getCards.displayAllSavedCards(json.Status, json);
				//console.log(json.arr);
			}
				console.log("On load");
		};

		let url = "/paw/serv/allSavedCards.php";
		xhr.open('POST', url, true);
		xhr.send(loginDataJSON);
	}

	static displayAllSavedCards(messageStatus, jsondata) {

		if(document.getElementById("loginMenuPop")) {
			let loginMenuWindow = document.getElementById("loginMenuPop");
			loginMenuWindow.parentNode.removeChild(loginMenuWindow);
		}

		if(messageStatus === '2') {
			alert("Ups. Nie masz zapisanych żadnych wizytówek.");
			return;
		}
		else if(messageStatus !== '1') {
			alert("Ups. Coś poszło nie tak przy pobieraniu wizytówek");
			return;
		}

		//create return message info
		let cardWindow = document.createElement("div");
		cardWindow.id = "cardWindow";

		cardWindow.style.display = "block";
		cardWindow.style.position = "absolute";
		cardWindow.style.width = "545px";
		cardWindow.style.height = "80vh";
		cardWindow.className = "popBoxShadow";
		cardWindow.style.margin = "auto";
		cardWindow.style.background = "white";
		cardWindow.style.overflow = "auto";
		cardWindow.style.textAlign = "center";
		cardWindow.style.color = "black";
		cardWindow.style.zIndex = "100";

		let content = document.getElementById("content");
		content.appendChild(cardWindow);

		let button = document.createElement("button");
			button.id="cardWindowExit";
			button.textContent = "x";
			button.style.position = "absolute";
			button.style.top = "0";
			button.style.right = "0";
			cardWindow.appendChild(button);

		document.addEventListener('click', function(e){
			if(e.target && e.target.id === 'cardWindowExit'){
				e.stopImmediatePropagation();

				if(document.getElementById("cardWindow")){
					let windowCard = document.getElementById("cardWindow");
					windowCard.parentNode.removeChild(windowCard);
				}
			}
		}, false);

		jsondata.cards.forEach(element => {

			let link = document.createElement("a");
			link.href = element.data;
			link.setAttribute("download", "Card.png");
			link.title="Kliknij by pobrać";
			cardWindow.appendChild(link);

			let image = document.createElement("img");
			image.style.display = "block";
			image.style.zIndex = "102";
			image.src = element.data;
			link.appendChild(image);

			let delButton = document.createElement("button");
			delButton.id = element.Id + "bd";
			delButton.style.display = "inline-block";
			delButton.style.zIndex = "102";
			delButton.style.height = "35px";
			delButton.style.margin = "10px";
			delButton.style.marginTop = "5px";
			delButton.style.padding = "7px";
			delButton.className = "delCard";
			delButton.textContent = "Usuń";

			cardWindow.appendChild(delButton);

			let hr = document.createElement("hr");
			hr.style.height = "5px";
			hr.style.backgroundColor = "#20483F";
			cardWindow.appendChild(hr);

			return;
		});

		//let allButtons = document.querySelectorAll('div[class=delCard]');

		//for (let i = 0; i < allButtons.length; i++) {
		document.addEventListener('click', function(e){
			if(e.target && e.target.className === 'delCard'){
				e.stopImmediatePropagation();

				getCards.deleteCard(e.target.id);
/*				loginWindow = document.getElementById("loginPop");
				loginWindow.parentNode.removeChild(loginWindow);*/
			}
		}, false);
	}

	static deleteCard(id) {

		let ID = id.substring(0, id.length - 2);

		let sendData = {};
		sendData.id = ID;
		let sendDataJSON = JSON.stringify(sendData);

		const xhr = new XMLHttpRequest();

		xhr.onload = function() {
			if(this.readyState === 4 && this.status === 200){
				console.log("Odebrano wiadomość z serwera");
				let json = JSON.parse(xhr.responseText);
				console.log(json);
				//servStatus = json.Status;
				if(json.Status === '1') {
					if(document.getElementById("cardWindow"))
					{
						let cardWindows = document.getElementById("cardWindow");
						cardWindows.parentNode.removeChild(cardWindows);
					}
					alert("Usunięto wizytówkę");
				}
				else { alert("Przykro mi, ale nie udało się usunąć wizytówki."); }
			}
			console.log("On load");
		};

		let url = "/paw/serv/delCards.php";
		xhr.open('POST', url, true);
		xhr.send(sendDataJSON);
	}

}
