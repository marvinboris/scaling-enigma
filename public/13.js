(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./resources/js/src/containers/Backend/User/Requests/Pending/Pending.js":
/*!******************************************************************************!*\
  !*** ./resources/js/src/containers/Backend/User/Requests/Pending/Pending.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _components_Backend_UI_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../components/Backend/UI/Breadcrumb/Breadcrumb */ "./resources/js/src/components/Backend/UI/Breadcrumb/Breadcrumb.js");
/* harmony import */ var _components_UI_Titles_SpecialTitle_SpecialTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../components/UI/Titles/SpecialTitle/SpecialTitle */ "./resources/js/src/components/UI/Titles/SpecialTitle/SpecialTitle.js");
/* harmony import */ var _components_UI_Titles_Subtitle_Subtitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../components/UI/Titles/Subtitle/Subtitle */ "./resources/js/src/components/UI/Titles/Subtitle/Subtitle.js");
/* harmony import */ var _components_Backend_UI_List_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../components/Backend/UI/List/List */ "./resources/js/src/components/Backend/UI/List/List.js");
/* harmony import */ var _components_Error_Error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../components/Error/Error */ "./resources/js/src/components/Error/Error.js");
/* harmony import */ var _components_UI_CustomSpinner_CustomSpinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../components/UI/CustomSpinner/CustomSpinner */ "./resources/js/src/components/UI/CustomSpinner/CustomSpinner.js");
/* harmony import */ var _components_UI_WithTooltip_WithTooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../components/UI/WithTooltip/WithTooltip */ "./resources/js/src/components/UI/WithTooltip/WithTooltip.js");
/* harmony import */ var _components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../components/Feedback/Feedback */ "./resources/js/src/components/Feedback/Feedback.js");
/* harmony import */ var _components_Backend_UI_Delete_Delete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../components/Backend/UI/Delete/Delete */ "./resources/js/src/components/Backend/UI/Delete/Delete.js");
/* harmony import */ var _components_Backend_UI_View_View__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../components/Backend/UI/View/View */ "./resources/js/src/components/Backend/UI/View/View.js");
/* harmony import */ var _components_Backend_UI_Counter_Counter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../components/Backend/UI/Counter/Counter */ "./resources/js/src/components/Backend/UI/Counter/Counter.js");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Edit */ "./resources/js/src/containers/Backend/User/Requests/Edit.js");
/* harmony import */ var _Description__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Description */ "./resources/js/src/containers/Backend/User/Requests/Description.js");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../View */ "./resources/js/src/containers/Backend/User/Requests/View.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../store/actions */ "./resources/js/src/store/actions/index.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../shared/utility */ "./resources/js/src/shared/utility.js");


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






 // Components


















