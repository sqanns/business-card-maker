// JavaScript Document
/*jshint strict: false */
/*jshint esversion: 6 */

class DownloadCanvas {
	
	constructor() {
		if(!DownloadCanvas.instance){
            this.pattern = 1;
            DownloadCanvas.instance = this;
        }
		return DownloadCanvas.instance;
	}	
	
	download(){
		let canvas = document.getElementById("card_V");
		document.getElementById("downloadCard").href = canvas.toDataURL('image/png');
	}
}

const instance = new DownloadCanvas();
Object.freeze(instance);

export default instance;