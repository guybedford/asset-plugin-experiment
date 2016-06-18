(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.main = global.main || {})));
}(this, function (exports) { 'use strict';

	var url = "http:/static.image-server.com/100x100/test.png";

	var img = document.createElement('img');
	img.src = url;
	document.body.appendChild(img);

	Object.defineProperty(exports, '__esModule', { value: true });

}));