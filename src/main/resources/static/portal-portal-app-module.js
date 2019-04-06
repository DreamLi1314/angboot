(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portal-portal-app-module"],{

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludes.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayIncludes.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludesWith.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash/_arrayIncludesWith.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssign.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseAssign.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseAssignIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseClone.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ "./node_modules/lodash/_baseAssign.js"),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ "./node_modules/lodash/_baseAssignIn.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ "./node_modules/lodash/_copySymbols.js"),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ "./node_modules/lodash/_copySymbolsIn.js"),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ "./node_modules/lodash/_initCloneArray.js"),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ "./node_modules/lodash/_initCloneByTag.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isMap = __webpack_require__(/*! ./isMap */ "./node_modules/lodash/isMap.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSet = __webpack_require__(/*! ./isSet */ "./node_modules/lodash/isSet.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
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
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });

    return result;
  }

  if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });

    return result;
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ "./node_modules/lodash/_createBaseEach.js");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "./node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseIndexOf.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIndexOf.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/lodash/_baseFindIndex.js"),
    baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ "./node_modules/lodash/_baseIsNaN.js"),
    strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ "./node_modules/lodash/_strictIndexOf.js");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseIntersection.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIntersection.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "./node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ "./node_modules/lodash/_arrayIncludesWith.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * The base implementation of methods like `_.intersection`, without support
 * for iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? arrayIncludesWith : arrayIncludes,
      length = arrays[0].length,
      othLength = arrays.length,
      othIndex = othLength,
      caches = Array(othLength),
      maxLength = Infinity,
      result = [];

  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap(array, baseUnary(iteratee));
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
      ? new SetCache(othIndex && array)
      : undefined;
  }
  array = arrays[0];

  var index = -1,
      seen = caches[0];

  outer:
  while (++index < length && result.length < maxLength) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (!(seen
          ? cacheHas(seen, computed)
          : includes(result, computed, comparator)
        )) {
      othIndex = othLength;
      while (--othIndex) {
        var cache = caches[othIndex];
        if (!(cache
              ? cacheHas(cache, computed)
              : includes(arrays[othIndex], computed, comparator))
            ) {
          continue outer;
        }
      }
      if (seen) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseIntersection;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMap.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsMap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
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
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNaN.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsNaN.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

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
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
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

module.exports = baseMap;


/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "./node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "./node_modules/lodash/_baseOrderBy.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseOrderBy.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseMap = __webpack_require__(/*! ./_baseMap */ "./node_modules/lodash/_baseMap.js"),
    baseSortBy = __webpack_require__(/*! ./_baseSortBy */ "./node_modules/lodash/_baseSortBy.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    compareMultiple = __webpack_require__(/*! ./_compareMultiple */ "./node_modules/lodash/_compareMultiple.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  var index = -1;
  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyOf.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_basePropertyOf.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseSortBy.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseSortBy.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
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

module.exports = baseSortBy;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_baseUniq.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseUniq.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "./node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ "./node_modules/lodash/_arrayIncludesWith.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js"),
    createSet = __webpack_require__(/*! ./_createSet */ "./node_modules/lodash/_createSet.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
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
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castArrayLikeObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_castArrayLikeObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js");

/**
 * Casts `value` to an empty array if it's not an array like object.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array|Object} Returns the cast array-like object.
 */
function castArrayLikeObject(value) {
  return isArrayLikeObject(value) ? value : [];
}

module.exports = castArrayLikeObject;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_cloneDataView.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_cloneDataView.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "./node_modules/lodash/_cloneRegExp.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneRegExp.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "./node_modules/lodash/_cloneSymbol.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneSymbol.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_compareAscending.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_compareAscending.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),

/***/ "./node_modules/lodash/_compareMultiple.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_compareMultiple.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var compareAscending = __webpack_require__(/*! ./_compareAscending */ "./node_modules/lodash/_compareAscending.js");

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_copySymbols.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_copySymbols.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "./node_modules/lodash/_copySymbolsIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_copySymbolsIn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

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
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_createSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_createSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    noop = __webpack_require__(/*! ./noop */ "./node_modules/lodash/noop.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

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
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

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

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "./node_modules/lodash/_initCloneByTag.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneByTag.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js"),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ "./node_modules/lodash/_cloneDataView.js"),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "./node_modules/lodash/_cloneRegExp.js"),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ "./node_modules/lodash/_cloneSymbol.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
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
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

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

module.exports = isStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_strictIndexOf.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_strictIndexOf.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/_unescapeHtmlChar.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_unescapeHtmlChar.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(/*! ./_basePropertyOf */ "./node_modules/lodash/_basePropertyOf.js");

/** Used to map HTML entities to characters. */
var htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'"
};

/**
 * Used by `_.unescape` to convert HTML entities to characters.
 *
 * @private
 * @param {string} chr The matched character to unescape.
 * @returns {string} Returns the unescaped character.
 */
var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

module.exports = unescapeHtmlChar;


/***/ }),

/***/ "./node_modules/lodash/cloneDeep.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/cloneDeep.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
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
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/intersectionWith.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/intersectionWith.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseIntersection = __webpack_require__(/*! ./_baseIntersection */ "./node_modules/lodash/_baseIntersection.js"),
    baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    castArrayLikeObject = __webpack_require__(/*! ./_castArrayLikeObject */ "./node_modules/lodash/_castArrayLikeObject.js"),
    last = __webpack_require__(/*! ./last */ "./node_modules/lodash/last.js");

/**
 * This method is like `_.intersection` except that it accepts `comparator`
 * which is invoked to compare elements of `arrays`. The order and references
 * of result values are determined by the first array. The comparator is
 * invoked with two arguments: (arrVal, othVal).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 *
 * _.intersectionWith(objects, others, _.isEqual);
 * // => [{ 'x': 1, 'y': 2 }]
 */
var intersectionWith = baseRest(function(arrays) {
  var comparator = last(arrays),
      mapped = arrayMap(arrays, castArrayLikeObject);

  comparator = typeof comparator == 'function' ? comparator : undefined;
  if (comparator) {
    mapped.pop();
  }
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped, undefined, comparator)
    : [];
});

module.exports = intersectionWith;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isEmpty.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEmpty.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
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
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),

/***/ "./node_modules/lodash/isEqual.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEqual.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isMap.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isMap.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ "./node_modules/lodash/_baseIsMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
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
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSet.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isSet.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ "./node_modules/lodash/_baseIsSet.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
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
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
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
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/last.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/last.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
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
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/noop.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/noop.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "./node_modules/lodash/orderBy.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/orderBy.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseOrderBy = __webpack_require__(/*! ./_baseOrderBy */ "./node_modules/lodash/_baseOrderBy.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * This method is like `_.sortBy` except that it allows specifying the sort
 * orders of the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of "desc" for
 * descending or "asc" for ascending sort order of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @param {string[]} [orders] The sort orders of `iteratees`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * // Sort by `user` in ascending order and by `age` in descending order.
 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 */
function orderBy(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }
  if (!isArray(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? undefined : orders;
  if (!isArray(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return baseOrderBy(collection, iteratees, orders);
}

module.exports = orderBy;


/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/lodash/unescape.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/unescape.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js"),
    unescapeHtmlChar = __webpack_require__(/*! ./_unescapeHtmlChar */ "./node_modules/lodash/_unescapeHtmlChar.js");

/** Used to match HTML entities and HTML characters. */
var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
    reHasEscapedHtml = RegExp(reEscapedHtml.source);

/**
 * The inverse of `_.escape`; this method converts the HTML entities
 * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
 * their corresponding characters.
 *
 * **Note:** No other HTML entities are unescaped. To unescape additional
 * HTML entities use a third-party library like [_he_](https://mths.be/he).
 *
 * @static
 * @memberOf _
 * @since 0.6.0
 * @category String
 * @param {string} [string=''] The string to unescape.
 * @returns {string} Returns the unescaped string.
 * @example
 *
 * _.unescape('fred, barney, &amp; pebbles');
 * // => 'fred, barney, & pebbles'
 */
function unescape(string) {
  string = toString(string);
  return (string && reHasEscapedHtml.test(string))
    ? string.replace(reEscapedHtml, unescapeHtmlChar)
    : string;
}

module.exports = unescape;


/***/ }),

/***/ "./node_modules/lodash/union.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/union.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js"),
    baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    baseUniq = __webpack_require__(/*! ./_baseUniq */ "./node_modules/lodash/_baseUniq.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js");

/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2]);
 * // => [2, 1]
 */
var union = baseRest(function(arrays) {
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
});

module.exports = union;


/***/ }),

/***/ "./node_modules/lodash/uniq.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/uniq.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseUniq = __webpack_require__(/*! ./_baseUniq */ "./node_modules/lodash/_baseUniq.js");

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),

/***/ "./node_modules/split.js/dist/split.js":
/*!*********************************************!*\
  !*** ./node_modules/split.js/dist/split.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! Split.js - v1.5.10 */

(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, (function () { 'use strict';

    // The programming goals of Split.js are to deliver readable, understandable and
    // maintainable code, while at the same time manually optimizing for tiny minified file size,
    // browser compatibility without additional requirements, graceful fallback (IE8 is supported)
    // and very few assumptions about the user's page layout.
    var global = window;
    var document = global.document;

    // Save a couple long function names that are used frequently.
    // This optimization saves around 400 bytes.
    var addEventListener = 'addEventListener';
    var removeEventListener = 'removeEventListener';
    var getBoundingClientRect = 'getBoundingClientRect';
    var gutterStartDragging = '_a';
    var aGutterSize = '_b';
    var bGutterSize = '_c';
    var HORIZONTAL = 'horizontal';
    var NOOP = function () { return false; };

    // Figure out if we're in IE8 or not. IE8 will still render correctly,
    // but will be static instead of draggable.
    var isIE8 = global.attachEvent && !global[addEventListener];

    // Helper function determines which prefixes of CSS calc we need.
    // We only need to do this once on startup, when this anonymous function is called.
    //
    // Tests -webkit, -moz and -o prefixes. Modified from StackOverflow:
    // http://stackoverflow.com/questions/16625140/js-feature-detection-to-detect-the-usage-of-webkit-calc-over-calc/16625167#16625167
    var calc = (['', '-webkit-', '-moz-', '-o-']
        .filter(function (prefix) {
            var el = document.createElement('div');
            el.style.cssText = "width:" + prefix + "calc(9px)";

            return !!el.style.length
        })
        .shift()) + "calc";

    // Helper function checks if its argument is a string-like type
    var isString = function (v) { return typeof v === 'string' || v instanceof String; };

    // Helper function allows elements and string selectors to be used
    // interchangeably. In either case an element is returned. This allows us to
    // do `Split([elem1, elem2])` as well as `Split(['#id1', '#id2'])`.
    var elementOrSelector = function (el) {
        if (isString(el)) {
            var ele = document.querySelector(el);
            if (!ele) {
                throw new Error(("Selector " + el + " did not match a DOM element"))
            }
            return ele
        }

        return el
    };

    // Helper function gets a property from the properties object, with a default fallback
    var getOption = function (options, propName, def) {
        var value = options[propName];
        if (value !== undefined) {
            return value
        }
        return def
    };

    var getGutterSize = function (gutterSize, isFirst, isLast, gutterAlign) {
        if (isFirst) {
            if (gutterAlign === 'end') {
                return 0
            }
            if (gutterAlign === 'center') {
                return gutterSize / 2
            }
        } else if (isLast) {
            if (gutterAlign === 'start') {
                return 0
            }
            if (gutterAlign === 'center') {
                return gutterSize / 2
            }
        }

        return gutterSize
    };

    // Default options
    var defaultGutterFn = function (i, gutterDirection) {
        var gut = document.createElement('div');
        gut.className = "gutter gutter-" + gutterDirection;
        return gut
    };

    var defaultElementStyleFn = function (dim, size, gutSize) {
        var style = {};

        if (!isString(size)) {
            if (!isIE8) {
                style[dim] = calc + "(" + size + "% - " + gutSize + "px)";
            } else {
                style[dim] = size + "%";
            }
        } else {
            style[dim] = size;
        }

        return style
    };

    var defaultGutterStyleFn = function (dim, gutSize) {
        var obj;

        return (( obj = {}, obj[dim] = (gutSize + "px"), obj ));
    };

    // The main function to initialize a split. Split.js thinks about each pair
    // of elements as an independant pair. Dragging the gutter between two elements
    // only changes the dimensions of elements in that pair. This is key to understanding
    // how the following functions operate, since each function is bound to a pair.
    //
    // A pair object is shaped like this:
    //
    // {
    //     a: DOM element,
    //     b: DOM element,
    //     aMin: Number,
    //     bMin: Number,
    //     dragging: Boolean,
    //     parent: DOM element,
    //     direction: 'horizontal' | 'vertical'
    // }
    //
    // The basic sequence:
    //
    // 1. Set defaults to something sane. `options` doesn't have to be passed at all.
    // 2. Initialize a bunch of strings based on the direction we're splitting.
    //    A lot of the behavior in the rest of the library is paramatized down to
    //    rely on CSS strings and classes.
    // 3. Define the dragging helper functions, and a few helpers to go with them.
    // 4. Loop through the elements while pairing them off. Every pair gets an
    //    `pair` object and a gutter.
    // 5. Actually size the pair elements, insert gutters and attach event listeners.
    var Split = function (idsOption, options) {
        if ( options === void 0 ) options = {};

        var ids = idsOption;
        var dimension;
        var clientAxis;
        var position;
        var positionEnd;
        var clientSize;
        var elements;

        // Allow HTMLCollection to be used as an argument when supported
        if (Array.from) {
            ids = Array.from(ids);
        }

        // All DOM elements in the split should have a common parent. We can grab
        // the first elements parent and hope users read the docs because the
        // behavior will be whacky otherwise.
        var firstElement = elementOrSelector(ids[0]);
        var parent = firstElement.parentNode;
        var parentStyle = getComputedStyle ? getComputedStyle(parent) : null;
        var parentFlexDirection = parentStyle ? parentStyle.flexDirection : null;

        // Set default options.sizes to equal percentages of the parent element.
        var sizes = getOption(options, 'sizes') || ids.map(function () { return 100 / ids.length; });

        // Standardize minSize to an array if it isn't already. This allows minSize
        // to be passed as a number.
        var minSize = getOption(options, 'minSize', 100);
        var minSizes = Array.isArray(minSize) ? minSize : ids.map(function () { return minSize; });

        // Get other options
        var expandToMin = getOption(options, 'expandToMin', false);
        var gutterSize = getOption(options, 'gutterSize', 10);
        var gutterAlign = getOption(options, 'gutterAlign', 'center');
        var snapOffset = getOption(options, 'snapOffset', 30);
        var dragInterval = getOption(options, 'dragInterval', 1);
        var direction = getOption(options, 'direction', HORIZONTAL);
        var cursor = getOption(
            options,
            'cursor',
            direction === HORIZONTAL ? 'col-resize' : 'row-resize'
        );
        var gutter = getOption(options, 'gutter', defaultGutterFn);
        var elementStyle = getOption(
            options,
            'elementStyle',
            defaultElementStyleFn
        );
        var gutterStyle = getOption(options, 'gutterStyle', defaultGutterStyleFn);

        // 2. Initialize a bunch of strings based on the direction we're splitting.
        // A lot of the behavior in the rest of the library is paramatized down to
        // rely on CSS strings and classes.
        if (direction === HORIZONTAL) {
            dimension = 'width';
            clientAxis = 'clientX';
            position = 'left';
            positionEnd = 'right';
            clientSize = 'clientWidth';
        } else if (direction === 'vertical') {
            dimension = 'height';
            clientAxis = 'clientY';
            position = 'top';
            positionEnd = 'bottom';
            clientSize = 'clientHeight';
        }

        // 3. Define the dragging helper functions, and a few helpers to go with them.
        // Each helper is bound to a pair object that contains its metadata. This
        // also makes it easy to store references to listeners that that will be
        // added and removed.
        //
        // Even though there are no other functions contained in them, aliasing
        // this to self saves 50 bytes or so since it's used so frequently.
        //
        // The pair object saves metadata like dragging state, position and
        // event listener references.

        function setElementSize(el, size, gutSize, i) {
            // Split.js allows setting sizes via numbers (ideally), or if you must,
            // by string, like '300px'. This is less than ideal, because it breaks
            // the fluid layout that `calc(% - px)` provides. You're on your own if you do that,
            // make sure you calculate the gutter size by hand.
            var style = elementStyle(dimension, size, gutSize, i);

            Object.keys(style).forEach(function (prop) {
                // eslint-disable-next-line no-param-reassign
                el.style[prop] = style[prop];
            });
        }

        function setGutterSize(gutterElement, gutSize, i) {
            var style = gutterStyle(dimension, gutSize, i);

            Object.keys(style).forEach(function (prop) {
                // eslint-disable-next-line no-param-reassign
                gutterElement.style[prop] = style[prop];
            });
        }

        function getSizes() {
            return elements.map(function (element) { return element.size; })
        }

        // Supports touch events, but not multitouch, so only the first
        // finger `touches[0]` is counted.
        function getMousePosition(e) {
            if ('touches' in e) { return e.touches[0][clientAxis] }
            return e[clientAxis]
        }

        // Actually adjust the size of elements `a` and `b` to `offset` while dragging.
        // calc is used to allow calc(percentage + gutterpx) on the whole split instance,
        // which allows the viewport to be resized without additional logic.
        // Element a's size is the same as offset. b's size is total size - a size.
        // Both sizes are calculated from the initial parent percentage,
        // then the gutter size is subtracted.
        function adjust(offset) {
            var a = elements[this.a];
            var b = elements[this.b];
            var percentage = a.size + b.size;

            a.size = (offset / this.size) * percentage;
            b.size = percentage - (offset / this.size) * percentage;

            setElementSize(a.element, a.size, this[aGutterSize], a.i);
            setElementSize(b.element, b.size, this[bGutterSize], b.i);
        }

        // drag, where all the magic happens. The logic is really quite simple:
        //
        // 1. Ignore if the pair is not dragging.
        // 2. Get the offset of the event.
        // 3. Snap offset to min if within snappable range (within min + snapOffset).
        // 4. Actually adjust each element in the pair to offset.
        //
        // ---------------------------------------------------------------------
        // |    | <- a.minSize               ||              b.minSize -> |    |
        // |    |  | <- this.snapOffset      ||     this.snapOffset -> |  |    |
        // |    |  |                         ||                        |  |    |
        // |    |  |                         ||                        |  |    |
        // ---------------------------------------------------------------------
        // | <- this.start                                        this.size -> |
        function drag(e) {
            var offset;
            var a = elements[this.a];
            var b = elements[this.b];

            if (!this.dragging) { return }

            // Get the offset of the event from the first side of the
            // pair `this.start`. Then offset by the initial position of the
            // mouse compared to the gutter size.
            offset =
                getMousePosition(e) -
                this.start +
                (this[aGutterSize] - this.dragOffset);

            if (dragInterval > 1) {
                offset = Math.round(offset / dragInterval) * dragInterval;
            }

            // If within snapOffset of min or max, set offset to min or max.
            // snapOffset buffers a.minSize and b.minSize, so logic is opposite for both.
            // Include the appropriate gutter sizes to prevent overflows.
            if (offset <= a.minSize + snapOffset + this[aGutterSize]) {
                offset = a.minSize + this[aGutterSize];
            } else if (
                offset >=
                this.size - (b.minSize + snapOffset + this[bGutterSize])
            ) {
                offset = this.size - (b.minSize + this[bGutterSize]);
            }

            // Actually adjust the size.
            adjust.call(this, offset);

            // Call the drag callback continously. Don't do anything too intensive
            // in this callback.
            getOption(options, 'onDrag', NOOP)();
        }

        // Cache some important sizes when drag starts, so we don't have to do that
        // continously:
        //
        // `size`: The total size of the pair. First + second + first gutter + second gutter.
        // `start`: The leading side of the first element.
        //
        // ------------------------------------------------
        // |      aGutterSize -> |||                      |
        // |                     |||                      |
        // |                     |||                      |
        // |                     ||| <- bGutterSize       |
        // ------------------------------------------------
        // | <- start                             size -> |
        function calculateSizes() {
            // Figure out the parent size minus padding.
            var a = elements[this.a].element;
            var b = elements[this.b].element;

            var aBounds = a[getBoundingClientRect]();
            var bBounds = b[getBoundingClientRect]();

            this.size =
                aBounds[dimension] +
                bBounds[dimension] +
                this[aGutterSize] +
                this[bGutterSize];
            this.start = aBounds[position];
            this.end = aBounds[positionEnd];
        }

        function innerSize(element) {
            // Return nothing if getComputedStyle is not supported (< IE9)
            // Or if parent element has no layout yet
            if (!getComputedStyle) { return null }

            var computedStyle = getComputedStyle(element);

            if (!computedStyle) { return null }

            var size = element[clientSize];

            if (size === 0) { return null }

            if (direction === HORIZONTAL) {
                size -=
                    parseFloat(computedStyle.paddingLeft) +
                    parseFloat(computedStyle.paddingRight);
            } else {
                size -=
                    parseFloat(computedStyle.paddingTop) +
                    parseFloat(computedStyle.paddingBottom);
            }

            return size
        }

        // When specifying percentage sizes that are less than the computed
        // size of the element minus the gutter, the lesser percentages must be increased
        // (and decreased from the other elements) to make space for the pixels
        // subtracted by the gutters.
        function trimToMin(sizesToTrim) {
            // Try to get inner size of parent element.
            // If it's no supported, return original sizes.
            var parentSize = innerSize(parent);
            if (parentSize === null) {
                return sizesToTrim
            }

            if (minSizes.reduce(function (a, b) { return a + b; }, 0) > parentSize) {
                return sizesToTrim
            }

            // Keep track of the excess pixels, the amount of pixels over the desired percentage
            // Also keep track of the elements with pixels to spare, to decrease after if needed
            var excessPixels = 0;
            var toSpare = [];

            var pixelSizes = sizesToTrim.map(function (size, i) {
                // Convert requested percentages to pixel sizes
                var pixelSize = (parentSize * size) / 100;
                var elementGutterSize = getGutterSize(
                    gutterSize,
                    i === 0,
                    i === sizesToTrim.length - 1,
                    gutterAlign
                );
                var elementMinSize = minSizes[i] + elementGutterSize;

                // If element is too smal, increase excess pixels by the difference
                // and mark that it has no pixels to spare
                if (pixelSize < elementMinSize) {
                    excessPixels += elementMinSize - pixelSize;
                    toSpare.push(0);
                    return elementMinSize
                }

                // Otherwise, mark the pixels it has to spare and return it's original size
                toSpare.push(pixelSize - elementMinSize);
                return pixelSize
            });

            // If nothing was adjusted, return the original sizes
            if (excessPixels === 0) {
                return sizesToTrim
            }

            return pixelSizes.map(function (pixelSize, i) {
                var newPixelSize = pixelSize;

                // While there's still pixels to take, and there's enough pixels to spare,
                // take as many as possible up to the total excess pixels
                if (excessPixels > 0 && toSpare[i] - excessPixels > 0) {
                    var takenPixels = Math.min(
                        excessPixels,
                        toSpare[i] - excessPixels
                    );

                    // Subtract the amount taken for the next iteration
                    excessPixels -= takenPixels;
                    newPixelSize = pixelSize - takenPixels;
                }

                // Return the pixel size adjusted as a percentage
                return (newPixelSize / parentSize) * 100
            })
        }

        // stopDragging is very similar to startDragging in reverse.
        function stopDragging() {
            var self = this;
            var a = elements[self.a].element;
            var b = elements[self.b].element;

            if (self.dragging) {
                getOption(options, 'onDragEnd', NOOP)(getSizes());
            }

            self.dragging = false;

            // Remove the stored event listeners. This is why we store them.
            global[removeEventListener]('mouseup', self.stop);
            global[removeEventListener]('touchend', self.stop);
            global[removeEventListener]('touchcancel', self.stop);
            global[removeEventListener]('mousemove', self.move);
            global[removeEventListener]('touchmove', self.move);

            // Clear bound function references
            self.stop = null;
            self.move = null;

            a[removeEventListener]('selectstart', NOOP);
            a[removeEventListener]('dragstart', NOOP);
            b[removeEventListener]('selectstart', NOOP);
            b[removeEventListener]('dragstart', NOOP);

            a.style.userSelect = '';
            a.style.webkitUserSelect = '';
            a.style.MozUserSelect = '';
            a.style.pointerEvents = '';

            b.style.userSelect = '';
            b.style.webkitUserSelect = '';
            b.style.MozUserSelect = '';
            b.style.pointerEvents = '';

            self.gutter.style.cursor = '';
            self.parent.style.cursor = '';
            document.body.style.cursor = '';
        }

        // startDragging calls `calculateSizes` to store the inital size in the pair object.
        // It also adds event listeners for mouse/touch events,
        // and prevents selection while dragging so avoid the selecting text.
        function startDragging(e) {
            // Right-clicking can't start dragging.
            if ('button' in e && e.button !== 0) {
                return
            }

            // Alias frequently used variables to save space. 200 bytes.
            var self = this;
            var a = elements[self.a].element;
            var b = elements[self.b].element;

            // Call the onDragStart callback.
            if (!self.dragging) {
                getOption(options, 'onDragStart', NOOP)(getSizes());
            }

            // Don't actually drag the element. We emulate that in the drag function.
            e.preventDefault();

            // Set the dragging property of the pair object.
            self.dragging = true;

            // Create two event listeners bound to the same pair object and store
            // them in the pair object.
            self.move = drag.bind(self);
            self.stop = stopDragging.bind(self);

            // All the binding. `window` gets the stop events in case we drag out of the elements.
            global[addEventListener]('mouseup', self.stop);
            global[addEventListener]('touchend', self.stop);
            global[addEventListener]('touchcancel', self.stop);
            global[addEventListener]('mousemove', self.move);
            global[addEventListener]('touchmove', self.move);

            // Disable selection. Disable!
            a[addEventListener]('selectstart', NOOP);
            a[addEventListener]('dragstart', NOOP);
            b[addEventListener]('selectstart', NOOP);
            b[addEventListener]('dragstart', NOOP);

            a.style.userSelect = 'none';
            a.style.webkitUserSelect = 'none';
            a.style.MozUserSelect = 'none';
            a.style.pointerEvents = 'none';

            b.style.userSelect = 'none';
            b.style.webkitUserSelect = 'none';
            b.style.MozUserSelect = 'none';
            b.style.pointerEvents = 'none';

            // Set the cursor at multiple levels
            self.gutter.style.cursor = cursor;
            self.parent.style.cursor = cursor;
            document.body.style.cursor = cursor;

            // Cache the initial sizes of the pair.
            calculateSizes.call(self);

            // Determine the position of the mouse compared to the gutter
            self.dragOffset = getMousePosition(e) - self.end;
        }

        // adjust sizes to ensure percentage is within min size and gutter.
        sizes = trimToMin(sizes);

        // 5. Create pair and element objects. Each pair has an index reference to
        // elements `a` and `b` of the pair (first and second elements).
        // Loop through the elements while pairing them off. Every pair gets a
        // `pair` object and a gutter.
        //
        // Basic logic:
        //
        // - Starting with the second element `i > 0`, create `pair` objects with
        //   `a = i - 1` and `b = i`
        // - Set gutter sizes based on the _pair_ being first/last. The first and last
        //   pair have gutterSize / 2, since they only have one half gutter, and not two.
        // - Create gutter elements and add event listeners.
        // - Set the size of the elements, minus the gutter sizes.
        //
        // -----------------------------------------------------------------------
        // |     i=0     |         i=1         |        i=2       |      i=3     |
        // |             |                     |                  |              |
        // |           pair 0                pair 1             pair 2           |
        // |             |                     |                  |              |
        // -----------------------------------------------------------------------
        var pairs = [];
        elements = ids.map(function (id, i) {
            // Create the element object.
            var element = {
                element: elementOrSelector(id),
                size: sizes[i],
                minSize: minSizes[i],
                i: i,
            };

            var pair;

            if (i > 0) {
                // Create the pair object with its metadata.
                pair = {
                    a: i - 1,
                    b: i,
                    dragging: false,
                    direction: direction,
                    parent: parent,
                };

                pair[aGutterSize] = getGutterSize(
                    gutterSize,
                    i - 1 === 0,
                    false,
                    gutterAlign
                );
                pair[bGutterSize] = getGutterSize(
                    gutterSize,
                    false,
                    i === ids.length - 1,
                    gutterAlign
                );

                // if the parent has a reverse flex-direction, switch the pair elements.
                if (
                    parentFlexDirection === 'row-reverse' ||
                    parentFlexDirection === 'column-reverse'
                ) {
                    var temp = pair.a;
                    pair.a = pair.b;
                    pair.b = temp;
                }
            }

            // Determine the size of the current element. IE8 is supported by
            // staticly assigning sizes without draggable gutters. Assigns a string
            // to `size`.
            //
            // IE9 and above
            if (!isIE8) {
                // Create gutter elements for each pair.
                if (i > 0) {
                    var gutterElement = gutter(i, direction, element.element);
                    setGutterSize(gutterElement, gutterSize, i);

                    // Save bound event listener for removal later
                    pair[gutterStartDragging] = startDragging.bind(pair);

                    // Attach bound event listener
                    gutterElement[addEventListener](
                        'mousedown',
                        pair[gutterStartDragging]
                    );
                    gutterElement[addEventListener](
                        'touchstart',
                        pair[gutterStartDragging]
                    );

                    parent.insertBefore(gutterElement, element.element);

                    pair.gutter = gutterElement;
                }
            }

            setElementSize(
                element.element,
                element.size,
                getGutterSize(
                    gutterSize,
                    i === 0,
                    i === ids.length - 1,
                    gutterAlign
                )
            );

            // After the first iteration, and we have a pair object, append it to the
            // list of pairs.
            if (i > 0) {
                pairs.push(pair);
            }

            return element
        });

        function adjustToMin(element) {
            var isLast = element.i === pairs.length;
            var pair = isLast ? pairs[element.i - 1] : pairs[element.i];

            calculateSizes.call(pair);

            var size = isLast
                ? pair.size - element.minSize - pair[bGutterSize]
                : element.minSize + pair[aGutterSize];

            adjust.call(pair, size);
        }

        elements.forEach(function (element) {
            var computedSize = element.element[getBoundingClientRect]()[dimension];

            if (computedSize < element.minSize) {
                if (expandToMin) {
                    adjustToMin(element);
                } else {
                    // eslint-disable-next-line no-param-reassign
                    element.minSize = computedSize;
                }
            }
        });

        function setSizes(newSizes) {
            var trimmed = trimToMin(newSizes);
            trimmed.forEach(function (newSize, i) {
                if (i > 0) {
                    var pair = pairs[i - 1];

                    var a = elements[pair.a];
                    var b = elements[pair.b];

                    a.size = trimmed[i - 1];
                    b.size = newSize;

                    setElementSize(a.element, a.size, pair[aGutterSize]);
                    setElementSize(b.element, b.size, pair[bGutterSize]);
                }
            });
        }

        function destroy(preserveStyles, preserveGutter) {
            pairs.forEach(function (pair) {
                if (preserveGutter !== true) {
                    pair.parent.removeChild(pair.gutter);
                } else {
                    pair.gutter[removeEventListener](
                        'mousedown',
                        pair[gutterStartDragging]
                    );
                    pair.gutter[removeEventListener](
                        'touchstart',
                        pair[gutterStartDragging]
                    );
                }

                if (preserveStyles !== true) {
                    var style = elementStyle(
                        dimension,
                        pair.a.size,
                        pair[aGutterSize]
                    );

                    Object.keys(style).forEach(function (prop) {
                        elements[pair.a].element.style[prop] = '';
                        elements[pair.b].element.style[prop] = '';
                    });
                }
            });
        }

        if (isIE8) {
            return {
                setSizes: setSizes,
                destroy: destroy,
            }
        }

        return {
            setSizes: setSizes,
            getSizes: getSizes,
            collapse: function collapse(i) {
                adjustToMin(elements[i]);
            },
            destroy: destroy,
            parent: parent,
            pairs: pairs,
        }
    };

    return Split;

})));


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/app/common/data/dimension.ts":
/*!******************************************!*\
  !*** ./src/app/common/data/dimension.ts ***!
  \******************************************/
