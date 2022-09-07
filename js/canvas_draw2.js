// JavaScript Document
/*jshint strict: false */
/*jshint esversion: 6 */
import CanvasIcon from './CanvasIcon.js';
import CanvasText from './CanvasText.js';

import Params from './BuilderCanvasParam.js';
import Second from "./DefaultSecondPatternParams.js";

function drawCanvas2(params){
	var canvas = document.getElementById("card_V");
	canvas.width = 526;
	canvas.height = 300;
	var context = canvas.getContext("2d");	

	context.fillStyle = params.firstBackgroundColor; 
	context.globalAlpha = 1.0;
    context.fillRect(0, 0, 526, 300);
	
	context.lineWidth = 2;

	context.beginPath();
	context.moveTo(260, 76);
	context.lineTo(260, 120);
	context.lineTo(400, 245);
	context.lineTo(400, 80);
	context.closePath();	
	context.strokeStyle = params.secondBackgroundColor;	
	context.stroke();
	context.fillStyle = params.secondBackgroundColor; 
	context.fill();
	
	context.fillStyle = params.thirdBackgroundColor;
    context.rotate(22.5 * Math.PI / 180);
	context.fillRect(336, -230, 300, 430);
	context.setTransform(1, 0, 0, 1, 0, 0);
	
	context.fillStyle = params.fourthBackgroundColor;
	context.fillRect(260, 75, 266, 45);
	
	CanvasIcon.mainIcon2(context, 89, 75, 100);

	context.strokeStyle = params.fourthBackgroundColor;
	context.fillStyle =  params.fourthBackgroundColor; 

	for (let i = 175; i < 300 ; i += 45) {
		context.beginPath();
		context.arc(340, i, 15, 0, 2 * Math.PI);
		context.stroke();
		context.fill();
	}

	CanvasIcon.letterIcon(context, 330, 167, 20, params.firstBackgroundColor); 
	CanvasIcon.locationIcon(context, 340, 216, 8, params.firstBackgroundColor);
	CanvasIcon.phoneIcon(context, 333, 253, 13, params.firstBackgroundColor);

	CanvasText.generateText(context, 139, 200, params.firstLineCompanyName, params.fontSizeCompanyName, params.font, "center", params.fontColorCompanyName);
	CanvasText.generateText(context, 139, 226, params.secondLineCompanyName, params.fontSizeCompanyName, params.font, "center", params.fontColorCompanyName);

	CanvasText.generateText(context, 320, 105, params.name + " " + params.surname, params.fontSizeName, params.font, "left", params.fontColorName);

	CanvasText.generateText(context, 320, 135, params.position, params.fontSizePosition, params.font, "left", params.fontColorPosition);
	
	CanvasText.generateText(context, 440, 178, params.mail, params.fontSizeContactData, params.font, "center", params.fontColorContactData);
	CanvasText.generateText(context, 440, 224, params.localisation, params.fontSizeContactData, params.font, "center", params.fontColorContactData);
	CanvasText.generateText(context, 440, 268, "tel. " + params.phoneNumber, params.fontSizeContactData, params.font, "center", params.fontColorContactData);

	console.log("Drawing second pattern");
}

export default drawCanvas2;