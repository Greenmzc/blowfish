webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(158);
	var styles = __webpack_require__(170);
	var md5 = __webpack_require__(171);
	var ajax = __webpack_require__(175);
	
	var Signup = function (_React$Component) {
	  _inherits(Signup, _React$Component);
	
	  function Signup(props) {
	    _classCallCheck(this, Signup);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Signup).call(this, props));
	
	    _this.state = {
	      username: '',
	      password: ''
	    };
	    return _this;
	  }
	
	  _createClass(Signup, [{
	    key: 'showError',
	    value: function showError() {}
	  }, {
	    key: 'validate',
	    value: function validate() {
	      var state = this.state;
	      if (state.username.length < 1) {
	        this.showError();
	        return false;
	      }
	
	      if (state.password.length < 1 || state.password.length > 12) {
	        this.showError();
	        return false;
	      }
	
	      return true;
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur(type, event) {
	      this.setState(_defineProperty({}, type, event.target.value));
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(event) {
	      if (!this.validate()) {
	        return;
	      }
	
	      ajax('/api/signup', {
	        method: 'POST',
	        headers: undefined,
	        body: JSON.stringify({
	          username: this.state.username,
	          password: md5(this.state.password)
	        })
	      }).then(function (data) {
	        console.log(data);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement('input', { className: styles.name, placeholder: 'username', onBlur: this.handleBlur.bind(this, 'username') }),
	        React.createElement('input', { type: 'password', className: styles.password, onBlur: this.handleBlur.bind(this, 'password'), placeholder: 'password' }),
	        React.createElement(
	          'a',
	          { href: 'javascript:void(0)', className: styles.submit, onClick: this.handleClick.bind(this) },
	          'sign up'
	        )
	      );
	    }
	  }]);
	
	  return Signup;
	}(React.Component);
	
	;
	
	ReactDOM.render(React.createElement(Signup, null), document.getElementById('root'));

/***/ },

/***/ 170:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"username":"apps-signup-username","password":"apps-signup-password","submit":"apps-signup-submit"};

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	(function () {
	  var crypt = __webpack_require__(172),
	      utf8 = __webpack_require__(173).utf8,
	      isBuffer = __webpack_require__(174),
	      bin = __webpack_require__(173).bin,
	
	
	  // The core
	  md5 = function (message, options) {
	    // Convert to byte array
	    if (message.constructor == String) {
	      if (options && options.encoding === 'binary') message = bin.stringToBytes(message);else message = utf8.stringToBytes(message);
	    } else if (isBuffer(message)) message = Array.prototype.slice.call(message, 0);else if (!Array.isArray(message)) message = message.toString();
	    // else, assume byte array already
	
	    var m = crypt.bytesToWords(message),
	        l = message.length * 8,
	        a = 1732584193,
	        b = -271733879,
	        c = -1732584194,
	        d = 271733878;
	
	    // Swap endian
	    for (var i = 0; i < m.length; i++) {
	      m[i] = (m[i] << 8 | m[i] >>> 24) & 0x00FF00FF | (m[i] << 24 | m[i] >>> 8) & 0xFF00FF00;
	    }
	
	    // Padding
	    m[l >>> 5] |= 0x80 << l % 32;
	    m[(l + 64 >>> 9 << 4) + 14] = l;
	
	    // Method shortcuts
	    var FF = md5._ff,
	        GG = md5._gg,
	        HH = md5._hh,
	        II = md5._ii;
	
	    for (var i = 0; i < m.length; i += 16) {
	
	      var aa = a,
	          bb = b,
	          cc = c,
	          dd = d;
	
	      a = FF(a, b, c, d, m[i + 0], 7, -680876936);
	      d = FF(d, a, b, c, m[i + 1], 12, -389564586);
	      c = FF(c, d, a, b, m[i + 2], 17, 606105819);
	      b = FF(b, c, d, a, m[i + 3], 22, -1044525330);
	      a = FF(a, b, c, d, m[i + 4], 7, -176418897);
	      d = FF(d, a, b, c, m[i + 5], 12, 1200080426);
	      c = FF(c, d, a, b, m[i + 6], 17, -1473231341);
	      b = FF(b, c, d, a, m[i + 7], 22, -45705983);
	      a = FF(a, b, c, d, m[i + 8], 7, 1770035416);
	      d = FF(d, a, b, c, m[i + 9], 12, -1958414417);
	      c = FF(c, d, a, b, m[i + 10], 17, -42063);
	      b = FF(b, c, d, a, m[i + 11], 22, -1990404162);
	      a = FF(a, b, c, d, m[i + 12], 7, 1804603682);
	      d = FF(d, a, b, c, m[i + 13], 12, -40341101);
	      c = FF(c, d, a, b, m[i + 14], 17, -1502002290);
	      b = FF(b, c, d, a, m[i + 15], 22, 1236535329);
	
	      a = GG(a, b, c, d, m[i + 1], 5, -165796510);
	      d = GG(d, a, b, c, m[i + 6], 9, -1069501632);
	      c = GG(c, d, a, b, m[i + 11], 14, 643717713);
	      b = GG(b, c, d, a, m[i + 0], 20, -373897302);
	      a = GG(a, b, c, d, m[i + 5], 5, -701558691);
	      d = GG(d, a, b, c, m[i + 10], 9, 38016083);
	      c = GG(c, d, a, b, m[i + 15], 14, -660478335);
	      b = GG(b, c, d, a, m[i + 4], 20, -405537848);
	      a = GG(a, b, c, d, m[i + 9], 5, 568446438);
	      d = GG(d, a, b, c, m[i + 14], 9, -1019803690);
	      c = GG(c, d, a, b, m[i + 3], 14, -187363961);
	      b = GG(b, c, d, a, m[i + 8], 20, 1163531501);
	      a = GG(a, b, c, d, m[i + 13], 5, -1444681467);
	      d = GG(d, a, b, c, m[i + 2], 9, -51403784);
	      c = GG(c, d, a, b, m[i + 7], 14, 1735328473);
	      b = GG(b, c, d, a, m[i + 12], 20, -1926607734);
	
	      a = HH(a, b, c, d, m[i + 5], 4, -378558);
	      d = HH(d, a, b, c, m[i + 8], 11, -2022574463);
	      c = HH(c, d, a, b, m[i + 11], 16, 1839030562);
	      b = HH(b, c, d, a, m[i + 14], 23, -35309556);
	      a = HH(a, b, c, d, m[i + 1], 4, -1530992060);
	      d = HH(d, a, b, c, m[i + 4], 11, 1272893353);
	      c = HH(c, d, a, b, m[i + 7], 16, -155497632);
	      b = HH(b, c, d, a, m[i + 10], 23, -1094730640);
	      a = HH(a, b, c, d, m[i + 13], 4, 681279174);
	      d = HH(d, a, b, c, m[i + 0], 11, -358537222);
	      c = HH(c, d, a, b, m[i + 3], 16, -722521979);
	      b = HH(b, c, d, a, m[i + 6], 23, 76029189);
	      a = HH(a, b, c, d, m[i + 9], 4, -640364487);
	      d = HH(d, a, b, c, m[i + 12], 11, -421815835);
	      c = HH(c, d, a, b, m[i + 15], 16, 530742520);
	      b = HH(b, c, d, a, m[i + 2], 23, -995338651);
	
	      a = II(a, b, c, d, m[i + 0], 6, -198630844);
	      d = II(d, a, b, c, m[i + 7], 10, 1126891415);
	      c = II(c, d, a, b, m[i + 14], 15, -1416354905);
	      b = II(b, c, d, a, m[i + 5], 21, -57434055);
	      a = II(a, b, c, d, m[i + 12], 6, 1700485571);
	      d = II(d, a, b, c, m[i + 3], 10, -1894986606);
	      c = II(c, d, a, b, m[i + 10], 15, -1051523);
	      b = II(b, c, d, a, m[i + 1], 21, -2054922799);
	      a = II(a, b, c, d, m[i + 8], 6, 1873313359);
	      d = II(d, a, b, c, m[i + 15], 10, -30611744);
	      c = II(c, d, a, b, m[i + 6], 15, -1560198380);
	      b = II(b, c, d, a, m[i + 13], 21, 1309151649);
	      a = II(a, b, c, d, m[i + 4], 6, -145523070);
	      d = II(d, a, b, c, m[i + 11], 10, -1120210379);
	      c = II(c, d, a, b, m[i + 2], 15, 718787259);
	      b = II(b, c, d, a, m[i + 9], 21, -343485551);
	
	      a = a + aa >>> 0;
	      b = b + bb >>> 0;
	      c = c + cc >>> 0;
	      d = d + dd >>> 0;
	    }
	
	    return crypt.endian([a, b, c, d]);
	  };
	
	  // Auxiliary functions
	  md5._ff = function (a, b, c, d, x, s, t) {
	    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
	    return (n << s | n >>> 32 - s) + b;
	  };
	  md5._gg = function (a, b, c, d, x, s, t) {
	    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
	    return (n << s | n >>> 32 - s) + b;
	  };
	  md5._hh = function (a, b, c, d, x, s, t) {
	    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
	    return (n << s | n >>> 32 - s) + b;
	  };
	  md5._ii = function (a, b, c, d, x, s, t) {
	    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
	    return (n << s | n >>> 32 - s) + b;
	  };
	
	  // Package private blocksize
	  md5._blocksize = 16;
	  md5._digestsize = 16;
	
	  module.exports = function (message, options) {
	    if (typeof message == 'undefined') return;
	
	    var digestbytes = crypt.wordsToBytes(md5(message, options));
	    return options && options.asBytes ? digestbytes : options && options.asString ? bin.bytesToString(digestbytes) : crypt.bytesToHex(digestbytes);
	  };
	})();

