(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.main = global.main || {})));
}(this, function (exports) { 'use strict';

	var url = "dc1c8af21b578f17c91d8213d65c3398.png";

	var img = document.createElement('img');
	img.src = url;
	document.body.appendChild(img);

	Object.defineProperty(exports, '__esModule', { value: true });

}));