/*! exports provided: Dimension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dimension", function() { return Dimension; });
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var Dimension = /** @class */ (function () {
    function Dimension(width, height) {
        this.width = width;
        this.height = height;
    }
    /**
     * Create a new dimension maximized to an aspect ratio
     */
    Dimension.prototype.getScaledDimension = function (aspectRatio) {
        var width = Math.min(this.width, this.height * aspectRatio);
        var height = width / aspectRatio;
        return new Dimension(width, height);
    };
    return Dimension;
}());



/***/ }),

/***/ "./src/app/common/data/point.ts":
/*!**************************************!*\
  !*** ./src/app/common/data/point.ts ***!
  \**************************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    return Point;
}());



/***/ }),

/***/ "./src/app/common/data/rectangle.ts":
/*!******************************************!*\
  !*** ./src/app/common/data/rectangle.ts ***!
  \******************************************/
/*! exports provided: Rectangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var Rectangle = /** @class */ (function () {
    function Rectangle(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    /**
     * Check if point contains to this rect.
     */
    Rectangle.prototype.contains = function (x, y) {
        return x >= this.x && x <= this.x + this.width &&
            y >= this.y && y <= this.y + this.height;
    };
    /**
     * Create a Rectangle from a client bounding rectangle
     */
    Rectangle.fromClientRect = function (clientRect) {
        return new Rectangle(clientRect.left, clientRect.top, clientRect.width, clientRect.height);
    };
    Rectangle.prototype.intersects = function (rect) {
        if (!rect) {
            return false;
        }
        if (!(rect instanceof Rectangle)) {
            rect = Rectangle.fromClientRect(rect);
        }
        var rLeft = rect.x;
        var rRight = rect.x + rect.width;
        var rTop = rect.y;
        var rBot = rect.y + rect.height;
        var left = this.x;
        var right = this.x + this.width;
        var top = this.y;
        var bot = this.y + this.height;
        return left < rRight && right > rLeft && top < rBot && bot > rTop;
    };
    /**
     * True if this rectangle encloses an area
     */
    Rectangle.prototype.isEmpty = function () {
        return this.width <= 0 || this.height <= 0;
    };
    return Rectangle;
}());



/***/ }),

/***/ "./src/app/common/services/ui-context.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/services/ui-context.service.ts ***!
  \*******************************************************/
/*! exports provided: UIContextService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIContextService", function() { return UIContextService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UIContextService = /** @class */ (function () {
    function UIContextService() {
        this.lastTabs = new Map();
        this.sheetChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.objectChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.currentSheetId = null;
    }
    UIContextService.prototype.isVS = function () {
        return true;
    };
    UIContextService.prototype.isAdhoc = function () {
        return false;
    };
    UIContextService.prototype.getDefaultTab = function (key, defaultTab) {
        return this.lastTabs[key] || defaultTab;
    };
    UIContextService.prototype.setDefaultTab = function (key, defaultTab) {
        this.lastTabs[key] = defaultTab;
    };
    UIContextService.prototype.getSheetChange = function () {
        return this.sheetChange.asObservable();
    };
    UIContextService.prototype.sheetShow = function (id) {
        this.sheetChange.next({ action: "show", sheetId: id });
        this.currentSheetId = id;
    };
    UIContextService.prototype.sheetHide = function (id) {
        this.sheetChange.next({ action: "hide", sheetId: id });
        if (this.currentSheetId == id) {
            this.currentSheetId = null;
        }
    };
    UIContextService.prototype.sheetClose = function (id) {
        this.sheetChange.next({ action: "close", sheetId: id });
        if (this.currentSheetId == id) {
            this.currentSheetId = null;
        }
    };
    UIContextService.prototype.getCurrentSheetId = function () {
        return this.currentSheetId;
    };
    UIContextService.prototype.getObjectChange = function () {
        return this.objectChange.asObservable();
    };
    UIContextService.prototype.objectPropertyChanged = function (objectId, title) {
        this.objectChange.next({ action: "property", title: title,
            objectId: objectId, sheetId: this.currentSheetId });
    };
    UIContextService.prototype.objectAdded = function (dragName) {
        this.objectChange.next({ action: "add", title: null,
            objectId: dragName, sheetId: this.currentSheetId });
    };
    UIContextService.prototype.objectDeleted = function (dragName) {
        this.objectChange.next({ action: "delete", title: null,
            objectId: dragName, sheetId: this.currentSheetId });
    };
    UIContextService.prototype.objectRenamed = function (objectId) {
        this.objectChange.next({ action: "rename", title: null,
            objectId: objectId, sheetId: this.currentSheetId });
    };
    UIContextService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UIContextService);
    return UIContextService;
}());



/***/ }),

/***/ "./src/app/common/util/component-tool.ts":
/*!***********************************************!*\
  !*** ./src/app/common/util/component-tool.ts ***!
  \***********************************************/
/*! exports provided: ComponentTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentTool", function() { return ComponentTool; });
/* harmony import */ var _widget_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../widget/dialog/message-dialog.component */ "./src/app/widget/dialog/message-dialog.component.ts");
/* harmony import */ var _widget_fixed_dropdown_actions_contextmenu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widget/fixed-dropdown/actions-contextmenu.component */ "./src/app/widget/fixed-dropdown/actions-contextmenu.component.ts");
/* harmony import */ var _data_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/point */ "./src/app/common/data/point.ts");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */



/**
 * Common utility methods
 */
var ComponentTool;
(function (ComponentTool) {
    ComponentTool.MESSAGEDIALOG_MESSAGE_CONNECTION = "_*";
    function showHttpError(message, error, modal) {
        var msg;
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            msg = message + ": " + error.error.message;
        }
        else {
            msg = message + " [" + error.status + "]: \n" + error.error;
        }
        console.error(msg);
        ComponentTool.showMessageDialog(modal, "_#(js:Error)", msg);
    }
    ComponentTool.showHttpError = showHttpError;
    /**
     * Shows a modal dialog.
     *
     * @param modalService  the modal service used to open the modal
     * @param dialogType    the type of the dialog content component.
     * @param options       the modal options.
     * @param onCommit      the handler for the on commit event.
     * @param onCancel      the handler for the on cancel event.
     * @param commitEmitter the name of the emitter of the on commit event.
     * @param cancelEmitter the name of the emitter of the on cancel event.
     *
     * @returns the dialog content component.
     */
    function showDialog(modalService, dialogType, onCommit, options, onCancel, commitEmitter, cancelEmitter, applyEmitter) {
        if (options === void 0) { options = {}; }
        if (onCancel === void 0) { onCancel = function () { }; }
        if (commitEmitter === void 0) { commitEmitter = "onCommit"; }
        if (cancelEmitter === void 0) { cancelEmitter = "onCancel"; }
        if (applyEmitter === void 0) { applyEmitter = "onApply"; }
        if (!options) {
            options = {};
        }
        var modal = modalService.open(dialogType, options);
        var slideout = modal;
        var commitSubscription;
        var cancelSubscription;
        var applySubscription;
        commitSubscription = modal.componentInstance[commitEmitter].subscribe(function (v) {
            commitSubscription.unsubscribe();
            cancelSubscription.unsubscribe();
            if (applySubscription) {
                applySubscription.unsubscribe();
            }
            if (options.objectId) {
                modalService.objectChange(options.objectId, slideout.title);
                slideout.changedByOthers = false;
            }
            // wait for next cycle to let blockMouse to receive the event before then
            // dialog is destroyed
            setTimeout(function () { return modal.close(v); }, 0);
        });
        cancelSubscription = modal.componentInstance[cancelEmitter].subscribe(function (v) {
            commitSubscription.unsubscribe();
            cancelSubscription.unsubscribe();
            if (applySubscription) {
                applySubscription.unsubscribe();
            }
            setTimeout(function () { return modal.dismiss(v); }, 0);
        });
        if (modal.componentInstance[applyEmitter]) {
            applySubscription = modal.componentInstance[applyEmitter].subscribe(function (v) {
                if (v.collapse != null && v.result != null) {
                    if (v.collapse && modal.setExpanded) {
                        setTimeout(function () { return slideout.setExpanded(false); }, 0);
                    }
                    v = v.result;
                }
                if (options.objectId) {
                    modalService.objectChange(options.objectId, slideout.title);
                    slideout.changedByOthers = false;
                }
                onCommit(v);
            });
        }
        modal.result.then(function (v) { return onCommit(v); }, function (v) { return onCancel(v); });
        return modal.componentInstance;
    }
    ComponentTool.showDialog = showDialog;
    /**
     * Shows a message dialog.
     *
     * @param modalService the modal service
     * @param title   the dialog title.
     * @param message the message text.
     * @param buttonOptions the button options, represented as a map of symbolic names to button
     *                labels. The symbolic name will be the value resolved in the returned
     *                promise. By default this is {"ok": "OK"}.
     * @param modalOptions the modal options.
     *
     * @returns a promise that resolves to the symbolic name of the button clicked by the
     *          user.
     */
    function showMessageDialog(modalService, title, message, buttonOptions, modalOptions, closeSubject) {
        if (buttonOptions === void 0) { buttonOptions = { "ok": "_#(js:OK)" }; }
        if (modalOptions === void 0) { modalOptions = { backdrop: "static" }; }
        if (closeSubject === void 0) { closeSubject = null; }
        // ignore duplicate messages
        if (message == _widget_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_0__["MessageDialog"].lastMessage && _widget_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_0__["MessageDialog"].lastMessageTS > Date.now() - 500) {
            return Promise.reject("Duplicate message ignored");
        }
        _widget_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_0__["MessageDialog"].lastMessage = message;
        _widget_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_0__["MessageDialog"].lastMessageTS = Date.now();
        var modal = modalService.open(_widget_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_0__["MessageDialog"], modalOptions);
        var dialog = modal.componentInstance;
        var options = [];
        for (var symbol in buttonOptions) {
            if (buttonOptions.hasOwnProperty(symbol)) {
                options.push({
                    symbol: symbol,
                    label: buttonOptions[symbol]
                });
            }
        }
        var messMix = !!message ?
            message.split(ComponentTool.MESSAGEDIALOG_MESSAGE_CONNECTION) : [];
        dialog.options = options;
        dialog.title = title;
        dialog.message = messMix[0];
        if (messMix.length > 1) {
            dialog.expandValues = messMix[1].split(",");
        }
        if (closeSubject) {
            dialog.showProgress = true;
            var closeSubscription_1 = closeSubject.subscribe(function () {
                closeSubscription_1.unsubscribe();
                modal.close();
            });
        }
        var commitSubscription = modal.componentInstance["onCommit"]
            .subscribe(function (symbol) {
            commitSubscription.unsubscribe();
            modal.close(symbol);
        });
        return modal.result;
    }
    ComponentTool.showMessageDialog = showMessageDialog;
    /**
     * Convenience method to show a message dialog with OK/Cancel options. See the
     * documentation of showMessageDialog() for details.
     *
     * @param title   the dialog title.
     * @param message the message text.
     * @param buttonOptions the button options.
     * @param modalOptions the modal options.
     *
     * @returns a promise that resolves to the symbolic name of the button clicked by the
     *          user.
     */
    function showConfirmDialog(modalService, title, message, buttonOptions, modalOptions) {
        if (buttonOptions === void 0) { buttonOptions = { "ok": "_#(js:OK)", "cancel": "_#(js:Cancel)" }; }
        if (modalOptions === void 0) { modalOptions = { backdrop: "static" }; }
        return showMessageDialog(modalService, title, message, buttonOptions, modalOptions);
    }
    ComponentTool.showConfirmDialog = showConfirmDialog;
    function showTrapAlert(modalService, undoable, msg, options) {
        if (undoable === void 0) { undoable = true; }
        if (msg === void 0) { msg = null; }
        if (options === void 0) { options = { backdrop: "static" }; }
        var buttonOptions = undoable ? { "undo": "_#(js:Undo)", "continue": "_#(js:Keep and Continue)" } :
            { "yes": "_#(js:Yes)", "no": "_#(js:No)" };
        var message = (undoable ? "_#(js:designer.binding.trapFound)" : "_#(js:designer.binding.continueTrap)") +
            (msg ? "\n" + msg : "");
        return showMessageDialog(modalService, "_#(js:Trap)", message, buttonOptions, options);
    }
    ComponentTool.showTrapAlert = showTrapAlert;
    /**
     * Show a warning that a date-type data source is being applied to a selection list
     * or a selection tree and it should be applied to a range slider.
     */
    function showConfirmDateTypeBindingDialog(modalService) {
        var message = "_#(js:dateBindingSuggestion)";
        return showMessageDialog(modalService, "_#(js:Confirm)", message, { "yes": "_#(js:Yes)", "no": "_#(js:No)" })
            .then(function (optionSelected) {
            return Promise.resolve(optionSelected == "yes");
        });
    }
    ComponentTool.showConfirmDateTypeBindingDialog = showConfirmDateTypeBindingDialog;
    /**
     * Show a warning that annotations on the page have unsaved changes
     *
     * @param {NgbModal} modalService the modal service used to show the dialog
     *
     * @returns {Promise<boolean>} promise that resolves to true if the user presses yes
     */
    function showAnnotationChangedDialog(modalService) {
        var message = "_#(js:viewer.viewsheet.bookmark.modified)";
        return showMessageDialog(modalService, "_#(js:Confirm)", message, {
            "Yes": "_#(js:Yes)",
            "No": "_#(js:No)"
        }).then(function (value) {
            return Promise.resolve(value === "Yes");
        });
    }
    ComponentTool.showAnnotationChangedDialog = showAnnotationChangedDialog;
    function checkModelTrap(subject, modalService, undoable) {
        if (undoable === void 0) { undoable = true; }
        var promise = Promise.resolve(null);
        subject.subscribe(function (res) {
            if (!!res.body) {
                promise = promise.then(function () { return ComponentTool.showTrapAlert(modalService)
                    .then(function (result) {
                    return (undoable ? result === "undo" : result === "yes") ? res.body : null;
                }); });
            }
        });
        return promise;
    }
    ComponentTool.checkModelTrap = checkModelTrap;
    /**
     * Opens a context menu populated with the given actions.
     *
     * @param dropdownService the specified dropdown service
     * @param actions the context menu actions to display
     * @param contextmenuEvent the original context menu event
     * @param options dropdownOptions to use
     *
     * @returns the created contextmenu component
     */
    function openActionsContextmenu(dropdownService, actions, contextmenuEvent, options) {
        contextmenuEvent.preventDefault();
        contextmenuEvent.stopPropagation();
        var dropdownOptions = {
            position: new _data_point__WEBPACK_IMPORTED_MODULE_2__["Point"](contextmenuEvent.clientX, contextmenuEvent.clientY),
            contextmenu: true,
            autoClose: true,
            closeOnOutsideClick: true,
            closeOnWindowResize: true,
        };
        if (!!options) {
            Object.assign(dropdownOptions, options);
        }
        var contextmenu = dropdownService
            .open(_widget_fixed_dropdown_actions_contextmenu_component__WEBPACK_IMPORTED_MODULE_1__["ActionsContextmenuComponent"], dropdownOptions).componentInstance;
        contextmenu.actions = actions;
        contextmenu.sourceEvent = contextmenuEvent;
        return contextmenu;
    }
    ComponentTool.openActionsContextmenu = openActionsContextmenu;
    /**
     * Get the title for the slide out pane for an assembly dialog.
     * @param {string} assemblyName  the assembly's name
     * @param {string} dialogName    the dialog name
     * @returns {string} the title for the slide out pane
     */
    function getAssemblySlideOutTitle(assemblyName, dialogName) {
        return assemblyName.substring(assemblyName.lastIndexOf("/") + 1) + " " + dialogName;
    }
    ComponentTool.getAssemblySlideOutTitle = getAssemblySlideOutTitle;
    /**
     * Get title based on type of dialog.
     * @param {string} type  the dialog type.
     * @returns {string} the title for dialog.
     */
    function getDialogTitle(type) {
        var title = "";
        switch (type) {
            case "OK":
                title = "_#(js:OK)";
                break;
            case "INFO":
                title = "_#(js:Info)";
                break;
            case "WARNING":
                title = "_#(js:Warning)";
                break;
            case "ERROR":
                title = "_#(js:Error)";
                break;
            default:
                title = "_#(js:Info)";
        }
        return title;
    }
    ComponentTool.getDialogTitle = getDialogTitle;
})(ComponentTool || (ComponentTool = {}));


/***/ }),

/***/ "./src/app/common/util/gui-tool.ts":
/*!*****************************************!*\
  !*** ./src/app/common/util/gui-tool.ts ***!
  \*****************************************/
/*! exports provided: GuiTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuiTool", function() { return GuiTool; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_dimension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/dimension */ "./src/app/common/data/dimension.ts");
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tool */ "./src/app/common/util/tool.ts");
/* harmony import */ var _net_tool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./net-tool */ "./src/app/common/util/net-tool.ts");
/*
 * Copyright (c) 2016, InetSoft Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to InetSoft Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */





