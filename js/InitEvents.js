// JavaScript Document
/*jshint strict: false */
/*jshint esversion: 6 */

import DownloadCanvas from './DownloadCanvas.js';
import FormService from './FormService.js';
import login from './Login.js';

export default class InitEvents {
	
	static downloadEvent() {
		document.getElementById("downloadCard").addEventListener('click', DownloadCanvas.download, false);
	}	
	
	static resetFormButtonEvent() {
		document.getElementById("resetForms").addEventListener('click', FormService.resetParams, false); //resetForms mainForm
	}
	
	static submitFormButtonEvent() {
		document.getElementById("mainForm").addEventListener('submit', function (e) {e.preventDefault(); FormService.submitParams(); return false;}, false);
	}
	
	static loginButtonEvent() {
		document.getElementById("login").addEventListener('click', function (e) {e.stopPropagation(); login.loginMenu();}, false);
	}

	static init() {
		InitEvents.downloadEvent();
		InitEvents.submitFormButtonEvent();
		InitEvents.resetFormButtonEvent();
		InitEvents.loginButtonEvent();
	}
}