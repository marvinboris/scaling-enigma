(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./resources/js/src/components/Backend/UI/Download/Download.js":
/*!*********************************************************************!*\
  !*** ./resources/js/src/components/Backend/UI/Download/Download.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var link = _ref.link,
      name = _ref.name,
      children = _ref.children;

  var onClick = function onClick() {
    var a = document.createElement('a');
    a.style.display = 'none';
    a.href = link;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(link);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      cursor: 'pointer'
    },
    onClick: onClick
  }, children);
});

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
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");



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
      append = _ref.append,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
    className: "bg-white",
    size: "lg"
  }, addon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
    addonType: "prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupText"], {
    className: "bg-transparent border-light rounded-pill rounded-right-0 px-4"
  }, addon)) : null, children ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    onChange: onChange,
    type: type,
    name: name,
    required: required,
    readOnly: readonly,
    value: value,
    className: "bg-white rounded-pill " + (addon ? 'rounded-left-0' : '') + " border-light text-small text-secondary h-100 px-4 py-3",
    placeholder: placeholder
  }, children) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    onChange: onChange,
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

/***/ "./resources/js/src/containers/Request/Check/Check.js":
/*!************************************************************!*\
  !*** ./resources/js/src/containers/Request/Check/Check.js ***!
  \************************************************************/
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
/* harmony import */ var _components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/UI/Button/BetweenButton/BetweenButton */ "./resources/js/src/components/UI/Button/BetweenButton/BetweenButton.js");
/* harmony import */ var _components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UI/Input/Input */ "./resources/js/src/components/UI/Input/Input.js");
/* harmony import */ var _components_UI_CustomSpinner_CustomSpinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/UI/CustomSpinner/CustomSpinner */ "./resources/js/src/components/UI/CustomSpinner/CustomSpinner.js");
/* harmony import */ var _components_Error_Error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Error/Error */ "./resources/js/src/components/Error/Error.js");
/* harmony import */ var _components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/Feedback/Feedback */ "./resources/js/src/components/Feedback/Feedback.js");
/* harmony import */ var _components_Backend_UI_Download_Download__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/Backend/UI/Download/Download */ "./resources/js/src/components/Backend/UI/Download/Download.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../store/actions */ "./resources/js/src/store/actions/index.js");


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
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
      reqid: '',
      countries: []
    });

    _defineProperty(_assertThisInitialized(_this), "inputChangedHandler", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState(_defineProperty({}, name, value));
    });

    _defineProperty(_assertThisInitialized(_this), "submitHandler", function (e) {
      e.preventDefault();

      _this.props.onPostCheckRequest(e.target);
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
                cors = 'https://cors-anywhere.herokuapp.com/';
                _context.next = 3;
                return fetch(cors + 'http://country.io/phone.json', {
                  method: 'GET',
                  mode: 'cors'
                });

              case 3:
                phoneRes = _context.sent;
                _context.next = 6;
                return fetch(cors + 'http://country.io/names.json', {
                  method: 'GET',
                  mode: 'cors'
                });

              case 6:
                namesRes = _context.sent;
                _context.next = 9;
                return phoneRes.json();

              case 9:
                phone = _context.sent;
                _context.next = 12;
                return namesRes.json();

              case 12:
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

              case 15:
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
    key: "render",
    value: function render() {
      var _this$state = this.state,
          reqid = _this$state.reqid,
          countries = _this$state.countries;
      var _this$props$frontend$ = this.props.frontend.request,
          loading = _this$props$frontend$.loading,
          error = _this$props$frontend$.error,
          message = _this$props$frontend$.message,
          request = _this$props$frontend$.request;
      var errors;
      var form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        inline: true,
        onSubmit: this.submitHandler
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: "text",
        name: "reqid",
        id: "reqid",
        onChange: this.inputChangedHandler,
        value: reqid,
        placeholder: "Request ID"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPaperPlane"],
        pill: true,
        className: "ml-3 py-3 px-4",
        color: "darkblue"
      }, "Submit"));
      var content;
      if (loading || countries.length === 0) content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_CustomSpinner_CustomSpinner__WEBPACK_IMPORTED_MODULE_8__["default"], null);else {
        errors = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Error_Error__WEBPACK_IMPORTED_MODULE_9__["default"], {
          err: error
        });
        var feedback = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_10__["default"], {
          message: message
        });

        if (request) {
          var name = request.name,
              platform = request.platform,
              email = request.email,
              ref = request.ref,
              phone = request.phone,
              issue = request.issue,
              country = request.country,
              documents = request.documents,
              description = request.description,
              issue_files = request.issue_files,
              status = request.status,
              admin_files = request.admin_files,
              comments = request.comments;
          var countryEl = countries.find(function (el) {
            return el.country === country;
          });
          var documentsContent = documents.filter(function (d) {
            return d;
          }).map(function (doc) {
            var arr1 = doc.split('.');
            var format = arr1[arr1.length - 1];
            var arr2 = doc.split('/');
            var arr3 = arr2[arr2.length - 1].split('.');
            var formatlessName = arr3.filter(function (n, i) {
              return i < arr3.length - 1;
            }).join('.');
            var content;

            switch (format.toLowerCase()) {
              case 'pdf':
                content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFilePdf"],
                  size: "5x",
                  className: "text-border position-absolute",
                  style: {
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)'
                  }
                });
                break;

              default:
                content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                  className: "embed-responsive embed-responsive-1by1 position-absolute",
                  style: {
                    background: 'url("' + doc + '") no-repeat center',
                    backgroundSize: 'cover',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)'
                  }
                });
                break;
            }

            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              xl: 3,
              key: name + Math.random(),
              className: "pr-0",
              style: {
                minWidth: 100
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              className: "rounded-4 overflow-hidden p-2 bg-light d-flex justify-content-center align-items-center text-nowrap text-transparent shadow position-relative embed-responsive embed-responsive-1by1"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFilePdf"],
              className: "mr-2"
            }), "NID_45094M", content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Backend_UI_Download_Download__WEBPACK_IMPORTED_MODULE_11__["default"], {
              link: doc,
              name: formatlessName + '.' + format
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              className: "text-uppercase text-truncate pt-3 text-darkblue"
            }, formatlessName)));
          });
          var issueFilesContent = issue_files.filter(function (d) {
            return d;
          }).map(function (issue_file) {
            var arr1 = issue_file.split('.');
            var format = arr1[arr1.length - 1];
            var arr2 = issue_file.split('/');
            var arr3 = arr2[arr2.length - 1].split('.');
            var formatlessName = arr3.filter(function (n, i) {
              return i < arr3.length - 1;
            }).join('.');
            var icon;

            switch (format.toLowerCase()) {
              case 'pdf':
                icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFilePdf"];
                break;

              default:
                icon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFileImage"];
                break;
            }

            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              key: formatlessName + Math.random(),
              className: "pr-3 d-inline-block",
              style: {
                maxWidth: 200
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Backend_UI_Download_Download__WEBPACK_IMPORTED_MODULE_11__["default"], {
              link: issue_file,
              name: formatlessName + '.' + format
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              className: "rounded-2 p-2 bg-light text-darkblue text-uppercase text-truncate text-nowrap"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
              icon: icon,
              className: "mr-2"
            }), formatlessName)));
          });
          var adminFilesContent = admin_files ? admin_files.filter(function (d) {
            return d;
          }).map(function (doc) {
            var arr1 = doc.split('.');
            var format = arr1[arr1.length - 1];
            var arr2 = doc.split('/');
            var arr3 = arr2[arr2.length - 1].split('.');
            var formatlessName = arr3.filter(function (n, i) {
              return i < arr3.length - 1;
            }).join('.');
            var content;

            switch (format.toLowerCase()) {
              case 'pdf':
                content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFilePdf"],
                  size: "5x",
                  className: "text-border position-absolute",
                  style: {
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)'
                  }
                });
                break;

              default:
                content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                  className: "embed-responsive embed-responsive-1by1 position-absolute",
                  style: {
                    background: 'url("' + doc + '") no-repeat center',
                    backgroundSize: 'cover',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)'
                  }
                });
                break;
            }

            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
              xl: 3,
              key: name + Math.random(),
              className: "pr-0",
              style: {
                minWidth: 100
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              className: "rounded-4 overflow-hidden p-2 bg-light d-flex justify-content-center align-items-center text-nowrap text-transparent shadow position-relative embed-responsive embed-responsive-1by1"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFilePdf"],
              className: "mr-2"
            }), "NID_45094M", content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Backend_UI_Download_Download__WEBPACK_IMPORTED_MODULE_11__["default"], {
              link: doc,
              name: formatlessName + '.' + format
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              className: "text-uppercase text-truncate pt-3 text-darkblue"
            }, formatlessName)));
          }) : null;
          var colors = ['orange', 'primary', 'danger', 'success'];
          var texts = ['Pending', 'Processing', 'Cancelled', 'Solved'];
          content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, feedback, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormBlock, {
            title: "Support feedback"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
            className: "col-xl-9 px-0"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
            className: "col-12 text-700"
          }, "Status: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            className: 'text-' + colors[status]
          }, texts[status])), comments ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
            className: "col-xl-9"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
            type: "textarea",
            readOnly: true,
            value: comments,
            className: "border-light text-secondary"
          })) : null, admin_files && admin_files.length > 0 ? adminFilesContent : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            xs: 12
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormBlock, {
            title: "User info Gathering"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
            className: "col-xl-9 px-0"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "col-md-6",
            type: "text",
            value: name,
            readonly: true
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "col-md-6",
            type: "text",
            value: platform.name,
            readonly: true
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "col-md-6",
            type: "email",
            value: email,
            readonly: true
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "col-md-6",
            type: "text",
            value: ref,
            placeholder: "User ID",
            readonly: true
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "col-md-6",
            type: "text",
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
            value: countryEl.name,
            readonly: true
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
            type: "tel",
            className: "col-md-6",
            addon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
              className: "text-secondary text-small"
            }, "+", countryEl.code),
            value: phone,
            readonly: true
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "col-md-6",
            type: "text",
            value: issue.name,
            readonly: true
          }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormBlock, {
            title: "User documents",
            subtitle: "Please upload recommended documents"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            xl: 9,
            className: "px-0"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
            className: "d-flex align-items-center"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, documentsContent)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormBlock, {
            title: "Issue description",
            subtitle: "Please provide a detailed description of the problem you are facing"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            xl: 9,
            className: "px-0"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
            className: "px-0 col-xl-9"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
            type: "textarea",
            value: description,
            readOnly: true,
            style: {
              height: 250
            },
            className: "border-light text-secondary"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
            className: "d-flex align-items-center"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, issueFilesContent)))));
        }
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        className: "pt-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        lg: 8,
        className: "pt-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "text-700 text-darkblue"
      }, "Check a request of yours"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "text-300 text-secondary"
      }, "Fill the form below and send"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "w-60 border-top border-secondary mt-4 pt-4 pb-5 text-secondary"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        className: "justify-content-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        lg: 8
      }, errors, form, content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
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
    onPostCheckRequest: function onPostCheckRequest(data) {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_12__["postCheckRequest"](data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Request));

/***/ })

}]);