var GuiTool;
(function (GuiTool) {
    /**
      * Fraction width, 1/16 point.
      */
    GuiTool.FRACTION_WIDTH_MASK = 0xF0000;
    /**
     * This mask is used to extract the encoded line width from line styles.
     */
    GuiTool.WIDTH_MASK = 0x0F;
    /**
     * This mask is used to extract the dash length.
     */
    GuiTool.DASH_MASK = 0x0F0;
    GuiTool.DATA_TIP_OFFSET = measureScrollbars();
    GuiTool.MINI_TOOLBAR_HEIGHT = 28;
    GuiTool.MINIMUM_TITLE_HEIGHT = 18;
    var scrollbarWidth;
    /**
     * Return the text width in pixels.
     */
    function measureText(str, font) {
        var id = "measureText_canvas";
        var canvas = window.document.querySelector("#" + id);
        if (!canvas) {
            canvas = window.document.createElement("canvas");
            canvas.style.display = "flex";
            canvas.id = id;
            canvas.width = 1;
            canvas.height = 1;
            window.document.body.appendChild(canvas);
        }
        var context = canvas.getContext("2d");
        context.font = font;
        return context.measureText(str).width;
    }
    GuiTool.measureText = measureText;
    /**
     * Get width of the current browsers scrollbars by temporarily creating a div
     * with an overflow and measuring the width.
     *
     * Copied from:
     * http://stackoverflow.com/questions/13382516/getting-scroll-bar-width-using-javascript
     *
     * @returns {number} the width of the scrollbar in pixels
     */
    function measureScrollbars() {
        if (scrollbarWidth === undefined) {
            var outer = window.document.createElement("div");
            outer.style.visibility = "hidden";
            outer.style.width = "100px";
            outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
            window.document.body.appendChild(outer);
            var widthNoScroll = outer.offsetWidth;
            // force scrollbars
            outer.style.overflow = "scroll";
            // add innerdiv
            var inner = window.document.createElement("div");
            inner.style.width = "100%";
            outer.appendChild(inner);
            var widthWithScroll = inner.offsetWidth;
            // remove divs
            outer.parentNode.removeChild(outer);
            scrollbarWidth = widthNoScroll - widthWithScroll;
            // Some browsers (e.g. safari) don't show scrollbars unless scrolling so it does not
            // find the scroll bar width. Default to 10px
            scrollbarWidth = scrollbarWidth == 0 ? 10 : scrollbarWidth;
        }
        return scrollbarWidth;
    }
    GuiTool.measureScrollbars = measureScrollbars;
    /**
     * Checks whether the element matches the selector.
     *
     * @param el the element to check
     * @param selector the selector to check
     *
     * @returns true if the element matches the selector, false otherwise
     */
    function matches(el, selector) {
        var matchesFn;
        // find vendor prefix
        ["matches", "webkitMatchesSelector", "mozMatchesSelector",
            "msMatchesSelector", "oMatchesSelector"].some(function (fn) {
            if (typeof document.body[fn] == "function") {
                matchesFn = fn;
                return true;
            }
            return false;
        });
        return el && el[matchesFn](selector);
    }
    GuiTool.matches = matches;
    // Find the closest parent
    function closest(el, selector) {
        var parent;
        // traverse parents
        while (el) {
            parent = el.parentElement;
            if (matches(parent, selector)) {
                return parent;
            }
            el = parent;
        }
        return null;
    }
    GuiTool.closest = closest;
    // Check if mouse is inside element
    function isMouseIn(elem, event) {
        var rect = elem.getBoundingClientRect();
        return event.pageX >= rect.left &&
            event.pageX <= rect.left + rect.width &&
            event.pageY >= rect.top &&
            event.pageY <= rect.top + rect.height;
    }
    GuiTool.isMouseIn = isMouseIn;
    /**
     * Gets the total viewport size of the hosting browser window.
     *
     * @returns {any} a tuple containing the width and height.
     */
    function getViewportSize() {
        var size = [-1, -1];
        var w;
        var h;
        if (typeof window.innerWidth !== "undefined") {
            if (window.innerWidth > 0) {
                size[0] = window.innerWidth;
            }
            if (window.innerHeight > 0) {
                size[1] = window.innerHeight;
            }
        }
        if (typeof window.document.documentElement !== "undefined" &&
            typeof window.document.documentElement.clientWidth !== "undefined" &&
            window.document.documentElement.clientWidth != 0) {
            w = window.document.documentElement.clientWidth;
            h = window.document.documentElement.clientHeight;
            if (size[0] == -1) {
                size[0] = w;
                size[1] = h;
            }
            else {
                if (w > 0) {
                    size[0] = Math.min(size[0], w);
                }
                if (h > 0) {
                    size[1] = Math.min(size[1], h);
                }
            }
        }
        w = window.document.getElementsByTagName("body")[0].clientWidth;
        h = window.document.getElementsByTagName("body")[0].clientHeight;
        if (size[0] == -1) {
            size[0] = w;
            size[1] = h;
        }
        return size;
    }
    GuiTool.getViewportSize = getViewportSize;
    function getMaxModeSize(container, touch) {
        if (container === void 0) { container = null; }
        if (touch === void 0) { touch = false; }
        if (!!container && typeof (container) === "string") {
            container = window.document.querySelector(container);
        }
        if (container) {
            var _a = getElementClientRect(container), width = _a.width, height = _a.height;
            if (!touch) {
                if (width < container.offsetWidth) {
                    height -= GuiTool.measureScrollbars();
                }
                if (height < container.offsetHeight) {
                    width -= GuiTool.measureScrollbars();
                }
            }
            width = Math.min(width, window.document.body.clientWidth);
            height = Math.min(height, window.document.body.clientHeight);
            return new _data_dimension__WEBPACK_IMPORTED_MODULE_2__["Dimension"](width, height);
        }
        return new _data_dimension__WEBPACK_IMPORTED_MODULE_2__["Dimension"](Math.max(window.innerWidth, document.documentElement.clientWidth || 0) - 20, Math.max(window.innerHeight, document.documentElement.clientHeight || 0) - 75);
    }
    GuiTool.getMaxModeSize = getMaxModeSize;
    function getChartMaxModeSize(container, touch) {
        if (container === void 0) { container = null; }
        if (touch === void 0) { touch = false; }
        var size = GuiTool.getMaxModeSize(container, touch);
        if (container) {
            // subtract size of scroll area divs
            size.width -= 17;
            size.height -= 17;
        }
        else {
            var sbSize = GuiTool.measureScrollbars();
            container = window.document.querySelector(".right-container.split");
            size = GuiTool.getMaxModeSize(container, touch);
            var topContainer = window.document.querySelector(".right-top-container");
            var topSize = GuiTool.getMaxModeSize(topContainer, touch);
            size.width -= 2 * sbSize;
            size.height -= topSize.height + 2 * sbSize;
        }
        return size;
    }
    GuiTool.getChartMaxModeSize = getChartMaxModeSize;
    function isTouchDevice() {
        var result;
        if (!!window.DocumentTouch && (window.document instanceof DocumentTouch)) {
            result = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true).toPromise();
        }
        else {
            var div_1 = window.document.querySelector("#inetsoft_touchTest_div");
            if (!div_1) {
                div_1 = window.document.createElement("div");
                div_1.id = "inetsoft_touchTest_div";
                window.document.body.appendChild(div_1);
                var style = window.document.createElement("style");
                style.innerHTML = "#inetsoft_touchTest_div {\n               position: absolute;\n               z-index: -1;\n               display: none;\n            }\n            @media ('-moz-touch-enabled'),\n            ('-ms-touch-enabled'),\n            ('-o-touch-enabled'),\n            (pointer:coarse),\n            not all (pointer:fine) {\n              #inetsoft_touchTest_div {\n                display: block;\n              }\n            }";
                window.document.body.appendChild(style);
            }
            var subject_1 = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
            result = subject_1.toPromise();
            window.setTimeout(function () {
                subject_1.next(!!div_1.offsetParent);
                subject_1.complete();
            }, 0);
        }
        return result;
    }
    GuiTool.isTouchDevice = isTouchDevice;
    function getElementClientRect(element) {
        var clientRect = (element instanceof window.SVGElement
            ? element.getBoundingClientRect()
            : element.getClientRects()[0]);
        // account for the border on editable-object
        var adj = element.classList.contains("object-editor") ? 2 : 0;
        return clientRect && {
            left: clientRect.left + adj,
            right: clientRect.right - adj,
            top: clientRect.top + adj,
            bottom: clientRect.bottom - adj,
            width: (clientRect.width || clientRect.right - clientRect.left) - adj * 2,
            height: (clientRect.height || clientRect.bottom - clientRect.top) - adj * 2,
        };
    }
    function getScrollXY(relevantWindow) {
        relevantWindow = relevantWindow || window;
        return {
            x: relevantWindow.scrollX || relevantWindow.document.documentElement.scrollLeft,
            y: relevantWindow.scrollY || relevantWindow.document.documentElement.scrollTop,
        };
    }
    function isWindow(obj) {
        return !!(obj && obj.Window) && (obj instanceof obj.Window);
    }
    function getWindow(node) {
        if (isWindow(node)) {
            return node;
        }
        var rootNode = (node.ownerDocument || node);
        return rootNode.defaultView || rootNode.parentWindow || window;
    }
    function getElementRect(element) {
        var clientRect = getElementClientRect(element);
        if (clientRect) {
            var scroll_1 = getScrollXY(getWindow(element));
            clientRect.left += scroll_1.x;
            clientRect.right += scroll_1.x;
            clientRect.top += scroll_1.y;
            clientRect.bottom += scroll_1.y;
        }
        return clientRect;
    }
    GuiTool.getElementRect = getElementRect;
    function resolveUrl(relativeUrl) {
        var resolver = window.document.createElement("a");
        resolver.href = relativeUrl;
        return resolver.href;
    }
    GuiTool.resolveUrl = resolveUrl;
    /**
    * This method needs to be called to append parameters when the type of value is unknown.
    **/
    function appendHttpParams(params, key, value, allowRepeat) {
        if (allowRepeat === void 0) { allowRepeat = false; }
        if (!key || !value) {
            return params;
        }
        if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isString"])(value) || Object(util__WEBPACK_IMPORTED_MODULE_1__["isBoolean"])(value) || Object(util__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(value)) {
            if (!allowRepeat) {
                return params.set(key, value + "");
            }
            return params.has(key) ? params.append(key, value + "") : params.set(key, value + "");
        }
        if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value)) {
            value.forEach(function (val) {
                params = GuiTool.appendHttpParams(params, key, val, allowRepeat);
            });
        }
        return params;
    }
    GuiTool.appendHttpParams = appendHttpParams;
    function appendParams(url, params) {
        if (!!params) {
            params.keys().forEach(function (paramName) {
                if (!!paramName && !!params.getAll(paramName)) {
                    params.getAll(paramName)
                        .filter(function (paramValue) { return !!paramValue; })
                        .forEach(function (paramValue) {
                        url += url.indexOf("?") < 0 ? "?" : "&";
                        url += paramName + "=" + encodeURIComponent(paramValue);
                    });
                }
            });
        }
        return url;
    }
    GuiTool.appendParams = appendParams;
    function openBrowserTab(url, params, target) {
        if (target === void 0) { target = "_blank"; }
        url = GuiTool.appendParams(url, params);
        if (url.indexOf(_net_tool__WEBPACK_IMPORTED_MODULE_4__["NetTool"].PARAMETER_NAME) < 0) {
            url += url.indexOf("?") < 0 ? "?" : "&";
            url += _net_tool__WEBPACK_IMPORTED_MODULE_4__["NetTool"].xsrfToken();
        }
        window.open(url, target);
    }
    GuiTool.openBrowserTab = openBrowserTab;
    var defsizes = [
        { dragName: "dragchart", width: 500, height: 200 },
        { dragName: "dragcrosstab", width: 400, height: 160 },
        { dragName: "dragtable", width: 400, height: 160 },
        { dragName: "dragfreehandtable", width: 400, height: 160 },
        { dragName: "dragselectionlist", width: 100, height: 120 },
        { dragName: "dragselectiontree", width: 100, height: 120 },
        { dragName: "dragrangeslider", width: 200, height: 40 },
        { dragName: "dragcalendar", width: 300, height: 180 },
        { dragName: "dragselectioncontainer", width: 300, height: 240 },
        { dragName: "dragtext", width: 100, height: 20 },
        { dragName: "dragimage", width: 100, height: 40 },
        { dragName: "draggauge", width: 140, height: 140 },
        { dragName: "dragslider", width: 200, height: 40 },
        { dragName: "dragspinner", width: 100, height: 20 },
        { dragName: "dragcheckbox", width: 200, height: 40 },
        { dragName: "dragradiobutton", width: 200, height: 40 },
        { dragName: "dragcombobox", width: 100, height: 20 },
        { dragName: "dragtextinput", width: 100, height: 20 },
        { dragName: "dragsubmit", width: 100, height: 20 },
        { dragName: "dragupload", width: 220, height: 24 },
        { dragName: "dragline", width: 50, height: 50 },
        { dragName: "dragrectangle", width: 100, height: 75 },
        { dragName: "dragoval", width: 100, height: 75 },
        { dragName: "table", width: 100, height: 120 },
    ];
    /**
     * Find the default object size.
     */
    function getDefaultObjectSize(dragName) {
        return defsizes.find(function (d) { return d.dragName == dragName; });
    }
    GuiTool.getDefaultObjectSize = getDefaultObjectSize;
    /**
     * Create a div as a drag image, one line per label.
     */
    function createDragImage(labels, dragNames, cols) {
        if (dragNames === void 0) { dragNames = []; }
        if (cols === void 0) { cols = 1; }
        if (GuiTool.isSafari()) {
            return null;
        }
        var elem = document.querySelector(".show-drag-field");
        if (!elem) {
            elem = document.createElement("div");
            document.body.appendChild(elem);
            elem.setAttribute("class", "show-drag-field txt-primary");
            // Dragging can be done in a modal, make sure the image is visible.
            elem.style.zIndex = "20000";
        }
        elem.style.width = null;
        elem.style.height = null;
        if (dragNames) {
            var w_1 = 0;
            var h_1 = 0;
            var alignContentLeft_1 = false;
            dragNames.forEach(function (dragName) {
                var size = GuiTool.getDefaultObjectSize(dragName);
                if (size) {
                    w_1 = Math.max(size.width * cols, w_1);
                    h_1 += size.height;
                }
                if (dragName == "column") {
                    alignContentLeft_1 = true;
                }
            });
            if (w_1 > 0 && h_1 > 0) {
                elem.style.width = w_1 + "px";
                elem.style.height = h_1 + "px";
                var fsize = Math.max(12, Math.min(24, h_1 / 10));
                elem.style["font-size"] = fsize.toFixed(0) + "px";
                if (labels.length > 1) {
                    elem.style.height = labels.length * h_1 + "px";
                }
            }
            if (alignContentLeft_1) {
                elem.style.justifyContent = "flex-start";
            }
        }
        elem.innerHTML = labels.join("<br>");
        return elem;
    }
    GuiTool.createDragImage = createDragImage;
    /**
     * Implement our own drag image because:
     * 1. IE/Edge doesn't support Dom setDragimage
     * 2. DragImage addes a gradient transparency to the image that makes the image
     * look terrible in many cases.
     * @param event    the drag event.
     * @param image    the image or element to use.
     */
    function setDragImage(event, image, zone, domService) {
        if (GuiTool.isSafari()) {
            return new Promise(function () { });
        }
        if (event && event.dataTransfer && event.dataTransfer.setDragImage) {
            if (image instanceof Image) {
                event.dataTransfer.setDragImage(image, 0, 0);
            }
            else {
                event.dataTransfer.setDragImage(new Image(), 0, 0);
            }
        }
        // clear default dragging image
        if (GuiTool.isEdge() || GuiTool.isIE()) {
            var odisplay_1 = event.srcElement.style.display;
            event.srcElement.style.display = "none";
            setTimeout(function () { return event.srcElement.style.display = odisplay_1; }, 5);
        }
        if (image instanceof HTMLElement) {
            var ox_1 = null;
            var oy_1 = null;
            var dragOverFn_1 = function (e) {
                domService.requestRead(function () {
                    var pY = e.pageY;
                    var pX = e.pageX;
                    if (ox_1 != pX || oy_1 != pY) {
                        domService.requestWrite(function () {
                            ox_1 = pX;
                            oy_1 = pY;
                            image.style.top = (pY + 1) + "px";
                            image.style.left = (pX + 1) + "px";
                        });
                    }
                });
            };
            return new Promise(function (resolve) {
                zone.runOutsideAngular(function () {
                    document.addEventListener("dragover", dragOverFn_1);
                    var dragendFn = function () {
                        document.removeEventListener("dragover", dragOverFn_1);
                        document.removeEventListener("dragend", dragendFn);
                        if (image.parentElement) {
                            document.body.removeChild(image);
                        }
                        resolve();
                    };
                    document.addEventListener("dragend", dragendFn);
                });
            });
        }
    }
    GuiTool.setDragImage = setDragImage;
    // remove drag image (for dnd)
    function clearDragImage() {
        var elem = document.querySelector(".show-drag-field");
        if (elem) {
            document.body.removeChild(elem);
        }
    }
    GuiTool.clearDragImage = clearDragImage;
    // check if any parent contains clsas
    function parentContainsClass(element, cls) {
        if (!element) {
            return false;
        }
        if (element.classList.contains(cls)) {
            return true;
        }
        var parent = element.parentElement;
        return parent && GuiTool.parentContainsClass(parent, cls);
    }
    GuiTool.parentContainsClass = parentContainsClass;
    /**
     * @return {boolean} whether we're in an iframe
     */
    function isIFrame() {
        try {
            return window.frameElement != null;
        }
        catch (e) {
            return window.self !== window.top;
        }
    }
    GuiTool.isIFrame = isIFrame;
    /**
     * Find node form the tree by the path.
     * @param {string} path node path
     * @param {TreeNodeModel} node treeNode
     * @returns {TreeNodeModel} If found, retunr the node, otherwise return null
     */
    function getNodeByPath(path, node) {
        if (path) {
            return findNode(node, function (n) { return !!n.data && n.data.path === path; });
        }
        return null;
    }
    GuiTool.getNodeByPath = getNodeByPath;
    function findNode(node, match) {
        if (node) {
            var queue = [node];
            while (queue.length > 0) {
                var n = queue.shift();
                if (match(n)) {
                    return n;
                }
                if (n.children && n.children.length > 0) {
                    queue.push.apply(queue, n.children);
                }
            }
        }
        return null;
    }
    GuiTool.findNode = findNode;
    function isTouch(event) {
        return event.pageX == null;
    }
    GuiTool.isTouch = isTouch;
    function isButton1(event) {
        return event.button == null || event.button == 0;
    }
    GuiTool.isButton1 = isButton1;
    function pageX(event) {
        return (event.pageX != null) ? event.pageX : event.touches[0].pageX;
    }
    GuiTool.pageX = pageX;
    function pageY(event) {
        return (event.pageY != null) ? event.pageY : event.touches[0].pageY;
    }
    GuiTool.pageY = pageY;
    function clientX(event) {
        return (event.clientX != null) ? event.clientX : event.touches[0].clientX;
    }
    GuiTool.clientX = clientX;
    function clientY(event) {
        return (event.clientY != null) ? event.clientY : event.touches[0].clientY;
    }
    GuiTool.clientY = clientY;
    function isIE() {
        var uA = window.navigator.userAgent;
        return /msie\s|trident\//i.test(uA);
    }
    GuiTool.isIE = isIE;
    function isEdge() {
        var uA = window.navigator.userAgent;
        return /\sEdge\//i.test(uA);
    }
    GuiTool.isEdge = isEdge;
    function isFF() {
        var uA = window.navigator.userAgent;
        return uA.toLowerCase().indexOf("firefox") >= 0;
    }
    GuiTool.isFF = isFF;
    function isSafari() {
        var uA = window.navigator.userAgent;
        return uA.toLowerCase().indexOf("safari") >= 0 && uA.toLowerCase().indexOf("chrome") < 0;
    }
    GuiTool.isSafari = isSafari;
    function isChrome() {
        var uA = window.navigator.userAgent;
        return uA.toLowerCase().indexOf("chrome") >= 0 && uA.toLowerCase().indexOf("edge") < 0;
    }
    GuiTool.isChrome = isChrome;
    function isIOS() {
        var uA = window.navigator.userAgent;
        return /Safari/i.test(uA) && (/iPad;/i.test(uA) ||
            /iPod;/i.test(uA) || /iPhone;/i.test(uA));
    }
    GuiTool.isIOS = isIOS;
    function getIOSVersion() {
        if (!isIOS()) {
            return -1;
        }
        var result = (window.navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
        if (!!result && result.length > 1) {
            return parseInt(result[1], 10);
        }
        return -1;
    }
    GuiTool.getIOSVersion = getIOSVersion;
    /**
     * Determines if the browser is hosted on a mobile device. The implementation of this
     * function is taken from http://detectmobilebrowsers.com (public domain).
     *
     * @returns {boolean} <tt>true</tt> if a mobile device; <tt>false</tt> otherwise.
     */
    function isMobileDevice() {
        var a = (window.navigator.userAgent || window.navigator.vendor || window["opera"]);
        return (/(android|bb\d+|meego).+mobile|android|ipad|playbook|silk|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)));
    }
    GuiTool.isMobileDevice = isMobileDevice;
    function getQueryParameters() {
        var query = window.location.search.substring(1);
        var params = query.split("&")
            .map(function (pair) { return pair.split("="); })
            .reduce(function (parameterMap, pair) {
            if (pair[0] && pair[1]) {
                var key = decodeURIComponent(pair[0]);
                var value = decodeURIComponent(pair[1]);
                var paramsTemp = parameterMap.get(key);
                if (!paramsTemp) {
                    paramsTemp = [];
                    parameterMap.set(key, paramsTemp);
                }
                if (value.indexOf("~_") >= 0 && value.indexOf("_~") >= 0) {
                    paramsTemp.push(_tool__WEBPACK_IMPORTED_MODULE_3__["Tool"].byteDecode(value));
                }
                else {
                    paramsTemp.push(value);
                }
            }
            return parameterMap;
        }, new Map());
        var drillId = params.get("drillId");
        if (drillId && drillId.length) {
            var storage_1 = window.sessionStorage;
            var drillParamStr = storage_1.getItem("__drillParameters__" + drillId[0]);
            if (drillParamStr) {
                var drillParams = JSON.parse(drillParamStr);
                setTimeout(function () { return storage_1.removeItem("__drillParameters__" + drillId[0]); }, 2000);
                for (var _i = 0, _a = Object.keys(drillParams); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var v = drillParams[k];
                    // array will be changed at ie11 (make Array to json failure),
                    // so we should create new array
                    if (Array.isArray(v)) {
                        var clone = [];
                        for (var _b = 0, v_1 = v; _b < v_1.length; _b++) {
                            var value = v_1[_b];
                            clone.push(value);
                        }
                        v = clone;
                    }
                    params.set(k, Array.isArray(v) ? v : [v]);
                }
            }
        }
        return params;
    }
    GuiTool.getQueryParameters = getQueryParameters;
    /**
     * Returns true if the element has an associated CSS layout box, false otherwise.
     * This is useful for detecting whether an element is being displayed in the document.
     *
     * @param element the element to check
     * @returns true if the element has a layout box, false otherwise.
     */
    function hasLayoutBox(element) {
        // Per the spec, clientRects will be empty if the element has no associated layout box.
        // https://www.w3.org/TR/cssom-view-1/#dom-element-getclientrects
        return element.getClientRects().length !== 0;
    }
    GuiTool.hasLayoutBox = hasLayoutBox;
    var _agile;
})(GuiTool || (GuiTool = {}));


/***/ }),

/***/ "./src/app/common/util/net-tool.ts":
/*!*****************************************!*\
  !*** ./src/app/common/util/net-tool.ts ***!
  \*****************************************/
/*! exports provided: NetTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetTool", function() { return NetTool; });
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
/**
 * Common network utility methods
 */
var NetTool;
(function (NetTool) {
    NetTool.COOKIE_NAME = "XSRF-TOKEN";
    NetTool.PARAMETER_NAME = "_csrf";
    function parseCookieValue(cookies, name) {
        return cookies.split(";")
            .map(function (v) { return v.trim(); })
            .map(function (v) {
            var eq = v.indexOf("=");
            return [v.substring(0, eq), v.substring(eq + 1)];
        })
            .filter(function (pair) { return pair[0] == name; })
            .map(function (pair) { return pair[1]; })[0];
    }
    NetTool.parseCookieValue = parseCookieValue;
    function tokenValue() {
        var cookies = document && document.cookie || "";
        return NetTool.parseCookieValue(cookies, NetTool.COOKIE_NAME);
    }
    NetTool.tokenValue = tokenValue;
    function xsrfToken() {
        return NetTool.PARAMETER_NAME + "=" + tokenValue();
    }
    NetTool.xsrfToken = xsrfToken;
})(NetTool || (NetTool = {}));


/***/ }),

/***/ "./src/app/common/util/tool.ts":
/*!*************************************!*\
  !*** ./src/app/common/util/tool.ts ***!
  \*************************************/
/*! exports provided: Tool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tool", function() { return Tool; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */

/**
 * common util
 */
var Tool;
(function (Tool) {
    Tool.isEquals = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
    Tool.clone = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
    Tool.isEmpty = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
    Tool.unescapeHTML = __webpack_require__(/*! lodash/unescape */ "./node_modules/lodash/unescape.js");
    Tool.union = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
    Tool.orderBy = __webpack_require__(/*! lodash/orderBy */ "./node_modules/lodash/orderBy.js");
    // correct typing of first parameter - varargs isn't possible in typescript
    Tool.intersectionWith = __webpack_require__(/*! lodash/intersectionWith */ "./node_modules/lodash/intersectionWith.js");
    Tool.uniq = __webpack_require__(/*! lodash/uniq */ "./node_modules/lodash/uniq.js");
    /**
     * Encode a single non-ascii character to unicode enclosed in '[]'
     * @param ch single-character string
     * @param encodeDot whether to encode "."
     * @returns encoded string
     */
    function byteEncodeChar(ch, encodeDot) {
        if (encodeDot === void 0) { encodeDot = true; }
        if (!ch) {
            return "";
        }
        var charCode = ch.charCodeAt(0);
        if (charCode < 128 && ch !== "[" && ch !== "]" && ch !== "/" && ch !== "'" &&
            ch !== "=" && ch !== "%" && ch !== "&" && ch !== "?" &&
            ch !== "#" && ch !== '"' && ch !== "<" && ch !== ">" &&
            ch !== "," && ch !== "\\" && ch !== "+" && ch !== ";" &&
            ch !== "(" && ch !== ")" && ch !== "{" && ch !== "}" && ch !== "`" &&
            (ch !== "." || !encodeDot) && ch !== "|") {
            return ch;
        }
        else {
            return "~_" + charCode.toString(16) + "_~";
        }
    }
    /**
     * Encode non-ascii characters to unicode enclosed in '[]'.
     * @param source string
     * @param encodeDot whether to encode "."
     * @returns encoded string.
     */
    function byteEncode(source, encodeDot) {
        if (encodeDot === void 0) { encodeDot = true; }
        if (!source) {
            return "";
        }
        var ret = "";
        for (var _i = 0, source_1 = source; _i < source_1.length; _i++) {
            var ch = source_1[_i];
            ret += byteEncodeChar(ch, encodeDot);
        }
        return ret;
    }
    Tool.byteEncode = byteEncode;
    function byteDecode(source) {
        if ((source == null) || (source == "")) {
            return "";
        }
        var arr = [];
        for (var i = 0; i < source.length; i++) {
            var ch = source.charAt(i);
            if (ch == "~" && i < source.length - 1 && source.charAt(i + 1) == "_") {
                var idx = source.indexOf("_~", i + 2);
                if (idx > i + 2) {
                    ch = String.fromCharCode(parseInt(source.substring(i + 2, idx), 16));
                    i = idx + 1;
                }
            }
            arr[i] = ch;
        }
        return arr.join("").replace(/%20/g, " ");
    }
    Tool.byteDecode = byteDecode;
    function setFormControlDisabled(control, val) {
        if (val) {
            control.disable({ emitEvent: false });
        }
        else {
            control.enable({ emitEvent: false });
        }
    }
    Tool.setFormControlDisabled = setFormControlDisabled;
    function replaceStr(val, ostr, nstr) {
        // Replace all ostr to nstr.
        var reg = new RegExp(ostr, "g");
        return val.replace(reg, nstr);
    }
    Tool.replaceStr = replaceStr;
    function hasKey(obj, key) {
        return obj ? Object.prototype.hasOwnProperty.call(obj, key) : false;
    }
    Tool.hasKey = hasKey;
    /**
     * Flattens a multidimensional array into a 1d array
     *
     * @param arr the array to flatten
     * @returns the flattened array
     */
    function flatten(arr) {
        return arr.reduce(function (a, b) { return a.concat(Array.isArray(b) ? flatten(b) : b); }, []);
    }
    Tool.flatten = flatten;
    /**
     * Returns the result of n modulus m.
     */
    function mod(n, m) {
        return ((n % m) + m) % m;
    }
    Tool.mod = mod;
    /**
     * Checks whether two strings are equal, ignoring case.
     *
     * @param s1 the first string to check
     * @param s2 the second string to check
     * @returns true if the strings are equal when ignoring case, false otherwise
     */
    function equalsIgnoreCase(s1, s2) {
        if (s1 == null || s2 == null) {
            return s1 === s2;
        }
        return s1.toUpperCase() === s2.toUpperCase();
    }
    Tool.equalsIgnoreCase = equalsIgnoreCase;
    function getMarginSize(border) {
        // Parse the border width from the format string
        return border ? parseInt(border.substring(0, (border.indexOf("px"))), 10) : 0;
    }
    Tool.getMarginSize = getMarginSize;
    /**
     * Returns the browser-independent keycode of the keyboard event.
     *
     * @param event the keyboard event
     * @returns the keycode of the keyboard event
     */
    function getKeyCode(event) {
        return event.which || event.keyCode || event.charCode;
    }
    Tool.getKeyCode = getKeyCode;
    // Encode url path by separating the /
    function encodeURIPath(path) {
        return path.split("/").map(function (p) { return encodeURIComponent(p); }).join("/");
    }
    Tool.encodeURIPath = encodeURIPath;
    function isArray(val) {
        return Object.prototype.toString.call(val) === "[object Array]";
    }
    Tool.isArray = isArray;
    // Checks if list of emails delimited by semicolon (;) is valid by checking against regex
    // Empty strings are treated as valid
    function isValidEmail(val) {
        if (!val || val.length == 0) {
            return true;
        }
        var validEmailRegex = /^[\w\d!#$%&'*+\-/=?^_`{|}~]+(\.[\w\d!#$%&'*+\-/=?^_`{|}~]+)*@[\w\d\-_]+(\.[\w\d\-_]+)*$/;
        var addresses = val.split(";");
        // Return false if any of the emails are invalid
        return !addresses.map(function (str) { return str.trim(); }).some(function (str) { return str != "" && !validEmailRegex.test(str); });
    }
    Tool.isValidEmail = isValidEmail;
    /**
     * Detect if an object is a numeric type.
     *    This type of detection is generally only string and number.
     * @param obj object
     */
    function isNumber(obj) {
        return (+obj + "" === obj || Object(util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(obj)) && !isNaN(+obj);
    }
    Tool.isNumber = isNumber;
})(Tool || (Tool = {}));


/***/ }),

/***/ "./src/app/portal/app-routing.module.ts":
/*!**********************************************!*\
  !*** ./src/app/portal/app-routing.module.ts ***!
  \**********************************************/
/*! exports provided: PortalAppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalAppRoutingModule", function() { return PortalAppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/portal/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/portal/welcome/welcome.component.ts");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    {
        path: "",
        component: _app_component__WEBPACK_IMPORTED_MODULE_2__["PortalAppComponent"],
        children: [
            {
                path: "welcome",
                component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"]
            },
            {
                path: "**",
                redirectTo: "welcome"
            }
        ]
    }
];
var PortalAppRoutingModule = /** @class */ (function () {
    function PortalAppRoutingModule() {
    }
    PortalAppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], PortalAppRoutingModule);
    return PortalAppRoutingModule;
}());



/***/ }),

/***/ "./src/app/portal/app.component.html":
/*!*******************************************!*\
  !*** ./src/app/portal/app.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Portal...\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/portal/app.component.scss":
/*!*******************************************!*\
  !*** ./src/app/portal/app.component.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".host {\n  width: 100%;\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/portal/app.component.ts":
/*!*****************************************!*\
  !*** ./src/app/portal/app.component.ts ***!
  \*****************************************/
/*! exports provided: PortalAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalAppComponent", function() { return PortalAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PortalAppComponent = /** @class */ (function () {
    function PortalAppComponent() {
    }
    PortalAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "portal-app",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/portal/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/portal/app.component.scss")]
        })
    ], PortalAppComponent);
    return PortalAppComponent;
}());



/***/ }),

/***/ "./src/app/portal/index.components.ts":
/*!********************************************!*\
  !*** ./src/app/portal/index.components.ts ***!
  \********************************************/
/*! exports provided: MODULE_COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_COMPONENTS", function() { return MODULE_COMPONENTS; });
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/portal/welcome/welcome.component.ts");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */

var MODULE_COMPONENTS = [
    _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__["WelcomeComponent"]
];


/***/ }),

/***/ "./src/app/portal/portal-app.module.ts":
/*!*********************************************!*\
  !*** ./src/app/portal/portal-app.module.ts ***!
  \*********************************************/
/*! exports provided: PortalAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalAppModule", function() { return PortalAppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/portal/app.component.ts");
/* harmony import */ var _widget_widget_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widget/widget.module */ "./src/app/widget/widget.module.ts");
/* harmony import */ var _index_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.components */ "./src/app/portal/index.components.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/portal/app-routing.module.ts");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PortalAppModule = /** @class */ (function () {
    function PortalAppModule() {
    }
    PortalAppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["PortalAppComponent"]
            ].concat(_index_components__WEBPACK_IMPORTED_MODULE_6__["MODULE_COMPONENTS"]),
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _widget_widget_module__WEBPACK_IMPORTED_MODULE_5__["WidgetModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["PortalAppRoutingModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["PortalAppComponent"]],
            entryComponents: [],
            providers: []
        })
    ], PortalAppModule);
    return PortalAppModule;
}());



/***/ }),

/***/ "./src/app/portal/welcome/welcome.component.html":
/*!*******************************************************!*\
  !*** ./src/app/portal/welcome/welcome.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Welcome..."

/***/ }),

/***/ "./src/app/portal/welcome/welcome.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/portal/welcome/welcome.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".host {\n  width: 100%;\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/portal/welcome/welcome.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/portal/welcome/welcome.component.ts ***!
  \*****************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "portal-welcome",
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/portal/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/portal/welcome/welcome.component.scss")]
        })
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/widget/dialog/message-dialog.component.html":
/*!*************************************************************!*\
  !*** ./src/app/widget/dialog/message-dialog.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n   <h3 class=\"modal-title\">{{title}}</h3>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"form-row\">\r\n      <div class=\"col-auto\" *ngIf=\"title == 'Trap'\">\r\n        <img [src]='errorSource()'>\r\n      </div>\r\n      <div class=\"col\">\r\n        <p class=\"text-info\" [wExpandString]=\"expandValues\">{{message}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\" *ngIf=\"showProgress\">\r\n      <div class=\"col\">\r\n        <ngb-progressbar type=\"info\" [value]=\"100\" [striped]=\"true\" [animated]=\"true\"\r\n                         height=\"1rem\">\r\n        </ngb-progressbar>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button *ngFor=\"let option of options; let first = first\" type=\"button\" class=\"btn\"\r\n          [class.btn-primary]=\"first\"  [class.btn-default]=\"!first\" #btn\r\n          [attr.autofocus]=\"first ? '' : null\"\r\n          (click)=\"clickButton(option.symbol)\">{{option.label}}</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/widget/dialog/message-dialog.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/widget/dialog/message-dialog.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * Copyright (c) 2017, InetSoft Technology Corp, All Rights Reserved.\n *\n * The software and information contained herein are copyrighted and\n * proprietary to InetSoft Technology Corp. This software is furnished\n * pursuant to a written license agreement and may be used, copied,\n * transmitted, and stored only in accordance with the terms of such\n * license and with the inclusion of the above copyright notice. Please\n * refer to the file \"COPYRIGHT\" for further copyright and licensing\n * information. This software and information or any other copies\n * thereof may not be provided or otherwise made available to any other\n * person.\n */\n.modal-body p {\n  /* pre-line needed for body to correctly use new line character '\\n' */\n  white-space: pre-line; }\n.text-info {\n  max-height: 50vh;\n  overflow: auto; }\n"

/***/ }),

/***/ "./src/app/widget/dialog/message-dialog.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/widget/dialog/message-dialog.component.ts ***!
  \***********************************************************/
/*! exports provided: MessageDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageDialog", function() { return MessageDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * Copyright (c) 2016, InetSoft Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to InetSoft Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Component that display a simple message or confirmation dialog.
 */
var MessageDialog = /** @class */ (function () {
    function MessageDialog() {
        this.title = "";
        this.message = "";
        this.options = [];
        this.showProgress = false;
        this.expandValues = [];
        this.onCommit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MessageDialog.prototype.ngAfterViewInit = function () {
        if (this.buttons && this.buttons.first) {
            this.buttons.first.nativeElement.focus();
        }
    };
    MessageDialog.prototype.clickButton = function (symbol) {
        this.onCommit.emit(symbol);
    };
    MessageDialog.prototype.errorSource = function () {
        var url = "assets/error.png";
        return url;
    };
    MessageDialog.lastMessageTS = 0;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MessageDialog.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MessageDialog.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MessageDialog.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MessageDialog.prototype, "showProgress", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MessageDialog.prototype, "expandValues", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MessageDialog.prototype, "onCommit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])("btn"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], MessageDialog.prototype, "buttons", void 0);
    MessageDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "message-dialog",
            template: __webpack_require__(/*! ./message-dialog.component.html */ "./src/app/widget/dialog/message-dialog.component.html"),
            styles: [__webpack_require__(/*! ./message-dialog.component.scss */ "./src/app/widget/dialog/message-dialog.component.scss")]
        })
    ], MessageDialog);
    return MessageDialog;
}());



/***/ }),

/***/ "./src/app/widget/directive/block-mouse.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/widget/directive/block-mouse.directive.ts ***!
  \***********************************************************/
/*! exports provided: BlockMouseDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockMouseDirective", function() { return BlockMouseDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlockMouseDirective = /** @class */ (function () {
    function BlockMouseDirective(_ngZone, el) {
        this._ngZone = _ngZone;
        this.el = el;
    }
    BlockMouseDirective.prototype.ngOnInit = function () {
        var _this = this;
        var handler = function (event) { return event.stopPropagation(); };
        this._ngZone.runOutsideAngular(function () {
            var nativeElement = _this.el.nativeElement;
            nativeElement.addEventListener("click", handler, false);
            nativeElement.addEventListener("mousedown", handler, false);
            nativeElement.addEventListener("mouseup", handler, false);
        });
    };
    BlockMouseDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[blockMouse]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], BlockMouseDirective);
    return BlockMouseDirective;
}());



/***/ }),

/***/ "./src/app/widget/directive/default-focus.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/widget/directive/default-focus.directive.ts ***!
  \*************************************************************/
/*! exports provided: DefaultFocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultFocusDirective", function() { return DefaultFocusDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefaultFocusDirective = /** @class */ (function () {
    function DefaultFocusDirective(host) {
        this.host = host;
        this.autoSelect = true;
    }
    DefaultFocusDirective.prototype.ngOnInit = function () {
        this.host.nativeElement.focus();
        if (this.autoSelect) {
            this.host.nativeElement.select();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DefaultFocusDirective.prototype, "autoSelect", void 0);
    DefaultFocusDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[defaultFocus]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DefaultFocusDirective);
    return DefaultFocusDirective;
}());



/***/ }),

/***/ "./src/app/widget/directive/enter-click.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/widget/directive/enter-click.directive.ts ***!
  \***********************************************************/
