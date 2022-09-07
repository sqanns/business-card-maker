// JavaScript Document
/*jshint strict: false */
/*jshint esversion: 6 */

export default class CanvasIcon {
	
	static letterIcon(ctx, startX, startY, width, strokeColor) {
		
		console.log("Moduł");

		let lineWidth = Math.round(width / 15);
		let previusStrokeStyle = ctx.strokeStyle;

		ctx.strokeStyle = strokeColor;

		ctx.beginPath();
		ctx.moveTo(startX, startY); //left top corner	
		ctx.lineTo(startX + Math.round(width / 2), startY + Math.round(0.5 * width)); //middle
		ctx.lineTo(startX + width, startY); // right top corner
		ctx.lineTo(startX, startY); // top left corner
		ctx.lineTo(startX, startY + Math.round(0.8 * width));// left bottom corner
		ctx.lineTo(startX + width + (lineWidth / 2), startY + Math.round(0.8 * width)); // right bottom corner
		ctx.lineTo(startX + width + (lineWidth / 2), startY - (lineWidth / 2));

		ctx.lineWidth = lineWidth;
		ctx.stroke();

		ctx.strokeStyle = previusStrokeStyle;
	}
	
	static locationIcon(ctx, startX, startY, radius, strokeColor) {
	
		let previusStrokeStyle = ctx.strokeStyle;

		ctx.strokeStyle = strokeColor;	
		ctx.lineWidth = Math.round(radius/7);

		ctx.beginPath();
		ctx.arc(startX, startY, radius, 0.9 * Math.PI, 2.1 * Math.PI, false);
		ctx.lineTo(startX, startY + (2 * radius));
		ctx.closePath();
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(startX, startY, Math.round(radius * 0.6), 0, Math.PI * 2, false);
		ctx.stroke();
		ctx.strokeStyle = previusStrokeStyle;
	}
	
	static phoneIcon(ctx, startX, startY, width, strokeColor){
	
		let previusStrokeStyle = ctx.strokeStyle;	
		ctx.strokeStyle = strokeColor;	

		let cornerRadius = Math.round(width / 5) < 1 ? 1 : Math.round(width / 5);
		ctx.lineWidth = Math.round(width / 15) < 1 ? 1 : Math.round(width / 15);

		//smartphone border
		ctx.beginPath();

		ctx.moveTo(startX + cornerRadius, startY);
		ctx.lineTo((startX + width) - cornerRadius, startY);
		ctx.arcTo(startX + width, startY, startX + width, startY + cornerRadius, cornerRadius);
		ctx.lineTo(startX + width, startY + (1.8 * width) - cornerRadius);
		ctx.arcTo(startX + width, startY + (1.8 * width), (startX + width) - cornerRadius, startY + (1.8 * width), cornerRadius);
		ctx.lineTo(startX + cornerRadius, startY + (1.8 * width));
		ctx.arcTo(startX, startY + (1.8 * width), startX, startY + (1.8 * width) - cornerRadius, cornerRadius);
		ctx.lineTo(startX, startY + cornerRadius);
		ctx.arcTo(startX, startY, startX + cornerRadius, startY, cornerRadius);

		//top horizontal line
		ctx.moveTo(startX, startY + cornerRadius);
		ctx.lineTo(startX + width, startY + cornerRadius);

		//bottom horizontal line
		ctx.moveTo(startX, startY + (1.8 * width) - cornerRadius);
		ctx.lineTo(startX + width, startY + (1.8 * width) - cornerRadius);

		ctx.stroke();

		ctx.strokeStyle = previusStrokeStyle;
	}

	static mainIcon2(ctx1, startX, startY, width) {

		let layerWidth = Math.round(width / 8);
		console.log("Icon runs");
	
		ctx1.fillStyle = "#EC9C28";
		ctx1.fillRect(startX, startY, width, width);
		ctx1.fillStyle = "#27272F";
		ctx1.fillRect(startX + layerWidth, startY + layerWidth, width - (2 * layerWidth), width - (2 * layerWidth));
		ctx1.fillRect(startX + Math.round(width / 2) - layerWidth, startY + width - layerWidth, layerWidth * 2, layerWidth);
		ctx1.fillStyle = "#FCF3ED";
		ctx1.fillRect(startX + (2 * layerWidth), startY + (2 * layerWidth), width - (4 * layerWidth), width - (4 * layerWidth));
		ctx1.fillStyle = "#27272F";
		ctx1.fillRect(startX + (3 * layerWidth), startY + (3 * layerWidth), width - (6 * layerWidth), width - (6 * layerWidth));
	}
}