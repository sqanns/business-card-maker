// JavaScript Document
/*jshint strict: false */
/*jshint esversion: 6 */

import FormService from './FormService.js';
import DrawCanvas from './DrawCanvas.js';
import InitEvents from './InitEvents.js';

(function() {
	FormService.init();
	InitEvents.init();
    DrawCanvas.draw();
})();