var Pending = /*#__PURE__*/function (_Component) {
  _inherits(Pending, _Component);

  var _super = _createSuper(Pending);

  function Pending() {
    var _this;

    _classCallCheck(this, Pending);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      countries: []
    });

    return _this;
  }

  _createClass(Pending, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var cors, phoneRes, namesRes, phone, names, countries;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.props.onGetPendingRequests();
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
                  return a.country > b.country;
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
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.onResetRequests();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$backend$r = this.props.backend.requests,
          loading = _this$props$backend$r.loading,
          error = _this$props$backend$r.error,
          message = _this$props$backend$r.message,
          requests = _this$props$backend$r.requests;
      var countries = this.state.countries;
      var content;
      var errors;
      var feedback;
      if (loading) content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_CustomSpinner_CustomSpinner__WEBPACK_IMPORTED_MODULE_12__["default"], null));else {
        errors = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Error_Error__WEBPACK_IMPORTED_MODULE_11__["default"], {
          err: error
        }));

        if (requests) {
          feedback = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_14__["default"], {
            message: message
          });
          var requestsData = requests.map(function (request) {
            var colors = ['orange', 'myprimary', 'red', 'green'];
            var texts = ['Pending', 'Processing', 'Cancelled', 'Solved'];
            var icons = [_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSpinner"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSpinner"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTimesCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCheckCircle"]];
            var country = countries.find(function (_ref) {
              var country = _ref.country;
              return country === request.country;
            });
            var descriptionContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Description__WEBPACK_IMPORTED_MODULE_19__["default"], {
              request: request
            });
            var viewContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_View__WEBPACK_IMPORTED_MODULE_20__["default"], {
              request: request,
              country: country
            });
            var editContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Edit__WEBPACK_IMPORTED_MODULE_18__["default"], {
              request: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_22__["updateObject"])(request, {
                page_status: 'pending'
              })
            });
            return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_22__["updateObject"])(request, {
              ref: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                className: "d-flex justify-content-between position-relative",
                style: {
                  minWidth: request.status === 1 ? 130 : 0
                }
              }, request.ref, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_WithTooltip_WithTooltip__WEBPACK_IMPORTED_MODULE_13__["default"], {
                id: 'request-' + request.reqid,
                content: request.edited_by
              }, request.status === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
                color: colors[request.status],
                className: "position-static ml-2"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Backend_UI_Counter_Counter__WEBPACK_IMPORTED_MODULE_17__["default"], {
                start: request.created_at
              })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
                color: colors[request.status],
                style: {
                  width: 20,
                  height: 20
                },
                className: "position-static p-0 ml-2 rounded-circle d-inline-flex justify-content-center align-items-center"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                icon: icons[request.status],
                className: [0, 1].includes(request.status) ? "fa-spin" : "",
                fixedWidth: true
              })))),
              created_at: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_22__["convertDate"])(request.created_at),
              status: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
                color: colors[request.status],
                className: "badge-block position-static"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                icon: icons[request.status],
                className: [0, 1].includes(request.status) ? "fa-spin" : "",
                fixedWidth: true
              }), " ", texts[request.status]),
              documents: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
                color: "nightblue",
                className: "badge-block position-static"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFileArchive"],
                className: "text-orange",
                fixedWidth: true
              }), " ", request.documents.length, " Document", request.documents.length > 1 ? 's' : ''),
              attachment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
                color: "nightblue",
                className: "badge-block position-static"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFileArchive"],
                className: "text-orange",
                fixedWidth: true
              }), " ", request.issue_files.length, " Attached File", request.issue_files.length > 1 ? 's' : ''),
              description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                className: "d-flex"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                style: {
                  maxWidth: 150
                },
                className: "flex-fill text-truncate"
              }, request.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Backend_UI_View_View__WEBPACK_IMPORTED_MODULE_16__["default"], {
                title: 'Request description: ' + request.reqid,
                content: descriptionContent
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEye"],
                className: "text-green",
                fixedWidth: true
              }))),
              action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                className: "text-center"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Backend_UI_View_View__WEBPACK_IMPORTED_MODULE_16__["default"], {
                title: 'Request details: ' + request.reqid,
                content: viewContent
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEye"],
                className: "text-green mr-2",
                fixedWidth: true
              })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Backend_UI_View_View__WEBPACK_IMPORTED_MODULE_16__["default"], {
                title: 'Request edit: ' + request.reqid,
                content: editContent
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEdit"],
                className: "text-brokenblue",
                fixedWidth: true
              })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Backend_UI_Delete_Delete__WEBPACK_IMPORTED_MODULE_15__["default"], {
                deleteAction: function deleteAction() {
                  return _this2.props.onPostRequestDelete(request.id);
                }
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrash"],
                className: "text-red mr-2",
                fixedWidth: true
              })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faDownload"],
                className: "text-darkblue",
                fixedWidth: true
              })),
              country: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                className: "d-flex align-items-center"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                className: "border border-1 border-white rounded-circle overflow-hidden position-relative d-flex justify-content-center align-items-center mr-2",
                style: {
                  width: 20,
                  height: 20
                }
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
                className: "flag-icon text-large position-absolute flag-icon-".concat(request.country.toLowerCase())
              })), country ? country.name : null)
            });
          });
          content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Backend_UI_List_List__WEBPACK_IMPORTED_MODULE_10__["default"], {
            array: requestsData,
            data: JSON.stringify(requests),
            bordered: true,
            add: "File a Request",
            link: "/user/requests/add",
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCalendarAlt"],
            title: "Pending Requests",
            className: "bg-white shadow-sm",
            fields: [{
              name: 'Creation Date',
              key: 'created_at'
            }, {
              name: 'User ID',
              key: 'ref'
            }, {
              name: 'Full Name',
              key: 'name'
            }, {
              name: 'Platform',
              key: 'platform'
            }, {
              name: 'E-Mail',
              key: 'email'
            }, {
              name: 'Country',
              key: 'country'
            }, {
              name: 'Phone Number',
              key: 'phone'
            }, {
              name: 'Issue',
              key: 'issue'
            }, {
              name: 'User Documents',
              key: 'documents',
              minWidth: 150
            }, {
              name: 'Description',
              key: 'description'
            }, {
              name: 'Attached Files',
              key: 'attachment',
              minWidth: 180
            }, {
              name: 'Status',
              key: 'status',
              minWidth: 140
            }, {
              name: 'Action',
              key: 'action',
              fixed: true
            }]
          })));
        }
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "bg-white py-4 pl-5 pr-4 position-relative"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Backend_UI_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_7__["default"], {
        main: "Pending Requests",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCalendarAlt"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Titles_SpecialTitle_SpecialTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
        user: true,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCalendarAlt"]
      }, "User panel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Titles_Subtitle_Subtitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
        user: true
      }, "Pending Requests")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "p-4 pb-0"
      }, errors, feedback, content));
    }
  }]);

  return Pending;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onGetPendingRequests: function onGetPendingRequests() {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_21__["getPendingRequests"]());
    },
    onPostRequestDelete: function onPostRequestDelete(id) {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_21__["postRequestDelete"](id));
    },
    onPostRequestUpdate: function onPostRequestUpdate(id, data) {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_21__["postRequestUpdate"](id, data));
    },
    onResetRequests: function onResetRequests() {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_21__["resetRequests"]());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Pending)));

/***/ })

}]);