// JavaScript Document
/*jshint strict: false */
/*jshint esversion: 6 */
import Params from './BuilderCanvasParam.js';
import drawPattern1 from './canvas_draw.js';
import drawPattern2 from './canvas_draw2.js';

class DrawCanvas {

    constructor() {

        if(!DrawCanvas.instance){
            this.params = new Params.Builder().default1().build();
            this.pattern = 1;

            DrawCanvas.instance = this;
        }
  
        return DrawCanvas.instance;
    }

    setParams(params) {
        this.params = params;
    }

    getParams() {
        return this.params;
    }

    setPattern(pattern) {
        this.pattern = pattern;
    }

    draw(){

        let drawing;
        if (this.pattern === 1) {
			drawing = drawPattern1;
		} 
        else if (this.pattern === 2) {
			drawing = drawPattern2;
		}

        if (/Edge\/\d./i.test(navigator.userAgent)){
            // This is Microsoft Edge
            setTimeout(function () { 
                drawing(this.params);
                console.log('Drawing for Edge!!!'); 
            }.bind(this), 100);	
        }
        else {
            document.fonts.ready.then(function () {
                console.log('All fonts in use by visible text have loaded.');   
                drawing(this.params);
                console.log('Drawing!!');
            }.bind(this));
        }
    }

	//duży znak zapytania
    setDefaultParams() {
        if(this.pattern === 1) {
            this.params = new Params.Builder().default1().build();
        }
        if(this.pattern === 2) {
            this.params = new Params.Builder().default2().build();
        }
        else {
            this.params = new Params.Builder().default1().build();
        }
    }
  }
  
  const instance = new DrawCanvas();

  export default instance;