webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var List = __webpack_require__(1);
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(160);
	
	ReactDOM.render(React.createElement(List, null), document.getElementById('root'));

/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(2);
	var styles = __webpack_require__(159);
	
	var List = function (_React$Component) {
	  _inherits(List, _React$Component);
	
	  function List(props) {
	    _classCallCheck(this, List);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(List).call(this, props));
	  }
	
	  _createClass(List, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'p',
	          { className: styles.a },
	          'list'
	        )
	      );
	    }
	  }]);
	
	  return List;
	}(React.Component);
	
	;
	
	module.exports = List;

/***/ },

/***/ 159:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"a":"components-list-a"};

/***/ }

});
//# sourceMappingURL=articles.js.map