/***/ },

/***/ 172:
/***/ function(module, exports) {

	(function () {
	  var base64map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
	      crypt = {
	    // Bit-wise rotation left
	    rotl: function (n, b) {
	      return n << b | n >>> 32 - b;
	    },
	
	    // Bit-wise rotation right
	    rotr: function (n, b) {
	      return n << 32 - b | n >>> b;
	    },
	
	    // Swap big-endian to little-endian and vice versa
	    endian: function (n) {
	      // If number given, swap endian
	      if (n.constructor == Number) {
	        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
	      }
	
	      // Else, assume array and swap all items
	      for (var i = 0; i < n.length; i++) n[i] = crypt.endian(n[i]);
	      return n;
	    },
	
	    // Generate an array of any length of random bytes
	    randomBytes: function (n) {
	      for (var bytes = []; n > 0; n--) bytes.push(Math.floor(Math.random() * 256));
	      return bytes;
	    },
	
	    // Convert a byte array to big-endian 32-bit words
	    bytesToWords: function (bytes) {
	      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8) words[b >>> 5] |= bytes[i] << 24 - b % 32;
	      return words;
	    },
	
	    // Convert big-endian 32-bit words to a byte array
	    wordsToBytes: function (words) {
	      for (var bytes = [], b = 0; b < words.length * 32; b += 8) bytes.push(words[b >>> 5] >>> 24 - b % 32 & 0xFF);
	      return bytes;
	    },
	
	    // Convert a byte array to a hex string
	    bytesToHex: function (bytes) {
	      for (var hex = [], i = 0; i < bytes.length; i++) {
	        hex.push((bytes[i] >>> 4).toString(16));
	        hex.push((bytes[i] & 0xF).toString(16));
	      }
	      return hex.join('');
	    },
	
	    // Convert a hex string to a byte array
	    hexToBytes: function (hex) {
	      for (var bytes = [], c = 0; c < hex.length; c += 2) bytes.push(parseInt(hex.substr(c, 2), 16));
	      return bytes;
	    },
	
	    // Convert a byte array to a base-64 string
	    bytesToBase64: function (bytes) {
	      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
	        var triplet = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
	        for (var j = 0; j < 4; j++) if (i * 8 + j * 6 <= bytes.length * 8) base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 0x3F));else base64.push('=');
	      }
	      return base64.join('');
	    },
	
	    // Convert a base-64 string to a byte array
	    base64ToBytes: function (base64) {
	      // Remove non-base-64 characters
	      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');
	
	      for (var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) {
	        if (imod4 == 0) continue;
	        bytes.push((base64map.indexOf(base64.charAt(i - 1)) & Math.pow(2, -2 * imod4 + 8) - 1) << imod4 * 2 | base64map.indexOf(base64.charAt(i)) >>> 6 - imod4 * 2);
	      }
	      return bytes;
	    }
	  };
	
	  module.exports = crypt;
	})();

