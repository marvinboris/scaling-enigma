(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./resources/js/src/assets/images/Group 687@2x.png":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/images/Group 687@2x.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/Group 687@2x.png?210927c1eb9dc03fe98c6ff797539c4a";

/***/ }),

/***/ "./resources/js/src/assets/images/Group 688@2x.png":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/images/Group 688@2x.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/Group 688@2x.png?881a3b5b5cff3f68492a4f13875589d4";

/***/ }),

/***/ "./resources/js/src/assets/images/Group 689@2x.png":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/images/Group 689@2x.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/Group 689@2x.png?a69717360db0a831d2d93c946ede3e7c";

/***/ }),

/***/ "./resources/js/src/components/Error/Error.js":
/*!****************************************************!*\
  !*** ./resources/js/src/components/Error/Error.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var err = _ref.err;
  return err ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert alert-danger"
  }, err.message ? err.message : err) : null;
});

/***/ }),

/***/ "./resources/js/src/components/Feedback/Feedback.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/components/Feedback/Feedback.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var message = _ref.message;
  return message ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
    color: message.type
  }, message.content) : null;
});

/***/ }),

/***/ "./resources/js/src/components/UI/Input/Input.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/components/UI/Input/Input.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utility */ "./resources/js/src/shared/utility.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var icon = _ref.icon,
      addon = _ref.addon,
      onChange = _ref.onChange,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      name = _ref.name,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      required = _ref.required,
      readonly = _ref.readonly,
      placeholder = _ref.placeholder,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      _ref$validation = _ref.validation,
      validation = _ref$validation === void 0 ? {} : _ref$validation,
      append = _ref.append,
      children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      touched = _useState2[0],
      setTouched = _useState2[1];

  var inputChangedHandler = function inputChangedHandler(e) {
    setTouched(true);
    onChange(e);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
    className: "bg-white",
    size: "lg"
  }, addon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
    addonType: "prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupText"], {
    className: "bg-transparent border-light rounded-pill rounded-right-0 px-4"
  }, addon)) : null, children ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CustomInput"], {
    valid: touched && Object(_shared_utility__WEBPACK_IMPORTED_MODULE_2__["checkValidity"])(value, validation),
    invalid: touched && !Object(_shared_utility__WEBPACK_IMPORTED_MODULE_2__["checkValidity"])(value, validation),
    onChange: inputChangedHandler,
    type: type,
    id: name,
    name: name,
    required: required,
    readOnly: readonly,
    value: value,
    className: "bg-white rounded-pill " + (addon ? 'rounded-left-0' : '') + " border-light text-small text-secondary h-100 px-4 py-3",
    placeholder: placeholder
  }, children) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    valid: touched && Object(_shared_utility__WEBPACK_IMPORTED_MODULE_2__["checkValidity"])(value, validation),
    invalid: touched && !Object(_shared_utility__WEBPACK_IMPORTED_MODULE_2__["checkValidity"])(value, validation),
    onChange: inputChangedHandler,
    type: type,
    name: name,
    required: required,
    readOnly: readonly,
    value: value,
    className: "bg-transparent rounded-pill " + (addon ? 'rounded-left-0' : '') + " border-light text-small text-secondary h-100 px-4 py-3",
    placeholder: placeholder
  }), append ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
    addonType: "append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupText"], {
    className: "bg-transparent border-0 text-secondary text-small px-4"
  }, append)) : null));
});

/***/ }),

/***/ "./resources/js/src/components/UI/TinyMCE/TinyMCE.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/components/UI/TinyMCE/TinyMCE.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tinymce/tinymce-react */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var name = _ref.name,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      onChange = _ref.onChange;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1__["Editor"], {
    apiKey: process.env.TINY_API_KEY,
    cloudChannel: "5-stable",
    onChange: onChange,
    tagName: "div",
    textareaName: name,
    value: value
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./resources/js/src/containers/Request/Request.js":
/*!********************************************************!*\
  !*** ./resources/js/src/containers/Request/Request.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/UI/Button/BetweenButton/BetweenButton */ "./resources/js/src/components/UI/Button/BetweenButton/BetweenButton.js");
