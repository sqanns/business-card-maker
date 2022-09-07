// JavaScript Document
/*jshint strict: false */
/*jshint esversion: 6 */

import Params from './BuilderCanvasParam.js';
import drawCanvas from './DrawCanvas.js';


export default class FormService {
	
	static init(){
		
		let params = new Params.Builder().default1().build();		
		FormService.setFormParams(params);
		console.log('Init form.');
	}
	
	static getFontFromForm() {
		let e = document.getElementById("font");
		return e.options[e.selectedIndex].value;
	}
	
	static getPatternFromFrom() {
		let e = document.getElementById("pattern");
		return parseInt(e.options[e.selectedIndex].value);
	}
	
	static resetParams() {
		
		let params;
		let value = FormService.getPatternFromFrom();
		console.log('Zaczynam Restować');
		if(value === 1) {
			params = new Params.Builder().default1().build();
		}
		else if(value === 2) {
			params = new Params.Builder().default2().build();
		}		
		FormService.setFormParams(params);
		console.log('Resetuje');
		drawCanvas.setPattern(value);
		drawCanvas.setParams(params);				
		drawCanvas.draw();
		console.log("Draw after reset");
	}
	
	static setFormParams(params) {
		
		document.getElementById("firstBackgroundColor").value = params.firstBackgroundColor;
		document.getElementById("secondBackgroundColor").value = params.secondBackgroundColor;
		document.getElementById("thirdBackgroundColor").value = params.thirdBackgroundColor;
		document.getElementById("fourthBackgroundColor").value = params.fourthBackgroundColor;
		document.getElementById("font").value = params.font;
		document.getElementById("fontColorCompanyName").value = params.fontColorCompanyName;
		document.getElementById("fontColorName").value = params.fontColorName;
		document.getElementById("fontColorPosition").value = params.fontColorPosition;
		document.getElementById("fontColorContactData").value = params.fontColorContactData;
		document.getElementById("fontSizeCompanyName").value = params.fontSizeCompanyName;
		document.getElementById("fontSizeName").value = params.fontSizeName;
		document.getElementById("fontSizeContactData").value = params.fontSizeContactData;
		document.getElementById("fontSizePosition").value = params.fontSizePosition;
		
		document.getElementById("firstLineCompanyName").value = params.firstLineCompanyName;
		document.getElementById("secondLineCompanyName").value = params.secondLineCompanyName;
		document.getElementById("name").value = params.name;
		document.getElementById("surname").value = params.surname;
		document.getElementById("position").value = params.position;
		document.getElementById("mail").value = params.mail;
		document.getElementById("localisation").value = params.localisation;
		document.getElementById("phoneNumber").value = params.phoneNumber;
		
	}
	
	static submitParams()
	{
		//e.preventDefault();
		
		let params = new Params.Builder()
            .setFirstBackgroundColor(document.getElementById("firstBackgroundColor").value)
            .setSecondBackgroundColor(document.getElementById("secondBackgroundColor").value)
            .setThirdBackgroundColor(document.getElementById("thirdBackgroundColor").value)
            .setFourthBackgroundColor(document.getElementById("fourthBackgroundColor").value)
            .setFont(FormService.getFontFromForm())
            .setFontColorCompanyName(document.getElementById("fontColorCompanyName").value)
            .setFontColorName(document.getElementById("fontColorName").value)
            .setFontColorPosition(document.getElementById("fontColorPosition").value)
            .setFontColorContactData(document.getElementById("fontColorContactData").value)
            .setFontSizeCompanyName(document.getElementById("fontSizeCompanyName").value)
            .setFontSizeName(document.getElementById("fontSizeName").value)
            .setFontSizeContactData(document.getElementById("fontSizeContactData").value)
			.setFontSizePosition(document.getElementById("fontSizePosition").value)
            .setFirstLineCompanyName(document.getElementById("firstLineCompanyName").value)
            .setSecondLineCompanyName(document.getElementById("secondLineCompanyName").value)
            .setName(document.getElementById("name").value)
            .setSurname(document.getElementById("surname").value)
            .setPosition(document.getElementById("position").value )
            .setMail(document.getElementById("mail").value)
            .setLocalisation(document.getElementById("localisation").value)
            .setPhoneNumber(document.getElementById("phoneNumber").value)
            .build();
		
		console.log(document.getElementById("fontSizeName").value);
		console.log(params.fontSizeName);
		
		drawCanvas.setPattern(FormService.getPatternFromFrom());
		
		drawCanvas.setParams(params);		
		console.log("Zatwierdzono paremetry");
		drawCanvas.draw();
	}
	
	static getFormParams(){
		let params = null;
	}

}
