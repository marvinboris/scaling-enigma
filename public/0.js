(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/ScriptLoader.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/ScriptLoader.js ***!
  \********************************************************************************/
/*! exports provided: ScriptLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptLoader", function() { return ScriptLoader; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/Utils.js");
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var createState = function () {
    return {
        listeners: [],
        scriptId: Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["uuid"])('tiny-script'),
        scriptLoaded: false
    };
};
var CreateScriptLoader = function () {
    var state = createState();
    var injectScriptTag = function (scriptId, doc, url, callback) {
        var scriptTag = doc.createElement('script');
        scriptTag.referrerPolicy = 'origin';
        scriptTag.type = 'application/javascript';
        scriptTag.id = scriptId;
        scriptTag.src = url;
        var handler = function () {
            scriptTag.removeEventListener('load', handler);
            callback();
        };
        scriptTag.addEventListener('load', handler);
        if (doc.head) {
            doc.head.appendChild(scriptTag);
        }
    };
    var load = function (doc, url, callback) {
        if (state.scriptLoaded) {
            callback();
        }
        else {
            state.listeners.push(callback);
            if (!doc.getElementById(state.scriptId)) {
                injectScriptTag(state.scriptId, doc, url, function () {
                    state.listeners.forEach(function (fn) { return fn(); });
                    state.scriptLoaded = true;
                });
            }
        }
    };
    // Only to be used by tests.
    var reinitialize = function () {
        state = createState();
    };
    return {
        load: load,
        reinitialize: reinitialize
    };
};
var ScriptLoader = CreateScriptLoader();



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/TinyMCE.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/TinyMCE.js ***!
  \***************************************************************************/
/*! exports provided: getTinymce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTinymce", function() { return getTinymce; });
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var getGlobal = function () { return (typeof window !== 'undefined' ? window : global); };
var getTinymce = function () {
    var global = getGlobal();
    return global && global.tinymce ? global.tinymce : null;
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/Utils.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/Utils.js ***!
  \*************************************************************************/
/*! exports provided: isFunction, bindHandlers, uuid, isTextarea, mergePlugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindHandlers", function() { return bindHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return uuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTextarea", function() { return isTextarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergePlugins", function() { return mergePlugins; });
/* harmony import */ var _components_EditorPropTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/EditorPropTypes */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/EditorPropTypes.js");
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var isFunction = function (x) { return typeof x === 'function'; };
var isEventProp = function (name) {
    return name in _components_EditorPropTypes__WEBPACK_IMPORTED_MODULE_0__["eventPropTypes"];
};
var findEventHandlers = function (props) {
    return Object.keys(props)
        .filter(isEventProp)
        .filter(function (name) { return isFunction(props[name]); })
        .map(function (name) { return ({
        handler: props[name],
        eventName: name.substring(2)
    }); });
};
var bindHandlers = function (editor, props, boundHandlers) {
    findEventHandlers(props).forEach(function (found) {
        // Unbind old handler
        var oldHandler = boundHandlers[found.eventName];
        if (isFunction(oldHandler)) {
            editor.off(found.eventName, oldHandler);
        }
        // Bind new handler
        var newHandler = function (e) { return found.handler(e, editor); };
        boundHandlers[found.eventName] = newHandler;
        editor.on(found.eventName, newHandler);
    });
};
var unique = 0;
var uuid = function (prefix) {
    var date = new Date();
    var time = date.getTime();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
var isTextarea = function (element) {
    return element !== null && element.tagName.toLowerCase() === 'textarea';
};
var normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
var mergePlugins = function (initPlugins, inputPlugins) {
    return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
};


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/Editor.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/Editor.js ***!
  \*************************************************************************************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScriptLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ScriptLoader */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/ScriptLoader.js");
/* harmony import */ var _TinyMCE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TinyMCE */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/TinyMCE.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/Utils.js");
/* harmony import */ var _EditorPropTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditorPropTypes */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/EditorPropTypes.js");
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





var Editor = /** @class */ (function (_super) {
    __extends(Editor, _super);
    function Editor(props) {
        var _this = _super.call(this, props) || this;
        _this.handleEditorChange = function (evt) {
            var editor = _this.editor;
            if (editor) {
                var newContent = editor.getContent({ format: _this.props.outputFormat });
                if (newContent !== _this.currentContent) {
                    _this.currentContent = newContent;
                    if (Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(_this.props.onEditorChange)) {
                        _this.props.onEditorChange(_this.currentContent, editor);
                    }
                }
            }
        };
        _this.handleInit = function (initEvent) {
            var editor = _this.editor;
            if (editor) {
                editor.setContent(_this.getInitialValue());
                if (Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(_this.props.onEditorChange)) {
                    editor.on('change keyup setcontent', _this.handleEditorChange);
                }
                if (Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(_this.props.onInit)) {
                    _this.props.onInit(initEvent, editor);
                }
                Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["bindHandlers"])(editor, _this.props, _this.boundHandlers);
            }
        };
        _this.initialise = function () {
            var finalInit = __assign(__assign({}, _this.props.init), { target: _this.elementRef.current, readonly: _this.props.disabled, inline: _this.inline, plugins: Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["mergePlugins"])(_this.props.init && _this.props.init.plugins, _this.props.plugins), toolbar: _this.props.toolbar || (_this.props.init && _this.props.init.toolbar), setup: function (editor) {
                    _this.editor = editor;
                    editor.on('init', _this.handleInit);
                    if (_this.props.init && Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(_this.props.init.setup)) {
                        _this.props.init.setup(editor);
                    }
                } });
            if (Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["isTextarea"])(_this.elementRef.current)) {
                _this.elementRef.current.style.visibility = '';
            }
            Object(_TinyMCE__WEBPACK_IMPORTED_MODULE_2__["getTinymce"])().init(finalInit);
        };
        _this.id = _this.props.id || Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["uuid"])('tiny-react');
        _this.elementRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this.inline = _this.props.inline ? _this.props.inline : _this.props.init && _this.props.init.inline;
        _this.boundHandlers = {};
        return _this;
    }
    Editor.prototype.componentDidUpdate = function (prevProps) {
        if (this.editor && this.editor.initialized) {
            Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["bindHandlers"])(this.editor, this.props, this.boundHandlers);
            this.currentContent = this.currentContent || this.editor.getContent({ format: this.props.outputFormat });
            if (typeof this.props.value === 'string' && this.props.value !== prevProps.value && this.props.value !== this.currentContent) {
                this.editor.setContent(this.props.value);
            }
            if (typeof this.props.disabled === 'boolean' && this.props.disabled !== prevProps.disabled) {
                this.editor.setMode(this.props.disabled ? 'readonly' : 'design');
            }
        }
    };
    Editor.prototype.componentDidMount = function () {
        if (Object(_TinyMCE__WEBPACK_IMPORTED_MODULE_2__["getTinymce"])() !== null) {
            this.initialise();
        }
        else if (this.elementRef.current && this.elementRef.current.ownerDocument) {
            _ScriptLoader__WEBPACK_IMPORTED_MODULE_1__["ScriptLoader"].load(this.elementRef.current.ownerDocument, this.getScriptSrc(), this.initialise);
        }
    };
    Editor.prototype.componentWillUnmount = function () {
        var _this = this;
        var editor = this.editor;
        if (Object(_TinyMCE__WEBPACK_IMPORTED_MODULE_2__["getTinymce"])() !== null && editor) {
            editor.off('init', this.handleInit);
            if (editor.initialized) {
                editor.off('change keyup setcontent', this.handleEditorChange);
                Object.keys(this.boundHandlers).forEach(function (eventName) {
                    editor.off(eventName, _this.boundHandlers[eventName]);
                });
                this.boundHandlers = {};
            }
            Object(_TinyMCE__WEBPACK_IMPORTED_MODULE_2__["getTinymce"])().remove(editor);
        }
    };
    Editor.prototype.render = function () {
        return this.inline ? this.renderInline() : this.renderIframe();
    };
    Editor.prototype.renderInline = function () {
        var _a = this.props.tagName, tagName = _a === void 0 ? 'div' : _a;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](tagName, {
            ref: this.elementRef,
            id: this.id
        });
    };
    Editor.prototype.renderIframe = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]('textarea', {
            ref: this.elementRef,
            style: { visibility: 'hidden' },
            name: this.props.textareaName,
            id: this.id
        });
    };
    Editor.prototype.getScriptSrc = function () {
        if (typeof this.props.tinymceScriptSrc === 'string') {
            return this.props.tinymceScriptSrc;
        }
        else {
            var channel = this.props.cloudChannel;
            var apiKey = this.props.apiKey ? this.props.apiKey : 'no-api-key';
            return "https://cdn.tiny.cloud/1/" + apiKey + "/tinymce/" + channel + "/tinymce.min.js";
        }
    };
    Editor.prototype.getInitialValue = function () {
        if (typeof this.props.value === 'string') {
            return this.props.value;
        }
        else if (typeof this.props.initialValue === 'string') {
            return this.props.initialValue;
        }
        else {
            return '';
        }
    };
    Editor.propTypes = _EditorPropTypes__WEBPACK_IMPORTED_MODULE_4__["EditorPropTypes"];
    Editor.defaultProps = {
        cloudChannel: '5'
    };
    return Editor;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/EditorPropTypes.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/EditorPropTypes.js ***!
  \**********************************************************************************************/
