// JavaScript Document
/*jshint strict: false */
/*jshint esversion: 6 */
import CanvasIcon from './CanvasIcon.js';
import Params from './BuilderCanvasParam.js';
import CanvasText from './CanvasText.js';
import Utility from './UtilityClass.js';

//526x300
function drawCanvas(params){
	var canvas = document.getElementById("card_V");
	canvas.width = 526;
	canvas.height = 300;
	var ctx = canvas.getContext("2d");

	var grd = ctx.createRadialGradient(263, 150, 1, 263, 150, 300);

	grd.addColorStop(0, params.firstBackgroundColor);
	grd.addColorStop(1, Utility.calcEndGradientColor(params.firstBackgroundColor, 1448218)); //new
	ctx.fillStyle = grd;
	ctx.globalAlpha = 1.0;
	ctx.fillRect(0, 0, 526, 300);
	
	var my_gradient = ctx.createLinearGradient(0, 0, 15, 320);
	my_gradient.addColorStop(0, params.secondBackgroundColor);
	my_gradient.addColorStop(1, Utility.calcEndGradientColor(params.secondBackgroundColor, -2370353)); //new
	//my_gradient.addColorStop(1, "#34404C");
	ctx.rotate(-30 * Math.PI / 180);
	
	ctx.fillStyle = my_gradient;
	ctx.fillRect(0, -95, 526, 340);
	
	my_gradient = ctx.createLinearGradient(0, 0, 30, 170);

	ctx.setTransform(1, 0, 0, 1, 0, 0);

	my_gradient = ctx.createLinearGradient(-150, 300, 180, 0);
	my_gradient.addColorStop(0, params.secondBackgroundColor);
	my_gradient.addColorStop(1, Utility.calcEndGradientColor(params.secondBackgroundColor, -2370353)); //new

	ctx.fillStyle = my_gradient;
	ctx.rotate(-30 * Math.PI / 180);
	
	ctx.fillRect(200, 400, 180, 140);
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	
	//lines
	ctx.fillStyle = params.thirdBackgroundColor;	
	ctx.fillRect(195, 0, 1, 40);
	
	//left lines end circles
	ctx.strokeStyle = params.thirdBackgroundColor;
	
	for(let i = 150; i < 300; i += 50){
		ctx.fillRect(0, i, 75, 1);
		ctx.beginPath();
		ctx.arc(75, i, 18, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.fill();
	}
	
	//main icon
	ctx.strokeStyle = "#FFFFFF";
	ctx.strokeRect(305, 115, 70, 68);

	for (let i = 132; i < 180; i += 17){
		ctx.beginPath();
		ctx.moveTo(315, i);
		ctx.lineTo(355, i);
		ctx.stroke();
	}
	
	ctx.beginPath();
	ctx.moveTo(365, 131);
	ctx.lineTo(365, 167);
	ctx.stroke();
	
	CanvasIcon.letterIcon(ctx, 65, 142, 20, params.secondBackgroundColor);	
	CanvasIcon.locationIcon(ctx, 75, 196, 9, params.secondBackgroundColor);	
	CanvasIcon.phoneIcon(ctx, 67, 236, 16, params.secondBackgroundColor);

	CanvasText.generateText(ctx, 195, 80, params.name + " " + params.surname, params.fontSizeName, params.font, "center", params.fontColorName);
	CanvasText.generateText(ctx, 195, 100, params.position, params.fontSizePosition, params.font, "center", params.fontColorPosition, "italic");
	
	CanvasText.generateText(ctx, 195, 155, params.mail, params.fontSizeContactData, params.font, "center", params.fontColorContactData);
	CanvasText.generateText(ctx, 195, 205, params.localisation, params.fontSizeContactData, params.font, "center", params.fontColorContactData);	
	CanvasText.generateText(ctx, 195, 255, "tel. " + params.phoneNumber, params.fontSizeContactData, params.font, "center", params.fontColorContactData);
		
	//Company Name	
	//firstLine
	CanvasText.generateText(ctx, 380, 150, params.firstLineCompanyName, params.fontSizeCompanyName, params.font, "left", params.fontColorCompanyName);
	//secondLine
	CanvasText.generateText(ctx, 380, 180, params.secondLineCompanyName, params.fontSizeCompanyName, params.font, "left", params.fontColorCompanyName);
	
	let background = document.getElementById('hidden_img');
	
	if(background.src)
	{
		console.log({background});
		ctx.drawImage(background, 0, 0, 200, 200); 
	}
	
	console.log("Draw first pattern");
}

export default drawCanvas;