/*! exports provided: EnterClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterClickDirective", function() { return EnterClickDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EnterClickDirective = /** @class */ (function () {
    function EnterClickDirective(elementRef) {
        this.elementRef = elementRef;
        this.hasKeys = false;
    }
    /**
     * Trigger click event on the element if user clicks enter.
     */
    EnterClickDirective.prototype.onEnter = function (event) {
        if (event.keyCode == 13) {
            if (this.hasKeys) {
                var init = {
                    shiftKey: event.shiftKey,
                    ctrlKey: event.ctrlKey,
                    metaKey: event.metaKey
                };
                var click = new MouseEvent("click", init);
                this.elementRef.nativeElement.dispatchEvent(click);
            }
            else {
                this.elementRef.nativeElement.click();
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], EnterClickDirective.prototype, "hasKeys", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("keydown", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], EnterClickDirective.prototype, "onEnter", null);
    EnterClickDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[enterClick]",
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], EnterClickDirective);
    return EnterClickDirective;
}());



/***/ }),

/***/ "./src/app/widget/directive/enter-submit.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/widget/directive/enter-submit.directive.ts ***!
  \************************************************************/
/*! exports provided: EnterSubmitDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterSubmitDirective", function() { return EnterSubmitDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EnterSubmitDirective = /** @class */ (function () {
    // private enabled = true;
    // private keyDownListener: () => void;
    //
    // @Input()
    // set enterSubmit(value: boolean) {
    //    if(value === undefined) {
    //       this.enabled = true;
    //    }
    //    else {
    //       this.enabled = value;
    //    }
    //
    //    if(this.enabled) {
    //       this.addKeyDownListener();
    //    }
    //    else {
    //       this.removeKeyDownListener();
    //    }
    // }
    //
    // get enterSubmit(): boolean {
    //    return this.enabled;
    // }
    //
    // constructor(private element: ElementRef, private renderer: Renderer2) {
    //    this.addKeyDownListener();
    // }
    //
    // public ngOnDestroy(): void {
    //    this.removeKeyDownListener();
    // }
    //
    // private addKeyDownListener(): void {
    //    if(!this.keyDownListener) {
    //       this.keyDownListener = this.renderer.listen(
    //          this.element.nativeElement, "keydown", (event) => this.onKeyDown(event));
    //    }
    // }
    //
    // private removeKeyDownListener() {
    //    if(this.keyDownListener) {
    //       this.keyDownListener();
    //       this.keyDownListener = null;
    //    }
    // }
    function EnterSubmitDirective(element, renderer, zone) {
        this.element = element;
        this.renderer = renderer;
        this.zone = zone;
        this.onEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onEsc = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EnterSubmitDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (!!this.element.nativeElement && !this.element.nativeElement.hasAttribute("tabindex")) {
            this.element.nativeElement.setAttribute("tabindex", -1);
        }
        if (!this.element.nativeElement.querySelector("[autofocus], [defaultFocus]")) {
            this.element.nativeElement.focus();
        }
        if (this.element.nativeElement) {
            this.zone.runOutsideAngular(function () {
                _this.keydownListener = _this.renderer.listen(_this.element.nativeElement, "keydown", function ($event) { return _this.onKeyDown($event); });
            });
        }
    };
    EnterSubmitDirective.prototype.ngOnDestroy = function () {
        if (this.keydownListener) {
            this.keydownListener();
        }
    };
    EnterSubmitDirective.prototype.onKeyDown = function (event) {
        if (this.onEsc && event.keyCode === 27) {
            event.preventDefault();
            this.onEsc.emit();
            return;
        }
        if ((!!this.enterSubmit && this.enterSubmit()) && (event.keyCode === 13 || event.which === 13)) {
            // If the target is a link or button, it is unlikely the user is intending to close the dialog
            if (event.target instanceof HTMLButtonElement ||
                event.target instanceof HTMLAnchorElement ||
                (event.target instanceof HTMLTextAreaElement && !(event.ctrlKey || event.metaKey))) {
                return;
            }
            event.preventDefault();
            this.onEnter.emit();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], EnterSubmitDirective.prototype, "enterSubmit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EnterSubmitDirective.prototype, "onEnter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EnterSubmitDirective.prototype, "onEsc", void 0);
    EnterSubmitDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[enterSubmit]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], EnterSubmitDirective);
    return EnterSubmitDirective;
}());



/***/ }),

/***/ "./src/app/widget/directive/fixed-dropdown.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/widget/directive/fixed-dropdown.directive.ts ***!
  \**************************************************************/
/*! exports provided: FixedDropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedDropdownDirective", function() { return FixedDropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fixed_dropdown_fixed_dropdown_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fixed-dropdown/fixed-dropdown.service */ "./src/app/widget/fixed-dropdown/fixed-dropdown.service.ts");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FixedDropdownDirective = /** @class */ (function () {
    function FixedDropdownDirective(dropdownService, elementRef) {
        this.dropdownService = dropdownService;
        this.elementRef = elementRef;
        this.dropdownPlacement = "mouse";
        this.disabled = false;
        this.openChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._autoClose = true;
        this._closeOnOutsideClick = true;
        this._closeOnWindowResize = true;
        this._zIndex = null;
        this.dropdown = null;
    }
    FixedDropdownDirective.prototype.ngOnDestroy = function () {
        this.close();
    };
    Object.defineProperty(FixedDropdownDirective.prototype, "autoClose", {
        get: function () {
            return this._autoClose;
        },
        set: function (flag) {
            this._autoClose = flag;
            if (this.dropdown) {
                this.dropdown.dropdownInstance.autoClose = this.autoClose;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FixedDropdownDirective.prototype, "zIndex", {
        get: function () {
            return this._zIndex;
        },
        set: function (flag) {
            this._zIndex = flag;
            if (this.dropdown) {
                this.dropdown.dropdownInstance.zIndex = this.zIndex;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FixedDropdownDirective.prototype, "closeOnOutsideClick", {
        get: function () {
            return this._closeOnOutsideClick;
        },
        set: function (flag) {
            this._closeOnOutsideClick = flag;
            if (this.dropdown) {
                this.dropdown.dropdownInstance.closeOnOutsideClick = this.closeOnOutsideClick;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FixedDropdownDirective.prototype, "closeOnWindowResize", {
        get: function () {
            return this._closeOnWindowResize;
        },
        set: function (flag) {
            this._closeOnWindowResize = flag;
            if (this.dropdown) {
                this.dropdown.dropdownInstance.closeOnWindowResize = this.closeOnWindowResize;
            }
        },
        enumerable: true,
        configurable: true
    });
    FixedDropdownDirective.prototype.mousedown = function () {
        // If dropdown is open on mousedown, don't open it on click.
        this.isDropdownOpenOnMousedown = this.dropdown && !this.dropdown.closed;
    };
    FixedDropdownDirective.prototype.toggleDropdown = function (event) {
        var _this = this;
        if (!this.disabled && (!this.dropdown || this.dropdown.closed) && !!this.fixedDropdown &&
            !this.isDropdownOpenOnMousedown) {
            var position = this.getDropdownPosition(event);
            var options = {
                position: position,
                contextmenu: false,
                autoClose: this.autoClose,
                closeOnOutsideClick: this.closeOnOutsideClick,
                closeOnWindowResize: this.closeOnWindowResize,
                zIndex: this.zIndex,
            };
            this.openChange.emit(true);
            this.dropdown = this.dropdownService.open(this.fixedDropdown, options);
            var sub_1 = this.dropdown.closeEvent.subscribe(function () {
                _this.openChange.emit(false);
                sub_1.unsubscribe();
            });
        }
        else if (this.dropdown) {
            this.dropdown.close();
        }
    };
    FixedDropdownDirective.prototype.close = function () {
        if (this.dropdown) {
            this.dropdown.close();
            this.dropdown = null;
        }
    };
    FixedDropdownDirective.prototype.getDropdownPosition = function (event) {
        var box = this.elementRef.nativeElement.getBoundingClientRect();
        var position;
        switch (this.dropdownPlacement) {
            case "mouse":
                position = { x: event.clientX, y: event.clientY };
                break;
            case "bottom":
                position = { x: box.left, y: box.bottom };
                break;
            case "right":
                position = { x: box.right, y: box.top };
                break;
            default:
                position = { x: 0, y: 0 };
        }
        return position;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], FixedDropdownDirective.prototype, "fixedDropdown", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FixedDropdownDirective.prototype, "dropdownPlacement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FixedDropdownDirective.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FixedDropdownDirective.prototype, "openChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], FixedDropdownDirective.prototype, "autoClose", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], FixedDropdownDirective.prototype, "zIndex", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], FixedDropdownDirective.prototype, "closeOnOutsideClick", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], FixedDropdownDirective.prototype, "closeOnWindowResize", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("mousedown"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FixedDropdownDirective.prototype, "mousedown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("click", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], FixedDropdownDirective.prototype, "toggleDropdown", null);
    FixedDropdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[fixedDropdown]"
        }),
        __metadata("design:paramtypes", [_fixed_dropdown_fixed_dropdown_service__WEBPACK_IMPORTED_MODULE_1__["FixedDropdownService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], FixedDropdownDirective);
    return FixedDropdownDirective;
}());



/***/ }),

/***/ "./src/app/widget/directive/input-trim.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/widget/directive/input-trim.directive.ts ***!
  \**********************************************************/
/*! exports provided: InputTrimDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTrimDirective", function() { return InputTrimDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputTrimDirective = /** @class */ (function (_super) {
    __extends(InputTrimDirective, _super);
    function InputTrimDirective(renderer, elementRef) {
        var _this = _super.call(this, renderer, elementRef, false) || this;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        return _this;
    }
    Object.defineProperty(InputTrimDirective.prototype, "value", {
        // set a new value to the field and model.
        set: function (val) {
            // update element
            this.writeValue(val);
            // update model
            this.onChange(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates the value on the blur event.
     */
    InputTrimDirective.prototype.onBlur = function (event, value) {
        this.updateValue(event, value);
    };
    /**
     * Trims an input value, and sets it to the model and element.
     *
     * @param {string} event - input event
     * @param {string} value - input value
     */
    InputTrimDirective.prototype.updateValue = function (event, value) {
        this.value = value.trim();
        // this is necessary for reactive forms
        var evt = document.createEvent("Event");
        evt.initEvent("input", true, true);
        Object.defineProperty(evt, "target", {
            value: this.elementRef.nativeElement,
            enumerable: true
        });
        this.elementRef.nativeElement.dispatchEvent(evt);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("blur", ["$event.type", "$event.target.value"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], InputTrimDirective.prototype, "onBlur", null);
    InputTrimDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "input[trim]",
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], InputTrimDirective);
    return InputTrimDirective;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]));



/***/ }),

/***/ "./src/app/widget/directive/out-of-zone.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/widget/directive/out-of-zone.directive.ts ***!
  \***********************************************************/
/*! exports provided: OutOfZoneDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutOfZoneDirective", function() { return OutOfZoneDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OutOfZoneDirective = /** @class */ (function () {
    function OutOfZoneDirective(_ngZone, el) {
        this._ngZone = _ngZone;
        this.el = el;
        this.onDragover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragleave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseenter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseleave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMousedown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDocMousemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMousemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDocKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    OutOfZoneDirective.prototype.ngOnInit = function () {
        var _this = this;
        var handlers = [
            { event: "dragover", handler: this.onDragover },
            { event: "dragleave", handler: this.onDragleave },
            { event: "mouseenter", handler: this.onMouseenter },
            { event: "mouseleave", handler: this.onMouseleave },
            { event: "mousedown", handler: this.onMousedown },
            { event: "mouseup", handler: this.onMouseup },
            { event: "mousemove", handler: this.onMousemove },
            { event: "mouseout", handler: this.onMouseout },
            { event: "mouseover", handler: this.onMouseover },
            { event: "scroll", handler: this.onScroll },
            { event: "keydown", handler: this.onKeydown },
            { event: "click", handler: this.onClick }
        ];
        this._ngZone.runOutsideAngular(function () {
            var nativeElement = _this.el.nativeElement;
            handlers.filter(function (e) { return e.handler.observers.length > 0; }).forEach(function (e) {
                var _handler = function ($event) {
                    e.handler.emit($event);
                };
                nativeElement.addEventListener(e.event, _handler, false);
            });
            if (_this.onDocKeydown.observers.length > 0) {
                _this.docKeydown = function ($event) { return _this.onDocKeydown.emit($event); };
                document.addEventListener("keydown", _this.docKeydown, false);
            }
            if (_this.onDocMousemove.observers.length > 0) {
                _this.docMousemove = function ($event) { return _this.onDocMousemove.emit($event); };
                window.addEventListener("mousemove", _this.docMousemove, false);
            }
        });
    };
    OutOfZoneDirective.prototype.ngOnDestroy = function () {
        if (this.docKeydown) {
            document.removeEventListener("keydown", this.docKeydown);
        }
        if (this.docMousemove) {
            window.removeEventListener("mousemove", this.docMousemove);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OutOfZoneDirective.prototype, "onDragover", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OutOfZoneDirective.prototype, "onDragleave", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OutOfZoneDirective.prototype, "onMouseenter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OutOfZoneDirective.prototype, "onMouseleave", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OutOfZoneDirective.prototype, "onMousedown", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OutOfZoneDirective.prototype, "onMouseup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OutOfZoneDirective.prototype, "onDocMousemove", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OutOfZoneDirective.prototype, "onMousemove", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OutOfZoneDirective.prototype, "onMouseout", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OutOfZoneDirective.prototype, "onMouseover", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OutOfZoneDirective.prototype, "onScroll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OutOfZoneDirective.prototype, "onDocKeydown", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OutOfZoneDirective.prototype, "onKeydown", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OutOfZoneDirective.prototype, "onClick", void 0);
    OutOfZoneDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[outOfZone]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], OutOfZoneDirective);
    return OutOfZoneDirective;
}());



/***/ }),

/***/ "./src/app/widget/directive/resizable-table.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/widget/directive/resizable-table.directive.ts ***!
  \***************************************************************/
/*! exports provided: ResizableTableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizableTableDirective", function() { return ResizableTableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */

var MIN_COL_WIDTH = 40;
var ResizableTableDirective = /** @class */ (function () {
    function ResizableTableDirective(hostRef, renderer) {
        this.hostRef = hostRef;
        this.renderer = renderer;
        this.columnWidths = [];
        this.windowListeners = [];
    }
    ResizableTableDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        var outerDiv = this.renderer.createElement("div");
        var bodyDiv = this.renderer.createElement("div");
        var columnResizeContainer = this.renderer.createElement("div");
        this.renderer.addClass(outerDiv, "resizable-table-container");
        this.renderer.addClass(bodyDiv, "resizable-table-body-container");
        this.renderer.addClass(columnResizeContainer, "column-resize-container");
        this.bodyTable = this.hostRef.nativeElement;
        // create the header table and remove the thead from body table
        this.headerTable = this.renderer.createElement("table");
        this.renderer.setAttribute(this.headerTable, "class", this.bodyTable.className);
        var thead = this.bodyTable.querySelector("thead");
        this.renderer.appendChild(this.headerTable, thead);
        // get the parent and insert the outerDiv before the original table
        var parent = this.bodyTable.parentNode;
        this.renderer.insertBefore(parent, outerDiv, this.bodyTable);
        // create the structure for resizable table
        this.renderer.appendChild(outerDiv, this.headerTable);
        this.renderer.appendChild(outerDiv, bodyDiv);
        this.renderer.appendChild(outerDiv, columnResizeContainer);
        this.renderer.appendChild(bodyDiv, this.bodyTable);
        // compute the dimensions after a tick to allow for the parent to set the styles
        setTimeout(function () {
            // get the cells and get their original width
            var headerCells = _this.headerTable.querySelectorAll("thead > tr:first-of-type > th");
            _this.headerColGroup = _this.renderer.createElement("colgroup");
            for (var i = 0; i < headerCells.length; i++) {
                _this.columnWidths.push(headerCells[i].clientWidth);
                var col = _this.renderer.createElement("col");
                _this.renderer.setStyle(col, "width", _this.columnWidths[i] + "px");
                _this.renderer.appendChild(_this.headerColGroup, col);
            }
            _this.renderer.appendChild(_this.headerTable, _this.headerColGroup);
            _this.bodyColGroup = _this.headerColGroup.cloneNode(true);
            _this.renderer.appendChild(_this.bodyTable, _this.bodyColGroup);
            // set up the resize handles
            _this.resizeHandles = [];
            var _loop_1 = function (i) {
                var resizeHandle = _this.renderer.createElement("div");
                _this.renderer.addClass(resizeHandle, "resize-handle");
                _this.resizeHandles.push(resizeHandle);
                _this.renderer.appendChild(columnResizeContainer, resizeHandle);
                _this.renderer.listen(resizeHandle, "mousedown", function (event) {
                    if (event.button == 0) {
                        _this.startResize(event, i);
                    }
                });
            };
            for (var i = 0; i < _this.columnWidths.length; i++) {
                _loop_1(i);
            }
            // set the height and width
            var tableStyle = window.getComputedStyle(_this.bodyTable);
            var tableHeight;
            if (tableStyle.maxHeight) {
                tableHeight = tableStyle.maxHeight;
            }
            else {
                tableHeight = tableStyle.height;
            }
            if (tableHeight) {
                bodyDiv.style.height = "calc(" + tableHeight + " - " + _this.headerTable.offsetHeight + "px";
            }
            columnResizeContainer.style.height = _this.headerTable.offsetHeight + "px";
            _this.updateResizePositions();
            _this.updateTableWidth();
        });
    };
    ResizableTableDirective.prototype.ngOnDestroy = function () {
        this.clearListeners();
    };
    ResizableTableDirective.prototype.updateResizePositions = function () {
        this.resizePositions = [];
        var width = 0;
        for (var i = 0; i < this.columnWidths.length; i++) {
            width += this.columnWidths[i];
            this.renderer.setStyle(this.resizeHandles[i], "left", width + "px");
            this.resizePositions.push(width);
        }
    };
    ResizableTableDirective.prototype.startResize = function (event, index) {
        var _this = this;
        event.preventDefault();
        this.windowListeners = [
            this.renderer.listen("window", "mousemove", function (e) { return _this.resizeMove(e); }),
            this.renderer.listen("window", "mouseup", function (e) { return _this.resizeEnd(e); })
        ];
        this.resizeIndex = index;
        this.originalColumnWidth = this.columnWidths[index];
        this.originalLeft = this.resizePositions[index];
        this.resizeLeft = this.originalLeft;
        this.pageXOrigin = event.pageX;
    };
    ResizableTableDirective.prototype.resizeMove = function (event) {
        this.resizeLeft = this.originalLeft - this.pageXOrigin + event.pageX;
        var width = Math.max(this.resizeLeft - this.originalLeft + this.originalColumnWidth, MIN_COL_WIDTH);
        this.updateColumnSize(this.resizeIndex, width);
    };
    ResizableTableDirective.prototype.resizeEnd = function (event) {
        this.clearListeners();
        this.resizeLeft = this.originalLeft - this.pageXOrigin + event.pageX;
        var width = Math.max(this.resizeLeft - this.originalLeft + this.originalColumnWidth, MIN_COL_WIDTH);
        this.resizeLeft = undefined;
        this.updateColumnSize(this.resizeIndex, width);
        this.updateResizePositions();
    };
    ResizableTableDirective.prototype.updateColumnSize = function (index, width) {
        this.columnWidths[index] = width;
        this.headerColGroup.childNodes[index].style.width = width + "px";
        this.bodyColGroup.childNodes[index].style.width = width + "px";
        this.updateTableWidth();
    };
    ResizableTableDirective.prototype.clearListeners = function () {
        this.windowListeners.forEach(function (listener) { return listener(); });
        this.windowListeners = [];
    };
    ResizableTableDirective.prototype.updateTableWidth = function () {
        var tableWidth = this.columnWidths.reduce(function (acc, width) { return acc + width; }) - 16;
        this.renderer.setStyle(this.bodyTable, "width", tableWidth + "px");
        this.renderer.setStyle(this.headerTable, "width", tableWidth + "px");
    };
    ResizableTableDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[resizableTable]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], ResizableTableDirective);
    return ResizableTableDirective;
}());



/***/ }),

/***/ "./src/app/widget/directive/selection-box.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/widget/directive/selection-box.directive.ts ***!
  \*************************************************************/
/*! exports provided: SelectionBoxDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionBoxDirective", function() { return SelectionBoxDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_data_rectangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/data/rectangle */ "./src/app/common/data/rectangle.ts");
/* harmony import */ var _common_util_gui_tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/util/gui-tool */ "./src/app/common/util/gui-tool.ts");
/* harmony import */ var _dom_service_dom_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-service/dom.service */ "./src/app/widget/dom-service/dom.service.ts");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var matches = _common_util_gui_tool__WEBPACK_IMPORTED_MODULE_2__["GuiTool"].matches;
var SelectionBoxDirective = /** @class */ (function () {
    function SelectionBoxDirective(zone, hostRef, renderer, domService) {
        this.zone = zone;
        this.hostRef = hostRef;
        this.renderer = renderer;
        this.domService = domService;
        this.selectionBoxClass = "selection-box";
        this.selectionBoxScale = 1;
        this.enableTouch = false;
        this.selectOnMouseMove = false;
        this.onSelectionBox = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelectionPoint = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // renderer window listeners
        this.listeners = [];
    }
    SelectionBoxDirective.prototype.ngOnInit = function () {
        this.selectionBox = this.renderer.createElement("div");
        this.renderer.addClass(this.selectionBox, this.selectionBoxClass);
        this.hideSelectionBox();
        this.renderer.appendChild(this.hostRef.nativeElement, this.selectionBox);
    };
    SelectionBoxDirective.prototype.ngOnDestroy = function () {
        this.removeListeners();
        this.renderer.removeChild(this.hostRef.nativeElement, this.selectionBox);
        this.domService.cancelAnimationFrame();
    };
    SelectionBoxDirective.prototype.mouseDown = function (event) {
        if (_common_util_gui_tool__WEBPACK_IMPORTED_MODULE_2__["GuiTool"].isButton1(event) && (!_common_util_gui_tool__WEBPACK_IMPORTED_MODULE_2__["GuiTool"].isTouch(event) || this.enableTouch) &&
            this.allowedElement(event.target)) {
            var hostElement = this.hostRef.nativeElement;
            var rect = hostElement.getBoundingClientRect();
            this.downX = _common_util_gui_tool__WEBPACK_IMPORTED_MODULE_2__["GuiTool"].clientX(event);
            this.downY = _common_util_gui_tool__WEBPACK_IMPORTED_MODULE_2__["GuiTool"].clientY(event);
            this.initialTop = (this.downY + hostElement.scrollTop - rect.top);
            this.initialLeft = (this.downX + hostElement.scrollLeft - rect.left);
            this.resetDimensions();
            this.updateDimensions();
            this.addListeners(_common_util_gui_tool__WEBPACK_IMPORTED_MODULE_2__["GuiTool"].isTouch(event));
        }
    };
    SelectionBoxDirective.prototype.mouseMove = function (event, rect, scrollLeft, scrollTop) {
        event.preventDefault();
        var clientX = _common_util_gui_tool__WEBPACK_IMPORTED_MODULE_2__["GuiTool"].clientX(event);
        var clientY = _common_util_gui_tool__WEBPACK_IMPORTED_MODULE_2__["GuiTool"].clientY(event);
        var width = clientX + scrollLeft - rect.left - this.initialLeft;
        var height = clientY + scrollTop - rect.top - this.initialTop;
        if (clientX != this.downX || clientY != this.downY) {
            this.width = (Math.abs(width) + 1) / this.selectionBoxScale;
            this.height = (Math.abs(height) + 1) / this.selectionBoxScale;
        }
        this.top = Math.min(height + this.initialTop, this.initialTop) / this.selectionBoxScale;
        this.left = Math.min(width + this.initialLeft, this.initialLeft) / this.selectionBoxScale;
        this.updateDimensions();
        this.showSelectionBox();
        if (this.selectOnMouseMove) {
            this.updateSelection(event, rect);
        }
    };
    SelectionBoxDirective.prototype.updateSelection = function (event, clientRect) {
        var box = new _common_data_rectangle__WEBPACK_IMPORTED_MODULE_1__["Rectangle"](this.left, this.top, this.width, this.height);
        var selectionEvent = Object.assign(event, { box: box, clientRect: clientRect });
        if (!box.isEmpty()) {
            this.onSelectionBox.emit(selectionEvent);
        }
        else {
            this.onSelectionPoint.emit(selectionEvent);
        }
    };
    SelectionBoxDirective.prototype.mouseUp = function (event) {
        var clientRect = this.selectionBox.getBoundingClientRect();
        this.updateSelection(event, clientRect);
        this.hideSelectionBox();
        this.removeListeners();
    };
    SelectionBoxDirective.prototype.resetDimensions = function () {
        this.top = this.initialTop / this.selectionBoxScale;
        this.left = this.initialLeft / this.selectionBoxScale;
        this.width = 0;
        this.height = 0;
    };
    SelectionBoxDirective.prototype.showSelectionBox = function () {
        this.renderer.setStyle(this.selectionBox, "display", "block");
    };
    SelectionBoxDirective.prototype.hideSelectionBox = function () {
        var _this = this;
        this.domService.requestWrite(function () {
            _this.renderer.setStyle(_this.selectionBox, "display", "none");
        });
    };
    SelectionBoxDirective.prototype.updateDimensions = function () {
        this.renderer.setStyle(this.selectionBox, "top", this.top + "px");
        this.renderer.setStyle(this.selectionBox, "left", this.left + "px");
        this.renderer.setStyle(this.selectionBox, "width", this.width + "px");
        this.renderer.setStyle(this.selectionBox, "height", this.height + "px");
    };
    SelectionBoxDirective.prototype.allowedElement = function (element) {
        if (!element) {
            return false;
        }
        do {
            if (element.draggable || matches(element, this.selectionBoxBannedSelector)) {
                return false;
            }
            if (element === this.hostRef.nativeElement) {
                return true;
            }
            element = element.parentElement ? element.parentElement : element;
        } while (element.parentElement != null);
        return true;
    };
    SelectionBoxDirective.prototype.addListeners = function (touch) {
        var _this = this;
        if (touch) {
            this.zone.runOutsideAngular(function () {
                _this.listeners.push(_this.renderer.listen("window", "touchmove", function (event) {
                    _this.domService.requestRead(function () {
                        var hostElement = _this.hostRef.nativeElement;
                        var rect = hostElement.getBoundingClientRect();
                        _this.mouseMove(event, rect, hostElement.scrollLeft, hostElement.scrollTop);
                    });
                }));
            });
            this.listeners.push(this.renderer.listen("window", "touchend", function (event) { return _this.mouseUp(event); }));
        }
        else {
            this.zone.runOutsideAngular(function () {
                _this.listeners.push(_this.renderer.listen("window", "mousemove", function (event) {
                    _this.domService.requestRead(function () {
                        var hostElement = _this.hostRef.nativeElement;
                        var rect = hostElement.getBoundingClientRect();
                        _this.mouseMove(event, rect, hostElement.scrollLeft, hostElement.scrollTop);
                    });
                }));
            });
            this.listeners.push(this.renderer.listen("window", "mouseup", function (event) { return _this.mouseUp(event); }));
        }
    };
    SelectionBoxDirective.prototype.removeListeners = function () {
        this.listeners.forEach(function (listener) { return listener(); });
        this.listeners = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SelectionBoxDirective.prototype, "selectionBoxClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SelectionBoxDirective.prototype, "selectionBoxBannedSelector", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SelectionBoxDirective.prototype, "selectionBoxScale", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SelectionBoxDirective.prototype, "enableTouch", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SelectionBoxDirective.prototype, "selectOnMouseMove", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SelectionBoxDirective.prototype, "onSelectionBox", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SelectionBoxDirective.prototype, "onSelectionPoint", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("touchstart", ["$event"]),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("mousedown", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SelectionBoxDirective.prototype, "mouseDown", null);
    SelectionBoxDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[selectionBox]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _dom_service_dom_service__WEBPACK_IMPORTED_MODULE_3__["DomService"]])
    ], SelectionBoxDirective);
    return SelectionBoxDirective;
}());



/***/ }),

/***/ "./src/app/widget/directive/sort-column.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/widget/directive/sort-column.directive.ts ***!
  \***********************************************************/