/*! exports provided: eventPropTypes, EditorPropTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventPropTypes", function() { return eventPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorPropTypes", function() { return EditorPropTypes; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var eventPropTypes = {
    onActivate: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onAddUndo: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onBeforeAddUndo: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onBeforeExecCommand: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onBeforeGetContent: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onBeforeRenderUI: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onBeforeSetContent: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onBeforePaste: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onBlur: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onClearUndos: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onClick: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onContextMenu: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onCopy: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onCut: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDblclick: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDeactivate: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDirty: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDrag: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDragDrop: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDragEnd: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDragGesture: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDragOver: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onDrop: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onExecCommand: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onFocus: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onFocusIn: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onFocusOut: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onGetContent: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onHide: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onInit: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onKeyPress: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onKeyUp: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onLoadContent: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onMouseMove: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onMouseOut: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onMouseOver: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onMouseUp: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onNodeChange: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onObjectResizeStart: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onObjectResized: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onObjectSelected: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onPaste: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onPostProcess: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onPostRender: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onPreProcess: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onProgressState: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onRedo: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onRemove: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onReset: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onSaveContent: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onSelectionChange: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onSetAttrib: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onSetContent: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onShow: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onUndo: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
    onVisualAid: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"]
};
var EditorPropTypes = __assign({ apiKey: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], id: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], inline: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"], init: prop_types__WEBPACK_IMPORTED_MODULE_0__["object"], initialValue: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], onEditorChange: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"], outputFormat: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOf"](['html', 'text']), value: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], tagName: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], cloudChannel: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], plugins: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], prop_types__WEBPACK_IMPORTED_MODULE_0__["array"]]), toolbar: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], prop_types__WEBPACK_IMPORTED_MODULE_0__["array"]]), disabled: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"], textareaName: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], tinymceScriptSrc: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"] }, eventPropTypes);


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js ***!
  \*************************************************************************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Editor */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/Editor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _components_Editor__WEBPACK_IMPORTED_MODULE_0__["Editor"]; });

/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */




/***/ })

}]);