/* harmony import */ var _components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/UI/Input/Input */ "./resources/js/src/components/UI/Input/Input.js");
/* harmony import */ var _components_UI_CustomSpinner_CustomSpinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/UI/CustomSpinner/CustomSpinner */ "./resources/js/src/components/UI/CustomSpinner/CustomSpinner.js");
/* harmony import */ var _components_Error_Error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Error/Error */ "./resources/js/src/components/Error/Error.js");
/* harmony import */ var _components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Feedback/Feedback */ "./resources/js/src/components/Feedback/Feedback.js");
/* harmony import */ var _components_UI_TinyMCE_TinyMCE__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/UI/TinyMCE/TinyMCE */ "./resources/js/src/components/UI/TinyMCE/TinyMCE.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/actions */ "./resources/js/src/store/actions/index.js");
/* harmony import */ var _assets_images_Group_687_2x_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/images/Group 687@2x.png */ "./resources/js/src/assets/images/Group 687@2x.png");
/* harmony import */ var _assets_images_Group_687_2x_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_images_Group_687_2x_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_images_Group_688_2x_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/images/Group 688@2x.png */ "./resources/js/src/assets/images/Group 688@2x.png");
/* harmony import */ var _assets_images_Group_688_2x_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_images_Group_688_2x_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_images_Group_689_2x_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../assets/images/Group 689@2x.png */ "./resources/js/src/assets/images/Group 689@2x.png");
/* harmony import */ var _assets_images_Group_689_2x_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_images_Group_689_2x_png__WEBPACK_IMPORTED_MODULE_16__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















var FormBlock = function FormBlock(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "text-darkblue"
  }, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "text-danger text-300"
  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-secondary text-300"
  }, subtitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mt-4"
  }, children));
};