/*! exports provided: SortColumnDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortColumnDirective", function() { return SortColumnDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortColumnDirective = /** @class */ (function () {
    function SortColumnDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.sortTypeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleSort = true;
    }
    SortColumnDirective.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty("sortType") && this.sortType != this.sortKey) {
            this.hideSortIcon();
        }
        else if (changes["data"]) {
            if (this.sortType == this.sortKey) {
                this.sortArray();
            }
        }
    };
    SortColumnDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.renderer.listen(this.el.nativeElement, "click", function () {
            if (_this.data && _this.sortKey) {
                _this.toggleSort = !_this.toggleSort;
                _this.sortArray();
            }
        });
    };
    SortColumnDirective.prototype.sortArray = function () {
        var _this = this;
        var tempArray = this.data;
        tempArray.sort(function (a, b) {
            var str1 = a[_this.sortKey];
            var str2 = b[_this.sortKey];
            str1 = str1 ? (str1 + "").toLowerCase() : "";
            str2 = str2 ? (str2 + "").toLowerCase() : "";
            if (_this.toggleSort) {
                if (str1 < str2) {
                    return -1;
                }
                if (str1 > str2) {
                    return 1;
                }
            }
            else {
                if (str1 > str2) {
                    return -1;
                }
                if (str1 < str2) {
                    return 1;
                }
            }
            return _this.toggleSort ?
                a[_this.sortKey] > b[_this.sortKey] ? 1 : -1 :
                a[_this.sortKey] > b[_this.sortKey] ? -1 : 1;
        });
        this.updateSortIcon();
        this.sortTypeChanged.emit(this.sortKey);
        return tempArray;
    };
    SortColumnDirective.prototype.updateSortIcon = function () {
        var element = this.el.nativeElement;
        var iconElement = element.querySelector(".sort-column-sort-icon");
        if (iconElement) {
            this.renderer.removeClass(iconElement, this.toggleSort ? "sort-descending-icon" : "sort-ascending-icon");
            this.renderer.addClass(iconElement, this.toggleSort ? "sort-ascending-icon" : "sort-descending-icon");
            this.renderer.setStyle(iconElement, "display", "inline-block");
        }
        else {
            iconElement = this.renderer.createElement("i");
            this.renderer.addClass(iconElement, "sort-column-sort-icon");
            this.renderer.addClass(iconElement, this.toggleSort ? "sort-ascending-icon" : "sort-descending-icon");
            this.renderer.setStyle(iconElement, "display", "inline-block");
            this.renderer.setStyle(iconElement, "vertical-align", "middle");
            this.renderer.appendChild(element, iconElement);
        }
    };
    SortColumnDirective.prototype.hideSortIcon = function () {
        var element = this.el.nativeElement;
        var iconElement = element.querySelector(".sort-column-sort-icon");
        if (iconElement) {
            this.renderer.setStyle(iconElement, "display", "none");
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SortColumnDirective.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SortColumnDirective.prototype, "sortKey", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SortColumnDirective.prototype, "sortType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SortColumnDirective.prototype, "sortTypeChanged", void 0);
    SortColumnDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[sortColumn]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], SortColumnDirective);
    return SortColumnDirective;
}());



/***/ }),

/***/ "./src/app/widget/directive/tooltip-if.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/widget/directive/tooltip-if.directive.ts ***!
  \**********************************************************/
/*! exports provided: TooltipIfDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipIfDirective", function() { return TooltipIfDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dom_service_dom_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-service/dom.service */ "./src/app/widget/dom-service/dom.service.ts");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TooltipIfDirective = /** @class */ (function () {
    function TooltipIfDirective(host, zone, domService) {
        this.host = host;
        this.zone = zone;
        this.domService = domService;
        this.oneeded = null;
    }
    TooltipIfDirective.prototype.ngAfterViewChecked = function () {
        var _this = this;
        this.domService.requestRead(function () {
            var elem = _this.host.nativeElement;
            var needed = elem.scrollWidth > elem.clientWidth ||
                elem.scrollHeight > elem.clientHeight * 1.5;
            if (_this.oneeded != needed) {
                var hasTitle_1 = elem.hasAttribute("title");
                _this.domService.requestWrite(function () {
                    _this.oneeded = needed;
                    if (needed && !hasTitle_1) {
                        var title = elem.textContent ? elem.textContent : elem.value;
                        if (title && title.trim()) {
                            elem.setAttribute("title", title.trim());
                        }
                        else {
                            elem.removeAttribute("title");
                        }
                    }
                    else if (!needed && hasTitle_1) {
                        elem.removeAttribute("title");
                    }
                });
            }
        });
    };
    TooltipIfDirective.prototype.ngOnDestroy = function () {
        this.domService.cancelAnimationFrame();
    };
    TooltipIfDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[tooltipIf]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _dom_service_dom_service__WEBPACK_IMPORTED_MODULE_1__["DomService"]])
    ], TooltipIfDirective);
    return TooltipIfDirective;
}());



/***/ }),

/***/ "./src/app/widget/directive/touch-scroll.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/widget/directive/touch-scroll.directive.ts ***!
  \************************************************************/
/*! exports provided: TouchScrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchScrollDirective", function() { return TouchScrollDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TouchScrollDirective = /** @class */ (function () {
    function TouchScrollDirective(host) {
        var _this = this;
        this.host = host;
        this.vScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.touchmove = function (event) { return _this.touchMove(event); };
        this.touchend = function (event) { return _this.touchEnd(event); };
    }
    TouchScrollDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        var elem = this.host.nativeElement;
        elem.addEventListener("touchstart", function (event) { return _this.touchStart(event); }, true);
    };
    TouchScrollDirective.prototype.touchStart = function (event) {
        var elem = this.host.nativeElement;
        this.downX = event.touches[0].pageX;
        this.downY = event.touches[0].pageY;
        elem.addEventListener("touchmove", this.touchmove, true);
        elem.addEventListener("touchend", this.touchend, true);
    };
    TouchScrollDirective.prototype.touchMove = function (event) {
        event.preventDefault();
        var elem = this.host.nativeElement;
        var deltaX = event.touches[0].pageX - this.downX;
        var deltaY = event.touches[0].pageY - this.downY;
        this.downX = event.touches[0].pageX;
        this.downY = event.touches[0].pageY;
        this.vScroll.emit(deltaY);
        this.hScroll.emit(deltaX);
    };
    TouchScrollDirective.prototype.touchEnd = function (event) {
        var elem = this.host.nativeElement;
        elem.removeEventListener("touchmove", this.touchmove, true);
        elem.removeEventListener("touchend", this.touchend, true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TouchScrollDirective.prototype, "vScroll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TouchScrollDirective.prototype, "hScroll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TouchScrollDirective.prototype, "scrollEnd", void 0);
    TouchScrollDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[touchScroll]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], TouchScrollDirective);
    return TouchScrollDirective;
}());



/***/ }),

/***/ "./src/app/widget/dom-service/animation-frame-batcher.ts":
/*!***************************************************************!*\
  !*** ./src/app/widget/dom-service/animation-frame-batcher.ts ***!
  \***************************************************************/
/*! exports provided: AnimationFrameBatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationFrameBatcher", function() { return AnimationFrameBatcher; });
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var AnimationFrameBatcher = /** @class */ (function () {
    function AnimationFrameBatcher() {
        this.reads = [];
        this.writes = [];
        this.rafScheduled = false;
        this.animationID = -1;
    }
    AnimationFrameBatcher.prototype.requestRead = function (cb) {
        this.reads.push(cb);
        return this.scheduleAnimationFrame();
    };
    AnimationFrameBatcher.prototype.requestWrite = function (cb) {
        this.writes.push(cb);
        return this.scheduleAnimationFrame();
    };
    AnimationFrameBatcher.prototype.cancelAnimationFrame = function () {
        cancelAnimationFrame(this.animationID);
    };
    AnimationFrameBatcher.prototype.scheduleAnimationFrame = function () {
        var _this = this;
        if (!this.rafScheduled) {
            try {
                cancelAnimationFrame(this.animationID);
                this.animationID = requestAnimationFrame(function () {
                    cancelAnimationFrame(_this.animationID);
                    _this.flush();
                });
                this.rafScheduled = true;
            }
            catch (e) {
                this.rafScheduled = false;
                throw e;
            }
        }
        return this.animationID;
    };
    AnimationFrameBatcher.prototype.flush = function () {
        this.reads.forEach(function (cb) { return cb(); });
        this.writes.forEach(function (cb) { return cb(); });
        this.reads = [];
        this.writes = [];
        this.rafScheduled = false;
        this.animationID = -1;
    };
    return AnimationFrameBatcher;
}());



/***/ }),

/***/ "./src/app/widget/dom-service/dom.service.ts":
/*!***************************************************!*\
  !*** ./src/app/widget/dom-service/dom.service.ts ***!
  \***************************************************/
/*! exports provided: DomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomService", function() { return DomService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animation_frame_batcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation-frame-batcher */ "./src/app/widget/dom-service/animation-frame-batcher.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */


var DomService = /** @class */ (function () {
    function DomService(zone) {
        this.zone = zone;
        this.batcher = new _animation_frame_batcher__WEBPACK_IMPORTED_MODULE_1__["AnimationFrameBatcher"]();
    }
    DomService.prototype.requestRead = function (cb) {
        var _this = this;
        return this.zone.runOutsideAngular(function () { return _this.batcher.requestRead(cb); });
    };
    DomService.prototype.requestWrite = function (cb) {
        var _this = this;
        return this.zone.runOutsideAngular(function () { return _this.batcher.requestWrite(cb); });
    };
    DomService.prototype.cancelAnimationFrame = function () {
        this.batcher.cancelAnimationFrame();
        this.batcher = new _animation_frame_batcher__WEBPACK_IMPORTED_MODULE_1__["AnimationFrameBatcher"]();
    };
    DomService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], DomService);
    return DomService;
}());



/***/ }),

/***/ "./src/app/widget/dropdown-view/dropdown-view.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/widget/dropdown-view/dropdown-view.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group w-100\">\r\n  <button id=\"split-button\" class=\"dropdown-button no-caret form-control\" type=\"button\"\r\n          [disabled]=\"disabled\" [class.disabled]=\"disabled\" [fixedDropdown]=\"dropdownMenu\" [autoClose]=\"isOk\"\r\n          (openChange)=\"toggled($event)\">\r\n    <span>{{label ? label : \"&nbsp;\"}}</span>\r\n    <span class=\"caret-down-icon dropdown-caret\"></span>\r\n  </button>\r\n  <ng-template #dropdownMenu>\r\n    <div class=\"dropdown-pane\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/widget/dropdown-view/dropdown-view.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/widget/dropdown-view/dropdown-view.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * Copyright (c) 2017, InetSoft Technology Corp, All Rights Reserved.\n *\n * The software and information contained herein are copyrighted and\n * proprietary to InetSoft Technology Corp. This software is furnished\n * pursuant to a written license agreement and may be used, copied,\n * transmitted, and stored only in accordance with the terms of such\n * license and with the inclusion of the above copyright notice. Please\n * refer to the file \"COPYRIGHT\" for further copyright and licensing\n * information. This software and information or any other copies\n * thereof may not be provided or otherwise made available to any other\n * person.\n */\nlabel {\n  font-weight: normal;\n  white-space: nowrap;\n  overflow: hidden; }\n.dropdown-caret {\n  position: absolute;\n  right: 0.5em; }\n.dropdown-button {\n  width: 100%;\n  text-align: left; }\n"

/***/ }),

/***/ "./src/app/widget/dropdown-view/dropdown-view.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/widget/dropdown-view/dropdown-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: DropdownView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownView", function() { return DropdownView; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directive_fixed_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directive/fixed-dropdown.directive */ "./src/app/widget/directive/fixed-dropdown.directive.ts");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropdownView = /** @class */ (function () {
    function DropdownView(elem, renderer) {
        this.elem = elem;
        this.renderer = renderer;
        this.isOk = false;
        this.disabled = false;
        this.onToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DropdownView.prototype.close = function () {
        this.dropdown.close();
    };
    DropdownView.prototype.toggled = function (open) {
        this.onToggle.emit(open.toString());
        if (!open) {
            this.closed.emit(true);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DropdownView.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DropdownView.prototype, "isOk", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DropdownView.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DropdownView.prototype, "onToggle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DropdownView.prototype, "closed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_directive_fixed_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["FixedDropdownDirective"]),
        __metadata("design:type", _directive_fixed_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["FixedDropdownDirective"])
    ], DropdownView.prototype, "dropdown", void 0);
    DropdownView = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "dropdown-view",
            template: __webpack_require__(/*! ./dropdown-view.component.html */ "./src/app/widget/dropdown-view/dropdown-view.component.html"),
            styles: [__webpack_require__(/*! ./dropdown-view.component.scss */ "./src/app/widget/dropdown-view/dropdown-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], DropdownView);
    return DropdownView;
}());



/***/ }),

/***/ "./src/app/widget/error/error.component.html":
/*!***************************************************!*\
  !*** ./src/app/widget/error/error.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-body\">\n  {{errorMsg}}\n</div>\n"

/***/ }),

/***/ "./src/app/widget/error/error.component.scss":
/*!***************************************************!*\
  !*** ./src/app/widget/error/error.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-body {\n  text-align: center;\n  font-size: larger;\n  color: red; }\n"

/***/ }),

/***/ "./src/app/widget/error/error.component.ts":
/*!*************************************************!*\
  !*** ./src/app/widget/error/error.component.ts ***!
  \*************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
        this.errorMsg = "Sorry, The url is not exist...";
    }
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/widget/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.scss */ "./src/app/widget/error/error.component.scss")]
        })
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/widget/expand-string/expand-string.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/widget/expand-string/expand-string.directive.ts ***!
  \*****************************************************************/
/*! exports provided: ExpandStringDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandStringDirective", function() { return ExpandStringDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpandStringDirective = /** @class */ (function () {
    function ExpandStringDirective(host) {
        this.host = host;
        this.values = [];
        this.attribute = null;
        this.template = null;
    }
    ExpandStringDirective_1 = ExpandStringDirective;
    Object.defineProperty(ExpandStringDirective.prototype, "wExpandString", {
        set: function (values) {
            this.values = values;
            this.expandString0();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpandStringDirective.prototype, "wExpandStringAttr", {
        set: function (attribute) {
            this.attribute = attribute;
            this.expandString0();
        },
        enumerable: true,
        configurable: true
    });
    ExpandStringDirective.prototype.ngAfterViewInit = function () {
        if (this.host.nativeElement) {
            var element = this.host.nativeElement;
            if (this.attribute) {
                this.template = element.getAttribute(this.attribute);
            }
            else {
                this.template = "";
                while (element.firstChild) {
                    if (element.firstChild.nodeType === Node.TEXT_NODE) {
                        this.template += element.firstChild.nodeValue;
                    }
                    element.removeChild(element.firstChild);
                }
            }
        }
        this.expandString0();
    };
    ExpandStringDirective.prototype.expandString0 = function () {
        var content = ExpandStringDirective_1.expandString(this.template, this.values);
        if (content && this.host.nativeElement) {
            var element = this.host.nativeElement;
            if (this.attribute) {
                element.setAttribute(this.attribute, content);
            }
            else {
                while (element.firstChild) {
                    element.removeChild(element.firstChild);
                }
                element.appendChild(element.ownerDocument.createTextNode(content));
            }
        }
    };
    ExpandStringDirective.expandString = function (template, values) {
        var content = "";
        if (template) {
            var re = /[^%]?%s(\$\d+)?/g;
            var ch = 0;
            var index = 0;
            var match = void 0;
            while ((match = re.exec(template)) != null) {
                if (match[0][0] != "%") {
                    content += template.substring(ch, re.lastIndex - match[0].length + 1);
                }
                else {
                    content += template.substring(ch, re.lastIndex - match[0].length);
                }
                var value = void 0;
                if (match[1]) {
                    value = values[parseInt(match[1].substring(1), 10)];
                }
                else {
                    value = values[index++];
                }
                content += value;
                ch = re.lastIndex;
            }
            if (ch < template.length) {
                content += template.substring(ch);
            }
        }
        return content;
    };
    var ExpandStringDirective_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], ExpandStringDirective.prototype, "wExpandString", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ExpandStringDirective.prototype, "wExpandStringAttr", null);
    ExpandStringDirective = ExpandStringDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[wExpandString]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ExpandStringDirective);
    return ExpandStringDirective;
}());



/***/ }),

/***/ "./src/app/widget/fixed-dropdown/actions-contextmenu-anchor.directive.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/widget/fixed-dropdown/actions-contextmenu-anchor.directive.ts ***!
  \*******************************************************************************/
/*! exports provided: ActionsContextmenuAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsContextmenuAnchorDirective", function() { return ActionsContextmenuAnchorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _common_data_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/data/point */ "./src/app/common/data/point.ts");
/* harmony import */ var _actions_contextmenu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions-contextmenu.component */ "./src/app/widget/fixed-dropdown/actions-contextmenu.component.ts");
/* harmony import */ var _fixed_dropdown_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fixed-dropdown.service */ "./src/app/widget/fixed-dropdown/fixed-dropdown.service.ts");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActionsContextmenuAnchorDirective = /** @class */ (function () {
    function ActionsContextmenuAnchorDirective(dropdownService, renderer, element) {
        this.dropdownService = dropdownService;
        this.renderer = renderer;
        this.element = element;
        this.position = new _common_data_point__WEBPACK_IMPORTED_MODULE_2__["Point"]();
        this.onContextmenuOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onContextmenuClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dropdownSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this._enabled = true;
        this.listener = null;
    }
    Object.defineProperty(ActionsContextmenuAnchorDirective.prototype, "actions", {
        get: function () {
            return this._actions;
        },
        set: function (actions) {
            this._actions = actions;
            if (this.dropdownRef != null && !this.dropdownRef.closed) {
                var instance = this.dropdownRef.componentInstance;
                instance.actions = actions;
                instance.changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionsContextmenuAnchorDirective.prototype, "contextmenuEnabled", {
        get: function () {
            return this._enabled;
        },
        set: function (value) {
            if (this._enabled && !value) {
                this.removeListener();
            }
            else if (!this._enabled && value) {
                this.addListener();
            }
            this._enabled = value;
        },
        enumerable: true,
        configurable: true
    });
    ActionsContextmenuAnchorDirective.prototype.ngOnInit = function () {
        if (this._enabled) {
            this.addListener();
        }
        else {
            this.removeListener();
        }
    };
    ActionsContextmenuAnchorDirective.prototype.ngOnDestroy = function () {
        this.close();
        this.removeListener();
        if (this.dropdownSubscription) {
            this.dropdownSubscription.unsubscribe();
            this.dropdownSubscription = null;
        }
        if (this.childClickedSubscription) {
            this.childClickedSubscription.unsubscribe();
            this.childClickedSubscription = null;
        }
    };
    ActionsContextmenuAnchorDirective.prototype.onContextmenu = function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        var options = {
            position: { x: e.clientX, y: e.clientY },
            contextmenu: true,
            closeOnWindowResize: true,
        };
        this.position.x = options.position.x;
        this.position.y = options.position.y;
        this.dropdownRef = this.dropdownService.open(_actions_contextmenu_component__WEBPACK_IMPORTED_MODULE_3__["ActionsContextmenuComponent"], options);
        var instance = this.dropdownRef.componentInstance;
        instance.sourceEvent = e;
        instance.actions = this.actions;
        this.dropdownSubscription.add(this.dropdownRef.closeEvent.subscribe(function (evt) { return _this.onContextmenuClosed.emit(evt); }));
        // event on clicking menu item
        this.dropdownSubscription.add(this.dropdownRef.componentInstance.onClose.subscribe(function (evt) { return _this.onContextmenuClosed.emit(evt); }));
        this.childClickedSubscription = instance.onClose.subscribe(function (event) { return _this.close(); });
        this.onContextmenuOpened.emit(true);
    };
    ActionsContextmenuAnchorDirective.prototype.close = function () {
        if (!!this.dropdownRef) {
            this.dropdownRef.close();
            this.dropdownRef = null;
        }
    };
    ActionsContextmenuAnchorDirective.prototype.addListener = function () {
        var _this = this;
        if (!this.listener && this.element.nativeElement) {
            this.listener = this.renderer.listen(this.element.nativeElement, "contextmenu", function (event) { return _this.onContextmenu(event); });
        }
    };
    ActionsContextmenuAnchorDirective.prototype.removeListener = function () {
        if (this.listener) {
            this.listener();
            this.listener = null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_data_point__WEBPACK_IMPORTED_MODULE_2__["Point"])
    ], ActionsContextmenuAnchorDirective.prototype, "position", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ActionsContextmenuAnchorDirective.prototype, "onContextmenuOpened", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ActionsContextmenuAnchorDirective.prototype, "onContextmenuClosed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], ActionsContextmenuAnchorDirective.prototype, "actions", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ActionsContextmenuAnchorDirective.prototype, "contextmenuEnabled", null);
    ActionsContextmenuAnchorDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[actionsContextmenuAnchor]"
        }),
        __metadata("design:paramtypes", [_fixed_dropdown_service__WEBPACK_IMPORTED_MODULE_4__["FixedDropdownService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ActionsContextmenuAnchorDirective);
    return ActionsContextmenuAnchorDirective;
}());



/***/ }),

/***/ "./src/app/widget/fixed-dropdown/actions-contextmenu.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/widget/fixed-dropdown/actions-contextmenu.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"visibleActions.length > 0\"\r\n     class=\"dropdown-menu show contextmenu-container\">\r\n  <ng-template ngFor let-group [ngForOf]=\"visibleActions\" let-_first=\"first\" let-i=\"index\">\r\n    <div class=\"dropdown-divider\" *ngIf=\"!_first\"></div>\r\n    <ng-template ngFor let-action [ngForOf]=\"group.actions\" let-j=\"index\">\r\n      <a class=\"dropdown-item\" *ngIf=\"action.visible() && action.action\"\r\n         [attr.data-menu-id]=\"action.id()\"\r\n         [class.disable-link]=\"!action.enabled()\"\r\n         [class.selected]=\"isFocused(i, j)\"\r\n         [ngClass]=\"action.classes && action.classes()\"\r\n         [class.has-child-item]=\"action.childAction\"\r\n         (click)=\"onClick(action)\"\r\n         (mouseover)=\"openChild($event, action)\">\r\n        <span class=\"item-label\" [innerHTML]=\"action.label()\"></span>\r\n        <span class=\"bare-arrow-right-icon\" *ngIf=\"action.childAction\"></span>\r\n      </a>\r\n      <a class=\"dropdown-item\" *ngIf=\"action.visible() && action.link\"\r\n         [attr.data-menu-id]=\"action.id()\"\r\n         [class.disable-link]=\"!action.enabled()\"\r\n         [class.selected]=\"isFocused(i, j)\"\r\n         [ngClass]=\"action.classes && action.classes()\"\r\n         [innerHTML]=\"action.label()\"\r\n         [href]=\"action.link()\" [target]=\"forceTab ? '_blank' : action.target()\"></a>\r\n    </ng-template>\r\n  </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/widget/fixed-dropdown/actions-contextmenu.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/widget/fixed-dropdown/actions-contextmenu.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * Copyright (c) 2017, InetSoft Technology Corp, All Rights Reserved.\n *\n * The software and information contained herein are copyrighted and\n * proprietary to InetSoft Technology Corp. This software is furnished\n * pursuant to a written license agreement and may be used, copied,\n * transmitted, and stored only in accordance with the terms of such\n * license and with the inclusion of the above copyright notice. Please\n * refer to the file \"COPYRIGHT\" for further copyright and licensing\n * information. This software and information or any other copies\n * thereof may not be provided or otherwise made available to any other\n * person.\n */\n.dropdown-menu.show {\n  position: relative; }\n.has-child-item {\n  display: flex;\n  align-items: center;\n  font-size: inherit; }\nspan.item-label {\n  flex-grow: 100; }\nspan.bare-arrow-right-icon {\n  font-size: unset;\n  flex-grow: 0; }\n.contextmenu-container .bare-arrow-right-icon::before {\n  float: right; }\n"

/***/ }),

/***/ "./src/app/widget/fixed-dropdown/actions-contextmenu.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/widget/fixed-dropdown/actions-contextmenu.component.ts ***!
  \************************************************************************/
/*! exports provided: ActionsContextmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsContextmenuComponent", function() { return ActionsContextmenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fixed_dropdown_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fixed-dropdown.service */ "./src/app/widget/fixed-dropdown/fixed-dropdown.service.ts");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ActionsContextmenuComponent = /** @class */ (function () {
    function ActionsContextmenuComponent(changeDetectorRef, dropdownService) {
        this.changeDetectorRef = changeDetectorRef;
        this.dropdownService = dropdownService;
        this.forceTab = false;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.visibleActions = [];
        this.focusedGroup = -1;
        this.focusedAction = -1;
    }
    ActionsContextmenuComponent_1 = ActionsContextmenuComponent;
    Object.defineProperty(ActionsContextmenuComponent.prototype, "focused", {
        set: function (value) {
            // When this component is created dynamically,
            // need to manually mark for change detection.
            this.changeDetectorRef.markForCheck();
            this.focusedGroup = value.group;
            this.focusedAction = value.action;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionsContextmenuComponent.prototype, "actions", {
        get: function () {
            return this._actions;
        },
        set: function (actions) {
            this._actions = actions;
            if (actions != null) {
                this.visibleActions = actions.filter(function (group) { return group && group.visible; });
            }
            else {
                this.visibleActions = [];
            }
        },
        enumerable: true,
        configurable: true
    });
    ActionsContextmenuComponent.prototype.ngOnDestroy = function () {
        if (this.childSubscription) {
            this.childSubscription.unsubscribe();
            this.childSubscription = null;
        }
    };
    ActionsContextmenuComponent.prototype.onClick = function (action) {
        action.action(this.sourceEvent);
        this.onClose.emit();
    };
    /**
     * Check if the action should be focused on.
     */
    ActionsContextmenuComponent.prototype.isFocused = function (group, action) {
        return group == this.focusedGroup && action == this.focusedAction;
    };
    ActionsContextmenuComponent.prototype.openChild = function (e, action) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        var hasChild = action.childAction;
        if (this.dropdownRef) {
            this.closeDescendants(this.instance);
        }
        if (hasChild) {
            var elem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"](e.target);
            var top_1 = this.getElementAbsoluteTop(elem);
            var left = this.getElementAbsoluteLeft(elem);
            var options = {
                position: { x: left, y: top_1 },
                contextmenu: true,
                closeOnWindowResize: true,
            };
            if (!this.dropdownRef && !this.instance) {
                this.dropdownRef = this.dropdownService.open(ActionsContextmenuComponent_1, options);
                this.instance = this.dropdownRef.componentInstance;
                this.instance.sourceEvent = e;
                this.instance.actions = action.childAction();
                this.childSubscription = this.instance.onClose.subscribe(function (event) { return _this.closeAll(); });
            }
        }
    };
    ActionsContextmenuComponent.prototype.closeSelf = function () {
        this.onClose.emit();
    };
    ActionsContextmenuComponent.prototype.getElementAbsoluteTop = function (elem) {
        var nativeElement = elem.nativeElement;
        var nativeElementC = nativeElement;
        var top = 0;
        while (nativeElementC) {
            top += nativeElementC.offsetTop;
            nativeElementC = nativeElementC.offsetParent;
        }
        return top;
    };
    ActionsContextmenuComponent.prototype.getElementAbsoluteLeft = function (elem) {
        var nativeElement = elem.nativeElement;
        var nativeElementC = nativeElement;
        var width = nativeElement.offsetWidth;
        var left = 0;
        while (nativeElementC) {
            left += nativeElementC.offsetLeft;
            nativeElementC = nativeElementC.offsetParent;
        }
        return left += width;
    };
    ActionsContextmenuComponent.prototype.closeChild = function () {
        if (this.dropdownRef) {
            this.dropdownRef.close();
            this.dropdownRef = null;
            this.instance = null;
        }
    };
    ActionsContextmenuComponent.prototype.closeAll = function () {
        this.closeChild();
        this.onClose.emit();
    };
    ActionsContextmenuComponent.prototype.closeDescendants = function (context) {
        while (context) {
            context.closeChild();
            context = context.instance;
        }
        this.closeChild();
    };
    var ActionsContextmenuComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActionsContextmenuComponent.prototype, "sourceEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ActionsContextmenuComponent.prototype, "forceTab", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ActionsContextmenuComponent.prototype, "focused", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ActionsContextmenuComponent.prototype, "onClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], ActionsContextmenuComponent.prototype, "actions", null);
    ActionsContextmenuComponent = ActionsContextmenuComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "actions-contextmenu",
            template: __webpack_require__(/*! ./actions-contextmenu.component.html */ "./src/app/widget/fixed-dropdown/actions-contextmenu.component.html"),
            styles: [__webpack_require__(/*! ./actions-contextmenu.component.scss */ "./src/app/widget/fixed-dropdown/actions-contextmenu.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _fixed_dropdown_service__WEBPACK_IMPORTED_MODULE_1__["FixedDropdownService"]; }))),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _fixed_dropdown_service__WEBPACK_IMPORTED_MODULE_1__["FixedDropdownService"]])
    ], ActionsContextmenuComponent);
    return ActionsContextmenuComponent;
}());



/***/ }),

/***/ "./src/app/widget/fixed-dropdown/contextmenu-dropdown-anchor.directive.ts":
/*!********************************************************************************!*\
  !*** ./src/app/widget/fixed-dropdown/contextmenu-dropdown-anchor.directive.ts ***!
  \********************************************************************************/
/*! exports provided: ContextmenuDropdownAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextmenuDropdownAnchorDirective", function() { return ContextmenuDropdownAnchorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fixed_dropdown_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fixed-dropdown.service */ "./src/app/widget/fixed-dropdown/fixed-dropdown.service.ts");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContextmenuDropdownAnchorDirective = /** @class */ (function () {
    function ContextmenuDropdownAnchorDirective(dropdownService) {
        this.dropdownService = dropdownService;
    }
    ContextmenuDropdownAnchorDirective.prototype.onContextmenu = function (e) {
        e.preventDefault();
        e.stopPropagation();
        var options = {
            position: { x: e.clientY, y: e.clientY },
            contextmenu: true
        };
        this.dropdownRef = this.dropdownService.open(this.contextmenuRef, options);
    };
    ContextmenuDropdownAnchorDirective.prototype.close = function () {
        if (!!this.dropdownRef) {
            this.dropdownRef.close();
            this.dropdownRef = null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ContextmenuDropdownAnchorDirective.prototype, "contextmenuRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("contextmenu", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], ContextmenuDropdownAnchorDirective.prototype, "onContextmenu", null);
    ContextmenuDropdownAnchorDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[contextmenuDropdownAnchor]"
        }),
        __metadata("design:paramtypes", [_fixed_dropdown_service__WEBPACK_IMPORTED_MODULE_1__["FixedDropdownService"]])
    ], ContextmenuDropdownAnchorDirective);
    return ContextmenuDropdownAnchorDirective;
}());



/***/ }),

/***/ "./src/app/widget/fixed-dropdown/dropdown-stack.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/widget/fixed-dropdown/dropdown-stack.service.ts ***!
  \*****************************************************************/
