(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/src/components/Backend/UI/List/List.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/components/Backend/UI/List/List.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var fields = _ref.fields,
      array = _ref.array,
      data = _ref.data,
      limit = _ref.limit,
      bordered = _ref.bordered,
      _ref$xs = _ref.xs,
      xs = _ref$xs === void 0 ? 12 : _ref$xs,
      _ref$sm = _ref.sm,
      sm = _ref$sm === void 0 ? 12 : _ref$sm,
      _ref$md = _ref.md,
      md = _ref$md === void 0 ? 12 : _ref$md,
      _ref$lg = _ref.lg,
      lg = _ref$lg === void 0 ? 12 : _ref$lg,
      _ref$xl = _ref.xl,
      xl = _ref$xl === void 0 ? 12 : _ref$xl,
      icon = _ref.icon,
      title = _ref.title,
      add = _ref.add,
      link = _ref.link,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      dark = _ref.dark,
      borderless = _ref.borderless,
      _ref$innerClassName = _ref.innerClassName,
      innerClassName = _ref$innerClassName === void 0 ? '' : _ref$innerClassName,
      _ref$outerClassName = _ref.outerClassName,
      outerClassName = _ref$outerClassName === void 0 ? '' : _ref$outerClassName,
      p0 = _ref.p0,
      select = _ref.select,
      children = _ref.children,
      selectHandler = _ref.selectHandler,
      style = _ref.style;
  var titles = fields.map(function (_ref2) {
    var name = _ref2.name;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
      className: "align-middle text-nowrap",
      key: name
    }, name);
  });
  titles.unshift( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "text-center align-middle",
    key: "#"
  }, "SL"));
  if (select) titles.unshift( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "align-middle text-center",
    key: "select_all"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    onClick: selectHandler,
    className: "select_all"
  })));

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(10),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      search = _useState4[0],
      setSearch = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState6 = _slicedToArray(_useState5, 2),
      page = _useState6[0],
      setPage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState8 = _slicedToArray(_useState7, 2),
      pageFirst = _useState8[0],
      setPageFirst = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(2),
      _useState10 = _slicedToArray(_useState9, 2),
      pageSecond = _useState10[0],
      setPageSecond = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(3),
      _useState12 = _slicedToArray(_useState11, 2),
      pageLast = _useState12[0],
      setPageLast = _useState12[1];

  var filteredArray = search === '' ? array : array.filter(function (item, i) {
    var check = false;

    var _iterator = _createForOfIteratorHelper(fields),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var iterator = _step.value;
        var key = iterator.key;
        if (typeof item[key] === 'string') check = item[key].toLowerCase().includes(search.toLowerCase());
        if (check) return check;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
  var limitedArray = show === 'All' ? filteredArray : filteredArray.filter(function (item, i) {
    return i >= (page - 1) * show && i < page * show;
  });
  var pageNumber = Math.ceil(filteredArray.length / show);
  var content = limitedArray.map(function (item, index) {
    if (limit && index >= limit) return null;
    var inside = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
      className: "text-center align-middle",
      key: 'primary' + index
    }, (page - 1) * show + index + 1)];
    if (select) inside.unshift( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
      className: "text-center align-middle",
      key: 'secondary' + index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "checkbox",
      value: item._id
    })));
    fields.forEach(function (_ref3) {
      var key = _ref3.key,
          minWidth = _ref3.minWidth;
      inside.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        className: "align-middle text-nowrap position-relative",
        style: {
          minWidth: minWidth
        },
        key: key
      }, item[key]));
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      className: "align-middle",
      key: index + 1
    }, inside);
  });

  var inputChangedHandler = function inputChangedHandler(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    firstPageHandler();
    if (name === 'show') return setShow(value);
    if (name === 'search') return setSearch(value);
  };

  var previousPageHandler = function previousPageHandler() {
    var lastPage = pageNumber;
    if (page <= 1) return;
    if (page === 2) firstPageHandler();else if (page === lastPage) setPage(page - 1);else {
      setPage(page - 1);
      setPageFirst(pageFirst - 1);
      setPageSecond(pageSecond - 1);
      setPageLast(pageLast - 1);
    }
  };

  var nextPageHandler = function nextPageHandler() {
    var lastPage = pageNumber;
    if (page >= lastPage) return;
    setPage(page + 1);

    if (page > 2) {
      setPageFirst(pageFirst + 1);
      setPageSecond(pageSecond + 1);
      setPageLast(pageLast + 1);
    }
  };

  var firstPageHandler = function firstPageHandler() {
    if (page <= 1) return;
    setPage(1);
    setPageFirst(1);
    setPageSecond(2);
    setPageLast(3);
  };

  var lastPageHandler = function lastPageHandler() {
    var lastPage = pageNumber;
    if (page >= lastPage) return;
    setPage(lastPage);
    setPageFirst(lastPage - 2);
    setPageSecond(lastPage - 1);
    setPageLast(lastPage);
  };

  var pageChangeHandler = function pageChangeHandler(page) {
    var lastPage = pageNumber;
    var pageFirst;
    if (page === 1) pageFirst = 1;else if (page === lastPage) pageFirst = lastPage - 2;else pageFirst = page - 1;
    setPage(page);
    setPageFirst(pageFirst);
    setPageSecond(pageFirst + 1);
    setPageLast(pageFirst + 2);
  };

  var onClick = function onClick(e) {
    e.preventDefault();
    var url = e.target.href;
    exportData(url);
  };

  var exportData = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url) {
      var format, name, token, formData, res, resData, downloadLink, a;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              format = url.split('/')[url.split('/').length - 1];
              name = title + '.' + format;
              token = localStorage.getItem('token');
              _context.prev = 3;
              formData = new FormData();
              formData.append('data', data);
              formData.append('name', name);
              _context.next = 9;
              return fetch(url, {
                method: 'POST',
                mode: 'cors',
                body: formData,
                headers: {
                  Authorization: token
                }
              });

            case 9:
              res = _context.sent;
              _context.next = 12;
              return res.blob();

            case 12:
              resData = _context.sent;
              downloadLink = URL.createObjectURL(resData);
              a = document.createElement('a');
              a.style.display = 'none';
              a.href = downloadLink;
              a.download = name;
              document.body.appendChild(a);
              a.click();
              window.URL.revokeObjectURL(downloadLink);
              _context.next = 26;
              break;

            case 23:
              _context.prev = 23;
              _context.t0 = _context["catch"](3);
              console.log(_context.t0);

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 23]]);
    }));

    return function exportData(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    xl: xl,
    className: outerClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "rounded-4 d-flex justify-content-between align-items-center mb-5 mt-3 py-4 px-4 text-large " + className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "d-inline-flex align-items-center text-700 text-orange"
  }, icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    fixedWidth: true,
    className: "mr-2",
    icon: icon,
    size: "lg"
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "text-brokenblue"
  }, title)), add ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: link
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "green",
    size: "lg",
    className: "rounded-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlusCircle"],
    fixedWidth: true,
    className: "mr-2"
  }), add)) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "d-flex flex-column " + (dark ? "text-light " : " ") + className,
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "p-4 border-bottom border-soft text-orange text-700 position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "align-items-center justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-6 pb-2 pb-lg-0 col-lg-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "d-flex align-items-center text-secondary rounded-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "px-3 py-2 font-weight-bold h-100 border-bottom border-soft bg-soft"
  }, "Show"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "select",
    name: "show",
    onChange: inputChangedHandler,
    className: "px-3 py-2 text-center rounded-0 h-100 d-block text-reset border-top-0 border-right-0 border-bottom-0 border-black-20 bg-soft",
    style: {
      width: '5rem'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "100"
  }, "100"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "All"
  }, "All")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-6 d-lg-none pb-2 pb-lg-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "search",
    onChange: inputChangedHandler,
    className: "bg-soft border-0 rounded-2",
    placeholder: "Search..."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-lg-4 pb-2 pb-lg-0 rounded-2 overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bg-soft d-flex text-secondary justify-content-around align-items-center font-weight-bold py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/api/export/xlsx",
    onClick: onClick,
    className: "px-2 export text-decoration-none text-reset"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFileExcel"],
    className: "text-darkblue mr-2"
  }), "Excel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/api/export/pdf",
    onClick: onClick,
    className: "px-2 export text-decoration-none text-reset"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFilePdf"],
    className: "text-danger mr-2"
  }), "PDF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/api/export/csv",
    onClick: onClick,
    className: "px-2 export text-decoration-none text-reset"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFileCsv"],
    className: "text-green mr-2"
  }), "CSV"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/api/export/pdf",
    onClick: onClick,
    className: "px-2 export text-decoration-none text-reset"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPrint"],
    className: "text-primary mr-2"
  }), "Print"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-lg-2 d-none d-lg-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "search",
    onChange: inputChangedHandler,
    className: "bg-soft border-0 rounded-2",
    placeholder: "Search..."
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex-fill d-flex flex-column " + (!p0 ? "p-4" : "p-0")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "table-responsive flex-fill"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    dark: dark,
    bordered: bordered,
    borderless: borderless,
    className: innerClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", {
    className: "bg-soft text-secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, titles)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
    className: "bg-soft-50 text-secondary"
  }, content))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Showing ", limitedArray.length, " of ", filteredArray.length, " entries."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pt-2 d-flex justify-content-end"
  }, show === 'All' ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "pagination btn-group"
  }, page === 1 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "btn btn-yellow",
    onClick: firstPageHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faAngleDoubleLeft"],
    className: "mr-2"
  }), "First"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "btn btn-darkblue text-secondary",
    onClick: previousPageHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronLeft"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "btn btn-darkblue " + (page === pageFirst ? 'text-700 active' : 'secondary'),
    onClick: function onClick() {
      return pageChangeHandler(pageFirst);
    }
  }, pageFirst), pageNumber > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "btn btn-darkblue " + (page === pageSecond ? 'text-700 active' : 'secondary'),
    onClick: function onClick() {
      return pageChangeHandler(pageSecond);
    }
  }, pageSecond), pageNumber > 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "btn btn-darkblue " + (page === pageLast ? 'text-700 active' : 'secondary'),
    onClick: function onClick() {
      return pageChangeHandler(pageLast);
    }
  }, pageLast) : null, page === pageNumber ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "btn btn-darkblue text-secondary",
    onClick: nextPageHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronRight"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "btn btn-lightblue",
    onClick: lastPageHandler
  }, "Last", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faAngleDoubleRight"],
    className: "ml-2"
  })))) : null))))));
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

/***/ })

}]);