var Request = /*#__PURE__*/function (_Component) {
  _inherits(Request, _Component);

  var _super = _createSuper(Request);

  function Request() {
    var _this;

    _classCallCheck(this, Request);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      name: '',
      platform_id: '',
      email: '',
      ref: '',
      country: 'CM',
      code: '237',
      phone: '',
      issue_id: '',
      documents: [null, null, null],
      description: '',
      issue_files: [null, null, null],
      countries: []
    });

    _defineProperty(_assertThisInitialized(_this), "documentClickHandler", function (index) {
      return document.getElementsByClassName('documents')[index].click();
    });

    _defineProperty(_assertThisInitialized(_this), "issueFileClickHandler", function (index) {
      return document.getElementsByClassName('issue_files')[index].click();
    });

    _defineProperty(_assertThisInitialized(_this), "inputChangeHandler", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value,
          files = _e$target.files,
          targetElm = _e$target.targetElm,
          tabIndex = _e$target.tabIndex;

      if (targetElm) {
        document.getElementById(targetElm.id).value = e.target.getContent();
        return _this.setState(_defineProperty({}, targetElm.name, e.target.getContent()));
      }

      if (name === 'phone') return !isNaN(value) && _this.setState(_defineProperty({}, name, value));
      if (name === 'country') return _this.setState({
        country: value,
        code: _this.state.countries.find(function (_ref2) {
          var country = _ref2.country;
          return country === value;
        }).code
      });

      if (name === 'documents[]') {
        var documents = _this.state.documents;

        if (files[0].size <= 300 * 1024) {
          documents[tabIndex] = files[0];
          return _this.setState({
            documents: documents
          });
        }

        documents[tabIndex] = null;
        return _this.setState({
          documents: documents
        }, function () {
          document.getElementsByClassName('documents')[tabIndex].value = "";
          var btn = $('.documents-btn').eq(tabIndex);
          btn.removeClass('btn-light').addClass('btn-danger');
          return setTimeout(function () {
            btn.removeClass('btn-danger').addClass('btn-light');
          }, 5000);
        });
      }

      if (name === 'issue_files[]') {
        var issue_files = _this.state.issue_files;

        if (files[0].size <= 100 * 1024) {
          issue_files[tabIndex] = files[0];
          return _this.setState({
            issue_files: issue_files
          });
        }

        issue_files[tabIndex] = null;
        return _this.setState({
          issue_files: issue_files
        }, function () {
          document.getElementsByClassName('issue_files')[tabIndex].value = "";
          var btn = $('.issue_files-btn').eq(tabIndex);
          btn.removeClass('btn-light').addClass('btn-danger');
          return setTimeout(function () {
            btn.removeClass('btn-danger').addClass('btn-light');
          }, 5000);
        });
      }

      _this.setState(_defineProperty({}, name, value));
    });

    _defineProperty(_assertThisInitialized(_this), "submitHandler", function (e) {
      e.preventDefault();

      _this.props.onPostRequest(e.target);
    });

    return _this;
  }

  _createClass(Request, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var cors, phoneRes, namesRes, phone, names, countries;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.props.onGetRequest();
                cors = 'https://cors-anywhere.herokuapp.com/';
                _context.next = 4;
                return fetch(cors + 'http://country.io/phone.json', {
                  method: 'GET',
                  mode: 'cors'
                });

              case 4:
                phoneRes = _context.sent;
                _context.next = 7;
                return fetch(cors + 'http://country.io/names.json', {
                  method: 'GET',
                  mode: 'cors'
                });

              case 7:
                namesRes = _context.sent;
                _context.next = 10;
                return phoneRes.json();

              case 10:
                phone = _context.sent;
                _context.next = 13;
                return namesRes.json();

              case 13:
                names = _context.sent;
                countries = Object.keys(phone).map(function (key) {
                  return {
                    country: key,
                    code: phone[key],
                    name: names[key]
                  };
                }).sort(function (a, b) {
                  return a.name > b.name;
                });
                this.setState({
                  countries: countries
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.frontend.request.error && this.props.frontend.request.error) {
        window.scrollTo(0, 0);
        this.setState({
          documents: [null, null, null],
          issue_files: [null, null, null]
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          name = _this$state.name,
          platform_id = _this$state.platform_id,
          email = _this$state.email,
          ref = _this$state.ref,
          phone = _this$state.phone,
          issue_id = _this$state.issue_id,
          country = _this$state.country,
          code = _this$state.code,
          documents = _this$state.documents,
          description = _this$state.description,
          issue_files = _this$state.issue_files,
          countries = _this$state.countries;
      var _this$props$frontend$ = this.props.frontend.request,
          loading = _this$props$frontend$.loading,
          error = _this$props$frontend$.error,
          message = _this$props$frontend$.message,
          platforms = _this$props$frontend$.platforms,
          issues = _this$props$frontend$.issues,
          reqid = _this$props$frontend$.reqid,
          refs = _this$props$frontend$.refs;
      var redirect;
      var errors;
      var content;
      if (loading || countries.length === 0) content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_CustomSpinner_CustomSpinner__WEBPACK_IMPORTED_MODULE_9__["default"], null);else {
        errors = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Error_Error__WEBPACK_IMPORTED_MODULE_10__["default"], {
          err: error
        });
        var feedback = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_11__["default"], {
          message: message
        });
        if (reqid) redirect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Redirect"], {
          to: '/request/success'
        });

        if (platforms && issues) {
          var platformsOptions = platforms.map(function (_ref3) {
            var id = _ref3.id,
                name = _ref3.name;
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
              key: name + id,
              value: id
            }, name);
          });
          var countriesOptions = countries.map(function (_ref4) {
            var country = _ref4.country,
                code = _ref4.code,
                name = _ref4.name;
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
              key: country,
              value: country,
              code: code
            }, name);
          });
          var issuesOptions = issues.map(function (_ref5) {
            var id = _ref5.id,
                name = _ref5.name;
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
              key: name + id,
              value: id
            }, name);
          });
          var documentInputs = !refs.map(function (item) {
            return item.ref;
          }).includes(ref) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "file",
            name: "documents[]",
            onChange: this.inputChangeHandler,
            required: true,
            accept: ".png,.jpg,.jpeg",
            tabIndex: 0,
            className: "d-none documents"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "file",
            name: "documents[]",
            onChange: this.inputChangeHandler,
            required: true,
            accept: ".png,.jpg,.jpeg",
            tabIndex: 1,
            className: "d-none documents"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "file",
            name: "documents[]",
            onChange: this.inputChangeHandler,
            required: true,
            accept: ".png,.jpg,.jpeg",
            tabIndex: 2,
            className: "d-none documents"
          }));
          var documentsContent;
          if (refs.map(function (item) {
            return item.ref;
          }).includes(ref)) documentsContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, refs.find(function (item) {
            return item.ref === ref;
          }).documents.map(function (d, index) {
            var type = d.type;
            var icon;

            switch (type) {
              case 'application/pdf':
                icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFilePdf"];
                break;

              default:
                icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFileImage"];
                break;
            }

            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              xl: 4,
              className: "pt-3 pt-xl-0",
              key: Math.random()
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              className: "rounded-4 overflow-hidden p-2 bg-success d-flex justify-content-center align-items-center text-nowrap text-transparent shadow position-relative embed-responsive embed-responsive-1by1"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
              icon: icon,
              size: "5x",
              className: "text-border position-absolute",
              style: {
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)'
              }
            })));
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            xs: 12,
            className: "pt-3"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
            color: "success"
          }, "You have already uploaded approved documents")));else documentsContent = documents.map(function (d, index) {
            if (!d) {
              var backgrounds = [_assets_images_Group_687_2x_png__WEBPACK_IMPORTED_MODULE_14___default.a, _assets_images_Group_688_2x_png__WEBPACK_IMPORTED_MODULE_15___default.a, _assets_images_Group_689_2x_png__WEBPACK_IMPORTED_MODULE_16___default.a];
              return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
                xl: 4,
                className: "pt-3 pt-xl-0",
                key: Math.random()
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                color: "light",
                style: {
                  backgroundImage: 'url("' + backgrounds[index] + '")',
                  backgroundSize: '90% 90%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                },
                onClick: function onClick() {
                  return _this2.documentClickHandler(index);
                },
                className: "documents-btn rounded-4 border overflow-hidden p-2 d-flex justify-content-center align-items-center text-nowrap text-transparent position-relative embed-responsive embed-responsive-1by1"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFilePdf"],
                className: "mr-2"
              }), "NID_45094M"));
            }

            var type = d.type,
                name = d.name;
            var icon;

            switch (type) {
              case 'application/pdf':
                icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFilePdf"];
                break;

              default:
                icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFileImage"];
                break;
            }

            var arr = name.split('.');
            var formatlessName = arr.filter(function (n, i) {
              return i < arr.length - 1;
            }).join('.');
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              xl: 4,
              className: "pt-3 pt-xl-0",
              key: name + Math.random()
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              onClick: function onClick() {
                return _this2.documentClickHandler(index);
              },
              style: {
                cursor: 'pointer'
              },
              className: "rounded-4 overflow-hidden p-2 bg-success d-flex justify-content-center align-items-center text-nowrap text-transparent shadow position-relative embed-responsive embed-responsive-1by1"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
              icon: icon,
              size: "5x",
              className: "text-border position-absolute",
              style: {
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)'
              }
            })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              className: "text-uppercase text-truncate pt-3 text-darkblue"
            }, formatlessName));
          });
          var issueFilesContent = issue_files.map(function (i, index) {
            if (!i) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              key: Math.random(),
              className: "pr-3 pt-3 pt-xl-0 d-inline-block"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              color: "light",
              onClick: function onClick() {
                return _this2.issueFileClickHandler(index);
              },
              className: "issue_files-btn border rounded-2 p-2 text-truncate text-nowrap"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
              className: "text-dark"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPaperclip"],
              className: "mr-2"
            }), "Attach a file")));
            var type = i.type,
                name = i.name;
            var icon;

            switch (type) {
              case 'application/pdf':
                icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFilePdf"];
                break;

              default:
                icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFileImage"];
                break;
            }

            var arr = name.split('.');
            var formatlessName = arr.filter(function (n, i) {
              return i < arr.length - 1;
            }).join('.');
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              key: name + Math.random(),
              className: "pr-3 pt-3 pt-xl-0 d-inline-block",
              style: {
                maxWidth: 200
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              style: {
                cursor: 'pointer'
              },
              onClick: function onClick() {
                return _this2.issueFileClickHandler(index);
              },
              className: "rounded-2 p-2 bg-success text-dark text-uppercase text-truncate text-nowrap"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
              icon: icon,
              className: "mr-2"
            }), formatlessName));
          });
          content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
            onSubmit: this.submitHandler,
            encType: "multipart/form-data"
          }, feedback, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormBlock, {
            title: "User info Gathering",
            subtitle: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Please provide the information below. Note that all fields are ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
              className: "text-danger"
            }, "required"), " in this section.")
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
            className: "col-xl-9 px-0"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: "col-md-6",
            type: "text",
            onChange: this.inputChangeHandler,
            value: name,
            validation: {
              required: true
            },
            name: "name",
            placeholder: "Full Name",
            required: true
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: "col-md-6",
            type: "select",
            onChange: this.inputChangeHandler,
            value: platform_id,
            validation: {
              required: true,
              isNumeric: true
            },
            name: "platform_id",
            placeholder: "Select Platform",
            required: true
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", null, "Select Platform"), platformsOptions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: "col-md-6",
            type: "email",
            onChange: this.inputChangeHandler,
            value: email,
            validation: {
              required: true,
              isEmail: true
            },
            name: "email",
            placeholder: "E-Mail Address",
            required: true
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: "col-md-6",
            type: "text",
            onChange: this.inputChangeHandler,
            value: ref,
            validation: {
              required: platform_id != 3,
              minLength: platform_id != 3 ? 6 : null,
              maxLength: platform_id != 3 ? 6 : null
            },
            name: "ref",
            placeholder: "User ID",
            required: platform_id != 3
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: "col-md-6",
            type: "select",
            addon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
              className: "text-secondary text-small d-inline-flex"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              className: "rounded-circle overflow-hidden position-relative d-flex justify-content-center align-items-center",
              style: {
                width: 30,
                height: 30
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
              className: "flag-icon text-xx-large position-absolute flag-icon-".concat(country.toLowerCase())
            }))),
            onChange: this.inputChangeHandler,
            value: country,
            validation: {
              required: true
            },
            name: "country",
            required: true,
            placeholder: "Select Country"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", null, "Select your country"), countriesOptions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "hidden",
            value: code,
            name: "code"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
            type: "tel",
            className: "col-md-6",
            addon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
              className: "text-secondary text-small"
            }, "+", code),
            onChange: this.inputChangeHandler,
            value: phone,
            validation: {
              required: true,
              isNumeric: true
            },
            name: "phone",
            required: true,
            placeholder: "Phone Number"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: "col-md-6",
            type: "select",
            onChange: this.inputChangeHandler,
            value: issue_id,
            validation: {
              required: true,
              isNumeric: true
            },
            name: "issue_id",
            placeholder: "Select Issue",
            required: true
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", null, "Select Issue"), issuesOptions))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormBlock, {
            title: "User documents",
            subtitle: "Please upload recommended documents"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            xl: 9,
            className: "px-0"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, documentsContent), documentInputs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "text-danger"
          }, "Only PNG, JPG, JPEG files are allowed and limited to 3 files maximum. 300 kB max/file."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormBlock, {
            title: "Issue description",
            subtitle: "Please provide a detailed description of the problem you are facing"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            xl: 9,
            className: "px-0"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
            className: "px-0 col-xl-9"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
            type: "textarea",
            onChange: this.inputChangeHandler,
            value: description,
            validation: {
              required: true
            },
            name: "description",
            style: {
              height: 250
            },
            className: "border-light text-secondary"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, issueFilesContent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "file",
            name: "issue_files[]",
            onChange: this.inputChangeHandler,
            accept: ".png,.jpg,.jpeg,.pdf",
            tabIndex: 0,
            className: "d-none issue_files"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "file",
            name: "issue_files[]",
            onChange: this.inputChangeHandler,
            accept: ".png,.jpg,.jpeg,.pdf",
            tabIndex: 1,
            className: "d-none issue_files"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "file",
            name: "issue_files[]",
            onChange: this.inputChangeHandler,
            accept: ".png,.jpg,.jpeg,.pdf",
            tabIndex: 2,
            className: "d-none issue_files"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "text-danger"
          }, "Only PDF, PNG, JPG, JPEG files are allowed and limited to 3 files maximum. 100 kB max/file."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            xl: 9,
            className: "pt-3"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
            color: "danger"
          }, "Be sure to provide all of the required documents above before submitting your request."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
            className: "pl-2 my-md-5 text-secondary text-left"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
            check: true
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CustomInput"], {
            color: "yellow",
            type: "checkbox",
            id: "terms",
            name: "terms",
            label: "Accept terms and conditions",
            inline: true
          }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "pr-md-3"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPaperPlane"],
            pill: true,
            className: "py-3 px-4 text-truncate",
            color: "darkblue"
          }, "Submit a request")))));
        }
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        className: "pt-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        lg: 8,
        className: "pt-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "text-700 text-darkblue"
      }, "Submit a request to get started"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "text-300 text-secondary"
      }, "Fill the form below and send"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "w-60 border-top border-secondary mt-4 pt-4 pb-5 text-secondary"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        className: "justify-content-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        lg: 8
      }, errors, redirect, content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        md: 6,
        className: "embed-responsive embed-responsive-21by9"
      }));
    }
  }]);

  return Request;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onGetRequest: function onGetRequest() {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_13__["getRequest"]());
    },
    onPostRequest: function onPostRequest(data) {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_13__["postRequest"](data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Request));

/***/ })

}]);