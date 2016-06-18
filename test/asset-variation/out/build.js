System.register('asset/test/asset-variation/lang.js', [], function (_export, _context) {
  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', Math.rand() > 0.5 ? 'en-US' : 'en-UK');
    }
  };
});
System.register("asset/test/asset-variation/test-en-UK.png", [], function (_export, _context) {
  'use strict';

  return {
    setters: [],
    execute: function () {
      _export("default", "c3b56b8fbd006bcf95ba349fc4c64650.png");
    }
  };
});
System.register("asset/test/asset-variation/test-en-US.png", [], function (_export, _context) {
  'use strict';

  return {
    setters: [],
    execute: function () {
      _export("default", "dc1c8af21b578f17c91d8213d65c3398.png");
    }
  };
});
System.register('asset/test/asset-variation/main.js', ['./test-#{lang}.png'], function (_export, _context) {
  'use strict';

  var url, img;
  return {
    setters: [function (_testLangPng) {
      url = _testLangPng.default;
    }],
    execute: function () {
      img = document.createElement('img');

      img.src = url;
      document.body.appendChild(img);
    }
  };
});