// JavaScript Document
/*jshint strict: false */
/*jshint esversion: 6 */
import drawCanvas from './canvas_draw.js';

export var bin_img = null;

function bind(){
	if (window.FileReader) {
		var drop;
		window.addEventListener('load', function() {
			drop = document.getElementById('upload');

			function cancel(e) {
				if (e.preventDefault) {
					e.preventDefault();
				}
				return false;
			}

			// Tells the browser that we *can* drop on this target
			drop.addEventListener('dragover', cancel, false);
			drop.addEventListener('dragover', cancel, false);

			drop.addEventListener('drop', function(e) {

				e = e || window.event; // get window.event if e argument missing (in IE)   
				if (e.preventDefault) {
					e.preventDefault();
				} // stops the browser from redirecting off to the image.

				var dt = e.dataTransfer;
				var files = dt.files;
				var file = files[0];
				var reader = new FileReader();

				//attach event handlers here...
				reader.readAsDataURL(file);

				reader.addEventListener('loadend', function(e, file) {
					var bin = this.result;			
					var img = document.getElementById('hidden_img');
					img.src = bin;	

					setTimeout(drawCanvas, 100);
				}.bindToEventHandler(file));
				return false;
			});

			Function.prototype.bindToEventHandler = function bindToEventHandler() {
				var handler = this;
				var boundParameters = Array.prototype.slice.call(arguments);
				console.log(boundParameters);
			//create closure
				return function(e) {
					e = e || window.event; // get window.event if e argument missing (in IE)   
					boundParameters.unshift(e);
					handler.apply(this, boundParameters);
				};
			};
		});
	} 
	else {
			alert('Twoja przegądarka nie wspiera dodawanie plików metodą drag and drop.');
	}
}

bind();