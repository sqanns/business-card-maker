// JavaScript Document
/*jshint strict: false */
/*jshint esversion: 6 */

export default class CanvasText{

	static generateText(ctx, startX, startY, text, size, font, textalign, fillColor, textstyle = "") {
		ctx.font = textstyle + " " + size + "px " + font;
		ctx.textAlign = textalign;
		ctx.fillStyle = fillColor;
		ctx.fillText(text, startX, startY);
	}
}