/***/ },

/***/ 173:
/***/ function(module, exports) {

	var charenc = {
	  // UTF-8 encoding
	  utf8: {
	    // Convert a string to a byte array
	    stringToBytes: function (str) {
	      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
	    },
	
	    // Convert a byte array to a string
	    bytesToString: function (bytes) {
	      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
	    }
	  },
	
	  // Binary encoding
	  bin: {
	    // Convert a string to a byte array
	    stringToBytes: function (str) {
	      for (var bytes = [], i = 0; i < str.length; i++) bytes.push(str.charCodeAt(i) & 0xFF);
	      return bytes;
	    },
	
	    // Convert a byte array to a string
	    bytesToString: function (bytes) {
	      for (var str = [], i = 0; i < bytes.length; i++) str.push(String.fromCharCode(bytes[i]));
	      return str.join('');
	    }
	  }
	};
	
	module.exports = charenc;

/***/ },

/***/ 174:
/***/ function(module, exports) {

	/**
	 * Determine if an object is Buffer
	 *
	 * Author:   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * License:  MIT
	 *
	 * `npm install is-buffer`
	 */
	
	module.exports = function (obj) {
	  return !!(obj != null && (obj._isBuffer || // For Safari 5-7 (missing Object.prototype.constructor)
	  obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)));
	};

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(176);
	
	function ajax(url) {
	  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  var _ref$method = _ref.method;
	  var method = _ref$method === undefined ? 'GET' : _ref$method;
	  var _ref$headers = _ref.headers;
	  var headers = _ref$headers === undefined ? { 'Content-Type': 'application/json' } : _ref$headers;
	  var _ref$body = _ref.body;
	  var body = _ref$body === undefined ? '' : _ref$body;
	
	  return fetch(url, {
	    method: method,
	    headers: headers,
	    body: body
	  }).then(function (response) {
	    return response.json();
	  });
	}
	
	module.exports = ajax;