/*! exports provided: DropdownStackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownStackService", function() { return DropdownStackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Tracks dropdown stack. Separate from FixedDropdownService to avoid recursive dependency.
 */
var DropdownStackService = /** @class */ (function () {
    function DropdownStackService() {
        this.dropdowns = [];
    }
    DropdownStackService.prototype.push = function (dropdown) {
        this.dropdowns.push(dropdown);
    };
    DropdownStackService.prototype.pop = function (dropdown) {
        if (this.isCurrent(dropdown)) {
            this.dropdowns.pop();
        }
        else {
            // this shouldn't happen
            console.log("Pop dropdown is not on top, ignored!");
        }
    };
    // check if the dropdown is on top
    DropdownStackService.prototype.isCurrent = function (dropdown) {
        return this.dropdowns[this.dropdowns.length - 1] == dropdown;
    };
    DropdownStackService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DropdownStackService);
    return DropdownStackService;
}());



/***/ }),

/***/ "./src/app/widget/fixed-dropdown/fixed-dropdown-contextmenu.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/widget/fixed-dropdown/fixed-dropdown-contextmenu.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "./src/app/widget/fixed-dropdown/fixed-dropdown-contextmenu.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/widget/fixed-dropdown/fixed-dropdown-contextmenu.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FixedDropdownContextmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedDropdownContextmenuComponent", function() { return FixedDropdownContextmenuComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fixed_dropdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fixed-dropdown.component */ "./src/app/widget/fixed-dropdown/fixed-dropdown.component.ts");
/* harmony import */ var _dropdown_stack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown-stack.service */ "./src/app/widget/fixed-dropdown/dropdown-stack.service.ts");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var FixedDropdownContextmenuComponent = /** @class */ (function (_super) {
    __extends(FixedDropdownContextmenuComponent, _super);
    function FixedDropdownContextmenuComponent(hostRef, renderer, dropdownService, document, changeDetectorRef) {
        var _this = _super.call(this, hostRef, renderer, document, dropdownService) || this;
        _this.hostRef = hostRef;
        _this.renderer = renderer;
        _this.dropdownService = dropdownService;
        _this.document = document;
        _this.changeDetectorRef = changeDetectorRef;
        _this.contextmenuFn = function (e) { return _this.closeContextmenuEvent(e); };
        _this.scrollFn = function (e) {
            if (e.detail) {
                _this.closeContextmenuEvent(e);
            }
        };
        return _this;
    }
    FixedDropdownContextmenuComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.document.addEventListener("contextmenu", this.contextmenuFn, true);
        this.document.addEventListener("touchstart", this.contextmenuFn, true);
        this.document.addEventListener("scroll", this.scrollFn, true);
    };
    FixedDropdownContextmenuComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.document.removeEventListener("contextmenu", this.contextmenuFn, true);
        this.document.removeEventListener("touchstart", this.contextmenuFn, true);
        this.document.removeEventListener("scroll", this.scrollFn, true);
    };
    FixedDropdownContextmenuComponent.prototype.closeContextmenuEvent = function (event) {
        if (!this.elementContainsTarget(event)) {
            this.tryClose();
        }
        else {
            event.preventDefault();
        }
    };
    FixedDropdownContextmenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "fixed-dropdown-contextmenu",
            template: __webpack_require__(/*! ./fixed-dropdown-contextmenu.component.html */ "./src/app/widget/fixed-dropdown/fixed-dropdown-contextmenu.component.html")
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _dropdown_stack_service__WEBPACK_IMPORTED_MODULE_3__["DropdownStackService"],
            Document,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], FixedDropdownContextmenuComponent);
    return FixedDropdownContextmenuComponent;
}(_fixed_dropdown_component__WEBPACK_IMPORTED_MODULE_2__["FixedDropdownComponent"]));



/***/ }),

/***/ "./src/app/widget/fixed-dropdown/fixed-dropdown-ref.ts":
/*!*************************************************************!*\
  !*** ./src/app/widget/fixed-dropdown/fixed-dropdown-ref.ts ***!
  \*************************************************************/
/*! exports provided: DropdownRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownRef", function() { return DropdownRef; });
/* harmony import */ var _common_data_rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/data/rectangle */ "./src/app/common/data/rectangle.ts");
/*
* Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
*
* The software and information contained herein are copyrighted and
* proprietary to AngBoot Technology Corp. This software is furnished
* pursuant to a written license agreement and may be used, copied,
* transmitted, and stored only in accordance with the terms of such
* license and with the inclusion of the above copyright notice. Please
* refer to the file "COPYRIGHT" for further copyright and licensing
* information. This software and information or any other copies
* thereof may not be provided or otherwise made available to any other
* person.
*/

/**
 * Class which contains a reference to the dynamically created dropdown component.
 */
var DropdownRef = /** @class */ (function () {
    function DropdownRef(dropdownCmptRef, stackService, contentRef) {
        var _this = this;
        this.dropdownCmptRef = dropdownCmptRef;
        this.stackService = stackService;
        this.contentRef = contentRef;
        this._closed = false;
        var dropdown = dropdownCmptRef.instance;
        dropdown.onClose.subscribe(function () {
            _this.close();
        });
        dropdown.onOpen.subscribe(function () {
            var elem = _this.dropdownCmptRef.location.nativeElement;
            var bounds = elem.getBoundingClientRect();
            var width = bounds.width > 0 ? bounds.width : elem.scrollWidth;
            var height = bounds.height > 0 ? bounds.height : elem.scrollHeight;
            dropdown.dropdownBounds = new _common_data_rectangle__WEBPACK_IMPORTED_MODULE_0__["Rectangle"](bounds.left, bounds.top, width, height);
            _this.stackService.push(dropdown);
        });
    }
    Object.defineProperty(DropdownRef.prototype, "componentInstance", {
        /**
         * The instance of component used as dropdown's content.
         * Undefined when a TemplateRef is used as dropdown's content.
         */
        get: function () {
            if (this.contentRef.componentRef) {
                return this.contentRef.componentRef.instance;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownRef.prototype, "dropdownInstance", {
        get: function () {
            return this.dropdownCmptRef.instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownRef.prototype, "closed", {
        get: function () {
            return this._closed;
        },
        enumerable: true,
        configurable: true
    });
    DropdownRef.prototype.close = function () {
        if (!this._closed) {
            this._closed = true;
            this.removeDropdownElements();
            this.stackService.pop(this.dropdownInstance);
        }
    };
    Object.defineProperty(DropdownRef.prototype, "closeEvent", {
        get: function () {
            return this.dropdownCmptRef.instance.onClose;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownRef.prototype, "dropdownPosition", {
        set: function (point) {
            this.dropdownCmptRef.instance.dropdownBounds = new _common_data_rectangle__WEBPACK_IMPORTED_MODULE_0__["Rectangle"](point.x, point.y, 0, 0);
        },
        enumerable: true,
        configurable: true
    });
    DropdownRef.prototype.removeDropdownElements = function () {
        var dropdownNativeEl = this.dropdownCmptRef.location.nativeElement;
        if (!!dropdownNativeEl.parentNode) {
            dropdownNativeEl.parentNode.removeChild(dropdownNativeEl);
        }
        this.dropdownCmptRef.destroy();
        if (this.contentRef && this.contentRef.viewRef) {
            this.contentRef.viewRef.destroy();
        }
        this.contentRef = null;
    };
    return DropdownRef;
}());



/***/ }),

/***/ "./src/app/widget/fixed-dropdown/fixed-dropdown.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/widget/fixed-dropdown/fixed-dropdown.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "./src/app/widget/fixed-dropdown/fixed-dropdown.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/widget/fixed-dropdown/fixed-dropdown.component.ts ***!
  \*******************************************************************/
/*! exports provided: FixedDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedDropdownComponent", function() { return FixedDropdownComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_data_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/data/point */ "./src/app/common/data/point.ts");
/* harmony import */ var _common_data_rectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/data/rectangle */ "./src/app/common/data/rectangle.ts");
/* harmony import */ var _common_util_gui_tool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/util/gui-tool */ "./src/app/common/util/gui-tool.ts");
/* harmony import */ var _dropdown_stack_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dropdown-stack.service */ "./src/app/widget/fixed-dropdown/dropdown-stack.service.ts");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var FixedDropdownComponent = /** @class */ (function () {
    function FixedDropdownComponent(elementRef, renderer, document, dropdownService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.document = document;
        this.dropdownService = dropdownService;
        this.autoClose = true;
        this.closeOnOutsideClick = true;
        this.closeOnWindowResize = true;
        this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fixedDropdownCSS = true;
        this.listeners = [];
        this.mobile = _common_util_gui_tool__WEBPACK_IMPORTED_MODULE_4__["GuiTool"].isMobileDevice();
        this.dropdownPosition = new _common_data_point__WEBPACK_IMPORTED_MODULE_2__["Point"]();
    }
    FixedDropdownComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Wait a tick as the event that may have triggered the dynamic creation of this
        // component may not have bubbled to the document layer yet
        this.listenerTick = setTimeout(function () {
            _this.listeners.push(_this.renderer.listen("document", "mousedown", function (e) { return _this.documentMousedown(e); }), _this.renderer.listen("document", "click", function (e) { return _this.documentClick(e); }), _this.renderer.listen("document", "keyup.esc", function (e) { return _this.closeFromOutsideEsc(e); }), _this.renderer.listen("window", "resize", function (e) { return _this.closeFromWindowResize(e); }));
        }, 0);
    };
    FixedDropdownComponent.prototype.ngAfterViewInit = function () {
        this.onOpen.emit();
    };
    FixedDropdownComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.listenerTick);
        this.listeners.forEach(function (callback) { return callback(); });
    };
    Object.defineProperty(FixedDropdownComponent.prototype, "topPosition", {
        get: function () {
            return this.dropdownPosition.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FixedDropdownComponent.prototype, "leftPosition", {
        get: function () {
            return this.dropdownPosition.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FixedDropdownComponent.prototype, "_zIndex", {
        get: function () {
            return this.zIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FixedDropdownComponent.prototype, "dropdownBounds", {
        /**
         * Set the boundaries of the dropdown. If a container element defined then use those boundaries
         * to calculate the position
         */
        set: function (dropdownBounds) {
            var _a, _b;
            // set the position of the dropdown
            this.dropdownPosition = new _common_data_point__WEBPACK_IMPORTED_MODULE_2__["Point"](dropdownBounds.x, dropdownBounds.y);
            // adjust to the given container element
            if (this.container) {
                var containerElement = this.container;
                var restrictBounds = _common_data_rectangle__WEBPACK_IMPORTED_MODULE_3__["Rectangle"].fromClientRect(containerElement.getBoundingClientRect());
                // Restricting to an empty rectangle (such as when the body size is 0) doesn't really
                // make sense so use the viewport size instead
                if (restrictBounds.isEmpty()) {
                    _a = [0, 0], restrictBounds.x = _a[0], restrictBounds.y = _a[1];
                    _b = _common_util_gui_tool__WEBPACK_IMPORTED_MODULE_4__["GuiTool"].getViewportSize(), restrictBounds.width = _b[0], restrictBounds.height = _b[1];
                }
                var dropdownRight = dropdownBounds.x + dropdownBounds.width;
                var dropdownBottom = dropdownBounds.y + dropdownBounds.height;
                var restrictRight = restrictBounds.x + restrictBounds.width;
                var restrictBottom = restrictBounds.y + restrictBounds.height;
                if (dropdownRight > restrictRight) {
                    this.dropdownPosition.x = Math.max(0, restrictRight - dropdownBounds.width);
                }
                if (dropdownBottom > restrictBottom) {
                    this.dropdownPosition.y = Math.max(0, restrictBottom - dropdownBounds.height);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    // check if target is the backdrop of a modal dialog
    FixedDropdownComponent.prototype.isBackdrop = function (target) {
        return target.classList.contains("modal") && target.classList.contains("fade");
    };
    FixedDropdownComponent.prototype.isDropdown = function (element) {
        return _common_util_gui_tool__WEBPACK_IMPORTED_MODULE_4__["GuiTool"].parentContainsClass(element, "fixed-dropdown");
    };
    FixedDropdownComponent.prototype.documentMousedown = function (event) {
        var _this = this;
        // wait until a newly popped up fixed dropdown to set the current dropdown so
        // the isCurrent() check would work properly
        setTimeout(function () { return _this.documentMousedown0(event); }, 0);
    };
    FixedDropdownComponent.prototype.documentMousedown0 = function (event) {
        var target = event.target;
        if (event.button !== 2 && this.closeOnOutsideClick && !this.elementContainsTarget(event) &&
            !this.isBackdrop(target) &&
            (!this.isDropdown(target) || this.dropdownService.isCurrent(this))) {
            this.onClose.emit();
            event.stopPropagation();
        }
    };
    FixedDropdownComponent.prototype.documentClick = function (event) {
        var target = event.target;
        if (event.button !== 2 && this.autoClose && this.dropdownService.isCurrent(this)) {
            this.onClose.emit();
            event.stopPropagation();
        }
    };
    FixedDropdownComponent.prototype.closeFromOutsideEsc = function (event) {
        this.onClose.emit();
    };
    FixedDropdownComponent.prototype.closeFromWindowResize = function (event) {
        // opening keyboard on mobile causes window resize
        if (this.closeOnWindowResize && !this.mobile) {
            this.onClose.emit();
        }
    };
    FixedDropdownComponent.prototype.tryClose = function () {
        if (this.autoClose) {
            this.onClose.emit();
        }
    };
    FixedDropdownComponent.prototype.elementContainsTarget = function (event) {
        return this.elementRef.nativeElement.contains(event.target);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Element)
    ], FixedDropdownComponent.prototype, "container", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], FixedDropdownComponent.prototype, "autoClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], FixedDropdownComponent.prototype, "closeOnOutsideClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], FixedDropdownComponent.prototype, "closeOnWindowResize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Number)
    ], FixedDropdownComponent.prototype, "zIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], FixedDropdownComponent.prototype, "onOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], FixedDropdownComponent.prototype, "onClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.fixed-dropdown"),
        __metadata("design:type", Boolean)
    ], FixedDropdownComponent.prototype, "fixedDropdownCSS", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("style.top.px"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], FixedDropdownComponent.prototype, "topPosition", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("style.left.px"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], FixedDropdownComponent.prototype, "leftPosition", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("style.z-index"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], FixedDropdownComponent.prototype, "_zIndex", null);
    FixedDropdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "fixed-dropdown",
            template: __webpack_require__(/*! ./fixed-dropdown.component.html */ "./src/app/widget/fixed-dropdown/fixed-dropdown.component.html")
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            Document,
            _dropdown_stack_service__WEBPACK_IMPORTED_MODULE_5__["DropdownStackService"]])
    ], FixedDropdownComponent);
    return FixedDropdownComponent;
}());



/***/ }),

/***/ "./src/app/widget/fixed-dropdown/fixed-dropdown.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/widget/fixed-dropdown/fixed-dropdown.service.ts ***!
  \*****************************************************************/
/*! exports provided: ContentRef, FixedDropdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentRef", function() { return ContentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedDropdownService", function() { return FixedDropdownService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_data_rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/data/rectangle */ "./src/app/common/data/rectangle.ts");
/* harmony import */ var _dropdown_stack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown-stack.service */ "./src/app/widget/fixed-dropdown/dropdown-stack.service.ts");
/* harmony import */ var _fixed_dropdown_contextmenu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fixed-dropdown-contextmenu.component */ "./src/app/widget/fixed-dropdown/fixed-dropdown-contextmenu.component.ts");
/* harmony import */ var _fixed_dropdown_ref__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fixed-dropdown-ref */ "./src/app/widget/fixed-dropdown/fixed-dropdown-ref.ts");
/* harmony import */ var _fixed_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fixed-dropdown.component */ "./src/app/widget/fixed-dropdown/fixed-dropdown.component.ts");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ContentRef = /** @class */ (function () {
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());

/**
 * Class which handles the instantiation of dropdowns.
 * Inspired by https://github.com/ng-bootstrap/ng-bootstrap/blob/master/src/modal/modal-stack.ts
 */
var FixedDropdownService = /** @class */ (function () {
    function FixedDropdownService(applicationRef, injector, componentFactoryResolver, document, stackService) {
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.componentFactoryResolver = componentFactoryResolver;
        this.document = document;
        this.stackService = stackService;
        this.dropdownFactory = componentFactoryResolver
            .resolveComponentFactory(_fixed_dropdown_component__WEBPACK_IMPORTED_MODULE_6__["FixedDropdownComponent"]);
        this.dropdownContextmenuFactory = componentFactoryResolver
            .resolveComponentFactory(_fixed_dropdown_contextmenu_component__WEBPACK_IMPORTED_MODULE_4__["FixedDropdownContextmenuComponent"]);
    }
    FixedDropdownService.prototype.open = function (content, options) {
        return this._open(this.componentFactoryResolver, this.injector, content, options);
    };
    FixedDropdownService.prototype._open = function (moduleCFR, contentInjector, content, options) {
        var containerEl = options.container || this.document.body;
        if (!containerEl) {
            throw new Error("The specified dropdown container \"" + containerEl + "\" was not found in the DOM.");
        }
        var contentRef = this.getContentRef(moduleCFR, contentInjector, content);
        var dropdownCmptRef = this.getDropdownRef(options, contentRef);
        this.applicationRef.attachView(dropdownCmptRef.hostView);
        containerEl.appendChild(dropdownCmptRef.location.nativeElement);
        dropdownCmptRef.instance.container = containerEl;
        this.applyOptions(dropdownCmptRef.instance, options);
        return new _fixed_dropdown_ref__WEBPACK_IMPORTED_MODULE_5__["DropdownRef"](dropdownCmptRef, this.stackService, contentRef);
    };
    FixedDropdownService.prototype.getDropdownRef = function (options, contentRef) {
        return options.contextmenu ?
            this.dropdownContextmenuFactory.create(this.injector, contentRef.nodes) :
            this.dropdownFactory.create(this.injector, contentRef.nodes);
    };
    FixedDropdownService.prototype.getContentRef = function (moduleCFR, contentInjector, content) {
        if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]) {
            var viewRef = content.createEmbeddedView(null);
            this.applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        else {
            var contentCmptFactory = moduleCFR.resolveComponentFactory(content);
            var componentRef = contentCmptFactory.create(contentInjector);
            this.applicationRef.attachView(componentRef.hostView);
            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
    };
    FixedDropdownService.prototype.applyOptions = function (dropdown, options) {
        dropdown.dropdownBounds = new _common_data_rectangle__WEBPACK_IMPORTED_MODULE_2__["Rectangle"](options.position.x, options.position.y, 0, 0);
        if (options.autoClose != null) {
            dropdown.autoClose = options.autoClose;
        }
        if (options.closeOnOutsideClick != null) {
            dropdown.closeOnOutsideClick = options.closeOnOutsideClick;
        }
        if (options.closeOnWindowResize != null) {
            dropdown.closeOnWindowResize = options.closeOnWindowResize;
        }
        if (options.zIndex != null) {
            dropdown.zIndex = options.zIndex;
        }
    };
    FixedDropdownService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            Document,
            _dropdown_stack_service__WEBPACK_IMPORTED_MODULE_3__["DropdownStackService"]])
    ], FixedDropdownService);
    return FixedDropdownService;
}());



/***/ }),

/***/ "./src/app/widget/index.components.ts":
/*!********************************************!*\
  !*** ./src/app/widget/index.components.ts ***!
  \********************************************/
/*! exports provided: MODULE_COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_COMPONENTS", function() { return MODULE_COMPONENTS; });
/* harmony import */ var _fixed_dropdown_actions_contextmenu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fixed-dropdown/actions-contextmenu.component */ "./src/app/widget/fixed-dropdown/actions-contextmenu.component.ts");
/* harmony import */ var _slide_out_apply_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slide-out/apply-button.component */ "./src/app/widget/slide-out/apply-button.component.ts");
/* harmony import */ var _dropdown_view_dropdown_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-view/dropdown-view.component */ "./src/app/widget/dropdown-view/dropdown-view.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error/error.component */ "./src/app/widget/error/error.component.ts");
/* harmony import */ var _fixed_dropdown_fixed_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fixed-dropdown/fixed-dropdown.component */ "./src/app/widget/fixed-dropdown/fixed-dropdown.component.ts");
/* harmony import */ var _fixed_dropdown_fixed_dropdown_contextmenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fixed-dropdown/fixed-dropdown-contextmenu.component */ "./src/app/widget/fixed-dropdown/fixed-dropdown-contextmenu.component.ts");
/* harmony import */ var _dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog/message-dialog.component */ "./src/app/widget/dialog/message-dialog.component.ts");
/* harmony import */ var _notification_notifications_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notification/notifications.component */ "./src/app/widget/notification/notifications.component.ts");
/* harmony import */ var _tree_repository_tree_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tree/repository-tree.component */ "./src/app/widget/tree/repository-tree.component.ts");
/* harmony import */ var _slide_out_slide_out_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./slide-out/slide-out.component */ "./src/app/widget/slide-out/slide-out.component.ts");
/* harmony import */ var _split_split_pane_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./split/split-pane.component */ "./src/app/widget/split/split-pane.component.ts");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "./src/app/widget/tooltip/tooltip.component.ts");
/* harmony import */ var _tree_node_tree_node_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tree/node/tree-node.component */ "./src/app/widget/tree/node/tree-node.component.ts");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */













var MODULE_COMPONENTS = [
    _fixed_dropdown_actions_contextmenu_component__WEBPACK_IMPORTED_MODULE_0__["ActionsContextmenuComponent"],
    _slide_out_apply_button_component__WEBPACK_IMPORTED_MODULE_1__["ApplyButtonComponent"],
    _dropdown_view_dropdown_view_component__WEBPACK_IMPORTED_MODULE_2__["DropdownView"],
    _error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"],
    _fixed_dropdown_fixed_dropdown_component__WEBPACK_IMPORTED_MODULE_4__["FixedDropdownComponent"],
    _fixed_dropdown_fixed_dropdown_contextmenu_component__WEBPACK_IMPORTED_MODULE_5__["FixedDropdownContextmenuComponent"],
    _dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_6__["MessageDialog"],
    _notification_notifications_component__WEBPACK_IMPORTED_MODULE_7__["NotificationsComponent"],
    _tree_repository_tree_component__WEBPACK_IMPORTED_MODULE_8__["RepositoryTreeComponent"],
    _slide_out_slide_out_component__WEBPACK_IMPORTED_MODULE_9__["SlideOutComponent"],
    _split_split_pane_component__WEBPACK_IMPORTED_MODULE_10__["SplitPaneComponent"],
    _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_11__["TooltipComponent"],
    _tree_node_tree_node_component__WEBPACK_IMPORTED_MODULE_12__["TreeNodeComponent"]
];


/***/ }),

/***/ "./src/app/widget/index.directives.ts":
/*!********************************************!*\
  !*** ./src/app/widget/index.directives.ts ***!
  \********************************************/
/*! exports provided: MODULE_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_DIRECTIVES", function() { return MODULE_DIRECTIVES; });
/* harmony import */ var _fixed_dropdown_actions_contextmenu_anchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fixed-dropdown/actions-contextmenu-anchor.directive */ "./src/app/widget/fixed-dropdown/actions-contextmenu-anchor.directive.ts");
/* harmony import */ var _directive_block_mouse_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directive/block-mouse.directive */ "./src/app/widget/directive/block-mouse.directive.ts");
/* harmony import */ var _fixed_dropdown_contextmenu_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fixed-dropdown/contextmenu-dropdown-anchor.directive */ "./src/app/widget/fixed-dropdown/contextmenu-dropdown-anchor.directive.ts");
/* harmony import */ var _directive_default_focus_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directive/default-focus.directive */ "./src/app/widget/directive/default-focus.directive.ts");
/* harmony import */ var _directive_enter_click_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directive/enter-click.directive */ "./src/app/widget/directive/enter-click.directive.ts");
/* harmony import */ var _directive_enter_submit_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directive/enter-submit.directive */ "./src/app/widget/directive/enter-submit.directive.ts");
/* harmony import */ var _expand_string_expand_string_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expand-string/expand-string.directive */ "./src/app/widget/expand-string/expand-string.directive.ts");
/* harmony import */ var _directive_fixed_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directive/fixed-dropdown.directive */ "./src/app/widget/directive/fixed-dropdown.directive.ts");
/* harmony import */ var _directive_input_trim_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directive/input-trim.directive */ "./src/app/widget/directive/input-trim.directive.ts");
/* harmony import */ var _directive_out_of_zone_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directive/out-of-zone.directive */ "./src/app/widget/directive/out-of-zone.directive.ts");
/* harmony import */ var _directive_resizable_table_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directive/resizable-table.directive */ "./src/app/widget/directive/resizable-table.directive.ts");
/* harmony import */ var _directive_selection_box_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directive/selection-box.directive */ "./src/app/widget/directive/selection-box.directive.ts");
/* harmony import */ var _directive_sort_column_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directive/sort-column.directive */ "./src/app/widget/directive/sort-column.directive.ts");
/* harmony import */ var _tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tooltip/tooltip.directive */ "./src/app/widget/tooltip/tooltip.directive.ts");
/* harmony import */ var _directive_tooltip_if_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directive/tooltip-if.directive */ "./src/app/widget/directive/tooltip-if.directive.ts");
/* harmony import */ var _directive_touch_scroll_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directive/touch-scroll.directive */ "./src/app/widget/directive/touch-scroll.directive.ts");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
















var MODULE_DIRECTIVES = [
    _fixed_dropdown_actions_contextmenu_anchor_directive__WEBPACK_IMPORTED_MODULE_0__["ActionsContextmenuAnchorDirective"],
    _directive_block_mouse_directive__WEBPACK_IMPORTED_MODULE_1__["BlockMouseDirective"],
    _fixed_dropdown_contextmenu_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["ContextmenuDropdownAnchorDirective"],
    _directive_default_focus_directive__WEBPACK_IMPORTED_MODULE_3__["DefaultFocusDirective"],
    _directive_enter_click_directive__WEBPACK_IMPORTED_MODULE_4__["EnterClickDirective"],
    _directive_enter_submit_directive__WEBPACK_IMPORTED_MODULE_5__["EnterSubmitDirective"],
    _expand_string_expand_string_directive__WEBPACK_IMPORTED_MODULE_6__["ExpandStringDirective"],
    _directive_fixed_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__["FixedDropdownDirective"],
    _directive_input_trim_directive__WEBPACK_IMPORTED_MODULE_8__["InputTrimDirective"],
    _directive_out_of_zone_directive__WEBPACK_IMPORTED_MODULE_9__["OutOfZoneDirective"],
    _directive_resizable_table_directive__WEBPACK_IMPORTED_MODULE_10__["ResizableTableDirective"],
    _directive_selection_box_directive__WEBPACK_IMPORTED_MODULE_11__["SelectionBoxDirective"],
    _directive_sort_column_directive__WEBPACK_IMPORTED_MODULE_12__["SortColumnDirective"],
    _tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_13__["TooltipDirective"],
    _directive_tooltip_if_directive__WEBPACK_IMPORTED_MODULE_14__["TooltipIfDirective"],
    _directive_touch_scroll_directive__WEBPACK_IMPORTED_MODULE_15__["TouchScrollDirective"]
];


/***/ }),

/***/ "./src/app/widget/index.pipes.ts":
/*!***************************************!*\
  !*** ./src/app/widget/index.pipes.ts ***!
  \***************************************/
/*! exports provided: MODULE_PIPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_PIPES", function() { return MODULE_PIPES; });
/* harmony import */ var _pipe_number_to_array_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipe/number-to-array.pipe */ "./src/app/widget/pipe/number-to-array.pipe.ts");
/* harmony import */ var _pipe_truncate_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipe/truncate.pipe */ "./src/app/widget/pipe/truncate.pipe.ts");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */


var MODULE_PIPES = [
    _pipe_number_to_array_pipe__WEBPACK_IMPORTED_MODULE_0__["NumberToArrayPipe"],
    _pipe_truncate_pipe__WEBPACK_IMPORTED_MODULE_1__["TruncatePipe"]
];


/***/ }),

/***/ "./src/app/widget/notification/notifications.component.html":
/*!******************************************************************!*\
  !*** ./src/app/widget/notification/notifications.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngFor=\"let alert of alerts\">\r\n  <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\">{{ alert.message }}</ngb-alert>\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/widget/notification/notifications.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/widget/notification/notifications.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  display: flex;\n  justify-content: center;\n  overflow: hidden;\n  margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/widget/notification/notifications.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/widget/notification/notifications.component.ts ***!
  \****************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */

/**
 * Component that displays notification messages to the user.
 */
