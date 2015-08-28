webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(4)
	  , Router = __webpack_require__(5).Router
	  , router = new Router()

	var app = new Vue(__webpack_require__(6));

	router.on('/home', function(){
	  app.view = 'home-view'
	})

	router.on('/room/:id', function(id){
	  app.view = 'room-view';
	  app.params.roomId = id;
	})

	router.on('/user', function(){
	  app.view = 'user-view';
	  app.params.username = '';
	})

	router.on('/user/:username', function(username){
	  app.view = 'user-view';
	  app.params.username = username;
	})

	router.on('/signin', function(){
	  app.view = 'signin-view';
	})

	router.on('/signup', function(){
	  app.view = 'signup-view';
	})

	router.on('/signout', function(){
	  if (localStorage.getItem('token') && localStorage.getItem('token') !== '') {
	    localStorage.removeItem('token');
	    localStorage.removeItem('user');
	    location.href = '/';
	  } else {
	    location.href = '/';
	  }
	})

	router.configure({
	  notfound: function(){
	    router.setRoute('/home');
	  }
	})

	router.init('/home');

	module.exports = app;


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Vue.js v0.12.10
	 * (c) 2015 Evan You
	 * Released under the MIT License.
	 */
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define(factory);
		else if(typeof exports === 'object')
			exports["Vue"] = factory();
		else
			root["Vue"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var extend = _.extend

		/**
		 * The exposed Vue constructor.
		 *
		 * API conventions:
		 * - public API methods/properties are prefiexed with `$`
		 * - internal methods/properties are prefixed with `_`
		 * - non-prefixed properties are assumed to be proxied user
		 *   data.
		 *
		 * @constructor
		 * @param {Object} [options]
		 * @public
		 */

		function Vue (options) {
		  this._init(options)
		}

		/**
		 * Mixin global API
		 */

		extend(Vue, __webpack_require__(9))

		/**
		 * Vue and every constructor that extends Vue has an
		 * associated options object, which can be accessed during
		 * compilation steps as `this.constructor.options`.
		 *
		 * These can be seen as the default options of every
		 * Vue instance.
		 */

		Vue.options = {
		  replace: true,
		  directives: __webpack_require__(25),
		  elementDirectives: __webpack_require__(47),
		  filters: __webpack_require__(50),
		  transitions: {},
		  components: {},
		  partials: {}
		}

		/**
		 * Build up the prototype
		 */

		var p = Vue.prototype

		/**
		 * $data has a setter which does a bunch of
		 * teardown/setup work
		 */

		Object.defineProperty(p, '$data', {
		  get: function () {
		    return this._data
		  },
		  set: function (newData) {
		    if (newData !== this._data) {
		      this._setData(newData)
		    }
		  }
		})

		/**
		 * Mixin internal instance methods
		 */

		extend(p, __webpack_require__(52))
		extend(p, __webpack_require__(53))
		extend(p, __webpack_require__(54))
		extend(p, __webpack_require__(58))
		extend(p, __webpack_require__(60))

		/**
		 * Mixin public API methods
		 */

		extend(p, __webpack_require__(61))
		extend(p, __webpack_require__(62))
		extend(p, __webpack_require__(63))
		extend(p, __webpack_require__(64))
		extend(p, __webpack_require__(65))

		module.exports = _.Vue = Vue


	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		var lang = __webpack_require__(2)
		var extend = lang.extend

		extend(exports, lang)
		extend(exports, __webpack_require__(3))
		extend(exports, __webpack_require__(4))
		extend(exports, __webpack_require__(6))
		extend(exports, __webpack_require__(7))
		extend(exports, __webpack_require__(8))


	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		/**
		 * Check is a string starts with $ or _
		 *
		 * @param {String} str
		 * @return {Boolean}
		 */

		exports.isReserved = function (str) {
		  var c = (str + '').charCodeAt(0)
		  return c === 0x24 || c === 0x5F
		}

		/**
		 * Guard text output, make sure undefined outputs
		 * empty string
		 *
		 * @param {*} value
		 * @return {String}
		 */

		exports.toString = function (value) {
		  return value == null
		    ? ''
		    : value.toString()
		}

		/**
		 * Check and convert possible numeric strings to numbers
		 * before setting back to data
		 *
		 * @param {*} value
		 * @return {*|Number}
		 */

		exports.toNumber = function (value) {
		  if (typeof value !== 'string') {
		    return value
		  } else {
		    var parsed = Number(value)
		    return isNaN(parsed)
		      ? value
		      : parsed
		  }
		}

		/**
		 * Convert string boolean literals into real booleans.
		 *
		 * @param {*} value
		 * @return {*|Boolean}
		 */

		exports.toBoolean = function (value) {
		  return value === 'true'
		    ? true
		    : value === 'false'
		      ? false
		      : value
		}

		/**
		 * Strip quotes from a string
		 *
		 * @param {String} str
		 * @return {String | false}
		 */

		exports.stripQuotes = function (str) {
		  var a = str.charCodeAt(0)
		  var b = str.charCodeAt(str.length - 1)
		  return a === b && (a === 0x22 || a === 0x27)
		    ? str.slice(1, -1)
		    : false
		}

		/**
		 * Camelize a hyphen-delmited string.
		 *
		 * @param {String} str
		 * @return {String}
		 */

		exports.camelize = function (str) {
		  return str.replace(/-(\w)/g, toUpper)
		}

		function toUpper (_, c) {
		  return c ? c.toUpperCase() : ''
		}

		/**
		 * Hyphenate a camelCase string.
		 *
		 * @param {String} str
		 * @return {String}
		 */

		exports.hyphenate = function (str) {
		  return str
		    .replace(/([a-z\d])([A-Z])/g, '$1-$2')
		    .toLowerCase()
		}

		/**
		 * Converts hyphen/underscore/slash delimitered names into
		 * camelized classNames.
		 *
		 * e.g. my-component => MyComponent
		 *      some_else    => SomeElse
		 *      some/comp    => SomeComp
		 *
		 * @param {String} str
		 * @return {String}
		 */

		var classifyRE = /(?:^|[-_\/])(\w)/g
		exports.classify = function (str) {
		  return str.replace(classifyRE, toUpper)
		}

		/**
		 * Simple bind, faster than native
		 *
		 * @param {Function} fn
		 * @param {Object} ctx
		 * @return {Function}
		 */

		exports.bind = function (fn, ctx) {
		  return function (a) {
		    var l = arguments.length
		    return l
		      ? l > 1
		        ? fn.apply(ctx, arguments)
		        : fn.call(ctx, a)
		      : fn.call(ctx)
		  }
		}

		/**
		 * Convert an Array-like object to a real Array.
		 *
		 * @param {Array-like} list
		 * @param {Number} [start] - start index
		 * @return {Array}
		 */

		exports.toArray = function (list, start) {
		  start = start || 0
		  var i = list.length - start
		  var ret = new Array(i)
		  while (i--) {
		    ret[i] = list[i + start]
		  }
		  return ret
		}

		/**
		 * Mix properties into target object.
		 *
		 * @param {Object} to
		 * @param {Object} from
		 */

		exports.extend = function (to, from) {
		  for (var key in from) {
		    to[key] = from[key]
		  }
		  return to
		}

		/**
		 * Quick object check - this is primarily used to tell
		 * Objects from primitive values when we know the value
		 * is a JSON-compliant type.
		 *
		 * @param {*} obj
		 * @return {Boolean}
		 */

		exports.isObject = function (obj) {
		  return obj !== null && typeof obj === 'object'
		}

		/**
		 * Strict object type check. Only returns true
		 * for plain JavaScript objects.
		 *
		 * @param {*} obj
		 * @return {Boolean}
		 */

		var toString = Object.prototype.toString
		exports.isPlainObject = function (obj) {
		  return toString.call(obj) === '[object Object]'
		}

		/**
		 * Array type check.
		 *
		 * @param {*} obj
		 * @return {Boolean}
		 */

		exports.isArray = Array.isArray

		/**
		 * Define a non-enumerable property
		 *
		 * @param {Object} obj
		 * @param {String} key
		 * @param {*} val
		 * @param {Boolean} [enumerable]
		 */

		exports.define = function (obj, key, val, enumerable) {
		  Object.defineProperty(obj, key, {
		    value: val,
		    enumerable: !!enumerable,
		    writable: true,
		    configurable: true
		  })
		}

		/**
		 * Debounce a function so it only gets called after the
		 * input stops arriving after the given wait period.
		 *
		 * @param {Function} func
		 * @param {Number} wait
		 * @return {Function} - the debounced function
		 */

		exports.debounce = function (func, wait) {
		  var timeout, args, context, timestamp, result
		  var later = function () {
		    var last = Date.now() - timestamp
		    if (last < wait && last >= 0) {
		      timeout = setTimeout(later, wait - last)
		    } else {
		      timeout = null
		      result = func.apply(context, args)
		      if (!timeout) context = args = null
		    }
		  }
		  return function () {
		    context = this
		    args = arguments
		    timestamp = Date.now()
		    if (!timeout) {
		      timeout = setTimeout(later, wait)
		    }
		    return result
		  }
		}

		/**
		 * Manual indexOf because it's slightly faster than
		 * native.
		 *
		 * @param {Array} arr
		 * @param {*} obj
		 */

		exports.indexOf = function (arr, obj) {
		  for (var i = 0, l = arr.length; i < l; i++) {
		    if (arr[i] === obj) return i
		  }
		  return -1
		}

		/**
		 * Make a cancellable version of an async callback.
		 *
		 * @param {Function} fn
		 * @return {Function}
		 */

		exports.cancellable = function (fn) {
		  var cb = function () {
		    if (!cb.cancelled) {
		      return fn.apply(this, arguments)
		    }
		  }
		  cb.cancel = function () {
		    cb.cancelled = true
		  }
		  return cb
		}


	/***/ },
	/* 3 */
	/***/ function(module, exports) {

		// can we use __proto__?
		exports.hasProto = '__proto__' in {}

		// Browser environment sniffing
		var inBrowser = exports.inBrowser =
		  typeof window !== 'undefined' &&
		  Object.prototype.toString.call(window) !== '[object Object]'

		exports.isIE9 =
		  inBrowser &&
		  navigator.userAgent.toLowerCase().indexOf('msie 9.0') > 0

		exports.isAndroid =
		  inBrowser &&
		  navigator.userAgent.toLowerCase().indexOf('android') > 0

		// Transition property/event sniffing
		if (inBrowser && !exports.isIE9) {
		  var isWebkitTrans =
		    window.ontransitionend === undefined &&
		    window.onwebkittransitionend !== undefined
		  var isWebkitAnim =
		    window.onanimationend === undefined &&
		    window.onwebkitanimationend !== undefined
		  exports.transitionProp = isWebkitTrans
		    ? 'WebkitTransition'
		    : 'transition'
		  exports.transitionEndEvent = isWebkitTrans
		    ? 'webkitTransitionEnd'
		    : 'transitionend'
		  exports.animationProp = isWebkitAnim
		    ? 'WebkitAnimation'
		    : 'animation'
		  exports.animationEndEvent = isWebkitAnim
		    ? 'webkitAnimationEnd'
		    : 'animationend'
		}

		/**
		 * Defer a task to execute it asynchronously. Ideally this
		 * should be executed as a microtask, so we leverage
		 * MutationObserver if it's available, and fallback to
		 * setTimeout(0).
		 *
		 * @param {Function} cb
		 * @param {Object} ctx
		 */

		exports.nextTick = (function () {
		  var callbacks = []
		  var pending = false
		  var timerFunc
		  function handle () {
		    pending = false
		    var copies = callbacks.slice(0)
		    callbacks = []
		    for (var i = 0; i < copies.length; i++) {
		      copies[i]()
		    }
		  }
		  /* istanbul ignore if */
		  if (typeof MutationObserver !== 'undefined') {
		    var counter = 1
		    var observer = new MutationObserver(handle)
		    var textNode = document.createTextNode(counter)
		    observer.observe(textNode, {
		      characterData: true
		    })
		    timerFunc = function () {
		      counter = (counter + 1) % 2
		      textNode.data = counter
		    }
		  } else {
		    timerFunc = setTimeout
		  }
		  return function (cb, ctx) {
		    var func = ctx
		      ? function () { cb.call(ctx) }
		      : cb
		    callbacks.push(func)
		    if (pending) return
		    pending = true
		    timerFunc(handle, 0)
		  }
		})()


	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var config = __webpack_require__(5)

		/**
		 * Query an element selector if it's not an element already.
		 *
		 * @param {String|Element} el
		 * @return {Element}
		 */

		exports.query = function (el) {
		  if (typeof el === 'string') {
		    var selector = el
		    el = document.querySelector(el)
		    if (!el) {
		      ("development") !== 'production' && _.warn(
		        'Cannot find element: ' + selector
		      )
		    }
		  }
		  return el
		}

		/**
		 * Check if a node is in the document.
		 * Note: document.documentElement.contains should work here
		 * but always returns false for comment nodes in phantomjs,
		 * making unit tests difficult. This is fixed byy doing the
		 * contains() check on the node's parentNode instead of
		 * the node itself.
		 *
		 * @param {Node} node
		 * @return {Boolean}
		 */

		exports.inDoc = function (node) {
		  var doc = document.documentElement
		  var parent = node && node.parentNode
		  return doc === node ||
		    doc === parent ||
		    !!(parent && parent.nodeType === 1 && (doc.contains(parent)))
		}

		/**
		 * Extract an attribute from a node.
		 *
		 * @param {Node} node
		 * @param {String} attr
		 */

		exports.attr = function (node, attr) {
		  attr = config.prefix + attr
		  var val = node.getAttribute(attr)
		  if (val !== null) {
		    node.removeAttribute(attr)
		  }
		  return val
		}

		/**
		 * Insert el before target
		 *
		 * @param {Element} el
		 * @param {Element} target
		 */

		exports.before = function (el, target) {
		  target.parentNode.insertBefore(el, target)
		}

		/**
		 * Insert el after target
		 *
		 * @param {Element} el
		 * @param {Element} target
		 */

		exports.after = function (el, target) {
		  if (target.nextSibling) {
		    exports.before(el, target.nextSibling)
		  } else {
		    target.parentNode.appendChild(el)
		  }
		}

		/**
		 * Remove el from DOM
		 *
		 * @param {Element} el
		 */

		exports.remove = function (el) {
		  el.parentNode.removeChild(el)
		}

		/**
		 * Prepend el to target
		 *
		 * @param {Element} el
		 * @param {Element} target
		 */

		exports.prepend = function (el, target) {
		  if (target.firstChild) {
		    exports.before(el, target.firstChild)
		  } else {
		    target.appendChild(el)
		  }
		}

		/**
		 * Replace target with el
		 *
		 * @param {Element} target
		 * @param {Element} el
		 */

		exports.replace = function (target, el) {
		  var parent = target.parentNode
		  if (parent) {
		    parent.replaceChild(el, target)
		  }
		}

		/**
		 * Add event listener shorthand.
		 *
		 * @param {Element} el
		 * @param {String} event
		 * @param {Function} cb
		 */

		exports.on = function (el, event, cb) {
		  el.addEventListener(event, cb)
		}

		/**
		 * Remove event listener shorthand.
		 *
		 * @param {Element} el
		 * @param {String} event
		 * @param {Function} cb
		 */

		exports.off = function (el, event, cb) {
		  el.removeEventListener(event, cb)
		}

		/**
		 * Add class with compatibility for IE & SVG
		 *
		 * @param {Element} el
		 * @param {Strong} cls
		 */

		exports.addClass = function (el, cls) {
		  if (el.classList) {
		    el.classList.add(cls)
		  } else {
		    var cur = ' ' + (el.getAttribute('class') || '') + ' '
		    if (cur.indexOf(' ' + cls + ' ') < 0) {
		      el.setAttribute('class', (cur + cls).trim())
		    }
		  }
		}

		/**
		 * Remove class with compatibility for IE & SVG
		 *
		 * @param {Element} el
		 * @param {Strong} cls
		 */

		exports.removeClass = function (el, cls) {
		  if (el.classList) {
		    el.classList.remove(cls)
		  } else {
		    var cur = ' ' + (el.getAttribute('class') || '') + ' '
		    var tar = ' ' + cls + ' '
		    while (cur.indexOf(tar) >= 0) {
		      cur = cur.replace(tar, ' ')
		    }
		    el.setAttribute('class', cur.trim())
		  }
		}

		/**
		 * Extract raw content inside an element into a temporary
		 * container div
		 *
		 * @param {Element} el
		 * @param {Boolean} asFragment
		 * @return {Element}
		 */

		exports.extractContent = function (el, asFragment) {
		  var child
		  var rawContent
		  /* istanbul ignore if */
		  if (
		    exports.isTemplate(el) &&
		    el.content instanceof DocumentFragment
		  ) {
		    el = el.content
		  }
		  if (el.hasChildNodes()) {
		    exports.trimNode(el)
		    rawContent = asFragment
		      ? document.createDocumentFragment()
		      : document.createElement('div')
		    /* eslint-disable no-cond-assign */
		    while (child = el.firstChild) {
		    /* eslint-enable no-cond-assign */
		      rawContent.appendChild(child)
		    }
		  }
		  return rawContent
		}

		/**
		 * Trim possible empty head/tail textNodes inside a parent.
		 *
		 * @param {Node} node
		 */

		exports.trimNode = function (node) {
		  trim(node, node.firstChild)
		  trim(node, node.lastChild)
		}

		function trim (parent, node) {
		  if (node && node.nodeType === 3 && !node.data.trim()) {
		    parent.removeChild(node)
		  }
		}

		/**
		 * Check if an element is a template tag.
		 * Note if the template appears inside an SVG its tagName
		 * will be in lowercase.
		 *
		 * @param {Element} el
		 */

		exports.isTemplate = function (el) {
		  return el.tagName &&
		    el.tagName.toLowerCase() === 'template'
		}

		/**
		 * Create an "anchor" for performing dom insertion/removals.
		 * This is used in a number of scenarios:
		 * - fragment instance
		 * - v-html
		 * - v-if
		 * - component
		 * - repeat
		 *
		 * @param {String} content
		 * @param {Boolean} persist - IE trashes empty textNodes on
		 *                            cloneNode(true), so in certain
		 *                            cases the anchor needs to be
		 *                            non-empty to be persisted in
		 *                            templates.
		 * @return {Comment|Text}
		 */

		exports.createAnchor = function (content, persist) {
		  return config.debug
		    ? document.createComment(content)
		    : document.createTextNode(persist ? ' ' : '')
		}


	/***/ },
	/* 5 */
	/***/ function(module, exports) {

		module.exports = {

		  /**
		   * The prefix to look for when parsing directives.
		   *
		   * @type {String}
		   */

		  prefix: 'v-',

		  /**
		   * Whether to print debug messages.
		   * Also enables stack trace for warnings.
		   *
		   * @type {Boolean}
		   */

		  debug: false,

		  /**
		   * Strict mode.
		   * Disables asset lookup in the view parent chain.
		   */

		  strict: false,

		  /**
		   * Whether to suppress warnings.
		   *
		   * @type {Boolean}
		   */

		  silent: false,

		  /**
		   * Whether allow observer to alter data objects'
		   * __proto__.
		   *
		   * @type {Boolean}
		   */

		  proto: true,

		  /**
		   * Whether to parse mustache tags in templates.
		   *
		   * @type {Boolean}
		   */

		  interpolate: true,

		  /**
		   * Whether to use async rendering.
		   */

		  async: true,

		  /**
		   * Whether to warn against errors caught when evaluating
		   * expressions.
		   */

		  warnExpressionErrors: true,

		  /**
		   * Internal flag to indicate the delimiters have been
		   * changed.
		   *
		   * @type {Boolean}
		   */

		  _delimitersChanged: true,

		  /**
		   * List of asset types that a component can own.
		   *
		   * @type {Array}
		   */

		  _assetTypes: [
		    'component',
		    'directive',
		    'elementDirective',
		    'filter',
		    'transition',
		    'partial'
		  ],

		  /**
		   * prop binding modes
		   */

		  _propBindingModes: {
		    ONE_WAY: 0,
		    TWO_WAY: 1,
		    ONE_TIME: 2
		  },

		  /**
		   * Max circular updates allowed in a batcher flush cycle.
		   */

		  _maxUpdateCount: 100

		}

		/**
		 * Interpolation delimiters.
		 * We need to mark the changed flag so that the text parser
		 * knows it needs to recompile the regex.
		 *
		 * @type {Array<String>}
		 */

		var delimiters = ['{{', '}}']
		Object.defineProperty(module.exports, 'delimiters', {
		  get: function () {
		    return delimiters
		  },
		  set: function (val) {
		    delimiters = val
		    this._delimitersChanged = true
		  }
		})


	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var config = __webpack_require__(5)
		var extend = _.extend

		/**
		 * Option overwriting strategies are functions that handle
		 * how to merge a parent option value and a child option
		 * value into the final value.
		 *
		 * All strategy functions follow the same signature:
		 *
		 * @param {*} parentVal
		 * @param {*} childVal
		 * @param {Vue} [vm]
		 */

		var strats = Object.create(null)

		/**
		 * Helper that recursively merges two data objects together.
		 */

		function mergeData (to, from) {
		  var key, toVal, fromVal
		  for (key in from) {
		    toVal = to[key]
		    fromVal = from[key]
		    if (!to.hasOwnProperty(key)) {
		      to.$add(key, fromVal)
		    } else if (_.isObject(toVal) && _.isObject(fromVal)) {
		      mergeData(toVal, fromVal)
		    }
		  }
		  return to
		}

		/**
		 * Data
		 */

		strats.data = function (parentVal, childVal, vm) {
		  if (!vm) {
		    // in a Vue.extend merge, both should be functions
		    if (!childVal) {
		      return parentVal
		    }
		    if (typeof childVal !== 'function') {
		      ("development") !== 'production' && _.warn(
		        'The "data" option should be a function ' +
		        'that returns a per-instance value in component ' +
		        'definitions.'
		      )
		      return parentVal
		    }
		    if (!parentVal) {
		      return childVal
		    }
		    // when parentVal & childVal are both present,
		    // we need to return a function that returns the
		    // merged result of both functions... no need to
		    // check if parentVal is a function here because
		    // it has to be a function to pass previous merges.
		    return function mergedDataFn () {
		      return mergeData(
		        childVal.call(this),
		        parentVal.call(this)
		      )
		    }
		  } else if (parentVal || childVal) {
		    return function mergedInstanceDataFn () {
		      // instance merge
		      var instanceData = typeof childVal === 'function'
		        ? childVal.call(vm)
		        : childVal
		      var defaultData = typeof parentVal === 'function'
		        ? parentVal.call(vm)
		        : undefined
		      if (instanceData) {
		        return mergeData(instanceData, defaultData)
		      } else {
		        return defaultData
		      }
		    }
		  }
		}

		/**
		 * El
		 */

		strats.el = function (parentVal, childVal, vm) {
		  if (!vm && childVal && typeof childVal !== 'function') {
		    ("development") !== 'production' && _.warn(
		      'The "el" option should be a function ' +
		      'that returns a per-instance value in component ' +
		      'definitions.'
		    )
		    return
		  }
		  var ret = childVal || parentVal
		  // invoke the element factory if this is instance merge
		  return vm && typeof ret === 'function'
		    ? ret.call(vm)
		    : ret
		}

		/**
		 * Hooks and param attributes are merged as arrays.
		 */

		strats.created =
		strats.ready =
		strats.attached =
		strats.detached =
		strats.beforeCompile =
		strats.compiled =
		strats.beforeDestroy =
		strats.destroyed =
		strats.props = function (parentVal, childVal) {
		  return childVal
		    ? parentVal
		      ? parentVal.concat(childVal)
		      : _.isArray(childVal)
		        ? childVal
		        : [childVal]
		    : parentVal
		}

		/**
		 * 0.11 deprecation warning
		 */

		strats.paramAttributes = function () {
		  /* istanbul ignore next */
		  ("development") !== 'production' && _.warn(
		    '"paramAttributes" option has been deprecated in 0.12. ' +
		    'Use "props" instead.'
		  )
		}

		/**
		 * Assets
		 *
		 * When a vm is present (instance creation), we need to do
		 * a three-way merge between constructor options, instance
		 * options and parent options.
		 */

		function mergeAssets (parentVal, childVal) {
		  var res = Object.create(parentVal)
		  return childVal
		    ? extend(res, guardArrayAssets(childVal))
		    : res
		}

		config._assetTypes.forEach(function (type) {
		  strats[type + 's'] = mergeAssets
		})

		/**
		 * Events & Watchers.
		 *
		 * Events & watchers hashes should not overwrite one
		 * another, so we merge them as arrays.
		 */

		strats.watch =
		strats.events = function (parentVal, childVal) {
		  if (!childVal) return parentVal
		  if (!parentVal) return childVal
		  var ret = {}
		  extend(ret, parentVal)
		  for (var key in childVal) {
		    var parent = ret[key]
		    var child = childVal[key]
		    if (parent && !_.isArray(parent)) {
		      parent = [parent]
		    }
		    ret[key] = parent
		      ? parent.concat(child)
		      : [child]
		  }
		  return ret
		}

		/**
		 * Other object hashes.
		 */

		strats.methods =
		strats.computed = function (parentVal, childVal) {
		  if (!childVal) return parentVal
		  if (!parentVal) return childVal
		  var ret = Object.create(parentVal)
		  extend(ret, childVal)
		  return ret
		}

		/**
		 * Default strategy.
		 */

		var defaultStrat = function (parentVal, childVal) {
		  return childVal === undefined
		    ? parentVal
		    : childVal
		}

		/**
		 * Make sure component options get converted to actual
		 * constructors.
		 *
		 * @param {Object} options
		 */

		function guardComponents (options) {
		  if (options.components) {
		    var components = options.components =
		      guardArrayAssets(options.components)
		    var def
		    var ids = Object.keys(components)
		    for (var i = 0, l = ids.length; i < l; i++) {
		      var key = ids[i]
		      if (_.commonTagRE.test(key)) {
		        ("development") !== 'production' && _.warn(
		          'Do not use built-in HTML elements as component ' +
		          'id: ' + key
		        )
		        continue
		      }
		      def = components[key]
		      if (_.isPlainObject(def)) {
		        def.id = def.id || key
		        components[key] = def._Ctor || (def._Ctor = _.Vue.extend(def))
		      }
		    }
		  }
		}

		/**
		 * Ensure all props option syntax are normalized into the
		 * Object-based format.
		 *
		 * @param {Object} options
		 */

		function guardProps (options) {
		  var props = options.props
		  if (_.isPlainObject(props)) {
		    options.props = Object.keys(props).map(function (key) {
		      var val = props[key]
		      if (!_.isPlainObject(val)) {
		        val = { type: val }
		      }
		      val.name = key
		      return val
		    })
		  } else if (_.isArray(props)) {
		    options.props = props.map(function (prop) {
		      return typeof prop === 'string'
		        ? { name: prop }
		        : prop
		    })
		  }
		}

		/**
		 * Guard an Array-format assets option and converted it
		 * into the key-value Object format.
		 *
		 * @param {Object|Array} assets
		 * @return {Object}
		 */

		function guardArrayAssets (assets) {
		  if (_.isArray(assets)) {
		    var res = {}
		    var i = assets.length
		    var asset
		    while (i--) {
		      asset = assets[i]
		      var id = asset.id || (asset.options && asset.options.id)
		      if (!id) {
		        ("development") !== 'production' && _.warn(
		          'Array-syntax assets must provide an id field.'
		        )
		      } else {
		        res[id] = asset
		      }
		    }
		    return res
		  }
		  return assets
		}

		/**
		 * Merge two option objects into a new one.
		 * Core utility used in both instantiation and inheritance.
		 *
		 * @param {Object} parent
		 * @param {Object} child
		 * @param {Vue} [vm] - if vm is present, indicates this is
		 *                     an instantiation merge.
		 */

		exports.mergeOptions = function merge (parent, child, vm) {
		  guardComponents(child)
		  guardProps(child)
		  var options = {}
		  var key
		  if (child.mixins) {
		    for (var i = 0, l = child.mixins.length; i < l; i++) {
		      parent = merge(parent, child.mixins[i], vm)
		    }
		  }
		  for (key in parent) {
		    mergeField(key)
		  }
		  for (key in child) {
		    if (!(parent.hasOwnProperty(key))) {
		      mergeField(key)
		    }
		  }
		  function mergeField (key) {
		    var strat = strats[key] || defaultStrat
		    options[key] = strat(parent[key], child[key], vm, key)
		  }
		  return options
		}

		/**
		 * Resolve an asset.
		 * This function is used because child instances need access
		 * to assets defined in its ancestor chain.
		 *
		 * @param {Object} options
		 * @param {String} type
		 * @param {String} id
		 * @return {Object|Function}
		 */

		exports.resolveAsset = function resolve (options, type, id) {
		  var camelizedId = _.camelize(id)
		  var asset = options[type][id] || options[type][camelizedId]
		  while (
		    !asset && options._parent &&
		    (!config.strict || options._repeat)
		  ) {
		    options = options._parent.$options
		    asset = options[type][id] || options[type][camelizedId]
		  }
		  return asset
		}


	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		/**
		 * Check if an element is a component, if yes return its
		 * component id.
		 *
		 * @param {Element} el
		 * @param {Object} options
		 * @return {String|undefined}
		 */

		exports.commonTagRE = /^(div|p|span|img|a|br|ul|ol|li|h1|h2|h3|h4|h5|code|pre)$/
		exports.checkComponent = function (el, options) {
		  var tag = el.tagName.toLowerCase()
		  if (tag === 'component') {
		    // dynamic syntax
		    var exp = el.getAttribute('is')
		    el.removeAttribute('is')
		    return exp
		  } else if (
		    !exports.commonTagRE.test(tag) &&
		    _.resolveAsset(options, 'components', tag)
		  ) {
		    return tag
		  /* eslint-disable no-cond-assign */
		  } else if (tag = _.attr(el, 'component')) {
		  /* eslint-enable no-cond-assign */
		    return tag
		  }
		}

		/**
		 * Set a prop's initial value on a vm and its data object.
		 * The vm may have inherit:true so we need to make sure
		 * we don't accidentally overwrite parent value.
		 *
		 * @param {Vue} vm
		 * @param {Object} prop
		 * @param {*} value
		 */

		exports.initProp = function (vm, prop, value) {
		  if (exports.assertProp(prop, value)) {
		    var key = prop.path
		    if (key in vm) {
		      _.define(vm, key, value, true)
		    } else {
		      vm[key] = value
		    }
		    vm._data[key] = value
		  }
		}

		/**
		 * Assert whether a prop is valid.
		 *
		 * @param {Object} prop
		 * @param {*} value
		 */

		exports.assertProp = function (prop, value) {
		  // if a prop is not provided and is not required,
		  // skip the check.
		  if (prop.raw === null && !prop.required) {
		    return true
		  }
		  var options = prop.options
		  var type = options.type
		  var valid = true
		  var expectedType
		  if (type) {
		    if (type === String) {
		      expectedType = 'string'
		      valid = typeof value === expectedType
		    } else if (type === Number) {
		      expectedType = 'number'
		      valid = typeof value === 'number'
		    } else if (type === Boolean) {
		      expectedType = 'boolean'
		      valid = typeof value === 'boolean'
		    } else if (type === Function) {
		      expectedType = 'function'
		      valid = typeof value === 'function'
		    } else if (type === Object) {
		      expectedType = 'object'
		      valid = _.isPlainObject(value)
		    } else if (type === Array) {
		      expectedType = 'array'
		      valid = _.isArray(value)
		    } else {
		      valid = value instanceof type
		    }
		  }
		  if (!valid) {
		    ("development") !== 'production' && _.warn(
		      'Invalid prop: type check failed for ' +
		      prop.path + '="' + prop.raw + '".' +
		      ' Expected ' + formatType(expectedType) +
		      ', got ' + formatValue(value) + '.'
		    )
		    return false
		  }
		  var validator = options.validator
		  if (validator) {
		    if (!validator.call(null, value)) {
		      ("development") !== 'production' && _.warn(
		        'Invalid prop: custom validator check failed for ' +
		        prop.path + '="' + prop.raw + '"'
		      )
		      return false
		    }
		  }
		  return true
		}

		function formatType (val) {
		  return val
		    ? val.charAt(0).toUpperCase() + val.slice(1)
		    : 'custom type'
		}

		function formatValue (val) {
		  return Object.prototype.toString.call(val).slice(8, -1)
		}


	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Enable debug utilities.
		 */

		if (true) {

		  var config = __webpack_require__(5)
		  var hasConsole = typeof console !== 'undefined'

		  /**
		   * Log a message.
		   *
		   * @param {String} msg
		   */

		  exports.log = function (msg) {
		    if (hasConsole && config.debug) {
		      console.log('[Vue info]: ' + msg)
		    }
		  }

		  /**
		   * We've got a problem here.
		   *
		   * @param {String} msg
		   */

		  exports.warn = function (msg, e) {
		    if (hasConsole && (!config.silent || config.debug)) {
		      console.warn('[Vue warn]: ' + msg)
		      /* istanbul ignore if */
		      if (config.debug) {
		        console.warn((e || new Error('Warning Stack Trace')).stack)
		      }
		    }
		  }

		  /**
		   * Assert asset exists
		   */

		  exports.assertAsset = function (val, type, id) {
		    /* istanbul ignore if */
		    if (type === 'directive') {
		      if (id === 'with') {
		        exports.warn(
		          'v-with has been deprecated in ^0.12.0. ' +
		          'Use props instead.'
		        )
		        return
		      }
		      if (id === 'events') {
		        exports.warn(
		          'v-events has been deprecated in ^0.12.0. ' +
		          'Pass down methods as callback props instead.'
		        )
		        return
		      }
		    }
		    if (!val) {
		      exports.warn('Failed to resolve ' + type + ': ' + id)
		    }
		  }
		}


	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var config = __webpack_require__(5)

		/**
		 * Expose useful internals
		 */

		exports.util = _
		exports.config = config
		exports.nextTick = _.nextTick
		exports.compiler = __webpack_require__(10)

		exports.parsers = {
		  path: __webpack_require__(20),
		  text: __webpack_require__(13),
		  template: __webpack_require__(22),
		  directive: __webpack_require__(15),
		  expression: __webpack_require__(19)
		}

		/**
		 * Each instance constructor, including Vue, has a unique
		 * cid. This enables us to create wrapped "child
		 * constructors" for prototypal inheritance and cache them.
		 */

		exports.cid = 0
		var cid = 1

		/**
		 * Class inheritance
		 *
		 * @param {Object} extendOptions
		 */

		exports.extend = function (extendOptions) {
		  extendOptions = extendOptions || {}
		  var Super = this
		  var Sub = createClass(
		    extendOptions.name ||
		    Super.options.name ||
		    'VueComponent'
		  )
		  Sub.prototype = Object.create(Super.prototype)
		  Sub.prototype.constructor = Sub
		  Sub.cid = cid++
		  Sub.options = _.mergeOptions(
		    Super.options,
		    extendOptions
		  )
		  Sub['super'] = Super
		  // allow further extension
		  Sub.extend = Super.extend
		  // create asset registers, so extended classes
		  // can have their private assets too.
		  config._assetTypes.forEach(function (type) {
		    Sub[type] = Super[type]
		  })
		  return Sub
		}

		/**
		 * A function that returns a sub-class constructor with the
		 * given name. This gives us much nicer output when
		 * logging instances in the console.
		 *
		 * @param {String} name
		 * @return {Function}
		 */

		function createClass (name) {
		  return new Function(
		    'return function ' + _.classify(name) +
		    ' (options) { this._init(options) }'
		  )()
		}

		/**
		 * Plugin system
		 *
		 * @param {Object} plugin
		 */

		exports.use = function (plugin) {
		  // additional parameters
		  var args = _.toArray(arguments, 1)
		  args.unshift(this)
		  if (typeof plugin.install === 'function') {
		    plugin.install.apply(plugin, args)
		  } else {
		    plugin.apply(null, args)
		  }
		  return this
		}

		/**
		 * Create asset registration methods with the following
		 * signature:
		 *
		 * @param {String} id
		 * @param {*} definition
		 */

		config._assetTypes.forEach(function (type) {
		  exports[type] = function (id, definition) {
		    if (!definition) {
		      return this.options[type + 's'][id]
		    } else {
		      if (
		        type === 'component' &&
		        _.isPlainObject(definition)
		      ) {
		        definition.name = id
		        definition = _.Vue.extend(definition)
		      }
		      this.options[type + 's'][id] = definition
		    }
		  }
		})


	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		_.extend(exports, __webpack_require__(11))
		_.extend(exports, __webpack_require__(24))


	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var compileProps = __webpack_require__(12)
		var config = __webpack_require__(5)
		var textParser = __webpack_require__(13)
		var dirParser = __webpack_require__(15)
		var templateParser = __webpack_require__(22)
		var resolveAsset = _.resolveAsset
		var componentDef = __webpack_require__(23)

		// terminal directives
		var terminalDirectives = [
		  'repeat',
		  'if'
		]

		/**
		 * Compile a template and return a reusable composite link
		 * function, which recursively contains more link functions
		 * inside. This top level compile function would normally
		 * be called on instance root nodes, but can also be used
		 * for partial compilation if the partial argument is true.
		 *
		 * The returned composite link function, when called, will
		 * return an unlink function that tearsdown all directives
		 * created during the linking phase.
		 *
		 * @param {Element|DocumentFragment} el
		 * @param {Object} options
		 * @param {Boolean} partial
		 * @param {Vue} [host] - host vm of transcluded content
		 * @return {Function}
		 */

		exports.compile = function (el, options, partial, host) {
		  // link function for the node itself.
		  var nodeLinkFn = partial || !options._asComponent
		    ? compileNode(el, options)
		    : null
		  // link function for the childNodes
		  var childLinkFn =
		    !(nodeLinkFn && nodeLinkFn.terminal) &&
		    el.tagName !== 'SCRIPT' &&
		    el.hasChildNodes()
		      ? compileNodeList(el.childNodes, options)
		      : null

		  /**
		   * A composite linker function to be called on a already
		   * compiled piece of DOM, which instantiates all directive
		   * instances.
		   *
		   * @param {Vue} vm
		   * @param {Element|DocumentFragment} el
		   * @return {Function|undefined}
		   */

		  return function compositeLinkFn (vm, el) {
		    // cache childNodes before linking parent, fix #657
		    var childNodes = _.toArray(el.childNodes)
		    // link
		    var dirs = linkAndCapture(function () {
		      if (nodeLinkFn) nodeLinkFn(vm, el, host)
		      if (childLinkFn) childLinkFn(vm, childNodes, host)
		    }, vm)
		    return makeUnlinkFn(vm, dirs)
		  }
		}

		/**
		 * Apply a linker to a vm/element pair and capture the
		 * directives created during the process.
		 *
		 * @param {Function} linker
		 * @param {Vue} vm
		 */

		function linkAndCapture (linker, vm) {
		  var originalDirCount = vm._directives.length
		  linker()
		  return vm._directives.slice(originalDirCount)
		}

		/**
		 * Linker functions return an unlink function that
		 * tearsdown all directives instances generated during
		 * the process.
		 *
		 * We create unlink functions with only the necessary
		 * information to avoid retaining additional closures.
		 *
		 * @param {Vue} vm
		 * @param {Array} dirs
		 * @param {Vue} [context]
		 * @param {Array} [contextDirs]
		 * @return {Function}
		 */

		function makeUnlinkFn (vm, dirs, context, contextDirs) {
		  return function unlink (destroying) {
		    teardownDirs(vm, dirs, destroying)
		    if (context && contextDirs) {
		      teardownDirs(context, contextDirs)
		    }
		  }
		}

		/**
		 * Teardown partial linked directives.
		 *
		 * @param {Vue} vm
		 * @param {Array} dirs
		 * @param {Boolean} destroying
		 */

		function teardownDirs (vm, dirs, destroying) {
		  var i = dirs.length
		  while (i--) {
		    dirs[i]._teardown()
		    if (!destroying) {
		      vm._directives.$remove(dirs[i])
		    }
		  }
		}

		/**
		 * Compile link props on an instance.
		 *
		 * @param {Vue} vm
		 * @param {Element} el
		 * @param {Object} options
		 * @return {Function}
		 */

		exports.compileAndLinkProps = function (vm, el, props) {
		  var propsLinkFn = compileProps(el, props)
		  var propDirs = linkAndCapture(function () {
		    propsLinkFn(vm, null)
		  }, vm)
		  return makeUnlinkFn(vm, propDirs)
		}

		/**
		 * Compile the root element of an instance.
		 *
		 * 1. attrs on context container (context scope)
		 * 2. attrs on the component template root node, if
		 *    replace:true (child scope)
		 *
		 * If this is a fragment instance, we only need to compile 1.
		 *
		 * @param {Vue} vm
		 * @param {Element} el
		 * @param {Object} options
		 * @return {Function}
		 */

		exports.compileRoot = function (el, options) {
		  var containerAttrs = options._containerAttrs
		  var replacerAttrs = options._replacerAttrs
		  var contextLinkFn, replacerLinkFn

		  // only need to compile other attributes for
		  // non-fragment instances
		  if (el.nodeType !== 11) {
		    // for components, container and replacer need to be
		    // compiled separately and linked in different scopes.
		    if (options._asComponent) {
		      // 2. container attributes
		      if (containerAttrs) {
		        contextLinkFn = compileDirectives(containerAttrs, options)
		      }
		      if (replacerAttrs) {
		        // 3. replacer attributes
		        replacerLinkFn = compileDirectives(replacerAttrs, options)
		      }
		    } else {
		      // non-component, just compile as a normal element.
		      replacerLinkFn = compileDirectives(el.attributes, options)
		    }
		  }

		  return function rootLinkFn (vm, el) {
		    // link context scope dirs
		    var context = vm._context
		    var contextDirs
		    if (context && contextLinkFn) {
		      contextDirs = linkAndCapture(function () {
		        contextLinkFn(context, el)
		      }, context)
		    }

		    // link self
		    var selfDirs = linkAndCapture(function () {
		      if (replacerLinkFn) replacerLinkFn(vm, el)
		    }, vm)

		    // return the unlink function that tearsdown context
		    // container directives.
		    return makeUnlinkFn(vm, selfDirs, context, contextDirs)
		  }
		}

		/**
		 * Compile a node and return a nodeLinkFn based on the
		 * node type.
		 *
		 * @param {Node} node
		 * @param {Object} options
		 * @return {Function|null}
		 */

		function compileNode (node, options) {
		  var type = node.nodeType
		  if (type === 1 && node.tagName !== 'SCRIPT') {
		    return compileElement(node, options)
		  } else if (type === 3 && config.interpolate && node.data.trim()) {
		    return compileTextNode(node, options)
		  } else {
		    return null
		  }
		}

		/**
		 * Compile an element and return a nodeLinkFn.
		 *
		 * @param {Element} el
		 * @param {Object} options
		 * @return {Function|null}
		 */

		function compileElement (el, options) {
		  // preprocess textareas.
		  // textarea treats its text content as the initial value.
		  // just bind it as a v-attr directive for value.
		  if (el.tagName === 'TEXTAREA') {
		    if (textParser.parse(el.value)) {
		      el.setAttribute('value', el.value)
		    }
		  }
		  var linkFn
		  var hasAttrs = el.hasAttributes()
		  // check terminal directives (repeat & if)
		  if (hasAttrs) {
		    linkFn = checkTerminalDirectives(el, options)
		  }
		  // check element directives
		  if (!linkFn) {
		    linkFn = checkElementDirectives(el, options)
		  }
		  // check component
		  if (!linkFn) {
		    linkFn = checkComponent(el, options)
		  }
		  // normal directives
		  if (!linkFn && hasAttrs) {
		    linkFn = compileDirectives(el.attributes, options)
		  }
		  return linkFn
		}

		/**
		 * Compile a textNode and return a nodeLinkFn.
		 *
		 * @param {TextNode} node
		 * @param {Object} options
		 * @return {Function|null} textNodeLinkFn
		 */

		function compileTextNode (node, options) {
		  var tokens = textParser.parse(node.data)
		  if (!tokens) {
		    return null
		  }
		  var frag = document.createDocumentFragment()
		  var el, token
		  for (var i = 0, l = tokens.length; i < l; i++) {
		    token = tokens[i]
		    el = token.tag
		      ? processTextToken(token, options)
		      : document.createTextNode(token.value)
		    frag.appendChild(el)
		  }
		  return makeTextNodeLinkFn(tokens, frag, options)
		}

		/**
		 * Process a single text token.
		 *
		 * @param {Object} token
		 * @param {Object} options
		 * @return {Node}
		 */

		function processTextToken (token, options) {
		  var el
		  if (token.oneTime) {
		    el = document.createTextNode(token.value)
		  } else {
		    if (token.html) {
		      el = document.createComment('v-html')
		      setTokenType('html')
		    } else {
		      // IE will clean up empty textNodes during
		      // frag.cloneNode(true), so we have to give it
		      // something here...
		      el = document.createTextNode(' ')
		      setTokenType('text')
		    }
		  }
		  function setTokenType (type) {
		    token.type = type
		    token.def = resolveAsset(options, 'directives', type)
		    token.descriptor = dirParser.parse(token.value)[0]
		  }
		  return el
		}

		/**
		 * Build a function that processes a textNode.
		 *
		 * @param {Array<Object>} tokens
		 * @param {DocumentFragment} frag
		 */

		function makeTextNodeLinkFn (tokens, frag) {
		  return function textNodeLinkFn (vm, el) {
		    var fragClone = frag.cloneNode(true)
		    var childNodes = _.toArray(fragClone.childNodes)
		    var token, value, node
		    for (var i = 0, l = tokens.length; i < l; i++) {
		      token = tokens[i]
		      value = token.value
		      if (token.tag) {
		        node = childNodes[i]
		        if (token.oneTime) {
		          value = vm.$eval(value)
		          if (token.html) {
		            _.replace(node, templateParser.parse(value, true))
		          } else {
		            node.data = value
		          }
		        } else {
		          vm._bindDir(token.type, node,
		                      token.descriptor, token.def)
		        }
		      }
		    }
		    _.replace(el, fragClone)
		  }
		}

		/**
		 * Compile a node list and return a childLinkFn.
		 *
		 * @param {NodeList} nodeList
		 * @param {Object} options
		 * @return {Function|undefined}
		 */

		function compileNodeList (nodeList, options) {
		  var linkFns = []
		  var nodeLinkFn, childLinkFn, node
		  for (var i = 0, l = nodeList.length; i < l; i++) {
		    node = nodeList[i]
		    nodeLinkFn = compileNode(node, options)
		    childLinkFn =
		      !(nodeLinkFn && nodeLinkFn.terminal) &&
		      node.tagName !== 'SCRIPT' &&
		      node.hasChildNodes()
		        ? compileNodeList(node.childNodes, options)
		        : null
		    linkFns.push(nodeLinkFn, childLinkFn)
		  }
		  return linkFns.length
		    ? makeChildLinkFn(linkFns)
		    : null
		}

		/**
		 * Make a child link function for a node's childNodes.
		 *
		 * @param {Array<Function>} linkFns
		 * @return {Function} childLinkFn
		 */

		function makeChildLinkFn (linkFns) {
		  return function childLinkFn (vm, nodes, host) {
		    var node, nodeLinkFn, childrenLinkFn
		    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
		      node = nodes[n]
		      nodeLinkFn = linkFns[i++]
		      childrenLinkFn = linkFns[i++]
		      // cache childNodes before linking parent, fix #657
		      var childNodes = _.toArray(node.childNodes)
		      if (nodeLinkFn) {
		        nodeLinkFn(vm, node, host)
		      }
		      if (childrenLinkFn) {
		        childrenLinkFn(vm, childNodes, host)
		      }
		    }
		  }
		}

		/**
		 * Check for element directives (custom elements that should
		 * be resovled as terminal directives).
		 *
		 * @param {Element} el
		 * @param {Object} options
		 */

		function checkElementDirectives (el, options) {
		  var tag = el.tagName.toLowerCase()
		  if (_.commonTagRE.test(tag)) return
		  var def = resolveAsset(options, 'elementDirectives', tag)
		  if (def) {
		    return makeTerminalNodeLinkFn(el, tag, '', options, def)
		  }
		}

		/**
		 * Check if an element is a component. If yes, return
		 * a component link function.
		 *
		 * @param {Element} el
		 * @param {Object} options
		 * @param {Boolean} hasAttrs
		 * @return {Function|undefined}
		 */

		function checkComponent (el, options, hasAttrs) {
		  var componentId = _.checkComponent(el, options, hasAttrs)
		  if (componentId) {
		    var componentLinkFn = function (vm, el, host) {
		      vm._bindDir('component', el, {
		        expression: componentId
		      }, componentDef, host)
		    }
		    componentLinkFn.terminal = true
		    return componentLinkFn
		  }
		}

		/**
		 * Check an element for terminal directives in fixed order.
		 * If it finds one, return a terminal link function.
		 *
		 * @param {Element} el
		 * @param {Object} options
		 * @return {Function} terminalLinkFn
		 */

		function checkTerminalDirectives (el, options) {
		  if (_.attr(el, 'pre') !== null) {
		    return skip
		  }
		  var value, dirName
		  for (var i = 0, l = terminalDirectives.length; i < l; i++) {
		    dirName = terminalDirectives[i]
		    if ((value = _.attr(el, dirName)) !== null) {
		      return makeTerminalNodeLinkFn(el, dirName, value, options)
		    }
		  }
		}

		function skip () {}
		skip.terminal = true

		/**
		 * Build a node link function for a terminal directive.
		 * A terminal link function terminates the current
		 * compilation recursion and handles compilation of the
		 * subtree in the directive.
		 *
		 * @param {Element} el
		 * @param {String} dirName
		 * @param {String} value
		 * @param {Object} options
		 * @param {Object} [def]
		 * @return {Function} terminalLinkFn
		 */

		function makeTerminalNodeLinkFn (el, dirName, value, options, def) {
		  var descriptor = dirParser.parse(value)[0]
		  // no need to call resolveAsset since terminal directives
		  // are always internal
		  def = def || options.directives[dirName]
		  var fn = function terminalNodeLinkFn (vm, el, host) {
		    vm._bindDir(dirName, el, descriptor, def, host)
		  }
		  fn.terminal = true
		  return fn
		}

		/**
		 * Compile the directives on an element and return a linker.
		 *
		 * @param {Array|NamedNodeMap} attrs
		 * @param {Object} options
		 * @return {Function}
		 */

		function compileDirectives (attrs, options) {
		  var i = attrs.length
		  var dirs = []
		  var attr, name, value, dir, dirName, dirDef
		  while (i--) {
		    attr = attrs[i]
		    name = attr.name
		    value = attr.value
		    if (name.indexOf(config.prefix) === 0) {
		      dirName = name.slice(config.prefix.length)
		      dirDef = resolveAsset(options, 'directives', dirName)
		      if (true) {
		        _.assertAsset(dirDef, 'directive', dirName)
		      }
		      if (dirDef) {
		        dirs.push({
		          name: dirName,
		          descriptors: dirParser.parse(value),
		          def: dirDef
		        })
		      }
		    } else if (config.interpolate) {
		      dir = collectAttrDirective(name, value, options)
		      if (dir) {
		        dirs.push(dir)
		      }
		    }
		  }
		  // sort by priority, LOW to HIGH
		  if (dirs.length) {
		    dirs.sort(directiveComparator)
		    return makeNodeLinkFn(dirs)
		  }
		}

		/**
		 * Build a link function for all directives on a single node.
		 *
		 * @param {Array} directives
		 * @return {Function} directivesLinkFn
		 */

		function makeNodeLinkFn (directives) {
		  return function nodeLinkFn (vm, el, host) {
		    // reverse apply because it's sorted low to high
		    var i = directives.length
		    var dir, j, k
		    while (i--) {
		      dir = directives[i]
		      if (dir._link) {
		        // custom link fn
		        dir._link(vm, el)
		      } else {
		        k = dir.descriptors.length
		        for (j = 0; j < k; j++) {
		          vm._bindDir(dir.name, el,
		            dir.descriptors[j], dir.def, host)
		        }
		      }
		    }
		  }
		}

		/**
		 * Check an attribute for potential dynamic bindings,
		 * and return a directive object.
		 *
		 * Special case: class interpolations are translated into
		 * v-class instead v-attr, so that it can work with user
		 * provided v-class bindings.
		 *
		 * @param {String} name
		 * @param {String} value
		 * @param {Object} options
		 * @return {Object}
		 */

		function collectAttrDirective (name, value, options) {
		  var tokens = textParser.parse(value)
		  var isClass = name === 'class'
		  if (tokens) {
		    var dirName = isClass ? 'class' : 'attr'
		    var def = options.directives[dirName]
		    var i = tokens.length
		    var allOneTime = true
		    while (i--) {
		      var token = tokens[i]
		      if (token.tag && !token.oneTime) {
		        allOneTime = false
		      }
		    }
		    return {
		      def: def,
		      _link: allOneTime
		        ? function (vm, el) {
		            el.setAttribute(name, vm.$interpolate(value))
		          }
		        : function (vm, el) {
		            var exp = textParser.tokensToExp(tokens, vm)
		            var desc = isClass
		              ? dirParser.parse(exp)[0]
		              : dirParser.parse(name + ':' + exp)[0]
		            if (isClass) {
		              desc._rawClass = value
		            }
		            vm._bindDir(dirName, el, desc, def)
		          }
		    }
		  }
		}

		/**
		 * Directive priority sort comparator
		 *
		 * @param {Object} a
		 * @param {Object} b
		 */

		function directiveComparator (a, b) {
		  a = a.def.priority || 0
		  b = b.def.priority || 0
		  return a > b ? 1 : -1
		}


	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var textParser = __webpack_require__(13)
		var propDef = __webpack_require__(16)
		var propBindingModes = __webpack_require__(5)._propBindingModes

		// regexes
		var identRE = __webpack_require__(20).identRE
		var dataAttrRE = /^data-/
		var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/
		var literalValueRE = /^(true|false)$|^\d.*/

		/**
		 * Compile param attributes on a root element and return
		 * a props link function.
		 *
		 * @param {Element|DocumentFragment} el
		 * @param {Array} propOptions
		 * @return {Function} propsLinkFn
		 */

		module.exports = function compileProps (el, propOptions) {
		  var props = []
		  var i = propOptions.length
		  var options, name, attr, value, path, prop, literal, single
		  while (i--) {
		    options = propOptions[i]
		    name = options.name
		    // props could contain dashes, which will be
		    // interpreted as minus calculations by the parser
		    // so we need to camelize the path here
		    path = _.camelize(name.replace(dataAttrRE, ''))
		    if (!identRE.test(path)) {
		      ("development") !== 'production' && _.warn(
		        'Invalid prop key: "' + name + '". Prop keys ' +
		        'must be valid identifiers.'
		      )
		      continue
		    }
		    attr = _.hyphenate(name)
		    value = el.getAttribute(attr)
		    if (value === null) {
		      attr = 'data-' + attr
		      value = el.getAttribute(attr)
		    }
		    // create a prop descriptor
		    prop = {
		      name: name,
		      raw: value,
		      path: path,
		      options: options,
		      mode: propBindingModes.ONE_WAY
		    }
		    if (value !== null) {
		      // important so that this doesn't get compiled
		      // again as a normal attribute binding
		      el.removeAttribute(attr)
		      var tokens = textParser.parse(value)
		      if (tokens) {
		        prop.dynamic = true
		        prop.parentPath = textParser.tokensToExp(tokens)
		        // check prop binding type.
		        single = tokens.length === 1
		        literal = literalValueRE.test(prop.parentPath)
		        // one time: {{* prop}}
		        if (literal || (single && tokens[0].oneTime)) {
		          prop.mode = propBindingModes.ONE_TIME
		        } else if (
		          !literal &&
		          (single && tokens[0].twoWay)
		        ) {
		          if (settablePathRE.test(prop.parentPath)) {
		            prop.mode = propBindingModes.TWO_WAY
		          } else {
		            ("development") !== 'production' && _.warn(
		              'Cannot bind two-way prop with non-settable ' +
		              'parent path: ' + prop.parentPath
		            )
		          }
		        }
		        if (
		          ("development") !== 'production' &&
		          options.twoWay &&
		          prop.mode !== propBindingModes.TWO_WAY
		        ) {
		          _.warn(
		            'Prop "' + name + '" expects a two-way binding type.'
		          )
		        }
		      }
		    } else if (options && options.required) {
		      ("development") !== 'production' && _.warn(
		        'Missing required prop: ' + name
		      )
		    }
		    props.push(prop)
		  }
		  return makePropsLinkFn(props)
		}

		/**
		 * Build a function that applies props to a vm.
		 *
		 * @param {Array} props
		 * @return {Function} propsLinkFn
		 */

		function makePropsLinkFn (props) {
		  return function propsLinkFn (vm, el) {
		    // store resolved props info
		    vm._props = {}
		    var i = props.length
		    var prop, path, options, value
		    while (i--) {
		      prop = props[i]
		      path = prop.path
		      vm._props[path] = prop
		      options = prop.options
		      if (prop.raw === null) {
		        // initialize absent prop
		        _.initProp(vm, prop, getDefault(options))
		      } else if (prop.dynamic) {
		        // dynamic prop
		        if (vm._context) {
		          if (prop.mode === propBindingModes.ONE_TIME) {
		            // one time binding
		            value = vm._context.$get(prop.parentPath)
		            _.initProp(vm, prop, value)
		          } else {
		            // dynamic binding
		            vm._bindDir('prop', el, prop, propDef)
		          }
		        } else {
		          ("development") !== 'production' && _.warn(
		            'Cannot bind dynamic prop on a root instance' +
		            ' with no parent: ' + prop.name + '="' +
		            prop.raw + '"'
		          )
		        }
		      } else {
		        // literal, cast it and just set once
		        var raw = prop.raw
		        value = options.type === Boolean && raw === ''
		          ? true
		          // do not cast emptry string.
		          // _.toNumber casts empty string to 0.
		          : raw.trim()
		            ? _.toBoolean(_.toNumber(raw))
		            : raw
		        _.initProp(vm, prop, value)
		      }
		    }
		  }
		}

		/**
		 * Get the default value of a prop.
		 *
		 * @param {Object} options
		 * @return {*}
		 */

		function getDefault (options) {
		  // no default, return undefined
		  if (!options.hasOwnProperty('default')) {
		    // absent boolean value defaults to false
		    return options.type === Boolean
		      ? false
		      : undefined
		  }
		  var def = options.default
		  // warn against non-factory defaults for Object & Array
		  if (_.isObject(def)) {
		    ("development") !== 'production' && _.warn(
		      'Object/Array as default prop values will be shared ' +
		      'across multiple instances. Use a factory function ' +
		      'to return the default value instead.'
		    )
		  }
		  // call factory function for non-Function types
		  return typeof def === 'function' && options.type !== Function
		    ? def()
		    : def
		}


	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		var Cache = __webpack_require__(14)
		var config = __webpack_require__(5)
		var dirParser = __webpack_require__(15)
		var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g
		var cache, tagRE, htmlRE, firstChar, lastChar

		/**
		 * Escape a string so it can be used in a RegExp
		 * constructor.
		 *
		 * @param {String} str
		 */

		function escapeRegex (str) {
		  return str.replace(regexEscapeRE, '\\$&')
		}

		/**
		 * Compile the interpolation tag regex.
		 *
		 * @return {RegExp}
		 */

		function compileRegex () {
		  config._delimitersChanged = false
		  var open = config.delimiters[0]
		  var close = config.delimiters[1]
		  firstChar = open.charAt(0)
		  lastChar = close.charAt(close.length - 1)
		  var firstCharRE = escapeRegex(firstChar)
		  var lastCharRE = escapeRegex(lastChar)
		  var openRE = escapeRegex(open)
		  var closeRE = escapeRegex(close)
		  tagRE = new RegExp(
		    firstCharRE + '?' + openRE +
		    '(.+?)' +
		    closeRE + lastCharRE + '?',
		    'g'
		  )
		  htmlRE = new RegExp(
		    '^' + firstCharRE + openRE +
		    '.*' +
		    closeRE + lastCharRE + '$'
		  )
		  // reset cache
		  cache = new Cache(1000)
		}

		/**
		 * Parse a template text string into an array of tokens.
		 *
		 * @param {String} text
		 * @return {Array<Object> | null}
		 *               - {String} type
		 *               - {String} value
		 *               - {Boolean} [html]
		 *               - {Boolean} [oneTime]
		 */

		exports.parse = function (text) {
		  if (config._delimitersChanged) {
		    compileRegex()
		  }
		  var hit = cache.get(text)
		  if (hit) {
		    return hit
		  }
		  text = text.replace(/\n/g, '')
		  if (!tagRE.test(text)) {
		    return null
		  }
		  var tokens = []
		  var lastIndex = tagRE.lastIndex = 0
		  var match, index, value, first, oneTime, twoWay
		  /* eslint-disable no-cond-assign */
		  while (match = tagRE.exec(text)) {
		  /* eslint-enable no-cond-assign */
		    index = match.index
		    // push text token
		    if (index > lastIndex) {
		      tokens.push({
		        value: text.slice(lastIndex, index)
		      })
		    }
		    // tag token
		    first = match[1].charCodeAt(0)
		    oneTime = first === 42 // *
		    twoWay = first === 64  // @
		    value = oneTime || twoWay
		      ? match[1].slice(1)
		      : match[1]
		    tokens.push({
		      tag: true,
		      value: value.trim(),
		      html: htmlRE.test(match[0]),
		      oneTime: oneTime,
		      twoWay: twoWay
		    })
		    lastIndex = index + match[0].length
		  }
		  if (lastIndex < text.length) {
		    tokens.push({
		      value: text.slice(lastIndex)
		    })
		  }
		  cache.put(text, tokens)
		  return tokens
		}

		/**
		 * Format a list of tokens into an expression.
		 * e.g. tokens parsed from 'a {{b}} c' can be serialized
		 * into one single expression as '"a " + b + " c"'.
		 *
		 * @param {Array} tokens
		 * @param {Vue} [vm]
		 * @return {String}
		 */

		exports.tokensToExp = function (tokens, vm) {
		  return tokens.length > 1
		    ? tokens.map(function (token) {
		        return formatToken(token, vm)
		      }).join('+')
		    : formatToken(tokens[0], vm, true)
		}

		/**
		 * Format a single token.
		 *
		 * @param {Object} token
		 * @param {Vue} [vm]
		 * @param {Boolean} single
		 * @return {String}
		 */

		function formatToken (token, vm, single) {
		  return token.tag
		    ? vm && token.oneTime
		      ? '"' + vm.$eval(token.value) + '"'
		      : inlineFilters(token.value, single)
		    : '"' + token.value + '"'
		}

		/**
		 * For an attribute with multiple interpolation tags,
		 * e.g. attr="some-{{thing | filter}}", in order to combine
		 * the whole thing into a single watchable expression, we
		 * have to inline those filters. This function does exactly
		 * that. This is a bit hacky but it avoids heavy changes
		 * to directive parser and watcher mechanism.
		 *
		 * @param {String} exp
		 * @param {Boolean} single
		 * @return {String}
		 */

		var filterRE = /[^|]\|[^|]/
		function inlineFilters (exp, single) {
		  if (!filterRE.test(exp)) {
		    return single
		      ? exp
		      : '(' + exp + ')'
		  } else {
		    var dir = dirParser.parse(exp)[0]
		    if (!dir.filters) {
		      return '(' + exp + ')'
		    } else {
		      return 'this._applyFilters(' +
		        dir.expression + // value
		        ',null,' +       // oldValue (null for read)
		        JSON.stringify(dir.filters) + // filter descriptors
		        ',false)'        // write?
		    }
		  }
		}


	/***/ },
	/* 14 */
	/***/ function(module, exports) {

		/**
		 * A doubly linked list-based Least Recently Used (LRU)
		 * cache. Will keep most recently used items while
		 * discarding least recently used items when its limit is
		 * reached. This is a bare-bone version of
		 * Rasmus Andersson's js-lru:
		 *
		 *   https://github.com/rsms/js-lru
		 *
		 * @param {Number} limit
		 * @constructor
		 */

		function Cache (limit) {
		  this.size = 0
		  this.limit = limit
		  this.head = this.tail = undefined
		  this._keymap = Object.create(null)
		}

		var p = Cache.prototype

		/**
		 * Put <value> into the cache associated with <key>.
		 * Returns the entry which was removed to make room for
		 * the new entry. Otherwise undefined is returned.
		 * (i.e. if there was enough room already).
		 *
		 * @param {String} key
		 * @param {*} value
		 * @return {Entry|undefined}
		 */

		p.put = function (key, value) {
		  var entry = {
		    key: key,
		    value: value
		  }
		  this._keymap[key] = entry
		  if (this.tail) {
		    this.tail.newer = entry
		    entry.older = this.tail
		  } else {
		    this.head = entry
		  }
		  this.tail = entry
		  if (this.size === this.limit) {
		    return this.shift()
		  } else {
		    this.size++
		  }
		}

		/**
		 * Purge the least recently used (oldest) entry from the
		 * cache. Returns the removed entry or undefined if the
		 * cache was empty.
		 */

		p.shift = function () {
		  var entry = this.head
		  if (entry) {
		    this.head = this.head.newer
		    this.head.older = undefined
		    entry.newer = entry.older = undefined
		    this._keymap[entry.key] = undefined
		  }
		  return entry
		}

		/**
		 * Get and register recent use of <key>. Returns the value
		 * associated with <key> or undefined if not in cache.
		 *
		 * @param {String} key
		 * @param {Boolean} returnEntry
		 * @return {Entry|*}
		 */

		p.get = function (key, returnEntry) {
		  var entry = this._keymap[key]
		  if (entry === undefined) return
		  if (entry === this.tail) {
		    return returnEntry
		      ? entry
		      : entry.value
		  }
		  // HEAD--------------TAIL
		  //   <.older   .newer>
		  //  <--- add direction --
		  //   A  B  C  <D>  E
		  if (entry.newer) {
		    if (entry === this.head) {
		      this.head = entry.newer
		    }
		    entry.newer.older = entry.older // C <-- E.
		  }
		  if (entry.older) {
		    entry.older.newer = entry.newer // C. --> E
		  }
		  entry.newer = undefined // D --x
		  entry.older = this.tail // D. --> E
		  if (this.tail) {
		    this.tail.newer = entry // E. <-- D
		  }
		  this.tail = entry
		  return returnEntry
		    ? entry
		    : entry.value
		}

		module.exports = Cache


	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var Cache = __webpack_require__(14)
		var cache = new Cache(1000)
		var argRE = /^[^\{\?]+$|^'[^']*'$|^"[^"]*"$/
		var filterTokenRE = /[^\s'"]+|'[^']+'|"[^"]+"/g
		var reservedArgRE = /^in$|^-?\d+/

		/**
		 * Parser state
		 */

		var str
		var c, i, l
		var inSingle
		var inDouble
		var curly
		var square
		var paren
		var begin
		var argIndex
		var dirs
		var dir
		var lastFilterIndex
		var arg

		/**
		 * Push a directive object into the result Array
		 */

		function pushDir () {
		  dir.raw = str.slice(begin, i).trim()
		  if (dir.expression === undefined) {
		    dir.expression = str.slice(argIndex, i).trim()
		  } else if (lastFilterIndex !== begin) {
		    pushFilter()
		  }
		  if (i === 0 || dir.expression) {
		    dirs.push(dir)
		  }
		}

		/**
		 * Push a filter to the current directive object
		 */

		function pushFilter () {
		  var exp = str.slice(lastFilterIndex, i).trim()
		  var filter
		  if (exp) {
		    filter = {}
		    var tokens = exp.match(filterTokenRE)
		    filter.name = tokens[0]
		    if (tokens.length > 1) {
		      filter.args = tokens.slice(1).map(processFilterArg)
		    }
		  }
		  if (filter) {
		    (dir.filters = dir.filters || []).push(filter)
		  }
		  lastFilterIndex = i + 1
		}

		/**
		 * Check if an argument is dynamic and strip quotes.
		 *
		 * @param {String} arg
		 * @return {Object}
		 */

		function processFilterArg (arg) {
		  var stripped = reservedArgRE.test(arg)
		    ? arg
		    : _.stripQuotes(arg)
		  return {
		    value: stripped || arg,
		    dynamic: !stripped
		  }
		}

		/**
		 * Parse a directive string into an Array of AST-like
		 * objects representing directives.
		 *
		 * Example:
		 *
		 * "click: a = a + 1 | uppercase" will yield:
		 * {
		 *   arg: 'click',
		 *   expression: 'a = a + 1',
		 *   filters: [
		 *     { name: 'uppercase', args: null }
		 *   ]
		 * }
		 *
		 * @param {String} str
		 * @return {Array<Object>}
		 */

		exports.parse = function (s) {

		  var hit = cache.get(s)
		  if (hit) {
		    return hit
		  }

		  // reset parser state
		  str = s
		  inSingle = inDouble = false
		  curly = square = paren = begin = argIndex = 0
		  lastFilterIndex = 0
		  dirs = []
		  dir = {}
		  arg = null

		  for (i = 0, l = str.length; i < l; i++) {
		    c = str.charCodeAt(i)
		    if (inSingle) {
		      // check single quote
		      if (c === 0x27) inSingle = !inSingle
		    } else if (inDouble) {
		      // check double quote
		      if (c === 0x22) inDouble = !inDouble
		    } else if (
		      c === 0x2C && // comma
		      !paren && !curly && !square
		    ) {
		      // reached the end of a directive
		      pushDir()
		      // reset & skip the comma
		      dir = {}
		      begin = argIndex = lastFilterIndex = i + 1
		    } else if (
		      c === 0x3A && // colon
		      !dir.expression &&
		      !dir.arg
		    ) {
		      // argument
		      arg = str.slice(begin, i).trim()
		      // test for valid argument here
		      // since we may have caught stuff like first half of
		      // an object literal or a ternary expression.
		      if (argRE.test(arg)) {
		        argIndex = i + 1
		        dir.arg = _.stripQuotes(arg) || arg
		      }
		    } else if (
		      c === 0x7C && // pipe
		      str.charCodeAt(i + 1) !== 0x7C &&
		      str.charCodeAt(i - 1) !== 0x7C
		    ) {
		      if (dir.expression === undefined) {
		        // first filter, end of expression
		        lastFilterIndex = i + 1
		        dir.expression = str.slice(argIndex, i).trim()
		      } else {
		        // already has filter
		        pushFilter()
		      }
		    } else {
		      switch (c) {
		        case 0x22: inDouble = true; break // "
		        case 0x27: inSingle = true; break // '
		        case 0x28: paren++; break         // (
		        case 0x29: paren--; break         // )
		        case 0x5B: square++; break        // [
		        case 0x5D: square--; break        // ]
		        case 0x7B: curly++; break         // {
		        case 0x7D: curly--; break         // }
		      }
		    }
		  }

		  if (i === 0 || begin !== i) {
		    pushDir()
		  }

		  cache.put(s, dirs)
		  return dirs
		}


	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		// NOTE: the prop internal directive is compiled and linked
		// during _initScope(), before the created hook is called.
		// The purpose is to make the initial prop values available
		// inside `created` hooks and `data` functions.

		var _ = __webpack_require__(1)
		var Watcher = __webpack_require__(17)
		var bindingModes = __webpack_require__(5)._propBindingModes

		module.exports = {

		  bind: function () {

		    var child = this.vm
		    var parent = child._context
		    // passed in from compiler directly
		    var prop = this._descriptor
		    var childKey = prop.path
		    var parentKey = prop.parentPath

		    this.parentWatcher = new Watcher(
		      parent,
		      parentKey,
		      function (val) {
		        if (_.assertProp(prop, val)) {
		          child[childKey] = val
		        }
		      }
		    )

		    // set the child initial value.
		    var value = this.parentWatcher.value
		    if (childKey === '$data') {
		      child._data = value
		    } else {
		      _.initProp(child, prop, value)
		    }

		    // setup two-way binding
		    if (prop.mode === bindingModes.TWO_WAY) {
		      // important: defer the child watcher creation until
		      // the created hook (after data observation)
		      var self = this
		      child.$once('hook:created', function () {
		        self.childWatcher = new Watcher(
		          child,
		          childKey,
		          function (val) {
		            parent.$set(parentKey, val)
		          }
		        )
		      })
		    }
		  },

		  unbind: function () {
		    this.parentWatcher.teardown()
		    if (this.childWatcher) {
		      this.childWatcher.teardown()
		    }
		  }
		}


	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var config = __webpack_require__(5)
		var Dep = __webpack_require__(18)
		var expParser = __webpack_require__(19)
		var batcher = __webpack_require__(21)
		var uid = 0

		/**
		 * A watcher parses an expression, collects dependencies,
		 * and fires callback when the expression value changes.
		 * This is used for both the $watch() api and directives.
		 *
		 * @param {Vue} vm
		 * @param {String} expression
		 * @param {Function} cb
		 * @param {Object} options
		 *                 - {Array} filters
		 *                 - {Boolean} twoWay
		 *                 - {Boolean} deep
		 *                 - {Boolean} user
		 *                 - {Boolean} lazy
		 *                 - {Function} [preProcess]
		 * @constructor
		 */

		function Watcher (vm, expOrFn, cb, options) {
		  var isFn = typeof expOrFn === 'function'
		  this.vm = vm
		  vm._watchers.push(this)
		  this.expression = isFn ? expOrFn.toString() : expOrFn
		  this.cb = cb
		  this.id = ++uid // uid for batching
		  this.active = true
		  options = options || {}
		  this.deep = !!options.deep
		  this.user = !!options.user
		  this.twoWay = !!options.twoWay
		  this.lazy = !!options.lazy
		  this.dirty = this.lazy
		  this.filters = options.filters
		  this.preProcess = options.preProcess
		  this.deps = []
		  this.newDeps = null
		  // parse expression for getter/setter
		  if (isFn) {
		    this.getter = expOrFn
		    this.setter = undefined
		  } else {
		    var res = expParser.parse(expOrFn, options.twoWay)
		    this.getter = res.get
		    this.setter = res.set
		  }
		  this.value = this.lazy
		    ? undefined
		    : this.get()
		  // state for avoiding false triggers for deep and Array
		  // watchers during vm._digest()
		  this.queued = this.shallow = false
		}

		var p = Watcher.prototype

		/**
		 * Add a dependency to this directive.
		 *
		 * @param {Dep} dep
		 */

		p.addDep = function (dep) {
		  var newDeps = this.newDeps
		  var old = this.deps
		  if (_.indexOf(newDeps, dep) < 0) {
		    newDeps.push(dep)
		    var i = _.indexOf(old, dep)
		    if (i < 0) {
		      dep.addSub(this)
		    } else {
		      old[i] = null
		    }
		  }
		}

		/**
		 * Evaluate the getter, and re-collect dependencies.
		 */

		p.get = function () {
		  this.beforeGet()
		  var vm = this.vm
		  var value
		  try {
		    value = this.getter.call(vm, vm)
		  } catch (e) {
		    if (
		      ("development") !== 'production' &&
		      config.warnExpressionErrors
		    ) {
		      _.warn(
		        'Error when evaluating expression "' +
		        this.expression + '". ' +
		        (config.debug
		          ? '' :
		          'Turn on debug mode to see stack trace.'
		        ), e
		      )
		    }
		  }
		  // "touch" every property so they are all tracked as
		  // dependencies for deep watching
		  if (this.deep) {
		    traverse(value)
		  }
		  if (this.preProcess) {
		    value = this.preProcess(value)
		  }
		  if (this.filters) {
		    value = vm._applyFilters(value, null, this.filters, false)
		  }
		  this.afterGet()
		  return value
		}

		/**
		 * Set the corresponding value with the setter.
		 *
		 * @param {*} value
		 */

		p.set = function (value) {
		  var vm = this.vm
		  if (this.filters) {
		    value = vm._applyFilters(
		      value, this.value, this.filters, true)
		  }
		  try {
		    this.setter.call(vm, vm, value)
		  } catch (e) {
		    if (
		      ("development") !== 'production' &&
		      config.warnExpressionErrors
		    ) {
		      _.warn(
		        'Error when evaluating setter "' +
		        this.expression + '"', e
		      )
		    }
		  }
		}

		/**
		 * Prepare for dependency collection.
		 */

		p.beforeGet = function () {
		  Dep.target = this
		  this.newDeps = []
		}

		/**
		 * Clean up for dependency collection.
		 */

		p.afterGet = function () {
		  Dep.target = null
		  var i = this.deps.length
		  while (i--) {
		    var dep = this.deps[i]
		    if (dep) {
		      dep.removeSub(this)
		    }
		  }
		  this.deps = this.newDeps
		  this.newDeps = null
		}

		/**
		 * Subscriber interface.
		 * Will be called when a dependency changes.
		 *
		 * @param {Boolean} shallow
		 */

		p.update = function (shallow) {
		  if (this.lazy) {
		    this.dirty = true
		  } else if (!config.async) {
		    this.run()
		  } else {
		    // if queued, only overwrite shallow with non-shallow,
		    // but not the other way around.
		    this.shallow = this.queued
		      ? shallow
		        ? this.shallow
		        : false
		      : !!shallow
		    this.queued = true
		    batcher.push(this)
		  }
		}

		/**
		 * Batcher job interface.
		 * Will be called by the batcher.
		 */

		p.run = function () {
		  if (this.active) {
		    var value = this.get()
		    if (
		      value !== this.value ||
		      // Deep watchers and Array watchers should fire even
		      // when the value is the same, because the value may
		      // have mutated; but only do so if this is a
		      // non-shallow update (caused by a vm digest).
		      ((_.isArray(value) || this.deep) && !this.shallow)
		    ) {
		      var oldValue = this.value
		      this.value = value
		      this.cb(value, oldValue)
		    }
		    this.queued = this.shallow = false
		  }
		}

		/**
		 * Evaluate the value of the watcher.
		 * This only gets called for lazy watchers.
		 */

		p.evaluate = function () {
		  // avoid overwriting another watcher that is being
		  // collected.
		  var current = Dep.target
		  this.value = this.get()
		  this.dirty = false
		  Dep.target = current
		}

		/**
		 * Depend on all deps collected by this watcher.
		 */

		p.depend = function () {
		  var i = this.deps.length
		  while (i--) {
		    this.deps[i].depend()
		  }
		}

		/**
		 * Remove self from all dependencies' subcriber list.
		 */

		p.teardown = function () {
		  if (this.active) {
		    // remove self from vm's watcher list
		    // we can skip this if the vm if being destroyed
		    // which can improve teardown performance.
		    if (!this.vm._isBeingDestroyed) {
		      this.vm._watchers.$remove(this)
		    }
		    var i = this.deps.length
		    while (i--) {
		      this.deps[i].removeSub(this)
		    }
		    this.active = false
		    this.vm = this.cb = this.value = null
		  }
		}

		/**
		 * Recrusively traverse an object to evoke all converted
		 * getters, so that every nested property inside the object
		 * is collected as a "deep" dependency.
		 *
		 * @param {Object} obj
		 */

		function traverse (obj) {
		  var key, val, i
		  for (key in obj) {
		    val = obj[key]
		    if (_.isArray(val)) {
		      i = val.length
		      while (i--) traverse(val[i])
		    } else if (_.isObject(val)) {
		      traverse(val)
		    }
		  }
		}

		module.exports = Watcher


	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		/**
		 * A dep is an observable that can have multiple
		 * directives subscribing to it.
		 *
		 * @constructor
		 */

		function Dep () {
		  this.subs = []
		}

		// the current target watcher being evaluated.
		// this is globally unique because there could be only one
		// watcher being evaluated at any time.
		Dep.target = null

		var p = Dep.prototype

		/**
		 * Add a directive subscriber.
		 *
		 * @param {Directive} sub
		 */

		p.addSub = function (sub) {
		  this.subs.push(sub)
		}

		/**
		 * Remove a directive subscriber.
		 *
		 * @param {Directive} sub
		 */

		p.removeSub = function (sub) {
		  this.subs.$remove(sub)
		}

		/**
		 * Add self as a dependency to the target watcher.
		 */

		p.depend = function () {
		  Dep.target.addDep(this)
		}

		/**
		 * Notify all subscribers of a new value.
		 */

		p.notify = function () {
		  // stablize the subscriber list first
		  var subs = _.toArray(this.subs)
		  for (var i = 0, l = subs.length; i < l; i++) {
		    subs[i].update()
		  }
		}

		module.exports = Dep


	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var Path = __webpack_require__(20)
		var Cache = __webpack_require__(14)
		var expressionCache = new Cache(1000)

		var allowedKeywords =
		  'Math,Date,this,true,false,null,undefined,Infinity,NaN,' +
		  'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' +
		  'encodeURIComponent,parseInt,parseFloat'
		var allowedKeywordsRE =
		  new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)')

		// keywords that don't make sense inside expressions
		var improperKeywords =
		  'break,case,class,catch,const,continue,debugger,default,' +
		  'delete,do,else,export,extends,finally,for,function,if,' +
		  'import,in,instanceof,let,return,super,switch,throw,try,' +
		  'var,while,with,yield,enum,await,implements,package,' +
		  'proctected,static,interface,private,public'
		var improperKeywordsRE =
		  new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)')

		var wsRE = /\s/g
		var newlineRE = /\n/g
		var saveRE = /[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof |void /g
		var restoreRE = /"(\d+)"/g
		var pathTestRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/
		var pathReplaceRE = /[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g
		var booleanLiteralRE = /^(true|false)$/

		/**
		 * Save / Rewrite / Restore
		 *
		 * When rewriting paths found in an expression, it is
		 * possible for the same letter sequences to be found in
		 * strings and Object literal property keys. Therefore we
		 * remove and store these parts in a temporary array, and
		 * restore them after the path rewrite.
		 */

		var saved = []

		/**
		 * Save replacer
		 *
		 * The save regex can match two possible cases:
		 * 1. An opening object literal
		 * 2. A string
		 * If matched as a plain string, we need to escape its
		 * newlines, since the string needs to be preserved when
		 * generating the function body.
		 *
		 * @param {String} str
		 * @param {String} isString - str if matched as a string
		 * @return {String} - placeholder with index
		 */

		function save (str, isString) {
		  var i = saved.length
		  saved[i] = isString
		    ? str.replace(newlineRE, '\\n')
		    : str
		  return '"' + i + '"'
		}

		/**
		 * Path rewrite replacer
		 *
		 * @param {String} raw
		 * @return {String}
		 */

		function rewrite (raw) {
		  var c = raw.charAt(0)
		  var path = raw.slice(1)
		  if (allowedKeywordsRE.test(path)) {
		    return raw
		  } else {
		    path = path.indexOf('"') > -1
		      ? path.replace(restoreRE, restore)
		      : path
		    return c + 'scope.' + path
		  }
		}

		/**
		 * Restore replacer
		 *
		 * @param {String} str
		 * @param {String} i - matched save index
		 * @return {String}
		 */

		function restore (str, i) {
		  return saved[i]
		}

		/**
		 * Rewrite an expression, prefixing all path accessors with
		 * `scope.` and generate getter/setter functions.
		 *
		 * @param {String} exp
		 * @param {Boolean} needSet
		 * @return {Function}
		 */

		function compileExpFns (exp, needSet) {
		  if (improperKeywordsRE.test(exp)) {
		    ("development") !== 'production' && _.warn(
		      'Avoid using reserved keywords in expression: ' + exp
		    )
		  }
		  // reset state
		  saved.length = 0
		  // save strings and object literal keys
		  var body = exp
		    .replace(saveRE, save)
		    .replace(wsRE, '')
		  // rewrite all paths
		  // pad 1 space here becaue the regex matches 1 extra char
		  body = (' ' + body)
		    .replace(pathReplaceRE, rewrite)
		    .replace(restoreRE, restore)
		  var getter = makeGetter(body)
		  if (getter) {
		    return {
		      get: getter,
		      body: body,
		      set: needSet
		        ? makeSetter(body)
		        : null
		    }
		  }
		}

		/**
		 * Compile getter setters for a simple path.
		 *
		 * @param {String} exp
		 * @return {Function}
		 */

		function compilePathFns (exp) {
		  var getter, path
		  if (exp.indexOf('[') < 0) {
		    // really simple path
		    path = exp.split('.')
		    path.raw = exp
		    getter = Path.compileGetter(path)
		  } else {
		    // do the real parsing
		    path = Path.parse(exp)
		    getter = path.get
		  }
		  return {
		    get: getter,
		    // always generate setter for simple paths
		    set: function (obj, val) {
		      Path.set(obj, path, val)
		    }
		  }
		}

		/**
		 * Build a getter function. Requires eval.
		 *
		 * We isolate the try/catch so it doesn't affect the
		 * optimization of the parse function when it is not called.
		 *
		 * @param {String} body
		 * @return {Function|undefined}
		 */

		function makeGetter (body) {
		  try {
		    return new Function('scope', 'return ' + body + ';')
		  } catch (e) {
		    ("development") !== 'production' && _.warn(
		      'Invalid expression. ' +
		      'Generated function body: ' + body
		    )
		  }
		}

		/**
		 * Build a setter function.
		 *
		 * This is only needed in rare situations like "a[b]" where
		 * a settable path requires dynamic evaluation.
		 *
		 * This setter function may throw error when called if the
		 * expression body is not a valid left-hand expression in
		 * assignment.
		 *
		 * @param {String} body
		 * @return {Function|undefined}
		 */

		function makeSetter (body) {
		  try {
		    return new Function('scope', 'value', body + '=value;')
		  } catch (e) {
		    ("development") !== 'production' && _.warn(
		      'Invalid setter function body: ' + body
		    )
		  }
		}

		/**
		 * Check for setter existence on a cache hit.
		 *
		 * @param {Function} hit
		 */

		function checkSetter (hit) {
		  if (!hit.set) {
		    hit.set = makeSetter(hit.body)
		  }
		}

		/**
		 * Parse an expression into re-written getter/setters.
		 *
		 * @param {String} exp
		 * @param {Boolean} needSet
		 * @return {Function}
		 */

		exports.parse = function (exp, needSet) {
		  exp = exp.trim()
		  // try cache
		  var hit = expressionCache.get(exp)
		  if (hit) {
		    if (needSet) {
		      checkSetter(hit)
		    }
		    return hit
		  }
		  // we do a simple path check to optimize for them.
		  // the check fails valid paths with unusal whitespaces,
		  // but that's too rare and we don't care.
		  // also skip boolean literals and paths that start with
		  // global "Math"
		  var res = exports.isSimplePath(exp)
		    ? compilePathFns(exp)
		    : compileExpFns(exp, needSet)
		  expressionCache.put(exp, res)
		  return res
		}

		/**
		 * Check if an expression is a simple path.
		 *
		 * @param {String} exp
		 * @return {Boolean}
		 */

		exports.isSimplePath = function (exp) {
		  return pathTestRE.test(exp) &&
		    // don't treat true/false as paths
		    !booleanLiteralRE.test(exp) &&
		    // Math constants e.g. Math.PI, Math.E etc.
		    exp.slice(0, 5) !== 'Math.'
		}


	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var Cache = __webpack_require__(14)
		var pathCache = new Cache(1000)
		var identRE = exports.identRE = /^[$_a-zA-Z]+[\w$]*$/

		// actions
		var APPEND = 0
		var PUSH = 1

		// states
		var BEFORE_PATH = 0
		var IN_PATH = 1
		var BEFORE_IDENT = 2
		var IN_IDENT = 3
		var BEFORE_ELEMENT = 4
		var AFTER_ZERO = 5
		var IN_INDEX = 6
		var IN_SINGLE_QUOTE = 7
		var IN_DOUBLE_QUOTE = 8
		var IN_SUB_PATH = 9
		var AFTER_ELEMENT = 10
		var AFTER_PATH = 11
		var ERROR = 12

		var pathStateMachine = []

		pathStateMachine[BEFORE_PATH] = {
		  'ws': [BEFORE_PATH],
		  'ident': [IN_IDENT, APPEND],
		  '[': [BEFORE_ELEMENT],
		  'eof': [AFTER_PATH]
		}

		pathStateMachine[IN_PATH] = {
		  'ws': [IN_PATH],
		  '.': [BEFORE_IDENT],
		  '[': [BEFORE_ELEMENT],
		  'eof': [AFTER_PATH]
		}

		pathStateMachine[BEFORE_IDENT] = {
		  'ws': [BEFORE_IDENT],
		  'ident': [IN_IDENT, APPEND]
		}

		pathStateMachine[IN_IDENT] = {
		  'ident': [IN_IDENT, APPEND],
		  '0': [IN_IDENT, APPEND],
		  'number': [IN_IDENT, APPEND],
		  'ws': [IN_PATH, PUSH],
		  '.': [BEFORE_IDENT, PUSH],
		  '[': [BEFORE_ELEMENT, PUSH],
		  'eof': [AFTER_PATH, PUSH]
		}

		pathStateMachine[BEFORE_ELEMENT] = {
		  'ws': [BEFORE_ELEMENT],
		  '0': [AFTER_ZERO, APPEND],
		  'number': [IN_INDEX, APPEND],
		  "'": [IN_SINGLE_QUOTE, APPEND, ''],
		  '"': [IN_DOUBLE_QUOTE, APPEND, ''],
		  'ident': [IN_SUB_PATH, APPEND, '*']
		}

		pathStateMachine[AFTER_ZERO] = {
		  'ws': [AFTER_ELEMENT, PUSH],
		  ']': [IN_PATH, PUSH]
		}

		pathStateMachine[IN_INDEX] = {
		  '0': [IN_INDEX, APPEND],
		  'number': [IN_INDEX, APPEND],
		  'ws': [AFTER_ELEMENT],
		  ']': [IN_PATH, PUSH]
		}

		pathStateMachine[IN_SINGLE_QUOTE] = {
		  "'": [AFTER_ELEMENT],
		  'eof': ERROR,
		  'else': [IN_SINGLE_QUOTE, APPEND]
		}

		pathStateMachine[IN_DOUBLE_QUOTE] = {
		  '"': [AFTER_ELEMENT],
		  'eof': ERROR,
		  'else': [IN_DOUBLE_QUOTE, APPEND]
		}

		pathStateMachine[IN_SUB_PATH] = {
		  'ident': [IN_SUB_PATH, APPEND],
		  '0': [IN_SUB_PATH, APPEND],
		  'number': [IN_SUB_PATH, APPEND],
		  'ws': [AFTER_ELEMENT],
		  ']': [IN_PATH, PUSH]
		}

		pathStateMachine[AFTER_ELEMENT] = {
		  'ws': [AFTER_ELEMENT],
		  ']': [IN_PATH, PUSH]
		}

		/**
		 * Determine the type of a character in a keypath.
		 *
		 * @param {Char} ch
		 * @return {String} type
		 */

		function getPathCharType (ch) {
		  if (ch === undefined) {
		    return 'eof'
		  }

		  var code = ch.charCodeAt(0)

		  switch (code) {
		    case 0x5B: // [
		    case 0x5D: // ]
		    case 0x2E: // .
		    case 0x22: // "
		    case 0x27: // '
		    case 0x30: // 0
		      return ch

		    case 0x5F: // _
		    case 0x24: // $
		      return 'ident'

		    case 0x20: // Space
		    case 0x09: // Tab
		    case 0x0A: // Newline
		    case 0x0D: // Return
		    case 0xA0:  // No-break space
		    case 0xFEFF:  // Byte Order Mark
		    case 0x2028:  // Line Separator
		    case 0x2029:  // Paragraph Separator
		      return 'ws'
		  }

		  // a-z, A-Z
		  if (
		    (code >= 0x61 && code <= 0x7A) ||
		    (code >= 0x41 && code <= 0x5A)
		  ) {
		    return 'ident'
		  }

		  // 1-9
		  if (code >= 0x31 && code <= 0x39) {
		    return 'number'
		  }

		  return 'else'
		}

		/**
		 * Parse a string path into an array of segments
		 * Todo implement cache
		 *
		 * @param {String} path
		 * @return {Array|undefined}
		 */

		function parsePath (path) {
		  var keys = []
		  var index = -1
		  var mode = BEFORE_PATH
		  var c, newChar, key, type, transition, action, typeMap

		  var actions = []
		  actions[PUSH] = function () {
		    if (key === undefined) {
		      return
		    }
		    keys.push(key)
		    key = undefined
		  }
		  actions[APPEND] = function () {
		    if (key === undefined) {
		      key = newChar
		    } else {
		      key += newChar
		    }
		  }

		  function maybeUnescapeQuote () {
		    var nextChar = path[index + 1]
		    if ((mode === IN_SINGLE_QUOTE && nextChar === "'") ||
		        (mode === IN_DOUBLE_QUOTE && nextChar === '"')) {
		      index++
		      newChar = nextChar
		      actions[APPEND]()
		      return true
		    }
		  }

		  while (mode != null) {
		    index++
		    c = path[index]

		    if (c === '\\' && maybeUnescapeQuote()) {
		      continue
		    }

		    type = getPathCharType(c)
		    typeMap = pathStateMachine[mode]
		    transition = typeMap[type] || typeMap['else'] || ERROR

		    if (transition === ERROR) {
		      return // parse error
		    }

		    mode = transition[0]
		    action = actions[transition[1]]
		    if (action) {
		      newChar = transition[2]
		      newChar = newChar === undefined
		        ? c
		        : newChar === '*'
		          ? newChar + c
		          : newChar
		      action()
		    }

		    if (mode === AFTER_PATH) {
		      keys.raw = path
		      return keys
		    }
		  }
		}

		/**
		 * Format a accessor segment based on its type.
		 *
		 * @param {String} key
		 * @return {Boolean}
		 */

		function formatAccessor (key) {
		  if (identRE.test(key)) { // identifier
		    return '.' + key
		  } else if (+key === key >>> 0) { // bracket index
		    return '[' + key + ']'
		  } else if (key.charAt(0) === '*') {
		    return '[o' + formatAccessor(key.slice(1)) + ']'
		  } else { // bracket string
		    return '["' + key.replace(/"/g, '\\"') + '"]'
		  }
		}

		/**
		 * Compiles a getter function with a fixed path.
		 * The fixed path getter supresses errors.
		 *
		 * @param {Array} path
		 * @return {Function}
		 */

		exports.compileGetter = function (path) {
		  var body = 'return o' + path.map(formatAccessor).join('')
		  return new Function('o', body)
		}

		/**
		 * External parse that check for a cache hit first
		 *
		 * @param {String} path
		 * @return {Array|undefined}
		 */

		exports.parse = function (path) {
		  var hit = pathCache.get(path)
		  if (!hit) {
		    hit = parsePath(path)
		    if (hit) {
		      hit.get = exports.compileGetter(hit)
		      pathCache.put(path, hit)
		    }
		  }
		  return hit
		}

		/**
		 * Get from an object from a path string
		 *
		 * @param {Object} obj
		 * @param {String} path
		 */

		exports.get = function (obj, path) {
		  path = exports.parse(path)
		  if (path) {
		    return path.get(obj)
		  }
		}

		/**
		 * Set on an object from a path
		 *
		 * @param {Object} obj
		 * @param {String | Array} path
		 * @param {*} val
		 */

		exports.set = function (obj, path, val) {
		  var original = obj
		  if (typeof path === 'string') {
		    path = exports.parse(path)
		  }
		  if (!path || !_.isObject(obj)) {
		    return false
		  }
		  var last, key
		  for (var i = 0, l = path.length; i < l; i++) {
		    last = obj
		    key = path[i]
		    if (key.charAt(0) === '*') {
		      key = original[key.slice(1)]
		    }
		    if (i < l - 1) {
		      obj = obj[key]
		      if (!_.isObject(obj)) {
		        warnNonExistent(path)
		        obj = {}
		        last.$add(key, obj)
		      }
		    } else {
		      if (_.isArray(obj)) {
		        obj.$set(key, val)
		      } else if (key in obj) {
		        obj[key] = val
		      } else {
		        warnNonExistent(path)
		        obj.$add(key, val)
		      }
		    }
		  }
		  return true
		}

		function warnNonExistent (path) {
		  ("development") !== 'production' && _.warn(
		    'You are setting a non-existent path "' + path.raw + '" ' +
		    'on a vm instance. Consider pre-initializing the property ' +
		    'with the "data" option for more reliable reactivity ' +
		    'and better performance.'
		  )
		}


	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var config = __webpack_require__(5)

		// we have two separate queues: one for directive updates
		// and one for user watcher registered via $watch().
		// we want to guarantee directive updates to be called
		// before user watchers so that when user watchers are
		// triggered, the DOM would have already been in updated
		// state.
		var queue = []
		var userQueue = []
		var has = {}
		var circular = {}
		var waiting = false
		var internalQueueDepleted = false

		/**
		 * Reset the batcher's state.
		 */

		function reset () {
		  queue = []
		  userQueue = []
		  has = {}
		  circular = {}
		  waiting = internalQueueDepleted = false
		}

		/**
		 * Flush both queues and run the watchers.
		 */

		function flush () {
		  run(queue)
		  internalQueueDepleted = true
		  run(userQueue)
		  reset()
		}

		/**
		 * Run the watchers in a single queue.
		 *
		 * @param {Array} queue
		 */

		function run (queue) {
		  // do not cache length because more watchers might be pushed
		  // as we run existing watchers
		  for (var i = 0; i < queue.length; i++) {
		    var watcher = queue[i]
		    var id = watcher.id
		    has[id] = null
		    watcher.run()
		    // in dev build, check and stop circular updates.
		    if (("development") !== 'production' && has[id] != null) {
		      circular[id] = (circular[id] || 0) + 1
		      if (circular[id] > config._maxUpdateCount) {
		        queue.splice(has[id], 1)
		        _.warn(
		          'You may have an infinite update loop for watcher ' +
		          'with expression: ' + watcher.expression
		        )
		      }
		    }
		  }
		}

		/**
		 * Push a watcher into the watcher queue.
		 * Jobs with duplicate IDs will be skipped unless it's
		 * pushed when the queue is being flushed.
		 *
		 * @param {Watcher} watcher
		 *   properties:
		 *   - {Number} id
		 *   - {Function} run
		 */

		exports.push = function (watcher) {
		  var id = watcher.id
		  if (has[id] == null) {
		    // if an internal watcher is pushed, but the internal
		    // queue is already depleted, we run it immediately.
		    if (internalQueueDepleted && !watcher.user) {
		      watcher.run()
		      return
		    }
		    // push watcher into appropriate queue
		    var q = watcher.user ? userQueue : queue
		    has[id] = q.length
		    q.push(watcher)
		    // queue the flush
		    if (!waiting) {
		      waiting = true
		      _.nextTick(flush)
		    }
		  }
		}


	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var Cache = __webpack_require__(14)
		var templateCache = new Cache(1000)
		var idSelectorCache = new Cache(1000)

		var map = {
		  _default: [0, '', ''],
		  legend: [1, '<fieldset>', '</fieldset>'],
		  tr: [2, '<table><tbody>', '</tbody></table>'],
		  col: [
		    2,
		    '<table><tbody></tbody><colgroup>',
		    '</colgroup></table>'
		  ]
		}

		map.td =
		map.th = [
		  3,
		  '<table><tbody><tr>',
		  '</tr></tbody></table>'
		]

		map.option =
		map.optgroup = [
		  1,
		  '<select multiple="multiple">',
		  '</select>'
		]

		map.thead =
		map.tbody =
		map.colgroup =
		map.caption =
		map.tfoot = [1, '<table>', '</table>']

		map.g =
		map.defs =
		map.symbol =
		map.use =
		map.image =
		map.text =
		map.circle =
		map.ellipse =
		map.line =
		map.path =
		map.polygon =
		map.polyline =
		map.rect = [
		  1,
		  '<svg ' +
		    'xmlns="http://www.w3.org/2000/svg" ' +
		    'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
		    'xmlns:ev="http://www.w3.org/2001/xml-events"' +
		    'version="1.1">',
		  '</svg>'
		]

		/**
		 * Check if a node is a supported template node with a
		 * DocumentFragment content.
		 *
		 * @param {Node} node
		 * @return {Boolean}
		 */

		function isRealTemplate (node) {
		  return _.isTemplate(node) &&
		    node.content instanceof DocumentFragment
		}

		var tagRE = /<([\w:]+)/
		var entityRE = /&\w+;/

		/**
		 * Convert a string template to a DocumentFragment.
		 * Determines correct wrapping by tag types. Wrapping
		 * strategy found in jQuery & component/domify.
		 *
		 * @param {String} templateString
		 * @return {DocumentFragment}
		 */

		function stringToFragment (templateString) {
		  // try a cache hit first
		  var hit = templateCache.get(templateString)
		  if (hit) {
		    return hit
		  }

		  var frag = document.createDocumentFragment()
		  var tagMatch = templateString.match(tagRE)
		  var entityMatch = entityRE.test(templateString)

		  if (!tagMatch && !entityMatch) {
		    // text only, return a single text node.
		    frag.appendChild(
		      document.createTextNode(templateString)
		    )
		  } else {

		    var tag = tagMatch && tagMatch[1]
		    var wrap = map[tag] || map._default
		    var depth = wrap[0]
		    var prefix = wrap[1]
		    var suffix = wrap[2]
		    var node = document.createElement('div')

		    node.innerHTML = prefix + templateString.trim() + suffix
		    while (depth--) {
		      node = node.lastChild
		    }

		    var child
		    /* eslint-disable no-cond-assign */
		    while (child = node.firstChild) {
		    /* eslint-enable no-cond-assign */
		      frag.appendChild(child)
		    }
		  }

		  templateCache.put(templateString, frag)
		  return frag
		}

		/**
		 * Convert a template node to a DocumentFragment.
		 *
		 * @param {Node} node
		 * @return {DocumentFragment}
		 */

		function nodeToFragment (node) {
		  // if its a template tag and the browser supports it,
		  // its content is already a document fragment.
		  if (isRealTemplate(node)) {
		    _.trimNode(node.content)
		    return node.content
		  }
		  // script template
		  if (node.tagName === 'SCRIPT') {
		    return stringToFragment(node.textContent)
		  }
		  // normal node, clone it to avoid mutating the original
		  var clone = exports.clone(node)
		  var frag = document.createDocumentFragment()
		  var child
		  /* eslint-disable no-cond-assign */
		  while (child = clone.firstChild) {
		  /* eslint-enable no-cond-assign */
		    frag.appendChild(child)
		  }
		  _.trimNode(frag)
		  return frag
		}

		// Test for the presence of the Safari template cloning bug
		// https://bugs.webkit.org/show_bug.cgi?id=137755
		var hasBrokenTemplate = _.inBrowser
		  ? (function () {
		      var a = document.createElement('div')
		      a.innerHTML = '<template>1</template>'
		      return !a.cloneNode(true).firstChild.innerHTML
		    })()
		  : false

		// Test for IE10/11 textarea placeholder clone bug
		var hasTextareaCloneBug = _.inBrowser
		  ? (function () {
		      var t = document.createElement('textarea')
		      t.placeholder = 't'
		      return t.cloneNode(true).value === 't'
		    })()
		  : false

		/**
		 * 1. Deal with Safari cloning nested <template> bug by
		 *    manually cloning all template instances.
		 * 2. Deal with IE10/11 textarea placeholder bug by setting
		 *    the correct value after cloning.
		 *
		 * @param {Element|DocumentFragment} node
		 * @return {Element|DocumentFragment}
		 */

		exports.clone = function (node) {
		  if (!node.querySelectorAll) {
		    return node.cloneNode()
		  }
		  var res = node.cloneNode(true)
		  var i, original, cloned
		  /* istanbul ignore if */
		  if (hasBrokenTemplate) {
		    var clone = res
		    if (isRealTemplate(node)) {
		      node = node.content
		      clone = res.content
		    }
		    original = node.querySelectorAll('template')
		    if (original.length) {
		      cloned = clone.querySelectorAll('template')
		      i = cloned.length
		      while (i--) {
		        cloned[i].parentNode.replaceChild(
		          exports.clone(original[i]),
		          cloned[i]
		        )
		      }
		    }
		  }
		  /* istanbul ignore if */
		  if (hasTextareaCloneBug) {
		    if (node.tagName === 'TEXTAREA') {
		      res.value = node.value
		    } else {
		      original = node.querySelectorAll('textarea')
		      if (original.length) {
		        cloned = res.querySelectorAll('textarea')
		        i = cloned.length
		        while (i--) {
		          cloned[i].value = original[i].value
		        }
		      }
		    }
		  }
		  return res
		}

		/**
		 * Process the template option and normalizes it into a
		 * a DocumentFragment that can be used as a partial or a
		 * instance template.
		 *
		 * @param {*} template
		 *    Possible values include:
		 *    - DocumentFragment object
		 *    - Node object of type Template
		 *    - id selector: '#some-template-id'
		 *    - template string: '<div><span>{{msg}}</span></div>'
		 * @param {Boolean} clone
		 * @param {Boolean} noSelector
		 * @return {DocumentFragment|undefined}
		 */

		exports.parse = function (template, clone, noSelector) {
		  var node, frag

		  // if the template is already a document fragment,
		  // do nothing
		  if (template instanceof DocumentFragment) {
		    _.trimNode(template)
		    return clone
		      ? exports.clone(template)
		      : template
		  }

		  if (typeof template === 'string') {
		    // id selector
		    if (!noSelector && template.charAt(0) === '#') {
		      // id selector can be cached too
		      frag = idSelectorCache.get(template)
		      if (!frag) {
		        node = document.getElementById(template.slice(1))
		        if (node) {
		          frag = nodeToFragment(node)
		          // save selector to cache
		          idSelectorCache.put(template, frag)
		        }
		      }
		    } else {
		      // normal string template
		      frag = stringToFragment(template)
		    }
		  } else if (template.nodeType) {
		    // a direct node
		    frag = nodeToFragment(template)
		  }

		  return frag && clone
		    ? exports.clone(frag)
		    : frag
		}


	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var config = __webpack_require__(5)
		var templateParser = __webpack_require__(22)

		module.exports = {

		  isLiteral: true,

		  /**
		   * Setup. Two possible usages:
		   *
		   * - static:
		   *   v-component="comp"
		   *
		   * - dynamic:
		   *   v-component="{{currentView}}"
		   */

		  bind: function () {
		    if (!this.el.__vue__) {
		      // create a ref anchor
		      this.anchor = _.createAnchor('v-component')
		      _.replace(this.el, this.anchor)
		      // check keep-alive options.
		      // If yes, instead of destroying the active vm when
		      // hiding (v-if) or switching (dynamic literal) it,
		      // we simply remove it from the DOM and save it in a
		      // cache object, with its constructor id as the key.
		      this.keepAlive = this._checkParam('keep-alive') != null
		      // wait for event before insertion
		      this.waitForEvent = this._checkParam('wait-for')
		      // check ref
		      this.refID = this._checkParam(config.prefix + 'ref')
		      if (this.keepAlive) {
		        this.cache = {}
		      }
		      // check inline-template
		      if (this._checkParam('inline-template') !== null) {
		        // extract inline template as a DocumentFragment
		        this.template = _.extractContent(this.el, true)
		      }
		      // component resolution related state
		      this.pendingComponentCb =
		      this.Component = null
		      // transition related state
		      this.pendingRemovals = 0
		      this.pendingRemovalCb = null
		      // if static, build right now.
		      if (!this._isDynamicLiteral) {
		        this.resolveComponent(this.expression, _.bind(this.initStatic, this))
		      } else {
		        // check dynamic component params
		        this.transMode = this._checkParam('transition-mode')
		      }
		    } else {
		      ("development") !== 'production' && _.warn(
		        'cannot mount component "' + this.expression + '" ' +
		        'on already mounted element: ' + this.el
		      )
		    }
		  },

		  /**
		   * Initialize a static component.
		   */

		  initStatic: function () {
		    // wait-for
		    var anchor = this.anchor
		    var options
		    var waitFor = this.waitForEvent
		    if (waitFor) {
		      options = {
		        created: function () {
		          this.$once(waitFor, function () {
		            this.$before(anchor)
		          })
		        }
		      }
		    }
		    var child = this.build(options)
		    this.setCurrent(child)
		    if (!this.waitForEvent) {
		      child.$before(anchor)
		    }
		  },

		  /**
		   * Public update, called by the watcher in the dynamic
		   * literal scenario, e.g. v-component="{{view}}"
		   */

		  update: function (value) {
		    this.setComponent(value)
		  },

		  /**
		   * Switch dynamic components. May resolve the component
		   * asynchronously, and perform transition based on
		   * specified transition mode. Accepts a few additional
		   * arguments specifically for vue-router.
		   *
		   * The callback is called when the full transition is
		   * finished.
		   *
		   * @param {String} value
		   * @param {Function} [cb]
		   */

		  setComponent: function (value, cb) {
		    this.invalidatePending()
		    if (!value) {
		      // just remove current
		      this.unbuild(true)
		      this.remove(this.childVM, cb)
		      this.unsetCurrent()
		    } else {
		      this.resolveComponent(value, _.bind(function () {
		        this.unbuild(true)
		        var options
		        var self = this
		        var waitFor = this.waitForEvent
		        if (waitFor) {
		          options = {
		            created: function () {
		              this.$once(waitFor, function () {
		                self.transition(this, cb)
		              })
		            }
		          }
		        }
		        var newComponent = this.build(options)
		        if (!waitFor) {
		          this.transition(newComponent, cb)
		        }
		      }, this))
		    }
		  },

		  /**
		   * Resolve the component constructor to use when creating
		   * the child vm.
		   */

		  resolveComponent: function (id, cb) {
		    var self = this
		    this.pendingComponentCb = _.cancellable(function (Component) {
		      self.Component = Component
		      cb()
		    })
		    this.vm._resolveComponent(id, this.pendingComponentCb)
		  },

		  /**
		   * When the component changes or unbinds before an async
		   * constructor is resolved, we need to invalidate its
		   * pending callback.
		   */

		  invalidatePending: function () {
		    if (this.pendingComponentCb) {
		      this.pendingComponentCb.cancel()
		      this.pendingComponentCb = null
		    }
		  },

		  /**
		   * Instantiate/insert a new child vm.
		   * If keep alive and has cached instance, insert that
		   * instance; otherwise build a new one and cache it.
		   *
		   * @param {Object} [extraOptions]
		   * @return {Vue} - the created instance
		   */

		  build: function (extraOptions) {
		    if (this.keepAlive) {
		      var cached = this.cache[this.Component.cid]
		      if (cached) {
		        return cached
		      }
		    }
		    if (this.Component) {
		      // default options
		      var options = {
		        el: templateParser.clone(this.el),
		        template: this.template,
		        // if no inline-template, then the compiled
		        // linker can be cached for better performance.
		        _linkerCachable: !this.template,
		        _asComponent: true,
		        _isRouterView: this._isRouterView,
		        _context: this.vm
		      }
		      // extra options
		      if (extraOptions) {
		        _.extend(options, extraOptions)
		      }
		      var parent = this._host || this.vm
		      var child = parent.$addChild(options, this.Component)
		      if (this.keepAlive) {
		        this.cache[this.Component.cid] = child
		      }
		      return child
		    }
		  },

		  /**
		   * Teardown the current child, but defers cleanup so
		   * that we can separate the destroy and removal steps.
		   *
		   * @param {Boolean} defer
		   */

		  unbuild: function (defer) {
		    var child = this.childVM
		    if (!child || this.keepAlive) {
		      return
		    }
		    // the sole purpose of `deferCleanup` is so that we can
		    // "deactivate" the vm right now and perform DOM removal
		    // later.
		    child.$destroy(false, defer)
		  },

		  /**
		   * Remove current destroyed child and manually do
		   * the cleanup after removal.
		   *
		   * @param {Function} cb
		   */

		  remove: function (child, cb) {
		    var keepAlive = this.keepAlive
		    if (child) {
		      // we may have a component switch when a previous
		      // component is still being transitioned out.
		      // we want to trigger only one lastest insertion cb
		      // when the existing transition finishes. (#1119)
		      this.pendingRemovals++
		      this.pendingRemovalCb = cb
		      var self = this
		      child.$remove(function () {
		        self.pendingRemovals--
		        if (!keepAlive) child._cleanup()
		        if (!self.pendingRemovals && self.pendingRemovalCb) {
		          self.pendingRemovalCb()
		          self.pendingRemovalCb = null
		        }
		      })
		    } else if (cb) {
		      cb()
		    }
		  },

		  /**
		   * Actually swap the components, depending on the
		   * transition mode. Defaults to simultaneous.
		   *
		   * @param {Vue} target
		   * @param {Function} [cb]
		   */

		  transition: function (target, cb) {
		    var self = this
		    var current = this.childVM
		    this.unsetCurrent()
		    this.setCurrent(target)
		    switch (self.transMode) {
		      case 'in-out':
		        target.$before(self.anchor, function () {
		          self.remove(current, cb)
		        })
		        break
		      case 'out-in':
		        self.remove(current, function () {
		          target.$before(self.anchor, cb)
		        })
		        break
		      default:
		        self.remove(current)
		        target.$before(self.anchor, cb)
		    }
		  },

		  /**
		   * Set childVM and parent ref
		   */

		  setCurrent: function (child) {
		    this.childVM = child
		    var refID = child._refID || this.refID
		    if (refID) {
		      this.vm.$[refID] = child
		    }
		  },

		  /**
		   * Unset childVM and parent ref
		   */

		  unsetCurrent: function () {
		    var child = this.childVM
		    this.childVM = null
		    var refID = (child && child._refID) || this.refID
		    if (refID) {
		      this.vm.$[refID] = null
		    }
		  },

		  /**
		   * Unbind.
		   */

		  unbind: function () {
		    this.invalidatePending()
		    // Do not defer cleanup when unbinding
		    this.unbuild()
		    this.unsetCurrent()
		    // destroy all keep-alive cached instances
		    if (this.cache) {
		      for (var key in this.cache) {
		        this.cache[key].$destroy()
		      }
		      this.cache = null
		    }
		  }
		}


	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var config = __webpack_require__(5)
		var templateParser = __webpack_require__(22)

		/**
		 * Process an element or a DocumentFragment based on a
		 * instance option object. This allows us to transclude
		 * a template node/fragment before the instance is created,
		 * so the processed fragment can then be cloned and reused
		 * in v-repeat.
		 *
		 * @param {Element} el
		 * @param {Object} options
		 * @return {Element|DocumentFragment}
		 */

		exports.transclude = function (el, options) {
		  // extract container attributes to pass them down
		  // to compiler, because they need to be compiled in
		  // parent scope. we are mutating the options object here
		  // assuming the same object will be used for compile
		  // right after this.
		  if (options) {
		    options._containerAttrs = extractAttrs(el)
		  }
		  // for template tags, what we want is its content as
		  // a documentFragment (for fragment instances)
		  if (_.isTemplate(el)) {
		    el = templateParser.parse(el)
		  }
		  if (options) {
		    if (options._asComponent && !options.template) {
		      options.template = '<content></content>'
		    }
		    if (options.template) {
		      options._content = _.extractContent(el)
		      el = transcludeTemplate(el, options)
		    }
		  }
		  if (el instanceof DocumentFragment) {
		    // anchors for fragment instance
		    // passing in `persist: true` to avoid them being
		    // discarded by IE during template cloning
		    _.prepend(_.createAnchor('v-start', true), el)
		    el.appendChild(_.createAnchor('v-end', true))
		  }
		  return el
		}

		/**
		 * Process the template option.
		 * If the replace option is true this will swap the $el.
		 *
		 * @param {Element} el
		 * @param {Object} options
		 * @return {Element|DocumentFragment}
		 */

		function transcludeTemplate (el, options) {
		  var template = options.template
		  var frag = templateParser.parse(template, true)
		  if (frag) {
		    var replacer = frag.firstChild
		    var tag = replacer.tagName && replacer.tagName.toLowerCase()
		    if (options.replace) {
		      /* istanbul ignore if */
		      if (el === document.body) {
		        ("development") !== 'production' && _.warn(
		          'You are mounting an instance with a template to ' +
		          '<body>. This will replace <body> entirely. You ' +
		          'should probably use `replace: false` here.'
		        )
		      }
		      // there are many cases where the instance must
		      // become a fragment instance: basically anything that
		      // can create more than 1 root nodes.
		      if (
		        // multi-children template
		        frag.childNodes.length > 1 ||
		        // non-element template
		        replacer.nodeType !== 1 ||
		        // single nested component
		        tag === 'component' ||
		        _.resolveAsset(options, 'components', tag) ||
		        replacer.hasAttribute(config.prefix + 'component') ||
		        // element directive
		        _.resolveAsset(options, 'elementDirectives', tag) ||
		        // repeat block
		        replacer.hasAttribute(config.prefix + 'repeat')
		      ) {
		        return frag
		      } else {
		        options._replacerAttrs = extractAttrs(replacer)
		        mergeAttrs(el, replacer)
		        return replacer
		      }
		    } else {
		      el.appendChild(frag)
		      return el
		    }
		  } else {
		    ("development") !== 'production' && _.warn(
		      'Invalid template option: ' + template
		    )
		  }
		}

		/**
		 * Helper to extract a component container's attributes
		 * into a plain object array.
		 *
		 * @param {Element} el
		 * @return {Array}
		 */

		function extractAttrs (el) {
		  if (el.nodeType === 1 && el.hasAttributes()) {
		    return _.toArray(el.attributes)
		  }
		}

		/**
		 * Merge the attributes of two elements, and make sure
		 * the class names are merged properly.
		 *
		 * @param {Element} from
		 * @param {Element} to
		 */

		function mergeAttrs (from, to) {
		  var attrs = from.attributes
		  var i = attrs.length
		  var name, value
		  while (i--) {
		    name = attrs[i].name
		    value = attrs[i].value
		    if (!to.hasAttribute(name)) {
		      to.setAttribute(name, value)
		    } else if (name === 'class') {
		      value = to.getAttribute(name) + ' ' + value
		      to.setAttribute(name, value)
		    }
		  }
		}


	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {

		// manipulation directives
		exports.text = __webpack_require__(26)
		exports.html = __webpack_require__(27)
		exports.attr = __webpack_require__(28)
		exports.show = __webpack_require__(29)
		exports['class'] = __webpack_require__(31)
		exports.el = __webpack_require__(32)
		exports.ref = __webpack_require__(33)
		exports.cloak = __webpack_require__(34)
		exports.style = __webpack_require__(35)
		exports.transition = __webpack_require__(36)

		// event listener directives
		exports.on = __webpack_require__(39)
		exports.model = __webpack_require__(40)

		// logic control directives
		exports.repeat = __webpack_require__(45)
		exports['if'] = __webpack_require__(46)

		// internal directives that should not be used directly
		// but we still want to expose them for advanced usage.
		exports._component = __webpack_require__(23)
		exports._prop = __webpack_require__(16)


	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		module.exports = {

		  bind: function () {
		    this.attr = this.el.nodeType === 3
		      ? 'data'
		      : 'textContent'
		  },

		  update: function (value) {
		    this.el[this.attr] = _.toString(value)
		  }
		}


	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var templateParser = __webpack_require__(22)

		module.exports = {

		  bind: function () {
		    // a comment node means this is a binding for
		    // {{{ inline unescaped html }}}
		    if (this.el.nodeType === 8) {
		      // hold nodes
		      this.nodes = []
		      // replace the placeholder with proper anchor
		      this.anchor = _.createAnchor('v-html')
		      _.replace(this.el, this.anchor)
		    }
		  },

		  update: function (value) {
		    value = _.toString(value)
		    if (this.nodes) {
		      this.swap(value)
		    } else {
		      this.el.innerHTML = value
		    }
		  },

		  swap: function (value) {
		    // remove old nodes
		    var i = this.nodes.length
		    while (i--) {
		      _.remove(this.nodes[i])
		    }
		    // convert new value to a fragment
		    // do not attempt to retrieve from id selector
		    var frag = templateParser.parse(value, true, true)
		    // save a reference to these nodes so we can remove later
		    this.nodes = _.toArray(frag.childNodes)
		    _.before(frag, this.anchor)
		  }
		}


	/***/ },
	/* 28 */
	/***/ function(module, exports) {

		// xlink
		var xlinkNS = 'http://www.w3.org/1999/xlink'
		var xlinkRE = /^xlink:/

		module.exports = {

		  priority: 850,

		  update: function (value) {
		    if (this.arg) {
		      this.setAttr(this.arg, value)
		    } else if (typeof value === 'object') {
		      this.objectHandler(value)
		    }
		  },

		  objectHandler: function (value) {
		    // cache object attrs so that only changed attrs
		    // are actually updated.
		    var cache = this.cache || (this.cache = {})
		    var attr, val
		    for (attr in cache) {
		      if (!(attr in value)) {
		        this.setAttr(attr, null)
		        delete cache[attr]
		      }
		    }
		    for (attr in value) {
		      val = value[attr]
		      if (val !== cache[attr]) {
		        cache[attr] = val
		        this.setAttr(attr, val)
		      }
		    }
		  },

		  setAttr: function (attr, value) {
		    if (attr === 'value' && attr in this.el) {
		      if (!this.valueRemoved) {
		        this.el.removeAttribute(attr)
		        this.valueRemoved = true
		      }
		      this.el.value = value
		    } else if (value != null && value !== false) {
		      if (xlinkRE.test(attr)) {
		        this.el.setAttributeNS(xlinkNS, attr, value)
		      } else {
		        this.el.setAttribute(attr, value)
		      }
		    } else {
		      this.el.removeAttribute(attr)
		    }
		  }
		}


	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {

		var transition = __webpack_require__(30)

		module.exports = function (value) {
		  var el = this.el
		  transition.apply(el, value ? 1 : -1, function () {
		    el.style.display = value ? '' : 'none'
		  }, this.vm)
		}


	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		/**
		 * Append with transition.
		 *
		 * @param {Element} el
		 * @param {Element} target
		 * @param {Vue} vm
		 * @param {Function} [cb]
		 */

		exports.append = function (el, target, vm, cb) {
		  apply(el, 1, function () {
		    target.appendChild(el)
		  }, vm, cb)
		}

		/**
		 * InsertBefore with transition.
		 *
		 * @param {Element} el
		 * @param {Element} target
		 * @param {Vue} vm
		 * @param {Function} [cb]
		 */

		exports.before = function (el, target, vm, cb) {
		  apply(el, 1, function () {
		    _.before(el, target)
		  }, vm, cb)
		}

		/**
		 * Remove with transition.
		 *
		 * @param {Element} el
		 * @param {Vue} vm
		 * @param {Function} [cb]
		 */

		exports.remove = function (el, vm, cb) {
		  apply(el, -1, function () {
		    _.remove(el)
		  }, vm, cb)
		}

		/**
		 * Remove by appending to another parent with transition.
		 * This is only used in block operations.
		 *
		 * @param {Element} el
		 * @param {Element} target
		 * @param {Vue} vm
		 * @param {Function} [cb]
		 */

		exports.removeThenAppend = function (el, target, vm, cb) {
		  apply(el, -1, function () {
		    target.appendChild(el)
		  }, vm, cb)
		}

		/**
		 * Append the childNodes of a fragment to target.
		 *
		 * @param {DocumentFragment} block
		 * @param {Node} target
		 * @param {Vue} vm
		 */

		exports.blockAppend = function (block, target, vm) {
		  var nodes = _.toArray(block.childNodes)
		  for (var i = 0, l = nodes.length; i < l; i++) {
		    exports.before(nodes[i], target, vm)
		  }
		}

		/**
		 * Remove a block of nodes between two edge nodes.
		 *
		 * @param {Node} start
		 * @param {Node} end
		 * @param {Vue} vm
		 */

		exports.blockRemove = function (start, end, vm) {
		  var node = start.nextSibling
		  var next
		  while (node !== end) {
		    next = node.nextSibling
		    exports.remove(node, vm)
		    node = next
		  }
		}

		/**
		 * Apply transitions with an operation callback.
		 *
		 * @param {Element} el
		 * @param {Number} direction
		 *                  1: enter
		 *                 -1: leave
		 * @param {Function} op - the actual DOM operation
		 * @param {Vue} vm
		 * @param {Function} [cb]
		 */

		var apply = exports.apply = function (el, direction, op, vm, cb) {
		  var transition = el.__v_trans
		  if (
		    !transition ||
		    // skip if there are no js hooks and CSS transition is
		    // not supported
		    (!transition.hooks && !_.transitionEndEvent) ||
		    // skip transitions for initial compile
		    !vm._isCompiled ||
		    // if the vm is being manipulated by a parent directive
		    // during the parent's compilation phase, skip the
		    // animation.
		    (vm.$parent && !vm.$parent._isCompiled)
		  ) {
		    op()
		    if (cb) cb()
		    return
		  }
		  var action = direction > 0 ? 'enter' : 'leave'
		  transition[action](op, cb)
		}


	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var addClass = _.addClass
		var removeClass = _.removeClass

		module.exports = {

		  bind: function () {
		    // interpolations like class="{{abc}}" are converted
		    // to v-class, and we need to remove the raw,
		    // uninterpolated className at binding time.
		    var raw = this._descriptor._rawClass
		    if (raw) {
		      this.prevKeys = raw.trim().split(/\s+/)
		    }
		  },

		  update: function (value) {
		    if (this.arg) {
		      // single toggle
		      if (value) {
		        addClass(this.el, this.arg)
		      } else {
		        removeClass(this.el, this.arg)
		      }
		    } else {
		      if (value && typeof value === 'string') {
		        this.handleObject(stringToObject(value))
		      } else if (_.isPlainObject(value)) {
		        this.handleObject(value)
		      } else {
		        this.cleanup()
		      }
		    }
		  },

		  handleObject: function (value) {
		    this.cleanup(value)
		    var keys = this.prevKeys = Object.keys(value)
		    for (var i = 0, l = keys.length; i < l; i++) {
		      var key = keys[i]
		      if (value[key]) {
		        addClass(this.el, key)
		      } else {
		        removeClass(this.el, key)
		      }
		    }
		  },

		  cleanup: function (value) {
		    if (this.prevKeys) {
		      var i = this.prevKeys.length
		      while (i--) {
		        var key = this.prevKeys[i]
		        if (!value || !value.hasOwnProperty(key)) {
		          removeClass(this.el, key)
		        }
		      }
		    }
		  }
		}

		function stringToObject (value) {
		  var res = {}
		  var keys = value.trim().split(/\s+/)
		  var i = keys.length
		  while (i--) {
		    res[keys[i]] = true
		  }
		  return res
		}


	/***/ },
	/* 32 */
	/***/ function(module, exports) {

		module.exports = {

		  isLiteral: true,

		  bind: function () {
		    this.vm.$$[this.expression] = this.el
		  },

		  unbind: function () {
		    delete this.vm.$$[this.expression]
		  }
		}


	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		module.exports = {

		  isLiteral: true,

		  bind: function () {
		    var vm = this.el.__vue__
		    if (!vm) {
		      ("development") !== 'production' && _.warn(
		        'v-ref should only be used on a component root element.'
		      )
		      return
		    }
		    // If we get here, it means this is a `v-ref` on a
		    // child, because parent scope `v-ref` is stripped in
		    // `v-component` already. So we just record our own ref
		    // here - it will overwrite parent ref in `v-component`,
		    // if any.
		    vm._refID = this.expression
		  }
		}


	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {

		var config = __webpack_require__(5)

		module.exports = {
		  bind: function () {
		    var el = this.el
		    this.vm.$once('hook:compiled', function () {
		      el.removeAttribute(config.prefix + 'cloak')
		    })
		  }
		}


	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var prefixes = ['-webkit-', '-moz-', '-ms-']
		var camelPrefixes = ['Webkit', 'Moz', 'ms']
		var importantRE = /!important;?$/
		var camelRE = /([a-z])([A-Z])/g
		var testEl = null
		var propCache = {}

		module.exports = {

		  deep: true,

		  update: function (value) {
		    if (this.arg) {
		      this.setProp(this.arg, value)
		    } else {
		      if (typeof value === 'object') {
		        this.objectHandler(value)
		      } else {
		        this.el.style.cssText = value
		      }
		    }
		  },

		  objectHandler: function (value) {
		    // cache object styles so that only changed props
		    // are actually updated.
		    var cache = this.cache || (this.cache = {})
		    var prop, val
		    for (prop in cache) {
		      if (!(prop in value)) {
		        this.setProp(prop, null)
		        delete cache[prop]
		      }
		    }
		    for (prop in value) {
		      val = value[prop]
		      if (val !== cache[prop]) {
		        cache[prop] = val
		        this.setProp(prop, val)
		      }
		    }
		  },

		  setProp: function (prop, value) {
		    prop = normalize(prop)
		    if (!prop) return // unsupported prop
		    // cast possible numbers/booleans into strings
		    if (value != null) value += ''
		    if (value) {
		      var isImportant = importantRE.test(value)
		        ? 'important'
		        : ''
		      if (isImportant) {
		        value = value.replace(importantRE, '').trim()
		      }
		      this.el.style.setProperty(prop, value, isImportant)
		    } else {
		      this.el.style.removeProperty(prop)
		    }
		  }

		}

		/**
		 * Normalize a CSS property name.
		 * - cache result
		 * - auto prefix
		 * - camelCase -> dash-case
		 *
		 * @param {String} prop
		 * @return {String}
		 */

		function normalize (prop) {
		  if (propCache[prop]) {
		    return propCache[prop]
		  }
		  var res = prefix(prop)
		  propCache[prop] = propCache[res] = res
		  return res
		}

		/**
		 * Auto detect the appropriate prefix for a CSS property.
		 * https://gist.github.com/paulirish/523692
		 *
		 * @param {String} prop
		 * @return {String}
		 */

		function prefix (prop) {
		  prop = prop.replace(camelRE, '$1-$2').toLowerCase()
		  var camel = _.camelize(prop)
		  var upper = camel.charAt(0).toUpperCase() + camel.slice(1)
		  if (!testEl) {
		    testEl = document.createElement('div')
		  }
		  if (camel in testEl.style) {
		    return prop
		  }
		  var i = prefixes.length
		  var prefixed
		  while (i--) {
		    prefixed = camelPrefixes[i] + upper
		    if (prefixed in testEl.style) {
		      return prefixes[i] + prop
		    }
		  }
		}


	/***/ },
	/* 36 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var Transition = __webpack_require__(37)

		module.exports = {

		  priority: 1000,
		  isLiteral: true,

		  bind: function () {
		    if (!this._isDynamicLiteral) {
		      this.update(this.expression)
		    }
		  },

		  update: function (id, oldId) {
		    var el = this.el
		    var vm = this.el.__vue__ || this.vm
		    var hooks = _.resolveAsset(vm.$options, 'transitions', id)
		    id = id || 'v'
		    el.__v_trans = new Transition(el, id, hooks, vm)
		    if (oldId) {
		      _.removeClass(el, oldId + '-transition')
		    }
		    _.addClass(el, id + '-transition')
		  }
		}


	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var queue = __webpack_require__(38)
		var addClass = _.addClass
		var removeClass = _.removeClass
		var transitionEndEvent = _.transitionEndEvent
		var animationEndEvent = _.animationEndEvent
		var transDurationProp = _.transitionProp + 'Duration'
		var animDurationProp = _.animationProp + 'Duration'

		var TYPE_TRANSITION = 1
		var TYPE_ANIMATION = 2

		var uid = 0

		/**
		 * A Transition object that encapsulates the state and logic
		 * of the transition.
		 *
		 * @param {Element} el
		 * @param {String} id
		 * @param {Object} hooks
		 * @param {Vue} vm
		 */

		function Transition (el, id, hooks, vm) {
		  this.id = uid++
		  this.el = el
		  this.enterClass = id + '-enter'
		  this.leaveClass = id + '-leave'
		  this.hooks = hooks
		  this.vm = vm
		  // async state
		  this.pendingCssEvent =
		  this.pendingCssCb =
		  this.cancel =
		  this.pendingJsCb =
		  this.op =
		  this.cb = null
		  this.justEntered = false
		  this.typeCache = {}
		  // bind
		  var self = this
		  ;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone']
		    .forEach(function (m) {
		      self[m] = _.bind(self[m], self)
		    })
		}

		var p = Transition.prototype

		/**
		 * Start an entering transition.
		 *
		 * 1. enter transition triggered
		 * 2. call beforeEnter hook
		 * 3. add enter class
		 * 4. insert/show element
		 * 5. call enter hook (with possible explicit js callback)
		 * 6. reflow
		 * 7. based on transition type:
		 *    - transition:
		 *        remove class now, wait for transitionend,
		 *        then done if there's no explicit js callback.
		 *    - animation:
		 *        wait for animationend, remove class,
		 *        then done if there's no explicit js callback.
		 *    - no css transition:
		 *        done now if there's no explicit js callback.
		 * 8. wait for either done or js callback, then call
		 *    afterEnter hook.
		 *
		 * @param {Function} op - insert/show the element
		 * @param {Function} [cb]
		 */

		p.enter = function (op, cb) {
		  this.cancelPending()
		  this.callHook('beforeEnter')
		  this.cb = cb
		  addClass(this.el, this.enterClass)
		  op()
		  this.callHookWithCb('enter')
		  this.cancel = this.hooks && this.hooks.enterCancelled
		  queue.push(this.enterNextTick)
		}

		/**
		 * The "nextTick" phase of an entering transition, which is
		 * to be pushed into a queue and executed after a reflow so
		 * that removing the class can trigger a CSS transition.
		 */

		p.enterNextTick = function () {
		  this.justEntered = true
		  _.nextTick(function () {
		    this.justEntered = false
		  }, this)
		  var type = this.getCssTransitionType(this.enterClass)
		  var enterDone = this.enterDone
		  if (type === TYPE_TRANSITION) {
		    // trigger transition by removing enter class now
		    removeClass(this.el, this.enterClass)
		    this.setupCssCb(transitionEndEvent, enterDone)
		  } else if (type === TYPE_ANIMATION) {
		    this.setupCssCb(animationEndEvent, enterDone)
		  } else if (!this.pendingJsCb) {
		    enterDone()
		  }
		}

		/**
		 * The "cleanup" phase of an entering transition.
		 */

		p.enterDone = function () {
		  this.cancel = this.pendingJsCb = null
		  removeClass(this.el, this.enterClass)
		  this.callHook('afterEnter')
		  if (this.cb) this.cb()
		}

		/**
		 * Start a leaving transition.
		 *
		 * 1. leave transition triggered.
		 * 2. call beforeLeave hook
		 * 3. add leave class (trigger css transition)
		 * 4. call leave hook (with possible explicit js callback)
		 * 5. reflow if no explicit js callback is provided
		 * 6. based on transition type:
		 *    - transition or animation:
		 *        wait for end event, remove class, then done if
		 *        there's no explicit js callback.
		 *    - no css transition:
		 *        done if there's no explicit js callback.
		 * 7. wait for either done or js callback, then call
		 *    afterLeave hook.
		 *
		 * @param {Function} op - remove/hide the element
		 * @param {Function} [cb]
		 */

		p.leave = function (op, cb) {
		  this.cancelPending()
		  this.callHook('beforeLeave')
		  this.op = op
		  this.cb = cb
		  addClass(this.el, this.leaveClass)
		  this.callHookWithCb('leave')
		  this.cancel = this.hooks && this.hooks.leaveCancelled
		  // only need to handle leaveDone if
		  // 1. the transition is already done (synchronously called
		  //    by the user, which causes this.op set to null)
		  // 2. there's no explicit js callback
		  if (this.op && !this.pendingJsCb) {
		    // if a CSS transition leaves immediately after enter,
		    // the transitionend event never fires. therefore we
		    // detect such cases and end the leave immediately.
		    if (this.justEntered) {
		      this.leaveDone()
		    } else {
		      queue.push(this.leaveNextTick)
		    }
		  }
		}

		/**
		 * The "nextTick" phase of a leaving transition.
		 */

		p.leaveNextTick = function () {
		  var type = this.getCssTransitionType(this.leaveClass)
		  if (type) {
		    var event = type === TYPE_TRANSITION
		      ? transitionEndEvent
		      : animationEndEvent
		    this.setupCssCb(event, this.leaveDone)
		  } else {
		    this.leaveDone()
		  }
		}

		/**
		 * The "cleanup" phase of a leaving transition.
		 */

		p.leaveDone = function () {
		  this.cancel = this.pendingJsCb = null
		  this.op()
		  removeClass(this.el, this.leaveClass)
		  this.callHook('afterLeave')
		  if (this.cb) this.cb()
		  this.op = null
		}

		/**
		 * Cancel any pending callbacks from a previously running
		 * but not finished transition.
		 */

		p.cancelPending = function () {
		  this.op = this.cb = null
		  var hasPending = false
		  if (this.pendingCssCb) {
		    hasPending = true
		    _.off(this.el, this.pendingCssEvent, this.pendingCssCb)
		    this.pendingCssEvent = this.pendingCssCb = null
		  }
		  if (this.pendingJsCb) {
		    hasPending = true
		    this.pendingJsCb.cancel()
		    this.pendingJsCb = null
		  }
		  if (hasPending) {
		    removeClass(this.el, this.enterClass)
		    removeClass(this.el, this.leaveClass)
		  }
		  if (this.cancel) {
		    this.cancel.call(this.vm, this.el)
		    this.cancel = null
		  }
		}

		/**
		 * Call a user-provided synchronous hook function.
		 *
		 * @param {String} type
		 */

		p.callHook = function (type) {
		  if (this.hooks && this.hooks[type]) {
		    this.hooks[type].call(this.vm, this.el)
		  }
		}

		/**
		 * Call a user-provided, potentially-async hook function.
		 * We check for the length of arguments to see if the hook
		 * expects a `done` callback. If true, the transition's end
		 * will be determined by when the user calls that callback;
		 * otherwise, the end is determined by the CSS transition or
		 * animation.
		 *
		 * @param {String} type
		 */

		p.callHookWithCb = function (type) {
		  var hook = this.hooks && this.hooks[type]
		  if (hook) {
		    if (hook.length > 1) {
		      this.pendingJsCb = _.cancellable(this[type + 'Done'])
		    }
		    hook.call(this.vm, this.el, this.pendingJsCb)
		  }
		}

		/**
		 * Get an element's transition type based on the
		 * calculated styles.
		 *
		 * @param {String} className
		 * @return {Number}
		 */

		p.getCssTransitionType = function (className) {
		  /* istanbul ignore if */
		  if (
		    !transitionEndEvent ||
		    // skip CSS transitions if page is not visible -
		    // this solves the issue of transitionend events not
		    // firing until the page is visible again.
		    // pageVisibility API is supported in IE10+, same as
		    // CSS transitions.
		    document.hidden ||
		    // explicit js-only transition
		    (this.hooks && this.hooks.css === false)
		  ) {
		    return
		  }
		  var type = this.typeCache[className]
		  if (type) return type
		  var inlineStyles = this.el.style
		  var computedStyles = window.getComputedStyle(this.el)
		  var transDuration =
		    inlineStyles[transDurationProp] ||
		    computedStyles[transDurationProp]
		  if (transDuration && transDuration !== '0s') {
		    type = TYPE_TRANSITION
		  } else {
		    var animDuration =
		      inlineStyles[animDurationProp] ||
		      computedStyles[animDurationProp]
		    if (animDuration && animDuration !== '0s') {
		      type = TYPE_ANIMATION
		    }
		  }
		  if (type) {
		    this.typeCache[className] = type
		  }
		  return type
		}

		/**
		 * Setup a CSS transitionend/animationend callback.
		 *
		 * @param {String} event
		 * @param {Function} cb
		 */

		p.setupCssCb = function (event, cb) {
		  this.pendingCssEvent = event
		  var self = this
		  var el = this.el
		  var onEnd = this.pendingCssCb = function (e) {
		    if (e.target === el) {
		      _.off(el, event, onEnd)
		      self.pendingCssEvent = self.pendingCssCb = null
		      if (!self.pendingJsCb && cb) {
		        cb()
		      }
		    }
		  }
		  _.on(el, event, onEnd)
		}

		module.exports = Transition


	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var queue = []
		var queued = false

		/**
		 * Push a job into the queue.
		 *
		 * @param {Function} job
		 */

		exports.push = function (job) {
		  queue.push(job)
		  if (!queued) {
		    queued = true
		    _.nextTick(flush)
		  }
		}

		/**
		 * Flush the queue, and do one forced reflow before
		 * triggering transitions.
		 */

		function flush () {
		  // Force layout
		  var f = document.documentElement.offsetHeight
		  for (var i = 0; i < queue.length; i++) {
		    queue[i]()
		  }
		  queue = []
		  queued = false
		  // dummy return, so js linters don't complain about
		  // unused variable f
		  return f
		}


	/***/ },
	/* 39 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		module.exports = {

		  acceptStatement: true,
		  priority: 700,

		  bind: function () {
		    // deal with iframes
		    if (
		      this.el.tagName === 'IFRAME' &&
		      this.arg !== 'load'
		    ) {
		      var self = this
		      this.iframeBind = function () {
		        _.on(self.el.contentWindow, self.arg, self.handler)
		      }
		      _.on(this.el, 'load', this.iframeBind)
		    }
		  },

		  update: function (handler) {
		    if (typeof handler !== 'function') {
		      ("development") !== 'production' && _.warn(
		        'Directive v-on="' + this.arg + ': ' +
		        this.expression + '" expects a function value, ' +
		        'got ' + handler
		      )
		      return
		    }
		    this.reset()
		    var vm = this.vm
		    this.handler = function (e) {
		      e.targetVM = vm
		      vm.$event = e
		      var res = handler(e)
		      vm.$event = null
		      return res
		    }
		    if (this.iframeBind) {
		      this.iframeBind()
		    } else {
		      _.on(this.el, this.arg, this.handler)
		    }
		  },

		  reset: function () {
		    var el = this.iframeBind
		      ? this.el.contentWindow
		      : this.el
		    if (this.handler) {
		      _.off(el, this.arg, this.handler)
		    }
		  },

		  unbind: function () {
		    this.reset()
		    _.off(this.el, 'load', this.iframeBind)
		  }
		}


	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		var handlers = {
		  text: __webpack_require__(41),
		  radio: __webpack_require__(42),
		  select: __webpack_require__(43),
		  checkbox: __webpack_require__(44)
		}

		module.exports = {

		  priority: 800,
		  twoWay: true,
		  handlers: handlers,

		  /**
		   * Possible elements:
		   *   <select>
		   *   <textarea>
		   *   <input type="*">
		   *     - text
		   *     - checkbox
		   *     - radio
		   *     - number
		   *     - TODO: more types may be supplied as a plugin
		   */

		  bind: function () {
		    // friendly warning...
		    this.checkFilters()
		    if (this.hasRead && !this.hasWrite) {
		      ("development") !== 'production' && _.warn(
		        'It seems you are using a read-only filter with ' +
		        'v-model. You might want to use a two-way filter ' +
		        'to ensure correct behavior.'
		      )
		    }
		    var el = this.el
		    var tag = el.tagName
		    var handler
		    if (tag === 'INPUT') {
		      handler = handlers[el.type] || handlers.text
		    } else if (tag === 'SELECT') {
		      handler = handlers.select
		    } else if (tag === 'TEXTAREA') {
		      handler = handlers.text
		    } else {
		      ("development") !== 'production' && _.warn(
		        'v-model does not support element type: ' + tag
		      )
		      return
		    }
		    handler.bind.call(this)
		    this.update = handler.update
		    this.unbind = handler.unbind
		  },

		  /**
		   * Check read/write filter stats.
		   */

		  checkFilters: function () {
		    var filters = this.filters
		    if (!filters) return
		    var i = filters.length
		    while (i--) {
		      var filter = _.resolveAsset(this.vm.$options, 'filters', filters[i].name)
		      if (typeof filter === 'function' || filter.read) {
		        this.hasRead = true
		      }
		      if (filter.write) {
		        this.hasWrite = true
		      }
		    }
		  }
		}


	/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		module.exports = {

		  bind: function () {
		    var self = this
		    var el = this.el

		    // check params
		    // - lazy: update model on "change" instead of "input"
		    var lazy = this._checkParam('lazy') != null
		    // - number: cast value into number when updating model.
		    var number = this._checkParam('number') != null
		    // - debounce: debounce the input listener
		    var debounce = parseInt(this._checkParam('debounce'), 10)

		    // handle composition events.
		    //   http://blog.evanyou.me/2014/01/03/composition-event/
		    // skip this for Android because it handles composition
		    // events quite differently. Android doesn't trigger
		    // composition events for language input methods e.g.
		    // Chinese, but instead triggers them for spelling
		    // suggestions... (see Discussion/#162)
		    var composing = false
		    if (!_.isAndroid) {
		      this.onComposeStart = function () {
		        composing = true
		      }
		      this.onComposeEnd = function () {
		        composing = false
		        // in IE11 the "compositionend" event fires AFTER
		        // the "input" event, so the input handler is blocked
		        // at the end... have to call it here.
		        self.listener()
		      }
		      _.on(el, 'compositionstart', this.onComposeStart)
		      _.on(el, 'compositionend', this.onComposeEnd)
		    }

		    function syncToModel () {
		      var val = number
		        ? _.toNumber(el.value)
		        : el.value
		      self.set(val)
		    }

		    // if the directive has filters, we need to
		    // record cursor position and restore it after updating
		    // the input with the filtered value.
		    // also force update for type="range" inputs to enable
		    // "lock in range" (see #506)
		    if (this.hasRead || el.type === 'range') {
		      this.listener = function () {
		        if (composing) return
		        var charsOffset
		        // some HTML5 input types throw error here
		        try {
		          // record how many chars from the end of input
		          // the cursor was at
		          charsOffset = el.value.length - el.selectionStart
		        } catch (e) {}
		        // Fix IE10/11 infinite update cycle
		        // https://github.com/yyx990803/vue/issues/592
		        /* istanbul ignore if */
		        if (charsOffset < 0) {
		          return
		        }
		        syncToModel()
		        _.nextTick(function () {
		          // force a value update, because in
		          // certain cases the write filters output the
		          // same result for different input values, and
		          // the Observer set events won't be triggered.
		          var newVal = self._watcher.value
		          self.update(newVal)
		          if (charsOffset != null) {
		            var cursorPos =
		              _.toString(newVal).length - charsOffset
		            el.setSelectionRange(cursorPos, cursorPos)
		          }
		        })
		      }
		    } else {
		      this.listener = function () {
		        if (composing) return
		        syncToModel()
		      }
		    }

		    if (debounce) {
		      this.listener = _.debounce(this.listener, debounce)
		    }

		    // Now attach the main listener

		    this.event = lazy ? 'change' : 'input'
		    // Support jQuery events, since jQuery.trigger() doesn't
		    // trigger native events in some cases and some plugins
		    // rely on $.trigger()
		    //
		    // We want to make sure if a listener is attached using
		    // jQuery, it is also removed with jQuery, that's why
		    // we do the check for each directive instance and
		    // store that check result on itself. This also allows
		    // easier test coverage control by unsetting the global
		    // jQuery variable in tests.
		    this.hasjQuery = typeof jQuery === 'function'
		    if (this.hasjQuery) {
		      jQuery(el).on(this.event, this.listener)
		    } else {
		      _.on(el, this.event, this.listener)
		    }

		    // IE9 doesn't fire input event on backspace/del/cut
		    if (!lazy && _.isIE9) {
		      this.onCut = function () {
		        _.nextTick(self.listener)
		      }
		      this.onDel = function (e) {
		        if (e.keyCode === 46 || e.keyCode === 8) {
		          self.listener()
		        }
		      }
		      _.on(el, 'cut', this.onCut)
		      _.on(el, 'keyup', this.onDel)
		    }

		    // set initial value if present
		    if (
		      el.hasAttribute('value') ||
		      (el.tagName === 'TEXTAREA' && el.value.trim())
		    ) {
		      this._initValue = number
		        ? _.toNumber(el.value)
		        : el.value
		    }
		  },

		  update: function (value) {
		    this.el.value = _.toString(value)
		  },

		  unbind: function () {
		    var el = this.el
		    if (this.hasjQuery) {
		      jQuery(el).off(this.event, this.listener)
		    } else {
		      _.off(el, this.event, this.listener)
		    }
		    if (this.onComposeStart) {
		      _.off(el, 'compositionstart', this.onComposeStart)
		      _.off(el, 'compositionend', this.onComposeEnd)
		    }
		    if (this.onCut) {
		      _.off(el, 'cut', this.onCut)
		      _.off(el, 'keyup', this.onDel)
		    }
		  }
		}


	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		module.exports = {

		  bind: function () {
		    var self = this
		    var el = this.el
		    var number = this._checkParam('number') != null
		    function getValue () {
		      return number
		        ? _.toNumber(el.value)
		        : el.value
		    }
		    this.listener = function () {
		      self.set(getValue())
		    }
		    _.on(el, 'change', this.listener)
		    if (el.checked) {
		      this._initValue = getValue()
		    }
		  },

		  update: function (value) {
		    /* eslint-disable eqeqeq */
		    this.el.checked = value == this.el.value
		    /* eslint-enable eqeqeq */
		  },

		  unbind: function () {
		    _.off(this.el, 'change', this.listener)
		  }
		}


	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var Watcher = __webpack_require__(17)
		var dirParser = __webpack_require__(15)

		module.exports = {

		  bind: function () {
		    var self = this
		    var el = this.el
		    // update DOM using latest value.
		    this.forceUpdate = function () {
		      if (self._watcher) {
		        self.update(self._watcher.get())
		      }
		    }
		    // check options param
		    var optionsParam = this._checkParam('options')
		    if (optionsParam) {
		      initOptions.call(this, optionsParam)
		    }
		    this.number = this._checkParam('number') != null
		    this.multiple = el.hasAttribute('multiple')
		    this.listener = function () {
		      var value = self.multiple
		        ? getMultiValue(el)
		        : el.value
		      value = self.number
		        ? _.isArray(value)
		          ? value.map(_.toNumber)
		          : _.toNumber(value)
		        : value
		      self.set(value)
		    }
		    _.on(el, 'change', this.listener)
		    checkInitialValue.call(this)
		    // All major browsers except Firefox resets
		    // selectedIndex with value -1 to 0 when the element
		    // is appended to a new parent, therefore we have to
		    // force a DOM update whenever that happens...
		    this.vm.$on('hook:attached', this.forceUpdate)
		  },

		  update: function (value) {
		    var el = this.el
		    el.selectedIndex = -1
		    if (!value && value !== 0) {
		      if (this.defaultOption) {
		        this.defaultOption.selected = true
		      }
		      return
		    }
		    var multi = this.multiple && _.isArray(value)
		    var options = el.options
		    var i = options.length
		    var option
		    while (i--) {
		      option = options[i]
		      /* eslint-disable eqeqeq */
		      option.selected = multi
		        ? indexOf(value, option.value) > -1
		        : value == option.value
		      /* eslint-enable eqeqeq */
		    }
		  },

		  unbind: function () {
		    _.off(this.el, 'change', this.listener)
		    this.vm.$off('hook:attached', this.forceUpdate)
		    if (this.optionWatcher) {
		      this.optionWatcher.teardown()
		    }
		  }

		}

		/**
		 * Initialize the option list from the param.
		 *
		 * @param {String} expression
		 */

		function initOptions (expression) {
		  var self = this
		  var el = self.el
		  var defaultOption = self.defaultOption = self.el.options[0]
		  var descriptor = dirParser.parse(expression)[0]
		  function optionUpdateWatcher (value) {
		    if (_.isArray(value)) {
		      // clear old options.
		      // cannot reset innerHTML here because IE family get
		      // confused during compilation.
		      var i = el.options.length
		      while (i--) {
		        var option = el.options[i]
		        if (option !== defaultOption) {
		          el.removeChild(option)
		        }
		      }
		      buildOptions(el, value)
		      self.forceUpdate()
		    } else {
		      ("development") !== 'production' && _.warn(
		        'Invalid options value for v-model: ' + value
		      )
		    }
		  }
		  this.optionWatcher = new Watcher(
		    this.vm,
		    descriptor.expression,
		    optionUpdateWatcher,
		    {
		      deep: true,
		      filters: descriptor.filters
		    }
		  )
		  // update with initial value
		  optionUpdateWatcher(this.optionWatcher.value)
		}

		/**
		 * Build up option elements. IE9 doesn't create options
		 * when setting innerHTML on <select> elements, so we have
		 * to use DOM API here.
		 *
		 * @param {Element} parent - a <select> or an <optgroup>
		 * @param {Array} options
		 */

		function buildOptions (parent, options) {
		  var op, el
		  for (var i = 0, l = options.length; i < l; i++) {
		    op = options[i]
		    if (!op.options) {
		      el = document.createElement('option')
		      if (typeof op === 'string') {
		        el.text = el.value = op
		      } else {
		        if (op.value != null) {
		          el.value = op.value
		        }
		        el.text = op.text || op.value || ''
		        if (op.disabled) {
		          el.disabled = true
		        }
		      }
		    } else {
		      el = document.createElement('optgroup')
		      el.label = op.label
		      buildOptions(el, op.options)
		    }
		    parent.appendChild(el)
		  }
		}

		/**
		 * Check the initial value for selected options.
		 */

		function checkInitialValue () {
		  var initValue
		  var options = this.el.options
		  for (var i = 0, l = options.length; i < l; i++) {
		    if (options[i].hasAttribute('selected')) {
		      if (this.multiple) {
		        (initValue || (initValue = []))
		          .push(options[i].value)
		      } else {
		        initValue = options[i].value
		      }
		    }
		  }
		  if (typeof initValue !== 'undefined') {
		    this._initValue = this.number
		      ? _.toNumber(initValue)
		      : initValue
		  }
		}

		/**
		 * Helper to extract a value array for select[multiple]
		 *
		 * @param {SelectElement} el
		 * @return {Array}
		 */

		function getMultiValue (el) {
		  return Array.prototype.filter
		    .call(el.options, filterSelected)
		    .map(getOptionValue)
		}

		function filterSelected (op) {
		  return op.selected
		}

		function getOptionValue (op) {
		  return op.value || op.text
		}

		/**
		 * Native Array.indexOf uses strict equal, but in this
		 * case we need to match string/numbers with soft equal.
		 *
		 * @param {Array} arr
		 * @param {*} val
		 */

		function indexOf (arr, val) {
		  var i = arr.length
		  while (i--) {
		    /* eslint-disable eqeqeq */
		    if (arr[i] == val) return i
		    /* eslint-enable eqeqeq */
		  }
		  return -1
		}


	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		module.exports = {

		  bind: function () {
		    var self = this
		    var el = this.el
		    this.listener = function () {
		      self.set(el.checked)
		    }
		    _.on(el, 'change', this.listener)
		    if (el.checked) {
		      this._initValue = el.checked
		    }
		  },

		  update: function (value) {
		    this.el.checked = !!value
		  },

		  unbind: function () {
		    _.off(this.el, 'change', this.listener)
		  }
		}


	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var config = __webpack_require__(5)
		var isObject = _.isObject
		var isPlainObject = _.isPlainObject
		var textParser = __webpack_require__(13)
		var expParser = __webpack_require__(19)
		var templateParser = __webpack_require__(22)
		var compiler = __webpack_require__(10)
		var uid = 0

		// async component resolution states
		var UNRESOLVED = 0
		var PENDING = 1
		var RESOLVED = 2
		var ABORTED = 3

		module.exports = {

		  /**
		   * Setup.
		   */

		  bind: function () {
		    // support for item in array syntax
		    var inMatch = this.expression.match(/(.*) in (.*)/)
		    if (inMatch) {
		      this.arg = inMatch[1]
		      this._watcherExp = inMatch[2]
		    }
		    // uid as a cache identifier
		    this.id = '__v_repeat_' + (++uid)

		    // setup anchor nodes
		    this.start = _.createAnchor('v-repeat-start')
		    this.end = _.createAnchor('v-repeat-end')
		    _.replace(this.el, this.end)
		    _.before(this.start, this.end)

		    // check if this is a block repeat
		    this.template = _.isTemplate(this.el)
		      ? templateParser.parse(this.el, true)
		      : this.el

		    // check for trackby param
		    this.idKey = this._checkParam('track-by')
		    // check for transition stagger
		    var stagger = +this._checkParam('stagger')
		    this.enterStagger = +this._checkParam('enter-stagger') || stagger
		    this.leaveStagger = +this._checkParam('leave-stagger') || stagger

		    // check for v-ref/v-el
		    this.refID = this._checkParam(config.prefix + 'ref')
		    this.elID = this._checkParam(config.prefix + 'el')

		    // check other directives that need to be handled
		    // at v-repeat level
		    this.checkIf()
		    this.checkComponent()

		    // create cache object
		    this.cache = Object.create(null)

		    // some helpful tips...
		    /* istanbul ignore if */
		    if (
		      ("development") !== 'production' &&
		      this.el.tagName === 'OPTION'
		    ) {
		      _.warn(
		        'Don\'t use v-repeat for v-model options; ' +
		        'use the `options` param instead: ' +
		        'http://vuejs.org/guide/forms.html#Dynamic_Select_Options'
		      )
		    }
		  },

		  /**
		   * Warn against v-if usage.
		   */

		  checkIf: function () {
		    if (_.attr(this.el, 'if') !== null) {
		      ("development") !== 'production' && _.warn(
		        'Don\'t use v-if with v-repeat. ' +
		        'Use v-show or the "filterBy" filter instead.'
		      )
		    }
		  },

		  /**
		   * Check the component constructor to use for repeated
		   * instances. If static we resolve it now, otherwise it
		   * needs to be resolved at build time with actual data.
		   */

		  checkComponent: function () {
		    this.componentState = UNRESOLVED
		    var options = this.vm.$options
		    var id = _.checkComponent(this.el, options)
		    if (!id) {
		      // default constructor
		      this.Component = _.Vue
		      // inline repeats should inherit
		      this.inline = true
		      // important: transclude with no options, just
		      // to ensure block start and block end
		      this.template = compiler.transclude(this.template)
		      var copy = _.extend({}, options)
		      copy._asComponent = false
		      this._linkFn = compiler.compile(this.template, copy)
		    } else {
		      this.Component = null
		      this.asComponent = true
		      // check inline-template
		      if (this._checkParam('inline-template') !== null) {
		        // extract inline template as a DocumentFragment
		        this.inlineTemplate = _.extractContent(this.el, true)
		      }
		      var tokens = textParser.parse(id)
		      if (tokens) {
		        // dynamic component to be resolved later
		        var componentExp = textParser.tokensToExp(tokens)
		        this.componentGetter = expParser.parse(componentExp).get
		      } else {
		        // static
		        this.componentId = id
		        this.pendingData = null
		      }
		    }
		  },

		  resolveComponent: function () {
		    this.componentState = PENDING
		    this.vm._resolveComponent(this.componentId, _.bind(function (Component) {
		      if (this.componentState === ABORTED) {
		        return
		      }
		      this.Component = Component
		      this.componentState = RESOLVED
		      this.realUpdate(this.pendingData)
		      this.pendingData = null
		    }, this))
		  },

		    /**
		   * Resolve a dynamic component to use for an instance.
		   * The tricky part here is that there could be dynamic
		   * components depending on instance data.
		   *
		   * @param {Object} data
		   * @param {Object} meta
		   * @return {Function}
		   */

		  resolveDynamicComponent: function (data, meta) {
		    // create a temporary context object and copy data
		    // and meta properties onto it.
		    // use _.define to avoid accidentally overwriting scope
		    // properties.
		    var context = Object.create(this.vm)
		    var key
		    for (key in data) {
		      _.define(context, key, data[key])
		    }
		    for (key in meta) {
		      _.define(context, key, meta[key])
		    }
		    var id = this.componentGetter.call(context, context)
		    var Component = _.resolveAsset(this.vm.$options, 'components', id)
		    if (true) {
		      _.assertAsset(Component, 'component', id)
		    }
		    if (!Component.options) {
		      ("development") !== 'production' && _.warn(
		        'Async resolution is not supported for v-repeat ' +
		        '+ dynamic component. (component: ' + id + ')'
		      )
		      return _.Vue
		    }
		    return Component
		  },

		  /**
		   * Update.
		   * This is called whenever the Array mutates. If we have
		   * a component, we might need to wait for it to resolve
		   * asynchronously.
		   *
		   * @param {Array|Number|String} data
		   */

		  update: function (data) {
		    if (this.componentId) {
		      var state = this.componentState
		      if (state === UNRESOLVED) {
		        this.pendingData = data
		        // once resolved, it will call realUpdate
		        this.resolveComponent()
		      } else if (state === PENDING) {
		        this.pendingData = data
		      } else if (state === RESOLVED) {
		        this.realUpdate(data)
		      }
		    } else {
		      this.realUpdate(data)
		    }
		  },

		  /**
		   * The real update that actually modifies the DOM.
		   *
		   * @param {Array|Number|String} data
		   */

		  realUpdate: function (data) {
		    this.vms = this.diff(data, this.vms)
		    // update v-ref
		    if (this.refID) {
		      this.vm.$[this.refID] = this.converted
		        ? toRefObject(this.vms)
		        : this.vms
		    }
		    if (this.elID) {
		      this.vm.$$[this.elID] = this.vms.map(function (vm) {
		        return vm.$el
		      })
		    }
		  },

		  /**
		   * Diff, based on new data and old data, determine the
		   * minimum amount of DOM manipulations needed to make the
		   * DOM reflect the new data Array.
		   *
		   * The algorithm diffs the new data Array by storing a
		   * hidden reference to an owner vm instance on previously
		   * seen data. This allows us to achieve O(n) which is
		   * better than a levenshtein distance based algorithm,
		   * which is O(m * n).
		   *
		   * @param {Array} data
		   * @param {Array} oldVms
		   * @return {Array}
		   */

		  diff: function (data, oldVms) {
		    var idKey = this.idKey
		    var converted = this.converted
		    var start = this.start
		    var end = this.end
		    var inDoc = _.inDoc(start)
		    var alias = this.arg
		    var init = !oldVms
		    var vms = new Array(data.length)
		    var obj, raw, vm, i, l, primitive
		    // First pass, go through the new Array and fill up
		    // the new vms array. If a piece of data has a cached
		    // instance for it, we reuse it. Otherwise build a new
		    // instance.
		    for (i = 0, l = data.length; i < l; i++) {
		      obj = data[i]
		      raw = converted ? obj.$value : obj
		      primitive = !isObject(raw)
		      vm = !init && this.getVm(raw, i, converted ? obj.$key : null)
		      if (vm) { // reusable instance
		        vm._reused = true
		        vm.$index = i // update $index
		        // update data for track-by or object repeat,
		        // since in these two cases the data is replaced
		        // rather than mutated.
		        if (idKey || converted || primitive) {
		          if (alias) {
		            vm[alias] = raw
		          } else if (_.isPlainObject(raw)) {
		            vm.$data = raw
		          } else {
		            vm.$value = raw
		          }
		        }
		      } else { // new instance
		        vm = this.build(obj, i, true)
		        vm._reused = false
		      }
		      vms[i] = vm
		      // insert if this is first run
		      if (init) {
		        vm.$before(end)
		      }
		    }
		    // if this is the first run, we're done.
		    if (init) {
		      return vms
		    }
		    // Second pass, go through the old vm instances and
		    // destroy those who are not reused (and remove them
		    // from cache)
		    var removalIndex = 0
		    var totalRemoved = oldVms.length - vms.length
		    for (i = 0, l = oldVms.length; i < l; i++) {
		      vm = oldVms[i]
		      if (!vm._reused) {
		        this.uncacheVm(vm)
		        vm.$destroy(false, true) // defer cleanup until removal
		        this.remove(vm, removalIndex++, totalRemoved, inDoc)
		      }
		    }
		    // final pass, move/insert new instances into the
		    // right place.
		    var targetPrev, prevEl, currentPrev
		    var insertionIndex = 0
		    for (i = 0, l = vms.length; i < l; i++) {
		      vm = vms[i]
		      // this is the vm that we should be after
		      targetPrev = vms[i - 1]
		      prevEl = targetPrev
		        ? targetPrev._staggerCb
		          ? targetPrev._staggerAnchor
		          : targetPrev._fragmentEnd || targetPrev.$el
		        : start
		      if (vm._reused && !vm._staggerCb) {
		        currentPrev = findPrevVm(vm, start, this.id)
		        if (currentPrev !== targetPrev) {
		          this.move(vm, prevEl)
		        }
		      } else {
		        // new instance, or still in stagger.
		        // insert with updated stagger index.
		        this.insert(vm, insertionIndex++, prevEl, inDoc)
		      }
		      vm._reused = false
		    }
		    return vms
		  },

		  /**
		   * Build a new instance and cache it.
		   *
		   * @param {Object} data
		   * @param {Number} index
		   * @param {Boolean} needCache
		   */

		  build: function (data, index, needCache) {
		    var meta = { $index: index }
		    if (this.converted) {
		      meta.$key = data.$key
		    }
		    var raw = this.converted ? data.$value : data
		    var alias = this.arg
		    if (alias) {
		      data = {}
		      data[alias] = raw
		    } else if (!isPlainObject(raw)) {
		      // non-object values
		      data = {}
		      meta.$value = raw
		    } else {
		      // default
		      data = raw
		    }
		    // resolve constructor
		    var Component = this.Component || this.resolveDynamicComponent(data, meta)
		    var parent = this._host || this.vm
		    var vm = parent.$addChild({
		      el: templateParser.clone(this.template),
		      data: data,
		      inherit: this.inline,
		      template: this.inlineTemplate,
		      // repeater meta, e.g. $index, $key
		      _meta: meta,
		      // mark this as an inline-repeat instance
		      _repeat: this.inline,
		      // is this a component?
		      _asComponent: this.asComponent,
		      // linker cachable if no inline-template
		      _linkerCachable: !this.inlineTemplate && Component !== _.Vue,
		      // pre-compiled linker for simple repeats
		      _linkFn: this._linkFn,
		      // identifier, shows that this vm belongs to this collection
		      _repeatId: this.id,
		      // transclusion content owner
		      _context: this.vm
		    }, Component)
		    // cache instance
		    if (needCache) {
		      this.cacheVm(raw, vm, index, this.converted ? meta.$key : null)
		    }
		    // sync back changes for two-way bindings of primitive values
		    var dir = this
		    if (this.rawType === 'object' && isPrimitive(raw)) {
		      vm.$watch(alias || '$value', function (val) {
		        if (dir.filters) {
		          ("development") !== 'production' && _.warn(
		            'You seem to be mutating the $value reference of ' +
		            'a v-repeat instance (likely through v-model) ' +
		            'and filtering the v-repeat at the same time. ' +
		            'This will not work properly with an Array of ' +
		            'primitive values. Please use an Array of ' +
		            'Objects instead.'
		          )
		        }
		        dir._withLock(function () {
		          if (dir.converted) {
		            dir.rawValue[vm.$key] = val
		          } else {
		            dir.rawValue.$set(vm.$index, val)
		          }
		        })
		      })
		    }
		    return vm
		  },

		  /**
		   * Unbind, teardown everything
		   */

		  unbind: function () {
		    this.componentState = ABORTED
		    if (this.refID) {
		      this.vm.$[this.refID] = null
		    }
		    if (this.vms) {
		      var i = this.vms.length
		      var vm
		      while (i--) {
		        vm = this.vms[i]
		        this.uncacheVm(vm)
		        vm.$destroy()
		      }
		    }
		  },

		  /**
		   * Cache a vm instance based on its data.
		   *
		   * If the data is an object, we save the vm's reference on
		   * the data object as a hidden property. Otherwise we
		   * cache them in an object and for each primitive value
		   * there is an array in case there are duplicates.
		   *
		   * @param {Object} data
		   * @param {Vue} vm
		   * @param {Number} index
		   * @param {String} [key]
		   */

		  cacheVm: function (data, vm, index, key) {
		    var idKey = this.idKey
		    var cache = this.cache
		    var primitive = !isObject(data)
		    var id
		    if (key || idKey || primitive) {
		      id = idKey
		        ? idKey === '$index'
		          ? index
		          : data[idKey]
		        : (key || index)
		      if (!cache[id]) {
		        cache[id] = vm
		      } else if (!primitive && idKey !== '$index') {
		        ("development") !== 'production' && _.warn(
		          'Duplicate track-by key in v-repeat: ' + id
		        )
		      }
		    } else {
		      id = this.id
		      if (data.hasOwnProperty(id)) {
		        if (data[id] === null) {
		          data[id] = vm
		        } else {
		          ("development") !== 'production' && _.warn(
		            'Duplicate objects are not supported in v-repeat ' +
		            'when using components or transitions.'
		          )
		        }
		      } else {
		        _.define(data, id, vm)
		      }
		    }
		    vm._raw = data
		  },

		  /**
		   * Try to get a cached instance from a piece of data.
		   *
		   * @param {Object} data
		   * @param {Number} index
		   * @param {String} [key]
		   * @return {Vue|undefined}
		   */

		  getVm: function (data, index, key) {
		    var idKey = this.idKey
		    var primitive = !isObject(data)
		    if (key || idKey || primitive) {
		      var id = idKey
		        ? idKey === '$index'
		          ? index
		          : data[idKey]
		        : (key || index)
		      return this.cache[id]
		    } else {
		      return data[this.id]
		    }
		  },

		  /**
		   * Delete a cached vm instance.
		   *
		   * @param {Vue} vm
		   */

		  uncacheVm: function (vm) {
		    var data = vm._raw
		    var idKey = this.idKey
		    var index = vm.$index
		    // fix #948: avoid accidentally fall through to
		    // a parent repeater which happens to have $key.
		    var key = vm.hasOwnProperty('$key') && vm.$key
		    var primitive = !isObject(data)
		    if (idKey || key || primitive) {
		      var id = idKey
		        ? idKey === '$index'
		          ? index
		          : data[idKey]
		        : (key || index)
		      this.cache[id] = null
		    } else {
		      data[this.id] = null
		      vm._raw = null
		    }
		  },

		  /**
		   * Insert an instance.
		   *
		   * @param {Vue} vm
		   * @param {Number} index
		   * @param {Node} prevEl
		   * @param {Boolean} inDoc
		   */

		  insert: function (vm, index, prevEl, inDoc) {
		    if (vm._staggerCb) {
		      vm._staggerCb.cancel()
		      vm._staggerCb = null
		    }
		    var staggerAmount = this.getStagger(vm, index, null, 'enter')
		    if (inDoc && staggerAmount) {
		      // create an anchor and insert it synchronously,
		      // so that we can resolve the correct order without
		      // worrying about some elements not inserted yet
		      var anchor = vm._staggerAnchor
		      if (!anchor) {
		        anchor = vm._staggerAnchor = _.createAnchor('stagger-anchor')
		        anchor.__vue__ = vm
		      }
		      _.after(anchor, prevEl)
		      var op = vm._staggerCb = _.cancellable(function () {
		        vm._staggerCb = null
		        vm.$before(anchor)
		        _.remove(anchor)
		      })
		      setTimeout(op, staggerAmount)
		    } else {
		      vm.$after(prevEl)
		    }
		  },

		  /**
		   * Move an already inserted instance.
		   *
		   * @param {Vue} vm
		   * @param {Node} prevEl
		   */

		  move: function (vm, prevEl) {
		    vm.$after(prevEl, null, false)
		  },

		  /**
		   * Remove an instance.
		   *
		   * @param {Vue} vm
		   * @param {Number} index
		   * @param {Boolean} inDoc
		   */

		  remove: function (vm, index, total, inDoc) {
		    if (vm._staggerCb) {
		      vm._staggerCb.cancel()
		      vm._staggerCb = null
		      // it's not possible for the same vm to be removed
		      // twice, so if we have a pending stagger callback,
		      // it means this vm is queued for enter but removed
		      // before its transition started. Since it is already
		      // destroyed, we can just leave it in detached state.
		      return
		    }
		    var staggerAmount = this.getStagger(vm, index, total, 'leave')
		    if (inDoc && staggerAmount) {
		      var op = vm._staggerCb = _.cancellable(function () {
		        vm._staggerCb = null
		        remove()
		      })
		      setTimeout(op, staggerAmount)
		    } else {
		      remove()
		    }
		    function remove () {
		      vm.$remove(function () {
		        vm._cleanup()
		      })
		    }
		  },

		  /**
		   * Get the stagger amount for an insertion/removal.
		   *
		   * @param {Vue} vm
		   * @param {Number} index
		   * @param {String} type
		   * @param {Number} total
		   */

		  getStagger: function (vm, index, total, type) {
		    type = type + 'Stagger'
		    var transition = vm.$el.__v_trans
		    var hooks = transition && transition.hooks
		    var hook = hooks && (hooks[type] || hooks.stagger)
		    return hook
		      ? hook.call(vm, index, total)
		      : index * this[type]
		  },

		  /**
		   * Pre-process the value before piping it through the
		   * filters, and convert non-Array objects to arrays.
		   *
		   * This function will be bound to this directive instance
		   * and passed into the watcher.
		   *
		   * @param {*} value
		   * @return {Array}
		   * @private
		   */

		  _preProcess: function (value) {
		    // regardless of type, store the un-filtered raw value.
		    this.rawValue = value
		    var type = this.rawType = typeof value
		    if (!isPlainObject(value)) {
		      this.converted = false
		      if (type === 'number') {
		        value = range(value)
		      } else if (type === 'string') {
		        value = _.toArray(value)
		      }
		      return value || []
		    } else {
		      // convert plain object to array.
		      var keys = Object.keys(value)
		      var i = keys.length
		      var res = new Array(i)
		      var key
		      while (i--) {
		        key = keys[i]
		        res[i] = {
		          $key: key,
		          $value: value[key]
		        }
		      }
		      this.converted = true
		      return res
		    }
		  }
		}

		/**
		 * Helper to find the previous element that is an instance
		 * root node. This is necessary because a destroyed vm's
		 * element could still be lingering in the DOM before its
		 * leaving transition finishes, but its __vue__ reference
		 * should have been removed so we can skip them.
		 *
		 * If this is a block repeat, we want to make sure we only
		 * return vm that is bound to this v-repeat. (see #929)
		 *
		 * @param {Vue} vm
		 * @param {Comment|Text} anchor
		 * @return {Vue}
		 */

		function findPrevVm (vm, anchor, id) {
		  var el = vm.$el.previousSibling
		  /* istanbul ignore if */
		  if (!el) return
		  while (
		    (!el.__vue__ || el.__vue__.$options._repeatId !== id) &&
		    el !== anchor
		  ) {
		    el = el.previousSibling
		  }
		  return el.__vue__
		}

		/**
		 * Create a range array from given number.
		 *
		 * @param {Number} n
		 * @return {Array}
		 */

		function range (n) {
		  var i = -1
		  var ret = new Array(n)
		  while (++i < n) {
		    ret[i] = i
		  }
		  return ret
		}

		/**
		 * Convert a vms array to an object ref for v-ref on an
		 * Object value.
		 *
		 * @param {Array} vms
		 * @return {Object}
		 */

		function toRefObject (vms) {
		  var ref = {}
		  for (var i = 0, l = vms.length; i < l; i++) {
		    ref[vms[i].$key] = vms[i]
		  }
		  return ref
		}

		/**
		 * Check if a value is a primitive one:
		 * String, Number, Boolean, null or undefined.
		 *
		 * @param {*} value
		 * @return {Boolean}
		 */

		function isPrimitive (value) {
		  var type = typeof value
		  return value == null ||
		    type === 'string' ||
		    type === 'number' ||
		    type === 'boolean'
		}


	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var compiler = __webpack_require__(10)
		var templateParser = __webpack_require__(22)
		var transition = __webpack_require__(30)
		var Cache = __webpack_require__(14)
		var cache = new Cache(1000)

		module.exports = {

		  bind: function () {
		    var el = this.el
		    if (!el.__vue__) {
		      this.start = _.createAnchor('v-if-start')
		      this.end = _.createAnchor('v-if-end')
		      _.replace(el, this.end)
		      _.before(this.start, this.end)
		      if (_.isTemplate(el)) {
		        this.template = templateParser.parse(el, true)
		      } else {
		        this.template = document.createDocumentFragment()
		        this.template.appendChild(templateParser.clone(el))
		      }
		      // compile the nested partial
		      var cacheId = (this.vm.constructor.cid || '') + el.outerHTML
		      this.linker = cache.get(cacheId)
		      if (!this.linker) {
		        this.linker = compiler.compile(
		          this.template,
		          this.vm.$options,
		          true, // partial
		          this._host // important
		        )
		        cache.put(cacheId, this.linker)
		      }
		    } else {
		      ("development") !== 'production' && _.warn(
		        'v-if="' + this.expression + '" cannot be ' +
		        'used on an instance root element.'
		      )
		      this.invalid = true
		    }
		  },

		  update: function (value) {
		    if (this.invalid) return
		    if (value) {
		      // avoid duplicate compiles, since update() can be
		      // called with different truthy values
		      if (!this.unlink) {
		        this.link(
		          templateParser.clone(this.template),
		          this.linker
		        )
		      }
		    } else {
		      this.teardown()
		    }
		  },

		  link: function (frag, linker) {
		    var vm = this.vm
		    this.unlink = linker(vm, frag)
		    transition.blockAppend(frag, this.end, vm)
		    // call attached for all the child components created
		    // during the compilation
		    if (_.inDoc(vm.$el)) {
		      var children = this.getContainedComponents()
		      if (children) children.forEach(callAttach)
		    }
		  },

		  teardown: function () {
		    if (!this.unlink) return
		    // collect children beforehand
		    var children
		    if (_.inDoc(this.vm.$el)) {
		      children = this.getContainedComponents()
		    }
		    transition.blockRemove(this.start, this.end, this.vm)
		    if (children) children.forEach(callDetach)
		    this.unlink()
		    this.unlink = null
		  },

		  getContainedComponents: function () {
		    var vm = this.vm
		    var start = this.start.nextSibling
		    var end = this.end

		    function contains (c) {
		      var cur = start
		      var next
		      while (next !== end) {
		        next = cur.nextSibling
		        if (
		          cur === c.$el ||
		          cur.contains && cur.contains(c.$el)
		        ) {
		          return true
		        }
		        cur = next
		      }
		      return false
		    }

		    return vm.$children.length &&
		      vm.$children.filter(contains)
		  },

		  unbind: function () {
		    if (this.unlink) this.unlink()
		  }

		}

		function callAttach (child) {
		  if (!child._isAttached) {
		    child._callHook('attached')
		  }
		}

		function callDetach (child) {
		  if (child._isAttached) {
		    child._callHook('detached')
		  }
		}


	/***/ },
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {

		exports.content = __webpack_require__(48)
		exports.partial = __webpack_require__(49)


	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var clone = __webpack_require__(22).clone

		// This is the elementDirective that handles <content>
		// transclusions. It relies on the raw content of an
		// instance being stored as `$options._content` during
		// the transclude phase.

		module.exports = {

		  bind: function () {
		    var vm = this.vm
		    var host = vm
		    // we need find the content context, which is the
		    // closest non-inline-repeater instance.
		    while (host.$options._repeat) {
		      host = host.$parent
		    }
		    var raw = host.$options._content
		    var content
		    if (!raw) {
		      this.fallback()
		      return
		    }
		    var context = host._context
		    var selector = this._checkParam('select')
		    if (!selector) {
		      // Default content
		      var self = this
		      var compileDefaultContent = function () {
		        self.compile(
		          extractFragment(raw.childNodes, raw, true),
		          context,
		          vm
		        )
		      }
		      if (!host._isCompiled) {
		        // defer until the end of instance compilation,
		        // because the default outlet must wait until all
		        // other possible outlets with selectors have picked
		        // out their contents.
		        host.$once('hook:compiled', compileDefaultContent)
		      } else {
		        compileDefaultContent()
		      }
		    } else {
		      // select content
		      var nodes = raw.querySelectorAll(selector)
		      if (nodes.length) {
		        content = extractFragment(nodes, raw)
		        if (content.hasChildNodes()) {
		          this.compile(content, context, vm)
		        } else {
		          this.fallback()
		        }
		      } else {
		        this.fallback()
		      }
		    }
		  },

		  fallback: function () {
		    this.compile(_.extractContent(this.el, true), this.vm)
		  },

		  compile: function (content, context, host) {
		    if (content && context) {
		      this.unlink = context.$compile(content, host)
		    }
		    if (content) {
		      _.replace(this.el, content)
		    } else {
		      _.remove(this.el)
		    }
		  },

		  unbind: function () {
		    if (this.unlink) {
		      this.unlink()
		    }
		  }
		}

		/**
		 * Extract qualified content nodes from a node list.
		 *
		 * @param {NodeList} nodes
		 * @param {Element} parent
		 * @param {Boolean} main
		 * @return {DocumentFragment}
		 */

		function extractFragment (nodes, parent, main) {
		  var frag = document.createDocumentFragment()
		  for (var i = 0, l = nodes.length; i < l; i++) {
		    var node = nodes[i]
		    // if this is the main outlet, we want to skip all
		    // previously selected nodes;
		    // otherwise, we want to mark the node as selected.
		    // clone the node so the original raw content remains
		    // intact. this ensures proper re-compilation in cases
		    // where the outlet is inside a conditional block
		    if (main && !node.__v_selected) {
		      frag.appendChild(clone(node))
		    } else if (!main && node.parentNode === parent) {
		      node.__v_selected = true
		      frag.appendChild(clone(node))
		    }
		  }
		  return frag
		}


	/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var templateParser = __webpack_require__(22)
		var textParser = __webpack_require__(13)
		var compiler = __webpack_require__(10)
		var Cache = __webpack_require__(14)
		var cache = new Cache(1000)

		// v-partial reuses logic from v-if
		var vIf = __webpack_require__(46)

		module.exports = {

		  link: vIf.link,
		  teardown: vIf.teardown,
		  getContainedComponents: vIf.getContainedComponents,

		  bind: function () {
		    var el = this.el
		    this.start = _.createAnchor('v-partial-start')
		    this.end = _.createAnchor('v-partial-end')
		    _.replace(el, this.end)
		    _.before(this.start, this.end)
		    var id = el.getAttribute('name')
		    var tokens = textParser.parse(id)
		    if (tokens) {
		      // dynamic partial
		      this.setupDynamic(tokens)
		    } else {
		      // static partial
		      this.insert(id)
		    }
		  },

		  setupDynamic: function (tokens) {
		    var self = this
		    var exp = textParser.tokensToExp(tokens)
		    this.unwatch = this.vm.$watch(exp, function (value) {
		      self.teardown()
		      self.insert(value)
		    }, {
		      immediate: true,
		      user: false
		    })
		  },

		  insert: function (id) {
		    var partial = _.resolveAsset(this.vm.$options, 'partials', id)
		    if (true) {
		      _.assertAsset(partial, 'partial', id)
		    }
		    if (partial) {
		      var frag = templateParser.parse(partial, true)
		      // cache partials based on constructor id.
		      var cacheId = (this.vm.constructor.cid || '') + partial
		      var linker = this.compile(frag, cacheId)
		      // this is provided by v-if
		      this.link(frag, linker)
		    }
		  },

		  compile: function (frag, cacheId) {
		    var hit = cache.get(cacheId)
		    if (hit) return hit
		    var linker = compiler.compile(frag, this.vm.$options, true)
		    cache.put(cacheId, linker)
		    return linker
		  },

		  unbind: function () {
		    if (this.unlink) this.unlink()
		    if (this.unwatch) this.unwatch()
		  }
		}


	/***/ },
	/* 50 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		/**
		 * Stringify value.
		 *
		 * @param {Number} indent
		 */

		exports.json = {
		  read: function (value, indent) {
		    return typeof value === 'string'
		      ? value
		      : JSON.stringify(value, null, Number(indent) || 2)
		  },
		  write: function (value) {
		    try {
		      return JSON.parse(value)
		    } catch (e) {
		      return value
		    }
		  }
		}

		/**
		 * 'abc' => 'Abc'
		 */

		exports.capitalize = function (value) {
		  if (!value && value !== 0) return ''
		  value = value.toString()
		  return value.charAt(0).toUpperCase() + value.slice(1)
		}

		/**
		 * 'abc' => 'ABC'
		 */

		exports.uppercase = function (value) {
		  return (value || value === 0)
		    ? value.toString().toUpperCase()
		    : ''
		}

		/**
		 * 'AbC' => 'abc'
		 */

		exports.lowercase = function (value) {
		  return (value || value === 0)
		    ? value.toString().toLowerCase()
		    : ''
		}

		/**
		 * 12345 => $12,345.00
		 *
		 * @param {String} sign
		 */

		var digitsRE = /(\d{3})(?=\d)/g
		exports.currency = function (value, currency) {
		  value = parseFloat(value)
		  if (!isFinite(value) || (!value && value !== 0)) return ''
		  currency = currency || '$'
		  var stringified = Math.abs(value).toFixed(2)
		  var _int = stringified.slice(0, -3)
		  var i = _int.length % 3
		  var head = i > 0
		    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
		    : ''
		  var _float = stringified.slice(-3)
		  var sign = value < 0 ? '-' : ''
		  return currency + sign + head +
		    _int.slice(i).replace(digitsRE, '$1,') +
		    _float
		}

		/**
		 * 'item' => 'items'
		 *
		 * @params
		 *  an array of strings corresponding to
		 *  the single, double, triple ... forms of the word to
		 *  be pluralized. When the number to be pluralized
		 *  exceeds the length of the args, it will use the last
		 *  entry in the array.
		 *
		 *  e.g. ['single', 'double', 'triple', 'multiple']
		 */

		exports.pluralize = function (value) {
		  var args = _.toArray(arguments, 1)
		  return args.length > 1
		    ? (args[value % 10 - 1] || args[args.length - 1])
		    : (args[0] + (value === 1 ? '' : 's'))
		}

		/**
		 * A special filter that takes a handler function,
		 * wraps it so it only gets triggered on specific
		 * keypresses. v-on only.
		 *
		 * @param {String} key
		 */

		var keyCodes = {
		  esc: 27,
		  tab: 9,
		  enter: 13,
		  'delete': 46,
		  up: 38,
		  left: 37,
		  right: 39,
		  down: 40
		}

		exports.key = function (handler, key) {
		  if (!handler) return
		  var code = keyCodes[key]
		  if (!code) {
		    code = parseInt(key, 10)
		  }
		  return function (e) {
		    if (e.keyCode === code) {
		      return handler.call(this, e)
		    }
		  }
		}

		// expose keycode hash
		exports.key.keyCodes = keyCodes

		/**
		 * Install special array filters
		 */

		_.extend(exports, __webpack_require__(51))


	/***/ },
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var Path = __webpack_require__(20)

		/**
		 * Filter filter for v-repeat
		 *
		 * @param {String} searchKey
		 * @param {String} [delimiter]
		 * @param {String} dataKey
		 */

		exports.filterBy = function (arr, search, delimiter, dataKey) {
		  // allow optional `in` delimiter
		  // because why not
		  if (delimiter && delimiter !== 'in') {
		    dataKey = delimiter
		  }
		  if (search == null) {
		    return arr
		  }
		  // cast to lowercase string
		  search = ('' + search).toLowerCase()
		  return arr.filter(function (item) {
		    return dataKey
		      ? contains(Path.get(item, dataKey), search)
		      : contains(item, search)
		  })
		}

		/**
		 * Filter filter for v-repeat
		 *
		 * @param {String} sortKey
		 * @param {String} reverse
		 */

		exports.orderBy = function (arr, sortKey, reverse) {
		  if (!sortKey) {
		    return arr
		  }
		  var order = 1
		  if (arguments.length > 2) {
		    if (reverse === '-1') {
		      order = -1
		    } else {
		      order = reverse ? -1 : 1
		    }
		  }
		  // sort on a copy to avoid mutating original array
		  return arr.slice().sort(function (a, b) {
		    if (sortKey !== '$key' && sortKey !== '$value') {
		      if (a && '$value' in a) a = a.$value
		      if (b && '$value' in b) b = b.$value
		    }
		    a = _.isObject(a) ? Path.get(a, sortKey) : a
		    b = _.isObject(b) ? Path.get(b, sortKey) : b
		    return a === b ? 0 : a > b ? order : -order
		  })
		}

		/**
		 * String contain helper
		 *
		 * @param {*} val
		 * @param {String} search
		 */

		function contains (val, search) {
		  if (_.isPlainObject(val)) {
		    for (var key in val) {
		      if (contains(val[key], search)) {
		        return true
		      }
		    }
		  } else if (_.isArray(val)) {
		    var i = val.length
		    while (i--) {
		      if (contains(val[i], search)) {
		        return true
		      }
		    }
		  } else if (val != null) {
		    return val.toString().toLowerCase().indexOf(search) > -1
		  }
		}


	/***/ },
	/* 52 */
	/***/ function(module, exports, __webpack_require__) {

		var mergeOptions = __webpack_require__(1).mergeOptions

		/**
		 * The main init sequence. This is called for every
		 * instance, including ones that are created from extended
		 * constructors.
		 *
		 * @param {Object} options - this options object should be
		 *                           the result of merging class
		 *                           options and the options passed
		 *                           in to the constructor.
		 */

		exports._init = function (options) {

		  options = options || {}

		  this.$el = null
		  this.$parent = options._parent
		  this.$root = options._root || this
		  this.$children = []
		  this.$ = {}           // child vm references
		  this.$$ = {}          // element references
		  this._watchers = []   // all watchers as an array
		  this._directives = [] // all directives
		  this._childCtors = {} // inherit:true constructors

		  // a flag to avoid this being observed
		  this._isVue = true

		  // events bookkeeping
		  this._events = {}            // registered callbacks
		  this._eventsCount = {}       // for $broadcast optimization
		  this._eventCancelled = false // for event cancellation

		  // fragment instance properties
		  this._isFragment = false
		  this._fragmentStart =    // @type {CommentNode}
		  this._fragmentEnd = null // @type {CommentNode}

		  // lifecycle state
		  this._isCompiled =
		  this._isDestroyed =
		  this._isReady =
		  this._isAttached =
		  this._isBeingDestroyed = false
		  this._unlinkFn = null

		  // context: the scope in which the component was used,
		  // and the scope in which props and contents of this
		  // instance should be compiled in.
		  this._context =
		    options._context ||
		    options._parent

		  // push self into parent / transclusion host
		  if (this.$parent) {
		    this.$parent.$children.push(this)
		  }

		  // props used in v-repeat diffing
		  this._reused = false
		  this._staggerOp = null

		  // merge options.
		  options = this.$options = mergeOptions(
		    this.constructor.options,
		    options,
		    this
		  )

		  // initialize data as empty object.
		  // it will be filled up in _initScope().
		  this._data = {}

		  // initialize data observation and scope inheritance.
		  this._initScope()

		  // setup event system and option events.
		  this._initEvents()

		  // call created hook
		  this._callHook('created')

		  // if `el` option is passed, start compilation.
		  if (options.el) {
		    this.$mount(options.el)
		  }
		}


	/***/ },
	/* 53 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var inDoc = _.inDoc

		/**
		 * Setup the instance's option events & watchers.
		 * If the value is a string, we pull it from the
		 * instance's methods by name.
		 */

		exports._initEvents = function () {
		  var options = this.$options
		  registerCallbacks(this, '$on', options.events)
		  registerCallbacks(this, '$watch', options.watch)
		}

		/**
		 * Register callbacks for option events and watchers.
		 *
		 * @param {Vue} vm
		 * @param {String} action
		 * @param {Object} hash
		 */

		function registerCallbacks (vm, action, hash) {
		  if (!hash) return
		  var handlers, key, i, j
		  for (key in hash) {
		    handlers = hash[key]
		    if (_.isArray(handlers)) {
		      for (i = 0, j = handlers.length; i < j; i++) {
		        register(vm, action, key, handlers[i])
		      }
		    } else {
		      register(vm, action, key, handlers)
		    }
		  }
		}

		/**
		 * Helper to register an event/watch callback.
		 *
		 * @param {Vue} vm
		 * @param {String} action
		 * @param {String} key
		 * @param {Function|String|Object} handler
		 * @param {Object} [options]
		 */

		function register (vm, action, key, handler, options) {
		  var type = typeof handler
		  if (type === 'function') {
		    vm[action](key, handler, options)
		  } else if (type === 'string') {
		    var methods = vm.$options.methods
		    var method = methods && methods[handler]
		    if (method) {
		      vm[action](key, method, options)
		    } else {
		      ("development") !== 'production' && _.warn(
		        'Unknown method: "' + handler + '" when ' +
		        'registering callback for ' + action +
		        ': "' + key + '".'
		      )
		    }
		  } else if (handler && type === 'object') {
		    register(vm, action, key, handler.handler, handler)
		  }
		}

		/**
		 * Setup recursive attached/detached calls
		 */

		exports._initDOMHooks = function () {
		  this.$on('hook:attached', onAttached)
		  this.$on('hook:detached', onDetached)
		}

		/**
		 * Callback to recursively call attached hook on children
		 */

		function onAttached () {
		  if (!this._isAttached) {
		    this._isAttached = true
		    this.$children.forEach(callAttach)
		  }
		}

		/**
		 * Iterator to call attached hook
		 *
		 * @param {Vue} child
		 */

		function callAttach (child) {
		  if (!child._isAttached && inDoc(child.$el)) {
		    child._callHook('attached')
		  }
		}

		/**
		 * Callback to recursively call detached hook on children
		 */

		function onDetached () {
		  if (this._isAttached) {
		    this._isAttached = false
		    this.$children.forEach(callDetach)
		  }
		}

		/**
		 * Iterator to call detached hook
		 *
		 * @param {Vue} child
		 */

		function callDetach (child) {
		  if (child._isAttached && !inDoc(child.$el)) {
		    child._callHook('detached')
		  }
		}

		/**
		 * Trigger all handlers for a hook
		 *
		 * @param {String} hook
		 */

		exports._callHook = function (hook) {
		  var handlers = this.$options[hook]
		  if (handlers) {
		    for (var i = 0, j = handlers.length; i < j; i++) {
		      handlers[i].call(this)
		    }
		  }
		  this.$emit('hook:' + hook)
		}


	/***/ },
	/* 54 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var compiler = __webpack_require__(10)
		var Observer = __webpack_require__(55)
		var Dep = __webpack_require__(18)
		var Watcher = __webpack_require__(17)

		/**
		 * Setup the scope of an instance, which contains:
		 * - observed data
		 * - computed properties
		 * - user methods
		 * - meta properties
		 */

		exports._initScope = function () {
		  this._initProps()
		  this._initMeta()
		  this._initMethods()
		  this._initData()
		  this._initComputed()
		}

		/**
		 * Initialize props.
		 */

		exports._initProps = function () {
		  var options = this.$options
		  var el = options.el
		  var props = options.props
		  if (props && !el) {
		    ("development") !== 'production' && _.warn(
		      'Props will not be compiled if no `el` option is ' +
		      'provided at instantiation.'
		    )
		  }
		  // make sure to convert string selectors into element now
		  el = options.el = _.query(el)
		  this._propsUnlinkFn = el && props
		    ? compiler.compileAndLinkProps(
		        this, el, props
		      )
		    : null
		}

		/**
		 * Initialize the data.
		 */

		exports._initData = function () {
		  var propsData = this._data
		  var optionsDataFn = this.$options.data
		  var optionsData = optionsDataFn && optionsDataFn()
		  if (optionsData) {
		    this._data = optionsData
		    for (var prop in propsData) {
		      if (
		        this._props[prop].raw !== null ||
		        !optionsData.hasOwnProperty(prop)
		      ) {
		        optionsData.$set(prop, propsData[prop])
		      }
		    }
		  }
		  var data = this._data
		  // proxy data on instance
		  var keys = Object.keys(data)
		  var i, key
		  i = keys.length
		  while (i--) {
		    key = keys[i]
		    if (!_.isReserved(key)) {
		      this._proxy(key)
		    }
		  }
		  // observe data
		  Observer.create(data, this)
		}

		/**
		 * Swap the isntance's $data. Called in $data's setter.
		 *
		 * @param {Object} newData
		 */

		exports._setData = function (newData) {
		  newData = newData || {}
		  var oldData = this._data
		  this._data = newData
		  var keys, key, i
		  // copy props.
		  // this should only happen during a v-repeat of component
		  // that also happens to have compiled props.
		  var props = this.$options.props
		  if (props) {
		    i = props.length
		    while (i--) {
		      key = props[i].name
		      if (key !== '$data' && !newData.hasOwnProperty(key)) {
		        newData.$set(key, oldData[key])
		      }
		    }
		  }
		  // unproxy keys not present in new data
		  keys = Object.keys(oldData)
		  i = keys.length
		  while (i--) {
		    key = keys[i]
		    if (!_.isReserved(key) && !(key in newData)) {
		      this._unproxy(key)
		    }
		  }
		  // proxy keys not already proxied,
		  // and trigger change for changed values
		  keys = Object.keys(newData)
		  i = keys.length
		  while (i--) {
		    key = keys[i]
		    if (!this.hasOwnProperty(key) && !_.isReserved(key)) {
		      // new property
		      this._proxy(key)
		    }
		  }
		  oldData.__ob__.removeVm(this)
		  Observer.create(newData, this)
		  this._digest()
		}

		/**
		 * Proxy a property, so that
		 * vm.prop === vm._data.prop
		 *
		 * @param {String} key
		 */

		exports._proxy = function (key) {
		  // need to store ref to self here
		  // because these getter/setters might
		  // be called by child instances!
		  var self = this
		  Object.defineProperty(self, key, {
		    configurable: true,
		    enumerable: true,
		    get: function proxyGetter () {
		      return self._data[key]
		    },
		    set: function proxySetter (val) {
		      self._data[key] = val
		    }
		  })
		}

		/**
		 * Unproxy a property.
		 *
		 * @param {String} key
		 */

		exports._unproxy = function (key) {
		  delete this[key]
		}

		/**
		 * Force update on every watcher in scope.
		 */

		exports._digest = function () {
		  var i = this._watchers.length
		  while (i--) {
		    this._watchers[i].update(true) // shallow updates
		  }
		  var children = this.$children
		  i = children.length
		  while (i--) {
		    var child = children[i]
		    if (child.$options.inherit) {
		      child._digest()
		    }
		  }
		}

		/**
		 * Setup computed properties. They are essentially
		 * special getter/setters
		 */

		function noop () {}
		exports._initComputed = function () {
		  var computed = this.$options.computed
		  if (computed) {
		    for (var key in computed) {
		      var userDef = computed[key]
		      var def = {
		        enumerable: true,
		        configurable: true
		      }
		      if (typeof userDef === 'function') {
		        def.get = makeComputedGetter(userDef, this)
		        def.set = noop
		      } else {
		        def.get = userDef.get
		          ? makeComputedGetter(userDef.get, this)
		          : noop
		        def.set = userDef.set
		          ? _.bind(userDef.set, this)
		          : noop
		      }
		      Object.defineProperty(this, key, def)
		    }
		  }
		}

		function makeComputedGetter (getter, owner) {
		  var watcher = new Watcher(owner, getter, null, {
		    lazy: true
		  })
		  return function computedGetter () {
		    if (watcher.dirty) {
		      watcher.evaluate()
		    }
		    if (Dep.target) {
		      watcher.depend()
		    }
		    return watcher.value
		  }
		}

		/**
		 * Setup instance methods. Methods must be bound to the
		 * instance since they might be called by children
		 * inheriting them.
		 */

		exports._initMethods = function () {
		  var methods = this.$options.methods
		  if (methods) {
		    for (var key in methods) {
		      this[key] = _.bind(methods[key], this)
		    }
		  }
		}

		/**
		 * Initialize meta information like $index, $key & $value.
		 */

		exports._initMeta = function () {
		  var metas = this.$options._meta
		  if (metas) {
		    for (var key in metas) {
		      this._defineMeta(key, metas[key])
		    }
		  }
		}

		/**
		 * Define a meta property, e.g $index, $key, $value
		 * which only exists on the vm instance but not in $data.
		 *
		 * @param {String} key
		 * @param {*} value
		 */

		exports._defineMeta = function (key, value) {
		  var dep = new Dep()
		  Object.defineProperty(this, key, {
		    enumerable: true,
		    configurable: true,
		    get: function metaGetter () {
		      if (Dep.target) {
		        dep.depend()
		      }
		      return value
		    },
		    set: function metaSetter (val) {
		      if (val !== value) {
		        value = val
		        dep.notify()
		      }
		    }
		  })
		}


	/***/ },
	/* 55 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var config = __webpack_require__(5)
		var Dep = __webpack_require__(18)
		var arrayMethods = __webpack_require__(56)
		var arrayKeys = Object.getOwnPropertyNames(arrayMethods)
		__webpack_require__(57)

		/**
		 * Observer class that are attached to each observed
		 * object. Once attached, the observer converts target
		 * object's property keys into getter/setters that
		 * collect dependencies and dispatches updates.
		 *
		 * @param {Array|Object} value
		 * @constructor
		 */

		function Observer (value) {
		  this.value = value
		  this.dep = new Dep()
		  _.define(value, '__ob__', this)
		  if (_.isArray(value)) {
		    var augment = config.proto && _.hasProto
		      ? protoAugment
		      : copyAugment
		    augment(value, arrayMethods, arrayKeys)
		    this.observeArray(value)
		  } else {
		    this.walk(value)
		  }
		}

		// Static methods

		/**
		 * Attempt to create an observer instance for a value,
		 * returns the new observer if successfully observed,
		 * or the existing observer if the value already has one.
		 *
		 * @param {*} value
		 * @param {Vue} [vm]
		 * @return {Observer|undefined}
		 * @static
		 */

		Observer.create = function (value, vm) {
		  var ob
		  if (
		    value &&
		    value.hasOwnProperty('__ob__') &&
		    value.__ob__ instanceof Observer
		  ) {
		    ob = value.__ob__
		  } else if (
		    _.isObject(value) &&
		    !Object.isFrozen(value) &&
		    !value._isVue
		  ) {
		    ob = new Observer(value)
		  }
		  if (ob && vm) {
		    ob.addVm(vm)
		  }
		  return ob
		}

		// Instance methods

		var p = Observer.prototype

		/**
		 * Walk through each property and convert them into
		 * getter/setters. This method should only be called when
		 * value type is Object. Properties prefixed with `$` or `_`
		 * and accessor properties are ignored.
		 *
		 * @param {Object} obj
		 */

		p.walk = function (obj) {
		  var keys = Object.keys(obj)
		  var i = keys.length
		  var key, prefix
		  while (i--) {
		    key = keys[i]
		    prefix = key.charCodeAt(0)
		    if (prefix !== 0x24 && prefix !== 0x5F) { // skip $ or _
		      this.convert(key, obj[key])
		    }
		  }
		}

		/**
		 * Try to carete an observer for a child value,
		 * and if value is array, link dep to the array.
		 *
		 * @param {*} val
		 * @return {Dep|undefined}
		 */

		p.observe = function (val) {
		  return Observer.create(val)
		}

		/**
		 * Observe a list of Array items.
		 *
		 * @param {Array} items
		 */

		p.observeArray = function (items) {
		  var i = items.length
		  while (i--) {
		    this.observe(items[i])
		  }
		}

		/**
		 * Convert a property into getter/setter so we can emit
		 * the events when the property is accessed/changed.
		 *
		 * @param {String} key
		 * @param {*} val
		 */

		p.convert = function (key, val) {
		  var ob = this
		  var childOb = ob.observe(val)
		  var dep = new Dep()
		  Object.defineProperty(ob.value, key, {
		    enumerable: true,
		    configurable: true,
		    get: function () {
		      if (Dep.target) {
		        dep.depend()
		        if (childOb) {
		          childOb.dep.depend()
		        }
		        if (_.isArray(val)) {
		          for (var e, i = 0, l = val.length; i < l; i++) {
		            e = val[i]
		            e && e.__ob__ && e.__ob__.dep.depend()
		          }
		        }
		      }
		      return val
		    },
		    set: function (newVal) {
		      if (newVal === val) return
		      val = newVal
		      childOb = ob.observe(newVal)
		      dep.notify()
		    }
		  })
		}

		/**
		 * Add an owner vm, so that when $add/$delete mutations
		 * happen we can notify owner vms to proxy the keys and
		 * digest the watchers. This is only called when the object
		 * is observed as an instance's root $data.
		 *
		 * @param {Vue} vm
		 */

		p.addVm = function (vm) {
		  (this.vms || (this.vms = [])).push(vm)
		}

		/**
		 * Remove an owner vm. This is called when the object is
		 * swapped out as an instance's $data object.
		 *
		 * @param {Vue} vm
		 */

		p.removeVm = function (vm) {
		  this.vms.$remove(vm)
		}

		// helpers

		/**
		 * Augment an target Object or Array by intercepting
		 * the prototype chain using __proto__
		 *
		 * @param {Object|Array} target
		 * @param {Object} proto
		 */

		function protoAugment (target, src) {
		  target.__proto__ = src
		}

		/**
		 * Augment an target Object or Array by defining
		 * hidden properties.
		 *
		 * @param {Object|Array} target
		 * @param {Object} proto
		 */

		function copyAugment (target, src, keys) {
		  var i = keys.length
		  var key
		  while (i--) {
		    key = keys[i]
		    _.define(target, key, src[key])
		  }
		}

		module.exports = Observer


	/***/ },
	/* 56 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var arrayProto = Array.prototype
		var arrayMethods = Object.create(arrayProto)

		/**
		 * Intercept mutating methods and emit events
		 */

		;[
		  'push',
		  'pop',
		  'shift',
		  'unshift',
		  'splice',
		  'sort',
		  'reverse'
		]
		.forEach(function (method) {
		  // cache original method
		  var original = arrayProto[method]
		  _.define(arrayMethods, method, function mutator () {
		    // avoid leaking arguments:
		    // http://jsperf.com/closure-with-arguments
		    var i = arguments.length
		    var args = new Array(i)
		    while (i--) {
		      args[i] = arguments[i]
		    }
		    var result = original.apply(this, args)
		    var ob = this.__ob__
		    var inserted
		    switch (method) {
		      case 'push':
		        inserted = args
		        break
		      case 'unshift':
		        inserted = args
		        break
		      case 'splice':
		        inserted = args.slice(2)
		        break
		    }
		    if (inserted) ob.observeArray(inserted)
		    // notify change
		    ob.dep.notify()
		    return result
		  })
		})

		/**
		 * Swap the element at the given index with a new value
		 * and emits corresponding event.
		 *
		 * @param {Number} index
		 * @param {*} val
		 * @return {*} - replaced element
		 */

		_.define(
		  arrayProto,
		  '$set',
		  function $set (index, val) {
		    if (index >= this.length) {
		      this.length = index + 1
		    }
		    return this.splice(index, 1, val)[0]
		  }
		)

		/**
		 * Convenience method to remove the element at given index.
		 *
		 * @param {Number} index
		 * @param {*} val
		 */

		_.define(
		  arrayProto,
		  '$remove',
		  function $remove (index) {
		    /* istanbul ignore if */
		    if (!this.length) return
		    if (typeof index !== 'number') {
		      index = _.indexOf(this, index)
		    }
		    if (index > -1) {
		      return this.splice(index, 1)
		    }
		  }
		)

		module.exports = arrayMethods


	/***/ },
	/* 57 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var objProto = Object.prototype

		/**
		 * Add a new property to an observed object
		 * and emits corresponding event
		 *
		 * @param {String} key
		 * @param {*} val
		 * @public
		 */

		_.define(
		  objProto,
		  '$add',
		  function $add (key, val) {
		    if (this.hasOwnProperty(key)) return
		    var ob = this.__ob__
		    if (!ob || _.isReserved(key)) {
		      this[key] = val
		      return
		    }
		    ob.convert(key, val)
		    ob.dep.notify()
		    if (ob.vms) {
		      var i = ob.vms.length
		      while (i--) {
		        var vm = ob.vms[i]
		        vm._proxy(key)
		        vm._digest()
		      }
		    }
		  }
		)

		/**
		 * Set a property on an observed object, calling add to
		 * ensure the property is observed.
		 *
		 * @param {String} key
		 * @param {*} val
		 * @public
		 */

		_.define(
		  objProto,
		  '$set',
		  function $set (key, val) {
		    this.$add(key, val)
		    this[key] = val
		  }
		)

		/**
		 * Deletes a property from an observed object
		 * and emits corresponding event
		 *
		 * @param {String} key
		 * @public
		 */

		_.define(
		  objProto,
		  '$delete',
		  function $delete (key) {
		    if (!this.hasOwnProperty(key)) return
		    delete this[key]
		    var ob = this.__ob__
		    if (!ob || _.isReserved(key)) {
		      return
		    }
		    ob.dep.notify()
		    if (ob.vms) {
		      var i = ob.vms.length
		      while (i--) {
		        var vm = ob.vms[i]
		        vm._unproxy(key)
		        vm._digest()
		      }
		    }
		  }
		)


	/***/ },
	/* 58 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var Directive = __webpack_require__(59)
		var compiler = __webpack_require__(10)

		/**
		 * Transclude, compile and link element.
		 *
		 * If a pre-compiled linker is available, that means the
		 * passed in element will be pre-transcluded and compiled
		 * as well - all we need to do is to call the linker.
		 *
		 * Otherwise we need to call transclude/compile/link here.
		 *
		 * @param {Element} el
		 * @return {Element}
		 */

		exports._compile = function (el) {
		  var options = this.$options
		  var host = this._host
		  if (options._linkFn) {
		    // pre-transcluded with linker, just use it
		    this._initElement(el)
		    this._unlinkFn = options._linkFn(this, el, host)
		  } else {
		    // transclude and init element
		    // transclude can potentially replace original
		    // so we need to keep reference; this step also injects
		    // the template and caches the original attributes
		    // on the container node and replacer node.
		    var original = el
		    el = compiler.transclude(el, options)
		    this._initElement(el)

		    // root is always compiled per-instance, because
		    // container attrs and props can be different every time.
		    var rootLinker = compiler.compileRoot(el, options)

		    // compile and link the rest
		    var contentLinkFn
		    var ctor = this.constructor
		    // component compilation can be cached
		    // as long as it's not using inline-template
		    if (options._linkerCachable) {
		      contentLinkFn = ctor.linker
		      if (!contentLinkFn) {
		        contentLinkFn = ctor.linker = compiler.compile(el, options)
		      }
		    }

		    // link phase
		    var rootUnlinkFn = rootLinker(this, el)
		    var contentUnlinkFn = contentLinkFn
		      ? contentLinkFn(this, el)
		      : compiler.compile(el, options)(this, el, host)

		    // register composite unlink function
		    // to be called during instance destruction
		    this._unlinkFn = function () {
		      rootUnlinkFn()
		      // passing destroying: true to avoid searching and
		      // splicing the directives
		      contentUnlinkFn(true)
		    }

		    // finally replace original
		    if (options.replace) {
		      _.replace(original, el)
		    }
		  }
		  return el
		}

		/**
		 * Initialize instance element. Called in the public
		 * $mount() method.
		 *
		 * @param {Element} el
		 */

		exports._initElement = function (el) {
		  if (el instanceof DocumentFragment) {
		    this._isFragment = true
		    this.$el = this._fragmentStart = el.firstChild
		    this._fragmentEnd = el.lastChild
		    // set persisted text anchors to empty
		    if (this._fragmentStart.nodeType === 3) {
		      this._fragmentStart.data = this._fragmentEnd.data = ''
		    }
		    this._blockFragment = el
		  } else {
		    this.$el = el
		  }
		  this.$el.__vue__ = this
		  this._callHook('beforeCompile')
		}

		/**
		 * Create and bind a directive to an element.
		 *
		 * @param {String} name - directive name
		 * @param {Node} node   - target node
		 * @param {Object} desc - parsed directive descriptor
		 * @param {Object} def  - directive definition object
		 * @param {Vue|undefined} host - transclusion host component
		 */

		exports._bindDir = function (name, node, desc, def, host) {
		  this._directives.push(
		    new Directive(name, node, this, desc, def, host)
		  )
		}

		/**
		 * Teardown an instance, unobserves the data, unbind all the
		 * directives, turn off all the event listeners, etc.
		 *
		 * @param {Boolean} remove - whether to remove the DOM node.
		 * @param {Boolean} deferCleanup - if true, defer cleanup to
		 *                                 be called later
		 */

		exports._destroy = function (remove, deferCleanup) {
		  if (this._isBeingDestroyed) {
		    return
		  }
		  this._callHook('beforeDestroy')
		  this._isBeingDestroyed = true
		  var i
		  // remove self from parent. only necessary
		  // if parent is not being destroyed as well.
		  var parent = this.$parent
		  if (parent && !parent._isBeingDestroyed) {
		    parent.$children.$remove(this)
		  }
		  // destroy all children.
		  i = this.$children.length
		  while (i--) {
		    this.$children[i].$destroy()
		  }
		  // teardown props
		  if (this._propsUnlinkFn) {
		    this._propsUnlinkFn()
		  }
		  // teardown all directives. this also tearsdown all
		  // directive-owned watchers.
		  if (this._unlinkFn) {
		    this._unlinkFn()
		  }
		  i = this._watchers.length
		  while (i--) {
		    this._watchers[i].teardown()
		  }
		  // remove reference to self on $el
		  if (this.$el) {
		    this.$el.__vue__ = null
		  }
		  // remove DOM element
		  var self = this
		  if (remove && this.$el) {
		    this.$remove(function () {
		      self._cleanup()
		    })
		  } else if (!deferCleanup) {
		    this._cleanup()
		  }
		}

		/**
		 * Clean up to ensure garbage collection.
		 * This is called after the leave transition if there
		 * is any.
		 */

		exports._cleanup = function () {
		  // remove reference from data ob
		  // frozen object may not have observer.
		  if (this._data.__ob__) {
		    this._data.__ob__.removeVm(this)
		  }
		  // Clean up references to private properties and other
		  // instances. preserve reference to _data so that proxy
		  // accessors still work. The only potential side effect
		  // here is that mutating the instance after it's destroyed
		  // may affect the state of other components that are still
		  // observing the same object, but that seems to be a
		  // reasonable responsibility for the user rather than
		  // always throwing an error on them.
		  this.$el =
		  this.$parent =
		  this.$root =
		  this.$children =
		  this._watchers =
		  this._directives = null
		  // call the last hook...
		  this._isDestroyed = true
		  this._callHook('destroyed')
		  // turn off all instance listeners.
		  this.$off()
		}


	/***/ },
	/* 59 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var config = __webpack_require__(5)
		var Watcher = __webpack_require__(17)
		var textParser = __webpack_require__(13)
		var expParser = __webpack_require__(19)

		/**
		 * A directive links a DOM element with a piece of data,
		 * which is the result of evaluating an expression.
		 * It registers a watcher with the expression and calls
		 * the DOM update function when a change is triggered.
		 *
		 * @param {String} name
		 * @param {Node} el
		 * @param {Vue} vm
		 * @param {Object} descriptor
		 *                 - {String} expression
		 *                 - {String} [arg]
		 *                 - {Array<Object>} [filters]
		 * @param {Object} def - directive definition object
		 * @param {Vue|undefined} host - transclusion host target
		 * @constructor
		 */

		function Directive (name, el, vm, descriptor, def, host) {
		  // public
		  this.name = name
		  this.el = el
		  this.vm = vm
		  // copy descriptor props
		  this.raw = descriptor.raw
		  this.expression = descriptor.expression
		  this.arg = descriptor.arg
		  this.filters = descriptor.filters
		  // private
		  this._descriptor = descriptor
		  this._host = host
		  this._locked = false
		  this._bound = false
		  // init
		  this._bind(def)
		}

		var p = Directive.prototype

		/**
		 * Initialize the directive, mixin definition properties,
		 * setup the watcher, call definition bind() and update()
		 * if present.
		 *
		 * @param {Object} def
		 */

		p._bind = function (def) {
		  if (
		    (this.name !== 'cloak' || this.vm._isCompiled) &&
		    this.el && this.el.removeAttribute
		  ) {
		    this.el.removeAttribute(config.prefix + this.name)
		  }
		  if (typeof def === 'function') {
		    this.update = def
		  } else {
		    _.extend(this, def)
		  }
		  this._watcherExp = this.expression
		  this._checkDynamicLiteral()
		  if (this.bind) {
		    this.bind()
		  }
		  if (this._watcherExp &&
		      (this.update || this.twoWay) &&
		      (!this.isLiteral || this._isDynamicLiteral) &&
		      !this._checkStatement()) {
		    // wrapped updater for context
		    var dir = this
		    var update = this._update = this.update
		      ? function (val, oldVal) {
		          if (!dir._locked) {
		            dir.update(val, oldVal)
		          }
		        }
		      : function () {} // noop if no update is provided
		    // pre-process hook called before the value is piped
		    // through the filters. used in v-repeat.
		    var preProcess = this._preProcess
		      ? _.bind(this._preProcess, this)
		      : null
		    var watcher = this._watcher = new Watcher(
		      this.vm,
		      this._watcherExp,
		      update, // callback
		      {
		        filters: this.filters,
		        twoWay: this.twoWay,
		        deep: this.deep,
		        preProcess: preProcess
		      }
		    )
		    if (this._initValue != null) {
		      watcher.set(this._initValue)
		    } else if (this.update) {
		      this.update(watcher.value)
		    }
		  }
		  this._bound = true
		}

		/**
		 * check if this is a dynamic literal binding.
		 *
		 * e.g. v-component="{{currentView}}"
		 */

		p._checkDynamicLiteral = function () {
		  var expression = this.expression
		  if (expression && this.isLiteral) {
		    var tokens = textParser.parse(expression)
		    if (tokens) {
		      var exp = textParser.tokensToExp(tokens)
		      this.expression = this.vm.$get(exp)
		      this._watcherExp = exp
		      this._isDynamicLiteral = true
		    }
		  }
		}

		/**
		 * Check if the directive is a function caller
		 * and if the expression is a callable one. If both true,
		 * we wrap up the expression and use it as the event
		 * handler.
		 *
		 * e.g. v-on="click: a++"
		 *
		 * @return {Boolean}
		 */

		p._checkStatement = function () {
		  var expression = this.expression
		  if (
		    expression && this.acceptStatement &&
		    !expParser.isSimplePath(expression)
		  ) {
		    var fn = expParser.parse(expression).get
		    var vm = this.vm
		    var handler = function () {
		      fn.call(vm, vm)
		    }
		    if (this.filters) {
		      handler = vm._applyFilters(handler, null, this.filters)
		    }
		    this.update(handler)
		    return true
		  }
		}

		/**
		 * Check for an attribute directive param, e.g. lazy
		 *
		 * @param {String} name
		 * @return {String}
		 */

		p._checkParam = function (name) {
		  var param = this.el.getAttribute(name)
		  if (param !== null) {
		    this.el.removeAttribute(name)
		    param = this.vm.$interpolate(param)
		  }
		  return param
		}

		/**
		 * Teardown the watcher and call unbind.
		 */

		p._teardown = function () {
		  if (this._bound) {
		    this._bound = false
		    if (this.unbind) {
		      this.unbind()
		    }
		    if (this._watcher) {
		      this._watcher.teardown()
		    }
		    this.vm = this.el = this._watcher = null
		  }
		}

		/**
		 * Set the corresponding value with the setter.
		 * This should only be used in two-way directives
		 * e.g. v-model.
		 *
		 * @param {*} value
		 * @public
		 */

		p.set = function (value) {
		  if (this.twoWay) {
		    this._withLock(function () {
		      this._watcher.set(value)
		    })
		  }
		}

		/**
		 * Execute a function while preventing that function from
		 * triggering updates on this directive instance.
		 *
		 * @param {Function} fn
		 */

		p._withLock = function (fn) {
		  var self = this
		  self._locked = true
		  fn.call(self)
		  _.nextTick(function () {
		    self._locked = false
		  })
		}

		module.exports = Directive


	/***/ },
	/* 60 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		/**
		 * Apply a list of filter (descriptors) to a value.
		 * Using plain for loops here because this will be called in
		 * the getter of any watcher with filters so it is very
		 * performance sensitive.
		 *
		 * @param {*} value
		 * @param {*} [oldValue]
		 * @param {Array} filters
		 * @param {Boolean} write
		 * @return {*}
		 */

		exports._applyFilters = function (value, oldValue, filters, write) {
		  var filter, fn, args, arg, offset, i, l, j, k
		  for (i = 0, l = filters.length; i < l; i++) {
		    filter = filters[i]
		    fn = _.resolveAsset(this.$options, 'filters', filter.name)
		    if (true) {
		      _.assertAsset(fn, 'filter', filter.name)
		    }
		    if (!fn) continue
		    fn = write ? fn.write : (fn.read || fn)
		    if (typeof fn !== 'function') continue
		    args = write ? [value, oldValue] : [value]
		    offset = write ? 2 : 1
		    if (filter.args) {
		      for (j = 0, k = filter.args.length; j < k; j++) {
		        arg = filter.args[j]
		        args[j + offset] = arg.dynamic
		          ? this.$get(arg.value)
		          : arg.value
		      }
		    }
		    value = fn.apply(this, args)
		  }
		  return value
		}

		/**
		 * Resolve a component, depending on whether the component
		 * is defined normally or using an async factory function.
		 * Resolves synchronously if already resolved, otherwise
		 * resolves asynchronously and caches the resolved
		 * constructor on the factory.
		 *
		 * @param {String} id
		 * @param {Function} cb
		 */

		exports._resolveComponent = function (id, cb) {
		  var factory = _.resolveAsset(this.$options, 'components', id)
		  if (true) {
		    _.assertAsset(factory, 'component', id)
		  }
		  if (!factory) {
		    return
		  }
		  // async component factory
		  if (!factory.options) {
		    if (factory.resolved) {
		      // cached
		      cb(factory.resolved)
		    } else if (factory.requested) {
		      // pool callbacks
		      factory.pendingCallbacks.push(cb)
		    } else {
		      factory.requested = true
		      var cbs = factory.pendingCallbacks = [cb]
		      factory(function resolve (res) {
		        if (_.isPlainObject(res)) {
		          res = _.Vue.extend(res)
		        }
		        // cache resolved
		        factory.resolved = res
		        // invoke callbacks
		        for (var i = 0, l = cbs.length; i < l; i++) {
		          cbs[i](res)
		        }
		      }, function reject (reason) {
		        ("development") !== 'production' && _.warn(
		          'Failed to resolve async component: ' + id + '. ' +
		          (reason ? '\nReason: ' + reason : '')
		        )
		      })
		    }
		  } else {
		    // normal component
		    cb(factory)
		  }
		}


	/***/ },
	/* 61 */
	/***/ function(module, exports, __webpack_require__) {

		var Watcher = __webpack_require__(17)
		var Path = __webpack_require__(20)
		var textParser = __webpack_require__(13)
		var dirParser = __webpack_require__(15)
		var expParser = __webpack_require__(19)
		var filterRE = /[^|]\|[^|]/

		/**
		 * Get the value from an expression on this vm.
		 *
		 * @param {String} exp
		 * @return {*}
		 */

		exports.$get = function (exp) {
		  var res = expParser.parse(exp)
		  if (res) {
		    try {
		      return res.get.call(this, this)
		    } catch (e) {}
		  }
		}

		/**
		 * Set the value from an expression on this vm.
		 * The expression must be a valid left-hand
		 * expression in an assignment.
		 *
		 * @param {String} exp
		 * @param {*} val
		 */

		exports.$set = function (exp, val) {
		  var res = expParser.parse(exp, true)
		  if (res && res.set) {
		    res.set.call(this, this, val)
		  }
		}

		/**
		 * Add a property on the VM
		 *
		 * @param {String} key
		 * @param {*} val
		 */

		exports.$add = function (key, val) {
		  this._data.$add(key, val)
		}

		/**
		 * Delete a property on the VM
		 *
		 * @param {String} key
		 */

		exports.$delete = function (key) {
		  this._data.$delete(key)
		}

		/**
		 * Watch an expression, trigger callback when its
		 * value changes.
		 *
		 * @param {String} exp
		 * @param {Function} cb
		 * @param {Object} [options]
		 *                 - {Boolean} deep
		 *                 - {Boolean} immediate
		 *                 - {Boolean} user
		 * @return {Function} - unwatchFn
		 */

		exports.$watch = function (exp, cb, options) {
		  var vm = this
		  var wrappedCb = function (val, oldVal) {
		    cb.call(vm, val, oldVal)
		  }
		  var watcher = new Watcher(vm, exp, wrappedCb, {
		    deep: options && options.deep,
		    user: !options || options.user !== false
		  })
		  if (options && options.immediate) {
		    wrappedCb(watcher.value)
		  }
		  return function unwatchFn () {
		    watcher.teardown()
		  }
		}

		/**
		 * Evaluate a text directive, including filters.
		 *
		 * @param {String} text
		 * @return {String}
		 */

		exports.$eval = function (text) {
		  // check for filters.
		  if (filterRE.test(text)) {
		    var dir = dirParser.parse(text)[0]
		    // the filter regex check might give false positive
		    // for pipes inside strings, so it's possible that
		    // we don't get any filters here
		    var val = this.$get(dir.expression)
		    return dir.filters
		      ? this._applyFilters(val, null, dir.filters)
		      : val
		  } else {
		    // no filter
		    return this.$get(text)
		  }
		}

		/**
		 * Interpolate a piece of template text.
		 *
		 * @param {String} text
		 * @return {String}
		 */

		exports.$interpolate = function (text) {
		  var tokens = textParser.parse(text)
		  var vm = this
		  if (tokens) {
		    return tokens.length === 1
		      ? vm.$eval(tokens[0].value)
		      : tokens.map(function (token) {
		          return token.tag
		            ? vm.$eval(token.value)
		            : token.value
		        }).join('')
		  } else {
		    return text
		  }
		}

		/**
		 * Log instance data as a plain JS object
		 * so that it is easier to inspect in console.
		 * This method assumes console is available.
		 *
		 * @param {String} [path]
		 */

		exports.$log = function (path) {
		  var data = path
		    ? Path.get(this._data, path)
		    : this._data
		  if (data) {
		    data = JSON.parse(JSON.stringify(data))
		  }
		  console.log(data)
		}


	/***/ },
	/* 62 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var transition = __webpack_require__(30)

		/**
		 * Convenience on-instance nextTick. The callback is
		 * auto-bound to the instance, and this avoids component
		 * modules having to rely on the global Vue.
		 *
		 * @param {Function} fn
		 */

		exports.$nextTick = function (fn) {
		  _.nextTick(fn, this)
		}

		/**
		 * Append instance to target
		 *
		 * @param {Node} target
		 * @param {Function} [cb]
		 * @param {Boolean} [withTransition] - defaults to true
		 */

		exports.$appendTo = function (target, cb, withTransition) {
		  return insert(
		    this, target, cb, withTransition,
		    append, transition.append
		  )
		}

		/**
		 * Prepend instance to target
		 *
		 * @param {Node} target
		 * @param {Function} [cb]
		 * @param {Boolean} [withTransition] - defaults to true
		 */

		exports.$prependTo = function (target, cb, withTransition) {
		  target = query(target)
		  if (target.hasChildNodes()) {
		    this.$before(target.firstChild, cb, withTransition)
		  } else {
		    this.$appendTo(target, cb, withTransition)
		  }
		  return this
		}

		/**
		 * Insert instance before target
		 *
		 * @param {Node} target
		 * @param {Function} [cb]
		 * @param {Boolean} [withTransition] - defaults to true
		 */

		exports.$before = function (target, cb, withTransition) {
		  return insert(
		    this, target, cb, withTransition,
		    before, transition.before
		  )
		}

		/**
		 * Insert instance after target
		 *
		 * @param {Node} target
		 * @param {Function} [cb]
		 * @param {Boolean} [withTransition] - defaults to true
		 */

		exports.$after = function (target, cb, withTransition) {
		  target = query(target)
		  if (target.nextSibling) {
		    this.$before(target.nextSibling, cb, withTransition)
		  } else {
		    this.$appendTo(target.parentNode, cb, withTransition)
		  }
		  return this
		}

		/**
		 * Remove instance from DOM
		 *
		 * @param {Function} [cb]
		 * @param {Boolean} [withTransition] - defaults to true
		 */

		exports.$remove = function (cb, withTransition) {
		  if (!this.$el.parentNode) {
		    return cb && cb()
		  }
		  var inDoc = this._isAttached && _.inDoc(this.$el)
		  // if we are not in document, no need to check
		  // for transitions
		  if (!inDoc) withTransition = false
		  var op
		  var self = this
		  var realCb = function () {
		    if (inDoc) self._callHook('detached')
		    if (cb) cb()
		  }
		  if (
		    this._isFragment &&
		    !this._blockFragment.hasChildNodes()
		  ) {
		    op = withTransition === false
		      ? append
		      : transition.removeThenAppend
		    blockOp(this, this._blockFragment, op, realCb)
		  } else {
		    op = withTransition === false
		      ? remove
		      : transition.remove
		    op(this.$el, this, realCb)
		  }
		  return this
		}

		/**
		 * Shared DOM insertion function.
		 *
		 * @param {Vue} vm
		 * @param {Element} target
		 * @param {Function} [cb]
		 * @param {Boolean} [withTransition]
		 * @param {Function} op1 - op for non-transition insert
		 * @param {Function} op2 - op for transition insert
		 * @return vm
		 */

		function insert (vm, target, cb, withTransition, op1, op2) {
		  target = query(target)
		  var targetIsDetached = !_.inDoc(target)
		  var op = withTransition === false || targetIsDetached
		    ? op1
		    : op2
		  var shouldCallHook =
		    !targetIsDetached &&
		    !vm._isAttached &&
		    !_.inDoc(vm.$el)
		  if (vm._isFragment) {
		    blockOp(vm, target, op, cb)
		  } else {
		    op(vm.$el, target, vm, cb)
		  }
		  if (shouldCallHook) {
		    vm._callHook('attached')
		  }
		  return vm
		}

		/**
		 * Execute a transition operation on a fragment instance,
		 * iterating through all its block nodes.
		 *
		 * @param {Vue} vm
		 * @param {Node} target
		 * @param {Function} op
		 * @param {Function} cb
		 */

		function blockOp (vm, target, op, cb) {
		  var current = vm._fragmentStart
		  var end = vm._fragmentEnd
		  var next
		  while (next !== end) {
		    next = current.nextSibling
		    op(current, target, vm)
		    current = next
		  }
		  op(end, target, vm, cb)
		}

		/**
		 * Check for selectors
		 *
		 * @param {String|Element} el
		 */

		function query (el) {
		  return typeof el === 'string'
		    ? document.querySelector(el)
		    : el
		}

		/**
		 * Append operation that takes a callback.
		 *
		 * @param {Node} el
		 * @param {Node} target
		 * @param {Vue} vm - unused
		 * @param {Function} [cb]
		 */

		function append (el, target, vm, cb) {
		  target.appendChild(el)
		  if (cb) cb()
		}

		/**
		 * InsertBefore operation that takes a callback.
		 *
		 * @param {Node} el
		 * @param {Node} target
		 * @param {Vue} vm - unused
		 * @param {Function} [cb]
		 */

		function before (el, target, vm, cb) {
		  _.before(el, target)
		  if (cb) cb()
		}

		/**
		 * Remove operation that takes a callback.
		 *
		 * @param {Node} el
		 * @param {Vue} vm - unused
		 * @param {Function} [cb]
		 */

		function remove (el, vm, cb) {
		  _.remove(el)
		  if (cb) cb()
		}


	/***/ },
	/* 63 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		/**
		 * Listen on the given `event` with `fn`.
		 *
		 * @param {String} event
		 * @param {Function} fn
		 */

		exports.$on = function (event, fn) {
		  (this._events[event] || (this._events[event] = []))
		    .push(fn)
		  modifyListenerCount(this, event, 1)
		  return this
		}

		/**
		 * Adds an `event` listener that will be invoked a single
		 * time then automatically removed.
		 *
		 * @param {String} event
		 * @param {Function} fn
		 */

		exports.$once = function (event, fn) {
		  var self = this
		  function on () {
		    self.$off(event, on)
		    fn.apply(this, arguments)
		  }
		  on.fn = fn
		  this.$on(event, on)
		  return this
		}

		/**
		 * Remove the given callback for `event` or all
		 * registered callbacks.
		 *
		 * @param {String} event
		 * @param {Function} fn
		 */

		exports.$off = function (event, fn) {
		  var cbs
		  // all
		  if (!arguments.length) {
		    if (this.$parent) {
		      for (event in this._events) {
		        cbs = this._events[event]
		        if (cbs) {
		          modifyListenerCount(this, event, -cbs.length)
		        }
		      }
		    }
		    this._events = {}
		    return this
		  }
		  // specific event
		  cbs = this._events[event]
		  if (!cbs) {
		    return this
		  }
		  if (arguments.length === 1) {
		    modifyListenerCount(this, event, -cbs.length)
		    this._events[event] = null
		    return this
		  }
		  // specific handler
		  var cb
		  var i = cbs.length
		  while (i--) {
		    cb = cbs[i]
		    if (cb === fn || cb.fn === fn) {
		      modifyListenerCount(this, event, -1)
		      cbs.splice(i, 1)
		      break
		    }
		  }
		  return this
		}

		/**
		 * Trigger an event on self.
		 *
		 * @param {String} event
		 */

		exports.$emit = function (event) {
		  this._eventCancelled = false
		  var cbs = this._events[event]
		  if (cbs) {
		    // avoid leaking arguments:
		    // http://jsperf.com/closure-with-arguments
		    var i = arguments.length - 1
		    var args = new Array(i)
		    while (i--) {
		      args[i] = arguments[i + 1]
		    }
		    i = 0
		    cbs = cbs.length > 1
		      ? _.toArray(cbs)
		      : cbs
		    for (var l = cbs.length; i < l; i++) {
		      if (cbs[i].apply(this, args) === false) {
		        this._eventCancelled = true
		      }
		    }
		  }
		  return this
		}

		/**
		 * Recursively broadcast an event to all children instances.
		 *
		 * @param {String} event
		 * @param {...*} additional arguments
		 */

		exports.$broadcast = function (event) {
		  // if no child has registered for this event,
		  // then there's no need to broadcast.
		  if (!this._eventsCount[event]) return
		  var children = this.$children
		  for (var i = 0, l = children.length; i < l; i++) {
		    var child = children[i]
		    child.$emit.apply(child, arguments)
		    if (!child._eventCancelled) {
		      child.$broadcast.apply(child, arguments)
		    }
		  }
		  return this
		}

		/**
		 * Recursively propagate an event up the parent chain.
		 *
		 * @param {String} event
		 * @param {...*} additional arguments
		 */

		exports.$dispatch = function () {
		  var parent = this.$parent
		  while (parent) {
		    parent.$emit.apply(parent, arguments)
		    parent = parent._eventCancelled
		      ? null
		      : parent.$parent
		  }
		  return this
		}

		/**
		 * Modify the listener counts on all parents.
		 * This bookkeeping allows $broadcast to return early when
		 * no child has listened to a certain event.
		 *
		 * @param {Vue} vm
		 * @param {String} event
		 * @param {Number} count
		 */

		var hookRE = /^hook:/
		function modifyListenerCount (vm, event, count) {
		  var parent = vm.$parent
		  // hooks do not get broadcasted so no need
		  // to do bookkeeping for them
		  if (!parent || !count || hookRE.test(event)) return
		  while (parent) {
		    parent._eventsCount[event] =
		      (parent._eventsCount[event] || 0) + count
		    parent = parent.$parent
		  }
		}


	/***/ },
	/* 64 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		/**
		 * Create a child instance that prototypally inherits
		 * data on parent. To achieve that we create an intermediate
		 * constructor with its prototype pointing to parent.
		 *
		 * @param {Object} opts
		 * @param {Function} [BaseCtor]
		 * @return {Vue}
		 * @public
		 */

		exports.$addChild = function (opts, BaseCtor) {
		  BaseCtor = BaseCtor || _.Vue
		  opts = opts || {}
		  var parent = this
		  var ChildVue
		  var inherit = opts.inherit !== undefined
		    ? opts.inherit
		    : BaseCtor.options.inherit
		  if (inherit) {
		    var ctors = parent._childCtors
		    ChildVue = ctors[BaseCtor.cid]
		    if (!ChildVue) {
		      var optionName = BaseCtor.options.name
		      var className = optionName
		        ? _.classify(optionName)
		        : 'VueComponent'
		      ChildVue = new Function(
		        'return function ' + className + ' (options) {' +
		        'this.constructor = ' + className + ';' +
		        'this._init(options) }'
		      )()
		      ChildVue.options = BaseCtor.options
		      ChildVue.linker = BaseCtor.linker
		      // important: transcluded inline repeaters should
		      // inherit from outer scope rather than host
		      ChildVue.prototype = opts._context || this
		      ctors[BaseCtor.cid] = ChildVue
		    }
		  } else {
		    ChildVue = BaseCtor
		  }
		  opts._parent = parent
		  opts._root = parent.$root
		  var child = new ChildVue(opts)
		  return child
		}


	/***/ },
	/* 65 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var compiler = __webpack_require__(10)

		/**
		 * Set instance target element and kick off the compilation
		 * process. The passed in `el` can be a selector string, an
		 * existing Element, or a DocumentFragment (for block
		 * instances).
		 *
		 * @param {Element|DocumentFragment|string} el
		 * @public
		 */

		exports.$mount = function (el) {
		  if (this._isCompiled) {
		    ("development") !== 'production' && _.warn(
		      '$mount() should be called only once.'
		    )
		    return
		  }
		  el = _.query(el)
		  if (!el) {
		    el = document.createElement('div')
		  }
		  this._compile(el)
		  this._isCompiled = true
		  this._callHook('compiled')
		  this._initDOMHooks()
		  if (_.inDoc(this.$el)) {
		    this._callHook('attached')
		    ready.call(this)
		  } else {
		    this.$once('hook:attached', ready)
		  }
		  return this
		}

		/**
		 * Mark an instance as ready.
		 */

		function ready () {
		  this._isAttached = true
		  this._isReady = true
		  this._callHook('ready')
		}

		/**
		 * Teardown the instance, simply delegate to the internal
		 * _destroy.
		 */

		exports.$destroy = function (remove, deferCleanup) {
		  this._destroy(remove, deferCleanup)
		}

		/**
		 * Partially compile a piece of DOM and return a
		 * decompile function.
		 *
		 * @param {Element|DocumentFragment} el
		 * @param {Vue} [host]
		 * @return {Function}
		 */

		exports.$compile = function (el, host) {
		  return compiler.compile(el, this.$options, true, host)(this, el)
		}


	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	

	//
	// Generated on Tue Dec 16 2014 12:13:47 GMT+0100 (CET) by Charlie Robbins, Paolo Fragomeni & the Contributors (Using Codesurgeon).
	// Version 1.2.6
	//
	(function(a){function k(a,b,c,d){var e=0,f=0,g=0,c=(c||"(").toString(),d=(d||")").toString(),h;for(h=0;h<a.length;h++){var i=a[h];if(i.indexOf(c,e)>i.indexOf(d,e)||~i.indexOf(c,e)&&!~i.indexOf(d,e)||!~i.indexOf(c,e)&&~i.indexOf(d,e)){f=i.indexOf(c,e),g=i.indexOf(d,e);if(~f&&!~g||!~f&&~g){var j=a.slice(0,(h||1)+1).join(b);a=[j].concat(a.slice((h||1)+1))}e=(g>f?g:f)+1,h=0}else e=0}return a}function j(a,b){var c,d=0,e="";while(c=a.substr(d).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/))d=c.index+c[0].length,c[0]=c[0].replace(/^\*/,"([_.()!\\ %@&a-zA-Z0-9-]+)"),e+=a.substr(0,c.index)+c[0];a=e+=a.substr(d);var f=a.match(/:([^\/]+)/ig),g,h;if(f){h=f.length;for(var j=0;j<h;j++)g=f[j],g.slice(0,2)==="::"?a=g.slice(1):a=a.replace(g,i(g,b))}return a}function i(a,b,c){c=a;for(var d in b)if(b.hasOwnProperty(d)){c=b[d](a);if(c!==a)break}return c===a?"([._a-zA-Z0-9-%()]+)":c}function h(a,b,c){if(!a.length)return c();var d=0;(function e(){b(a[d],function(b){b||b===!1?(c(b),c=function(){}):(d+=1,d===a.length?c():e())})})()}function g(a){var b=[];for(var c=0,d=a.length;c<d;c++)b=b.concat(a[c]);return b}function f(a,b){for(var c=0;c<a.length;c+=1)if(b(a[c],c,a)===!1)return}function c(){return b.hash===""||b.hash==="#"}var b=document.location,d={mode:"modern",hash:b.hash,history:!1,check:function(){var a=b.hash;a!=this.hash&&(this.hash=a,this.onHashChanged())},fire:function(){this.mode==="modern"?this.history===!0?window.onpopstate():window.onhashchange():this.onHashChanged()},init:function(a,b){function d(a){for(var b=0,c=e.listeners.length;b<c;b++)e.listeners[b](a)}var c=this;this.history=b,e.listeners||(e.listeners=[]);if("onhashchange"in window&&(document.documentMode===undefined||document.documentMode>7))this.history===!0?setTimeout(function(){window.onpopstate=d},500):window.onhashchange=d,this.mode="modern";else{var f=document.createElement("iframe");f.id="state-frame",f.style.display="none",document.body.appendChild(f),this.writeFrame(""),"onpropertychange"in document&&"attachEvent"in document&&document.attachEvent("onpropertychange",function(){event.propertyName==="location"&&c.check()}),window.setInterval(function(){c.check()},50),this.onHashChanged=d,this.mode="legacy"}e.listeners.push(a);return this.mode},destroy:function(a){if(!!e&&!!e.listeners){var b=e.listeners;for(var c=b.length-1;c>=0;c--)b[c]===a&&b.splice(c,1)}},setHash:function(a){this.mode==="legacy"&&this.writeFrame(a),this.history===!0?(window.history.pushState({},document.title,a),this.fire()):b.hash=a[0]==="/"?a:"/"+a;return this},writeFrame:function(a){var b=document.getElementById("state-frame"),c=b.contentDocument||b.contentWindow.document;c.open(),c.write("<script>_hash = '"+a+"'; onload = parent.listener.syncHash;<script>"),c.close()},syncHash:function(){var a=this._hash;a!=b.hash&&(b.hash=a);return this},onHashChanged:function(){}},e=a.Router=function(a){if(this instanceof e)this.params={},this.routes={},this.methods=["on","once","after","before"],this.scope=[],this._methods={},this._insert=this.insert,this.insert=this.insertEx,this.historySupport=(window.history!=null?window.history.pushState:null)!=null,this.configure(),this.mount(a||{});else return new e(a)};e.prototype.init=function(a){var e=this,f;this.handler=function(a){var b=a&&a.newURL||window.location.hash,c=e.history===!0?e.getPath():b.replace(/.*#/,"");e.dispatch("on",c.charAt(0)==="/"?c:"/"+c)},d.init(this.handler,this.history),this.history===!1?c()&&a?b.hash=a:c()||e.dispatch("on","/"+b.hash.replace(/^(#\/|#|\/)/,"")):(this.convert_hash_in_init?(f=c()&&a?a:c()?null:b.hash.replace(/^#/,""),f&&window.history.replaceState({},document.title,f)):f=this.getPath(),(f||this.run_in_init===!0)&&this.handler());return this},e.prototype.explode=function(){var a=this.history===!0?this.getPath():b.hash;a.charAt(1)==="/"&&(a=a.slice(1));return a.slice(1,a.length).split("/")},e.prototype.setRoute=function(a,b,c){var e=this.explode();typeof a=="number"&&typeof b=="string"?e[a]=b:typeof c=="string"?e.splice(a,b,s):e=[a],d.setHash(e.join("/"));return e},e.prototype.insertEx=function(a,b,c,d){a==="once"&&(a="on",c=function(a){var b=!1;return function(){if(!b){b=!0;return a.apply(this,arguments)}}}(c));return this._insert(a,b,c,d)},e.prototype.getRoute=function(a){var b=a;if(typeof a=="number")b=this.explode()[a];else if(typeof a=="string"){var c=this.explode();b=c.indexOf(a)}else b=this.explode();return b},e.prototype.destroy=function(){d.destroy(this.handler);return this},e.prototype.getPath=function(){var a=window.location.pathname;a.substr(0,1)!=="/"&&(a="/"+a);return a};var l=/\?.*/;e.prototype.configure=function(a){a=a||{};for(var b=0;b<this.methods.length;b++)this._methods[this.methods[b]]=!0;this.recurse=a.recurse||this.recurse||!1,this.async=a.async||!1,this.delimiter=a.delimiter||"/",this.strict=typeof a.strict=="undefined"?!0:a.strict,this.notfound=a.notfound,this.resource=a.resource,this.history=a.html5history&&this.historySupport||!1,this.run_in_init=this.history===!0&&a.run_handler_in_init!==!1,this.convert_hash_in_init=this.history===!0&&a.convert_hash_in_init!==!1,this.every={after:a.after||null,before:a.before||null,on:a.on||null};return this},e.prototype.param=function(a,b){a[0]!==":"&&(a=":"+a);var c=new RegExp(a,"g");this.params[a]=function(a){return a.replace(c,b.source||b)};return this},e.prototype.on=e.prototype.route=function(a,b,c){var d=this;!c&&typeof b=="function"&&(c=b,b=a,a="on");if(Array.isArray(b))return b.forEach(function(b){d.on(a,b,c)});b.source&&(b=b.source.replace(/\\\//ig,"/"));if(Array.isArray(a))return a.forEach(function(a){d.on(a.toLowerCase(),b,c)});b=b.split(new RegExp(this.delimiter)),b=k(b,this.delimiter),this.insert(a,this.scope.concat(b),c)},e.prototype.path=function(a,b){var c=this,d=this.scope.length;a.source&&(a=a.source.replace(/\\\//ig,"/")),a=a.split(new RegExp(this.delimiter)),a=k(a,this.delimiter),this.scope=this.scope.concat(a),b.call(this,this),this.scope.splice(d,a.length)},e.prototype.dispatch=function(a,b,c){function h(){d.last=e.after,d.invoke(d.runlist(e),d,c)}var d=this,e=this.traverse(a,b.replace(l,""),this.routes,""),f=this._invoked,g;this._invoked=!0;if(!e||e.length===0){this.last=[],typeof this.notfound=="function"&&this.invoke([this.notfound],{method:a,path:b},c);return!1}this.recurse==="forward"&&(e=e.reverse()),g=this.every&&this.every.after?[this.every.after].concat(this.last):[this.last];if(g&&g.length>0&&f){this.async?this.invoke(g,this,h):(this.invoke(g,this),h());return!0}h();return!0},e.prototype.invoke=function(a,b,c){var d=this,e;this.async?(e=function(c,d){if(Array.isArray(c))return h(c,e,d);typeof c=="function"&&c.apply(b,(a.captures||[]).concat(d))},h(a,e,function(){c&&c.apply(b,arguments)})):(e=function(c){if(Array.isArray(c))return f(c,e);if(typeof c=="function")return c.apply(b,a.captures||[]);typeof c=="string"&&d.resource&&d.resource[c].apply(b,a.captures||[])},f(a,e))},e.prototype.traverse=function(a,b,c,d,e){function l(a){function c(a){for(var b=a.length-1;b>=0;b--)Array.isArray(a[b])?(c(a[b]),a[b].length===0&&a.splice(b,1)):e(a[b])||a.splice(b,1)}function b(a){var c=[];for(var d=0;d<a.length;d++)c[d]=Array.isArray(a[d])?b(a[d]):a[d];return c}if(!e)return a;var d=b(a);d.matched=a.matched,d.captures=a.captures,d.after=a.after.filter(e),c(d);return d}var f=[],g,h,i,j,k;if(b===this.delimiter&&c[a]){j=[[c.before,c[a]].filter(Boolean)],j.after=[c.after].filter(Boolean),j.matched=!0,j.captures=[];return l(j)}for(var m in c)if(c.hasOwnProperty(m)&&(!this._methods[m]||this._methods[m]&&typeof c[m]=="object"&&!Array.isArray(c[m]))){g=h=d+this.delimiter+m,this.strict||(h+="["+this.delimiter+"]?"),i=b.match(new RegExp("^"+h));if(!i)continue;if(i[0]&&i[0]==b&&c[m][a]){j=[[c[m].before,c[m][a]].filter(Boolean)],j.after=[c[m].after].filter(Boolean),j.matched=!0,j.captures=i.slice(1),this.recurse&&c===this.routes&&(j.push([c.before,c.on].filter(Boolean)),j.after=j.after.concat([c.after].filter(Boolean)));return l(j)}j=this.traverse(a,b,c[m],g);if(j.matched){j.length>0&&(f=f.concat(j)),this.recurse&&(f.push([c[m].before,c[m].on].filter(Boolean)),j.after=j.after.concat([c[m].after].filter(Boolean)),c===this.routes&&(f.push([c.before,c.on].filter(Boolean)),j.after=j.after.concat([c.after].filter(Boolean)))),f.matched=!0,f.captures=j.captures,f.after=j.after;return l(f)}}return!1},e.prototype.insert=function(a,b,c,d){var e,f,g,h,i;b=b.filter(function(a){return a&&a.length>0}),d=d||this.routes,i=b.shift(),/\:|\*/.test(i)&&!/\\d|\\w/.test(i)&&(i=j(i,this.params));if(b.length>0){d[i]=d[i]||{};return this.insert(a,b,c,d[i])}{if(!!i||!!b.length||d!==this.routes){f=typeof d[i],g=Array.isArray(d[i]);if(d[i]&&!g&&f=="object"){e=typeof d[i][a];switch(e){case"function":d[i][a]=[d[i][a],c];return;case"object":d[i][a].push(c);return;case"undefined":d[i][a]=c;return}}else if(f=="undefined"){h={},h[a]=c,d[i]=h;return}throw new Error("Invalid route context: "+f)}e=typeof d[a];switch(e){case"function":d[a]=[d[a],c];return;case"object":d[a].push(c);return;case"undefined":d[a]=c;return}}},e.prototype.extend=function(a){function e(a){b._methods[a]=!0,b[a]=function(){var c=arguments.length===1?[a,""]:[a];b.on.apply(b,c.concat(Array.prototype.slice.call(arguments)))}}var b=this,c=a.length,d;for(d=0;d<c;d++)e(a[d])},e.prototype.runlist=function(a){var b=this.every&&this.every.before?[this.every.before].concat(g(a)):g(a);this.every&&this.every.on&&b.push(this.every.on),b.captures=a.captures,b.source=a.source;return b},e.prototype.mount=function(a,b){function d(b,d){var e=b,f=b.split(c.delimiter),g=typeof a[b],h=f[0]===""||!c._methods[f[0]],i=h?"on":e;h&&(e=e.slice((e.match(new RegExp("^"+c.delimiter))||[""])[0].length),f.shift());h&&g==="object"&&!Array.isArray(a[b])?(d=d.concat(f),c.mount(a[b],d)):(h&&(d=d.concat(e.split(c.delimiter)),d=k(d,c.delimiter)),c.insert(i,d,a[b]))}if(!!a&&typeof a=="object"&&!Array.isArray(a)){var c=this;b=b||[],Array.isArray(b)||(b=b.split(c.delimiter));for(var e in a)a.hasOwnProperty(e)&&d(e,b.slice(0))}}})( true?exports:window)

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7)
	module.exports.template = __webpack_require__(35)


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(8);
	  __webpack_require__(12);
	  __webpack_require__(14);
	  __webpack_require__(16);

	  module.exports = {
	    el: '#app',
	    data: {
	      view: '',
	      shows: {},
	      signed: localStorage.getItem('token') && localStorage.getItem('token') !== '',
	      params: {},
	      user: {
	        userId: '',
	        username: ''
	      }
	    },
	    compiled: function(){
	      if(this.signed){
	        this.user.userId = JSON.parse(localStorage.getItem('user')).id;
	        this.user.username = JSON.parse(localStorage.getItem('user')).username;
	      }
	    },
	    filters: {
	      gameName: __webpack_require__(19).gameName,
	      gameSubName: __webpack_require__(19).gameSubName
	    },
	    components: {
	      'home-view': __webpack_require__(21),
	      'signin-view': __webpack_require__(32),
	      'user-view': __webpack_require__(37)
	    }
	  }

/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 13 */,
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 15 */,
/* 16 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 17 */,
/* 18 */,
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var gameNameUtils = __webpack_require__(20);

	exports.gameName = function(gameId){
	  if(gameId) return gameNameUtils[gameId].name;
	}

	exports.gameSubName = function(gameId){
	  if (gameId) {
	    return gameNameUtils[gameId].subName;
	  }
	}


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = {
	  lol: {
	    name: '英雄联盟',
	    subName: 'League of Legends'
	  },
	  hearthStone: {
	    name: '炉石传说',
	    subName: 'Hearth Stone'
	  },
	  dota: {
	    name: 'DotA',
	    subName: 'Defense of the Ancients'
	  },
	  unset: {
	    name: '其它',
	    subName: 'Others'
	  }
	}


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(22)
	module.exports.template = __webpack_require__(31)


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var Show = __webpack_require__(23).Show;
	  module.exports = {
	    data: function(){
	      return {
	        title: 'TGC vs ECG',
	        subTitle: '正在直播：第二届华软杯 - 英雄联盟四强',
	        shows: {}
	      }
	    },

	    compiled: function(){
	      var that = this;
	      Show.getShows(function(err,shows){
	        if (err) {
	          console.log('err')
	        } else {
	          that.shows = shows;
	        }
	      });
	    }
	  }
	  // var home = function(){
	  //   return {
	  //     data: {
	  //       shows: {}
	  //     }
	  //   }
	  // }
	  //
	  // module.exports = home;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  Event: __webpack_require__(24),
	  Show: __webpack_require__(25),
	  User: __webpack_require__(30)
	}


/***/ },
/* 24 */
/***/ function(module, exports) {

	var methods = {
	  getEvent: function(callback){
	    var event = {
	      title: 'ECG vs TCG',
	      subTitle: '华软杯英雄联盟四强'
	    }
	    callback(null,event);
	  }
	}

	module.exports = methods;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var config = __webpack_require__(26)
	  , request = __webpack_require__(27)
	  , END_POINT = config.api.END_POINT

	module.exports = {
	  getShows: function(callback){
	    request
	      .get(END_POINT + '/show')
	      .end(function(err, response){
	        if (err) {
	          callback(err);
	        } else {
	          callback(err, response.body)
	        }
	      })
	  }
	}


/***/ },
/* 26 */
/***/ function(module, exports) {

	var config = {
	  api: {
	    END_POINT: 'http://localhost:3000/api'
	  }
	}

	module.exports = config;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var Emitter = __webpack_require__(28);
	var reduce = __webpack_require__(29);

	/**
	 * Root reference for iframes.
	 */

	var root = 'undefined' == typeof window
	  ? (this || self)
	  : window;

	/**
	 * Noop.
	 */

	function noop(){};

	/**
	 * Check if `obj` is a host object,
	 * we don't want to serialize these :)
	 *
	 * TODO: future proof, move to compoent land
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isHost(obj) {
	  var str = {}.toString.call(obj);

	  switch (str) {
	    case '[object File]':
	    case '[object Blob]':
	    case '[object FormData]':
	      return true;
	    default:
	      return false;
	  }
	}

	/**
	 * Determine XHR.
	 */

	request.getXHR = function () {
	  if (root.XMLHttpRequest
	      && (!root.location || 'file:' != root.location.protocol
	          || !root.ActiveXObject)) {
	    return new XMLHttpRequest;
	  } else {
	    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
	  }
	  return false;
	};

	/**
	 * Removes leading and trailing whitespace, added to support IE.
	 *
	 * @param {String} s
	 * @return {String}
	 * @api private
	 */

	var trim = ''.trim
	  ? function(s) { return s.trim(); }
	  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

	/**
	 * Check if `obj` is an object.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isObject(obj) {
	  return obj === Object(obj);
	}

	/**
	 * Serialize the given `obj`.
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api private
	 */

	function serialize(obj) {
	  if (!isObject(obj)) return obj;
	  var pairs = [];
	  for (var key in obj) {
	    if (null != obj[key]) {
	      pairs.push(encodeURIComponent(key)
	        + '=' + encodeURIComponent(obj[key]));
	    }
	  }
	  return pairs.join('&');
	}

	/**
	 * Expose serialization method.
	 */

	 request.serializeObject = serialize;

	 /**
	  * Parse the given x-www-form-urlencoded `str`.
	  *
	  * @param {String} str
	  * @return {Object}
	  * @api private
	  */

	function parseString(str) {
	  var obj = {};
	  var pairs = str.split('&');
	  var parts;
	  var pair;

	  for (var i = 0, len = pairs.length; i < len; ++i) {
	    pair = pairs[i];
	    parts = pair.split('=');
	    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
	  }

	  return obj;
	}

	/**
	 * Expose parser.
	 */

	request.parseString = parseString;

	/**
	 * Default MIME type map.
	 *
	 *     superagent.types.xml = 'application/xml';
	 *
	 */

	request.types = {
	  html: 'text/html',
	  json: 'application/json',
	  xml: 'application/xml',
	  urlencoded: 'application/x-www-form-urlencoded',
	  'form': 'application/x-www-form-urlencoded',
	  'form-data': 'application/x-www-form-urlencoded'
	};

	/**
	 * Default serialization map.
	 *
	 *     superagent.serialize['application/xml'] = function(obj){
	 *       return 'generated xml here';
	 *     };
	 *
	 */

	 request.serialize = {
	   'application/x-www-form-urlencoded': serialize,
	   'application/json': JSON.stringify
	 };

	 /**
	  * Default parsers.
	  *
	  *     superagent.parse['application/xml'] = function(str){
	  *       return { object parsed from str };
	  *     };
	  *
	  */

	request.parse = {
	  'application/x-www-form-urlencoded': parseString,
	  'application/json': JSON.parse
	};

	/**
	 * Parse the given header `str` into
	 * an object containing the mapped fields.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function parseHeader(str) {
	  var lines = str.split(/\r?\n/);
	  var fields = {};
	  var index;
	  var line;
	  var field;
	  var val;

	  lines.pop(); // trailing CRLF

	  for (var i = 0, len = lines.length; i < len; ++i) {
	    line = lines[i];
	    index = line.indexOf(':');
	    field = line.slice(0, index).toLowerCase();
	    val = trim(line.slice(index + 1));
	    fields[field] = val;
	  }

	  return fields;
	}

	/**
	 * Return the mime type for the given `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */

	function type(str){
	  return str.split(/ *; */).shift();
	};

	/**
	 * Return header field parameters.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function params(str){
	  return reduce(str.split(/ *; */), function(obj, str){
	    var parts = str.split(/ *= */)
	      , key = parts.shift()
	      , val = parts.shift();

	    if (key && val) obj[key] = val;
	    return obj;
	  }, {});
	};

	/**
	 * Initialize a new `Response` with the given `xhr`.
	 *
	 *  - set flags (.ok, .error, etc)
	 *  - parse header
	 *
	 * Examples:
	 *
	 *  Aliasing `superagent` as `request` is nice:
	 *
	 *      request = superagent;
	 *
	 *  We can use the promise-like API, or pass callbacks:
	 *
	 *      request.get('/').end(function(res){});
	 *      request.get('/', function(res){});
	 *
	 *  Sending data can be chained:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' })
	 *        .end(function(res){});
	 *
	 *  Or passed to `.send()`:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' }, function(res){});
	 *
	 *  Or passed to `.post()`:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' })
	 *        .end(function(res){});
	 *
	 * Or further reduced to a single call for simple cases:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' }, function(res){});
	 *
	 * @param {XMLHTTPRequest} xhr
	 * @param {Object} options
	 * @api private
	 */

	function Response(req, options) {
	  options = options || {};
	  this.req = req;
	  this.xhr = this.req.xhr;
	  // responseText is accessible only if responseType is '' or 'text' and on older browsers
	  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
	     ? this.xhr.responseText
	     : null;
	  this.statusText = this.req.xhr.statusText;
	  this.setStatusProperties(this.xhr.status);
	  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
	  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
	  // getResponseHeader still works. so we get content-type even if getting
	  // other headers fails.
	  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
	  this.setHeaderProperties(this.header);
	  this.body = this.req.method != 'HEAD'
	    ? this.parseBody(this.text ? this.text : this.xhr.response)
	    : null;
	}

	/**
	 * Get case-insensitive `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */

	Response.prototype.get = function(field){
	  return this.header[field.toLowerCase()];
	};

	/**
	 * Set header related properties:
	 *
	 *   - `.type` the content type without params
	 *
	 * A response of "Content-Type: text/plain; charset=utf-8"
	 * will provide you with a `.type` of "text/plain".
	 *
	 * @param {Object} header
	 * @api private
	 */

	Response.prototype.setHeaderProperties = function(header){
	  // content-type
	  var ct = this.header['content-type'] || '';
	  this.type = type(ct);

	  // params
	  var obj = params(ct);
	  for (var key in obj) this[key] = obj[key];
	};

	/**
	 * Parse the given body `str`.
	 *
	 * Used for auto-parsing of bodies. Parsers
	 * are defined on the `superagent.parse` object.
	 *
	 * @param {String} str
	 * @return {Mixed}
	 * @api private
	 */

	Response.prototype.parseBody = function(str){
	  var parse = request.parse[this.type];
	  return parse && str && (str.length || str instanceof Object)
	    ? parse(str)
	    : null;
	};

	/**
	 * Set flags such as `.ok` based on `status`.
	 *
	 * For example a 2xx response will give you a `.ok` of __true__
	 * whereas 5xx will be __false__ and `.error` will be __true__. The
	 * `.clientError` and `.serverError` are also available to be more
	 * specific, and `.statusType` is the class of error ranging from 1..5
	 * sometimes useful for mapping respond colors etc.
	 *
	 * "sugar" properties are also defined for common cases. Currently providing:
	 *
	 *   - .noContent
	 *   - .badRequest
	 *   - .unauthorized
	 *   - .notAcceptable
	 *   - .notFound
	 *
	 * @param {Number} status
	 * @api private
	 */

	Response.prototype.setStatusProperties = function(status){
	  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
	  if (status === 1223) {
	    status = 204;
	  }

	  var type = status / 100 | 0;

	  // status / class
	  this.status = status;
	  this.statusType = type;

	  // basics
	  this.info = 1 == type;
	  this.ok = 2 == type;
	  this.clientError = 4 == type;
	  this.serverError = 5 == type;
	  this.error = (4 == type || 5 == type)
	    ? this.toError()
	    : false;

	  // sugar
	  this.accepted = 202 == status;
	  this.noContent = 204 == status;
	  this.badRequest = 400 == status;
	  this.unauthorized = 401 == status;
	  this.notAcceptable = 406 == status;
	  this.notFound = 404 == status;
	  this.forbidden = 403 == status;
	};

	/**
	 * Return an `Error` representative of this response.
	 *
	 * @return {Error}
	 * @api public
	 */

	Response.prototype.toError = function(){
	  var req = this.req;
	  var method = req.method;
	  var url = req.url;

	  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
	  var err = new Error(msg);
	  err.status = this.status;
	  err.method = method;
	  err.url = url;

	  return err;
	};

	/**
	 * Expose `Response`.
	 */

	request.Response = Response;

	/**
	 * Initialize a new `Request` with the given `method` and `url`.
	 *
	 * @param {String} method
	 * @param {String} url
	 * @api public
	 */

	function Request(method, url) {
	  var self = this;
	  Emitter.call(this);
	  this._query = this._query || [];
	  this.method = method;
	  this.url = url;
	  this.header = {};
	  this._header = {};
	  this.on('end', function(){
	    var err = null;
	    var res = null;

	    try {
	      res = new Response(self);
	    } catch(e) {
	      err = new Error('Parser is unable to parse the response');
	      err.parse = true;
	      err.original = e;
	      return self.callback(err);
	    }

	    self.emit('response', res);

	    if (err) {
	      return self.callback(err, res);
	    }

	    if (res.status >= 200 && res.status < 300) {
	      return self.callback(err, res);
	    }

	    var new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
	    new_err.original = err;
	    new_err.response = res;
	    new_err.status = res.status;

	    self.callback(new_err, res);
	  });
	}

	/**
	 * Mixin `Emitter`.
	 */

	Emitter(Request.prototype);

	/**
	 * Allow for extension
	 */

	Request.prototype.use = function(fn) {
	  fn(this);
	  return this;
	}

	/**
	 * Set timeout to `ms`.
	 *
	 * @param {Number} ms
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.timeout = function(ms){
	  this._timeout = ms;
	  return this;
	};

	/**
	 * Clear previous timeout.
	 *
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.clearTimeout = function(){
	  this._timeout = 0;
	  clearTimeout(this._timer);
	  return this;
	};

	/**
	 * Abort the request, and clear potential timeout.
	 *
	 * @return {Request}
	 * @api public
	 */

	Request.prototype.abort = function(){
	  if (this.aborted) return;
	  this.aborted = true;
	  this.xhr.abort();
	  this.clearTimeout();
	  this.emit('abort');
	  return this;
	};

	/**
	 * Set header `field` to `val`, or multiple fields with one object.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .set('Accept', 'application/json')
	 *        .set('X-API-Key', 'foobar')
	 *        .end(callback);
	 *
	 *      req.get('/')
	 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
	 *        .end(callback);
	 *
	 * @param {String|Object} field
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.set = function(field, val){
	  if (isObject(field)) {
	    for (var key in field) {
	      this.set(key, field[key]);
	    }
	    return this;
	  }
	  this._header[field.toLowerCase()] = val;
	  this.header[field] = val;
	  return this;
	};

	/**
	 * Remove header `field`.
	 *
	 * Example:
	 *
	 *      req.get('/')
	 *        .unset('User-Agent')
	 *        .end(callback);
	 *
	 * @param {String} field
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.unset = function(field){
	  delete this._header[field.toLowerCase()];
	  delete this.header[field];
	  return this;
	};

	/**
	 * Get case-insensitive header `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api private
	 */

	Request.prototype.getHeader = function(field){
	  return this._header[field.toLowerCase()];
	};

	/**
	 * Set Content-Type to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.xml = 'application/xml';
	 *
	 *      request.post('/')
	 *        .type('xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 *      request.post('/')
	 *        .type('application/xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 * @param {String} type
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.type = function(type){
	  this.set('Content-Type', request.types[type] || type);
	  return this;
	};

	/**
	 * Set Accept to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.json = 'application/json';
	 *
	 *      request.get('/agent')
	 *        .accept('json')
	 *        .end(callback);
	 *
	 *      request.get('/agent')
	 *        .accept('application/json')
	 *        .end(callback);
	 *
	 * @param {String} accept
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.accept = function(type){
	  this.set('Accept', request.types[type] || type);
	  return this;
	};

	/**
	 * Set Authorization field value with `user` and `pass`.
	 *
	 * @param {String} user
	 * @param {String} pass
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.auth = function(user, pass){
	  var str = btoa(user + ':' + pass);
	  this.set('Authorization', 'Basic ' + str);
	  return this;
	};

	/**
	* Add query-string `val`.
	*
	* Examples:
	*
	*   request.get('/shoes')
	*     .query('size=10')
	*     .query({ color: 'blue' })
	*
	* @param {Object|String} val
	* @return {Request} for chaining
	* @api public
	*/

	Request.prototype.query = function(val){
	  if ('string' != typeof val) val = serialize(val);
	  if (val) this._query.push(val);
	  return this;
	};

	/**
	 * Write the field `name` and `val` for "multipart/form-data"
	 * request bodies.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .field('foo', 'bar')
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} name
	 * @param {String|Blob|File} val
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.field = function(name, val){
	  if (!this._formData) this._formData = new root.FormData();
	  this._formData.append(name, val);
	  return this;
	};

	/**
	 * Queue the given `file` as an attachment to the specified `field`,
	 * with optional `filename`.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} field
	 * @param {Blob|File} file
	 * @param {String} filename
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.attach = function(field, file, filename){
	  if (!this._formData) this._formData = new root.FormData();
	  this._formData.append(field, file, filename);
	  return this;
	};

	/**
	 * Send `data`, defaulting the `.type()` to "json" when
	 * an object is given.
	 *
	 * Examples:
	 *
	 *       // querystring
	 *       request.get('/search')
	 *         .end(callback)
	 *
	 *       // multiple data "writes"
	 *       request.get('/search')
	 *         .send({ search: 'query' })
	 *         .send({ range: '1..5' })
	 *         .send({ order: 'desc' })
	 *         .end(callback)
	 *
	 *       // manual json
	 *       request.post('/user')
	 *         .type('json')
	 *         .send('{"name":"tj"})
	 *         .end(callback)
	 *
	 *       // auto json
	 *       request.post('/user')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // manual x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send('name=tj')
	 *         .end(callback)
	 *
	 *       // auto x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // defaults to x-www-form-urlencoded
	  *      request.post('/user')
	  *        .send('name=tobi')
	  *        .send('species=ferret')
	  *        .end(callback)
	 *
	 * @param {String|Object} data
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.send = function(data){
	  var obj = isObject(data);
	  var type = this.getHeader('Content-Type');

	  // merge
	  if (obj && isObject(this._data)) {
	    for (var key in data) {
	      this._data[key] = data[key];
	    }
	  } else if ('string' == typeof data) {
	    if (!type) this.type('form');
	    type = this.getHeader('Content-Type');
	    if ('application/x-www-form-urlencoded' == type) {
	      this._data = this._data
	        ? this._data + '&' + data
	        : data;
	    } else {
	      this._data = (this._data || '') + data;
	    }
	  } else {
	    this._data = data;
	  }

	  if (!obj || isHost(data)) return this;
	  if (!type) this.type('json');
	  return this;
	};

	/**
	 * Invoke the callback with `err` and `res`
	 * and handle arity check.
	 *
	 * @param {Error} err
	 * @param {Response} res
	 * @api private
	 */

	Request.prototype.callback = function(err, res){
	  var fn = this._callback;
	  this.clearTimeout();
	  fn(err, res);
	};

	/**
	 * Invoke callback with x-domain error.
	 *
	 * @api private
	 */

	Request.prototype.crossDomainError = function(){
	  var err = new Error('Origin is not allowed by Access-Control-Allow-Origin');
	  err.crossDomain = true;
	  this.callback(err);
	};

	/**
	 * Invoke callback with timeout error.
	 *
	 * @api private
	 */

	Request.prototype.timeoutError = function(){
	  var timeout = this._timeout;
	  var err = new Error('timeout of ' + timeout + 'ms exceeded');
	  err.timeout = timeout;
	  this.callback(err);
	};

	/**
	 * Enable transmission of cookies with x-domain requests.
	 *
	 * Note that for this to work the origin must not be
	 * using "Access-Control-Allow-Origin" with a wildcard,
	 * and also must set "Access-Control-Allow-Credentials"
	 * to "true".
	 *
	 * @api public
	 */

	Request.prototype.withCredentials = function(){
	  this._withCredentials = true;
	  return this;
	};

	/**
	 * Initiate request, invoking callback `fn(res)`
	 * with an instanceof `Response`.
	 *
	 * @param {Function} fn
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.end = function(fn){
	  var self = this;
	  var xhr = this.xhr = request.getXHR();
	  var query = this._query.join('&');
	  var timeout = this._timeout;
	  var data = this._formData || this._data;

	  // store callback
	  this._callback = fn || noop;

	  // state change
	  xhr.onreadystatechange = function(){
	    if (4 != xhr.readyState) return;

	    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
	    // result in the error "Could not complete the operation due to error c00c023f"
	    var status;
	    try { status = xhr.status } catch(e) { status = 0; }

	    if (0 == status) {
	      if (self.timedout) return self.timeoutError();
	      if (self.aborted) return;
	      return self.crossDomainError();
	    }
	    self.emit('end');
	  };

	  // progress
	  var handleProgress = function(e){
	    if (e.total > 0) {
	      e.percent = e.loaded / e.total * 100;
	    }
	    self.emit('progress', e);
	  };
	  if (this.hasListeners('progress')) {
	    xhr.onprogress = handleProgress;
	  }
	  try {
	    if (xhr.upload && this.hasListeners('progress')) {
	      xhr.upload.onprogress = handleProgress;
	    }
	  } catch(e) {
	    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
	    // Reported here:
	    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
	  }

	  // timeout
	  if (timeout && !this._timer) {
	    this._timer = setTimeout(function(){
	      self.timedout = true;
	      self.abort();
	    }, timeout);
	  }

	  // querystring
	  if (query) {
	    query = request.serializeObject(query);
	    this.url += ~this.url.indexOf('?')
	      ? '&' + query
	      : '?' + query;
	  }

	  // initiate request
	  xhr.open(this.method, this.url, true);

	  // CORS
	  if (this._withCredentials) xhr.withCredentials = true;

	  // body
	  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
	    // serialize stuff
	    var contentType = this.getHeader('Content-Type');
	    var serialize = request.serialize[contentType ? contentType.split(';')[0] : ''];
	    if (serialize) data = serialize(data);
	  }

	  // set header fields
	  for (var field in this.header) {
	    if (null == this.header[field]) continue;
	    xhr.setRequestHeader(field, this.header[field]);
	  }

	  // send stuff
	  this.emit('request', this);
	  xhr.send(data);
	  return this;
	};

	/**
	 * Faux promise support
	 *
	 * @param {Function} fulfill
	 * @param {Function} reject
	 * @return {Request}
	 */

	Request.prototype.then = function (fulfill, reject) {
	  return this.end(function(err, res) {
	    err ? reject(err) : fulfill(res);
	  });
	}

	/**
	 * Expose `Request`.
	 */

	request.Request = Request;

	/**
	 * Issue a request:
	 *
	 * Examples:
	 *
	 *    request('GET', '/users').end(callback)
	 *    request('/users').end(callback)
	 *    request('/users', callback)
	 *
	 * @param {String} method
	 * @param {String|Function} url or callback
	 * @return {Request}
	 * @api public
	 */

	function request(method, url) {
	  // callback
	  if ('function' == typeof url) {
	    return new Request('GET', method).end(url);
	  }

	  // url first
	  if (1 == arguments.length) {
	    return new Request('GET', method);
	  }

	  return new Request(method, url);
	}

	/**
	 * GET `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.get = function(url, data, fn){
	  var req = request('GET', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.query(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * HEAD `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.head = function(url, data, fn){
	  var req = request('HEAD', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * DELETE `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.del = function(url, fn){
	  var req = request('DELETE', url);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * PATCH `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.patch = function(url, data, fn){
	  var req = request('PATCH', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * POST `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.post = function(url, data, fn){
	  var req = request('POST', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * PUT `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.put = function(url, data, fn){
	  var req = request('PUT', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * Expose `request`.
	 */

	module.exports = request;


/***/ },
/* 28 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */

	module.exports = Emitter;

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks[event] = this._callbacks[event] || [])
	    .push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function(event, fn){
	  var self = this;
	  this._callbacks = this._callbacks || {};

	  function on() {
	    self.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks[event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks[event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks[event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks[event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 29 */
/***/ function(module, exports) {

	
	/**
	 * Reduce `arr` with `fn`.
	 *
	 * @param {Array} arr
	 * @param {Function} fn
	 * @param {Mixed} initial
	 *
	 * TODO: combatible error handling?
	 */

	module.exports = function(arr, fn, initial){  
	  var idx = 0;
	  var len = arr.length;
	  var curr = arguments.length == 3
	    ? initial
	    : arr[idx++];

	  while (idx < len) {
	    curr = fn.call(null, curr, arr[idx], ++idx, arr);
	  }
	  
	  return curr;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var config = __webpack_require__(26)
	  , request = __webpack_require__(27)
	  , END_POINT = config.api.END_POINT
	  , _ = __webpack_require__(40)

	module.exports = {
	  signIn: function(username,password,callback){
	    request
	      .post(END_POINT + '/user/signin')
	      .send({
	        username: username,
	        password: password
	      })
	      .end(function(err,res){
	        callback(err,res);
	      })
	  },
	  getUserInfo: function(username, callback){
	    request
	      .get(END_POINT + '/user/' + username)
	      .end(function(err,res){
	        callback(err,res);
	      })
	  },
	  update: function(username, room, callback){
	    var token = localStorage.getItem('token');
	    request
	      .put(END_POINT + '/user/' + username)
	      .send(_.merge(room, {token: token}))
	      .end(function(err,res){
	        callback(err,res);
	      })
	  }
	}


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "<section id=\"screen\"><div id=\"landing\"><div v-text=\"title\" class=\"main\"></div><div v-text=\"subTitle\" class=\"sub\"></div></div><div id=\"live\"></div></section><section id=\"programs\" v-repeat=\"shows\"><div class=\"program\"><div class=\"title\"><div v-text=\"$key | gameName\" class=\"main\"></div><div v-text=\"$key | gameSubName\" class=\"sub\"></div></div><div class=\"items pure-g\"><div v-repeat=\"$value\" class=\"pure-u-1-3\"><div class=\"item\"><div class=\"video\"></div><a href=\"javascript:void(0)\" v-text=\"room.name\" class=\"name\"></a></div></div></div></div></section>";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(33)
	module.exports.template = __webpack_require__(34)


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var User = __webpack_require__(23).User;
	  module.exports = {
	    data: function(){
	      return {
	        username: '',
	        password: ''
	      }
	    },
	    methods: {
	      signIn: function(){
	        User.signIn(this.username, this.password, function(err,res){
	          if (res.ok) {
	            if (res.body.code === '400') {
	              alert('Invalid username or password')
	            } else if(res.body.code === '200'){
	              localStorage.setItem('token', res.body.token);
	              localStorage.setItem('user', JSON.stringify(res.body.user));
	              location.href = '/';
	            }
	          } else {
	            alert('something wrong');
	          }
	        })
	      }
	    }
	  }

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "<div id=\"signin\"><input type=\"text\" placeholder=\"username\" v-model=\"username\"/><input type=\"password\" placeholder=\"password\" v-model=\"password\"/><a href=\"javascript:void(0)\" v-on=\"click: signIn()\">SignIn</a></div>";

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<div class=\"header\"><a href=\"/\" class=\"logo\">SISE Game</a><div id=\"toolbar\" v-if=\"!signed\"><a href=\"#/signin\" class=\"item\">登录</a><a href=\"#/signup\" class=\"item\">注册</a></div><div id=\"toolbar\" v-if=\"signed\"><a href=\"#/user\" class=\"item\">{{user.username}}</a><a href=\"#/signout\" class=\"item\">退出</a></div></div><div class=\"container\"><component is=\"{{view}}\" params=\"{{params}}\" keep-alive=\"keep-alive\" v-transition=\"fade\" transition-mode=\"out-in\"></component></div><div class=\"footer\"></div>";

/***/ },
/* 36 */,
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(38)
	module.exports.template = __webpack_require__(39)


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var User = __webpack_require__(23).User;
	  module.exports = {
	    props: ['params'],
	    data: function(){
	      return {
	        signed: localStorage.getItem('token') && localStorage.getItem('token') !== '',
	        user: {
	          username: '',
	          room: {
	            name: '',
	            description: '',
	            game: '',
	            show: false
	          }
	        },
	        games: [
	          {
	            text: '英雄联盟',
	            value: 'lol'
	          },
	          {
	            text: '炉石传说',
	            value: 'hearthStone'
	          },
	          {
	            text: 'DotA',
	            value: 'dota'
	          },
	          {
	            text: '其它',
	            value: 'unset'
	          }
	        ]
	      }
	    },
	    compiled: function(){
	      var app = this;
	      if (app.params.username === '') {
	        // 查看自己的资料
	        if (app.signed) {
	          User.getUserInfo(JSON.parse(localStorage.getItem('user')).username, function(err,res){
	            if (err || !res.ok) {
	              alert('Something wrong');
	            } else {
	              if (res.body.code === '200') {
	                app.user.username = res.body.username;
	                app.user.room = res.body.room;
	              } else {
	                // TODO 404
	                alert('Invalid user');
	              }
	            }
	          })
	        } else {
	          location.href="/";
	        }
	      } else {
	        // 查看它人资料
	        User.getUserInfo(app.params.username, function(err,res){
	          if (err || !res.ok) {
	            alert('Something wrong');
	          } else {
	            if (res.body.code === '200') {
	              app.user.username = res.body.username;
	              app.user.room = res.body.room;
	            } else {
	              // TODO 404
	              alert('Invalid user');
	            }
	          }
	        })
	      }
	    },
	    methods: {
	      userUpdate: function(){
	        var app = this;
	        User.update(app.user.username,{
	          roomName: app.user.room.name,
	          roomDescription: app.user.room.description,
	          show: app.user.room.show,
	          game: app.user.room.game
	        }, function(err,res){
	          if (res.body.code === '200') {
	            alert('update success')
	          } else {
	            alert('error');
	            console.log(res.body);
	          }
	        })
	      }
	    }
	  }

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "<div id=\"user\" v-if=\"signed &amp;&amp; params.username===''\"><p v-text=\"user.username\"></p><input v-model=\"user.room.name\"/><input v-model=\"user.room.description\"/><select v-model=\"user.room.game\" options=\"games\"></select><input id=\"show\" type=\"checkbox\" v-model=\"user.room.show\"/><label for=\"show\">显示到首页</label><a href=\"javascript:void(0)\" v-on=\"click: userUpdate()\">更新</a></div><div id=\"user\" v-if=\"!signed\"><p v-text=\"user.username\"></p><p v-text=\"user.room.name\"></p></div>";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/**
	 * @license
	 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern -d -o ./index.js`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	;(function() {

	  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
	  var undefined;

	  /** Used as the semantic version number. */
	  var VERSION = '3.10.1';

	  /** Used to compose bitmasks for wrapper metadata. */
	  var BIND_FLAG = 1,
	      BIND_KEY_FLAG = 2,
	      CURRY_BOUND_FLAG = 4,
	      CURRY_FLAG = 8,
	      CURRY_RIGHT_FLAG = 16,
	      PARTIAL_FLAG = 32,
	      PARTIAL_RIGHT_FLAG = 64,
	      ARY_FLAG = 128,
	      REARG_FLAG = 256;

	  /** Used as default options for `_.trunc`. */
	  var DEFAULT_TRUNC_LENGTH = 30,
	      DEFAULT_TRUNC_OMISSION = '...';

	  /** Used to detect when a function becomes hot. */
	  var HOT_COUNT = 150,
	      HOT_SPAN = 16;

	  /** Used as the size to enable large array optimizations. */
	  var LARGE_ARRAY_SIZE = 200;

	  /** Used to indicate the type of lazy iteratees. */
	  var LAZY_FILTER_FLAG = 1,
	      LAZY_MAP_FLAG = 2;

	  /** Used as the `TypeError` message for "Functions" methods. */
	  var FUNC_ERROR_TEXT = 'Expected a function';

	  /** Used as the internal argument placeholder. */
	  var PLACEHOLDER = '__lodash_placeholder__';

	  /** `Object#toString` result references. */
	  var argsTag = '[object Arguments]',
	      arrayTag = '[object Array]',
	      boolTag = '[object Boolean]',
	      dateTag = '[object Date]',
	      errorTag = '[object Error]',
	      funcTag = '[object Function]',
	      mapTag = '[object Map]',
	      numberTag = '[object Number]',
	      objectTag = '[object Object]',
	      regexpTag = '[object RegExp]',
	      setTag = '[object Set]',
	      stringTag = '[object String]',
	      weakMapTag = '[object WeakMap]';

	  var arrayBufferTag = '[object ArrayBuffer]',
	      float32Tag = '[object Float32Array]',
	      float64Tag = '[object Float64Array]',
	      int8Tag = '[object Int8Array]',
	      int16Tag = '[object Int16Array]',
	      int32Tag = '[object Int32Array]',
	      uint8Tag = '[object Uint8Array]',
	      uint8ClampedTag = '[object Uint8ClampedArray]',
	      uint16Tag = '[object Uint16Array]',
	      uint32Tag = '[object Uint32Array]';

	  /** Used to match empty string literals in compiled template source. */
	  var reEmptyStringLeading = /\b__p \+= '';/g,
	      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
	      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

	  /** Used to match HTML entities and HTML characters. */
	  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
	      reUnescapedHtml = /[&<>"'`]/g,
	      reHasEscapedHtml = RegExp(reEscapedHtml.source),
	      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

	  /** Used to match template delimiters. */
	  var reEscape = /<%-([\s\S]+?)%>/g,
	      reEvaluate = /<%([\s\S]+?)%>/g,
	      reInterpolate = /<%=([\s\S]+?)%>/g;

	  /** Used to match property names within property paths. */
	  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	      reIsPlainProp = /^\w*$/,
	      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;

	  /**
	   * Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns)
	   * and those outlined by [`EscapeRegExpPattern`](http://ecma-international.org/ecma-262/6.0/#sec-escaperegexppattern).
	   */
	  var reRegExpChars = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
	      reHasRegExpChars = RegExp(reRegExpChars.source);

	  /** Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks). */
	  var reComboMark = /[\u0300-\u036f\ufe20-\ufe23]/g;

	  /** Used to match backslashes in property paths. */
	  var reEscapeChar = /\\(\\)?/g;

	  /** Used to match [ES template delimiters](http://ecma-international.org/ecma-262/6.0/#sec-template-literal-lexical-components). */
	  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

	  /** Used to match `RegExp` flags from their coerced string values. */
	  var reFlags = /\w*$/;

	  /** Used to detect hexadecimal string values. */
	  var reHasHexPrefix = /^0[xX]/;

	  /** Used to detect host constructors (Safari > 5). */
	  var reIsHostCtor = /^\[object .+?Constructor\]$/;

	  /** Used to detect unsigned integer values. */
	  var reIsUint = /^\d+$/;

	  /** Used to match latin-1 supplementary letters (excluding mathematical operators). */
	  var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;

	  /** Used to ensure capturing order of template delimiters. */
	  var reNoMatch = /($^)/;

	  /** Used to match unescaped characters in compiled string literals. */
	  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

	  /** Used to match words to create compound words. */
	  var reWords = (function() {
	    var upper = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
	        lower = '[a-z\\xdf-\\xf6\\xf8-\\xff]+';

	    return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
	  }());

	  /** Used to assign default `context` object properties. */
	  var contextProps = [
	    'Array', 'ArrayBuffer', 'Date', 'Error', 'Float32Array', 'Float64Array',
	    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Math', 'Number',
	    'Object', 'RegExp', 'Set', 'String', '_', 'clearTimeout', 'isFinite',
	    'parseFloat', 'parseInt', 'setTimeout', 'TypeError', 'Uint8Array',
	    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap'
	  ];

	  /** Used to make template sourceURLs easier to identify. */
	  var templateCounter = -1;

	  /** Used to identify `toStringTag` values of typed arrays. */
	  var typedArrayTags = {};
	  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	  typedArrayTags[uint32Tag] = true;
	  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	  typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	  typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	  typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	  typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	  typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	  /** Used to identify `toStringTag` values supported by `_.clone`. */
	  var cloneableTags = {};
	  cloneableTags[argsTag] = cloneableTags[arrayTag] =
	  cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =
	  cloneableTags[dateTag] = cloneableTags[float32Tag] =
	  cloneableTags[float64Tag] = cloneableTags[int8Tag] =
	  cloneableTags[int16Tag] = cloneableTags[int32Tag] =
	  cloneableTags[numberTag] = cloneableTags[objectTag] =
	  cloneableTags[regexpTag] = cloneableTags[stringTag] =
	  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	  cloneableTags[errorTag] = cloneableTags[funcTag] =
	  cloneableTags[mapTag] = cloneableTags[setTag] =
	  cloneableTags[weakMapTag] = false;

	  /** Used to map latin-1 supplementary letters to basic latin letters. */
	  var deburredLetters = {
	    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	    '\xc7': 'C',  '\xe7': 'c',
	    '\xd0': 'D',  '\xf0': 'd',
	    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	    '\xcC': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	    '\xeC': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	    '\xd1': 'N',  '\xf1': 'n',
	    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	    '\xc6': 'Ae', '\xe6': 'ae',
	    '\xde': 'Th', '\xfe': 'th',
	    '\xdf': 'ss'
	  };

	  /** Used to map characters to HTML entities. */
	  var htmlEscapes = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#39;',
	    '`': '&#96;'
	  };

	  /** Used to map HTML entities to characters. */
	  var htmlUnescapes = {
	    '&amp;': '&',
	    '&lt;': '<',
	    '&gt;': '>',
	    '&quot;': '"',
	    '&#39;': "'",
	    '&#96;': '`'
	  };

	  /** Used to determine if values are of the language type `Object`. */
	  var objectTypes = {
	    'function': true,
	    'object': true
	  };

	  /** Used to escape characters for inclusion in compiled regexes. */
	  var regexpEscapes = {
	    '0': 'x30', '1': 'x31', '2': 'x32', '3': 'x33', '4': 'x34',
	    '5': 'x35', '6': 'x36', '7': 'x37', '8': 'x38', '9': 'x39',
	    'A': 'x41', 'B': 'x42', 'C': 'x43', 'D': 'x44', 'E': 'x45', 'F': 'x46',
	    'a': 'x61', 'b': 'x62', 'c': 'x63', 'd': 'x64', 'e': 'x65', 'f': 'x66',
	    'n': 'x6e', 'r': 'x72', 't': 'x74', 'u': 'x75', 'v': 'x76', 'x': 'x78'
	  };

	  /** Used to escape characters for inclusion in compiled string literals. */
	  var stringEscapes = {
	    '\\': '\\',
	    "'": "'",
	    '\n': 'n',
	    '\r': 'r',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  /** Detect free variable `exports`. */
	  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

	  /** Detect free variable `module`. */
	  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

	  /** Detect free variable `global` from Node.js. */
	  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global && global.Object && global;

	  /** Detect free variable `self`. */
	  var freeSelf = objectTypes[typeof self] && self && self.Object && self;

	  /** Detect free variable `window`. */
	  var freeWindow = objectTypes[typeof window] && window && window.Object && window;

	  /** Detect the popular CommonJS extension `module.exports`. */
	  var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;

	  /**
	   * Used as a reference to the global object.
	   *
	   * The `this` value is used if it's the global object to avoid Greasemonkey's
	   * restricted `window` object, otherwise the `window` object is used.
	   */
	  var root = freeGlobal || ((freeWindow !== (this && this.window)) && freeWindow) || freeSelf || this;

	  /*--------------------------------------------------------------------------*/

	  /**
	   * The base implementation of `compareAscending` which compares values and
	   * sorts them in ascending order without guaranteeing a stable sort.
	   *
	   * @private
	   * @param {*} value The value to compare.
	   * @param {*} other The other value to compare.
	   * @returns {number} Returns the sort order indicator for `value`.
	   */
	  function baseCompareAscending(value, other) {
	    if (value !== other) {
	      var valIsNull = value === null,
	          valIsUndef = value === undefined,
	          valIsReflexive = value === value;

	      var othIsNull = other === null,
	          othIsUndef = other === undefined,
	          othIsReflexive = other === other;

	      if ((value > other && !othIsNull) || !valIsReflexive ||
	          (valIsNull && !othIsUndef && othIsReflexive) ||
	          (valIsUndef && othIsReflexive)) {
	        return 1;
	      }
	      if ((value < other && !valIsNull) || !othIsReflexive ||
	          (othIsNull && !valIsUndef && valIsReflexive) ||
	          (othIsUndef && valIsReflexive)) {
	        return -1;
	      }
	    }
	    return 0;
	  }

	  /**
	   * The base implementation of `_.findIndex` and `_.findLastIndex` without
	   * support for callback shorthands and `this` binding.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseFindIndex(array, predicate, fromRight) {
	    var length = array.length,
	        index = fromRight ? length : -1;

	    while ((fromRight ? index-- : ++index < length)) {
	      if (predicate(array[index], index, array)) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * The base implementation of `_.indexOf` without support for binary searches.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseIndexOf(array, value, fromIndex) {
	    if (value !== value) {
	      return indexOfNaN(array, fromIndex);
	    }
	    var index = fromIndex - 1,
	        length = array.length;

	    while (++index < length) {
	      if (array[index] === value) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * The base implementation of `_.isFunction` without support for environments
	   * with incorrect `typeof` results.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	   */
	  function baseIsFunction(value) {
	    // Avoid a Chakra JIT bug in compatibility modes of IE 11.
	    // See https://github.com/jashkenas/underscore/issues/1621 for more details.
	    return typeof value == 'function' || false;
	  }

	  /**
	   * Converts `value` to a string if it's not one. An empty string is returned
	   * for `null` or `undefined` values.
	   *
	   * @private
	   * @param {*} value The value to process.
	   * @returns {string} Returns the string.
	   */
	  function baseToString(value) {
	    return value == null ? '' : (value + '');
	  }

	  /**
	   * Used by `_.trim` and `_.trimLeft` to get the index of the first character
	   * of `string` that is not found in `chars`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @param {string} chars The characters to find.
	   * @returns {number} Returns the index of the first character not found in `chars`.
	   */
	  function charsLeftIndex(string, chars) {
	    var index = -1,
	        length = string.length;

	    while (++index < length && chars.indexOf(string.charAt(index)) > -1) {}
	    return index;
	  }

	  /**
	   * Used by `_.trim` and `_.trimRight` to get the index of the last character
	   * of `string` that is not found in `chars`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @param {string} chars The characters to find.
	   * @returns {number} Returns the index of the last character not found in `chars`.
	   */
	  function charsRightIndex(string, chars) {
	    var index = string.length;

	    while (index-- && chars.indexOf(string.charAt(index)) > -1) {}
	    return index;
	  }

	  /**
	   * Used by `_.sortBy` to compare transformed elements of a collection and stable
	   * sort them in ascending order.
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @returns {number} Returns the sort order indicator for `object`.
	   */
	  function compareAscending(object, other) {
	    return baseCompareAscending(object.criteria, other.criteria) || (object.index - other.index);
	  }

	  /**
	   * Used by `_.sortByOrder` to compare multiple properties of a value to another
	   * and stable sort them.
	   *
	   * If `orders` is unspecified, all valuess are sorted in ascending order. Otherwise,
	   * a value is sorted in ascending order if its corresponding order is "asc", and
	   * descending if "desc".
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @param {boolean[]} orders The order to sort by for each property.
	   * @returns {number} Returns the sort order indicator for `object`.
	   */
	  function compareMultiple(object, other, orders) {
	    var index = -1,
	        objCriteria = object.criteria,
	        othCriteria = other.criteria,
	        length = objCriteria.length,
	        ordersLength = orders.length;

	    while (++index < length) {
	      var result = baseCompareAscending(objCriteria[index], othCriteria[index]);
	      if (result) {
	        if (index >= ordersLength) {
	          return result;
	        }
	        var order = orders[index];
	        return result * ((order === 'asc' || order === true) ? 1 : -1);
	      }
	    }
	    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
	    // that causes it, under certain circumstances, to provide the same value for
	    // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
	    // for more details.
	    //
	    // This also ensures a stable sort in V8 and other engines.
	    // See https://code.google.com/p/v8/issues/detail?id=90 for more details.
	    return object.index - other.index;
	  }

	  /**
	   * Used by `_.deburr` to convert latin-1 supplementary letters to basic latin letters.
	   *
	   * @private
	   * @param {string} letter The matched letter to deburr.
	   * @returns {string} Returns the deburred letter.
	   */
	  function deburrLetter(letter) {
	    return deburredLetters[letter];
	  }

	  /**
	   * Used by `_.escape` to convert characters to HTML entities.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeHtmlChar(chr) {
	    return htmlEscapes[chr];
	  }

	  /**
	   * Used by `_.escapeRegExp` to escape characters for inclusion in compiled regexes.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @param {string} leadingChar The capture group for a leading character.
	   * @param {string} whitespaceChar The capture group for a whitespace character.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeRegExpChar(chr, leadingChar, whitespaceChar) {
	    if (leadingChar) {
	      chr = regexpEscapes[chr];
	    } else if (whitespaceChar) {
	      chr = stringEscapes[chr];
	    }
	    return '\\' + chr;
	  }

	  /**
	   * Used by `_.template` to escape characters for inclusion in compiled string literals.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeStringChar(chr) {
	    return '\\' + stringEscapes[chr];
	  }

	  /**
	   * Gets the index at which the first occurrence of `NaN` is found in `array`.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {number} fromIndex The index to search from.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	   */
	  function indexOfNaN(array, fromIndex, fromRight) {
	    var length = array.length,
	        index = fromIndex + (fromRight ? 0 : -1);

	    while ((fromRight ? index-- : ++index < length)) {
	      var other = array[index];
	      if (other !== other) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * Checks if `value` is object-like.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	   */
	  function isObjectLike(value) {
	    return !!value && typeof value == 'object';
	  }

	  /**
	   * Used by `trimmedLeftIndex` and `trimmedRightIndex` to determine if a
	   * character code is whitespace.
	   *
	   * @private
	   * @param {number} charCode The character code to inspect.
	   * @returns {boolean} Returns `true` if `charCode` is whitespace, else `false`.
	   */
	  function isSpace(charCode) {
	    return ((charCode <= 160 && (charCode >= 9 && charCode <= 13) || charCode == 32 || charCode == 160) || charCode == 5760 || charCode == 6158 ||
	      (charCode >= 8192 && (charCode <= 8202 || charCode == 8232 || charCode == 8233 || charCode == 8239 || charCode == 8287 || charCode == 12288 || charCode == 65279)));
	  }

	  /**
	   * Replaces all `placeholder` elements in `array` with an internal placeholder
	   * and returns an array of their indexes.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {*} placeholder The placeholder to replace.
	   * @returns {Array} Returns the new array of placeholder indexes.
	   */
	  function replaceHolders(array, placeholder) {
	    var index = -1,
	        length = array.length,
	        resIndex = -1,
	        result = [];

	    while (++index < length) {
	      if (array[index] === placeholder) {
	        array[index] = PLACEHOLDER;
	        result[++resIndex] = index;
	      }
	    }
	    return result;
	  }

	  /**
	   * An implementation of `_.uniq` optimized for sorted arrays without support
	   * for callback shorthands and `this` binding.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {Function} [iteratee] The function invoked per iteration.
	   * @returns {Array} Returns the new duplicate-value-free array.
	   */
	  function sortedUniq(array, iteratee) {
	    var seen,
	        index = -1,
	        length = array.length,
	        resIndex = -1,
	        result = [];

	    while (++index < length) {
	      var value = array[index],
	          computed = iteratee ? iteratee(value, index, array) : value;

	      if (!index || seen !== computed) {
	        seen = computed;
	        result[++resIndex] = value;
	      }
	    }
	    return result;
	  }

	  /**
	   * Used by `_.trim` and `_.trimLeft` to get the index of the first non-whitespace
	   * character of `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the index of the first non-whitespace character.
	   */
	  function trimmedLeftIndex(string) {
	    var index = -1,
	        length = string.length;

	    while (++index < length && isSpace(string.charCodeAt(index))) {}
	    return index;
	  }

	  /**
	   * Used by `_.trim` and `_.trimRight` to get the index of the last non-whitespace
	   * character of `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the index of the last non-whitespace character.
	   */
	  function trimmedRightIndex(string) {
	    var index = string.length;

	    while (index-- && isSpace(string.charCodeAt(index))) {}
	    return index;
	  }

	  /**
	   * Used by `_.unescape` to convert HTML entities to characters.
	   *
	   * @private
	   * @param {string} chr The matched character to unescape.
	   * @returns {string} Returns the unescaped character.
	   */
	  function unescapeHtmlChar(chr) {
	    return htmlUnescapes[chr];
	  }

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Create a new pristine `lodash` function using the given `context` object.
	   *
	   * @static
	   * @memberOf _
	   * @category Utility
	   * @param {Object} [context=root] The context object.
	   * @returns {Function} Returns a new `lodash` function.
	   * @example
	   *
	   * _.mixin({ 'foo': _.constant('foo') });
	   *
	   * var lodash = _.runInContext();
	   * lodash.mixin({ 'bar': lodash.constant('bar') });
	   *
	   * _.isFunction(_.foo);
	   * // => true
	   * _.isFunction(_.bar);
	   * // => false
	   *
	   * lodash.isFunction(lodash.foo);
	   * // => false
	   * lodash.isFunction(lodash.bar);
	   * // => true
	   *
	   * // using `context` to mock `Date#getTime` use in `_.now`
	   * var mock = _.runInContext({
	   *   'Date': function() {
	   *     return { 'getTime': getTimeMock };
	   *   }
	   * });
	   *
	   * // or creating a suped-up `defer` in Node.js
	   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
	   */
	  function runInContext(context) {
	    // Avoid issues with some ES3 environments that attempt to use values, named
	    // after built-in constructors like `Object`, for the creation of literals.
	    // ES5 clears this up by stating that literals must use built-in constructors.
	    // See https://es5.github.io/#x11.1.5 for more details.
	    context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;

	    /** Native constructor references. */
	    var Array = context.Array,
	        Date = context.Date,
	        Error = context.Error,
	        Function = context.Function,
	        Math = context.Math,
	        Number = context.Number,
	        Object = context.Object,
	        RegExp = context.RegExp,
	        String = context.String,
	        TypeError = context.TypeError;

	    /** Used for native method references. */
	    var arrayProto = Array.prototype,
	        objectProto = Object.prototype,
	        stringProto = String.prototype;

	    /** Used to resolve the decompiled source of functions. */
	    var fnToString = Function.prototype.toString;

	    /** Used to check objects for own properties. */
	    var hasOwnProperty = objectProto.hasOwnProperty;

	    /** Used to generate unique IDs. */
	    var idCounter = 0;

	    /**
	     * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	     * of values.
	     */
	    var objToString = objectProto.toString;

	    /** Used to restore the original `_` reference in `_.noConflict`. */
	    var oldDash = root._;

	    /** Used to detect if a method is native. */
	    var reIsNative = RegExp('^' +
	      fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	    );

	    /** Native method references. */
	    var ArrayBuffer = context.ArrayBuffer,
	        clearTimeout = context.clearTimeout,
	        parseFloat = context.parseFloat,
	        pow = Math.pow,
	        propertyIsEnumerable = objectProto.propertyIsEnumerable,
	        Set = getNative(context, 'Set'),
	        setTimeout = context.setTimeout,
	        splice = arrayProto.splice,
	        Uint8Array = context.Uint8Array,
	        WeakMap = getNative(context, 'WeakMap');

	    /* Native method references for those with the same name as other `lodash` methods. */
	    var nativeCeil = Math.ceil,
	        nativeCreate = getNative(Object, 'create'),
	        nativeFloor = Math.floor,
	        nativeIsArray = getNative(Array, 'isArray'),
	        nativeIsFinite = context.isFinite,
	        nativeKeys = getNative(Object, 'keys'),
	        nativeMax = Math.max,
	        nativeMin = Math.min,
	        nativeNow = getNative(Date, 'now'),
	        nativeParseInt = context.parseInt,
	        nativeRandom = Math.random;

	    /** Used as references for `-Infinity` and `Infinity`. */
	    var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
	        POSITIVE_INFINITY = Number.POSITIVE_INFINITY;

	    /** Used as references for the maximum length and index of an array. */
	    var MAX_ARRAY_LENGTH = 4294967295,
	        MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
	        HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

	    /**
	     * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	     * of an array-like value.
	     */
	    var MAX_SAFE_INTEGER = 9007199254740991;

	    /** Used to store function metadata. */
	    var metaMap = WeakMap && new WeakMap;

	    /** Used to lookup unminified function names. */
	    var realNames = {};

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a `lodash` object which wraps `value` to enable implicit chaining.
	     * Methods that operate on and return arrays, collections, and functions can
	     * be chained together. Methods that retrieve a single value or may return a
	     * primitive value will automatically end the chain returning the unwrapped
	     * value. Explicit chaining may be enabled using `_.chain`. The execution of
	     * chained methods is lazy, that is, execution is deferred until `_#value`
	     * is implicitly or explicitly called.
	     *
	     * Lazy evaluation allows several methods to support shortcut fusion. Shortcut
	     * fusion is an optimization strategy which merge iteratee calls; this can help
	     * to avoid the creation of intermediate data structures and greatly reduce the
	     * number of iteratee executions.
	     *
	     * Chaining is supported in custom builds as long as the `_#value` method is
	     * directly or indirectly included in the build.
	     *
	     * In addition to lodash methods, wrappers have `Array` and `String` methods.
	     *
	     * The wrapper `Array` methods are:
	     * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`,
	     * `splice`, and `unshift`
	     *
	     * The wrapper `String` methods are:
	     * `replace` and `split`
	     *
	     * The wrapper methods that support shortcut fusion are:
	     * `compact`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`,
	     * `first`, `initial`, `last`, `map`, `pluck`, `reject`, `rest`, `reverse`,
	     * `slice`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `toArray`,
	     * and `where`
	     *
	     * The chainable wrapper methods are:
	     * `after`, `ary`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`,
	     * `callback`, `chain`, `chunk`, `commit`, `compact`, `concat`, `constant`,
	     * `countBy`, `create`, `curry`, `debounce`, `defaults`, `defaultsDeep`,
	     * `defer`, `delay`, `difference`, `drop`, `dropRight`, `dropRightWhile`,
	     * `dropWhile`, `fill`, `filter`, `flatten`, `flattenDeep`, `flow`, `flowRight`,
	     * `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
	     * `functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
	     * `invoke`, `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`,
	     * `matchesProperty`, `memoize`, `merge`, `method`, `methodOf`, `mixin`,
	     * `modArgs`, `negate`, `omit`, `once`, `pairs`, `partial`, `partialRight`,
	     * `partition`, `pick`, `plant`, `pluck`, `property`, `propertyOf`, `pull`,
	     * `pullAt`, `push`, `range`, `rearg`, `reject`, `remove`, `rest`, `restParam`,
	     * `reverse`, `set`, `shuffle`, `slice`, `sort`, `sortBy`, `sortByAll`,
	     * `sortByOrder`, `splice`, `spread`, `take`, `takeRight`, `takeRightWhile`,
	     * `takeWhile`, `tap`, `throttle`, `thru`, `times`, `toArray`, `toPlainObject`,
	     * `transform`, `union`, `uniq`, `unshift`, `unzip`, `unzipWith`, `values`,
	     * `valuesIn`, `where`, `without`, `wrap`, `xor`, `zip`, `zipObject`, `zipWith`
	     *
	     * The wrapper methods that are **not** chainable by default are:
	     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clone`, `cloneDeep`,
	     * `deburr`, `endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`,
	     * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`,
	     * `floor`, `get`, `gt`, `gte`, `has`, `identity`, `includes`, `indexOf`,
	     * `inRange`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
	     * `isEmpty`, `isEqual`, `isError`, `isFinite` `isFunction`, `isMatch`,
	     * `isNative`, `isNaN`, `isNull`, `isNumber`, `isObject`, `isPlainObject`,
	     * `isRegExp`, `isString`, `isUndefined`, `isTypedArray`, `join`, `kebabCase`,
	     * `last`, `lastIndexOf`, `lt`, `lte`, `max`, `min`, `noConflict`, `noop`,
	     * `now`, `pad`, `padLeft`, `padRight`, `parseInt`, `pop`, `random`, `reduce`,
	     * `reduceRight`, `repeat`, `result`, `round`, `runInContext`, `shift`, `size`,
	     * `snakeCase`, `some`, `sortedIndex`, `sortedLastIndex`, `startCase`,
	     * `startsWith`, `sum`, `template`, `trim`, `trimLeft`, `trimRight`, `trunc`,
	     * `unescape`, `uniqueId`, `value`, and `words`
	     *
	     * The wrapper method `sample` will return a wrapped value when `n` is provided,
	     * otherwise an unwrapped value is returned.
	     *
	     * @name _
	     * @constructor
	     * @category Chain
	     * @param {*} value The value to wrap in a `lodash` instance.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var wrapped = _([1, 2, 3]);
	     *
	     * // returns an unwrapped value
	     * wrapped.reduce(function(total, n) {
	     *   return total + n;
	     * });
	     * // => 6
	     *
	     * // returns a wrapped value
	     * var squares = wrapped.map(function(n) {
	     *   return n * n;
	     * });
	     *
	     * _.isArray(squares);
	     * // => false
	     *
	     * _.isArray(squares.value());
	     * // => true
	     */
	    function lodash(value) {
	      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
	        if (value instanceof LodashWrapper) {
	          return value;
	        }
	        if (hasOwnProperty.call(value, '__chain__') && hasOwnProperty.call(value, '__wrapped__')) {
	          return wrapperClone(value);
	        }
	      }
	      return new LodashWrapper(value);
	    }

	    /**
	     * The function whose prototype all chaining wrappers inherit from.
	     *
	     * @private
	     */
	    function baseLodash() {
	      // No operation performed.
	    }

	    /**
	     * The base constructor for creating `lodash` wrapper objects.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     * @param {boolean} [chainAll] Enable chaining for all wrapper methods.
	     * @param {Array} [actions=[]] Actions to peform to resolve the unwrapped value.
	     */
	    function LodashWrapper(value, chainAll, actions) {
	      this.__wrapped__ = value;
	      this.__actions__ = actions || [];
	      this.__chain__ = !!chainAll;
	    }

	    /**
	     * An object environment feature flags.
	     *
	     * @static
	     * @memberOf _
	     * @type Object
	     */
	    var support = lodash.support = {};

	    /**
	     * By default, the template delimiters used by lodash are like those in
	     * embedded Ruby (ERB). Change the following template settings to use
	     * alternative delimiters.
	     *
	     * @static
	     * @memberOf _
	     * @type Object
	     */
	    lodash.templateSettings = {

	      /**
	       * Used to detect `data` property values to be HTML-escaped.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'escape': reEscape,

	      /**
	       * Used to detect code to be evaluated.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'evaluate': reEvaluate,

	      /**
	       * Used to detect `data` property values to inject.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'interpolate': reInterpolate,

	      /**
	       * Used to reference the data object in the template text.
	       *
	       * @memberOf _.templateSettings
	       * @type string
	       */
	      'variable': '',

	      /**
	       * Used to import variables into the compiled template.
	       *
	       * @memberOf _.templateSettings
	       * @type Object
	       */
	      'imports': {

	        /**
	         * A reference to the `lodash` function.
	         *
	         * @memberOf _.templateSettings.imports
	         * @type Function
	         */
	        '_': lodash
	      }
	    };

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     */
	    function LazyWrapper(value) {
	      this.__wrapped__ = value;
	      this.__actions__ = [];
	      this.__dir__ = 1;
	      this.__filtered__ = false;
	      this.__iteratees__ = [];
	      this.__takeCount__ = POSITIVE_INFINITY;
	      this.__views__ = [];
	    }

	    /**
	     * Creates a clone of the lazy wrapper object.
	     *
	     * @private
	     * @name clone
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the cloned `LazyWrapper` object.
	     */
	    function lazyClone() {
	      var result = new LazyWrapper(this.__wrapped__);
	      result.__actions__ = arrayCopy(this.__actions__);
	      result.__dir__ = this.__dir__;
	      result.__filtered__ = this.__filtered__;
	      result.__iteratees__ = arrayCopy(this.__iteratees__);
	      result.__takeCount__ = this.__takeCount__;
	      result.__views__ = arrayCopy(this.__views__);
	      return result;
	    }

	    /**
	     * Reverses the direction of lazy iteration.
	     *
	     * @private
	     * @name reverse
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the new reversed `LazyWrapper` object.
	     */
	    function lazyReverse() {
	      if (this.__filtered__) {
	        var result = new LazyWrapper(this);
	        result.__dir__ = -1;
	        result.__filtered__ = true;
	      } else {
	        result = this.clone();
	        result.__dir__ *= -1;
	      }
	      return result;
	    }

	    /**
	     * Extracts the unwrapped value from its lazy wrapper.
	     *
	     * @private
	     * @name value
	     * @memberOf LazyWrapper
	     * @returns {*} Returns the unwrapped value.
	     */
	    function lazyValue() {
	      var array = this.__wrapped__.value(),
	          dir = this.__dir__,
	          isArr = isArray(array),
	          isRight = dir < 0,
	          arrLength = isArr ? array.length : 0,
	          view = getView(0, arrLength, this.__views__),
	          start = view.start,
	          end = view.end,
	          length = end - start,
	          index = isRight ? end : (start - 1),
	          iteratees = this.__iteratees__,
	          iterLength = iteratees.length,
	          resIndex = 0,
	          takeCount = nativeMin(length, this.__takeCount__);

	      if (!isArr || arrLength < LARGE_ARRAY_SIZE || (arrLength == length && takeCount == length)) {
	        return baseWrapperValue((isRight && isArr) ? array.reverse() : array, this.__actions__);
	      }
	      var result = [];

	      outer:
	      while (length-- && resIndex < takeCount) {
	        index += dir;

	        var iterIndex = -1,
	            value = array[index];

	        while (++iterIndex < iterLength) {
	          var data = iteratees[iterIndex],
	              iteratee = data.iteratee,
	              type = data.type,
	              computed = iteratee(value);

	          if (type == LAZY_MAP_FLAG) {
	            value = computed;
	          } else if (!computed) {
	            if (type == LAZY_FILTER_FLAG) {
	              continue outer;
	            } else {
	              break outer;
	            }
	          }
	        }
	        result[resIndex++] = value;
	      }
	      return result;
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a cache object to store key/value pairs.
	     *
	     * @private
	     * @static
	     * @name Cache
	     * @memberOf _.memoize
	     */
	    function MapCache() {
	      this.__data__ = {};
	    }

	    /**
	     * Removes `key` and its value from the cache.
	     *
	     * @private
	     * @name delete
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed successfully, else `false`.
	     */
	    function mapDelete(key) {
	      return this.has(key) && delete this.__data__[key];
	    }

	    /**
	     * Gets the cached value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the cached value.
	     */
	    function mapGet(key) {
	      return key == '__proto__' ? undefined : this.__data__[key];
	    }

	    /**
	     * Checks if a cached value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	    function mapHas(key) {
	      return key != '__proto__' && hasOwnProperty.call(this.__data__, key);
	    }

	    /**
	     * Sets `value` to `key` of the cache.
	     *
	     * @private
	     * @name set
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to cache.
	     * @param {*} value The value to cache.
	     * @returns {Object} Returns the cache object.
	     */
	    function mapSet(key, value) {
	      if (key != '__proto__') {
	        this.__data__[key] = value;
	      }
	      return this;
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     *
	     * Creates a cache object to store unique values.
	     *
	     * @private
	     * @param {Array} [values] The values to cache.
	     */
	    function SetCache(values) {
	      var length = values ? values.length : 0;

	      this.data = { 'hash': nativeCreate(null), 'set': new Set };
	      while (length--) {
	        this.push(values[length]);
	      }
	    }

	    /**
	     * Checks if `value` is in `cache` mimicking the return signature of
	     * `_.indexOf` by returning `0` if the value is found, else `-1`.
	     *
	     * @private
	     * @param {Object} cache The cache to search.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns `0` if `value` is found, else `-1`.
	     */
	    function cacheIndexOf(cache, value) {
	      var data = cache.data,
	          result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];

	      return result ? 0 : -1;
	    }

	    /**
	     * Adds `value` to the cache.
	     *
	     * @private
	     * @name push
	     * @memberOf SetCache
	     * @param {*} value The value to cache.
	     */
	    function cachePush(value) {
	      var data = this.data;
	      if (typeof value == 'string' || isObject(value)) {
	        data.set.add(value);
	      } else {
	        data.hash[value] = true;
	      }
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a new array joining `array` with `other`.
	     *
	     * @private
	     * @param {Array} array The array to join.
	     * @param {Array} other The other array to join.
	     * @returns {Array} Returns the new concatenated array.
	     */
	    function arrayConcat(array, other) {
	      var index = -1,
	          length = array.length,
	          othIndex = -1,
	          othLength = other.length,
	          result = Array(length + othLength);

	      while (++index < length) {
	        result[index] = array[index];
	      }
	      while (++othIndex < othLength) {
	        result[index++] = other[othIndex];
	      }
	      return result;
	    }

	    /**
	     * Copies the values of `source` to `array`.
	     *
	     * @private
	     * @param {Array} source The array to copy values from.
	     * @param {Array} [array=[]] The array to copy values to.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayCopy(source, array) {
	      var index = -1,
	          length = source.length;

	      array || (array = Array(length));
	      while (++index < length) {
	        array[index] = source[index];
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.forEach` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayEach(array, iteratee) {
	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        if (iteratee(array[index], index, array) === false) {
	          break;
	        }
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.forEachRight` for arrays without support for
	     * callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayEachRight(array, iteratee) {
	      var length = array.length;

	      while (length--) {
	        if (iteratee(array[length], length, array) === false) {
	          break;
	        }
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.every` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     */
	    function arrayEvery(array, predicate) {
	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        if (!predicate(array[index], index, array)) {
	          return false;
	        }
	      }
	      return true;
	    }

	    /**
	     * A specialized version of `baseExtremum` for arrays which invokes `iteratee`
	     * with one argument: (value).
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {*} Returns the extremum value.
	     */
	    function arrayExtremum(array, iteratee, comparator, exValue) {
	      var index = -1,
	          length = array.length,
	          computed = exValue,
	          result = computed;

	      while (++index < length) {
	        var value = array[index],
	            current = +iteratee(value);

	        if (comparator(current, computed)) {
	          computed = current;
	          result = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * A specialized version of `_.filter` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */
	    function arrayFilter(array, predicate) {
	      var index = -1,
	          length = array.length,
	          resIndex = -1,
	          result = [];

	      while (++index < length) {
	        var value = array[index];
	        if (predicate(value, index, array)) {
	          result[++resIndex] = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * A specialized version of `_.map` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
	    function arrayMap(array, iteratee) {
	      var index = -1,
	          length = array.length,
	          result = Array(length);

	      while (++index < length) {
	        result[index] = iteratee(array[index], index, array);
	      }
	      return result;
	    }

	    /**
	     * Appends the elements of `values` to `array`.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to append.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayPush(array, values) {
	      var index = -1,
	          length = values.length,
	          offset = array.length;

	      while (++index < length) {
	        array[offset + index] = values[index];
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.reduce` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {boolean} [initFromArray] Specify using the first element of `array`
	     *  as the initial value.
	     * @returns {*} Returns the accumulated value.
	     */
	    function arrayReduce(array, iteratee, accumulator, initFromArray) {
	      var index = -1,
	          length = array.length;

	      if (initFromArray && length) {
	        accumulator = array[++index];
	      }
	      while (++index < length) {
	        accumulator = iteratee(accumulator, array[index], index, array);
	      }
	      return accumulator;
	    }

	    /**
	     * A specialized version of `_.reduceRight` for arrays without support for
	     * callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {boolean} [initFromArray] Specify using the last element of `array`
	     *  as the initial value.
	     * @returns {*} Returns the accumulated value.
	     */
	    function arrayReduceRight(array, iteratee, accumulator, initFromArray) {
	      var length = array.length;
	      if (initFromArray && length) {
	        accumulator = array[--length];
	      }
	      while (length--) {
	        accumulator = iteratee(accumulator, array[length], length, array);
	      }
	      return accumulator;
	    }

	    /**
	     * A specialized version of `_.some` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */
	    function arraySome(array, predicate) {
	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        if (predicate(array[index], index, array)) {
	          return true;
	        }
	      }
	      return false;
	    }

	    /**
	     * A specialized version of `_.sum` for arrays without support for callback
	     * shorthands and `this` binding..
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {number} Returns the sum.
	     */
	    function arraySum(array, iteratee) {
	      var length = array.length,
	          result = 0;

	      while (length--) {
	        result += +iteratee(array[length]) || 0;
	      }
	      return result;
	    }

	    /**
	     * Used by `_.defaults` to customize its `_.assign` use.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function assignDefaults(objectValue, sourceValue) {
	      return objectValue === undefined ? sourceValue : objectValue;
	    }

	    /**
	     * Used by `_.template` to customize its `_.assign` use.
	     *
	     * **Note:** This function is like `assignDefaults` except that it ignores
	     * inherited property values when checking if a property is `undefined`.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @param {string} key The key associated with the object and source values.
	     * @param {Object} object The destination object.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function assignOwnDefaults(objectValue, sourceValue, key, object) {
	      return (objectValue === undefined || !hasOwnProperty.call(object, key))
	        ? sourceValue
	        : objectValue;
	    }

	    /**
	     * A specialized version of `_.assign` for customizing assigned values without
	     * support for argument juggling, multiple sources, and `this` binding `customizer`
	     * functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {Function} customizer The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     */
	    function assignWith(object, source, customizer) {
	      var index = -1,
	          props = keys(source),
	          length = props.length;

	      while (++index < length) {
	        var key = props[index],
	            value = object[key],
	            result = customizer(value, source[key], key, object, source);

	        if ((result === result ? (result !== value) : (value === value)) ||
	            (value === undefined && !(key in object))) {
	          object[key] = result;
	        }
	      }
	      return object;
	    }

	    /**
	     * The base implementation of `_.assign` without support for argument juggling,
	     * multiple sources, and `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @returns {Object} Returns `object`.
	     */
	    function baseAssign(object, source) {
	      return source == null
	        ? object
	        : baseCopy(source, keys(source), object);
	    }

	    /**
	     * The base implementation of `_.at` without support for string collections
	     * and individual key arguments.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {number[]|string[]} props The property names or indexes of elements to pick.
	     * @returns {Array} Returns the new array of picked elements.
	     */
	    function baseAt(collection, props) {
	      var index = -1,
	          isNil = collection == null,
	          isArr = !isNil && isArrayLike(collection),
	          length = isArr ? collection.length : 0,
	          propsLength = props.length,
	          result = Array(propsLength);

	      while(++index < propsLength) {
	        var key = props[index];
	        if (isArr) {
	          result[index] = isIndex(key, length) ? collection[key] : undefined;
	        } else {
	          result[index] = isNil ? undefined : collection[key];
	        }
	      }
	      return result;
	    }

	    /**
	     * Copies properties of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy properties from.
	     * @param {Array} props The property names to copy.
	     * @param {Object} [object={}] The object to copy properties to.
	     * @returns {Object} Returns `object`.
	     */
	    function baseCopy(source, props, object) {
	      object || (object = {});

	      var index = -1,
	          length = props.length;

	      while (++index < length) {
	        var key = props[index];
	        object[key] = source[key];
	      }
	      return object;
	    }

	    /**
	     * The base implementation of `_.callback` which supports specifying the
	     * number of arguments to provide to `func`.
	     *
	     * @private
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {number} [argCount] The number of arguments to provide to `func`.
	     * @returns {Function} Returns the callback.
	     */
	    function baseCallback(func, thisArg, argCount) {
	      var type = typeof func;
	      if (type == 'function') {
	        return thisArg === undefined
	          ? func
	          : bindCallback(func, thisArg, argCount);
	      }
	      if (func == null) {
	        return identity;
	      }
	      if (type == 'object') {
	        return baseMatches(func);
	      }
	      return thisArg === undefined
	        ? property(func)
	        : baseMatchesProperty(func, thisArg);
	    }

	    /**
	     * The base implementation of `_.clone` without support for argument juggling
	     * and `this` binding `customizer` functions.
	     *
	     * @private
	     * @param {*} value The value to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {string} [key] The key of `value`.
	     * @param {Object} [object] The object `value` belongs to.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates clones with source counterparts.
	     * @returns {*} Returns the cloned value.
	     */
	    function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
	      var result;
	      if (customizer) {
	        result = object ? customizer(value, key, object) : customizer(value);
	      }
	      if (result !== undefined) {
	        return result;
	      }
	      if (!isObject(value)) {
	        return value;
	      }
	      var isArr = isArray(value);
	      if (isArr) {
	        result = initCloneArray(value);
	        if (!isDeep) {
	          return arrayCopy(value, result);
	        }
	      } else {
	        var tag = objToString.call(value),
	            isFunc = tag == funcTag;

	        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	          result = initCloneObject(isFunc ? {} : value);
	          if (!isDeep) {
	            return baseAssign(result, value);
	          }
	        } else {
	          return cloneableTags[tag]
	            ? initCloneByTag(value, tag, isDeep)
	            : (object ? value : {});
	        }
	      }
	      // Check for circular references and return its corresponding clone.
	      stackA || (stackA = []);
	      stackB || (stackB = []);

	      var length = stackA.length;
	      while (length--) {
	        if (stackA[length] == value) {
	          return stackB[length];
	        }
	      }
	      // Add the source value to the stack of traversed objects and associate it with its clone.
	      stackA.push(value);
	      stackB.push(result);

	      // Recursively populate clone (susceptible to call stack limits).
	      (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
	        result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.create` without support for assigning
	     * properties to the created object.
	     *
	     * @private
	     * @param {Object} prototype The object to inherit from.
	     * @returns {Object} Returns the new object.
	     */
	    var baseCreate = (function() {
	      function object() {}
	      return function(prototype) {
	        if (isObject(prototype)) {
	          object.prototype = prototype;
	          var result = new object;
	          object.prototype = undefined;
	        }
	        return result || {};
	      };
	    }());

	    /**
	     * The base implementation of `_.delay` and `_.defer` which accepts an index
	     * of where to slice the arguments to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {Object} args The arguments provide to `func`.
	     * @returns {number} Returns the timer id.
	     */
	    function baseDelay(func, wait, args) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return setTimeout(function() { func.apply(undefined, args); }, wait);
	    }

	    /**
	     * The base implementation of `_.difference` which accepts a single array
	     * of values to exclude.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Array} values The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     */
	    function baseDifference(array, values) {
	      var length = array ? array.length : 0,
	          result = [];

	      if (!length) {
	        return result;
	      }
	      var index = -1,
	          indexOf = getIndexOf(),
	          isCommon = indexOf == baseIndexOf,
	          cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
	          valuesLength = values.length;

	      if (cache) {
	        indexOf = cacheIndexOf;
	        isCommon = false;
	        values = cache;
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index];

	        if (isCommon && value === value) {
	          var valuesIndex = valuesLength;
	          while (valuesIndex--) {
	            if (values[valuesIndex] === value) {
	              continue outer;
	            }
	          }
	          result.push(value);
	        }
	        else if (indexOf(values, value, 0) < 0) {
	          result.push(value);
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.forEach` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object|string} Returns `collection`.
	     */
	    var baseEach = createBaseEach(baseForOwn);

	    /**
	     * The base implementation of `_.forEachRight` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object|string} Returns `collection`.
	     */
	    var baseEachRight = createBaseEach(baseForOwnRight, true);

	    /**
	     * The base implementation of `_.every` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`
	     */
	    function baseEvery(collection, predicate) {
	      var result = true;
	      baseEach(collection, function(value, index, collection) {
	        result = !!predicate(value, index, collection);
	        return result;
	      });
	      return result;
	    }

	    /**
	     * Gets the extremum value of `collection` invoking `iteratee` for each value
	     * in `collection` to generate the criterion by which the value is ranked.
	     * The `iteratee` is invoked with three arguments: (value, index|key, collection).
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {*} Returns the extremum value.
	     */
	    function baseExtremum(collection, iteratee, comparator, exValue) {
	      var computed = exValue,
	          result = computed;

	      baseEach(collection, function(value, index, collection) {
	        var current = +iteratee(value, index, collection);
	        if (comparator(current, computed) || (current === exValue && current === result)) {
	          computed = current;
	          result = value;
	        }
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.fill` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     */
	    function baseFill(array, value, start, end) {
	      var length = array.length;

	      start = start == null ? 0 : (+start || 0);
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = (end === undefined || end > length) ? length : (+end || 0);
	      if (end < 0) {
	        end += length;
	      }
	      length = start > end ? 0 : (end >>> 0);
	      start >>>= 0;

	      while (start < length) {
	        array[start++] = value;
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.filter` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */
	    function baseFilter(collection, predicate) {
	      var result = [];
	      baseEach(collection, function(value, index, collection) {
	        if (predicate(value, index, collection)) {
	          result.push(value);
	        }
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.find`, `_.findLast`, `_.findKey`, and `_.findLastKey`,
	     * without support for callback shorthands and `this` binding, which iterates
	     * over `collection` using the provided `eachFunc`.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {Function} eachFunc The function to iterate over `collection`.
	     * @param {boolean} [retKey] Specify returning the key of the found element
	     *  instead of the element itself.
	     * @returns {*} Returns the found element or its key, else `undefined`.
	     */
	    function baseFind(collection, predicate, eachFunc, retKey) {
	      var result;
	      eachFunc(collection, function(value, key, collection) {
	        if (predicate(value, key, collection)) {
	          result = retKey ? key : value;
	          return false;
	        }
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.flatten` with added support for restricting
	     * flattening and specifying the start index.
	     *
	     * @private
	     * @param {Array} array The array to flatten.
	     * @param {boolean} [isDeep] Specify a deep flatten.
	     * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	     * @param {Array} [result=[]] The initial result value.
	     * @returns {Array} Returns the new flattened array.
	     */
	    function baseFlatten(array, isDeep, isStrict, result) {
	      result || (result = []);

	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        var value = array[index];
	        if (isObjectLike(value) && isArrayLike(value) &&
	            (isStrict || isArray(value) || isArguments(value))) {
	          if (isDeep) {
	            // Recursively flatten arrays (susceptible to call stack limits).
	            baseFlatten(value, isDeep, isStrict, result);
	          } else {
	            arrayPush(result, value);
	          }
	        } else if (!isStrict) {
	          result[result.length] = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `baseForIn` and `baseForOwn` which iterates
	     * over `object` properties returned by `keysFunc` invoking `iteratee` for
	     * each property. Iteratee functions may exit iteration early by explicitly
	     * returning `false`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseFor = createBaseFor();

	    /**
	     * This function is like `baseFor` except that it iterates over properties
	     * in the opposite order.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseForRight = createBaseFor(true);

	    /**
	     * The base implementation of `_.forIn` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForIn(object, iteratee) {
	      return baseFor(object, iteratee, keysIn);
	    }

	    /**
	     * The base implementation of `_.forOwn` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwn(object, iteratee) {
	      return baseFor(object, iteratee, keys);
	    }

	    /**
	     * The base implementation of `_.forOwnRight` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwnRight(object, iteratee) {
	      return baseForRight(object, iteratee, keys);
	    }

	    /**
	     * The base implementation of `_.functions` which creates an array of
	     * `object` function property names filtered from those provided.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} props The property names to filter.
	     * @returns {Array} Returns the new array of filtered property names.
	     */
	    function baseFunctions(object, props) {
	      var index = -1,
	          length = props.length,
	          resIndex = -1,
	          result = [];

	      while (++index < length) {
	        var key = props[index];
	        if (isFunction(object[key])) {
	          result[++resIndex] = key;
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `get` without support for string paths
	     * and default values.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} path The path of the property to get.
	     * @param {string} [pathKey] The key representation of path.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseGet(object, path, pathKey) {
	      if (object == null) {
	        return;
	      }
	      if (pathKey !== undefined && pathKey in toObject(object)) {
	        path = [pathKey];
	      }
	      var index = 0,
	          length = path.length;

	      while (object != null && index < length) {
	        object = object[path[index++]];
	      }
	      return (index && index == length) ? object : undefined;
	    }

	    /**
	     * The base implementation of `_.isEqual` without support for `this` binding
	     * `customizer` functions.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize comparing values.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     */
	    function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	      if (value === other) {
	        return true;
	      }
	      if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	        return value !== value && other !== other;
	      }
	      return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	    }

	    /**
	     * A specialized version of `baseIsEqual` for arrays and objects which performs
	     * deep comparisons and tracks traversed objects enabling objects with circular
	     * references to be compared.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing objects.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	     * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var objIsArr = isArray(object),
	          othIsArr = isArray(other),
	          objTag = arrayTag,
	          othTag = arrayTag;

	      if (!objIsArr) {
	        objTag = objToString.call(object);
	        if (objTag == argsTag) {
	          objTag = objectTag;
	        } else if (objTag != objectTag) {
	          objIsArr = isTypedArray(object);
	        }
	      }
	      if (!othIsArr) {
	        othTag = objToString.call(other);
	        if (othTag == argsTag) {
	          othTag = objectTag;
	        } else if (othTag != objectTag) {
	          othIsArr = isTypedArray(other);
	        }
	      }
	      var objIsObj = objTag == objectTag,
	          othIsObj = othTag == objectTag,
	          isSameTag = objTag == othTag;

	      if (isSameTag && !(objIsArr || objIsObj)) {
	        return equalByTag(object, other, objTag);
	      }
	      if (!isLoose) {
	        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	        if (objIsWrapped || othIsWrapped) {
	          return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	        }
	      }
	      if (!isSameTag) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      // For more information on detecting circular references see https://es5.github.io/#JO.
	      stackA || (stackA = []);
	      stackB || (stackB = []);

	      var length = stackA.length;
	      while (length--) {
	        if (stackA[length] == object) {
	          return stackB[length] == other;
	        }
	      }
	      // Add `object` and `other` to the stack of traversed objects.
	      stackA.push(object);
	      stackB.push(other);

	      var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);

	      stackA.pop();
	      stackB.pop();

	      return result;
	    }

	    /**
	     * The base implementation of `_.isMatch` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} matchData The propery names, values, and compare flags to match.
	     * @param {Function} [customizer] The function to customize comparing objects.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     */
	    function baseIsMatch(object, matchData, customizer) {
	      var index = matchData.length,
	          length = index,
	          noCustomizer = !customizer;

	      if (object == null) {
	        return !length;
	      }
	      object = toObject(object);
	      while (index--) {
	        var data = matchData[index];
	        if ((noCustomizer && data[2])
	              ? data[1] !== object[data[0]]
	              : !(data[0] in object)
	            ) {
	          return false;
	        }
	      }
	      while (++index < length) {
	        data = matchData[index];
	        var key = data[0],
	            objValue = object[key],
	            srcValue = data[1];

	        if (noCustomizer && data[2]) {
	          if (objValue === undefined && !(key in object)) {
	            return false;
	          }
	        } else {
	          var result = customizer ? customizer(objValue, srcValue, key) : undefined;
	          if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
	            return false;
	          }
	        }
	      }
	      return true;
	    }

	    /**
	     * The base implementation of `_.map` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
	    function baseMap(collection, iteratee) {
	      var index = -1,
	          result = isArrayLike(collection) ? Array(collection.length) : [];

	      baseEach(collection, function(value, key, collection) {
	        result[++index] = iteratee(value, key, collection);
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.matches` which does not clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new function.
	     */
	    function baseMatches(source) {
	      var matchData = getMatchData(source);
	      if (matchData.length == 1 && matchData[0][2]) {
	        var key = matchData[0][0],
	            value = matchData[0][1];

	        return function(object) {
	          if (object == null) {
	            return false;
	          }
	          return object[key] === value && (value !== undefined || (key in toObject(object)));
	        };
	      }
	      return function(object) {
	        return baseIsMatch(object, matchData);
	      };
	    }

	    /**
	     * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
	     *
	     * @private
	     * @param {string} path The path of the property to get.
	     * @param {*} srcValue The value to compare.
	     * @returns {Function} Returns the new function.
	     */
	    function baseMatchesProperty(path, srcValue) {
	      var isArr = isArray(path),
	          isCommon = isKey(path) && isStrictComparable(srcValue),
	          pathKey = (path + '');

	      path = toPath(path);
	      return function(object) {
	        if (object == null) {
	          return false;
	        }
	        var key = pathKey;
	        object = toObject(object);
	        if ((isArr || !isCommon) && !(key in object)) {
	          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	          if (object == null) {
	            return false;
	          }
	          key = last(path);
	          object = toObject(object);
	        }
	        return object[key] === srcValue
	          ? (srcValue !== undefined || (key in object))
	          : baseIsEqual(srcValue, object[key], undefined, true);
	      };
	    }

	    /**
	     * The base implementation of `_.merge` without support for argument juggling,
	     * multiple sources, and `this` binding `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates values with source counterparts.
	     * @returns {Object} Returns `object`.
	     */
	    function baseMerge(object, source, customizer, stackA, stackB) {
	      if (!isObject(object)) {
	        return object;
	      }
	      var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
	          props = isSrcArr ? undefined : keys(source);

	      arrayEach(props || source, function(srcValue, key) {
	        if (props) {
	          key = srcValue;
	          srcValue = source[key];
	        }
	        if (isObjectLike(srcValue)) {
	          stackA || (stackA = []);
	          stackB || (stackB = []);
	          baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
	        }
	        else {
	          var value = object[key],
	              result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	              isCommon = result === undefined;

	          if (isCommon) {
	            result = srcValue;
	          }
	          if ((result !== undefined || (isSrcArr && !(key in object))) &&
	              (isCommon || (result === result ? (result !== value) : (value === value)))) {
	            object[key] = result;
	          }
	        }
	      });
	      return object;
	    }

	    /**
	     * A specialized version of `baseMerge` for arrays and objects which performs
	     * deep merges and tracks traversed objects enabling objects with circular
	     * references to be merged.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {string} key The key of the value to merge.
	     * @param {Function} mergeFunc The function to merge values.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates values with source counterparts.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
	      var length = stackA.length,
	          srcValue = source[key];

	      while (length--) {
	        if (stackA[length] == srcValue) {
	          object[key] = stackB[length];
	          return;
	        }
	      }
	      var value = object[key],
	          result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	          isCommon = result === undefined;

	      if (isCommon) {
	        result = srcValue;
	        if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
	          result = isArray(value)
	            ? value
	            : (isArrayLike(value) ? arrayCopy(value) : []);
	        }
	        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	          result = isArguments(value)
	            ? toPlainObject(value)
	            : (isPlainObject(value) ? value : {});
	        }
	        else {
	          isCommon = false;
	        }
	      }
	      // Add the source value to the stack of traversed objects and associate
	      // it with its merged value.
	      stackA.push(srcValue);
	      stackB.push(result);

	      if (isCommon) {
	        // Recursively merge objects and arrays (susceptible to call stack limits).
	        object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
	      } else if (result === result ? (result !== value) : (value === value)) {
	        object[key] = result;
	      }
	    }

	    /**
	     * The base implementation of `_.property` without support for deep paths.
	     *
	     * @private
	     * @param {string} key The key of the property to get.
	     * @returns {Function} Returns the new function.
	     */
	    function baseProperty(key) {
	      return function(object) {
	        return object == null ? undefined : object[key];
	      };
	    }

	    /**
	     * A specialized version of `baseProperty` which supports deep paths.
	     *
	     * @private
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new function.
	     */
	    function basePropertyDeep(path) {
	      var pathKey = (path + '');
	      path = toPath(path);
	      return function(object) {
	        return baseGet(object, path, pathKey);
	      };
	    }

	    /**
	     * The base implementation of `_.pullAt` without support for individual
	     * index arguments and capturing the removed elements.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {number[]} indexes The indexes of elements to remove.
	     * @returns {Array} Returns `array`.
	     */
	    function basePullAt(array, indexes) {
	      var length = array ? indexes.length : 0;
	      while (length--) {
	        var index = indexes[length];
	        if (index != previous && isIndex(index)) {
	          var previous = index;
	          splice.call(array, index, 1);
	        }
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.random` without support for argument juggling
	     * and returning floating-point numbers.
	     *
	     * @private
	     * @param {number} min The minimum possible value.
	     * @param {number} max The maximum possible value.
	     * @returns {number} Returns the random number.
	     */
	    function baseRandom(min, max) {
	      return min + nativeFloor(nativeRandom() * (max - min + 1));
	    }

	    /**
	     * The base implementation of `_.reduce` and `_.reduceRight` without support
	     * for callback shorthands and `this` binding, which iterates over `collection`
	     * using the provided `eachFunc`.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} accumulator The initial value.
	     * @param {boolean} initFromCollection Specify using the first or last element
	     *  of `collection` as the initial value.
	     * @param {Function} eachFunc The function to iterate over `collection`.
	     * @returns {*} Returns the accumulated value.
	     */
	    function baseReduce(collection, iteratee, accumulator, initFromCollection, eachFunc) {
	      eachFunc(collection, function(value, index, collection) {
	        accumulator = initFromCollection
	          ? (initFromCollection = false, value)
	          : iteratee(accumulator, value, index, collection);
	      });
	      return accumulator;
	    }

	    /**
	     * The base implementation of `setData` without support for hot loop detection.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var baseSetData = !metaMap ? identity : function(func, data) {
	      metaMap.set(func, data);
	      return func;
	    };

	    /**
	     * The base implementation of `_.slice` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseSlice(array, start, end) {
	      var index = -1,
	          length = array.length;

	      start = start == null ? 0 : (+start || 0);
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = (end === undefined || end > length) ? length : (+end || 0);
	      if (end < 0) {
	        end += length;
	      }
	      length = start > end ? 0 : ((end - start) >>> 0);
	      start >>>= 0;

	      var result = Array(length);
	      while (++index < length) {
	        result[index] = array[index + start];
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.some` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */
	    function baseSome(collection, predicate) {
	      var result;

	      baseEach(collection, function(value, index, collection) {
	        result = predicate(value, index, collection);
	        return !result;
	      });
	      return !!result;
	    }

	    /**
	     * The base implementation of `_.sortBy` which uses `comparer` to define
	     * the sort order of `array` and replaces criteria objects with their
	     * corresponding values.
	     *
	     * @private
	     * @param {Array} array The array to sort.
	     * @param {Function} comparer The function to define sort order.
	     * @returns {Array} Returns `array`.
	     */
	    function baseSortBy(array, comparer) {
	      var length = array.length;

	      array.sort(comparer);
	      while (length--) {
	        array[length] = array[length].value;
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.sortByOrder` without param guards.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {boolean[]} orders The sort orders of `iteratees`.
	     * @returns {Array} Returns the new sorted array.
	     */
	    function baseSortByOrder(collection, iteratees, orders) {
	      var callback = getCallback(),
	          index = -1;

	      iteratees = arrayMap(iteratees, function(iteratee) { return callback(iteratee); });

	      var result = baseMap(collection, function(value) {
	        var criteria = arrayMap(iteratees, function(iteratee) { return iteratee(value); });
	        return { 'criteria': criteria, 'index': ++index, 'value': value };
	      });

	      return baseSortBy(result, function(object, other) {
	        return compareMultiple(object, other, orders);
	      });
	    }

	    /**
	     * The base implementation of `_.sum` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {number} Returns the sum.
	     */
	    function baseSum(collection, iteratee) {
	      var result = 0;
	      baseEach(collection, function(value, index, collection) {
	        result += +iteratee(value, index, collection) || 0;
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.uniq` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The function invoked per iteration.
	     * @returns {Array} Returns the new duplicate-value-free array.
	     */
	    function baseUniq(array, iteratee) {
	      var index = -1,
	          indexOf = getIndexOf(),
	          length = array.length,
	          isCommon = indexOf == baseIndexOf,
	          isLarge = isCommon && length >= LARGE_ARRAY_SIZE,
	          seen = isLarge ? createCache() : null,
	          result = [];

	      if (seen) {
	        indexOf = cacheIndexOf;
	        isCommon = false;
	      } else {
	        isLarge = false;
	        seen = iteratee ? [] : result;
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index],
	            computed = iteratee ? iteratee(value, index, array) : value;

	        if (isCommon && value === value) {
	          var seenIndex = seen.length;
	          while (seenIndex--) {
	            if (seen[seenIndex] === computed) {
	              continue outer;
	            }
	          }
	          if (iteratee) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	        else if (indexOf(seen, computed, 0) < 0) {
	          if (iteratee || isLarge) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.values` and `_.valuesIn` which creates an
	     * array of `object` property values corresponding to the property names
	     * of `props`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} props The property names to get values for.
	     * @returns {Object} Returns the array of property values.
	     */
	    function baseValues(object, props) {
	      var index = -1,
	          length = props.length,
	          result = Array(length);

	      while (++index < length) {
	        result[index] = object[props[index]];
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.dropRightWhile`, `_.dropWhile`, `_.takeRightWhile`,
	     * and `_.takeWhile` without support for callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseWhile(array, predicate, isDrop, fromRight) {
	      var length = array.length,
	          index = fromRight ? length : -1;

	      while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
	      return isDrop
	        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
	        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
	    }

	    /**
	     * The base implementation of `wrapperValue` which returns the result of
	     * performing a sequence of actions on the unwrapped `value`, where each
	     * successive action is supplied the return value of the previous.
	     *
	     * @private
	     * @param {*} value The unwrapped value.
	     * @param {Array} actions Actions to peform to resolve the unwrapped value.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseWrapperValue(value, actions) {
	      var result = value;
	      if (result instanceof LazyWrapper) {
	        result = result.value();
	      }
	      var index = -1,
	          length = actions.length;

	      while (++index < length) {
	        var action = actions[index];
	        result = action.func.apply(action.thisArg, arrayPush([result], action.args));
	      }
	      return result;
	    }

	    /**
	     * Performs a binary search of `array` to determine the index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function binaryIndex(array, value, retHighest) {
	      var low = 0,
	          high = array ? array.length : low;

	      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
	        while (low < high) {
	          var mid = (low + high) >>> 1,
	              computed = array[mid];

	          if ((retHighest ? (computed <= value) : (computed < value)) && computed !== null) {
	            low = mid + 1;
	          } else {
	            high = mid;
	          }
	        }
	        return high;
	      }
	      return binaryIndexBy(array, value, identity, retHighest);
	    }

	    /**
	     * This function is like `binaryIndex` except that it invokes `iteratee` for
	     * `value` and each element of `array` to compute their sort ranking. The
	     * iteratee is invoked with one argument; (value).
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function binaryIndexBy(array, value, iteratee, retHighest) {
	      value = iteratee(value);

	      var low = 0,
	          high = array ? array.length : 0,
	          valIsNaN = value !== value,
	          valIsNull = value === null,
	          valIsUndef = value === undefined;

	      while (low < high) {
	        var mid = nativeFloor((low + high) / 2),
	            computed = iteratee(array[mid]),
	            isDef = computed !== undefined,
	            isReflexive = computed === computed;

	        if (valIsNaN) {
	          var setLow = isReflexive || retHighest;
	        } else if (valIsNull) {
	          setLow = isReflexive && isDef && (retHighest || computed != null);
	        } else if (valIsUndef) {
	          setLow = isReflexive && (retHighest || isDef);
	        } else if (computed == null) {
	          setLow = false;
	        } else {
	          setLow = retHighest ? (computed <= value) : (computed < value);
	        }
	        if (setLow) {
	          low = mid + 1;
	        } else {
	          high = mid;
	        }
	      }
	      return nativeMin(high, MAX_ARRAY_INDEX);
	    }

	    /**
	     * A specialized version of `baseCallback` which only supports `this` binding
	     * and specifying the number of arguments to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {number} [argCount] The number of arguments to provide to `func`.
	     * @returns {Function} Returns the callback.
	     */
	    function bindCallback(func, thisArg, argCount) {
	      if (typeof func != 'function') {
	        return identity;
	      }
	      if (thisArg === undefined) {
	        return func;
	      }
	      switch (argCount) {
	        case 1: return function(value) {
	          return func.call(thisArg, value);
	        };
	        case 3: return function(value, index, collection) {
	          return func.call(thisArg, value, index, collection);
	        };
	        case 4: return function(accumulator, value, index, collection) {
	          return func.call(thisArg, accumulator, value, index, collection);
	        };
	        case 5: return function(value, other, key, object, source) {
	          return func.call(thisArg, value, other, key, object, source);
	        };
	      }
	      return function() {
	        return func.apply(thisArg, arguments);
	      };
	    }

	    /**
	     * Creates a clone of the given array buffer.
	     *
	     * @private
	     * @param {ArrayBuffer} buffer The array buffer to clone.
	     * @returns {ArrayBuffer} Returns the cloned array buffer.
	     */
	    function bufferClone(buffer) {
	      var result = new ArrayBuffer(buffer.byteLength),
	          view = new Uint8Array(result);

	      view.set(new Uint8Array(buffer));
	      return result;
	    }

	    /**
	     * Creates an array that is the composition of partially applied arguments,
	     * placeholders, and provided arguments into a single array of arguments.
	     *
	     * @private
	     * @param {Array|Object} args The provided arguments.
	     * @param {Array} partials The arguments to prepend to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgs(args, partials, holders) {
	      var holdersLength = holders.length,
	          argsIndex = -1,
	          argsLength = nativeMax(args.length - holdersLength, 0),
	          leftIndex = -1,
	          leftLength = partials.length,
	          result = Array(leftLength + argsLength);

	      while (++leftIndex < leftLength) {
	        result[leftIndex] = partials[leftIndex];
	      }
	      while (++argsIndex < holdersLength) {
	        result[holders[argsIndex]] = args[argsIndex];
	      }
	      while (argsLength--) {
	        result[leftIndex++] = args[argsIndex++];
	      }
	      return result;
	    }

	    /**
	     * This function is like `composeArgs` except that the arguments composition
	     * is tailored for `_.partialRight`.
	     *
	     * @private
	     * @param {Array|Object} args The provided arguments.
	     * @param {Array} partials The arguments to append to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgsRight(args, partials, holders) {
	      var holdersIndex = -1,
	          holdersLength = holders.length,
	          argsIndex = -1,
	          argsLength = nativeMax(args.length - holdersLength, 0),
	          rightIndex = -1,
	          rightLength = partials.length,
	          result = Array(argsLength + rightLength);

	      while (++argsIndex < argsLength) {
	        result[argsIndex] = args[argsIndex];
	      }
	      var offset = argsIndex;
	      while (++rightIndex < rightLength) {
	        result[offset + rightIndex] = partials[rightIndex];
	      }
	      while (++holdersIndex < holdersLength) {
	        result[offset + holders[holdersIndex]] = args[argsIndex++];
	      }
	      return result;
	    }

	    /**
	     * Creates a `_.countBy`, `_.groupBy`, `_.indexBy`, or `_.partition` function.
	     *
	     * @private
	     * @param {Function} setter The function to set keys and values of the accumulator object.
	     * @param {Function} [initializer] The function to initialize the accumulator object.
	     * @returns {Function} Returns the new aggregator function.
	     */
	    function createAggregator(setter, initializer) {
	      return function(collection, iteratee, thisArg) {
	        var result = initializer ? initializer() : {};
	        iteratee = getCallback(iteratee, thisArg, 3);

	        if (isArray(collection)) {
	          var index = -1,
	              length = collection.length;

	          while (++index < length) {
	            var value = collection[index];
	            setter(result, value, iteratee(value, index, collection), collection);
	          }
	        } else {
	          baseEach(collection, function(value, key, collection) {
	            setter(result, value, iteratee(value, key, collection), collection);
	          });
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @returns {Function} Returns the new assigner function.
	     */
	    function createAssigner(assigner) {
	      return restParam(function(object, sources) {
	        var index = -1,
	            length = object == null ? 0 : sources.length,
	            customizer = length > 2 ? sources[length - 2] : undefined,
	            guard = length > 2 ? sources[2] : undefined,
	            thisArg = length > 1 ? sources[length - 1] : undefined;

	        if (typeof customizer == 'function') {
	          customizer = bindCallback(customizer, thisArg, 5);
	          length -= 2;
	        } else {
	          customizer = typeof thisArg == 'function' ? thisArg : undefined;
	          length -= (customizer ? 1 : 0);
	        }
	        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	          customizer = length < 3 ? undefined : customizer;
	          length = 1;
	        }
	        while (++index < length) {
	          var source = sources[index];
	          if (source) {
	            assigner(object, source, customizer);
	          }
	        }
	        return object;
	      });
	    }

	    /**
	     * Creates a `baseEach` or `baseEachRight` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseEach(eachFunc, fromRight) {
	      return function(collection, iteratee) {
	        var length = collection ? getLength(collection) : 0;
	        if (!isLength(length)) {
	          return eachFunc(collection, iteratee);
	        }
	        var index = fromRight ? length : -1,
	            iterable = toObject(collection);

	        while ((fromRight ? index-- : ++index < length)) {
	          if (iteratee(iterable[index], index, iterable) === false) {
	            break;
	          }
	        }
	        return collection;
	      };
	    }

	    /**
	     * Creates a base function for `_.forIn` or `_.forInRight`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseFor(fromRight) {
	      return function(object, iteratee, keysFunc) {
	        var iterable = toObject(object),
	            props = keysFunc(object),
	            length = props.length,
	            index = fromRight ? length : -1;

	        while ((fromRight ? index-- : ++index < length)) {
	          var key = props[index];
	          if (iteratee(iterable[key], key, iterable) === false) {
	            break;
	          }
	        }
	        return object;
	      };
	    }

	    /**
	     * Creates a function that wraps `func` and invokes it with the `this`
	     * binding of `thisArg`.
	     *
	     * @private
	     * @param {Function} func The function to bind.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @returns {Function} Returns the new bound function.
	     */
	    function createBindWrapper(func, thisArg) {
	      var Ctor = createCtorWrapper(func);

	      function wrapper() {
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return fn.apply(thisArg, arguments);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates a `Set` cache object to optimize linear searches of large arrays.
	     *
	     * @private
	     * @param {Array} [values] The values to cache.
	     * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
	     */
	    function createCache(values) {
	      return (nativeCreate && Set) ? new SetCache(values) : null;
	    }

	    /**
	     * Creates a function that produces compound words out of the words in a
	     * given string.
	     *
	     * @private
	     * @param {Function} callback The function to combine each word.
	     * @returns {Function} Returns the new compounder function.
	     */
	    function createCompounder(callback) {
	      return function(string) {
	        var index = -1,
	            array = words(deburr(string)),
	            length = array.length,
	            result = '';

	        while (++index < length) {
	          result = callback(result, array[index], index);
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates a function that produces an instance of `Ctor` regardless of
	     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	     *
	     * @private
	     * @param {Function} Ctor The constructor to wrap.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createCtorWrapper(Ctor) {
	      return function() {
	        // Use a `switch` statement to work with class constructors.
	        // See http://ecma-international.org/ecma-262/6.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
	        // for more details.
	        var args = arguments;
	        switch (args.length) {
	          case 0: return new Ctor;
	          case 1: return new Ctor(args[0]);
	          case 2: return new Ctor(args[0], args[1]);
	          case 3: return new Ctor(args[0], args[1], args[2]);
	          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
	          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
	          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
	          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
	        }
	        var thisBinding = baseCreate(Ctor.prototype),
	            result = Ctor.apply(thisBinding, args);

	        // Mimic the constructor's `return` behavior.
	        // See https://es5.github.io/#x13.2.2 for more details.
	        return isObject(result) ? result : thisBinding;
	      };
	    }

	    /**
	     * Creates a `_.curry` or `_.curryRight` function.
	     *
	     * @private
	     * @param {boolean} flag The curry bit flag.
	     * @returns {Function} Returns the new curry function.
	     */
	    function createCurry(flag) {
	      function curryFunc(func, arity, guard) {
	        if (guard && isIterateeCall(func, arity, guard)) {
	          arity = undefined;
	        }
	        var result = createWrapper(func, flag, undefined, undefined, undefined, undefined, undefined, arity);
	        result.placeholder = curryFunc.placeholder;
	        return result;
	      }
	      return curryFunc;
	    }

	    /**
	     * Creates a `_.defaults` or `_.defaultsDeep` function.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @param {Function} customizer The function to customize assigned values.
	     * @returns {Function} Returns the new defaults function.
	     */
	    function createDefaults(assigner, customizer) {
	      return restParam(function(args) {
	        var object = args[0];
	        if (object == null) {
	          return object;
	        }
	        args.push(customizer);
	        return assigner.apply(undefined, args);
	      });
	    }

	    /**
	     * Creates a `_.max` or `_.min` function.
	     *
	     * @private
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {Function} Returns the new extremum function.
	     */
	    function createExtremum(comparator, exValue) {
	      return function(collection, iteratee, thisArg) {
	        if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	          iteratee = undefined;
	        }
	        iteratee = getCallback(iteratee, thisArg, 3);
	        if (iteratee.length == 1) {
	          collection = isArray(collection) ? collection : toIterable(collection);
	          var result = arrayExtremum(collection, iteratee, comparator, exValue);
	          if (!(collection.length && result === exValue)) {
	            return result;
	          }
	        }
	        return baseExtremum(collection, iteratee, comparator, exValue);
	      };
	    }

	    /**
	     * Creates a `_.find` or `_.findLast` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFind(eachFunc, fromRight) {
	      return function(collection, predicate, thisArg) {
	        predicate = getCallback(predicate, thisArg, 3);
	        if (isArray(collection)) {
	          var index = baseFindIndex(collection, predicate, fromRight);
	          return index > -1 ? collection[index] : undefined;
	        }
	        return baseFind(collection, predicate, eachFunc);
	      };
	    }

	    /**
	     * Creates a `_.findIndex` or `_.findLastIndex` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFindIndex(fromRight) {
	      return function(array, predicate, thisArg) {
	        if (!(array && array.length)) {
	          return -1;
	        }
	        predicate = getCallback(predicate, thisArg, 3);
	        return baseFindIndex(array, predicate, fromRight);
	      };
	    }

	    /**
	     * Creates a `_.findKey` or `_.findLastKey` function.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFindKey(objectFunc) {
	      return function(object, predicate, thisArg) {
	        predicate = getCallback(predicate, thisArg, 3);
	        return baseFind(object, predicate, objectFunc, true);
	      };
	    }

	    /**
	     * Creates a `_.flow` or `_.flowRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new flow function.
	     */
	    function createFlow(fromRight) {
	      return function() {
	        var wrapper,
	            length = arguments.length,
	            index = fromRight ? length : -1,
	            leftIndex = 0,
	            funcs = Array(length);

	        while ((fromRight ? index-- : ++index < length)) {
	          var func = funcs[leftIndex++] = arguments[index];
	          if (typeof func != 'function') {
	            throw new TypeError(FUNC_ERROR_TEXT);
	          }
	          if (!wrapper && LodashWrapper.prototype.thru && getFuncName(func) == 'wrapper') {
	            wrapper = new LodashWrapper([], true);
	          }
	        }
	        index = wrapper ? -1 : length;
	        while (++index < length) {
	          func = funcs[index];

	          var funcName = getFuncName(func),
	              data = funcName == 'wrapper' ? getData(func) : undefined;

	          if (data && isLaziable(data[0]) && data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) && !data[4].length && data[9] == 1) {
	            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
	          } else {
	            wrapper = (func.length == 1 && isLaziable(func)) ? wrapper[funcName]() : wrapper.thru(func);
	          }
	        }
	        return function() {
	          var args = arguments,
	              value = args[0];

	          if (wrapper && args.length == 1 && isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
	            return wrapper.plant(value).value();
	          }
	          var index = 0,
	              result = length ? funcs[index].apply(this, args) : value;

	          while (++index < length) {
	            result = funcs[index].call(this, result);
	          }
	          return result;
	        };
	      };
	    }

	    /**
	     * Creates a function for `_.forEach` or `_.forEachRight`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over an array.
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForEach(arrayFunc, eachFunc) {
	      return function(collection, iteratee, thisArg) {
	        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	          ? arrayFunc(collection, iteratee)
	          : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
	      };
	    }

	    /**
	     * Creates a function for `_.forIn` or `_.forInRight`.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForIn(objectFunc) {
	      return function(object, iteratee, thisArg) {
	        if (typeof iteratee != 'function' || thisArg !== undefined) {
	          iteratee = bindCallback(iteratee, thisArg, 3);
	        }
	        return objectFunc(object, iteratee, keysIn);
	      };
	    }

	    /**
	     * Creates a function for `_.forOwn` or `_.forOwnRight`.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForOwn(objectFunc) {
	      return function(object, iteratee, thisArg) {
	        if (typeof iteratee != 'function' || thisArg !== undefined) {
	          iteratee = bindCallback(iteratee, thisArg, 3);
	        }
	        return objectFunc(object, iteratee);
	      };
	    }

	    /**
	     * Creates a function for `_.mapKeys` or `_.mapValues`.
	     *
	     * @private
	     * @param {boolean} [isMapKeys] Specify mapping keys instead of values.
	     * @returns {Function} Returns the new map function.
	     */
	    function createObjectMapper(isMapKeys) {
	      return function(object, iteratee, thisArg) {
	        var result = {};
	        iteratee = getCallback(iteratee, thisArg, 3);

	        baseForOwn(object, function(value, key, object) {
	          var mapped = iteratee(value, key, object);
	          key = isMapKeys ? mapped : key;
	          value = isMapKeys ? value : mapped;
	          result[key] = value;
	        });
	        return result;
	      };
	    }

	    /**
	     * Creates a function for `_.padLeft` or `_.padRight`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify padding from the right.
	     * @returns {Function} Returns the new pad function.
	     */
	    function createPadDir(fromRight) {
	      return function(string, length, chars) {
	        string = baseToString(string);
	        return (fromRight ? string : '') + createPadding(string, length, chars) + (fromRight ? '' : string);
	      };
	    }

	    /**
	     * Creates a `_.partial` or `_.partialRight` function.
	     *
	     * @private
	     * @param {boolean} flag The partial bit flag.
	     * @returns {Function} Returns the new partial function.
	     */
	    function createPartial(flag) {
	      var partialFunc = restParam(function(func, partials) {
	        var holders = replaceHolders(partials, partialFunc.placeholder);
	        return createWrapper(func, flag, undefined, partials, holders);
	      });
	      return partialFunc;
	    }

	    /**
	     * Creates a function for `_.reduce` or `_.reduceRight`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over an array.
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @returns {Function} Returns the new each function.
	     */
	    function createReduce(arrayFunc, eachFunc) {
	      return function(collection, iteratee, accumulator, thisArg) {
	        var initFromArray = arguments.length < 3;
	        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	          ? arrayFunc(collection, iteratee, accumulator, initFromArray)
	          : baseReduce(collection, getCallback(iteratee, thisArg, 4), accumulator, initFromArray, eachFunc);
	      };
	    }

	    /**
	     * Creates a function that wraps `func` and invokes it with optional `this`
	     * binding of, partial application, and currying.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to reference.
	     * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [partialsRight] The arguments to append to those provided to the new function.
	     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
	      var isAry = bitmask & ARY_FLAG,
	          isBind = bitmask & BIND_FLAG,
	          isBindKey = bitmask & BIND_KEY_FLAG,
	          isCurry = bitmask & CURRY_FLAG,
	          isCurryBound = bitmask & CURRY_BOUND_FLAG,
	          isCurryRight = bitmask & CURRY_RIGHT_FLAG,
	          Ctor = isBindKey ? undefined : createCtorWrapper(func);

	      function wrapper() {
	        // Avoid `arguments` object use disqualifying optimizations by
	        // converting it to an array before providing it to other functions.
	        var length = arguments.length,
	            index = length,
	            args = Array(length);

	        while (index--) {
	          args[index] = arguments[index];
	        }
	        if (partials) {
	          args = composeArgs(args, partials, holders);
	        }
	        if (partialsRight) {
	          args = composeArgsRight(args, partialsRight, holdersRight);
	        }
	        if (isCurry || isCurryRight) {
	          var placeholder = wrapper.placeholder,
	              argsHolders = replaceHolders(args, placeholder);

	          length -= argsHolders.length;
	          if (length < arity) {
	            var newArgPos = argPos ? arrayCopy(argPos) : undefined,
	                newArity = nativeMax(arity - length, 0),
	                newsHolders = isCurry ? argsHolders : undefined,
	                newHoldersRight = isCurry ? undefined : argsHolders,
	                newPartials = isCurry ? args : undefined,
	                newPartialsRight = isCurry ? undefined : args;

	            bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
	            bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

	            if (!isCurryBound) {
	              bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
	            }
	            var newData = [func, bitmask, thisArg, newPartials, newsHolders, newPartialsRight, newHoldersRight, newArgPos, ary, newArity],
	                result = createHybridWrapper.apply(undefined, newData);

	            if (isLaziable(func)) {
	              setData(result, newData);
	            }
	            result.placeholder = placeholder;
	            return result;
	          }
	        }
	        var thisBinding = isBind ? thisArg : this,
	            fn = isBindKey ? thisBinding[func] : func;

	        if (argPos) {
	          args = reorder(args, argPos);
	        }
	        if (isAry && ary < args.length) {
	          args.length = ary;
	        }
	        if (this && this !== root && this instanceof wrapper) {
	          fn = Ctor || createCtorWrapper(func);
	        }
	        return fn.apply(thisBinding, args);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates the padding required for `string` based on the given `length`.
	     * The `chars` string is truncated if the number of characters exceeds `length`.
	     *
	     * @private
	     * @param {string} string The string to create padding for.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the pad for `string`.
	     */
	    function createPadding(string, length, chars) {
	      var strLength = string.length;
	      length = +length;

	      if (strLength >= length || !nativeIsFinite(length)) {
	        return '';
	      }
	      var padLength = length - strLength;
	      chars = chars == null ? ' ' : (chars + '');
	      return repeat(chars, nativeCeil(padLength / chars.length)).slice(0, padLength);
	    }

	    /**
	     * Creates a function that wraps `func` and invokes it with the optional `this`
	     * binding of `thisArg` and the `partials` prepended to those provided to
	     * the wrapper.
	     *
	     * @private
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {Array} partials The arguments to prepend to those provided to the new function.
	     * @returns {Function} Returns the new bound function.
	     */
	    function createPartialWrapper(func, bitmask, thisArg, partials) {
	      var isBind = bitmask & BIND_FLAG,
	          Ctor = createCtorWrapper(func);

	      function wrapper() {
	        // Avoid `arguments` object use disqualifying optimizations by
	        // converting it to an array before providing it `func`.
	        var argsIndex = -1,
	            argsLength = arguments.length,
	            leftIndex = -1,
	            leftLength = partials.length,
	            args = Array(leftLength + argsLength);

	        while (++leftIndex < leftLength) {
	          args[leftIndex] = partials[leftIndex];
	        }
	        while (argsLength--) {
	          args[leftIndex++] = arguments[++argsIndex];
	        }
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return fn.apply(isBind ? thisArg : this, args);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates a `_.ceil`, `_.floor`, or `_.round` function.
	     *
	     * @private
	     * @param {string} methodName The name of the `Math` method to use when rounding.
	     * @returns {Function} Returns the new round function.
	     */
	    function createRound(methodName) {
	      var func = Math[methodName];
	      return function(number, precision) {
	        precision = precision === undefined ? 0 : (+precision || 0);
	        if (precision) {
	          precision = pow(10, precision);
	          return func(number * precision) / precision;
	        }
	        return func(number);
	      };
	    }

	    /**
	     * Creates a `_.sortedIndex` or `_.sortedLastIndex` function.
	     *
	     * @private
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {Function} Returns the new index function.
	     */
	    function createSortedIndex(retHighest) {
	      return function(array, value, iteratee, thisArg) {
	        var callback = getCallback(iteratee);
	        return (iteratee == null && callback === baseCallback)
	          ? binaryIndex(array, value, retHighest)
	          : binaryIndexBy(array, value, callback(iteratee, thisArg, 1), retHighest);
	      };
	    }

	    /**
	     * Creates a function that either curries or invokes `func` with optional
	     * `this` binding and partially applied arguments.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to reference.
	     * @param {number} bitmask The bitmask of flags.
	     *  The bitmask may be composed of the following flags:
	     *     1 - `_.bind`
	     *     2 - `_.bindKey`
	     *     4 - `_.curry` or `_.curryRight` of a bound function
	     *     8 - `_.curry`
	     *    16 - `_.curryRight`
	     *    32 - `_.partial`
	     *    64 - `_.partialRight`
	     *   128 - `_.rearg`
	     *   256 - `_.ary`
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to be partially applied.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
	      var isBindKey = bitmask & BIND_KEY_FLAG;
	      if (!isBindKey && typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var length = partials ? partials.length : 0;
	      if (!length) {
	        bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
	        partials = holders = undefined;
	      }
	      length -= (holders ? holders.length : 0);
	      if (bitmask & PARTIAL_RIGHT_FLAG) {
	        var partialsRight = partials,
	            holdersRight = holders;

	        partials = holders = undefined;
	      }
	      var data = isBindKey ? undefined : getData(func),
	          newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];

	      if (data) {
	        mergeData(newData, data);
	        bitmask = newData[1];
	        arity = newData[9];
	      }
	      newData[9] = arity == null
	        ? (isBindKey ? 0 : func.length)
	        : (nativeMax(arity - length, 0) || 0);

	      if (bitmask == BIND_FLAG) {
	        var result = createBindWrapper(newData[0], newData[2]);
	      } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !newData[4].length) {
	        result = createPartialWrapper.apply(undefined, newData);
	      } else {
	        result = createHybridWrapper.apply(undefined, newData);
	      }
	      var setter = data ? baseSetData : setData;
	      return setter(result, newData);
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for arrays with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Array} array The array to compare.
	     * @param {Array} other The other array to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing arrays.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	     */
	    function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var index = -1,
	          arrLength = array.length,
	          othLength = other.length;

	      if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	        return false;
	      }
	      // Ignore non-index properties.
	      while (++index < arrLength) {
	        var arrValue = array[index],
	            othValue = other[index],
	            result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;

	        if (result !== undefined) {
	          if (result) {
	            continue;
	          }
	          return false;
	        }
	        // Recursively compare arrays (susceptible to call stack limits).
	        if (isLoose) {
	          if (!arraySome(other, function(othValue) {
	                return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	              })) {
	            return false;
	          }
	        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	          return false;
	        }
	      }
	      return true;
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for comparing objects of
	     * the same `toStringTag`.
	     *
	     * **Note:** This function only supports comparing values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {string} tag The `toStringTag` of the objects to compare.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalByTag(object, other, tag) {
	      switch (tag) {
	        case boolTag:
	        case dateTag:
	          // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	          // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	          return +object == +other;

	        case errorTag:
	          return object.name == other.name && object.message == other.message;

	        case numberTag:
	          // Treat `NaN` vs. `NaN` as equal.
	          return (object != +object)
	            ? other != +other
	            : object == +other;

	        case regexpTag:
	        case stringTag:
	          // Coerce regexes to strings and treat strings primitives and string
	          // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	          return object == (other + '');
	      }
	      return false;
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for objects with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing values.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var objProps = keys(object),
	          objLength = objProps.length,
	          othProps = keys(other),
	          othLength = othProps.length;

	      if (objLength != othLength && !isLoose) {
	        return false;
	      }
	      var index = objLength;
	      while (index--) {
	        var key = objProps[index];
	        if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	          return false;
	        }
	      }
	      var skipCtor = isLoose;
	      while (++index < objLength) {
	        key = objProps[index];
	        var objValue = object[key],
	            othValue = other[key],
	            result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;

	        // Recursively compare objects (susceptible to call stack limits).
	        if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	          return false;
	        }
	        skipCtor || (skipCtor = key == 'constructor');
	      }
	      if (!skipCtor) {
	        var objCtor = object.constructor,
	            othCtor = other.constructor;

	        // Non `Object` object instances with different constructors are not equal.
	        if (objCtor != othCtor &&
	            ('constructor' in object && 'constructor' in other) &&
	            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	          return false;
	        }
	      }
	      return true;
	    }

	    /**
	     * Gets the appropriate "callback" function. If the `_.callback` method is
	     * customized this function returns the custom method, otherwise it returns
	     * the `baseCallback` function. If arguments are provided the chosen function
	     * is invoked with them and its result is returned.
	     *
	     * @private
	     * @returns {Function} Returns the chosen function or its result.
	     */
	    function getCallback(func, thisArg, argCount) {
	      var result = lodash.callback || callback;
	      result = result === callback ? baseCallback : result;
	      return argCount ? result(func, thisArg, argCount) : result;
	    }

	    /**
	     * Gets metadata for `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {*} Returns the metadata for `func`.
	     */
	    var getData = !metaMap ? noop : function(func) {
	      return metaMap.get(func);
	    };

	    /**
	     * Gets the name of `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {string} Returns the function name.
	     */
	    function getFuncName(func) {
	      var result = func.name,
	          array = realNames[result],
	          length = array ? array.length : 0;

	      while (length--) {
	        var data = array[length],
	            otherFunc = data.func;
	        if (otherFunc == null || otherFunc == func) {
	          return data.name;
	        }
	      }
	      return result;
	    }

	    /**
	     * Gets the appropriate "indexOf" function. If the `_.indexOf` method is
	     * customized this function returns the custom method, otherwise it returns
	     * the `baseIndexOf` function. If arguments are provided the chosen function
	     * is invoked with them and its result is returned.
	     *
	     * @private
	     * @returns {Function|number} Returns the chosen function or its result.
	     */
	    function getIndexOf(collection, target, fromIndex) {
	      var result = lodash.indexOf || indexOf;
	      result = result === indexOf ? baseIndexOf : result;
	      return collection ? result(collection, target, fromIndex) : result;
	    }

	    /**
	     * Gets the "length" property value of `object`.
	     *
	     * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	     * that affects Safari on at least iOS 8.1-8.3 ARM64.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {*} Returns the "length" value.
	     */
	    var getLength = baseProperty('length');

	    /**
	     * Gets the propery names, values, and compare flags of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the match data of `object`.
	     */
	    function getMatchData(object) {
	      var result = pairs(object),
	          length = result.length;

	      while (length--) {
	        result[length][2] = isStrictComparable(result[length][1]);
	      }
	      return result;
	    }

	    /**
	     * Gets the native function at `key` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {string} key The key of the method to get.
	     * @returns {*} Returns the function if it's native, else `undefined`.
	     */
	    function getNative(object, key) {
	      var value = object == null ? undefined : object[key];
	      return isNative(value) ? value : undefined;
	    }

	    /**
	     * Gets the view, applying any `transforms` to the `start` and `end` positions.
	     *
	     * @private
	     * @param {number} start The start of the view.
	     * @param {number} end The end of the view.
	     * @param {Array} transforms The transformations to apply to the view.
	     * @returns {Object} Returns an object containing the `start` and `end`
	     *  positions of the view.
	     */
	    function getView(start, end, transforms) {
	      var index = -1,
	          length = transforms.length;

	      while (++index < length) {
	        var data = transforms[index],
	            size = data.size;

	        switch (data.type) {
	          case 'drop':      start += size; break;
	          case 'dropRight': end -= size; break;
	          case 'take':      end = nativeMin(end, start + size); break;
	          case 'takeRight': start = nativeMax(start, end - size); break;
	        }
	      }
	      return { 'start': start, 'end': end };
	    }

	    /**
	     * Initializes an array clone.
	     *
	     * @private
	     * @param {Array} array The array to clone.
	     * @returns {Array} Returns the initialized clone.
	     */
	    function initCloneArray(array) {
	      var length = array.length,
	          result = new array.constructor(length);

	      // Add array properties assigned by `RegExp#exec`.
	      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	        result.index = array.index;
	        result.input = array.input;
	      }
	      return result;
	    }

	    /**
	     * Initializes an object clone.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneObject(object) {
	      var Ctor = object.constructor;
	      if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
	        Ctor = Object;
	      }
	      return new Ctor;
	    }

	    /**
	     * Initializes an object clone based on its `toStringTag`.
	     *
	     * **Note:** This function only supports cloning values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @param {string} tag The `toStringTag` of the object to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneByTag(object, tag, isDeep) {
	      var Ctor = object.constructor;
	      switch (tag) {
	        case arrayBufferTag:
	          return bufferClone(object);

	        case boolTag:
	        case dateTag:
	          return new Ctor(+object);

	        case float32Tag: case float64Tag:
	        case int8Tag: case int16Tag: case int32Tag:
	        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	          var buffer = object.buffer;
	          return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);

	        case numberTag:
	        case stringTag:
	          return new Ctor(object);

	        case regexpTag:
	          var result = new Ctor(object.source, reFlags.exec(object));
	          result.lastIndex = object.lastIndex;
	      }
	      return result;
	    }

	    /**
	     * Invokes the method at `path` on `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {Array} args The arguments to invoke the method with.
	     * @returns {*} Returns the result of the invoked method.
	     */
	    function invokePath(object, path, args) {
	      if (object != null && !isKey(path, object)) {
	        path = toPath(path);
	        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	        path = last(path);
	      }
	      var func = object == null ? object : object[path];
	      return func == null ? undefined : func.apply(object, args);
	    }

	    /**
	     * Checks if `value` is array-like.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	     */
	    function isArrayLike(value) {
	      return value != null && isLength(getLength(value));
	    }

	    /**
	     * Checks if `value` is a valid array-like index.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	     */
	    function isIndex(value, length) {
	      value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	      length = length == null ? MAX_SAFE_INTEGER : length;
	      return value > -1 && value % 1 == 0 && value < length;
	    }

	    /**
	     * Checks if the provided arguments are from an iteratee call.
	     *
	     * @private
	     * @param {*} value The potential iteratee value argument.
	     * @param {*} index The potential iteratee index or key argument.
	     * @param {*} object The potential iteratee object argument.
	     * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	     */
	    function isIterateeCall(value, index, object) {
	      if (!isObject(object)) {
	        return false;
	      }
	      var type = typeof index;
	      if (type == 'number'
	          ? (isArrayLike(object) && isIndex(index, object.length))
	          : (type == 'string' && index in object)) {
	        var other = object[index];
	        return value === value ? (value === other) : (other !== other);
	      }
	      return false;
	    }

	    /**
	     * Checks if `value` is a property name and not a property path.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {Object} [object] The object to query keys on.
	     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	     */
	    function isKey(value, object) {
	      var type = typeof value;
	      if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
	        return true;
	      }
	      if (isArray(value)) {
	        return false;
	      }
	      var result = !reIsDeepProp.test(value);
	      return result || (object != null && value in toObject(object));
	    }

	    /**
	     * Checks if `func` has a lazy counterpart.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` has a lazy counterpart, else `false`.
	     */
	    function isLaziable(func) {
	      var funcName = getFuncName(func);
	      if (!(funcName in LazyWrapper.prototype)) {
	        return false;
	      }
	      var other = lodash[funcName];
	      if (func === other) {
	        return true;
	      }
	      var data = getData(other);
	      return !!data && func === data[0];
	    }

	    /**
	     * Checks if `value` is a valid array-like length.
	     *
	     * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	     */
	    function isLength(value) {
	      return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	    }

	    /**
	     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` if suitable for strict
	     *  equality comparisons, else `false`.
	     */
	    function isStrictComparable(value) {
	      return value === value && !isObject(value);
	    }

	    /**
	     * Merges the function metadata of `source` into `data`.
	     *
	     * Merging metadata reduces the number of wrappers required to invoke a function.
	     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	     * may be applied regardless of execution order. Methods like `_.ary` and `_.rearg`
	     * augment function arguments, making the order in which they are executed important,
	     * preventing the merging of metadata. However, we make an exception for a safe
	     * common case where curried functions have `_.ary` and or `_.rearg` applied.
	     *
	     * @private
	     * @param {Array} data The destination metadata.
	     * @param {Array} source The source metadata.
	     * @returns {Array} Returns `data`.
	     */
	    function mergeData(data, source) {
	      var bitmask = data[1],
	          srcBitmask = source[1],
	          newBitmask = bitmask | srcBitmask,
	          isCommon = newBitmask < ARY_FLAG;

	      var isCombo =
	        (srcBitmask == ARY_FLAG && bitmask == CURRY_FLAG) ||
	        (srcBitmask == ARY_FLAG && bitmask == REARG_FLAG && data[7].length <= source[8]) ||
	        (srcBitmask == (ARY_FLAG | REARG_FLAG) && bitmask == CURRY_FLAG);

	      // Exit early if metadata can't be merged.
	      if (!(isCommon || isCombo)) {
	        return data;
	      }
	      // Use source `thisArg` if available.
	      if (srcBitmask & BIND_FLAG) {
	        data[2] = source[2];
	        // Set when currying a bound function.
	        newBitmask |= (bitmask & BIND_FLAG) ? 0 : CURRY_BOUND_FLAG;
	      }
	      // Compose partial arguments.
	      var value = source[3];
	      if (value) {
	        var partials = data[3];
	        data[3] = partials ? composeArgs(partials, value, source[4]) : arrayCopy(value);
	        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : arrayCopy(source[4]);
	      }
	      // Compose partial right arguments.
	      value = source[5];
	      if (value) {
	        partials = data[5];
	        data[5] = partials ? composeArgsRight(partials, value, source[6]) : arrayCopy(value);
	        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : arrayCopy(source[6]);
	      }
	      // Use source `argPos` if available.
	      value = source[7];
	      if (value) {
	        data[7] = arrayCopy(value);
	      }
	      // Use source `ary` if it's smaller.
	      if (srcBitmask & ARY_FLAG) {
	        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
	      }
	      // Use source `arity` if one is not provided.
	      if (data[9] == null) {
	        data[9] = source[9];
	      }
	      // Use source `func` and merge bitmasks.
	      data[0] = source[0];
	      data[1] = newBitmask;

	      return data;
	    }

	    /**
	     * Used by `_.defaultsDeep` to customize its `_.merge` use.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function mergeDefaults(objectValue, sourceValue) {
	      return objectValue === undefined ? sourceValue : merge(objectValue, sourceValue, mergeDefaults);
	    }

	    /**
	     * A specialized version of `_.pick` which picks `object` properties specified
	     * by `props`.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} props The property names to pick.
	     * @returns {Object} Returns the new object.
	     */
	    function pickByArray(object, props) {
	      object = toObject(object);

	      var index = -1,
	          length = props.length,
	          result = {};

	      while (++index < length) {
	        var key = props[index];
	        if (key in object) {
	          result[key] = object[key];
	        }
	      }
	      return result;
	    }

	    /**
	     * A specialized version of `_.pick` which picks `object` properties `predicate`
	     * returns truthy for.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Object} Returns the new object.
	     */
	    function pickByCallback(object, predicate) {
	      var result = {};
	      baseForIn(object, function(value, key, object) {
	        if (predicate(value, key, object)) {
	          result[key] = value;
	        }
	      });
	      return result;
	    }

	    /**
	     * Reorder `array` according to the specified indexes where the element at
	     * the first index is assigned as the first element, the element at
	     * the second index is assigned as the second element, and so on.
	     *
	     * @private
	     * @param {Array} array The array to reorder.
	     * @param {Array} indexes The arranged array indexes.
	     * @returns {Array} Returns `array`.
	     */
	    function reorder(array, indexes) {
	      var arrLength = array.length,
	          length = nativeMin(indexes.length, arrLength),
	          oldArray = arrayCopy(array);

	      while (length--) {
	        var index = indexes[length];
	        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
	      }
	      return array;
	    }

	    /**
	     * Sets metadata for `func`.
	     *
	     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
	     * period of time, it will trip its breaker and transition to an identity function
	     * to avoid garbage collection pauses in V8. See [V8 issue 2070](https://code.google.com/p/v8/issues/detail?id=2070)
	     * for more details.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var setData = (function() {
	      var count = 0,
	          lastCalled = 0;

	      return function(key, value) {
	        var stamp = now(),
	            remaining = HOT_SPAN - (stamp - lastCalled);

	        lastCalled = stamp;
	        if (remaining > 0) {
	          if (++count >= HOT_COUNT) {
	            return key;
	          }
	        } else {
	          count = 0;
	        }
	        return baseSetData(key, value);
	      };
	    }());

	    /**
	     * A fallback implementation of `Object.keys` which creates an array of the
	     * own enumerable property names of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */
	    function shimKeys(object) {
	      var props = keysIn(object),
	          propsLength = props.length,
	          length = propsLength && object.length;

	      var allowIndexes = !!length && isLength(length) &&
	        (isArray(object) || isArguments(object));

	      var index = -1,
	          result = [];

	      while (++index < propsLength) {
	        var key = props[index];
	        if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	          result.push(key);
	        }
	      }
	      return result;
	    }

	    /**
	     * Converts `value` to an array-like object if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Array|Object} Returns the array-like object.
	     */
	    function toIterable(value) {
	      if (value == null) {
	        return [];
	      }
	      if (!isArrayLike(value)) {
	        return values(value);
	      }
	      return isObject(value) ? value : Object(value);
	    }

	    /**
	     * Converts `value` to an object if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Object} Returns the object.
	     */
	    function toObject(value) {
	      return isObject(value) ? value : Object(value);
	    }

	    /**
	     * Converts `value` to property path array if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Array} Returns the property path array.
	     */
	    function toPath(value) {
	      if (isArray(value)) {
	        return value;
	      }
	      var result = [];
	      baseToString(value).replace(rePropName, function(match, number, quote, string) {
	        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	      });
	      return result;
	    }

	    /**
	     * Creates a clone of `wrapper`.
	     *
	     * @private
	     * @param {Object} wrapper The wrapper to clone.
	     * @returns {Object} Returns the cloned wrapper.
	     */
	    function wrapperClone(wrapper) {
	      return wrapper instanceof LazyWrapper
	        ? wrapper.clone()
	        : new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__, arrayCopy(wrapper.__actions__));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates an array of elements split into groups the length of `size`.
	     * If `collection` can't be split evenly, the final chunk will be the remaining
	     * elements.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to process.
	     * @param {number} [size=1] The length of each chunk.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the new array containing chunks.
	     * @example
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 2);
	     * // => [['a', 'b'], ['c', 'd']]
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 3);
	     * // => [['a', 'b', 'c'], ['d']]
	     */
	    function chunk(array, size, guard) {
	      if (guard ? isIterateeCall(array, size, guard) : size == null) {
	        size = 1;
	      } else {
	        size = nativeMax(nativeFloor(size) || 1, 1);
	      }
	      var index = 0,
	          length = array ? array.length : 0,
	          resIndex = -1,
	          result = Array(nativeCeil(length / size));

	      while (index < length) {
	        result[++resIndex] = baseSlice(array, index, (index += size));
	      }
	      return result;
	    }

	    /**
	     * Creates an array with all falsey values removed. The values `false`, `null`,
	     * `0`, `""`, `undefined`, and `NaN` are falsey.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to compact.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.compact([0, 1, false, 2, '', 3]);
	     * // => [1, 2, 3]
	     */
	    function compact(array) {
	      var index = -1,
	          length = array ? array.length : 0,
	          resIndex = -1,
	          result = [];

	      while (++index < length) {
	        var value = array[index];
	        if (value) {
	          result[++resIndex] = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * Creates an array of unique `array` values not included in the other
	     * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The arrays of values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.difference([1, 2, 3], [4, 2]);
	     * // => [1, 3]
	     */
	    var difference = restParam(function(array, values) {
	      return (isObjectLike(array) && isArrayLike(array))
	        ? baseDifference(array, baseFlatten(values, false, true))
	        : [];
	    });

	    /**
	     * Creates a slice of `array` with `n` elements dropped from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.drop([1, 2, 3]);
	     * // => [2, 3]
	     *
	     * _.drop([1, 2, 3], 2);
	     * // => [3]
	     *
	     * _.drop([1, 2, 3], 5);
	     * // => []
	     *
	     * _.drop([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function drop(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      return baseSlice(array, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` with `n` elements dropped from the end.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRight([1, 2, 3]);
	     * // => [1, 2]
	     *
	     * _.dropRight([1, 2, 3], 2);
	     * // => [1]
	     *
	     * _.dropRight([1, 2, 3], 5);
	     * // => []
	     *
	     * _.dropRight([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function dropRight(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      n = length - (+n || 0);
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` excluding elements dropped from the end.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that match the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRightWhile([1, 2, 3], function(n) {
	     *   return n > 1;
	     * });
	     * // => [1]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
	     * // => ['barney', 'fred']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.dropRightWhile(users, 'active', false), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.dropRightWhile(users, 'active'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function dropRightWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), true, true)
	        : [];
	    }

	    /**
	     * Creates a slice of `array` excluding elements dropped from the beginning.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropWhile([1, 2, 3], function(n) {
	     *   return n < 3;
	     * });
	     * // => [3]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.dropWhile(users, { 'user': 'barney', 'active': false }), 'user');
	     * // => ['fred', 'pebbles']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.dropWhile(users, 'active', false), 'user');
	     * // => ['pebbles']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.dropWhile(users, 'active'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function dropWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), true)
	        : [];
	    }

	    /**
	     * Fills elements of `array` with `value` from `start` up to, but not
	     * including, `end`.
	     *
	     * **Note:** This method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.fill(array, 'a');
	     * console.log(array);
	     * // => ['a', 'a', 'a']
	     *
	     * _.fill(Array(3), 2);
	     * // => [2, 2, 2]
	     *
	     * _.fill([4, 6, 8], '*', 1, 2);
	     * // => [4, '*', 8]
	     */
	    function fill(array, value, start, end) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
	        start = 0;
	        end = length;
	      }
	      return baseFill(array, value, start, end);
	    }

	    /**
	     * This method is like `_.find` except that it returns the index of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.findIndex(users, function(chr) {
	     *   return chr.user == 'barney';
	     * });
	     * // => 0
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findIndex(users, { 'user': 'fred', 'active': false });
	     * // => 1
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findIndex(users, 'active', false);
	     * // => 0
	     *
	     * // using the `_.property` callback shorthand
	     * _.findIndex(users, 'active');
	     * // => 2
	     */
	    var findIndex = createFindIndex();

	    /**
	     * This method is like `_.findIndex` except that it iterates over elements
	     * of `collection` from right to left.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.findLastIndex(users, function(chr) {
	     *   return chr.user == 'pebbles';
	     * });
	     * // => 2
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
	     * // => 0
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findLastIndex(users, 'active', false);
	     * // => 2
	     *
	     * // using the `_.property` callback shorthand
	     * _.findLastIndex(users, 'active');
	     * // => 0
	     */
	    var findLastIndex = createFindIndex(true);

	    /**
	     * Gets the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @alias head
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the first element of `array`.
	     * @example
	     *
	     * _.first([1, 2, 3]);
	     * // => 1
	     *
	     * _.first([]);
	     * // => undefined
	     */
	    function first(array) {
	      return array ? array[0] : undefined;
	    }

	    /**
	     * Flattens a nested array. If `isDeep` is `true` the array is recursively
	     * flattened, otherwise it is only flattened a single level.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @param {boolean} [isDeep] Specify a deep flatten.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flatten([1, [2, 3, [4]]]);
	     * // => [1, 2, 3, [4]]
	     *
	     * // using `isDeep`
	     * _.flatten([1, [2, 3, [4]]], true);
	     * // => [1, 2, 3, 4]
	     */
	    function flatten(array, isDeep, guard) {
	      var length = array ? array.length : 0;
	      if (guard && isIterateeCall(array, isDeep, guard)) {
	        isDeep = false;
	      }
	      return length ? baseFlatten(array, isDeep) : [];
	    }

	    /**
	     * Recursively flattens a nested array.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to recursively flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flattenDeep([1, [2, 3, [4]]]);
	     * // => [1, 2, 3, 4]
	     */
	    function flattenDeep(array) {
	      var length = array ? array.length : 0;
	      return length ? baseFlatten(array, true) : [];
	    }

	    /**
	     * Gets the index at which the first occurrence of `value` is found in `array`
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it is used as the offset
	     * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
	     * performs a faster binary search.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {*} value The value to search for.
	     * @param {boolean|number} [fromIndex=0] The index to search from or `true`
	     *  to perform a binary search on a sorted array.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.indexOf([1, 2, 1, 2], 2);
	     * // => 1
	     *
	     * // using `fromIndex`
	     * _.indexOf([1, 2, 1, 2], 2, 2);
	     * // => 3
	     *
	     * // performing a binary search
	     * _.indexOf([1, 1, 2, 2], 2, true);
	     * // => 2
	     */
	    function indexOf(array, value, fromIndex) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return -1;
	      }
	      if (typeof fromIndex == 'number') {
	        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex;
	      } else if (fromIndex) {
	        var index = binaryIndex(array, value);
	        if (index < length &&
	            (value === value ? (value === array[index]) : (array[index] !== array[index]))) {
	          return index;
	        }
	        return -1;
	      }
	      return baseIndexOf(array, value, fromIndex || 0);
	    }

	    /**
	     * Gets all but the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.initial([1, 2, 3]);
	     * // => [1, 2]
	     */
	    function initial(array) {
	      return dropRight(array, 1);
	    }

	    /**
	     * Creates an array of unique values that are included in all of the provided
	     * arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of shared values.
	     * @example
	     * _.intersection([1, 2], [4, 2], [2, 1]);
	     * // => [2]
	     */
	    var intersection = restParam(function(arrays) {
	      var othLength = arrays.length,
	          othIndex = othLength,
	          caches = Array(length),
	          indexOf = getIndexOf(),
	          isCommon = indexOf == baseIndexOf,
	          result = [];

	      while (othIndex--) {
	        var value = arrays[othIndex] = isArrayLike(value = arrays[othIndex]) ? value : [];
	        caches[othIndex] = (isCommon && value.length >= 120) ? createCache(othIndex && value) : null;
	      }
	      var array = arrays[0],
	          index = -1,
	          length = array ? array.length : 0,
	          seen = caches[0];

	      outer:
	      while (++index < length) {
	        value = array[index];
	        if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
	          var othIndex = othLength;
	          while (--othIndex) {
	            var cache = caches[othIndex];
	            if ((cache ? cacheIndexOf(cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
	              continue outer;
	            }
	          }
	          if (seen) {
	            seen.push(value);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    });

	    /**
	     * Gets the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the last element of `array`.
	     * @example
	     *
	     * _.last([1, 2, 3]);
	     * // => 3
	     */
	    function last(array) {
	      var length = array ? array.length : 0;
	      return length ? array[length - 1] : undefined;
	    }

	    /**
	     * This method is like `_.indexOf` except that it iterates over elements of
	     * `array` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {*} value The value to search for.
	     * @param {boolean|number} [fromIndex=array.length-1] The index to search from
	     *  or `true` to perform a binary search on a sorted array.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.lastIndexOf([1, 2, 1, 2], 2);
	     * // => 3
	     *
	     * // using `fromIndex`
	     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
	     * // => 1
	     *
	     * // performing a binary search
	     * _.lastIndexOf([1, 1, 2, 2], 2, true);
	     * // => 3
	     */
	    function lastIndexOf(array, value, fromIndex) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return -1;
	      }
	      var index = length;
	      if (typeof fromIndex == 'number') {
	        index = (fromIndex < 0 ? nativeMax(length + fromIndex, 0) : nativeMin(fromIndex || 0, length - 1)) + 1;
	      } else if (fromIndex) {
	        index = binaryIndex(array, value, true) - 1;
	        var other = array[index];
	        if (value === value ? (value === other) : (other !== other)) {
	          return index;
	        }
	        return -1;
	      }
	      if (value !== value) {
	        return indexOfNaN(array, index, true);
	      }
	      while (index--) {
	        if (array[index] === value) {
	          return index;
	        }
	      }
	      return -1;
	    }

	    /**
	     * Removes all provided values from `array` using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * **Note:** Unlike `_.without`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...*} [values] The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3, 1, 2, 3];
	     *
	     * _.pull(array, 2, 3);
	     * console.log(array);
	     * // => [1, 1]
	     */
	    function pull() {
	      var args = arguments,
	          array = args[0];

	      if (!(array && array.length)) {
	        return array;
	      }
	      var index = 0,
	          indexOf = getIndexOf(),
	          length = args.length;

	      while (++index < length) {
	        var fromIndex = 0,
	            value = args[index];

	        while ((fromIndex = indexOf(array, value, fromIndex)) > -1) {
	          splice.call(array, fromIndex, 1);
	        }
	      }
	      return array;
	    }

	    /**
	     * Removes elements from `array` corresponding to the given indexes and returns
	     * an array of the removed elements. Indexes may be specified as an array of
	     * indexes or as individual arguments.
	     *
	     * **Note:** Unlike `_.at`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...(number|number[])} [indexes] The indexes of elements to remove,
	     *  specified as individual indexes or arrays of indexes.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [5, 10, 15, 20];
	     * var evens = _.pullAt(array, 1, 3);
	     *
	     * console.log(array);
	     * // => [5, 15]
	     *
	     * console.log(evens);
	     * // => [10, 20]
	     */
	    var pullAt = restParam(function(array, indexes) {
	      indexes = baseFlatten(indexes);

	      var result = baseAt(array, indexes);
	      basePullAt(array, indexes.sort(baseCompareAscending));
	      return result;
	    });

	    /**
	     * Removes all elements from `array` that `predicate` returns truthy for
	     * and returns an array of the removed elements. The predicate is bound to
	     * `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * **Note:** Unlike `_.filter`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [1, 2, 3, 4];
	     * var evens = _.remove(array, function(n) {
	     *   return n % 2 == 0;
	     * });
	     *
	     * console.log(array);
	     * // => [1, 3]
	     *
	     * console.log(evens);
	     * // => [2, 4]
	     */
	    function remove(array, predicate, thisArg) {
	      var result = [];
	      if (!(array && array.length)) {
	        return result;
	      }
	      var index = -1,
	          indexes = [],
	          length = array.length;

	      predicate = getCallback(predicate, thisArg, 3);
	      while (++index < length) {
	        var value = array[index];
	        if (predicate(value, index, array)) {
	          result.push(value);
	          indexes.push(index);
	        }
	      }
	      basePullAt(array, indexes);
	      return result;
	    }

	    /**
	     * Gets all but the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @alias tail
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.rest([1, 2, 3]);
	     * // => [2, 3]
	     */
	    function rest(array) {
	      return drop(array, 1);
	    }

	    /**
	     * Creates a slice of `array` from `start` up to, but not including, `end`.
	     *
	     * **Note:** This method is used instead of `Array#slice` to support node
	     * lists in IE < 9 and to ensure dense arrays are returned.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function slice(array, start, end) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
	        start = 0;
	        end = length;
	      }
	      return baseSlice(array, start, end);
	    }

	    /**
	     * Uses a binary search to determine the lowest index at which `value` should
	     * be inserted into `array` in order to maintain its sort order. If an iteratee
	     * function is provided it is invoked for `value` and each element of `array`
	     * to compute their sort ranking. The iteratee is bound to `thisArg` and
	     * invoked with one argument; (value).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedIndex([30, 50], 40);
	     * // => 1
	     *
	     * _.sortedIndex([4, 4, 5, 5], 5);
	     * // => 2
	     *
	     * var dict = { 'data': { 'thirty': 30, 'forty': 40, 'fifty': 50 } };
	     *
	     * // using an iteratee function
	     * _.sortedIndex(['thirty', 'fifty'], 'forty', function(word) {
	     *   return this.data[word];
	     * }, dict);
	     * // => 1
	     *
	     * // using the `_.property` callback shorthand
	     * _.sortedIndex([{ 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
	     * // => 1
	     */
	    var sortedIndex = createSortedIndex();

	    /**
	     * This method is like `_.sortedIndex` except that it returns the highest
	     * index at which `value` should be inserted into `array` in order to
	     * maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedLastIndex([4, 4, 5, 5], 5);
	     * // => 4
	     */
	    var sortedLastIndex = createSortedIndex(true);

	    /**
	     * Creates a slice of `array` with `n` elements taken from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.take([1, 2, 3]);
	     * // => [1]
	     *
	     * _.take([1, 2, 3], 2);
	     * // => [1, 2]
	     *
	     * _.take([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.take([1, 2, 3], 0);
	     * // => []
	     */
	    function take(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` with `n` elements taken from the end.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRight([1, 2, 3]);
	     * // => [3]
	     *
	     * _.takeRight([1, 2, 3], 2);
	     * // => [2, 3]
	     *
	     * _.takeRight([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.takeRight([1, 2, 3], 0);
	     * // => []
	     */
	    function takeRight(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      n = length - (+n || 0);
	      return baseSlice(array, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` with elements taken from the end. Elements are
	     * taken until `predicate` returns falsey. The predicate is bound to `thisArg`
	     * and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRightWhile([1, 2, 3], function(n) {
	     *   return n > 1;
	     * });
	     * // => [2, 3]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.takeRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
	     * // => ['pebbles']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.takeRightWhile(users, 'active', false), 'user');
	     * // => ['fred', 'pebbles']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.takeRightWhile(users, 'active'), 'user');
	     * // => []
	     */
	    function takeRightWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), false, true)
	        : [];
	    }

	    /**
	     * Creates a slice of `array` with elements taken from the beginning. Elements
	     * are taken until `predicate` returns falsey. The predicate is bound to
	     * `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeWhile([1, 2, 3], function(n) {
	     *   return n < 3;
	     * });
	     * // => [1, 2]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false},
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.takeWhile(users, { 'user': 'barney', 'active': false }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.takeWhile(users, 'active', false), 'user');
	     * // => ['barney', 'fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.takeWhile(users, 'active'), 'user');
	     * // => []
	     */
	    function takeWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3))
	        : [];
	    }

	    /**
	     * Creates an array of unique values, in order, from all of the provided arrays
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * _.union([1, 2], [4, 2], [2, 1]);
	     * // => [1, 2, 4]
	     */
	    var union = restParam(function(arrays) {
	      return baseUniq(baseFlatten(arrays, false, true));
	    });

	    /**
	     * Creates a duplicate-free version of an array, using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons, in which only the first occurence of each element
	     * is kept. Providing `true` for `isSorted` performs a faster search algorithm
	     * for sorted arrays. If an iteratee function is provided it is invoked for
	     * each element in the array to generate the criterion by which uniqueness
	     * is computed. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, array).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias unique
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {boolean} [isSorted] Specify the array is sorted.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new duplicate-value-free array.
	     * @example
	     *
	     * _.uniq([2, 1, 2]);
	     * // => [2, 1]
	     *
	     * // using `isSorted`
	     * _.uniq([1, 1, 2], true);
	     * // => [1, 2]
	     *
	     * // using an iteratee function
	     * _.uniq([1, 2.5, 1.5, 2], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => [1, 2.5]
	     *
	     * // using the `_.property` callback shorthand
	     * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */
	    function uniq(array, isSorted, iteratee, thisArg) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (isSorted != null && typeof isSorted != 'boolean') {
	        thisArg = iteratee;
	        iteratee = isIterateeCall(array, isSorted, thisArg) ? undefined : isSorted;
	        isSorted = false;
	      }
	      var callback = getCallback();
	      if (!(iteratee == null && callback === baseCallback)) {
	        iteratee = callback(iteratee, thisArg, 3);
	      }
	      return (isSorted && getIndexOf() == baseIndexOf)
	        ? sortedUniq(array, iteratee)
	        : baseUniq(array, iteratee);
	    }

	    /**
	     * This method is like `_.zip` except that it accepts an array of grouped
	     * elements and creates an array regrouping the elements to their pre-zip
	     * configuration.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
	     * // => [['fred', 30, true], ['barney', 40, false]]
	     *
	     * _.unzip(zipped);
	     * // => [['fred', 'barney'], [30, 40], [true, false]]
	     */
	    function unzip(array) {
	      if (!(array && array.length)) {
	        return [];
	      }
	      var index = -1,
	          length = 0;

	      array = arrayFilter(array, function(group) {
	        if (isArrayLike(group)) {
	          length = nativeMax(group.length, length);
	          return true;
	        }
	      });
	      var result = Array(length);
	      while (++index < length) {
	        result[index] = arrayMap(array, baseProperty(index));
	      }
	      return result;
	    }

	    /**
	     * This method is like `_.unzip` except that it accepts an iteratee to specify
	     * how regrouped values should be combined. The `iteratee` is bound to `thisArg`
	     * and invoked with four arguments: (accumulator, value, index, group).
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @param {Function} [iteratee] The function to combine regrouped values.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
	     * // => [[1, 10, 100], [2, 20, 200]]
	     *
	     * _.unzipWith(zipped, _.add);
	     * // => [3, 30, 300]
	     */
	    function unzipWith(array, iteratee, thisArg) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      var result = unzip(array);
	      if (iteratee == null) {
	        return result;
	      }
	      iteratee = bindCallback(iteratee, thisArg, 4);
	      return arrayMap(result, function(group) {
	        return arrayReduce(group, iteratee, undefined, true);
	      });
	    }

	    /**
	     * Creates an array excluding all provided values using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to filter.
	     * @param {...*} [values] The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.without([1, 2, 1, 3], 1, 2);
	     * // => [3]
	     */
	    var without = restParam(function(array, values) {
	      return isArrayLike(array)
	        ? baseDifference(array, values)
	        : [];
	    });

	    /**
	     * Creates an array of unique values that is the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	     * of the provided arrays.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of values.
	     * @example
	     *
	     * _.xor([1, 2], [4, 2]);
	     * // => [1, 4]
	     */
	    function xor() {
	      var index = -1,
	          length = arguments.length;

	      while (++index < length) {
	        var array = arguments[index];
	        if (isArrayLike(array)) {
	          var result = result
	            ? arrayPush(baseDifference(result, array), baseDifference(array, result))
	            : array;
	        }
	      }
	      return result ? baseUniq(result) : [];
	    }

	    /**
	     * Creates an array of grouped elements, the first of which contains the first
	     * elements of the given arrays, the second of which contains the second elements
	     * of the given arrays, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zip(['fred', 'barney'], [30, 40], [true, false]);
	     * // => [['fred', 30, true], ['barney', 40, false]]
	     */
	    var zip = restParam(unzip);

	    /**
	     * The inverse of `_.pairs`; this method returns an object composed from arrays
	     * of property names and values. Provide either a single two dimensional array,
	     * e.g. `[[key1, value1], [key2, value2]]` or two arrays, one of property names
	     * and one of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @alias object
	     * @category Array
	     * @param {Array} props The property names.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObject([['fred', 30], ['barney', 40]]);
	     * // => { 'fred': 30, 'barney': 40 }
	     *
	     * _.zipObject(['fred', 'barney'], [30, 40]);
	     * // => { 'fred': 30, 'barney': 40 }
	     */
	    function zipObject(props, values) {
	      var index = -1,
	          length = props ? props.length : 0,
	          result = {};

	      if (length && !values && !isArray(props[0])) {
	        values = [];
	      }
	      while (++index < length) {
	        var key = props[index];
	        if (values) {
	          result[key] = values[index];
	        } else if (key) {
	          result[key[0]] = key[1];
	        }
	      }
	      return result;
	    }

	    /**
	     * This method is like `_.zip` except that it accepts an iteratee to specify
	     * how grouped values should be combined. The `iteratee` is bound to `thisArg`
	     * and invoked with four arguments: (accumulator, value, index, group).
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @param {Function} [iteratee] The function to combine grouped values.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zipWith([1, 2], [10, 20], [100, 200], _.add);
	     * // => [111, 222]
	     */
	    var zipWith = restParam(function(arrays) {
	      var length = arrays.length,
	          iteratee = length > 2 ? arrays[length - 2] : undefined,
	          thisArg = length > 1 ? arrays[length - 1] : undefined;

	      if (length > 2 && typeof iteratee == 'function') {
	        length -= 2;
	      } else {
	        iteratee = (length > 1 && typeof thisArg == 'function') ? (--length, thisArg) : undefined;
	        thisArg = undefined;
	      }
	      arrays.length = length;
	      return unzipWith(arrays, iteratee, thisArg);
	    });

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a `lodash` object that wraps `value` with explicit method
	     * chaining enabled.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to wrap.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36 },
	     *   { 'user': 'fred',    'age': 40 },
	     *   { 'user': 'pebbles', 'age': 1 }
	     * ];
	     *
	     * var youngest = _.chain(users)
	     *   .sortBy('age')
	     *   .map(function(chr) {
	     *     return chr.user + ' is ' + chr.age;
	     *   })
	     *   .first()
	     *   .value();
	     * // => 'pebbles is 1'
	     */
	    function chain(value) {
	      var result = lodash(value);
	      result.__chain__ = true;
	      return result;
	    }

	    /**
	     * This method invokes `interceptor` and returns `value`. The interceptor is
	     * bound to `thisArg` and invoked with one argument; (value). The purpose of
	     * this method is to "tap into" a method chain in order to perform operations
	     * on intermediate results within the chain.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @param {*} [thisArg] The `this` binding of `interceptor`.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * _([1, 2, 3])
	     *  .tap(function(array) {
	     *    array.pop();
	     *  })
	     *  .reverse()
	     *  .value();
	     * // => [2, 1]
	     */
	    function tap(value, interceptor, thisArg) {
	      interceptor.call(thisArg, value);
	      return value;
	    }

	    /**
	     * This method is like `_.tap` except that it returns the result of `interceptor`.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @param {*} [thisArg] The `this` binding of `interceptor`.
	     * @returns {*} Returns the result of `interceptor`.
	     * @example
	     *
	     * _('  abc  ')
	     *  .chain()
	     *  .trim()
	     *  .thru(function(value) {
	     *    return [value];
	     *  })
	     *  .value();
	     * // => ['abc']
	     */
	    function thru(value, interceptor, thisArg) {
	      return interceptor.call(thisArg, value);
	    }

	    /**
	     * Enables explicit method chaining on the wrapper object.
	     *
	     * @name chain
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // without explicit chaining
	     * _(users).first();
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // with explicit chaining
	     * _(users).chain()
	     *   .first()
	     *   .pick('user')
	     *   .value();
	     * // => { 'user': 'barney' }
	     */
	    function wrapperChain() {
	      return chain(this);
	    }

	    /**
	     * Executes the chained sequence and returns the wrapped result.
	     *
	     * @name commit
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).push(3);
	     *
	     * console.log(array);
	     * // => [1, 2]
	     *
	     * wrapped = wrapped.commit();
	     * console.log(array);
	     * // => [1, 2, 3]
	     *
	     * wrapped.last();
	     * // => 3
	     *
	     * console.log(array);
	     * // => [1, 2, 3]
	     */
	    function wrapperCommit() {
	      return new LodashWrapper(this.value(), this.__chain__);
	    }

	    /**
	     * Creates a new array joining a wrapped array with any additional arrays
	     * and/or values.
	     *
	     * @name concat
	     * @memberOf _
	     * @category Chain
	     * @param {...*} [values] The values to concatenate.
	     * @returns {Array} Returns the new concatenated array.
	     * @example
	     *
	     * var array = [1];
	     * var wrapped = _(array).concat(2, [3], [[4]]);
	     *
	     * console.log(wrapped.value());
	     * // => [1, 2, 3, [4]]
	     *
	     * console.log(array);
	     * // => [1]
	     */
	    var wrapperConcat = restParam(function(values) {
	      values = baseFlatten(values);
	      return this.thru(function(array) {
	        return arrayConcat(isArray(array) ? array : [toObject(array)], values);
	      });
	    });

	    /**
	     * Creates a clone of the chained sequence planting `value` as the wrapped value.
	     *
	     * @name plant
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).map(function(value) {
	     *   return Math.pow(value, 2);
	     * });
	     *
	     * var other = [3, 4];
	     * var otherWrapped = wrapped.plant(other);
	     *
	     * otherWrapped.value();
	     * // => [9, 16]
	     *
	     * wrapped.value();
	     * // => [1, 4]
	     */
	    function wrapperPlant(value) {
	      var result,
	          parent = this;

	      while (parent instanceof baseLodash) {
	        var clone = wrapperClone(parent);
	        if (result) {
	          previous.__wrapped__ = clone;
	        } else {
	          result = clone;
	        }
	        var previous = clone;
	        parent = parent.__wrapped__;
	      }
	      previous.__wrapped__ = value;
	      return result;
	    }

	    /**
	     * Reverses the wrapped array so the first element becomes the last, the
	     * second element becomes the second to last, and so on.
	     *
	     * **Note:** This method mutates the wrapped array.
	     *
	     * @name reverse
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new reversed `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _(array).reverse().value()
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */
	    function wrapperReverse() {
	      var value = this.__wrapped__;

	      var interceptor = function(value) {
	        return (wrapped && wrapped.__dir__ < 0) ? value : value.reverse();
	      };
	      if (value instanceof LazyWrapper) {
	        var wrapped = value;
	        if (this.__actions__.length) {
	          wrapped = new LazyWrapper(this);
	        }
	        wrapped = wrapped.reverse();
	        wrapped.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
	        return new LodashWrapper(wrapped, this.__chain__);
	      }
	      return this.thru(interceptor);
	    }

	    /**
	     * Produces the result of coercing the unwrapped value to a string.
	     *
	     * @name toString
	     * @memberOf _
	     * @category Chain
	     * @returns {string} Returns the coerced string value.
	     * @example
	     *
	     * _([1, 2, 3]).toString();
	     * // => '1,2,3'
	     */
	    function wrapperToString() {
	      return (this.value() + '');
	    }

	    /**
	     * Executes the chained sequence to extract the unwrapped value.
	     *
	     * @name value
	     * @memberOf _
	     * @alias run, toJSON, valueOf
	     * @category Chain
	     * @returns {*} Returns the resolved unwrapped value.
	     * @example
	     *
	     * _([1, 2, 3]).value();
	     * // => [1, 2, 3]
	     */
	    function wrapperValue() {
	      return baseWrapperValue(this.__wrapped__, this.__actions__);
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates an array of elements corresponding to the given keys, or indexes,
	     * of `collection`. Keys may be specified as individual arguments or as arrays
	     * of keys.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {...(number|number[]|string|string[])} [props] The property names
	     *  or indexes of elements to pick, specified individually or in arrays.
	     * @returns {Array} Returns the new array of picked elements.
	     * @example
	     *
	     * _.at(['a', 'b', 'c'], [0, 2]);
	     * // => ['a', 'c']
	     *
	     * _.at(['barney', 'fred', 'pebbles'], 0, 2);
	     * // => ['barney', 'pebbles']
	     */
	    var at = restParam(function(collection, props) {
	      return baseAt(collection, baseFlatten(props));
	    });

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is the number of times the key was returned by `iteratee`.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.countBy([4.3, 6.1, 6.4], function(n) {
	     *   return Math.floor(n);
	     * });
	     * // => { '4': 1, '6': 2 }
	     *
	     * _.countBy([4.3, 6.1, 6.4], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => { '4': 1, '6': 2 }
	     *
	     * _.countBy(['one', 'two', 'three'], 'length');
	     * // => { '3': 2, '5': 1 }
	     */
	    var countBy = createAggregator(function(result, value, key) {
	      hasOwnProperty.call(result, key) ? ++result[key] : (result[key] = 1);
	    });

	    /**
	     * Checks if `predicate` returns truthy for **all** elements of `collection`.
	     * The predicate is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias all
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.every([true, 1, null, 'yes'], Boolean);
	     * // => false
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': false },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.every(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.every(users, 'active', false);
	     * // => true
	     *
	     * // using the `_.property` callback shorthand
	     * _.every(users, 'active');
	     * // => false
	     */
	    function every(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayEvery : baseEvery;
	      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
	        predicate = undefined;
	      }
	      if (typeof predicate != 'function' || thisArg !== undefined) {
	        predicate = getCallback(predicate, thisArg, 3);
	      }
	      return func(collection, predicate);
	    }

	    /**
	     * Iterates over elements of `collection`, returning an array of all elements
	     * `predicate` returns truthy for. The predicate is bound to `thisArg` and
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias select
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * _.filter([4, 5, 6], function(n) {
	     *   return n % 2 == 0;
	     * });
	     * // => [4, 6]
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.filter(users, { 'age': 36, 'active': true }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.filter(users, 'active', false), 'user');
	     * // => ['fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.filter(users, 'active'), 'user');
	     * // => ['barney']
	     */
	    function filter(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      predicate = getCallback(predicate, thisArg, 3);
	      return func(collection, predicate);
	    }

	    /**
	     * Iterates over elements of `collection`, returning the first element
	     * `predicate` returns truthy for. The predicate is bound to `thisArg` and
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias detect
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': true },
	     *   { 'user': 'fred',    'age': 40, 'active': false },
	     *   { 'user': 'pebbles', 'age': 1,  'active': true }
	     * ];
	     *
	     * _.result(_.find(users, function(chr) {
	     *   return chr.age < 40;
	     * }), 'user');
	     * // => 'barney'
	     *
	     * // using the `_.matches` callback shorthand
	     * _.result(_.find(users, { 'age': 1, 'active': true }), 'user');
	     * // => 'pebbles'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.result(_.find(users, 'active', false), 'user');
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.result(_.find(users, 'active'), 'user');
	     * // => 'barney'
	     */
	    var find = createFind(baseEach);

	    /**
	     * This method is like `_.find` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * _.findLast([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 1;
	     * });
	     * // => 3
	     */
	    var findLast = createFind(baseEachRight, true);

	    /**
	     * Performs a deep comparison between each element in `collection` and the
	     * source object, returning the first element that has equivalent property
	     * values.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Object} source The object of property values to match.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.result(_.findWhere(users, { 'age': 36, 'active': true }), 'user');
	     * // => 'barney'
	     *
	     * _.result(_.findWhere(users, { 'age': 40, 'active': false }), 'user');
	     * // => 'fred'
	     */
	    function findWhere(collection, source) {
	      return find(collection, baseMatches(source));
	    }

	    /**
	     * Iterates over elements of `collection` invoking `iteratee` for each element.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection). Iteratee functions may exit iteration early
	     * by explicitly returning `false`.
	     *
	     * **Note:** As with other "Collections" methods, objects with a "length" property
	     * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
	     * may be used for object iteration.
	     *
	     * @static
	     * @memberOf _
	     * @alias each
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array|Object|string} Returns `collection`.
	     * @example
	     *
	     * _([1, 2]).forEach(function(n) {
	     *   console.log(n);
	     * }).value();
	     * // => logs each value from left to right and returns the array
	     *
	     * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
	     *   console.log(n, key);
	     * });
	     * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
	     */
	    var forEach = createForEach(arrayEach, baseEach);

	    /**
	     * This method is like `_.forEach` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias eachRight
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array|Object|string} Returns `collection`.
	     * @example
	     *
	     * _([1, 2]).forEachRight(function(n) {
	     *   console.log(n);
	     * }).value();
	     * // => logs each value from right to left and returns the array
	     */
	    var forEachRight = createForEach(arrayEachRight, baseEachRight);

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is an array of the elements responsible for generating the key.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.groupBy([4.2, 6.1, 6.4], function(n) {
	     *   return Math.floor(n);
	     * });
	     * // => { '4': [4.2], '6': [6.1, 6.4] }
	     *
	     * _.groupBy([4.2, 6.1, 6.4], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => { '4': [4.2], '6': [6.1, 6.4] }
	     *
	     * // using the `_.property` callback shorthand
	     * _.groupBy(['one', 'two', 'three'], 'length');
	     * // => { '3': ['one', 'two'], '5': ['three'] }
	     */
	    var groupBy = createAggregator(function(result, value, key) {
	      if (hasOwnProperty.call(result, key)) {
	        result[key].push(value);
	      } else {
	        result[key] = [value];
	      }
	    });

	    /**
	     * Checks if `value` is in `collection` using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it is used as the offset
	     * from the end of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @alias contains, include
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {*} target The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
	     * @returns {boolean} Returns `true` if a matching element is found, else `false`.
	     * @example
	     *
	     * _.includes([1, 2, 3], 1);
	     * // => true
	     *
	     * _.includes([1, 2, 3], 1, 2);
	     * // => false
	     *
	     * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
	     * // => true
	     *
	     * _.includes('pebbles', 'eb');
	     * // => true
	     */
	    function includes(collection, target, fromIndex, guard) {
	      var length = collection ? getLength(collection) : 0;
	      if (!isLength(length)) {
	        collection = values(collection);
	        length = collection.length;
	      }
	      if (typeof fromIndex != 'number' || (guard && isIterateeCall(target, fromIndex, guard))) {
	        fromIndex = 0;
	      } else {
	        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
	      }
	      return (typeof collection == 'string' || !isArray(collection) && isString(collection))
	        ? (fromIndex <= length && collection.indexOf(target, fromIndex) > -1)
	        : (!!length && getIndexOf(collection, target, fromIndex) > -1);
	    }

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is the last element responsible for generating the key. The
	     * iteratee function is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * var keyData = [
	     *   { 'dir': 'left', 'code': 97 },
	     *   { 'dir': 'right', 'code': 100 }
	     * ];
	     *
	     * _.indexBy(keyData, 'dir');
	     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.indexBy(keyData, function(object) {
	     *   return String.fromCharCode(object.code);
	     * });
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.indexBy(keyData, function(object) {
	     *   return this.fromCharCode(object.code);
	     * }, String);
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     */
	    var indexBy = createAggregator(function(result, value, key) {
	      result[key] = value;
	    });

	    /**
	     * Invokes the method at `path` of each element in `collection`, returning
	     * an array of the results of each invoked method. Any additional arguments
	     * are provided to each invoked method. If `methodName` is a function it is
	     * invoked for, and `this` bound to, each element in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Array|Function|string} path The path of the method to invoke or
	     *  the function invoked per iteration.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
	     * // => [[1, 5, 7], [1, 2, 3]]
	     *
	     * _.invoke([123, 456], String.prototype.split, '');
	     * // => [['1', '2', '3'], ['4', '5', '6']]
	     */
	    var invoke = restParam(function(collection, path, args) {
	      var index = -1,
	          isFunc = typeof path == 'function',
	          isProp = isKey(path),
	          result = isArrayLike(collection) ? Array(collection.length) : [];

	      baseEach(collection, function(value) {
	        var func = isFunc ? path : ((isProp && value != null) ? value[path] : undefined);
	        result[++index] = func ? func.apply(value, args) : invokePath(value, path, args);
	      });
	      return result;
	    });

	    /**
	     * Creates an array of values by running each element in `collection` through
	     * `iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	     *
	     * The guarded methods are:
	     * `ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`,
	     * `drop`, `dropRight`, `every`, `fill`, `flatten`, `invert`, `max`, `min`,
	     * `parseInt`, `slice`, `sortBy`, `take`, `takeRight`, `template`, `trim`,
	     * `trimLeft`, `trimRight`, `trunc`, `random`, `range`, `sample`, `some`,
	     * `sum`, `uniq`, and `words`
	     *
	     * @static
	     * @memberOf _
	     * @alias collect
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new mapped array.
	     * @example
	     *
	     * function timesThree(n) {
	     *   return n * 3;
	     * }
	     *
	     * _.map([1, 2], timesThree);
	     * // => [3, 6]
	     *
	     * _.map({ 'a': 1, 'b': 2 }, timesThree);
	     * // => [3, 6] (iteration order is not guaranteed)
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * // using the `_.property` callback shorthand
	     * _.map(users, 'user');
	     * // => ['barney', 'fred']
	     */
	    function map(collection, iteratee, thisArg) {
	      var func = isArray(collection) ? arrayMap : baseMap;
	      iteratee = getCallback(iteratee, thisArg, 3);
	      return func(collection, iteratee);
	    }

	    /**
	     * Creates an array of elements split into two groups, the first of which
	     * contains elements `predicate` returns truthy for, while the second of which
	     * contains elements `predicate` returns falsey for. The predicate is bound
	     * to `thisArg` and invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the array of grouped elements.
	     * @example
	     *
	     * _.partition([1, 2, 3], function(n) {
	     *   return n % 2;
	     * });
	     * // => [[1, 3], [2]]
	     *
	     * _.partition([1.2, 2.3, 3.4], function(n) {
	     *   return this.floor(n) % 2;
	     * }, Math);
	     * // => [[1.2, 3.4], [2.3]]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': false },
	     *   { 'user': 'fred',    'age': 40, 'active': true },
	     *   { 'user': 'pebbles', 'age': 1,  'active': false }
	     * ];
	     *
	     * var mapper = function(array) {
	     *   return _.pluck(array, 'user');
	     * };
	     *
	     * // using the `_.matches` callback shorthand
	     * _.map(_.partition(users, { 'age': 1, 'active': false }), mapper);
	     * // => [['pebbles'], ['barney', 'fred']]
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.map(_.partition(users, 'active', false), mapper);
	     * // => [['barney', 'pebbles'], ['fred']]
	     *
	     * // using the `_.property` callback shorthand
	     * _.map(_.partition(users, 'active'), mapper);
	     * // => [['fred'], ['barney', 'pebbles']]
	     */
	    var partition = createAggregator(function(result, value, key) {
	      result[key ? 0 : 1].push(value);
	    }, function() { return [[], []]; });

	    /**
	     * Gets the property value of `path` from all elements in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Array|string} path The path of the property to pluck.
	     * @returns {Array} Returns the property values.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.pluck(users, 'user');
	     * // => ['barney', 'fred']
	     *
	     * var userIndex = _.indexBy(users, 'user');
	     * _.pluck(userIndex, 'age');
	     * // => [36, 40] (iteration order is not guaranteed)
	     */
	    function pluck(collection, path) {
	      return map(collection, property(path));
	    }

	    /**
	     * Reduces `collection` to a value which is the accumulated result of running
	     * each element in `collection` through `iteratee`, where each successive
	     * invocation is supplied the return value of the previous. If `accumulator`
	     * is not provided the first element of `collection` is used as the initial
	     * value. The `iteratee` is bound to `thisArg` and invoked with four arguments:
	     * (accumulator, value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.reduce`, `_.reduceRight`, and `_.transform`.
	     *
	     * The guarded methods are:
	     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `sortByAll`,
	     * and `sortByOrder`
	     *
	     * @static
	     * @memberOf _
	     * @alias foldl, inject
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.reduce([1, 2], function(total, n) {
	     *   return total + n;
	     * });
	     * // => 3
	     *
	     * _.reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
	     *   result[key] = n * 3;
	     *   return result;
	     * }, {});
	     * // => { 'a': 3, 'b': 6 } (iteration order is not guaranteed)
	     */
	    var reduce = createReduce(arrayReduce, baseEach);

	    /**
	     * This method is like `_.reduce` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias foldr
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * var array = [[0, 1], [2, 3], [4, 5]];
	     *
	     * _.reduceRight(array, function(flattened, other) {
	     *   return flattened.concat(other);
	     * }, []);
	     * // => [4, 5, 2, 3, 0, 1]
	     */
	    var reduceRight = createReduce(arrayReduceRight, baseEachRight);

	    /**
	     * The opposite of `_.filter`; this method returns the elements of `collection`
	     * that `predicate` does **not** return truthy for.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * _.reject([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 0;
	     * });
	     * // => [1, 3]
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.reject(users, { 'age': 40, 'active': true }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.reject(users, 'active', false), 'user');
	     * // => ['fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.reject(users, 'active'), 'user');
	     * // => ['barney']
	     */
	    function reject(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      predicate = getCallback(predicate, thisArg, 3);
	      return func(collection, function(value, index, collection) {
	        return !predicate(value, index, collection);
	      });
	    }

	    /**
	     * Gets a random element or `n` random elements from a collection.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to sample.
	     * @param {number} [n] The number of elements to sample.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {*} Returns the random sample(s).
	     * @example
	     *
	     * _.sample([1, 2, 3, 4]);
	     * // => 2
	     *
	     * _.sample([1, 2, 3, 4], 2);
	     * // => [3, 1]
	     */
	    function sample(collection, n, guard) {
	      if (guard ? isIterateeCall(collection, n, guard) : n == null) {
	        collection = toIterable(collection);
	        var length = collection.length;
	        return length > 0 ? collection[baseRandom(0, length - 1)] : undefined;
	      }
	      var index = -1,
	          result = toArray(collection),
	          length = result.length,
	          lastIndex = length - 1;

	      n = nativeMin(n < 0 ? 0 : (+n || 0), length);
	      while (++index < n) {
	        var rand = baseRandom(index, lastIndex),
	            value = result[rand];

	        result[rand] = result[index];
	        result[index] = value;
	      }
	      result.length = n;
	      return result;
	    }

	    /**
	     * Creates an array of shuffled values, using a version of the
	     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     * @example
	     *
	     * _.shuffle([1, 2, 3, 4]);
	     * // => [4, 1, 3, 2]
	     */
	    function shuffle(collection) {
	      return sample(collection, POSITIVE_INFINITY);
	    }

	    /**
	     * Gets the size of `collection` by returning its length for array-like
	     * values or the number of own enumerable properties for objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to inspect.
	     * @returns {number} Returns the size of `collection`.
	     * @example
	     *
	     * _.size([1, 2, 3]);
	     * // => 3
	     *
	     * _.size({ 'a': 1, 'b': 2 });
	     * // => 2
	     *
	     * _.size('pebbles');
	     * // => 7
	     */
	    function size(collection) {
	      var length = collection ? getLength(collection) : 0;
	      return isLength(length) ? length : keys(collection).length;
	    }

	    /**
	     * Checks if `predicate` returns truthy for **any** element of `collection`.
	     * The function returns as soon as it finds a passing value and does not iterate
	     * over the entire collection. The predicate is bound to `thisArg` and invoked
	     * with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias any
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.some([null, 0, 'yes', false], Boolean);
	     * // => true
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': true },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.some(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.some(users, 'active', false);
	     * // => true
	     *
	     * // using the `_.property` callback shorthand
	     * _.some(users, 'active');
	     * // => true
	     */
	    function some(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arraySome : baseSome;
	      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
	        predicate = undefined;
	      }
	      if (typeof predicate != 'function' || thisArg !== undefined) {
	        predicate = getCallback(predicate, thisArg, 3);
	      }
	      return func(collection, predicate);
	    }

	    /**
	     * Creates an array of elements, sorted in ascending order by the results of
	     * running each element in a collection through `iteratee`. This method performs
	     * a stable sort, that is, it preserves the original sort order of equal elements.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * _.sortBy([1, 2, 3], function(n) {
	     *   return Math.sin(n);
	     * });
	     * // => [3, 1, 2]
	     *
	     * _.sortBy([1, 2, 3], function(n) {
	     *   return this.sin(n);
	     * }, Math);
	     * // => [3, 1, 2]
	     *
	     * var users = [
	     *   { 'user': 'fred' },
	     *   { 'user': 'pebbles' },
	     *   { 'user': 'barney' }
	     * ];
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.sortBy(users, 'user'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function sortBy(collection, iteratee, thisArg) {
	      if (collection == null) {
	        return [];
	      }
	      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	        iteratee = undefined;
	      }
	      var index = -1;
	      iteratee = getCallback(iteratee, thisArg, 3);

	      var result = baseMap(collection, function(value, key, collection) {
	        return { 'criteria': iteratee(value, key, collection), 'index': ++index, 'value': value };
	      });
	      return baseSortBy(result, compareAscending);
	    }

	    /**
	     * This method is like `_.sortBy` except that it can sort by multiple iteratees
	     * or property names.
	     *
	     * If a property name is provided for an iteratee the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If an object is provided for an iteratee the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {...(Function|Function[]|Object|Object[]|string|string[])} iteratees
	     *  The iteratees to sort by, specified as individual values or arrays of values.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 42 },
	     *   { 'user': 'barney', 'age': 34 }
	     * ];
	     *
	     * _.map(_.sortByAll(users, ['user', 'age']), _.values);
	     * // => [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]
	     *
	     * _.map(_.sortByAll(users, 'user', function(chr) {
	     *   return Math.floor(chr.age / 10);
	     * }), _.values);
	     * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
	     */
	    var sortByAll = restParam(function(collection, iteratees) {
	      if (collection == null) {
	        return [];
	      }
	      var guard = iteratees[2];
	      if (guard && isIterateeCall(iteratees[0], iteratees[1], guard)) {
	        iteratees.length = 1;
	      }
	      return baseSortByOrder(collection, baseFlatten(iteratees), []);
	    });

	    /**
	     * This method is like `_.sortByAll` except that it allows specifying the
	     * sort orders of the iteratees to sort by. If `orders` is unspecified, all
	     * values are sorted in ascending order. Otherwise, a value is sorted in
	     * ascending order if its corresponding order is "asc", and descending if "desc".
	     *
	     * If a property name is provided for an iteratee the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If an object is provided for an iteratee the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {boolean[]} [orders] The sort orders of `iteratees`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 34 },
	     *   { 'user': 'fred',   'age': 42 },
	     *   { 'user': 'barney', 'age': 36 }
	     * ];
	     *
	     * // sort by `user` in ascending order and by `age` in descending order
	     * _.map(_.sortByOrder(users, ['user', 'age'], ['asc', 'desc']), _.values);
	     * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
	     */
	    function sortByOrder(collection, iteratees, orders, guard) {
	      if (collection == null) {
	        return [];
	      }
	      if (guard && isIterateeCall(iteratees, orders, guard)) {
	        orders = undefined;
	      }
	      if (!isArray(iteratees)) {
	        iteratees = iteratees == null ? [] : [iteratees];
	      }
	      if (!isArray(orders)) {
	        orders = orders == null ? [] : [orders];
	      }
	      return baseSortByOrder(collection, iteratees, orders);
	    }

	    /**
	     * Performs a deep comparison between each element in `collection` and the
	     * source object, returning an array of all elements that have equivalent
	     * property values.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Object} source The object of property values to match.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false, 'pets': ['hoppy'] },
	     *   { 'user': 'fred',   'age': 40, 'active': true, 'pets': ['baby puss', 'dino'] }
	     * ];
	     *
	     * _.pluck(_.where(users, { 'age': 36, 'active': false }), 'user');
	     * // => ['barney']
	     *
	     * _.pluck(_.where(users, { 'pets': ['dino'] }), 'user');
	     * // => ['fred']
	     */
	    function where(collection, source) {
	      return filter(collection, baseMatches(source));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Gets the number of milliseconds that have elapsed since the Unix epoch
	     * (1 January 1970 00:00:00 UTC).
	     *
	     * @static
	     * @memberOf _
	     * @category Date
	     * @example
	     *
	     * _.defer(function(stamp) {
	     *   console.log(_.now() - stamp);
	     * }, _.now());
	     * // => logs the number of milliseconds it took for the deferred function to be invoked
	     */
	    var now = nativeNow || function() {
	      return new Date().getTime();
	    };

	    /*------------------------------------------------------------------------*/

	    /**
	     * The opposite of `_.before`; this method creates a function that invokes
	     * `func` once it is called `n` or more times.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {number} n The number of calls before `func` is invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var saves = ['profile', 'settings'];
	     *
	     * var done = _.after(saves.length, function() {
	     *   console.log('done saving!');
	     * });
	     *
	     * _.forEach(saves, function(type) {
	     *   asyncSave({ 'type': type, 'complete': done });
	     * });
	     * // => logs 'done saving!' after the two async saves have completed
	     */
	    function after(n, func) {
	      if (typeof func != 'function') {
	        if (typeof n == 'function') {
	          var temp = n;
	          n = func;
	          func = temp;
	        } else {
	          throw new TypeError(FUNC_ERROR_TEXT);
	        }
	      }
	      n = nativeIsFinite(n = +n) ? n : 0;
	      return function() {
	        if (--n < 1) {
	          return func.apply(this, arguments);
	        }
	      };
	    }

	    /**
	     * Creates a function that accepts up to `n` arguments ignoring any
	     * additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @param {number} [n=func.length] The arity cap.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
	     * // => [6, 8, 10]
	     */
	    function ary(func, n, guard) {
	      if (guard && isIterateeCall(func, n, guard)) {
	        n = undefined;
	      }
	      n = (func && n == null) ? func.length : nativeMax(+n || 0, 0);
	      return createWrapper(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
	    }

	    /**
	     * Creates a function that invokes `func`, with the `this` binding and arguments
	     * of the created function, while it is called less than `n` times. Subsequent
	     * calls to the created function return the result of the last `func` invocation.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {number} n The number of calls at which `func` is no longer invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * jQuery('#add').on('click', _.before(5, addContactToList));
	     * // => allows adding up to 4 contacts to the list
	     */
	    function before(n, func) {
	      var result;
	      if (typeof func != 'function') {
	        if (typeof n == 'function') {
	          var temp = n;
	          n = func;
	          func = temp;
	        } else {
	          throw new TypeError(FUNC_ERROR_TEXT);
	        }
	      }
	      return function() {
	        if (--n > 0) {
	          result = func.apply(this, arguments);
	        }
	        if (n <= 1) {
	          func = undefined;
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and prepends any additional `_.bind` arguments to those provided to the
	     * bound function.
	     *
	     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** Unlike native `Function#bind` this method does not set the "length"
	     * property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var greet = function(greeting, punctuation) {
	     *   return greeting + ' ' + this.user + punctuation;
	     * };
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * var bound = _.bind(greet, object, 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * // using placeholders
	     * var bound = _.bind(greet, object, _, '!');
	     * bound('hi');
	     * // => 'hi fred!'
	     */
	    var bind = restParam(function(func, thisArg, partials) {
	      var bitmask = BIND_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, bind.placeholder);
	        bitmask |= PARTIAL_FLAG;
	      }
	      return createWrapper(func, bitmask, thisArg, partials, holders);
	    });

	    /**
	     * Binds methods of an object to the object itself, overwriting the existing
	     * method. Method names may be specified as individual arguments or as arrays
	     * of method names. If no method names are provided all enumerable function
	     * properties, own and inherited, of `object` are bound.
	     *
	     * **Note:** This method does not set the "length" property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Object} object The object to bind and assign the bound methods to.
	     * @param {...(string|string[])} [methodNames] The object method names to bind,
	     *  specified as individual method names or arrays of method names.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var view = {
	     *   'label': 'docs',
	     *   'onClick': function() {
	     *     console.log('clicked ' + this.label);
	     *   }
	     * };
	     *
	     * _.bindAll(view);
	     * jQuery('#docs').on('click', view.onClick);
	     * // => logs 'clicked docs' when the element is clicked
	     */
	    var bindAll = restParam(function(object, methodNames) {
	      methodNames = methodNames.length ? baseFlatten(methodNames) : functions(object);

	      var index = -1,
	          length = methodNames.length;

	      while (++index < length) {
	        var key = methodNames[index];
	        object[key] = createWrapper(object[key], BIND_FLAG, object);
	      }
	      return object;
	    });

	    /**
	     * Creates a function that invokes the method at `object[key]` and prepends
	     * any additional `_.bindKey` arguments to those provided to the bound function.
	     *
	     * This method differs from `_.bind` by allowing bound functions to reference
	     * methods that may be redefined or don't yet exist.
	     * See [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
	     * for more details.
	     *
	     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Object} object The object the method belongs to.
	     * @param {string} key The key of the method.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var object = {
	     *   'user': 'fred',
	     *   'greet': function(greeting, punctuation) {
	     *     return greeting + ' ' + this.user + punctuation;
	     *   }
	     * };
	     *
	     * var bound = _.bindKey(object, 'greet', 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * object.greet = function(greeting, punctuation) {
	     *   return greeting + 'ya ' + this.user + punctuation;
	     * };
	     *
	     * bound('!');
	     * // => 'hiya fred!'
	     *
	     * // using placeholders
	     * var bound = _.bindKey(object, 'greet', _, '!');
	     * bound('hi');
	     * // => 'hiya fred!'
	     */
	    var bindKey = restParam(function(object, key, partials) {
	      var bitmask = BIND_FLAG | BIND_KEY_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, bindKey.placeholder);
	        bitmask |= PARTIAL_FLAG;
	      }
	      return createWrapper(key, bitmask, object, partials, holders);
	    });

	    /**
	     * Creates a function that accepts one or more arguments of `func` that when
	     * called either invokes `func` returning its result, if all `func` arguments
	     * have been provided, or returns a function that accepts one or more of the
	     * remaining `func` arguments, and so on. The arity of `func` may be specified
	     * if `func.length` is not sufficient.
	     *
	     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method does not set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curry(abc);
	     *
	     * curried(1)(2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // using placeholders
	     * curried(1)(_, 3)(2);
	     * // => [1, 2, 3]
	     */
	    var curry = createCurry(CURRY_FLAG);

	    /**
	     * This method is like `_.curry` except that arguments are applied to `func`
	     * in the manner of `_.partialRight` instead of `_.partial`.
	     *
	     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method does not set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curryRight(abc);
	     *
	     * curried(3)(2)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(2, 3)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // using placeholders
	     * curried(3)(1, _)(2);
	     * // => [1, 2, 3]
	     */
	    var curryRight = createCurry(CURRY_RIGHT_FLAG);

	    /**
	     * Creates a debounced function that delays invoking `func` until after `wait`
	     * milliseconds have elapsed since the last time the debounced function was
	     * invoked. The debounced function comes with a `cancel` method to cancel
	     * delayed invocations. Provide an options object to indicate that `func`
	     * should be invoked on the leading and/or trailing edge of the `wait` timeout.
	     * Subsequent calls to the debounced function return the result of the last
	     * `func` invocation.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	     * on the trailing edge of the timeout only if the the debounced function is
	     * invoked more than once during the `wait` timeout.
	     *
	     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	     * for details over the differences between `_.debounce` and `_.throttle`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to debounce.
	     * @param {number} [wait=0] The number of milliseconds to delay.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.leading=false] Specify invoking on the leading
	     *  edge of the timeout.
	     * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	     *  delayed before it is invoked.
	     * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	     *  edge of the timeout.
	     * @returns {Function} Returns the new debounced function.
	     * @example
	     *
	     * // avoid costly calculations while the window size is in flux
	     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	     *
	     * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
	     * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	     *   'leading': true,
	     *   'trailing': false
	     * }));
	     *
	     * // ensure `batchLog` is invoked once after 1 second of debounced calls
	     * var source = new EventSource('/stream');
	     * jQuery(source).on('message', _.debounce(batchLog, 250, {
	     *   'maxWait': 1000
	     * }));
	     *
	     * // cancel a debounced call
	     * var todoChanges = _.debounce(batchLog, 1000);
	     * Object.observe(models.todo, todoChanges);
	     *
	     * Object.observe(models, function(changes) {
	     *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
	     *     todoChanges.cancel();
	     *   }
	     * }, ['delete']);
	     *
	     * // ...at some point `models.todo` is changed
	     * models.todo.completed = true;
	     *
	     * // ...before 1 second has passed `models.todo` is deleted
	     * // which cancels the debounced `todoChanges` call
	     * delete models.todo;
	     */
	    function debounce(func, wait, options) {
	      var args,
	          maxTimeoutId,
	          result,
	          stamp,
	          thisArg,
	          timeoutId,
	          trailingCall,
	          lastCalled = 0,
	          maxWait = false,
	          trailing = true;

	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      wait = wait < 0 ? 0 : (+wait || 0);
	      if (options === true) {
	        var leading = true;
	        trailing = false;
	      } else if (isObject(options)) {
	        leading = !!options.leading;
	        maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }

	      function cancel() {
	        if (timeoutId) {
	          clearTimeout(timeoutId);
	        }
	        if (maxTimeoutId) {
	          clearTimeout(maxTimeoutId);
	        }
	        lastCalled = 0;
	        maxTimeoutId = timeoutId = trailingCall = undefined;
	      }

	      function complete(isCalled, id) {
	        if (id) {
	          clearTimeout(id);
	        }
	        maxTimeoutId = timeoutId = trailingCall = undefined;
	        if (isCalled) {
	          lastCalled = now();
	          result = func.apply(thisArg, args);
	          if (!timeoutId && !maxTimeoutId) {
	            args = thisArg = undefined;
	          }
	        }
	      }

	      function delayed() {
	        var remaining = wait - (now() - stamp);
	        if (remaining <= 0 || remaining > wait) {
	          complete(trailingCall, maxTimeoutId);
	        } else {
	          timeoutId = setTimeout(delayed, remaining);
	        }
	      }

	      function maxDelayed() {
	        complete(trailing, timeoutId);
	      }

	      function debounced() {
	        args = arguments;
	        stamp = now();
	        thisArg = this;
	        trailingCall = trailing && (timeoutId || !leading);

	        if (maxWait === false) {
	          var leadingCall = leading && !timeoutId;
	        } else {
	          if (!maxTimeoutId && !leading) {
	            lastCalled = stamp;
	          }
	          var remaining = maxWait - (stamp - lastCalled),
	              isCalled = remaining <= 0 || remaining > maxWait;

	          if (isCalled) {
	            if (maxTimeoutId) {
	              maxTimeoutId = clearTimeout(maxTimeoutId);
	            }
	            lastCalled = stamp;
	            result = func.apply(thisArg, args);
	          }
	          else if (!maxTimeoutId) {
	            maxTimeoutId = setTimeout(maxDelayed, remaining);
	          }
	        }
	        if (isCalled && timeoutId) {
	          timeoutId = clearTimeout(timeoutId);
	        }
	        else if (!timeoutId && wait !== maxWait) {
	          timeoutId = setTimeout(delayed, wait);
	        }
	        if (leadingCall) {
	          isCalled = true;
	          result = func.apply(thisArg, args);
	        }
	        if (isCalled && !timeoutId && !maxTimeoutId) {
	          args = thisArg = undefined;
	        }
	        return result;
	      }
	      debounced.cancel = cancel;
	      return debounced;
	    }

	    /**
	     * Defers invoking the `func` until the current call stack has cleared. Any
	     * additional arguments are provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to defer.
	     * @param {...*} [args] The arguments to invoke the function with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.defer(function(text) {
	     *   console.log(text);
	     * }, 'deferred');
	     * // logs 'deferred' after one or more milliseconds
	     */
	    var defer = restParam(function(func, args) {
	      return baseDelay(func, 1, args);
	    });

	    /**
	     * Invokes `func` after `wait` milliseconds. Any additional arguments are
	     * provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {...*} [args] The arguments to invoke the function with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.delay(function(text) {
	     *   console.log(text);
	     * }, 1000, 'later');
	     * // => logs 'later' after one second
	     */
	    var delay = restParam(function(func, wait, args) {
	      return baseDelay(func, wait, args);
	    });

	    /**
	     * Creates a function that returns the result of invoking the provided
	     * functions with the `this` binding of the created function, where each
	     * successive invocation is supplied the return value of the previous.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {...Function} [funcs] Functions to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flow(_.add, square);
	     * addSquare(1, 2);
	     * // => 9
	     */
	    var flow = createFlow();

	    /**
	     * This method is like `_.flow` except that it creates a function that
	     * invokes the provided functions from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias backflow, compose
	     * @category Function
	     * @param {...Function} [funcs] Functions to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flowRight(square, _.add);
	     * addSquare(1, 2);
	     * // => 9
	     */
	    var flowRight = createFlow(true);

	    /**
	     * Creates a function that memoizes the result of `func`. If `resolver` is
	     * provided it determines the cache key for storing the result based on the
	     * arguments provided to the memoized function. By default, the first argument
	     * provided to the memoized function is coerced to a string and used as the
	     * cache key. The `func` is invoked with the `this` binding of the memoized
	     * function.
	     *
	     * **Note:** The cache is exposed as the `cache` property on the memoized
	     * function. Its creation may be customized by replacing the `_.memoize.Cache`
	     * constructor with one whose instances implement the [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	     * method interface of `get`, `has`, and `set`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to have its output memoized.
	     * @param {Function} [resolver] The function to resolve the cache key.
	     * @returns {Function} Returns the new memoizing function.
	     * @example
	     *
	     * var upperCase = _.memoize(function(string) {
	     *   return string.toUpperCase();
	     * });
	     *
	     * upperCase('fred');
	     * // => 'FRED'
	     *
	     * // modifying the result cache
	     * upperCase.cache.set('fred', 'BARNEY');
	     * upperCase('fred');
	     * // => 'BARNEY'
	     *
	     * // replacing `_.memoize.Cache`
	     * var object = { 'user': 'fred' };
	     * var other = { 'user': 'barney' };
	     * var identity = _.memoize(_.identity);
	     *
	     * identity(object);
	     * // => { 'user': 'fred' }
	     * identity(other);
	     * // => { 'user': 'fred' }
	     *
	     * _.memoize.Cache = WeakMap;
	     * var identity = _.memoize(_.identity);
	     *
	     * identity(object);
	     * // => { 'user': 'fred' }
	     * identity(other);
	     * // => { 'user': 'barney' }
	     */
	    function memoize(func, resolver) {
	      if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var memoized = function() {
	        var args = arguments,
	            key = resolver ? resolver.apply(this, args) : args[0],
	            cache = memoized.cache;

	        if (cache.has(key)) {
	          return cache.get(key);
	        }
	        var result = func.apply(this, args);
	        memoized.cache = cache.set(key, result);
	        return result;
	      };
	      memoized.cache = new memoize.Cache;
	      return memoized;
	    }

	    /**
	     * Creates a function that runs each argument through a corresponding
	     * transform function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to wrap.
	     * @param {...(Function|Function[])} [transforms] The functions to transform
	     * arguments, specified as individual functions or arrays of functions.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function doubled(n) {
	     *   return n * 2;
	     * }
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var modded = _.modArgs(function(x, y) {
	     *   return [x, y];
	     * }, square, doubled);
	     *
	     * modded(1, 2);
	     * // => [1, 4]
	     *
	     * modded(5, 10);
	     * // => [25, 20]
	     */
	    var modArgs = restParam(function(func, transforms) {
	      transforms = baseFlatten(transforms);
	      if (typeof func != 'function' || !arrayEvery(transforms, baseIsFunction)) {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var length = transforms.length;
	      return restParam(function(args) {
	        var index = nativeMin(args.length, length);
	        while (index--) {
	          args[index] = transforms[index](args[index]);
	        }
	        return func.apply(this, args);
	      });
	    });

	    /**
	     * Creates a function that negates the result of the predicate `func`. The
	     * `func` predicate is invoked with the `this` binding and arguments of the
	     * created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} predicate The predicate to negate.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function isEven(n) {
	     *   return n % 2 == 0;
	     * }
	     *
	     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
	     * // => [1, 3, 5]
	     */
	    function negate(predicate) {
	      if (typeof predicate != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return function() {
	        return !predicate.apply(this, arguments);
	      };
	    }

	    /**
	     * Creates a function that is restricted to invoking `func` once. Repeat calls
	     * to the function return the value of the first call. The `func` is invoked
	     * with the `this` binding and arguments of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var initialize = _.once(createApplication);
	     * initialize();
	     * initialize();
	     * // `initialize` invokes `createApplication` once
	     */
	    function once(func) {
	      return before(2, func);
	    }

	    /**
	     * Creates a function that invokes `func` with `partial` arguments prepended
	     * to those provided to the new function. This method is like `_.bind` except
	     * it does **not** alter the `this` binding.
	     *
	     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method does not set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * var greet = function(greeting, name) {
	     *   return greeting + ' ' + name;
	     * };
	     *
	     * var sayHelloTo = _.partial(greet, 'hello');
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     *
	     * // using placeholders
	     * var greetFred = _.partial(greet, _, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     */
	    var partial = createPartial(PARTIAL_FLAG);

	    /**
	     * This method is like `_.partial` except that partially applied arguments
	     * are appended to those provided to the new function.
	     *
	     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method does not set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * var greet = function(greeting, name) {
	     *   return greeting + ' ' + name;
	     * };
	     *
	     * var greetFred = _.partialRight(greet, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     *
	     * // using placeholders
	     * var sayHelloTo = _.partialRight(greet, 'hello', _);
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     */
	    var partialRight = createPartial(PARTIAL_RIGHT_FLAG);

	    /**
	     * Creates a function that invokes `func` with arguments arranged according
	     * to the specified indexes where the argument value at the first index is
	     * provided as the first argument, the argument value at the second index is
	     * provided as the second argument, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to rearrange arguments for.
	     * @param {...(number|number[])} indexes The arranged argument indexes,
	     *  specified as individual indexes or arrays of indexes.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var rearged = _.rearg(function(a, b, c) {
	     *   return [a, b, c];
	     * }, 2, 0, 1);
	     *
	     * rearged('b', 'c', 'a')
	     * // => ['a', 'b', 'c']
	     *
	     * var map = _.rearg(_.map, [1, 0]);
	     * map(function(n) {
	     *   return n * 3;
	     * }, [1, 2, 3]);
	     * // => [3, 6, 9]
	     */
	    var rearg = restParam(function(func, indexes) {
	      return createWrapper(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes));
	    });

	    /**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * created function and arguments from `start` and beyond provided as an array.
	     *
	     * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.restParam(function(what, names) {
	     *   return what + ' ' + _.initial(names).join(', ') +
	     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	     * });
	     *
	     * say('hello', 'fred', 'barney', 'pebbles');
	     * // => 'hello fred, barney, & pebbles'
	     */
	    function restParam(func, start) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	      return function() {
	        var args = arguments,
	            index = -1,
	            length = nativeMax(args.length - start, 0),
	            rest = Array(length);

	        while (++index < length) {
	          rest[index] = args[start + index];
	        }
	        switch (start) {
	          case 0: return func.call(this, rest);
	          case 1: return func.call(this, args[0], rest);
	          case 2: return func.call(this, args[0], args[1], rest);
	        }
	        var otherArgs = Array(start + 1);
	        index = -1;
	        while (++index < start) {
	          otherArgs[index] = args[index];
	        }
	        otherArgs[start] = rest;
	        return func.apply(this, otherArgs);
	      };
	    }

	    /**
	     * Creates a function that invokes `func` with the `this` binding of the created
	     * function and an array of arguments much like [`Function#apply`](https://es5.github.io/#x15.3.4.3).
	     *
	     * **Note:** This method is based on the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator).
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to spread arguments over.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.spread(function(who, what) {
	     *   return who + ' says ' + what;
	     * });
	     *
	     * say(['fred', 'hello']);
	     * // => 'fred says hello'
	     *
	     * // with a Promise
	     * var numbers = Promise.all([
	     *   Promise.resolve(40),
	     *   Promise.resolve(36)
	     * ]);
	     *
	     * numbers.then(_.spread(function(x, y) {
	     *   return x + y;
	     * }));
	     * // => a Promise of 76
	     */
	    function spread(func) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return function(array) {
	        return func.apply(this, array);
	      };
	    }

	    /**
	     * Creates a throttled function that only invokes `func` at most once per
	     * every `wait` milliseconds. The throttled function comes with a `cancel`
	     * method to cancel delayed invocations. Provide an options object to indicate
	     * that `func` should be invoked on the leading and/or trailing edge of the
	     * `wait` timeout. Subsequent calls to the throttled function return the
	     * result of the last `func` call.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	     * on the trailing edge of the timeout only if the the throttled function is
	     * invoked more than once during the `wait` timeout.
	     *
	     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	     * for details over the differences between `_.throttle` and `_.debounce`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to throttle.
	     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.leading=true] Specify invoking on the leading
	     *  edge of the timeout.
	     * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	     *  edge of the timeout.
	     * @returns {Function} Returns the new throttled function.
	     * @example
	     *
	     * // avoid excessively updating the position while scrolling
	     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	     *
	     * // invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
	     * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
	     *   'trailing': false
	     * }));
	     *
	     * // cancel a trailing throttled call
	     * jQuery(window).on('popstate', throttled.cancel);
	     */
	    function throttle(func, wait, options) {
	      var leading = true,
	          trailing = true;

	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      if (options === false) {
	        leading = false;
	      } else if (isObject(options)) {
	        leading = 'leading' in options ? !!options.leading : leading;
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }
	      return debounce(func, wait, { 'leading': leading, 'maxWait': +wait, 'trailing': trailing });
	    }

	    /**
	     * Creates a function that provides `value` to the wrapper function as its
	     * first argument. Any additional arguments provided to the function are
	     * appended to those provided to the wrapper function. The wrapper is invoked
	     * with the `this` binding of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {*} value The value to wrap.
	     * @param {Function} wrapper The wrapper function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var p = _.wrap(_.escape, function(func, text) {
	     *   return '<p>' + func(text) + '</p>';
	     * });
	     *
	     * p('fred, barney, & pebbles');
	     * // => '<p>fred, barney, &amp; pebbles</p>'
	     */
	    function wrap(value, wrapper) {
	      wrapper = wrapper == null ? identity : wrapper;
	      return createWrapper(wrapper, PARTIAL_FLAG, undefined, [value], []);
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a clone of `value`. If `isDeep` is `true` nested objects are cloned,
	     * otherwise they are assigned by reference. If `customizer` is provided it is
	     * invoked to produce the cloned values. If `customizer` returns `undefined`
	     * cloning is handled by the method instead. The `customizer` is bound to
	     * `thisArg` and invoked with two argument; (value [, index|key, object]).
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
	     * The enumerable properties of `arguments` objects and objects created by
	     * constructors other than `Object` are cloned to plain `Object` objects. An
	     * empty object is returned for uncloneable values such as functions, DOM nodes,
	     * Maps, Sets, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {*} Returns the cloned value.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * var shallow = _.clone(users);
	     * shallow[0] === users[0];
	     * // => true
	     *
	     * var deep = _.clone(users, true);
	     * deep[0] === users[0];
	     * // => false
	     *
	     * // using a customizer callback
	     * var el = _.clone(document.body, function(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(false);
	     *   }
	     * });
	     *
	     * el === document.body
	     * // => false
	     * el.nodeName
	     * // => BODY
	     * el.childNodes.length;
	     * // => 0
	     */
	    function clone(value, isDeep, customizer, thisArg) {
	      if (isDeep && typeof isDeep != 'boolean' && isIterateeCall(value, isDeep, customizer)) {
	        isDeep = false;
	      }
	      else if (typeof isDeep == 'function') {
	        thisArg = customizer;
	        customizer = isDeep;
	        isDeep = false;
	      }
	      return typeof customizer == 'function'
	        ? baseClone(value, isDeep, bindCallback(customizer, thisArg, 1))
	        : baseClone(value, isDeep);
	    }

	    /**
	     * Creates a deep clone of `value`. If `customizer` is provided it is invoked
	     * to produce the cloned values. If `customizer` returns `undefined` cloning
	     * is handled by the method instead. The `customizer` is bound to `thisArg`
	     * and invoked with two argument; (value [, index|key, object]).
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
	     * The enumerable properties of `arguments` objects and objects created by
	     * constructors other than `Object` are cloned to plain `Object` objects. An
	     * empty object is returned for uncloneable values such as functions, DOM nodes,
	     * Maps, Sets, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {*} Returns the deep cloned value.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * var deep = _.cloneDeep(users);
	     * deep[0] === users[0];
	     * // => false
	     *
	     * // using a customizer callback
	     * var el = _.cloneDeep(document.body, function(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(true);
	     *   }
	     * });
	     *
	     * el === document.body
	     * // => false
	     * el.nodeName
	     * // => BODY
	     * el.childNodes.length;
	     * // => 20
	     */
	    function cloneDeep(value, customizer, thisArg) {
	      return typeof customizer == 'function'
	        ? baseClone(value, true, bindCallback(customizer, thisArg, 1))
	        : baseClone(value, true);
	    }

	    /**
	     * Checks if `value` is greater than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than `other`, else `false`.
	     * @example
	     *
	     * _.gt(3, 1);
	     * // => true
	     *
	     * _.gt(3, 3);
	     * // => false
	     *
	     * _.gt(1, 3);
	     * // => false
	     */
	    function gt(value, other) {
	      return value > other;
	    }

	    /**
	     * Checks if `value` is greater than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than or equal to `other`, else `false`.
	     * @example
	     *
	     * _.gte(3, 1);
	     * // => true
	     *
	     * _.gte(3, 3);
	     * // => true
	     *
	     * _.gte(1, 3);
	     * // => false
	     */
	    function gte(value, other) {
	      return value >= other;
	    }

	    /**
	     * Checks if `value` is classified as an `arguments` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isArguments(function() { return arguments; }());
	     * // => true
	     *
	     * _.isArguments([1, 2, 3]);
	     * // => false
	     */
	    function isArguments(value) {
	      return isObjectLike(value) && isArrayLike(value) &&
	        hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	    }

	    /**
	     * Checks if `value` is classified as an `Array` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isArray([1, 2, 3]);
	     * // => true
	     *
	     * _.isArray(function() { return arguments; }());
	     * // => false
	     */
	    var isArray = nativeIsArray || function(value) {
	      return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	    };

	    /**
	     * Checks if `value` is classified as a boolean primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isBoolean(false);
	     * // => true
	     *
	     * _.isBoolean(null);
	     * // => false
	     */
	    function isBoolean(value) {
	      return value === true || value === false || (isObjectLike(value) && objToString.call(value) == boolTag);
	    }

	    /**
	     * Checks if `value` is classified as a `Date` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isDate(new Date);
	     * // => true
	     *
	     * _.isDate('Mon April 23 2012');
	     * // => false
	     */
	    function isDate(value) {
	      return isObjectLike(value) && objToString.call(value) == dateTag;
	    }

	    /**
	     * Checks if `value` is a DOM element.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
	     * @example
	     *
	     * _.isElement(document.body);
	     * // => true
	     *
	     * _.isElement('<body>');
	     * // => false
	     */
	    function isElement(value) {
	      return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
	    }

	    /**
	     * Checks if `value` is empty. A value is considered empty unless it is an
	     * `arguments` object, array, string, or jQuery-like collection with a length
	     * greater than `0` or an object with own enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {Array|Object|string} value The value to inspect.
	     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	     * @example
	     *
	     * _.isEmpty(null);
	     * // => true
	     *
	     * _.isEmpty(true);
	     * // => true
	     *
	     * _.isEmpty(1);
	     * // => true
	     *
	     * _.isEmpty([1, 2, 3]);
	     * // => false
	     *
	     * _.isEmpty({ 'a': 1 });
	     * // => false
	     */
	    function isEmpty(value) {
	      if (value == null) {
	        return true;
	      }
	      if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value) ||
	          (isObjectLike(value) && isFunction(value.splice)))) {
	        return !value.length;
	      }
	      return !keys(value).length;
	    }

	    /**
	     * Performs a deep comparison between two values to determine if they are
	     * equivalent. If `customizer` is provided it is invoked to compare values.
	     * If `customizer` returns `undefined` comparisons are handled by the method
	     * instead. The `customizer` is bound to `thisArg` and invoked with three
	     * arguments: (value, other [, index|key]).
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. Functions and DOM nodes
	     * are **not** supported. Provide a customizer function to extend support
	     * for comparing other values.
	     *
	     * @static
	     * @memberOf _
	     * @alias eq
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize value comparisons.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     * var other = { 'user': 'fred' };
	     *
	     * object == other;
	     * // => false
	     *
	     * _.isEqual(object, other);
	     * // => true
	     *
	     * // using a customizer callback
	     * var array = ['hello', 'goodbye'];
	     * var other = ['hi', 'goodbye'];
	     *
	     * _.isEqual(array, other, function(value, other) {
	     *   if (_.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/)) {
	     *     return true;
	     *   }
	     * });
	     * // => true
	     */
	    function isEqual(value, other, customizer, thisArg) {
	      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
	      var result = customizer ? customizer(value, other) : undefined;
	      return  result === undefined ? baseIsEqual(value, other, customizer) : !!result;
	    }

	    /**
	     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
	     * `SyntaxError`, `TypeError`, or `URIError` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
	     * @example
	     *
	     * _.isError(new Error);
	     * // => true
	     *
	     * _.isError(Error);
	     * // => false
	     */
	    function isError(value) {
	      return isObjectLike(value) && typeof value.message == 'string' && objToString.call(value) == errorTag;
	    }

	    /**
	     * Checks if `value` is a finite primitive number.
	     *
	     * **Note:** This method is based on [`Number.isFinite`](http://ecma-international.org/ecma-262/6.0/#sec-number.isfinite).
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
	     * @example
	     *
	     * _.isFinite(10);
	     * // => true
	     *
	     * _.isFinite('10');
	     * // => false
	     *
	     * _.isFinite(true);
	     * // => false
	     *
	     * _.isFinite(Object(10));
	     * // => false
	     *
	     * _.isFinite(Infinity);
	     * // => false
	     */
	    function isFinite(value) {
	      return typeof value == 'number' && nativeIsFinite(value);
	    }

	    /**
	     * Checks if `value` is classified as a `Function` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isFunction(_);
	     * // => true
	     *
	     * _.isFunction(/abc/);
	     * // => false
	     */
	    function isFunction(value) {
	      // The use of `Object#toString` avoids issues with the `typeof` operator
	      // in older versions of Chrome and Safari which return 'function' for regexes
	      // and Safari 8 equivalents which return 'object' for typed array constructors.
	      return isObject(value) && objToString.call(value) == funcTag;
	    }

	    /**
	     * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	     * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	     * @example
	     *
	     * _.isObject({});
	     * // => true
	     *
	     * _.isObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isObject(1);
	     * // => false
	     */
	    function isObject(value) {
	      // Avoid a V8 JIT bug in Chrome 19-20.
	      // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	      var type = typeof value;
	      return !!value && (type == 'object' || type == 'function');
	    }

	    /**
	     * Performs a deep comparison between `object` and `source` to determine if
	     * `object` contains equivalent property values. If `customizer` is provided
	     * it is invoked to compare values. If `customizer` returns `undefined`
	     * comparisons are handled by the method instead. The `customizer` is bound
	     * to `thisArg` and invoked with three arguments: (value, other, index|key).
	     *
	     * **Note:** This method supports comparing properties of arrays, booleans,
	     * `Date` objects, numbers, `Object` objects, regexes, and strings. Functions
	     * and DOM nodes are **not** supported. Provide a customizer function to extend
	     * support for comparing other values.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Function} [customizer] The function to customize value comparisons.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.isMatch(object, { 'age': 40 });
	     * // => true
	     *
	     * _.isMatch(object, { 'age': 36 });
	     * // => false
	     *
	     * // using a customizer callback
	     * var object = { 'greeting': 'hello' };
	     * var source = { 'greeting': 'hi' };
	     *
	     * _.isMatch(object, source, function(value, other) {
	     *   return _.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/) || undefined;
	     * });
	     * // => true
	     */
	    function isMatch(object, source, customizer, thisArg) {
	      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
	      return baseIsMatch(object, getMatchData(source), customizer);
	    }

	    /**
	     * Checks if `value` is `NaN`.
	     *
	     * **Note:** This method is not the same as [`isNaN`](https://es5.github.io/#x15.1.2.4)
	     * which returns `true` for `undefined` and other non-numeric values.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	     * @example
	     *
	     * _.isNaN(NaN);
	     * // => true
	     *
	     * _.isNaN(new Number(NaN));
	     * // => true
	     *
	     * isNaN(undefined);
	     * // => true
	     *
	     * _.isNaN(undefined);
	     * // => false
	     */
	    function isNaN(value) {
	      // An `NaN` primitive is the only value that is not equal to itself.
	      // Perform the `toStringTag` check first to avoid errors with some host objects in IE.
	      return isNumber(value) && value != +value;
	    }

	    /**
	     * Checks if `value` is a native function.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	     * @example
	     *
	     * _.isNative(Array.prototype.push);
	     * // => true
	     *
	     * _.isNative(_);
	     * // => false
	     */
	    function isNative(value) {
	      if (value == null) {
	        return false;
	      }
	      if (isFunction(value)) {
	        return reIsNative.test(fnToString.call(value));
	      }
	      return isObjectLike(value) && reIsHostCtor.test(value);
	    }

	    /**
	     * Checks if `value` is `null`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	     * @example
	     *
	     * _.isNull(null);
	     * // => true
	     *
	     * _.isNull(void 0);
	     * // => false
	     */
	    function isNull(value) {
	      return value === null;
	    }

	    /**
	     * Checks if `value` is classified as a `Number` primitive or object.
	     *
	     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
	     * as numbers, use the `_.isFinite` method.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isNumber(8.4);
	     * // => true
	     *
	     * _.isNumber(NaN);
	     * // => true
	     *
	     * _.isNumber('8.4');
	     * // => false
	     */
	    function isNumber(value) {
	      return typeof value == 'number' || (isObjectLike(value) && objToString.call(value) == numberTag);
	    }

	    /**
	     * Checks if `value` is a plain object, that is, an object created by the
	     * `Object` constructor or one with a `[[Prototype]]` of `null`.
	     *
	     * **Note:** This method assumes objects created by the `Object` constructor
	     * have no inherited enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * _.isPlainObject(new Foo);
	     * // => false
	     *
	     * _.isPlainObject([1, 2, 3]);
	     * // => false
	     *
	     * _.isPlainObject({ 'x': 0, 'y': 0 });
	     * // => true
	     *
	     * _.isPlainObject(Object.create(null));
	     * // => true
	     */
	    function isPlainObject(value) {
	      var Ctor;

	      // Exit early for non `Object` objects.
	      if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	          (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	        return false;
	      }
	      // IE < 9 iterates inherited properties before own properties. If the first
	      // iterated property is an object's own property then there are no inherited
	      // enumerable properties.
	      var result;
	      // In most environments an object's own properties are iterated before
	      // its inherited properties. If the last iterated property is an object's
	      // own property then there are no inherited enumerable properties.
	      baseForIn(value, function(subValue, key) {
	        result = key;
	      });
	      return result === undefined || hasOwnProperty.call(value, result);
	    }

	    /**
	     * Checks if `value` is classified as a `RegExp` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isRegExp(/abc/);
	     * // => true
	     *
	     * _.isRegExp('/abc/');
	     * // => false
	     */
	    function isRegExp(value) {
	      return isObject(value) && objToString.call(value) == regexpTag;
	    }

	    /**
	     * Checks if `value` is classified as a `String` primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isString('abc');
	     * // => true
	     *
	     * _.isString(1);
	     * // => false
	     */
	    function isString(value) {
	      return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
	    }

	    /**
	     * Checks if `value` is classified as a typed array.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isTypedArray(new Uint8Array);
	     * // => true
	     *
	     * _.isTypedArray([]);
	     * // => false
	     */
	    function isTypedArray(value) {
	      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	    }

	    /**
	     * Checks if `value` is `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	     * @example
	     *
	     * _.isUndefined(void 0);
	     * // => true
	     *
	     * _.isUndefined(null);
	     * // => false
	     */
	    function isUndefined(value) {
	      return value === undefined;
	    }

	    /**
	     * Checks if `value` is less than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than `other`, else `false`.
	     * @example
	     *
	     * _.lt(1, 3);
	     * // => true
	     *
	     * _.lt(3, 3);
	     * // => false
	     *
	     * _.lt(3, 1);
	     * // => false
	     */
	    function lt(value, other) {
	      return value < other;
	    }

	    /**
	     * Checks if `value` is less than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than or equal to `other`, else `false`.
	     * @example
	     *
	     * _.lte(1, 3);
	     * // => true
	     *
	     * _.lte(3, 3);
	     * // => true
	     *
	     * _.lte(3, 1);
	     * // => false
	     */
	    function lte(value, other) {
	      return value <= other;
	    }

	    /**
	     * Converts `value` to an array.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Array} Returns the converted array.
	     * @example
	     *
	     * (function() {
	     *   return _.toArray(arguments).slice(1);
	     * }(1, 2, 3));
	     * // => [2, 3]
	     */
	    function toArray(value) {
	      var length = value ? getLength(value) : 0;
	      if (!isLength(length)) {
	        return values(value);
	      }
	      if (!length) {
	        return [];
	      }
	      return arrayCopy(value);
	    }

	    /**
	     * Converts `value` to a plain object flattening inherited enumerable
	     * properties of `value` to own properties of the plain object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Object} Returns the converted plain object.
	     * @example
	     *
	     * function Foo() {
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.assign({ 'a': 1 }, new Foo);
	     * // => { 'a': 1, 'b': 2 }
	     *
	     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	     * // => { 'a': 1, 'b': 2, 'c': 3 }
	     */
	    function toPlainObject(value) {
	      return baseCopy(value, keysIn(value));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Recursively merges own enumerable properties of the source object(s), that
	     * don't resolve to `undefined` into the destination object. Subsequent sources
	     * overwrite property assignments of previous sources. If `customizer` is
	     * provided it is invoked to produce the merged values of the destination and
	     * source properties. If `customizer` returns `undefined` merging is handled
	     * by the method instead. The `customizer` is bound to `thisArg` and invoked
	     * with five arguments: (objectValue, sourceValue, key, object, source).
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var users = {
	     *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
	     * };
	     *
	     * var ages = {
	     *   'data': [{ 'age': 36 }, { 'age': 40 }]
	     * };
	     *
	     * _.merge(users, ages);
	     * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
	     *
	     * // using a customizer callback
	     * var object = {
	     *   'fruits': ['apple'],
	     *   'vegetables': ['beet']
	     * };
	     *
	     * var other = {
	     *   'fruits': ['banana'],
	     *   'vegetables': ['carrot']
	     * };
	     *
	     * _.merge(object, other, function(a, b) {
	     *   if (_.isArray(a)) {
	     *     return a.concat(b);
	     *   }
	     * });
	     * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
	     */
	    var merge = createAssigner(baseMerge);

	    /**
	     * Assigns own enumerable properties of source object(s) to the destination
	     * object. Subsequent sources overwrite property assignments of previous sources.
	     * If `customizer` is provided it is invoked to produce the assigned values.
	     * The `customizer` is bound to `thisArg` and invoked with five arguments:
	     * (objectValue, sourceValue, key, object, source).
	     *
	     * **Note:** This method mutates `object` and is based on
	     * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
	     *
	     * @static
	     * @memberOf _
	     * @alias extend
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
	     * // => { 'user': 'fred', 'age': 40 }
	     *
	     * // using a customizer callback
	     * var defaults = _.partialRight(_.assign, function(value, other) {
	     *   return _.isUndefined(value) ? other : value;
	     * });
	     *
	     * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var assign = createAssigner(function(object, source, customizer) {
	      return customizer
	        ? assignWith(object, source, customizer)
	        : baseAssign(object, source);
	    });

	    /**
	     * Creates an object that inherits from the given `prototype` object. If a
	     * `properties` object is provided its own enumerable properties are assigned
	     * to the created object.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} prototype The object to inherit from.
	     * @param {Object} [properties] The properties to assign to the object.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * function Shape() {
	     *   this.x = 0;
	     *   this.y = 0;
	     * }
	     *
	     * function Circle() {
	     *   Shape.call(this);
	     * }
	     *
	     * Circle.prototype = _.create(Shape.prototype, {
	     *   'constructor': Circle
	     * });
	     *
	     * var circle = new Circle;
	     * circle instanceof Circle;
	     * // => true
	     *
	     * circle instanceof Shape;
	     * // => true
	     */
	    function create(prototype, properties, guard) {
	      var result = baseCreate(prototype);
	      if (guard && isIterateeCall(prototype, properties, guard)) {
	        properties = undefined;
	      }
	      return properties ? baseAssign(result, properties) : result;
	    }

	    /**
	     * Assigns own enumerable properties of source object(s) to the destination
	     * object for all destination properties that resolve to `undefined`. Once a
	     * property is set, additional values of the same property are ignored.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var defaults = createDefaults(assign, assignDefaults);

	    /**
	     * This method is like `_.defaults` except that it recursively assigns
	     * default properties.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.defaultsDeep({ 'user': { 'name': 'barney' } }, { 'user': { 'name': 'fred', 'age': 36 } });
	     * // => { 'user': { 'name': 'barney', 'age': 36 } }
	     *
	     */
	    var defaultsDeep = createDefaults(merge, mergeDefaults);

	    /**
	     * This method is like `_.find` except that it returns the key of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findKey(users, function(chr) {
	     *   return chr.age < 40;
	     * });
	     * // => 'barney' (iteration order is not guaranteed)
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findKey(users, { 'age': 1, 'active': true });
	     * // => 'pebbles'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findKey(users, 'active', false);
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.findKey(users, 'active');
	     * // => 'barney'
	     */
	    var findKey = createFindKey(baseForOwn);

	    /**
	     * This method is like `_.findKey` except that it iterates over elements of
	     * a collection in the opposite order.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findLastKey(users, function(chr) {
	     *   return chr.age < 40;
	     * });
	     * // => returns `pebbles` assuming `_.findKey` returns `barney`
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findLastKey(users, { 'age': 36, 'active': true });
	     * // => 'barney'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findLastKey(users, 'active', false);
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.findLastKey(users, 'active');
	     * // => 'pebbles'
	     */
	    var findLastKey = createFindKey(baseForOwnRight);

	    /**
	     * Iterates over own and inherited enumerable properties of an object invoking
	     * `iteratee` for each property. The `iteratee` is bound to `thisArg` and invoked
	     * with three arguments: (value, key, object). Iteratee functions may exit
	     * iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forIn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'a', 'b', and 'c' (iteration order is not guaranteed)
	     */
	    var forIn = createForIn(baseFor);

	    /**
	     * This method is like `_.forIn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forInRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'c', 'b', and 'a' assuming `_.forIn ` logs 'a', 'b', and 'c'
	     */
	    var forInRight = createForIn(baseForRight);

	    /**
	     * Iterates over own enumerable properties of an object invoking `iteratee`
	     * for each property. The `iteratee` is bound to `thisArg` and invoked with
	     * three arguments: (value, key, object). Iteratee functions may exit iteration
	     * early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'a' and 'b' (iteration order is not guaranteed)
	     */
	    var forOwn = createForOwn(baseForOwn);

	    /**
	     * This method is like `_.forOwn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwnRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'b' and 'a' assuming `_.forOwn` logs 'a' and 'b'
	     */
	    var forOwnRight = createForOwn(baseForOwnRight);

	    /**
	     * Creates an array of function property names from all enumerable properties,
	     * own and inherited, of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @alias methods
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @returns {Array} Returns the new array of property names.
	     * @example
	     *
	     * _.functions(_);
	     * // => ['after', 'ary', 'assign', ...]
	     */
	    function functions(object) {
	      return baseFunctions(object, keysIn(object));
	    }

	    /**
	     * Gets the property value at `path` of `object`. If the resolved value is
	     * `undefined` the `defaultValue` is used in its place.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.get(object, 'a[0].b.c');
	     * // => 3
	     *
	     * _.get(object, ['a', '0', 'b', 'c']);
	     * // => 3
	     *
	     * _.get(object, 'a.b.c', 'default');
	     * // => 'default'
	     */
	    function get(object, path, defaultValue) {
	      var result = object == null ? undefined : baseGet(object, toPath(path), path + '');
	      return result === undefined ? defaultValue : result;
	    }

	    /**
	     * Checks if `path` is a direct property.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @returns {boolean} Returns `true` if `path` is a direct property, else `false`.
	     * @example
	     *
	     * var object = { 'a': { 'b': { 'c': 3 } } };
	     *
	     * _.has(object, 'a');
	     * // => true
	     *
	     * _.has(object, 'a.b.c');
	     * // => true
	     *
	     * _.has(object, ['a', 'b', 'c']);
	     * // => true
	     */
	    function has(object, path) {
	      if (object == null) {
	        return false;
	      }
	      var result = hasOwnProperty.call(object, path);
	      if (!result && !isKey(path)) {
	        path = toPath(path);
	        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	        if (object == null) {
	          return false;
	        }
	        path = last(path);
	        result = hasOwnProperty.call(object, path);
	      }
	      return result || (isLength(object.length) && isIndex(path, object.length) &&
	        (isArray(object) || isArguments(object)));
	    }

	    /**
	     * Creates an object composed of the inverted keys and values of `object`.
	     * If `object` contains duplicate values, subsequent values overwrite property
	     * assignments of previous values unless `multiValue` is `true`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to invert.
	     * @param {boolean} [multiValue] Allow multiple values per key.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Object} Returns the new inverted object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2, 'c': 1 };
	     *
	     * _.invert(object);
	     * // => { '1': 'c', '2': 'b' }
	     *
	     * // with `multiValue`
	     * _.invert(object, true);
	     * // => { '1': ['a', 'c'], '2': ['b'] }
	     */
	    function invert(object, multiValue, guard) {
	      if (guard && isIterateeCall(object, multiValue, guard)) {
	        multiValue = undefined;
	      }
	      var index = -1,
	          props = keys(object),
	          length = props.length,
	          result = {};

	      while (++index < length) {
	        var key = props[index],
	            value = object[key];

	        if (multiValue) {
	          if (hasOwnProperty.call(result, value)) {
	            result[value].push(key);
	          } else {
	            result[value] = [key];
	          }
	        }
	        else {
	          result[value] = key;
	        }
	      }
	      return result;
	    }

	    /**
	     * Creates an array of the own enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects. See the
	     * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	     * for more details.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keys(new Foo);
	     * // => ['a', 'b'] (iteration order is not guaranteed)
	     *
	     * _.keys('hi');
	     * // => ['0', '1']
	     */
	    var keys = !nativeKeys ? shimKeys : function(object) {
	      var Ctor = object == null ? undefined : object.constructor;
	      if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	          (typeof object != 'function' && isArrayLike(object))) {
	        return shimKeys(object);
	      }
	      return isObject(object) ? nativeKeys(object) : [];
	    };

	    /**
	     * Creates an array of the own and inherited enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keysIn(new Foo);
	     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	     */
	    function keysIn(object) {
	      if (object == null) {
	        return [];
	      }
	      if (!isObject(object)) {
	        object = Object(object);
	      }
	      var length = object.length;
	      length = (length && isLength(length) &&
	        (isArray(object) || isArguments(object)) && length) || 0;

	      var Ctor = object.constructor,
	          index = -1,
	          isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	          result = Array(length),
	          skipIndexes = length > 0;

	      while (++index < length) {
	        result[index] = (index + '');
	      }
	      for (var key in object) {
	        if (!(skipIndexes && isIndex(key, length)) &&
	            !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	          result.push(key);
	        }
	      }
	      return result;
	    }

	    /**
	     * The opposite of `_.mapValues`; this method creates an object with the
	     * same values as `object` and keys generated by running each own enumerable
	     * property of `object` through `iteratee`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the new mapped object.
	     * @example
	     *
	     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
	     *   return key + value;
	     * });
	     * // => { 'a1': 1, 'b2': 2 }
	     */
	    var mapKeys = createObjectMapper(true);

	    /**
	     * Creates an object with the same keys as `object` and values generated by
	     * running each own enumerable property of `object` through `iteratee`. The
	     * iteratee function is bound to `thisArg` and invoked with three arguments:
	     * (value, key, object).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the new mapped object.
	     * @example
	     *
	     * _.mapValues({ 'a': 1, 'b': 2 }, function(n) {
	     *   return n * 3;
	     * });
	     * // => { 'a': 3, 'b': 6 }
	     *
	     * var users = {
	     *   'fred':    { 'user': 'fred',    'age': 40 },
	     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	     * };
	     *
	     * // using the `_.property` callback shorthand
	     * _.mapValues(users, 'age');
	     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	     */
	    var mapValues = createObjectMapper();

	    /**
	     * The opposite of `_.pick`; this method creates an object composed of the
	     * own and inherited enumerable properties of `object` that are not omitted.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function|...(string|string[])} [predicate] The function invoked per
	     *  iteration or property names to omit, specified as individual property
	     *  names or arrays of property names.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.omit(object, 'age');
	     * // => { 'user': 'fred' }
	     *
	     * _.omit(object, _.isNumber);
	     * // => { 'user': 'fred' }
	     */
	    var omit = restParam(function(object, props) {
	      if (object == null) {
	        return {};
	      }
	      if (typeof props[0] != 'function') {
	        var props = arrayMap(baseFlatten(props), String);
	        return pickByArray(object, baseDifference(keysIn(object), props));
	      }
	      var predicate = bindCallback(props[0], props[1], 3);
	      return pickByCallback(object, function(value, key, object) {
	        return !predicate(value, key, object);
	      });
	    });

	    /**
	     * Creates a two dimensional array of the key-value pairs for `object`,
	     * e.g. `[[key1, value1], [key2, value2]]`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the new array of key-value pairs.
	     * @example
	     *
	     * _.pairs({ 'barney': 36, 'fred': 40 });
	     * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
	     */
	    function pairs(object) {
	      object = toObject(object);

	      var index = -1,
	          props = keys(object),
	          length = props.length,
	          result = Array(length);

	      while (++index < length) {
	        var key = props[index];
	        result[index] = [key, object[key]];
	      }
	      return result;
	    }

	    /**
	     * Creates an object composed of the picked `object` properties. Property
	     * names may be specified as individual arguments or as arrays of property
	     * names. If `predicate` is provided it is invoked for each property of `object`
	     * picking the properties `predicate` returns truthy for. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, key, object).
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function|...(string|string[])} [predicate] The function invoked per
	     *  iteration or property names to pick, specified as individual property
	     *  names or arrays of property names.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.pick(object, 'user');
	     * // => { 'user': 'fred' }
	     *
	     * _.pick(object, _.isString);
	     * // => { 'user': 'fred' }
	     */
	    var pick = restParam(function(object, props) {
	      if (object == null) {
	        return {};
	      }
	      return typeof props[0] == 'function'
	        ? pickByCallback(object, bindCallback(props[0], props[1], 3))
	        : pickByArray(object, baseFlatten(props));
	    });

	    /**
	     * This method is like `_.get` except that if the resolved value is a function
	     * it is invoked with the `this` binding of its parent object and its result
	     * is returned.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to resolve.
	     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
	     *
	     * _.result(object, 'a[0].b.c1');
	     * // => 3
	     *
	     * _.result(object, 'a[0].b.c2');
	     * // => 4
	     *
	     * _.result(object, 'a.b.c', 'default');
	     * // => 'default'
	     *
	     * _.result(object, 'a.b.c', _.constant('default'));
	     * // => 'default'
	     */
	    function result(object, path, defaultValue) {
	      var result = object == null ? undefined : object[path];
	      if (result === undefined) {
	        if (object != null && !isKey(path, object)) {
	          path = toPath(path);
	          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	          result = object == null ? undefined : object[last(path)];
	        }
	        result = result === undefined ? defaultValue : result;
	      }
	      return isFunction(result) ? result.call(object) : result;
	    }

	    /**
	     * Sets the property value of `path` on `object`. If a portion of `path`
	     * does not exist it is created.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to augment.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.set(object, 'a[0].b.c', 4);
	     * console.log(object.a[0].b.c);
	     * // => 4
	     *
	     * _.set(object, 'x[0].y.z', 5);
	     * console.log(object.x[0].y.z);
	     * // => 5
	     */
	    function set(object, path, value) {
	      if (object == null) {
	        return object;
	      }
	      var pathKey = (path + '');
	      path = (object[pathKey] != null || isKey(path, object)) ? [pathKey] : toPath(path);

	      var index = -1,
	          length = path.length,
	          lastIndex = length - 1,
	          nested = object;

	      while (nested != null && ++index < length) {
	        var key = path[index];
	        if (isObject(nested)) {
	          if (index == lastIndex) {
	            nested[key] = value;
	          } else if (nested[key] == null) {
	            nested[key] = isIndex(path[index + 1]) ? [] : {};
	          }
	        }
	        nested = nested[key];
	      }
	      return object;
	    }

	    /**
	     * An alternative to `_.reduce`; this method transforms `object` to a new
	     * `accumulator` object which is the result of running each of its own enumerable
	     * properties through `iteratee`, with each invocation potentially mutating
	     * the `accumulator` object. The `iteratee` is bound to `thisArg` and invoked
	     * with four arguments: (accumulator, value, key, object). Iteratee functions
	     * may exit iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Array|Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The custom accumulator value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.transform([2, 3, 4], function(result, n) {
	     *   result.push(n *= n);
	     *   return n % 2 == 0;
	     * });
	     * // => [4, 9]
	     *
	     * _.transform({ 'a': 1, 'b': 2 }, function(result, n, key) {
	     *   result[key] = n * 3;
	     * });
	     * // => { 'a': 3, 'b': 6 }
	     */
	    function transform(object, iteratee, accumulator, thisArg) {
	      var isArr = isArray(object) || isTypedArray(object);
	      iteratee = getCallback(iteratee, thisArg, 4);

	      if (accumulator == null) {
	        if (isArr || isObject(object)) {
	          var Ctor = object.constructor;
	          if (isArr) {
	            accumulator = isArray(object) ? new Ctor : [];
	          } else {
	            accumulator = baseCreate(isFunction(Ctor) ? Ctor.prototype : undefined);
	          }
	        } else {
	          accumulator = {};
	        }
	      }
	      (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
	        return iteratee(accumulator, value, index, object);
	      });
	      return accumulator;
	    }

	    /**
	     * Creates an array of the own enumerable property values of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.values(new Foo);
	     * // => [1, 2] (iteration order is not guaranteed)
	     *
	     * _.values('hi');
	     * // => ['h', 'i']
	     */
	    function values(object) {
	      return baseValues(object, keys(object));
	    }

	    /**
	     * Creates an array of the own and inherited enumerable property values
	     * of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.valuesIn(new Foo);
	     * // => [1, 2, 3] (iteration order is not guaranteed)
	     */
	    function valuesIn(object) {
	      return baseValues(object, keysIn(object));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Checks if `n` is between `start` and up to but not including, `end`. If
	     * `end` is not specified it is set to `start` with `start` then set to `0`.
	     *
	     * @static
	     * @memberOf _
	     * @category Number
	     * @param {number} n The number to check.
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `n` is in the range, else `false`.
	     * @example
	     *
	     * _.inRange(3, 2, 4);
	     * // => true
	     *
	     * _.inRange(4, 8);
	     * // => true
	     *
	     * _.inRange(4, 2);
	     * // => false
	     *
	     * _.inRange(2, 2);
	     * // => false
	     *
	     * _.inRange(1.2, 2);
	     * // => true
	     *
	     * _.inRange(5.2, 4);
	     * // => false
	     */
	    function inRange(value, start, end) {
	      start = +start || 0;
	      if (end === undefined) {
	        end = start;
	        start = 0;
	      } else {
	        end = +end || 0;
	      }
	      return value >= nativeMin(start, end) && value < nativeMax(start, end);
	    }

	    /**
	     * Produces a random number between `min` and `max` (inclusive). If only one
	     * argument is provided a number between `0` and the given number is returned.
	     * If `floating` is `true`, or either `min` or `max` are floats, a floating-point
	     * number is returned instead of an integer.
	     *
	     * @static
	     * @memberOf _
	     * @category Number
	     * @param {number} [min=0] The minimum possible value.
	     * @param {number} [max=1] The maximum possible value.
	     * @param {boolean} [floating] Specify returning a floating-point number.
	     * @returns {number} Returns the random number.
	     * @example
	     *
	     * _.random(0, 5);
	     * // => an integer between 0 and 5
	     *
	     * _.random(5);
	     * // => also an integer between 0 and 5
	     *
	     * _.random(5, true);
	     * // => a floating-point number between 0 and 5
	     *
	     * _.random(1.2, 5.2);
	     * // => a floating-point number between 1.2 and 5.2
	     */
	    function random(min, max, floating) {
	      if (floating && isIterateeCall(min, max, floating)) {
	        max = floating = undefined;
	      }
	      var noMin = min == null,
	          noMax = max == null;

	      if (floating == null) {
	        if (noMax && typeof min == 'boolean') {
	          floating = min;
	          min = 1;
	        }
	        else if (typeof max == 'boolean') {
	          floating = max;
	          noMax = true;
	        }
	      }
	      if (noMin && noMax) {
	        max = 1;
	        noMax = false;
	      }
	      min = +min || 0;
	      if (noMax) {
	        max = min;
	        min = 0;
	      } else {
	        max = +max || 0;
	      }
	      if (floating || min % 1 || max % 1) {
	        var rand = nativeRandom();
	        return nativeMin(min + (rand * (max - min + parseFloat('1e-' + ((rand + '').length - 1)))), max);
	      }
	      return baseRandom(min, max);
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the camel cased string.
	     * @example
	     *
	     * _.camelCase('Foo Bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('--foo-bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('__foo_bar__');
	     * // => 'fooBar'
	     */
	    var camelCase = createCompounder(function(result, word, index) {
	      word = word.toLowerCase();
	      return result + (index ? (word.charAt(0).toUpperCase() + word.slice(1)) : word);
	    });

	    /**
	     * Capitalizes the first character of `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to capitalize.
	     * @returns {string} Returns the capitalized string.
	     * @example
	     *
	     * _.capitalize('fred');
	     * // => 'Fred'
	     */
	    function capitalize(string) {
	      string = baseToString(string);
	      return string && (string.charAt(0).toUpperCase() + string.slice(1));
	    }

	    /**
	     * Deburrs `string` by converting [latin-1 supplementary letters](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	     * to basic latin letters and removing [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to deburr.
	     * @returns {string} Returns the deburred string.
	     * @example
	     *
	     * _.deburr('déjà vu');
	     * // => 'deja vu'
	     */
	    function deburr(string) {
	      string = baseToString(string);
	      return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
	    }

	    /**
	     * Checks if `string` ends with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to search.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=string.length] The position to search from.
	     * @returns {boolean} Returns `true` if `string` ends with `target`, else `false`.
	     * @example
	     *
	     * _.endsWith('abc', 'c');
	     * // => true
	     *
	     * _.endsWith('abc', 'b');
	     * // => false
	     *
	     * _.endsWith('abc', 'b', 2);
	     * // => true
	     */
	    function endsWith(string, target, position) {
	      string = baseToString(string);
	      target = (target + '');

	      var length = string.length;
	      position = position === undefined
	        ? length
	        : nativeMin(position < 0 ? 0 : (+position || 0), length);

	      position -= target.length;
	      return position >= 0 && string.indexOf(target, position) == position;
	    }

	    /**
	     * Converts the characters "&", "<", ">", '"', "'", and "\`", in `string` to
	     * their corresponding HTML entities.
	     *
	     * **Note:** No other characters are escaped. To escape additional characters
	     * use a third-party library like [_he_](https://mths.be/he).
	     *
	     * Though the ">" character is escaped for symmetry, characters like
	     * ">" and "/" don't need escaping in HTML and have no special meaning
	     * unless they're part of a tag or unquoted attribute value.
	     * See [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
	     * (under "semi-related fun fact") for more details.
	     *
	     * Backticks are escaped because in Internet Explorer < 9, they can break out
	     * of attribute values or HTML comments. See [#59](https://html5sec.org/#59),
	     * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
	     * [#133](https://html5sec.org/#133) of the [HTML5 Security Cheatsheet](https://html5sec.org/)
	     * for more details.
	     *
	     * When working with HTML you should always [quote attribute values](http://wonko.com/post/html-escaping)
	     * to reduce XSS vectors.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escape('fred, barney, & pebbles');
	     * // => 'fred, barney, &amp; pebbles'
	     */
	    function escape(string) {
	      // Reset `lastIndex` because in IE < 9 `String#replace` does not.
	      string = baseToString(string);
	      return (string && reHasUnescapedHtml.test(string))
	        ? string.replace(reUnescapedHtml, escapeHtmlChar)
	        : string;
	    }

	    /**
	     * Escapes the `RegExp` special characters "\", "/", "^", "$", ".", "|", "?",
	     * "*", "+", "(", ")", "[", "]", "{" and "}" in `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escapeRegExp('[lodash](https://lodash.com/)');
	     * // => '\[lodash\]\(https:\/\/lodash\.com\/\)'
	     */
	    function escapeRegExp(string) {
	      string = baseToString(string);
	      return (string && reHasRegExpChars.test(string))
	        ? string.replace(reRegExpChars, escapeRegExpChar)
	        : (string || '(?:)');
	    }

	    /**
	     * Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the kebab cased string.
	     * @example
	     *
	     * _.kebabCase('Foo Bar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('fooBar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('__foo_bar__');
	     * // => 'foo-bar'
	     */
	    var kebabCase = createCompounder(function(result, word, index) {
	      return result + (index ? '-' : '') + word.toLowerCase();
	    });

	    /**
	     * Pads `string` on the left and right sides if it's shorter than `length`.
	     * Padding characters are truncated if they can't be evenly divided by `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.pad('abc', 8);
	     * // => '  abc   '
	     *
	     * _.pad('abc', 8, '_-');
	     * // => '_-abc_-_'
	     *
	     * _.pad('abc', 3);
	     * // => 'abc'
	     */
	    function pad(string, length, chars) {
	      string = baseToString(string);
	      length = +length;

	      var strLength = string.length;
	      if (strLength >= length || !nativeIsFinite(length)) {
	        return string;
	      }
	      var mid = (length - strLength) / 2,
	          leftLength = nativeFloor(mid),
	          rightLength = nativeCeil(mid);

	      chars = createPadding('', rightLength, chars);
	      return chars.slice(0, leftLength) + string + chars;
	    }

	    /**
	     * Pads `string` on the left side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padLeft('abc', 6);
	     * // => '   abc'
	     *
	     * _.padLeft('abc', 6, '_-');
	     * // => '_-_abc'
	     *
	     * _.padLeft('abc', 3);
	     * // => 'abc'
	     */
	    var padLeft = createPadDir();

	    /**
	     * Pads `string` on the right side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padRight('abc', 6);
	     * // => 'abc   '
	     *
	     * _.padRight('abc', 6, '_-');
	     * // => 'abc_-_'
	     *
	     * _.padRight('abc', 3);
	     * // => 'abc'
	     */
	    var padRight = createPadDir(true);

	    /**
	     * Converts `string` to an integer of the specified radix. If `radix` is
	     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a hexadecimal,
	     * in which case a `radix` of `16` is used.
	     *
	     * **Note:** This method aligns with the [ES5 implementation](https://es5.github.io/#E)
	     * of `parseInt`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} string The string to convert.
	     * @param {number} [radix] The radix to interpret `value` by.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.parseInt('08');
	     * // => 8
	     *
	     * _.map(['6', '08', '10'], _.parseInt);
	     * // => [6, 8, 10]
	     */
	    function parseInt(string, radix, guard) {
	      // Firefox < 21 and Opera < 15 follow ES3 for `parseInt`.
	      // Chrome fails to trim leading <BOM> whitespace characters.
	      // See https://code.google.com/p/v8/issues/detail?id=3109 for more details.
	      if (guard ? isIterateeCall(string, radix, guard) : radix == null) {
	        radix = 0;
	      } else if (radix) {
	        radix = +radix;
	      }
	      string = trim(string);
	      return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
	    }

	    /**
	     * Repeats the given string `n` times.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to repeat.
	     * @param {number} [n=0] The number of times to repeat the string.
	     * @returns {string} Returns the repeated string.
	     * @example
	     *
	     * _.repeat('*', 3);
	     * // => '***'
	     *
	     * _.repeat('abc', 2);
	     * // => 'abcabc'
	     *
	     * _.repeat('abc', 0);
	     * // => ''
	     */
	    function repeat(string, n) {
	      var result = '';
	      string = baseToString(string);
	      n = +n;
	      if (n < 1 || !string || !nativeIsFinite(n)) {
	        return result;
	      }
	      // Leverage the exponentiation by squaring algorithm for a faster repeat.
	      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
	      do {
	        if (n % 2) {
	          result += string;
	        }
	        n = nativeFloor(n / 2);
	        string += string;
	      } while (n);

	      return result;
	    }

	    /**
	     * Converts `string` to [snake case](https://en.wikipedia.org/wiki/Snake_case).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the snake cased string.
	     * @example
	     *
	     * _.snakeCase('Foo Bar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('fooBar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('--foo-bar');
	     * // => 'foo_bar'
	     */
	    var snakeCase = createCompounder(function(result, word, index) {
	      return result + (index ? '_' : '') + word.toLowerCase();
	    });

	    /**
	     * Converts `string` to [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the start cased string.
	     * @example
	     *
	     * _.startCase('--foo-bar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('fooBar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('__foo_bar__');
	     * // => 'Foo Bar'
	     */
	    var startCase = createCompounder(function(result, word, index) {
	      return result + (index ? ' ' : '') + (word.charAt(0).toUpperCase() + word.slice(1));
	    });

	    /**
	     * Checks if `string` starts with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to search.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=0] The position to search from.
	     * @returns {boolean} Returns `true` if `string` starts with `target`, else `false`.
	     * @example
	     *
	     * _.startsWith('abc', 'a');
	     * // => true
	     *
	     * _.startsWith('abc', 'b');
	     * // => false
	     *
	     * _.startsWith('abc', 'b', 1);
	     * // => true
	     */
	    function startsWith(string, target, position) {
	      string = baseToString(string);
	      position = position == null
	        ? 0
	        : nativeMin(position < 0 ? 0 : (+position || 0), string.length);

	      return string.lastIndexOf(target, position) == position;
	    }

	    /**
	     * Creates a compiled template function that can interpolate data properties
	     * in "interpolate" delimiters, HTML-escape interpolated data properties in
	     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
	     * properties may be accessed as free variables in the template. If a setting
	     * object is provided it takes precedence over `_.templateSettings` values.
	     *
	     * **Note:** In the development build `_.template` utilizes
	     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
	     * for easier debugging.
	     *
	     * For more information on precompiling templates see
	     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
	     *
	     * For more information on Chrome extension sandboxes see
	     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The template string.
	     * @param {Object} [options] The options object.
	     * @param {RegExp} [options.escape] The HTML "escape" delimiter.
	     * @param {RegExp} [options.evaluate] The "evaluate" delimiter.
	     * @param {Object} [options.imports] An object to import into the template as free variables.
	     * @param {RegExp} [options.interpolate] The "interpolate" delimiter.
	     * @param {string} [options.sourceURL] The sourceURL of the template's compiled source.
	     * @param {string} [options.variable] The data object variable name.
	     * @param- {Object} [otherOptions] Enables the legacy `options` param signature.
	     * @returns {Function} Returns the compiled template function.
	     * @example
	     *
	     * // using the "interpolate" delimiter to create a compiled template
	     * var compiled = _.template('hello <%= user %>!');
	     * compiled({ 'user': 'fred' });
	     * // => 'hello fred!'
	     *
	     * // using the HTML "escape" delimiter to escape data property values
	     * var compiled = _.template('<b><%- value %></b>');
	     * compiled({ 'value': '<script>' });
	     * // => '<b>&lt;script&gt;</b>'
	     *
	     * // using the "evaluate" delimiter to execute JavaScript and generate HTML
	     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // using the internal `print` function in "evaluate" delimiters
	     * var compiled = _.template('<% print("hello " + user); %>!');
	     * compiled({ 'user': 'barney' });
	     * // => 'hello barney!'
	     *
	     * // using the ES delimiter as an alternative to the default "interpolate" delimiter
	     * var compiled = _.template('hello ${ user }!');
	     * compiled({ 'user': 'pebbles' });
	     * // => 'hello pebbles!'
	     *
	     * // using custom template delimiters
	     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
	     * var compiled = _.template('hello {{ user }}!');
	     * compiled({ 'user': 'mustache' });
	     * // => 'hello mustache!'
	     *
	     * // using backslashes to treat delimiters as plain text
	     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
	     * compiled({ 'value': 'ignored' });
	     * // => '<%- value %>'
	     *
	     * // using the `imports` option to import `jQuery` as `jq`
	     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
	     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // using the `sourceURL` option to specify a custom sourceURL for the template
	     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
	     * compiled(data);
	     * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
	     *
	     * // using the `variable` option to ensure a with-statement isn't used in the compiled template
	     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
	     * compiled.source;
	     * // => function(data) {
	     * //   var __t, __p = '';
	     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
	     * //   return __p;
	     * // }
	     *
	     * // using the `source` property to inline compiled templates for meaningful
	     * // line numbers in error messages and a stack trace
	     * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
	     *   var JST = {\
	     *     "main": ' + _.template(mainText).source + '\
	     *   };\
	     * ');
	     */
	    function template(string, options, otherOptions) {
	      // Based on John Resig's `tmpl` implementation (http://ejohn.org/blog/javascript-micro-templating/)
	      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
	      var settings = lodash.templateSettings;

	      if (otherOptions && isIterateeCall(string, options, otherOptions)) {
	        options = otherOptions = undefined;
	      }
	      string = baseToString(string);
	      options = assignWith(baseAssign({}, otherOptions || options), settings, assignOwnDefaults);

	      var imports = assignWith(baseAssign({}, options.imports), settings.imports, assignOwnDefaults),
	          importsKeys = keys(imports),
	          importsValues = baseValues(imports, importsKeys);

	      var isEscaping,
	          isEvaluating,
	          index = 0,
	          interpolate = options.interpolate || reNoMatch,
	          source = "__p += '";

	      // Compile the regexp to match each delimiter.
	      var reDelimiters = RegExp(
	        (options.escape || reNoMatch).source + '|' +
	        interpolate.source + '|' +
	        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
	        (options.evaluate || reNoMatch).source + '|$'
	      , 'g');

	      // Use a sourceURL for easier debugging.
	      var sourceURL = '//# sourceURL=' +
	        ('sourceURL' in options
	          ? options.sourceURL
	          : ('lodash.templateSources[' + (++templateCounter) + ']')
	        ) + '\n';

	      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
	        interpolateValue || (interpolateValue = esTemplateValue);

	        // Escape characters that can't be included in string literals.
	        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

	        // Replace delimiters with snippets.
	        if (escapeValue) {
	          isEscaping = true;
	          source += "' +\n__e(" + escapeValue + ") +\n'";
	        }
	        if (evaluateValue) {
	          isEvaluating = true;
	          source += "';\n" + evaluateValue + ";\n__p += '";
	        }
	        if (interpolateValue) {
	          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
	        }
	        index = offset + match.length;

	        // The JS engine embedded in Adobe products requires returning the `match`
	        // string in order to produce the correct `offset` value.
	        return match;
	      });

	      source += "';\n";

	      // If `variable` is not specified wrap a with-statement around the generated
	      // code to add the data object to the top of the scope chain.
	      var variable = options.variable;
	      if (!variable) {
	        source = 'with (obj) {\n' + source + '\n}\n';
	      }
	      // Cleanup code by stripping empty strings.
	      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
	        .replace(reEmptyStringMiddle, '$1')
	        .replace(reEmptyStringTrailing, '$1;');

	      // Frame code as the function body.
	      source = 'function(' + (variable || 'obj') + ') {\n' +
	        (variable
	          ? ''
	          : 'obj || (obj = {});\n'
	        ) +
	        "var __t, __p = ''" +
	        (isEscaping
	           ? ', __e = _.escape'
	           : ''
	        ) +
	        (isEvaluating
	          ? ', __j = Array.prototype.join;\n' +
	            "function print() { __p += __j.call(arguments, '') }\n"
	          : ';\n'
	        ) +
	        source +
	        'return __p\n}';

	      var result = attempt(function() {
	        return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
	      });

	      // Provide the compiled function's source by its `toString` method or
	      // the `source` property as a convenience for inlining compiled templates.
	      result.source = source;
	      if (isError(result)) {
	        throw result;
	      }
	      return result;
	    }

	    /**
	     * Removes leading and trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trim('  abc  ');
	     * // => 'abc'
	     *
	     * _.trim('-_-abc-_-', '_-');
	     * // => 'abc'
	     *
	     * _.map(['  foo  ', '  bar  '], _.trim);
	     * // => ['foo', 'bar']
	     */
	    function trim(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
	      }
	      chars = (chars + '');
	      return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
	    }

	    /**
	     * Removes leading whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimLeft('  abc  ');
	     * // => 'abc  '
	     *
	     * _.trimLeft('-_-abc-_-', '_-');
	     * // => 'abc-_-'
	     */
	    function trimLeft(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(trimmedLeftIndex(string));
	      }
	      return string.slice(charsLeftIndex(string, (chars + '')));
	    }

	    /**
	     * Removes trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimRight('  abc  ');
	     * // => '  abc'
	     *
	     * _.trimRight('-_-abc-_-', '_-');
	     * // => '-_-abc'
	     */
	    function trimRight(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(0, trimmedRightIndex(string) + 1);
	      }
	      return string.slice(0, charsRightIndex(string, (chars + '')) + 1);
	    }

	    /**
	     * Truncates `string` if it's longer than the given maximum string length.
	     * The last characters of the truncated string are replaced with the omission
	     * string which defaults to "...".
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to truncate.
	     * @param {Object|number} [options] The options object or maximum string length.
	     * @param {number} [options.length=30] The maximum string length.
	     * @param {string} [options.omission='...'] The string to indicate text is omitted.
	     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the truncated string.
	     * @example
	     *
	     * _.trunc('hi-diddly-ho there, neighborino');
	     * // => 'hi-diddly-ho there, neighbo...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', 24);
	     * // => 'hi-diddly-ho there, n...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': ' '
	     * });
	     * // => 'hi-diddly-ho there,...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': /,? +/
	     * });
	     * // => 'hi-diddly-ho there...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'omission': ' [...]'
	     * });
	     * // => 'hi-diddly-ho there, neig [...]'
	     */
	    function trunc(string, options, guard) {
	      if (guard && isIterateeCall(string, options, guard)) {
	        options = undefined;
	      }
	      var length = DEFAULT_TRUNC_LENGTH,
	          omission = DEFAULT_TRUNC_OMISSION;

	      if (options != null) {
	        if (isObject(options)) {
	          var separator = 'separator' in options ? options.separator : separator;
	          length = 'length' in options ? (+options.length || 0) : length;
	          omission = 'omission' in options ? baseToString(options.omission) : omission;
	        } else {
	          length = +options || 0;
	        }
	      }
	      string = baseToString(string);
	      if (length >= string.length) {
	        return string;
	      }
	      var end = length - omission.length;
	      if (end < 1) {
	        return omission;
	      }
	      var result = string.slice(0, end);
	      if (separator == null) {
	        return result + omission;
	      }
	      if (isRegExp(separator)) {
	        if (string.slice(end).search(separator)) {
	          var match,
	              newEnd,
	              substring = string.slice(0, end);

	          if (!separator.global) {
	            separator = RegExp(separator.source, (reFlags.exec(separator) || '') + 'g');
	          }
	          separator.lastIndex = 0;
	          while ((match = separator.exec(substring))) {
	            newEnd = match.index;
	          }
	          result = result.slice(0, newEnd == null ? end : newEnd);
	        }
	      } else if (string.indexOf(separator, end) != end) {
	        var index = result.lastIndexOf(separator);
	        if (index > -1) {
	          result = result.slice(0, index);
	        }
	      }
	      return result + omission;
	    }

	    /**
	     * The inverse of `_.escape`; this method converts the HTML entities
	     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to their
	     * corresponding characters.
	     *
	     * **Note:** No other HTML entities are unescaped. To unescape additional HTML
	     * entities use a third-party library like [_he_](https://mths.be/he).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to unescape.
	     * @returns {string} Returns the unescaped string.
	     * @example
	     *
	     * _.unescape('fred, barney, &amp; pebbles');
	     * // => 'fred, barney, & pebbles'
	     */
	    function unescape(string) {
	      string = baseToString(string);
	      return (string && reHasEscapedHtml.test(string))
	        ? string.replace(reEscapedHtml, unescapeHtmlChar)
	        : string;
	    }

	    /**
	     * Splits `string` into an array of its words.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {RegExp|string} [pattern] The pattern to match words.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the words of `string`.
	     * @example
	     *
	     * _.words('fred, barney, & pebbles');
	     * // => ['fred', 'barney', 'pebbles']
	     *
	     * _.words('fred, barney, & pebbles', /[^, ]+/g);
	     * // => ['fred', 'barney', '&', 'pebbles']
	     */
	    function words(string, pattern, guard) {
	      if (guard && isIterateeCall(string, pattern, guard)) {
	        pattern = undefined;
	      }
	      string = baseToString(string);
	      return string.match(pattern || reWords) || [];
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Attempts to invoke `func`, returning either the result or the caught error
	     * object. Any additional arguments are provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Function} func The function to attempt.
	     * @returns {*} Returns the `func` result or error object.
	     * @example
	     *
	     * // avoid throwing errors for invalid selectors
	     * var elements = _.attempt(function(selector) {
	     *   return document.querySelectorAll(selector);
	     * }, '>_>');
	     *
	     * if (_.isError(elements)) {
	     *   elements = [];
	     * }
	     */
	    var attempt = restParam(function(func, args) {
	      try {
	        return func.apply(undefined, args);
	      } catch(e) {
	        return isError(e) ? e : new Error(e);
	      }
	    });

	    /**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and arguments of the created function. If `func` is a property name the
	     * created callback returns the property value for a given element. If `func`
	     * is an object the created callback returns `true` for elements that contain
	     * the equivalent object properties, otherwise it returns `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias iteratee
	     * @category Utility
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the callback.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // wrap to create custom callback shorthands
	     * _.callback = _.wrap(_.callback, function(callback, func, thisArg) {
	     *   var match = /^(.+?)__([gl]t)(.+)$/.exec(func);
	     *   if (!match) {
	     *     return callback(func, thisArg);
	     *   }
	     *   return function(object) {
	     *     return match[2] == 'gt'
	     *       ? object[match[1]] > match[3]
	     *       : object[match[1]] < match[3];
	     *   };
	     * });
	     *
	     * _.filter(users, 'age__gt36');
	     * // => [{ 'user': 'fred', 'age': 40 }]
	     */
	    function callback(func, thisArg, guard) {
	      if (guard && isIterateeCall(func, thisArg, guard)) {
	        thisArg = undefined;
	      }
	      return isObjectLike(func)
	        ? matches(func)
	        : baseCallback(func, thisArg);
	    }

	    /**
	     * Creates a function that returns `value`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {*} value The value to return from the new function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     * var getter = _.constant(object);
	     *
	     * getter() === object;
	     * // => true
	     */
	    function constant(value) {
	      return function() {
	        return value;
	      };
	    }

	    /**
	     * This method returns the first argument provided to it.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {*} value Any value.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * _.identity(object) === object;
	     * // => true
	     */
	    function identity(value) {
	      return value;
	    }

	    /**
	     * Creates a function that performs a deep comparison between a given object
	     * and `source`, returning `true` if the given object has equivalent property
	     * values, else `false`.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.filter(users, _.matches({ 'age': 40, 'active': false }));
	     * // => [{ 'user': 'fred', 'age': 40, 'active': false }]
	     */
	    function matches(source) {
	      return baseMatches(baseClone(source, true));
	    }

	    /**
	     * Creates a function that compares the property value of `path` on a given
	     * object to `value`.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * _.find(users, _.matchesProperty('user', 'fred'));
	     * // => { 'user': 'fred' }
	     */
	    function matchesProperty(path, srcValue) {
	      return baseMatchesProperty(path, baseClone(srcValue, true));
	    }

	    /**
	     * Creates a function that invokes the method at `path` on a given object.
	     * Any additional arguments are provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': { 'c': _.constant(2) } } },
	     *   { 'a': { 'b': { 'c': _.constant(1) } } }
	     * ];
	     *
	     * _.map(objects, _.method('a.b.c'));
	     * // => [2, 1]
	     *
	     * _.invoke(_.sortBy(objects, _.method(['a', 'b', 'c'])), 'a.b.c');
	     * // => [1, 2]
	     */
	    var method = restParam(function(path, args) {
	      return function(object) {
	        return invokePath(object, path, args);
	      };
	    });

	    /**
	     * The opposite of `_.method`; this method creates a function that invokes
	     * the method at a given path on `object`. Any additional arguments are
	     * provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} object The object to query.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var array = _.times(3, _.constant),
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
	     * // => [2, 0]
	     */
	    var methodOf = restParam(function(object, args) {
	      return function(path) {
	        return invokePath(object, path, args);
	      };
	    });

	    /**
	     * Adds all own enumerable function properties of a source object to the
	     * destination object. If `object` is a function then methods are added to
	     * its prototype as well.
	     *
	     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
	     * avoid conflicts caused by modifying the original.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Function|Object} [object=lodash] The destination object.
	     * @param {Object} source The object of functions to add.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.chain=true] Specify whether the functions added
	     *  are chainable.
	     * @returns {Function|Object} Returns `object`.
	     * @example
	     *
	     * function vowels(string) {
	     *   return _.filter(string, function(v) {
	     *     return /[aeiou]/i.test(v);
	     *   });
	     * }
	     *
	     * _.mixin({ 'vowels': vowels });
	     * _.vowels('fred');
	     * // => ['e']
	     *
	     * _('fred').vowels().value();
	     * // => ['e']
	     *
	     * _.mixin({ 'vowels': vowels }, { 'chain': false });
	     * _('fred').vowels();
	     * // => ['e']
	     */
	    function mixin(object, source, options) {
	      if (options == null) {
	        var isObj = isObject(source),
	            props = isObj ? keys(source) : undefined,
	            methodNames = (props && props.length) ? baseFunctions(source, props) : undefined;

	        if (!(methodNames ? methodNames.length : isObj)) {
	          methodNames = false;
	          options = source;
	          source = object;
	          object = this;
	        }
	      }
	      if (!methodNames) {
	        methodNames = baseFunctions(source, keys(source));
	      }
	      var chain = true,
	          index = -1,
	          isFunc = isFunction(object),
	          length = methodNames.length;

	      if (options === false) {
	        chain = false;
	      } else if (isObject(options) && 'chain' in options) {
	        chain = options.chain;
	      }
	      while (++index < length) {
	        var methodName = methodNames[index],
	            func = source[methodName];

	        object[methodName] = func;
	        if (isFunc) {
	          object.prototype[methodName] = (function(func) {
	            return function() {
	              var chainAll = this.__chain__;
	              if (chain || chainAll) {
	                var result = object(this.__wrapped__),
	                    actions = result.__actions__ = arrayCopy(this.__actions__);

	                actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
	                result.__chain__ = chainAll;
	                return result;
	              }
	              return func.apply(object, arrayPush([this.value()], arguments));
	            };
	          }(func));
	        }
	      }
	      return object;
	    }

	    /**
	     * Reverts the `_` variable to its previous value and returns a reference to
	     * the `lodash` function.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @returns {Function} Returns the `lodash` function.
	     * @example
	     *
	     * var lodash = _.noConflict();
	     */
	    function noConflict() {
	      root._ = oldDash;
	      return this;
	    }

	    /**
	     * A no-operation function that returns `undefined` regardless of the
	     * arguments it receives.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * _.noop(object) === undefined;
	     * // => true
	     */
	    function noop() {
	      // No operation performed.
	    }

	    /**
	     * Creates a function that returns the property value at `path` on a
	     * given object.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': { 'c': 2 } } },
	     *   { 'a': { 'b': { 'c': 1 } } }
	     * ];
	     *
	     * _.map(objects, _.property('a.b.c'));
	     * // => [2, 1]
	     *
	     * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	     * // => [1, 2]
	     */
	    function property(path) {
	      return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	    }

	    /**
	     * The opposite of `_.property`; this method creates a function that returns
	     * the property value at a given path on `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} object The object to query.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var array = [0, 1, 2],
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
	     * // => [2, 0]
	     */
	    function propertyOf(object) {
	      return function(path) {
	        return baseGet(object, toPath(path), path + '');
	      };
	    }

	    /**
	     * Creates an array of numbers (positive and/or negative) progressing from
	     * `start` up to, but not including, `end`. If `end` is not specified it is
	     * set to `start` with `start` then set to `0`. If `end` is less than `start`
	     * a zero-length range is created unless a negative `step` is specified.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} [step=1] The value to increment or decrement by.
	     * @returns {Array} Returns the new array of numbers.
	     * @example
	     *
	     * _.range(4);
	     * // => [0, 1, 2, 3]
	     *
	     * _.range(1, 5);
	     * // => [1, 2, 3, 4]
	     *
	     * _.range(0, 20, 5);
	     * // => [0, 5, 10, 15]
	     *
	     * _.range(0, -4, -1);
	     * // => [0, -1, -2, -3]
	     *
	     * _.range(1, 4, 0);
	     * // => [1, 1, 1]
	     *
	     * _.range(0);
	     * // => []
	     */
	    function range(start, end, step) {
	      if (step && isIterateeCall(start, end, step)) {
	        end = step = undefined;
	      }
	      start = +start || 0;
	      step = step == null ? 1 : (+step || 0);

	      if (end == null) {
	        end = start;
	        start = 0;
	      } else {
	        end = +end || 0;
	      }
	      // Use `Array(length)` so engines like Chakra and V8 avoid slower modes.
	      // See https://youtu.be/XAqIpGU8ZZk#t=17m25s for more details.
	      var index = -1,
	          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
	          result = Array(length);

	      while (++index < length) {
	        result[index] = start;
	        start += step;
	      }
	      return result;
	    }

	    /**
	     * Invokes the iteratee function `n` times, returning an array of the results
	     * of each invocation. The `iteratee` is bound to `thisArg` and invoked with
	     * one argument; (index).
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {number} n The number of times to invoke `iteratee`.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * var diceRolls = _.times(3, _.partial(_.random, 1, 6, false));
	     * // => [3, 6, 4]
	     *
	     * _.times(3, function(n) {
	     *   mage.castSpell(n);
	     * });
	     * // => invokes `mage.castSpell(n)` three times with `n` of `0`, `1`, and `2`
	     *
	     * _.times(3, function(n) {
	     *   this.cast(n);
	     * }, mage);
	     * // => also invokes `mage.castSpell(n)` three times
	     */
	    function times(n, iteratee, thisArg) {
	      n = nativeFloor(n);

	      // Exit early to avoid a JSC JIT bug in Safari 8
	      // where `Array(0)` is treated as `Array(1)`.
	      if (n < 1 || !nativeIsFinite(n)) {
	        return [];
	      }
	      var index = -1,
	          result = Array(nativeMin(n, MAX_ARRAY_LENGTH));

	      iteratee = bindCallback(iteratee, thisArg, 1);
	      while (++index < n) {
	        if (index < MAX_ARRAY_LENGTH) {
	          result[index] = iteratee(index);
	        } else {
	          iteratee(index);
	        }
	      }
	      return result;
	    }

	    /**
	     * Generates a unique ID. If `prefix` is provided the ID is appended to it.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {string} [prefix] The value to prefix the ID with.
	     * @returns {string} Returns the unique ID.
	     * @example
	     *
	     * _.uniqueId('contact_');
	     * // => 'contact_104'
	     *
	     * _.uniqueId();
	     * // => '105'
	     */
	    function uniqueId(prefix) {
	      var id = ++idCounter;
	      return baseToString(prefix) + id;
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Adds two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} augend The first number to add.
	     * @param {number} addend The second number to add.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.add(6, 4);
	     * // => 10
	     */
	    function add(augend, addend) {
	      return (+augend || 0) + (+addend || 0);
	    }

	    /**
	     * Calculates `n` rounded up to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round up.
	     * @param {number} [precision=0] The precision to round up to.
	     * @returns {number} Returns the rounded up number.
	     * @example
	     *
	     * _.ceil(4.006);
	     * // => 5
	     *
	     * _.ceil(6.004, 2);
	     * // => 6.01
	     *
	     * _.ceil(6040, -2);
	     * // => 6100
	     */
	    var ceil = createRound('ceil');

	    /**
	     * Calculates `n` rounded down to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round down.
	     * @param {number} [precision=0] The precision to round down to.
	     * @returns {number} Returns the rounded down number.
	     * @example
	     *
	     * _.floor(4.006);
	     * // => 4
	     *
	     * _.floor(0.046, 2);
	     * // => 0.04
	     *
	     * _.floor(4060, -2);
	     * // => 4000
	     */
	    var floor = createRound('floor');

	    /**
	     * Gets the maximum value of `collection`. If `collection` is empty or falsey
	     * `-Infinity` is returned. If an iteratee function is provided it is invoked
	     * for each value in `collection` to generate the criterion by which the value
	     * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the maximum value.
	     * @example
	     *
	     * _.max([4, 2, 8, 6]);
	     * // => 8
	     *
	     * _.max([]);
	     * // => -Infinity
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.max(users, function(chr) {
	     *   return chr.age;
	     * });
	     * // => { 'user': 'fred', 'age': 40 }
	     *
	     * // using the `_.property` callback shorthand
	     * _.max(users, 'age');
	     * // => { 'user': 'fred', 'age': 40 }
	     */
	    var max = createExtremum(gt, NEGATIVE_INFINITY);

	    /**
	     * Gets the minimum value of `collection`. If `collection` is empty or falsey
	     * `Infinity` is returned. If an iteratee function is provided it is invoked
	     * for each value in `collection` to generate the criterion by which the value
	     * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the minimum value.
	     * @example
	     *
	     * _.min([4, 2, 8, 6]);
	     * // => 2
	     *
	     * _.min([]);
	     * // => Infinity
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.min(users, function(chr) {
	     *   return chr.age;
	     * });
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // using the `_.property` callback shorthand
	     * _.min(users, 'age');
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var min = createExtremum(lt, POSITIVE_INFINITY);

	    /**
	     * Calculates `n` rounded to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round.
	     * @param {number} [precision=0] The precision to round to.
	     * @returns {number} Returns the rounded number.
	     * @example
	     *
	     * _.round(4.006);
	     * // => 4
	     *
	     * _.round(4.006, 2);
	     * // => 4.01
	     *
	     * _.round(4060, -2);
	     * // => 4100
	     */
	    var round = createRound('round');

	    /**
	     * Gets the sum of the values in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.sum([4, 6]);
	     * // => 10
	     *
	     * _.sum({ 'a': 4, 'b': 6 });
	     * // => 10
	     *
	     * var objects = [
	     *   { 'n': 4 },
	     *   { 'n': 6 }
	     * ];
	     *
	     * _.sum(objects, function(object) {
	     *   return object.n;
	     * });
	     * // => 10
	     *
	     * // using the `_.property` callback shorthand
	     * _.sum(objects, 'n');
	     * // => 10
	     */
	    function sum(collection, iteratee, thisArg) {
	      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	        iteratee = undefined;
	      }
	      iteratee = getCallback(iteratee, thisArg, 3);
	      return iteratee.length == 1
	        ? arraySum(isArray(collection) ? collection : toIterable(collection), iteratee)
	        : baseSum(collection, iteratee);
	    }

	    /*------------------------------------------------------------------------*/

	    // Ensure wrappers are instances of `baseLodash`.
	    lodash.prototype = baseLodash.prototype;

	    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
	    LodashWrapper.prototype.constructor = LodashWrapper;

	    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
	    LazyWrapper.prototype.constructor = LazyWrapper;

	    // Add functions to the `Map` cache.
	    MapCache.prototype['delete'] = mapDelete;
	    MapCache.prototype.get = mapGet;
	    MapCache.prototype.has = mapHas;
	    MapCache.prototype.set = mapSet;

	    // Add functions to the `Set` cache.
	    SetCache.prototype.push = cachePush;

	    // Assign cache to `_.memoize`.
	    memoize.Cache = MapCache;

	    // Add functions that return wrapped values when chaining.
	    lodash.after = after;
	    lodash.ary = ary;
	    lodash.assign = assign;
	    lodash.at = at;
	    lodash.before = before;
	    lodash.bind = bind;
	    lodash.bindAll = bindAll;
	    lodash.bindKey = bindKey;
	    lodash.callback = callback;
	    lodash.chain = chain;
	    lodash.chunk = chunk;
	    lodash.compact = compact;
	    lodash.constant = constant;
	    lodash.countBy = countBy;
	    lodash.create = create;
	    lodash.curry = curry;
	    lodash.curryRight = curryRight;
	    lodash.debounce = debounce;
	    lodash.defaults = defaults;
	    lodash.defaultsDeep = defaultsDeep;
	    lodash.defer = defer;
	    lodash.delay = delay;
	    lodash.difference = difference;
	    lodash.drop = drop;
	    lodash.dropRight = dropRight;
	    lodash.dropRightWhile = dropRightWhile;
	    lodash.dropWhile = dropWhile;
	    lodash.fill = fill;
	    lodash.filter = filter;
	    lodash.flatten = flatten;
	    lodash.flattenDeep = flattenDeep;
	    lodash.flow = flow;
	    lodash.flowRight = flowRight;
	    lodash.forEach = forEach;
	    lodash.forEachRight = forEachRight;
	    lodash.forIn = forIn;
	    lodash.forInRight = forInRight;
	    lodash.forOwn = forOwn;
	    lodash.forOwnRight = forOwnRight;
	    lodash.functions = functions;
	    lodash.groupBy = groupBy;
	    lodash.indexBy = indexBy;
	    lodash.initial = initial;
	    lodash.intersection = intersection;
	    lodash.invert = invert;
	    lodash.invoke = invoke;
	    lodash.keys = keys;
	    lodash.keysIn = keysIn;
	    lodash.map = map;
	    lodash.mapKeys = mapKeys;
	    lodash.mapValues = mapValues;
	    lodash.matches = matches;
	    lodash.matchesProperty = matchesProperty;
	    lodash.memoize = memoize;
	    lodash.merge = merge;
	    lodash.method = method;
	    lodash.methodOf = methodOf;
	    lodash.mixin = mixin;
	    lodash.modArgs = modArgs;
	    lodash.negate = negate;
	    lodash.omit = omit;
	    lodash.once = once;
	    lodash.pairs = pairs;
	    lodash.partial = partial;
	    lodash.partialRight = partialRight;
	    lodash.partition = partition;
	    lodash.pick = pick;
	    lodash.pluck = pluck;
	    lodash.property = property;
	    lodash.propertyOf = propertyOf;
	    lodash.pull = pull;
	    lodash.pullAt = pullAt;
	    lodash.range = range;
	    lodash.rearg = rearg;
	    lodash.reject = reject;
	    lodash.remove = remove;
	    lodash.rest = rest;
	    lodash.restParam = restParam;
	    lodash.set = set;
	    lodash.shuffle = shuffle;
	    lodash.slice = slice;
	    lodash.sortBy = sortBy;
	    lodash.sortByAll = sortByAll;
	    lodash.sortByOrder = sortByOrder;
	    lodash.spread = spread;
	    lodash.take = take;
	    lodash.takeRight = takeRight;
	    lodash.takeRightWhile = takeRightWhile;
	    lodash.takeWhile = takeWhile;
	    lodash.tap = tap;
	    lodash.throttle = throttle;
	    lodash.thru = thru;
	    lodash.times = times;
	    lodash.toArray = toArray;
	    lodash.toPlainObject = toPlainObject;
	    lodash.transform = transform;
	    lodash.union = union;
	    lodash.uniq = uniq;
	    lodash.unzip = unzip;
	    lodash.unzipWith = unzipWith;
	    lodash.values = values;
	    lodash.valuesIn = valuesIn;
	    lodash.where = where;
	    lodash.without = without;
	    lodash.wrap = wrap;
	    lodash.xor = xor;
	    lodash.zip = zip;
	    lodash.zipObject = zipObject;
	    lodash.zipWith = zipWith;

	    // Add aliases.
	    lodash.backflow = flowRight;
	    lodash.collect = map;
	    lodash.compose = flowRight;
	    lodash.each = forEach;
	    lodash.eachRight = forEachRight;
	    lodash.extend = assign;
	    lodash.iteratee = callback;
	    lodash.methods = functions;
	    lodash.object = zipObject;
	    lodash.select = filter;
	    lodash.tail = rest;
	    lodash.unique = uniq;

	    // Add functions to `lodash.prototype`.
	    mixin(lodash, lodash);

	    /*------------------------------------------------------------------------*/

	    // Add functions that return unwrapped values when chaining.
	    lodash.add = add;
	    lodash.attempt = attempt;
	    lodash.camelCase = camelCase;
	    lodash.capitalize = capitalize;
	    lodash.ceil = ceil;
	    lodash.clone = clone;
	    lodash.cloneDeep = cloneDeep;
	    lodash.deburr = deburr;
	    lodash.endsWith = endsWith;
	    lodash.escape = escape;
	    lodash.escapeRegExp = escapeRegExp;
	    lodash.every = every;
	    lodash.find = find;
	    lodash.findIndex = findIndex;
	    lodash.findKey = findKey;
	    lodash.findLast = findLast;
	    lodash.findLastIndex = findLastIndex;
	    lodash.findLastKey = findLastKey;
	    lodash.findWhere = findWhere;
	    lodash.first = first;
	    lodash.floor = floor;
	    lodash.get = get;
	    lodash.gt = gt;
	    lodash.gte = gte;
	    lodash.has = has;
	    lodash.identity = identity;
	    lodash.includes = includes;
	    lodash.indexOf = indexOf;
	    lodash.inRange = inRange;
	    lodash.isArguments = isArguments;
	    lodash.isArray = isArray;
	    lodash.isBoolean = isBoolean;
	    lodash.isDate = isDate;
	    lodash.isElement = isElement;
	    lodash.isEmpty = isEmpty;
	    lodash.isEqual = isEqual;
	    lodash.isError = isError;
	    lodash.isFinite = isFinite;
	    lodash.isFunction = isFunction;
	    lodash.isMatch = isMatch;
	    lodash.isNaN = isNaN;
	    lodash.isNative = isNative;
	    lodash.isNull = isNull;
	    lodash.isNumber = isNumber;
	    lodash.isObject = isObject;
	    lodash.isPlainObject = isPlainObject;
	    lodash.isRegExp = isRegExp;
	    lodash.isString = isString;
	    lodash.isTypedArray = isTypedArray;
	    lodash.isUndefined = isUndefined;
	    lodash.kebabCase = kebabCase;
	    lodash.last = last;
	    lodash.lastIndexOf = lastIndexOf;
	    lodash.lt = lt;
	    lodash.lte = lte;
	    lodash.max = max;
	    lodash.min = min;
	    lodash.noConflict = noConflict;
	    lodash.noop = noop;
	    lodash.now = now;
	    lodash.pad = pad;
	    lodash.padLeft = padLeft;
	    lodash.padRight = padRight;
	    lodash.parseInt = parseInt;
	    lodash.random = random;
	    lodash.reduce = reduce;
	    lodash.reduceRight = reduceRight;
	    lodash.repeat = repeat;
	    lodash.result = result;
	    lodash.round = round;
	    lodash.runInContext = runInContext;
	    lodash.size = size;
	    lodash.snakeCase = snakeCase;
	    lodash.some = some;
	    lodash.sortedIndex = sortedIndex;
	    lodash.sortedLastIndex = sortedLastIndex;
	    lodash.startCase = startCase;
	    lodash.startsWith = startsWith;
	    lodash.sum = sum;
	    lodash.template = template;
	    lodash.trim = trim;
	    lodash.trimLeft = trimLeft;
	    lodash.trimRight = trimRight;
	    lodash.trunc = trunc;
	    lodash.unescape = unescape;
	    lodash.uniqueId = uniqueId;
	    lodash.words = words;

	    // Add aliases.
	    lodash.all = every;
	    lodash.any = some;
	    lodash.contains = includes;
	    lodash.eq = isEqual;
	    lodash.detect = find;
	    lodash.foldl = reduce;
	    lodash.foldr = reduceRight;
	    lodash.head = first;
	    lodash.include = includes;
	    lodash.inject = reduce;

	    mixin(lodash, (function() {
	      var source = {};
	      baseForOwn(lodash, function(func, methodName) {
	        if (!lodash.prototype[methodName]) {
	          source[methodName] = func;
	        }
	      });
	      return source;
	    }()), false);

	    /*------------------------------------------------------------------------*/

	    // Add functions capable of returning wrapped and unwrapped values when chaining.
	    lodash.sample = sample;

	    lodash.prototype.sample = function(n) {
	      if (!this.__chain__ && n == null) {
	        return sample(this.value());
	      }
	      return this.thru(function(value) {
	        return sample(value, n);
	      });
	    };

	    /*------------------------------------------------------------------------*/

	    /**
	     * The semantic version number.
	     *
	     * @static
	     * @memberOf _
	     * @type string
	     */
	    lodash.VERSION = VERSION;

	    // Assign default placeholders.
	    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
	      lodash[methodName].placeholder = lodash;
	    });

	    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
	    arrayEach(['drop', 'take'], function(methodName, index) {
	      LazyWrapper.prototype[methodName] = function(n) {
	        var filtered = this.__filtered__;
	        if (filtered && !index) {
	          return new LazyWrapper(this);
	        }
	        n = n == null ? 1 : nativeMax(nativeFloor(n) || 0, 0);

	        var result = this.clone();
	        if (filtered) {
	          result.__takeCount__ = nativeMin(result.__takeCount__, n);
	        } else {
	          result.__views__.push({ 'size': n, 'type': methodName + (result.__dir__ < 0 ? 'Right' : '') });
	        }
	        return result;
	      };

	      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
	        return this.reverse()[methodName](n).reverse();
	      };
	    });

	    // Add `LazyWrapper` methods that accept an `iteratee` value.
	    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
	      var type = index + 1,
	          isFilter = type != LAZY_MAP_FLAG;

	      LazyWrapper.prototype[methodName] = function(iteratee, thisArg) {
	        var result = this.clone();
	        result.__iteratees__.push({ 'iteratee': getCallback(iteratee, thisArg, 1), 'type': type });
	        result.__filtered__ = result.__filtered__ || isFilter;
	        return result;
	      };
	    });

	    // Add `LazyWrapper` methods for `_.first` and `_.last`.
	    arrayEach(['first', 'last'], function(methodName, index) {
	      var takeName = 'take' + (index ? 'Right' : '');

	      LazyWrapper.prototype[methodName] = function() {
	        return this[takeName](1).value()[0];
	      };
	    });

	    // Add `LazyWrapper` methods for `_.initial` and `_.rest`.
	    arrayEach(['initial', 'rest'], function(methodName, index) {
	      var dropName = 'drop' + (index ? '' : 'Right');

	      LazyWrapper.prototype[methodName] = function() {
	        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
	      };
	    });

	    // Add `LazyWrapper` methods for `_.pluck` and `_.where`.
	    arrayEach(['pluck', 'where'], function(methodName, index) {
	      var operationName = index ? 'filter' : 'map',
	          createCallback = index ? baseMatches : property;

	      LazyWrapper.prototype[methodName] = function(value) {
	        return this[operationName](createCallback(value));
	      };
	    });

	    LazyWrapper.prototype.compact = function() {
	      return this.filter(identity);
	    };

	    LazyWrapper.prototype.reject = function(predicate, thisArg) {
	      predicate = getCallback(predicate, thisArg, 1);
	      return this.filter(function(value) {
	        return !predicate(value);
	      });
	    };

	    LazyWrapper.prototype.slice = function(start, end) {
	      start = start == null ? 0 : (+start || 0);

	      var result = this;
	      if (result.__filtered__ && (start > 0 || end < 0)) {
	        return new LazyWrapper(result);
	      }
	      if (start < 0) {
	        result = result.takeRight(-start);
	      } else if (start) {
	        result = result.drop(start);
	      }
	      if (end !== undefined) {
	        end = (+end || 0);
	        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
	      }
	      return result;
	    };

	    LazyWrapper.prototype.takeRightWhile = function(predicate, thisArg) {
	      return this.reverse().takeWhile(predicate, thisArg).reverse();
	    };

	    LazyWrapper.prototype.toArray = function() {
	      return this.take(POSITIVE_INFINITY);
	    };

	    // Add `LazyWrapper` methods to `lodash.prototype`.
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var checkIteratee = /^(?:filter|map|reject)|While$/.test(methodName),
	          retUnwrapped = /^(?:first|last)$/.test(methodName),
	          lodashFunc = lodash[retUnwrapped ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName];

	      if (!lodashFunc) {
	        return;
	      }
	      lodash.prototype[methodName] = function() {
	        var args = retUnwrapped ? [1] : arguments,
	            chainAll = this.__chain__,
	            value = this.__wrapped__,
	            isHybrid = !!this.__actions__.length,
	            isLazy = value instanceof LazyWrapper,
	            iteratee = args[0],
	            useLazy = isLazy || isArray(value);

	        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
	          // Avoid lazy use if the iteratee has a "length" value other than `1`.
	          isLazy = useLazy = false;
	        }
	        var interceptor = function(value) {
	          return (retUnwrapped && chainAll)
	            ? lodashFunc(value, 1)[0]
	            : lodashFunc.apply(undefined, arrayPush([value], args));
	        };

	        var action = { 'func': thru, 'args': [interceptor], 'thisArg': undefined },
	            onlyLazy = isLazy && !isHybrid;

	        if (retUnwrapped && !chainAll) {
	          if (onlyLazy) {
	            value = value.clone();
	            value.__actions__.push(action);
	            return func.call(value);
	          }
	          return lodashFunc.call(undefined, this.value())[0];
	        }
	        if (!retUnwrapped && useLazy) {
	          value = onlyLazy ? value : new LazyWrapper(this);
	          var result = func.apply(value, args);
	          result.__actions__.push(action);
	          return new LodashWrapper(result, chainAll);
	        }
	        return this.thru(interceptor);
	      };
	    });

	    // Add `Array` and `String` methods to `lodash.prototype`.
	    arrayEach(['join', 'pop', 'push', 'replace', 'shift', 'sort', 'splice', 'split', 'unshift'], function(methodName) {
	      var func = (/^(?:replace|split)$/.test(methodName) ? stringProto : arrayProto)[methodName],
	          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
	          retUnwrapped = /^(?:join|pop|replace|shift)$/.test(methodName);

	      lodash.prototype[methodName] = function() {
	        var args = arguments;
	        if (retUnwrapped && !this.__chain__) {
	          return func.apply(this.value(), args);
	        }
	        return this[chainName](function(value) {
	          return func.apply(value, args);
	        });
	      };
	    });

	    // Map minified function names to their real names.
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var lodashFunc = lodash[methodName];
	      if (lodashFunc) {
	        var key = lodashFunc.name,
	            names = realNames[key] || (realNames[key] = []);

	        names.push({ 'name': methodName, 'func': lodashFunc });
	      }
	    });

	    realNames[createHybridWrapper(undefined, BIND_KEY_FLAG).name] = [{ 'name': 'wrapper', 'func': undefined }];

	    // Add functions to the lazy wrapper.
	    LazyWrapper.prototype.clone = lazyClone;
	    LazyWrapper.prototype.reverse = lazyReverse;
	    LazyWrapper.prototype.value = lazyValue;

	    // Add chaining functions to the `lodash` wrapper.
	    lodash.prototype.chain = wrapperChain;
	    lodash.prototype.commit = wrapperCommit;
	    lodash.prototype.concat = wrapperConcat;
	    lodash.prototype.plant = wrapperPlant;
	    lodash.prototype.reverse = wrapperReverse;
	    lodash.prototype.toString = wrapperToString;
	    lodash.prototype.run = lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

	    // Add function aliases to the `lodash` wrapper.
	    lodash.prototype.collect = lodash.prototype.map;
	    lodash.prototype.head = lodash.prototype.first;
	    lodash.prototype.select = lodash.prototype.filter;
	    lodash.prototype.tail = lodash.prototype.rest;

	    return lodash;
	  }

	  /*--------------------------------------------------------------------------*/

	  // Export lodash.
	  var _ = runInContext();

	  // Some AMD build optimizers like r.js check for condition patterns like the following:
	  if (true) {
	    // Expose lodash to the global object when an AMD loader is present to avoid
	    // errors in cases where lodash is loaded by a script tag and not intended
	    // as an AMD module. See http://requirejs.org/docs/errors.html#mismatch for
	    // more details.
	    root._ = _;

	    // Define as an anonymous module so, through path mapping, it can be
	    // referenced as the "underscore" module.
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
	  else if (freeExports && freeModule) {
	    // Export for Node.js or RingoJS.
	    if (moduleExports) {
	      (freeModule.exports = _)._ = _;
	    }
	    // Export for Rhino with CommonJS support.
	    else {
	      freeExports._ = _;
	    }
	  }
	  else {
	    // Export for a browser or Rhino.
	    root._ = _;
	  }
	}.call(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(41)(module), (function() { return this; }())))

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
]);