/***/ },

/***/ 176:
/***/ function(module, exports) {

	(function (self) {
	  'use strict';
	
	  if (self.fetch) {
	    return;
	  }
	
	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name);
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name');
	    }
	    return name.toLowerCase();
	  }
	
	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value);
	    }
	    return value;
	  }
	
	  function Headers(headers) {
	    this.map = {};
	
	    if (headers instanceof Headers) {
	      headers.forEach(function (value, name) {
	        this.append(name, value);
	      }, this);
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function (name) {
	        this.append(name, headers[name]);
	      }, this);
	    }
	  }
	
	  Headers.prototype.append = function (name, value) {
	    name = normalizeName(name);
	    value = normalizeValue(value);
	    var list = this.map[name];
	    if (!list) {
	      list = [];
	      this.map[name] = list;
	    }
	    list.push(value);
	  };
	
	  Headers.prototype['delete'] = function (name) {
	    delete this.map[normalizeName(name)];
	  };
	
	  Headers.prototype.get = function (name) {
	    var values = this.map[normalizeName(name)];
	    return values ? values[0] : null;
	  };
	
	  Headers.prototype.getAll = function (name) {
	    return this.map[normalizeName(name)] || [];
	  };
	
	  Headers.prototype.has = function (name) {
	    return this.map.hasOwnProperty(normalizeName(name));
	  };
	
	  Headers.prototype.set = function (name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)];
	  };
	
	  Headers.prototype.forEach = function (callback, thisArg) {
	    Object.getOwnPropertyNames(this.map).forEach(function (name) {
	      this.map[name].forEach(function (value) {
	        callback.call(thisArg, value, name, this);
	      }, this);
	    }, this);
	  };
	
	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'));
	    }
	    body.bodyUsed = true;
	  }
	
	  function fileReaderReady(reader) {
	    return new Promise(function (resolve, reject) {
	      reader.onload = function () {
	        resolve(reader.result);
	      };
	      reader.onerror = function () {
	        reject(reader.error);
	      };
	    });
	  }
	
	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader();
	    reader.readAsArrayBuffer(blob);
	    return fileReaderReady(reader);
	  }
	
	  function readBlobAsText(blob) {
	    var reader = new FileReader();
	    reader.readAsText(blob);
	    return fileReaderReady(reader);
	  }
	
	  var support = {
	    blob: 'FileReader' in self && 'Blob' in self && function () {
	      try {
	        new Blob();
	        return true;
	      } catch (e) {
	        return false;
	      }
	    }(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  };
	
	  function Body() {
	    this.bodyUsed = false;
	
	    this._initBody = function (body) {
	      this._bodyInit = body;
	      if (typeof body === 'string') {
	        this._bodyText = body;
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body;
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body;
	      } else if (!body) {
	        this._bodyText = '';
	      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	        // Only support ArrayBuffers for POST method.
	        // Receiving ArrayBuffers happens via Blobs, instead.
	      } else {
	          throw new Error('unsupported BodyInit type');
	        }
	
	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8');
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type);
	        }
	      }
	    };
	
	    if (support.blob) {
	      this.blob = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }
	
	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob);
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob');
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]));
	        }
	      };
	
	      this.arrayBuffer = function () {
	        return this.blob().then(readBlobAsArrayBuffer);
	      };
	
	      this.text = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }
	
	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob);
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text');
	        } else {
	          return Promise.resolve(this._bodyText);
	        }
	      };
	    } else {
	      this.text = function () {
	        var rejected = consumed(this);
	        return rejected ? rejected : Promise.resolve(this._bodyText);
	      };
	    }
	
	    if (support.formData) {
	      this.formData = function () {
	        return this.text().then(decode);
	      };
	    }
	
	    this.json = function () {
	      return this.text().then(JSON.parse);
	    };
	
	    return this;
	  }
	
	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
	
	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase();
	    return methods.indexOf(upcased) > -1 ? upcased : method;
	  }
	
	  function Request(input, options) {
	    options = options || {};
	    var body = options.body;
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read');
	      }
	      this.url = input.url;
	      this.credentials = input.credentials;
	      if (!options.headers) {
	        this.headers = new Headers(input.headers);
	      }
	      this.method = input.method;
	      this.mode = input.mode;
	      if (!body) {
	        body = input._bodyInit;
	        input.bodyUsed = true;
	      }
	    } else {
	      this.url = input;
	    }
	
	    this.credentials = options.credentials || this.credentials || 'omit';
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers);
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET');
	    this.mode = options.mode || this.mode || null;
	    this.referrer = null;
	
	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests');
	    }
	    this._initBody(body);
	  }
	
	  Request.prototype.clone = function () {
	    return new Request(this);
	  };
	
	  function decode(body) {
	    var form = new FormData();
	    body.trim().split('&').forEach(function (bytes) {
	      if (bytes) {
	        var split = bytes.split('=');
	        var name = split.shift().replace(/\+/g, ' ');
	        var value = split.join('=').replace(/\+/g, ' ');
	        form.append(decodeURIComponent(name), decodeURIComponent(value));
	      }
	    });
	    return form;
	  }
	
	  function headers(xhr) {
	    var head = new Headers();
	    var pairs = xhr.getAllResponseHeaders().trim().split('\n');
	    pairs.forEach(function (header) {
	      var split = header.trim().split(':');
	      var key = split.shift().trim();
	      var value = split.join(':').trim();
	      head.append(key, value);
	    });
	    return head;
	  }
	
	  Body.call(Request.prototype);
	
	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {};
	    }
	
	    this.type = 'default';
	    this.status = options.status;
	    this.ok = this.status >= 200 && this.status < 300;
	    this.statusText = options.statusText;
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
	    this.url = options.url || '';
	    this._initBody(bodyInit);
	  }
	
	  Body.call(Response.prototype);
	
	  Response.prototype.clone = function () {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    });
	  };
	
	  Response.error = function () {
	    var response = new Response(null, { status: 0, statusText: '' });
	    response.type = 'error';
	    return response;
	  };
	
	  var redirectStatuses = [301, 302, 303, 307, 308];
	
	  Response.redirect = function (url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code');
	    }
	
	    return new Response(null, { status: status, headers: { location: url } });
	  };
	
	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;
	
	  self.fetch = function (input, init) {
	    return new Promise(function (resolve, reject) {
	      var request;
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input;
	      } else {
	        request = new Request(input, init);
	      }
	
	      var xhr = new XMLHttpRequest();
	
	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL;
	        }
	
	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL');
	        }
	
	        return;
	      }
	
	      xhr.onload = function () {
	        var status = xhr.status === 1223 ? 204 : xhr.status;
	        if (status < 100 || status > 599) {
	          reject(new TypeError('Network request failed'));
	          return;
	        }
	        var options = {
	          status: status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        };
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options));
	      };
	
	      xhr.onerror = function () {
	        reject(new TypeError('Network request failed'));
	      };
	
	      xhr.open(request.method, request.url, true);
	
	      if (request.credentials === 'include') {
	        xhr.withCredentials = true;
	      }
	
	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob';
	      }
	
	      request.headers.forEach(function (value, name) {
	        xhr.setRequestHeader(name, value);
	      });
	
	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
	    });
	  };
	  self.fetch.polyfill = true;
	})(typeof self !== 'undefined' ? self : this);

/***/ }

});
//# sourceMappingURL=signup.js.map