var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(changeDetectionRef) {
        this.changeDetectionRef = changeDetectionRef;
        /* Optional timeout for notifications. */
        this.timeout = 0;
        this.message = "";
        this.alerts = [];
        this.counter = 0;
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        if (this.message) {
            this.info(this.message);
        }
    };
    /**
     * Displays a success message.
     *
     * @param message the message text.
     */
    NotificationsComponent.prototype.success = function (message) {
        this.addAlert(message, "success");
    };
    /**
     * Displays an information message.
     *
     * @param message the message text.
     */
    NotificationsComponent.prototype.info = function (message) {
        this.addAlert(message, "info");
    };
    /**
     * Displays a warning message.
     *
     * @param message the message text.
     */
    NotificationsComponent.prototype.warning = function (message) {
        this.addAlert(message, "warning");
    };
    /**
     * Displays a danger message.
     *
     * @param message the message text.
     */
    NotificationsComponent.prototype.danger = function (message) {
        this.addAlert(message, "danger");
    };
    NotificationsComponent.prototype.alertShowing = function (message) {
        return this.alerts.map(function (a) { return a.message; }).indexOf(message) >= 0;
    };
    NotificationsComponent.prototype.addAlert = function (message, type) {
        // ignore duplicates
        if (this.alertShowing(message)) {
            return;
        }
        var alert = {
            id: this.counter++,
            type: type,
            message: message
        };
        this.alerts.push(alert);
        if (this.timeout > 0) {
            setTimeout(this.closeAlert.bind(this), this.timeout, alert);
        }
    };
    NotificationsComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        if (index >= 0) {
            this.alerts.splice(index, 1);
        }
        if (!this.changeDetectionRef["destroyed"]) {
            this.changeDetectionRef.detectChanges();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], NotificationsComponent.prototype, "timeout", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NotificationsComponent.prototype, "message", void 0);
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "notifications",
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/widget/notification/notifications.component.html"),
            styles: [__webpack_require__(/*! ./notifications.component.scss */ "./src/app/widget/notification/notifications.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/widget/pipe/number-to-array.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/widget/pipe/number-to-array.pipe.ts ***!
  \*****************************************************/
/*! exports provided: NumberToArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberToArrayPipe", function() { return NumberToArrayPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
* Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
*
* The software and information contained herein are copyrighted and
* proprietary to AngBoot Technology Corp. This software is furnished
* pursuant to a written license agreement and may be used, copied,
* transmitted, and stored only in accordance with the terms of such
* license and with the inclusion of the above copyright notice. Please
* refer to the file "COPYRIGHT" for further copyright and licensing
* information. This software and information or any other copies
* thereof may not be provided or otherwise made available to any other
* person.
*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NumberToArrayPipe = /** @class */ (function () {
    function NumberToArrayPipe() {
    }
    NumberToArrayPipe.prototype.transform = function (value) {
        if (value < 0) {
            throw new RangeError();
        }
        return new Array(value).fill(0).map(function (_, i) { return i; });
    };
    NumberToArrayPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: "numberToArray"
        })
    ], NumberToArrayPipe);
    return NumberToArrayPipe;
}());



/***/ }),

/***/ "./src/app/widget/pipe/truncate.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/widget/pipe/truncate.pipe.ts ***!
  \**********************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
* Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
*
* The software and information contained herein are copyrighted and
* proprietary to AngBoot Technology Corp. This software is furnished
* pursuant to a written license agreement and may be used, copied,
* transmitted, and stored only in accordance with the terms of such
* license and with the inclusion of the above copyright notice. Please
* refer to the file "COPYRIGHT" for further copyright and licensing
* information. This software and information or any other copies
* thereof may not be provided or otherwise made available to any other
* person.
*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, limit, trail) {
        var limit2 = limit ? parseInt(limit, 10) : 100;
        var trail2 = trail ? trail : "...";
        return value.length > limit2 ? value.substring(0, limit2) + trail2 : value;
    };
    TruncatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: "truncate"
        })
    ], TruncatePipe);
    return TruncatePipe;
}());



/***/ }),

/***/ "./src/app/widget/services/debounce.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/widget/services/debounce.service.ts ***!
  \*****************************************************/
/*! exports provided: DebounceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebounceService", function() { return DebounceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var defaultReducer = function (previous, next) { return next; };
var DebounceService = /** @class */ (function () {
    function DebounceService(zone) {
        this.zone = zone;
        this.callbacks = new Map();
    }
    DebounceService.prototype.debounce = function (key, fn, delay, args, reducer) {
        var _this = this;
        if (reducer === void 0) { reducer = defaultReducer; }
        var next = { callback: fn, args: args };
        if (this.callbacks.has(key)) {
            var previous = this.callbacks.get(key);
            next = reducer(previous.callback, next);
            clearTimeout(previous.timeoutId);
            this.callbacks.delete(key);
        }
        // debounce should not cause an extra change detection
        this.zone.runOutsideAngular(function () {
            var timeoutId = setTimeout(function () {
                if (_this.callbacks.has(key)) {
                    var callback = _this.callbacks.get(key).callback;
                    callback.callback.apply(null, callback.args);
                    _this.callbacks.delete(key);
                }
            }, delay);
            _this.callbacks.set(key, { callback: next, timeoutId: timeoutId });
        });
    };
    DebounceService.prototype.cancel = function (key) {
        if (this.callbacks.has(key)) {
            clearTimeout(this.callbacks.get(key).timeoutId);
            this.callbacks.delete(key);
        }
    };
    DebounceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], DebounceService);
    return DebounceService;
}());



/***/ }),

/***/ "./src/app/widget/services/model.service.ts":
/*!**************************************************!*\
  !*** ./src/app/widget/services/model.service.ts ***!
  \**************************************************/
/*! exports provided: ModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelService", function() { return ModelService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_util_component_tool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/util/component-tool */ "./src/app/common/util/component-tool.ts");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModelService = /** @class */ (function () {
    function ModelService(http, modalService) {
        this.http = http;
        this.modalService = modalService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "Content-Type": "application/json"
        });
        this.formHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "Content-Type": "application/x-www-form-urlencoded"
        });
    }
    Object.defineProperty(ModelService.prototype, "errorHandler", {
        get: function () {
            return this._errorHandler;
        },
        set: function (handler) {
            this._errorHandler = handler;
        },
        enumerable: true,
        configurable: true
    });
    ModelService.prototype.getModel = function (controller, params) {
        var _this = this;
        var options = {
            headers: this.headers,
            params: params
        };
        return this.http.get(controller, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    ModelService.prototype.sendModel = function (controller, model, params) {
        var _this = this;
        return this.http.post(controller, model, {
            headers: this.headers,
            observe: "response",
            params: params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    ModelService.prototype.sendModelByForm = function (controller, formValue, params) {
        var _this = this;
        return this.http.post(controller, formValue, {
            headers: this.formHeaders,
            observe: "response",
            params: params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    /**
     * Use put method to send model.
     */
    ModelService.prototype.putModel = function (controller, model, params) {
        var _this = this;
        return this.http.put(controller, model, {
            headers: this.headers,
            observe: "response",
            params: params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    ModelService.prototype.handleError = function (res) {
        var error;
        try {
            error = res.error;
        }
        catch (ignore) {
        }
        var errMsg = (!!error && !!error.message) ? error.message :
            res.status == 403 ? "_#(js:server.error.connectionForbidden)" :
                error && !(error === "" || error instanceof ProgressEvent) ? error :
                    res.status ? res.status + " - " + res.statusText : "_#(js:server.error.connectionLost)";
        if (!error || !this.errorHandler || !this.errorHandler(error)) {
            _common_util_component_tool__WEBPACK_IMPORTED_MODULE_5__["ComponentTool"].showMessageDialog(this.modalService, "_#(js:Error)", errMsg);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errMsg);
    };
    ModelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], ModelService);
    return ModelService;
}());



/***/ }),

/***/ "./src/app/widget/slide-out/apply-button.component.html":
/*!**************************************************************!*\
  !*** ./src/app/widget/slide-out/apply-button.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group\">\n  <div class=\"input-group-prepend\">\n    <button type=\"button\" class=\"btn btn-default\" [disabled]=\"disabled\"\n            (click)=\"onApply.emit(false)\">\n      _#(Apply)\n    </button>\n  </div>\n  <div class=\"input-group-append\">\n    <button type=\"button\" class=\"btn btn-default\" [disabled]=\"disabled\"\n            (click)=\"onApply.emit(true)\" title=\"_#(Apply and Collapse)\">\n      <i class=\"chevron-circle-arrow-left-icon btn-icon-color\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/widget/slide-out/apply-button.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/widget/slide-out/apply-button.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group-prepend button {\n  border-right: 1px dashed; }\n\n.input-group-append button {\n  border-left: none;\n  padding-top: 3px;\n  padding-bottom: 0px;\n  padding-left: 5px;\n  padding-right: 5px; }\n\n.input-group-append button i {\n    font-size: 16px;\n    color: inherit; }\n"

/***/ }),

/***/ "./src/app/widget/slide-out/apply-button.component.ts":
/*!************************************************************!*\
  !*** ./src/app/widget/slide-out/apply-button.component.ts ***!
  \************************************************************/
/*! exports provided: ApplyButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyButtonComponent", function() { return ApplyButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
* Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
*
* The software and information contained herein are copyrighted and
* proprietary to AngBoot Technology Corp. This software is furnished
* pursuant to a written license agreement and may be used, copied,
* transmitted, and stored only in accordance with the terms of such
* license and with the inclusion of the above copyright notice. Please
* refer to the file "COPYRIGHT" for further copyright and licensing
* information. This software and information or any other copies
* thereof may not be provided or otherwise made available to any other
* person.
*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApplyButtonComponent = /** @class */ (function () {
    function ApplyButtonComponent() {
        this.disabled = false;
        // true if collapse slide out pane
        this.onApply = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApplyButtonComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ApplyButtonComponent.prototype, "onApply", void 0);
    ApplyButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "apply-button",
            template: __webpack_require__(/*! ./apply-button.component.html */ "./src/app/widget/slide-out/apply-button.component.html"),
            styles: [__webpack_require__(/*! ./apply-button.component.scss */ "./src/app/widget/slide-out/apply-button.component.scss")]
        })
    ], ApplyButtonComponent);
    return ApplyButtonComponent;
}());



/***/ }),

/***/ "./src/app/widget/slide-out/dialog-service.service.ts":
/*!************************************************************!*\
  !*** ./src/app/widget/slide-out/dialog-service.service.ts ***!
  \************************************************************/
/*! exports provided: DialogService, ViewerDialogServiceFactory, ComposerDialogServiceFactory, BindingDialogServiceFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerDialogServiceFactory", function() { return ViewerDialogServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposerDialogServiceFactory", function() { return ComposerDialogServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingDialogServiceFactory", function() { return BindingDialogServiceFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _common_services_ui_context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/ui-context.service */ "./src/app/common/services/ui-context.service.ts");
/* harmony import */ var _slide_out_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slide-out.service */ "./src/app/widget/slide-out/slide-out.service.ts");
/* harmony import */ var _common_util_tool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/util/tool */ "./src/app/common/util/tool.ts");
/*
* Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
*
* The software and information contained herein are copyrighted and
* proprietary to AngBoot Technology Corp. This software is furnished
* pursuant to a written license agreement and may be used, copied,
* transmitted, and stored only in accordance with the terms of such
* license and with the inclusion of the above copyright notice. Please
* refer to the file "COPYRIGHT" for further copyright and licensing
* information. This software and information or any other copies
* thereof may not be provided or otherwise made available to any other
* person.
*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * The service that delegates whether to open content in a modal or slide out panel.
 */
var DialogService = /** @class */ (function () {
    function DialogService(modalService, slideOutService, injector, uiContext) {
        var _this = this;
        this.modalService = modalService;
        this.slideOutService = slideOutService;
        this.injector = injector;
        this.uiContext = uiContext;
        this.container = null;
        this.objectDeleted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.panes = [];
        this.currentSlideouts = [];
        this.popupCount = 0;
        this.injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({ providers: [{ provide: DialogService_1, useValue: this }], parent: injector });
        this.uiSub = uiContext.getObjectChange().subscribe(function (msg) {
            if (msg.action == "property") {
                _this.panes.forEach(function (p) {
                    if (p.ref.objectId == msg.objectId && p.ref.sheetId == msg.sheetId &&
                        (!msg.title || msg.title == p.ref.title)) {
                        p.ref.changedByOthers = true;
                    }
                });
            }
        });
    }
    DialogService_1 = DialogService;
    DialogService.prototype.ngOnDestroy = function () {
        if (this.uiSub) {
            this.uiSub.unsubscribe();
            this.uiSub = null;
        }
    };
    DialogService.prototype.getCurrentSlideOuts = function () {
        return this.currentSlideouts;
    };
    DialogService.prototype.hasSlideout = function (objectId) {
        return this.currentSlideouts.some(function (s) { return s.objectId == objectId; });
    };
    DialogService.prototype.setSheetId = function (id) {
        this.sheetId = id;
    };
    // called when object is deleted
    DialogService.prototype.objectDelete = function (objectId) {
        this.objectDeleted.next(objectId);
    };
    // called when object name is changed
    DialogService.prototype.objectRename = function (oname, nname) {
        this.getCurrentSlideOuts()
            .filter(function (s) { return s.objectId == oname; })
            .forEach(function (s) { return s.objectId = nname; });
        var panes = this.panes.filter(function (s) { return s.options.objectId == oname; });
        panes.forEach(function (s) { return s.options.objectId = nname; });
        panes.forEach(function (s) { return s.options.title = s.ref.title; });
    };
    // called when object properties changed (commit/apply)
    DialogService.prototype.objectChange = function (objectId, title) {
        if (title === void 0) { title = null; }
        this.uiContext.objectPropertyChanged(objectId, title);
    };
    // find SlideOutRef with same content and options
    DialogService.prototype.findExisting = function (content0, options0) {
        var _this = this;
        var entry = this.panes.find(function (p) { return _this.compareSlideoutOptions(p.options, options0) && content0 == p.content; });
        return entry ? entry.ref : null;
    };
    DialogService.prototype.dismissAllSlideouts = function () {
        this.currentSlideouts.forEach(function (s) { return s.dismiss(); });
        this.currentSlideouts = [];
    };
    DialogService.prototype.showSlideout = function (idx) {
        for (var i = 0; i < this.currentSlideouts.length; i++) {
            this.currentSlideouts[i].setOnTop(i == idx);
            this.currentSlideouts[i].setExpanded(i == idx);
        }
    };
    DialogService.prototype.showSlideoutFor = function (objectId) {
        this.currentSlideouts.forEach(function (s) {
            s.setOnTop(s.objectId == objectId);
            s.setExpanded(s.objectId == objectId);
        });
    };
    // check if slideout is on top of all others. a slide out is on top if it's z-index
    // is set on top (1049), or if it's the last slideout of all visible slideouts.
    DialogService.prototype.isSlideoutOnTop = function (idx) {
        if (this.currentSlideouts[idx].isOnTop()) {
            return true;
        }
        if (this.currentSlideouts.find(function (s) { return s.isOnTop(); })) {
            return false;
        }
        return idx == this.currentSlideouts.length - 1;
    };
    Object.defineProperty(DialogService.prototype, "openPopups", {
        get: function () {
            return this.popupCount;
        },
        enumerable: true,
        configurable: true
    });
    /*
     * Called when an NgbModal is closed
     */
    DialogService.prototype.onModalClose = function () {
        var _this = this;
        // Decrement the pop up counter after keyboard events go through
        setTimeout(function () { return _this.popupCount -= 1; });
    };
    /**
     * Delegates open method to appropriate service based on boolean.
     */
    DialogService.prototype.open = function (content, options) {
        var _this = this;
        if (!options || !options.popup) {
            if (this.container) {
                if (!options) {
                    options = {};
                }
                if (!options.container) {
                    options.container = this.container;
                }
            }
            var ref_1 = this.findExisting(content, options);
            if (ref_1) {
                // dismiss the old slideout ref, we only want to handle onCommit of the most
                // recent ref
                ref_1.dismiss();
            }
            ref_1 = this.slideOutService.open(content, options, this.injector);
            this.panes.push({ ref: ref_1, options: options, content: content });
            var sheetSubscription_1;
            var assemblySubscription_1;
            this.currentSlideouts.push(ref_1);
            this.showSlideout(this.currentSlideouts.length - 1);
            ref_1.result.then(function () {
                _this.currentSlideouts = _this.currentSlideouts.filter(function (s) { return s != ref_1; });
            }, function () {
                _this.currentSlideouts = _this.currentSlideouts.filter(function (s) { return s != ref_1; });
            });
            if (this.sheetId) {
                sheetSubscription_1 = this.uiContext.getSheetChange().subscribe(function (msg) {
                    if (msg.sheetId == _this.sheetId) {
                        switch (msg.action) {
                            case "show":
                                _this.currentSlideouts.push(ref_1);
                                ref_1.setVisible(true);
                                break;
                            case "hide":
                                _this.currentSlideouts = _this.currentSlideouts.filter(function (s) { return s != ref_1; });
                                ref_1.setVisible(false);
                                break;
                            case "close":
                                _this.currentSlideouts = _this.currentSlideouts.filter(function (s) { return s != ref_1; });
                                ref_1.close();
                                break;
                        }
                    }
                });
                assemblySubscription_1 = this.objectDeleted.subscribe(function (msg) {
                    if (msg == ref_1.objectId && ref_1.objectId) {
                        _this.currentSlideouts = _this.currentSlideouts.filter(function (s) { return s != ref_1; });
                        ref_1.dismiss();
                    }
                });
            }
            var cleanup = function () {
                if (sheetSubscription_1) {
                    sheetSubscription_1.unsubscribe();
                    assemblySubscription_1.unsubscribe();
                }
                _this.panes = _this.panes.filter(function (p) { return p.ref != ref_1; });
            };
            ref_1.result.then(cleanup, cleanup);
            return ref_1;
        }
        else {
            var ref = this.modalService.open(content, options);
            if (ref) {
                this.popupCount += 1;
                ref.result.then(function () { return _this.onModalClose(); }, function () { return _this.onModalClose(); });
            }
            return ref;
        }
    };
    DialogService.prototype.compareSlideoutOptions = function (opt1, opt2) {
        var noInj1 = _common_util_tool__WEBPACK_IMPORTED_MODULE_5__["Tool"].clone(opt1);
        var noInj2 = _common_util_tool__WEBPACK_IMPORTED_MODULE_5__["Tool"].clone(opt2);
        noInj1.injector = null;
        noInj2.injector = null;
        return _common_util_tool__WEBPACK_IMPORTED_MODULE_5__["Tool"].isEquals(noInj1, noInj2);
    };
    var DialogService_1;
    DialogService = DialogService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _slide_out_service__WEBPACK_IMPORTED_MODULE_4__["SlideOutService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _common_services_ui_context_service__WEBPACK_IMPORTED_MODULE_3__["UIContextService"]])
    ], DialogService);
    return DialogService;
}());

function ViewerDialogServiceFactory(modalService, slideOutService, injector, uiContext) {
    var service = new DialogService(modalService, slideOutService, injector, uiContext);
    service.container = ".viewer-container";
    return service;
}
function ComposerDialogServiceFactory(modalService, slideOutService, injector, uiContext) {
    var service = new DialogService(modalService, slideOutService, injector, uiContext);
    service.container = ".composer-body";
    return service;
}
function BindingDialogServiceFactory(modalService, slideOutService, injector, uiContext) {
    var service = new DialogService(modalService, slideOutService, injector, uiContext);
    service.container = "binding-editor .split-content";
    return service;
}


/***/ }),

/***/ "./src/app/widget/slide-out/slide-out-ref.ts":
/*!***************************************************!*\
  !*** ./src/app/widget/slide-out/slide-out-ref.ts ***!
  \***************************************************/
/*! exports provided: SlideOutRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideOutRef", function() { return SlideOutRef; });
/*
* Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
*
* The software and information contained herein are copyrighted and
* proprietary to AngBoot Technology Corp. This software is furnished
* pursuant to a written license agreement and may be used, copied,
* transmitted, and stored only in accordance with the terms of such
* license and with the inclusion of the above copyright notice. Please
* refer to the file "COPYRIGHT" for further copyright and licensing
* information. This software and information or any other copies
* thereof may not be provided or otherwise made available to any other
* person.
*/
/**
 * A reference to a newly opened slide out component. (Equivalent to NgbModalRef)
 */
var SlideOutRef = /** @class */ (function () {
    function SlideOutRef(slideOutRef, contentRef, backdropCmptRef, _objectId, sheetId, beforeDismiss) {
        var _this = this;
        this.slideOutRef = slideOutRef;
        this.contentRef = contentRef;
        this.backdropCmptRef = backdropCmptRef;
        this._objectId = _objectId;
        this.sheetId = sheetId;
        this.beforeDismiss = beforeDismiss;
        this._changedByOthers = false;
        this.slideOutRef.instance.dismiss
            .subscribe(function (reason) {
            _this.dismiss(reason);
        });
        this.result = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
        this.result.then(null, function () { });
    }
    Object.defineProperty(SlideOutRef.prototype, "objectId", {
        get: function () {
            return this._objectId;
        },
        set: function (id) {
            this.slideOutRef.instance.renameTitle(this._objectId, id);
            this._objectId = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideOutRef.prototype, "changedByOthers", {
        get: function () {
            return this._changedByOthers;
        },
        set: function (changedByOthers) {
            this._changedByOthers = changedByOthers;
            this.slideOutRef.instance.changedByOthers = changedByOthers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideOutRef.prototype, "componentInstance", {
        /**
         * The instance of component used as slide out's content.
         * Undefined when a TemplateRef is used.
         */
        get: function () {
            if (this.contentRef.componentRef) {
                return this.contentRef.componentRef.instance;
            }
        },
        set: function (instance) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlideOutRef.prototype, "title", {
        get: function () {
            return this.slideOutRef.instance.title;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Can be used to close slide, passing an optional result.
     */
    SlideOutRef.prototype.close = function (result) {
        if (this.slideOutRef) {
            this.resolve(result);
            this.removeSlideOut();
        }
    };
    /**
     * Can be used to dismiss slide, passing an optional reason.
     */
    SlideOutRef.prototype.dismiss = function (reason) {
        if (this.slideOutRef) {
            if (!this.beforeDismiss || this.beforeDismiss() !== false) {
                this.reject(reason);
                this.removeSlideOut();
            }
        }
    };
    SlideOutRef.prototype.setExpanded = function (expanded) {
        if (this.slideOutRef) {
            this.slideOutRef.instance.setExpanded(expanded);
        }
    };
    SlideOutRef.prototype.setVisible = function (vis) {
        if (this.slideOutRef) {
            this.slideOutRef.instance.visible = vis;
        }
    };
    // set z-index to place slide out on top of others.
    SlideOutRef.prototype.setOnTop = function (onTop) {
        if (this.slideOutRef) {
            this.slideOutRef.instance.setOnTop(onTop);
        }
    };
    SlideOutRef.prototype.isOnTop = function () {
        return this.slideOutRef && this.slideOutRef.instance.isOnTop();
    };
    SlideOutRef.prototype.isExpanded = function () {
        return this.slideOutRef && this.slideOutRef.instance.isExpanded();
    };
    SlideOutRef.prototype.removeSlideOut = function () {
        var slideContainer = this.slideOutRef.location.nativeElement;
        if (this.backdropCmptRef) {
            slideContainer.parentNode.removeChild(this.backdropCmptRef.location.nativeElement);
            this.backdropCmptRef.destroy();
        }
        slideContainer.parentNode.removeChild(slideContainer);
        this.slideOutRef.destroy();
        if (this.contentRef && this.contentRef.viewRef) {
            this.contentRef.viewRef.destroy();
        }
        this.backdropCmptRef = null;
        this.slideOutRef = null;
        this.contentRef = null;
    };
    return SlideOutRef;
}());



/***/ }),

/***/ "./src/app/widget/slide-out/slide-out.component.html":
/*!***********************************************************!*\
  !*** ./src/app/widget/slide-out/slide-out.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slide-out-wrapper h-100 d-flex {{side}}\" *ngIf=\"visible\">\n  <div class=\"slide-out-toggle-container bg-white3\">\n    <div class=\"slide-out-toggle\">\n      <div class=\"slide-out-label rotate align-middle cursor-pointer\" (click)=\"toggle()\">\n        <span class=\"pl-1 pr-1\">{{title ? title : \"_#(Dialog)\"}}</span>\n        <i class=\"pl-1 pr-1\"\n           [class.chevron-circle-arrow-up-icon]=\"open\"\n           [class.chevron-circle-arrow-down-icon]=\"!open\"></i>\n        <i class=\"pl-1 pr-1 close-icon cursor-pointer\" (click)=\"dismissComponent(null)\"></i>\n        <ng-container *ngIf=\"getCurrentSlideouts().length > 1\">\n          <div class=\"spacer\"></div>\n          <div class=\"count-label txt-primary\" blockMouse\n               [fixedDropdown]=\"dropdownMenu\" dropdownPlacement=\"bottom\">\n            {{getCurrentSlideouts().length}}\n          </div>\n          <ng-template #dropdownMenu>\n            <div class=\"dropdown-pane p-1\">\n              <button class=\"form-control\" (click)=\"dismissAll()\">_#(Close All)</button>\n              <div class=\"slideout-list mt-2\">\n                <div *ngFor=\"let slideout of getCurrentSlideouts(); let i = index\"\n                     class=\"dropdown-item\"\n                     [class.selected]=\"isSlideoutOnTop(i)\"\n                     (click)=\"showSlideout(i)\">\n                  {{slideout.title}}\n                </div>\n              </div>\n            </div>\n          </ng-template>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"open\" #contentContainer\n       class=\"slide-out-content-container bg-white1 {{windowClass}} {{sizeClass}}\"\n       [style.width.px]=\"explicitWidth\">\n    <div class=\"content-div\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"v-resizer bg-white4\" (mousedown)=\"startResize($event)\"></div>\n  </div>\n</div>\n<notifications *ngIf=\"changedByOthers\" class=\"warning-message\" [timeout]=\"0\"\n               message=\"_#(common.widget.slidOut.changedByOthers)\"></notifications>\n"

/***/ }),

/***/ "./src/app/widget/slide-out/slide-out.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/widget/slide-out/slide-out.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Copyright (c) 2018, InetSoft Technology Corp, All Rights Reserved.\n *\n * The software and information contained herein are copyrighted and\n * proprietary to InetSoft Technology Corp. This software is furnished\n * pursuant to a written license agreement and may be used, copied,\n * transmitted, and stored only in accordance with the terms of such\n * license and with the inclusion of the above copyright notice. Please\n * refer to the file \"COPYRIGHT\" for further copyright and licensing\n * information. This software and information or any other copies\n * thereof may not be provided or otherwise made available to any other\n * person.\n */\n:host {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  display: block;\n  max-width: 100%; }\n:host.left {\n  left: 0; }\n:host.right {\n  right: 0; }\n:host-context(slide-out) div.property-dialog-window.slide-out-content-container {\n  max-width: 750px;\n  width: 95vw; }\n.right.slide-out-wrapper {\n  flex-direction: row-reverse; }\n.slide-out-content-container {\n  height: 100%;\n  width: 1000px;\n  display: flex; }\n.slide-out-content-container .content-div {\n    flex-grow: 1;\n    flex-shrink: 1;\n    min-width: 50px;\n    height: 100%; }\n.slide-out-content-container .v-resizer {\n    width: 4px;\n    min-width: 4px;\n    flex-grow: 0; }\n.slide-out-content-container .v-resizer:hover {\n      cursor: e-resize; }\n.slide-out-toggle-container {\n  position: relative;\n  width: 30px;\n  height: 100%;\n  display: inline-block; }\n.slide-out-toggle {\n  position: absolute;\n  top: -30px;\n  -webkit-transform-origin: 0 100%;\n  -moz-transform-origin: 0 100%;\n  -ms-transform-origin: 0 100%;\n  -o-transform-origin: 0 100%;\n  -webkit-transform: rotate(90deg);\n  -moz-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  -o-transform: rotate(90deg); }\n.left .slide-out-label.rotate {\n  -webkit-transform: rotate(180deg);\n  -moz-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  -o-transform: rotate(180deg); }\n.slide-out-label {\n  white-space: nowrap;\n  display: flex;\n  padding: 4px; }\n.right .slide-out-label {\n  flex-direction: row-reverse; }\n.slide-out-toggle-container:hover .count-label {\n  border: 1px solid gray; }\n.count-label {\n  -webkit-transform: rotate(90deg);\n  -moz-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  -o-transform: rotate(90deg);\n  width: 100%;\n  min-width: 1.4em;\n  height: 1.5em;\n  text-align: center;\n  margin: 2px; }\n.spacer {\n  width: 8px;\n  height: 2em;\n  border-right: 1px dashed gray; }\n.dropdown-pane .slideout-list {\n  max-height: 200px;\n  overflow: auto;\n  min-width: 10em; }\n@media (min-width: 576px) {\n  .slide-out-content-container {\n    max-width: 500px; } }\n.warning-message {\n  position: fixed;\n  top: calc(100% - 50px);\n  left: 50px; }\n"

/***/ }),

/***/ "./src/app/widget/slide-out/slide-out.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/widget/slide-out/slide-out.component.ts ***!
  \*********************************************************/
/*! exports provided: SlideOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideOutComponent", function() { return SlideOutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dialog_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog-service.service */ "./src/app/widget/slide-out/dialog-service.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/*
* Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
*
* The software and information contained herein are copyrighted and
* proprietary to AngBoot Technology Corp. This software is furnished
* pursuant to a written license agreement and may be used, copied,
* transmitted, and stored only in accordance with the terms of such
* license and with the inclusion of the above copyright notice. Please
* refer to the file "COPYRIGHT" for further copyright and licensing
* information. This software and information or any other copies
* thereof may not be provided or otherwise made available to any other
* person.
*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SlideOutComponent = /** @class */ (function () {
    function SlideOutComponent(dialogService, renderer) {
        this.dialogService = dialogService;
        this.renderer = renderer;
        this.title = "";
        this.keyboard = true;
        this.size = null;
        this.side = "left";
        this.windowClass = null;
        this.changedByOthers = false;
        this.dismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.visible = true;
        this.open = true;
        this.explicitWidth = null;
        this.resizeX = null;
        this.resizeW = null;
        // z-index, under modal 1050, and top slideout 10490
        this.zIndex = 10480;
    }
    SlideOutComponent.prototype.setOnTop = function (onTop) {
        this.zIndex = onTop ? 10490 : 10480;
    };
    SlideOutComponent.prototype.isOnTop = function () {
        return this.zIndex > 10480;
    };
    SlideOutComponent.prototype.isSlideoutOnTop = function (idx) {
        return this.dialogService.isSlideoutOnTop(idx);
    };
    SlideOutComponent.prototype.setExpanded = function (expanded) {
        this.open = expanded;
    };
    SlideOutComponent.prototype.isExpanded = function () {
        return this.open;
    };
    SlideOutComponent.prototype.toggle = function () {
        this.open = !this.open;
    };
    Object.defineProperty(SlideOutComponent.prototype, "sizeClass", {
        get: function () {
            return this.size ? "modal-" + this.size : null;
        },
        enumerable: true,
        configurable: true
    });
    SlideOutComponent.prototype.escKey = function (event) {
        if (this.keyboard && !event.defaultPrevented && this.dialogService.openPopups == 0) {
            this.dismissComponent(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC);
        }
    };
    SlideOutComponent.prototype.dismissComponent = function (reason) {
        this.dismiss.emit(reason);
    };
    SlideOutComponent.prototype.getCurrentSlideouts = function () {
        return this.dialogService.getCurrentSlideOuts();
    };
    SlideOutComponent.prototype.dismissAll = function () {
        this.dialogService.dismissAllSlideouts();
    };
    SlideOutComponent.prototype.showSlideout = function (idx) {
        this.dialogService.showSlideout(idx);
    };
    SlideOutComponent.prototype.startResize = function (event) {
        var _this = this;
        this.resizeX = event.pageX;
        this.explicitWidth = this.contentContainer.nativeElement.getBoundingClientRect().width;
        this.resizeW = this.explicitWidth;
        this.resizeListener = this.renderer.listen("document", "mousemove", function (evt) {
            _this.explicitWidth = _this.resizeW + evt.pageX - _this.resizeX;
            evt.preventDefault();
        });
        this.resizeEndListener = this.renderer.listen("document", "mouseup", function () {
            _this.resizeListener();
            _this.resizeEndListener();
        });
    };
    SlideOutComponent.prototype.renameTitle = function (oldObjectId, newObjectId) {
        if (!!newObjectId && !!this.title) {
            this.title = this.title.replace(oldObjectId, newObjectId);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SlideOutComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SlideOutComponent.prototype, "keyboard", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SlideOutComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class"), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SlideOutComponent.prototype, "side", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SlideOutComponent.prototype, "windowClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SlideOutComponent.prototype, "changedByOthers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SlideOutComponent.prototype, "dismiss", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("contentContainer"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SlideOutComponent.prototype, "contentContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("style.z-index"),
        __metadata("design:type", Object)
    ], SlideOutComponent.prototype, "zIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("document:keyup.esc", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SlideOutComponent.prototype, "escKey", null);
    SlideOutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "slide-out",
            template: __webpack_require__(/*! ./slide-out.component.html */ "./src/app/widget/slide-out/slide-out.component.html"),
            styles: [__webpack_require__(/*! ./slide-out.component.scss */ "./src/app/widget/slide-out/slide-out.component.scss")]
        }),
        __metadata("design:paramtypes", [_dialog_service_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], SlideOutComponent);
    return SlideOutComponent;
}());



/***/ }),

/***/ "./src/app/widget/slide-out/slide-out.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/widget/slide-out/slide-out.service.ts ***!
  \*******************************************************/
/*! exports provided: SlideOutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideOutService", function() { return SlideOutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_modal_modal_backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/modal/modal-backdrop */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_util_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/util/popup */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/popup.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_services_ui_context_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/services/ui-context.service */ "./src/app/common/services/ui-context.service.ts");
/* harmony import */ var _common_util_gui_tool__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/util/gui-tool */ "./src/app/common/util/gui-tool.ts");
/* harmony import */ var _slide_out_ref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slide-out-ref */ "./src/app/widget/slide-out/slide-out-ref.ts");
/* harmony import */ var _slide_out_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slide-out.component */ "./src/app/widget/slide-out/slide-out.component.ts");
/*
* Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
*
* The software and information contained herein are copyrighted and
* proprietary to AngBoot Technology Corp. This software is furnished
* pursuant to a written license agreement and may be used, copied,
* transmitted, and stored only in accordance with the terms of such
* license and with the inclusion of the above copyright notice. Please
* refer to the file "COPYRIGHT" for further copyright and licensing
* information. This software and information or any other copies
* thereof may not be provided or otherwise made available to any other
* person.
*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * The NgbModal service equivalent for the slide out component.
 */
var SlideOutService = /** @class */ (function () {
    function SlideOutService(factoryResolver, applicationRef, uiContext) {
        this.factoryResolver = factoryResolver;
        this.applicationRef = applicationRef;
        this.uiContext = uiContext;
        this.slideContainer = factoryResolver.resolveComponentFactory(_slide_out_component__WEBPACK_IMPORTED_MODULE_8__["SlideOutComponent"]);
    }
    /**
     * Method equivalent to the modal open method.
     * Note: Even though it takes the same options as modals, not all options make sense
     * for slide outs and will therefore be ignored.
     */
    SlideOutService.prototype.open = function (content, options, injector) {
        var containerSelector = options.container || "body";
        var containerCandidates = document.querySelectorAll(containerSelector);
        var containerEl = null;
        // Don't check the layout box if only one element is found.
        if (containerCandidates.length === 1) {
            containerEl = containerCandidates.item(0);
        }
        else {
            for (var i = 0; i < containerCandidates.length; i++) {
                var containerCandidate = containerCandidates.item(i);
                if (_common_util_gui_tool__WEBPACK_IMPORTED_MODULE_6__["GuiTool"].hasLayoutBox(containerCandidate)) {
                    containerEl = containerCandidate;
                    break;
                }
            }
        }
        if (containerEl == null) {
            throw new Error("No valid container found for selector " + containerSelector);
        }
        var activeModal = new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]();
        var contentRef = this.getContentRef(options.injector || injector, content, activeModal);
        var slideCon = this.slideContainer.create(injector, contentRef.nodes);
        this.applicationRef.attachView(slideCon.hostView);
        var backdropFactory = this.factoryResolver.resolveComponentFactory(_ng_bootstrap_ng_bootstrap_modal_modal_backdrop__WEBPACK_IMPORTED_MODULE_2__["NgbModalBackdrop"]);
        var backdropCmptRef = options.backdrop == "static" ? backdropFactory.create(injector) : null;
        if (!!backdropCmptRef) {
            this.applicationRef.attachView(backdropCmptRef.hostView);
            containerEl.appendChild(backdropCmptRef.location.nativeElement);
        }
        containerEl.appendChild(slideCon.location.nativeElement);
        setTimeout(function () {
            var title = options.title;
            if (!title) {
                contentRef.nodes.forEach(function (nodes) { return nodes.forEach(function (node) {
                    if (!title && node && node.querySelector) {
                        var titleNode = node.querySelector(".modal-title");
                        if (titleNode) {
                            title = titleNode.innerHTML;
                            if (options.objectId) {
                                title = options.objectId.substring(options.objectId.lastIndexOf("/")) +
                                    " " + title;
                            }
                        }
                    }
                }); });
            }
            if (title) {
                slideCon.instance.title = title;
            }
        }, 200);
        var slideRef = new _slide_out_ref__WEBPACK_IMPORTED_MODULE_7__["SlideOutRef"](slideCon, contentRef, backdropCmptRef, options.objectId, this.uiContext.getCurrentSheetId());
        activeModal.close = function (result) { slideRef.close(result); };
        activeModal.dismiss = function (reason) { slideRef.dismiss(reason); };
        this.applyOptions(slideCon.instance, options);
        return slideRef;
    };
    SlideOutService.prototype.applyOptions = function (tabs, options) {
        ["keyboard", "size", "windowClass", "side"].forEach(function (optionName) {
            if (options[optionName]) {
                tabs[optionName] = options[optionName];
            }
        });
    };
    SlideOutService.prototype.getContentRef = function (contentInjector, content, context) {
        if (!content) {
            return new _ng_bootstrap_ng_bootstrap_util_popup__WEBPACK_IMPORTED_MODULE_3__["ContentRef"]([]);
        }
        else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            var viewRef = content.createEmbeddedView(context);
            this.applicationRef.attachView(viewRef);
            return new _ng_bootstrap_ng_bootstrap_util_popup__WEBPACK_IMPORTED_MODULE_3__["ContentRef"]([viewRef.rootNodes], viewRef);
        }
        else if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isString"])(content)) {
            return new _ng_bootstrap_ng_bootstrap_util_popup__WEBPACK_IMPORTED_MODULE_3__["ContentRef"]([[document.createTextNode("" + content)]]);
        }
        else {
            var contentCmptFactory = this.factoryResolver.resolveComponentFactory(content);
            var modalContentInjector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({ providers: [{ provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"], useValue: context }], parent: contentInjector });
            var componentRef = contentCmptFactory.create(modalContentInjector);
            this.applicationRef.attachView(componentRef.hostView);
            return new _ng_bootstrap_ng_bootstrap_util_popup__WEBPACK_IMPORTED_MODULE_3__["ContentRef"]([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
    };
    SlideOutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _common_services_ui_context_service__WEBPACK_IMPORTED_MODULE_5__["UIContextService"]])
    ], SlideOutService);
    return SlideOutService;
}());



/***/ }),

/***/ "./src/app/widget/split/split-pane.component.css":
/*!*******************************************************!*\
  !*** ./src/app/widget/split/split-pane.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".split-pane-container.horizontal {\n    height: 100%;\n}\n\n.split-pane-container.vertical {\n  width: 100%;\n  height: 100%;\n}\n\n.gutter {\n  background: #eee no-repeat 50%;\n}\n\n.gutter.gutter-horizontal {\n  height: 100%;\n  float: left;\n  cursor: col-resize;\n}\n\n.gutter.gutter-vertical {\n  cursor: row-resize;\n}\n"

/***/ }),

/***/ "./src/app/widget/split/split-pane.component.html":
/*!********************************************************!*\
  !*** ./src/app/widget/split/split-pane.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"split-pane-container\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/widget/split/split-pane.component.ts":
/*!******************************************************!*\
  !*** ./src/app/widget/split/split-pane.component.ts ***!
  \******************************************************/
/*! exports provided: SplitPaneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitPaneComponent", function() { return SplitPaneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Split = __webpack_require__(/*! split.js/dist/split.js */ "./node_modules/split.js/dist/split.js");
var SplitPaneComponent = /** @class */ (function () {
    function SplitPaneComponent(element) {
        this.element = element;
        this.minSize = 100;
        this.gutterSize = 6;
        this.snapOffset = 30;
        this.direction = "horizontal";
        this.cursor = "grabbing";
        this.onDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SplitPaneComponent.prototype.ngOnInit = function () {
        var _this = this;
        var children = [];
        var parent = this.element.nativeElement;
        if (parent.querySelector(".split-pane-container")) {
            parent = parent.querySelector(".split-pane-container");
            if (this.direction === "vertical") {
                parent.classList.add("vertical");
            }
            else {
                parent.classList.add("horizontal");
            }
        }
        for (var i = 0; i < parent.childNodes.length; i++) {
            var childNode = parent.childNodes.item(i);
            if (childNode.nodeType === 1) { // element
                var childElement = childNode;
                childElement.classList.add("split");
                children.push(childElement);
            }
        }
        if (!this.sizes) {
            var size = Math.floor(100 / children.length);
            this.sizes = [];
            for (var i = 0; i < children.length; i++) {
                this.sizes.push(size);
            }
        }
        var config = {
            sizes: this.sizes,
            minSize: this.minSize,
            gutterSize: this.gutterSize,
            snapOffset: this.snapOffset,
            direction: this.direction,
            cursor: this.cursor,
            onDrag: function (event) {
                _this.onDrag.emit(event);
            },
            onDragStart: function (event) {
                _this.onDragStart.emit(event);
            },
            onDragEnd: function (event) {
                _this.onDragEnd.emit(event);
            }
        };
        this.splitInstance = Split(children, config);
    };
    SplitPaneComponent.prototype.setSizes = function (newSizes) {
        this.splitInstance.setSizes(newSizes);
    };
    SplitPaneComponent.prototype.getSizes = function () {
        return this.splitInstance.getSizes();
    };
    SplitPaneComponent.prototype.collapse = function (index) {
        return this.splitInstance.collapse(index);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SplitPaneComponent.prototype, "sizes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SplitPaneComponent.prototype, "minSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SplitPaneComponent.prototype, "gutterSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SplitPaneComponent.prototype, "snapOffset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SplitPaneComponent.prototype, "direction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SplitPaneComponent.prototype, "cursor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SplitPaneComponent.prototype, "onDrag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SplitPaneComponent.prototype, "onDragStart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SplitPaneComponent.prototype, "onDragEnd", void 0);
    SplitPaneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "split-pane",
            template: __webpack_require__(/*! ./split-pane.component.html */ "./src/app/widget/split/split-pane.component.html"),
            styles: [__webpack_require__(/*! ./split-pane.component.css */ "./src/app/widget/split/split-pane.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SplitPaneComponent);
    return SplitPaneComponent;
}());



/***/ }),

/***/ "./src/app/widget/tooltip/tooltip.component.html":
/*!*******************************************************!*\
  !*** ./src/app/widget/tooltip/tooltip.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"contentIsTemplate(); else contentIsString\">\r\n  <div class=\"compact-p\">\r\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n  </div>\r\n</ng-container>\r\n\r\n<ng-template #contentIsString>\r\n  <div class=\"compact-p\">\r\n    <div [ngClass]=\"tooltipCSS\" [innerHTML]=\"content\"></div>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/widget/tooltip/tooltip.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/widget/tooltip/tooltip.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  pointer-events: none; }\n"

/***/ }),

/***/ "./src/app/widget/tooltip/tooltip.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/widget/tooltip/tooltip.component.ts ***!
  \*****************************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Component used to render tooltips.
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !!!! NOT INTENDED for direct use in the template. !!!!!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent(changeRef) {
        this.changeRef = changeRef;
    }
    TooltipComponent.prototype.updateView = function () {
        this.changeRef.detectChanges();
    };
    TooltipComponent.prototype.contentIsTemplate = function () {
        return this.content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipComponent.prototype, "tooltipCSS", void 0);
    TooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "w-tooltip",
            template: __webpack_require__(/*! ./tooltip.component.html */ "./src/app/widget/tooltip/tooltip.component.html"),
            styles: [__webpack_require__(/*! ./tooltip.component.scss */ "./src/app/widget/tooltip/tooltip.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], TooltipComponent);
    return TooltipComponent;
}());



/***/ }),

/***/ "./src/app/widget/tooltip/tooltip.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/widget/tooltip/tooltip.directive.ts ***!
  \*****************************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_data_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/data/point */ "./src/app/common/data/point.ts");
/* harmony import */ var _common_data_rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/data/rectangle */ "./src/app/common/data/rectangle.ts");
/* harmony import */ var _tooltip_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip.service */ "./src/app/widget/tooltip/tooltip.service.ts");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(hostRef, tooltipService, renderer, zone) {
        this.hostRef = hostRef;
        this.tooltipService = tooltipService;
        this.renderer = renderer;
        this.zone = zone;
        this.tooltipCSS = "widget__default-tooltip";
        this.offsetTop = 15;
        this.offsetLeft = 15;
        this.waitTime = 500;
        this.followCursor = false;
        this.disableTooltipOnMousedown = true;
    }
    TooltipDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.hasOwnProperty("wTooltip")) {
            if (!this.wTooltip) {
                this.close();
            }
            else if (this.tooltipShowing()) {
                this.tooltipRef.instance.content = this.getTooltipContent();
            }
            else if (this.mousePosition != null) {
                this.clearTimeout();
                this.timeout = setTimeout(function () { return _this.showTooltip(); }, this.waitTime);
            }
        }
    };
    TooltipDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.disableTooltipOnMousedown) {
            this.mousedownListener = this.renderer.listen(this.hostRef.nativeElement, "mousedown", function () { return _this.mousedown(); });
        }
        this.zone.runOutsideAngular(function () {
            _this.mouseenterListener = _this.renderer.listen(_this.hostRef.nativeElement, "mouseenter", function () {
                _this.clearMousemoveListener();
                _this.clearMouseleaveListener();
                _this.mousemoveListener = _this.renderer.listen(_this.hostRef.nativeElement, "mousemove", function (e) { return _this.mousemove(e); });
                _this.mouseleaveListener = _this.renderer.listen(_this.hostRef.nativeElement, "mouseleave", function (e) { return _this.mouseleave(e); });
            });
        });
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        this.close();
        this.clearMousemoveListener();
        this.clearMouseenterListener();
        this.clearMouseleaveListener();
        this.clearMousedownListener();
    };
    TooltipDirective.prototype.mousedown = function () {
        this.close();
        this.clearMousemoveListener();
    };
    TooltipDirective.prototype.mousemove = function (event) {
        var _this = this;
        if (!this.wTooltip) {
            this.mousePosition = new _common_data_point__WEBPACK_IMPORTED_MODULE_1__["Point"](event.clientX, event.clientY);
            return;
        }
        if (!this.tooltipShowing()) {
            this.mousePosition = new _common_data_point__WEBPACK_IMPORTED_MODULE_1__["Point"](event.clientX, event.clientY);
            this.clearTimeout();
            if (this.waitTime > 0) {
                this.timeout = setTimeout(function () { return _this.showTooltip(); }, this.waitTime);
            }
            else {
                this.showTooltip();
            }
        }
        else if (this.followCursor) {
            this.mousePosition = new _common_data_point__WEBPACK_IMPORTED_MODULE_1__["Point"](event.clientX, event.clientY);
            this.positionTooltipWithinViewport();
        }
    };
    TooltipDirective.prototype.mouseleave = function (event) {
        this.close();
        this.mousePosition = null;
        this.clearMouseleaveListener();
    };
    TooltipDirective.prototype.close = function () {
        if (this.tooltipShowing()) {
            this.tooltipService.removeTooltip(this.tooltipRef);
        }
        this.clearTimeout();
    };
    TooltipDirective.prototype.showTooltip = function () {
        var _this = this;
        if (!this.followCursor) {
            this.clearMousemoveListener();
        }
        var tooltipStr = this.getTooltipContent();
        if (typeof tooltipStr == "string" && !tooltipStr.trim() || tooltipStr == null) {
            return;
        }
        this.tooltipRef = this.tooltipService.createTooltip();
        this.tooltipRef.onDestroy(function () { return _this.tooltipRef = null; });
        var tooltip = this.tooltipRef.instance;
        tooltip.content = tooltipStr;
        tooltip.tooltipCSS = this.tooltipCSS;
        this.positionTooltipWithinViewport();
    };
    TooltipDirective.prototype.positionTooltipWithinViewport = function () {
        if (!!this.tooltipRef && !!this.mousePosition) {
            var tooltipElement = this.tooltipRef.location.nativeElement;
            var container = tooltipElement.parentElement;
            if (!!container) {
                var tooltipBounds = _common_data_rectangle__WEBPACK_IMPORTED_MODULE_2__["Rectangle"].fromClientRect(tooltipElement.getBoundingClientRect());
                var restrictBounds = _common_data_rectangle__WEBPACK_IMPORTED_MODULE_2__["Rectangle"].fromClientRect(container.getBoundingClientRect());
                var naturalRightBound = this.mousePosition.x + this.offsetLeft + tooltipBounds.width;
                var naturalBottomBound = this.mousePosition.y + this.offsetTop + tooltipBounds.height;
                var tooltipIntersectsRightBoundary = naturalRightBound > restrictBounds.x +
                    restrictBounds.width;
                var tooltipIntersectsBottomBoundary = naturalBottomBound > restrictBounds.y +
                    restrictBounds.height;
                var xPosition = void 0, yPosition = void 0;
                if (tooltipIntersectsRightBoundary) {
                    xPosition = restrictBounds.x + restrictBounds.width - tooltipBounds.width;
                }
                else {
                    xPosition = this.mousePosition.x + this.offsetLeft;
                }
                if (tooltipIntersectsBottomBoundary && tooltipIntersectsRightBoundary) {
                    yPosition = this.mousePosition.y - this.offsetTop - tooltipBounds.height;
                }
                else if (tooltipIntersectsBottomBoundary) {
                    yPosition = restrictBounds.y + restrictBounds.height - tooltipBounds.height;
                }
                else {
                    yPosition = this.mousePosition.y + this.offsetTop;
                }
                xPosition = Math.max(xPosition, 0);
                yPosition = Math.max(yPosition, 0);
                var tooltip = this.tooltipRef.instance;
                this.renderer.setStyle(tooltipElement, "top", yPosition + "px");
                this.renderer.setStyle(tooltipElement, "left", xPosition + "px");
                tooltip.updateView();
            }
        }
    };
    TooltipDirective.prototype.tooltipShowing = function () {
        return !!this.tooltipRef;
    };
    TooltipDirective.prototype.clearTimeout = function () {
        if (this.timeout != null) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    };
    TooltipDirective.prototype.clearMousemoveListener = function () {
        if (!!this.mousemoveListener) {
            this.mousemoveListener();
            this.mousemoveListener = null;
        }
    };
    TooltipDirective.prototype.clearMouseenterListener = function () {
        if (!!this.mouseenterListener) {
            this.mouseenterListener();
            this.mouseenterListener = null;
        }
    };
    TooltipDirective.prototype.clearMouseleaveListener = function () {
        if (!!this.mouseleaveListener) {
            this.mouseleaveListener();
            this.mouseleaveListener = null;
        }
    };
    TooltipDirective.prototype.clearMousedownListener = function () {
        if (!!this.mousedownListener) {
            this.mousedownListener();
            this.mousedownListener = null;
        }
    };
    TooltipDirective.prototype.getTooltipContent = function () {
        return (this.wTooltip instanceof Function) ? this.wTooltip() : this.wTooltip;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "wTooltip", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "tooltipCSS", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "offsetTop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "offsetLeft", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "waitTime", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "followCursor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "disableTooltipOnMousedown", void 0);
    TooltipDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[wTooltip]",
            exportAs: "wTooltip"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _tooltip_service__WEBPACK_IMPORTED_MODULE_3__["TooltipService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], TooltipDirective);
    return TooltipDirective;
}());



/***/ }),

/***/ "./src/app/widget/tooltip/tooltip.service.ts":
/*!***************************************************!*\
  !*** ./src/app/widget/tooltip/tooltip.service.ts ***!
  \***************************************************/
/*! exports provided: TooltipService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipService", function() { return TooltipService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tooltip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip.component */ "./src/app/widget/tooltip/tooltip.component.ts");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var TooltipService = /** @class */ (function () {
    function TooltipService(applicationRef, injector, componentFactoryResolver, document) {
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.componentFactoryResolver = componentFactoryResolver;
        this.document = document;
        this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(_tooltip_component__WEBPACK_IMPORTED_MODULE_2__["TooltipComponent"]);
    }
    TooltipService.prototype.createTooltip = function () {
        if (this.currentTooltip) {
            this.currentTooltip.destroy();
            this.currentTooltip = null;
        }
        var tooltipRef = this.tooltipFactory.create(this.injector);
        this.applicationRef.attachView(tooltipRef.hostView);
        this.document.body.appendChild(tooltipRef.location.nativeElement);
        return this.currentTooltip = tooltipRef;
    };
    TooltipService.prototype.removeTooltip = function (tooltipRef) {
        var tooltipElement = tooltipRef.location.nativeElement;
        if (!!tooltipElement.parentNode) {
            tooltipElement.parentNode.removeChild(tooltipElement);
        }
        tooltipRef.destroy();
    };
    TooltipService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], Object])
    ], TooltipService);
    return TooltipService;
}());



/***/ }),

/***/ "./src/app/widget/tree/node/tree-node.component.html":
/*!***********************************************************!*\
  !*** ./src/app/widget/tree/node/tree-node.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/widget/tree/node/tree-node.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/widget/tree/node/tree-node.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/widget/tree/node/tree-node.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/widget/tree/node/tree-node.component.ts ***!
  \*********************************************************/
/*! exports provided: TreeNodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeComponent", function() { return TreeNodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TreeNodeComponent = /** @class */ (function () {
    function TreeNodeComponent() {
    }
    TreeNodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tree-node",
            template: __webpack_require__(/*! ./tree-node.component.html */ "./src/app/widget/tree/node/tree-node.component.html"),
            styles: [__webpack_require__(/*! ./tree-node.component.scss */ "./src/app/widget/tree/node/tree-node.component.scss")]
        })
    ], TreeNodeComponent);
    return TreeNodeComponent;
}());



/***/ }),

/***/ "./src/app/widget/tree/repository-tree.component.css":
/*!***********************************************************!*\
  !*** ./src/app/widget/tree/repository-tree.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".repository-body {\n  background: aqua;\n}\n"

/***/ }),

/***/ "./src/app/widget/tree/repository-tree.component.html":
/*!************************************************************!*\
  !*** ./src/app/widget/tree/repository-tree.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"repository-body\">\n  Repository-tree\n</div>\n"

/***/ }),

/***/ "./src/app/widget/tree/repository-tree.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/widget/tree/repository-tree.component.ts ***!
  \**********************************************************/
/*! exports provided: RepositoryTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoryTreeComponent", function() { return RepositoryTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RepositoryTreeComponent = /** @class */ (function () {
    function RepositoryTreeComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RepositoryTreeComponent.prototype, "root", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RepositoryTreeComponent.prototype, "showRoot", void 0);
    RepositoryTreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "repository-tree",
            template: __webpack_require__(/*! ./repository-tree.component.html */ "./src/app/widget/tree/repository-tree.component.html"),
            styles: [__webpack_require__(/*! ./repository-tree.component.css */ "./src/app/widget/tree/repository-tree.component.css")]
        })
    ], RepositoryTreeComponent);
    return RepositoryTreeComponent;
}());



/***/ }),

/***/ "./src/app/widget/widget.module.ts":
/*!*****************************************!*\
  !*** ./src/app/widget/widget.module.ts ***!
  \*****************************************/
/*! exports provided: WidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetModule", function() { return WidgetModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _index_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.components */ "./src/app/widget/index.components.ts");
/* harmony import */ var _index_directives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.directives */ "./src/app/widget/index.directives.ts");
/* harmony import */ var _index_pipes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.pipes */ "./src/app/widget/index.pipes.ts");
/* harmony import */ var _services_model_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/model.service */ "./src/app/widget/services/model.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _dom_service_dom_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom-service/dom.service */ "./src/app/widget/dom-service/dom.service.ts");
/* harmony import */ var _fixed_dropdown_dropdown_stack_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fixed-dropdown/dropdown-stack.service */ "./src/app/widget/fixed-dropdown/dropdown-stack.service.ts");
/* harmony import */ var _slide_out_slide_out_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./slide-out/slide-out.service */ "./src/app/widget/slide-out/slide-out.service.ts");
/* harmony import */ var _fixed_dropdown_fixed_dropdown_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fixed-dropdown/fixed-dropdown.service */ "./src/app/widget/fixed-dropdown/fixed-dropdown.service.ts");
/* harmony import */ var _tooltip_tooltip_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tooltip/tooltip.service */ "./src/app/widget/tooltip/tooltip.service.ts");
/* harmony import */ var _services_debounce_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/debounce.service */ "./src/app/widget/services/debounce.service.ts");
/* harmony import */ var _slide_out_slide_out_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./slide-out/slide-out.component */ "./src/app/widget/slide-out/slide-out.component.ts");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "./src/app/widget/tooltip/tooltip.component.ts");
/* harmony import */ var _dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dialog/message-dialog.component */ "./src/app/widget/dialog/message-dialog.component.ts");
/* harmony import */ var _fixed_dropdown_fixed_dropdown_contextmenu_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fixed-dropdown/fixed-dropdown-contextmenu.component */ "./src/app/widget/fixed-dropdown/fixed-dropdown-contextmenu.component.ts");
/* harmony import */ var _fixed_dropdown_fixed_dropdown_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fixed-dropdown/fixed-dropdown.component */ "./src/app/widget/fixed-dropdown/fixed-dropdown.component.ts");
/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var WidgetModule = /** @class */ (function () {
    function WidgetModule() {
    }
    WidgetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot()
            ],
            declarations: _index_components__WEBPACK_IMPORTED_MODULE_3__["MODULE_COMPONENTS"].concat(_index_pipes__WEBPACK_IMPORTED_MODULE_5__["MODULE_PIPES"], _index_directives__WEBPACK_IMPORTED_MODULE_4__["MODULE_DIRECTIVES"]),
            entryComponents: [
                _fixed_dropdown_fixed_dropdown_component__WEBPACK_IMPORTED_MODULE_18__["FixedDropdownComponent"],
                _fixed_dropdown_fixed_dropdown_contextmenu_component__WEBPACK_IMPORTED_MODULE_17__["FixedDropdownContextmenuComponent"],
                _dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_16__["MessageDialog"],
                _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_15__["TooltipComponent"],
                _slide_out_slide_out_component__WEBPACK_IMPORTED_MODULE_14__["SlideOutComponent"]
            ],
            exports: _index_components__WEBPACK_IMPORTED_MODULE_3__["MODULE_COMPONENTS"].concat(_index_pipes__WEBPACK_IMPORTED_MODULE_5__["MODULE_PIPES"], _index_directives__WEBPACK_IMPORTED_MODULE_4__["MODULE_DIRECTIVES"]),
            providers: [
                _fixed_dropdown_fixed_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["FixedDropdownService"],
                _fixed_dropdown_dropdown_stack_service__WEBPACK_IMPORTED_MODULE_9__["DropdownStackService"],
                _services_model_service__WEBPACK_IMPORTED_MODULE_6__["ModelService"],
                _slide_out_slide_out_service__WEBPACK_IMPORTED_MODULE_10__["SlideOutService"],
                _tooltip_tooltip_service__WEBPACK_IMPORTED_MODULE_12__["TooltipService"],
                _services_debounce_service__WEBPACK_IMPORTED_MODULE_13__["DebounceService"],
                _dom_service_dom_service__WEBPACK_IMPORTED_MODULE_8__["DomService"]
            ]
        })
    ], WidgetModule);
    return WidgetModule;
}());



/***/ })

}]);
//# sourceMappingURL=portal-portal-app-module.js.map