'use strict';

var MotorCortex = require('@donkeyclip/motorcortex');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var MotorCortex__default = /*#__PURE__*/_interopDefaultLegacy(MotorCortex);

function ownKeys$5(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$5(Object(source), !0).forEach(function (key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}

function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1(o);
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$1(o, p);
}

function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$1(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized$1(self);
}

function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf$1(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$1(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn$1(this, result);
  };
}

var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check$1 = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


var global$V = // eslint-disable-next-line es/no-global-this -- safe
check$1(typeof globalThis == 'object' && globalThis) || check$1(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check$1(typeof self == 'object' && self) || check$1(typeof commonjsGlobal$1 == 'object' && commonjsGlobal$1) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

var objectGetOwnPropertyDescriptor$1 = {};

var fails$s = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$r = fails$s; // Detect IE8's incomplete defineProperty implementation

var descriptors$1 = !fails$r(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});

var fails$q = fails$s;
var functionBindNative$1 = !fails$q(function () {
  var test = function () {
    /* empty */
  }.bind(); // eslint-disable-next-line no-prototype-builtins -- safe


  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$4 = functionBindNative$1;
var call$d = Function.prototype.call;
var functionCall$1 = NATIVE_BIND$4 ? call$d.bind(call$d) : function () {
  return call$d.apply(call$d, arguments);
};

var objectPropertyIsEnumerable$1 = {};

var $propertyIsEnumerable$1 = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG$1 = getOwnPropertyDescriptor$3 && !$propertyIsEnumerable$1.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

objectPropertyIsEnumerable$1.f = NASHORN_BUG$1 ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$3(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable$1;

var createPropertyDescriptor$7 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var NATIVE_BIND$3 = functionBindNative$1;
var FunctionPrototype$4 = Function.prototype;
var bind$1 = FunctionPrototype$4.bind;
var call$c = FunctionPrototype$4.call;
var uncurryThis$s = NATIVE_BIND$3 && bind$1.bind(call$c, call$c);
var functionUncurryThis$1 = NATIVE_BIND$3 ? function (fn) {
  return fn && uncurryThis$s(fn);
} : function (fn) {
  return fn && function () {
    return call$c.apply(fn, arguments);
  };
};

var uncurryThis$r = functionUncurryThis$1;
var toString$8 = uncurryThis$r({}.toString);
var stringSlice$5 = uncurryThis$r(''.slice);

var classofRaw$3 = function (it) {
  return stringSlice$5(toString$8(it), 8, -1);
};

var global$U = global$V;
var uncurryThis$q = functionUncurryThis$1;
var fails$p = fails$s;
var classof$a = classofRaw$3;
var Object$8 = global$U.Object;
var split$1 = uncurryThis$q(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

var indexedObject$1 = fails$p(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object$8('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$a(it) == 'String' ? split$1(it, '') : Object$8(it);
} : Object$8;

var global$T = global$V;
var TypeError$i = global$T.TypeError; // `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible

var requireObjectCoercible$8 = function (it) {
  if (it == undefined) throw TypeError$i("Can't call method on " + it);
  return it;
};

var IndexedObject$2 = indexedObject$1;
var requireObjectCoercible$7 = requireObjectCoercible$8;

var toIndexedObject$9 = function (it) {
  return IndexedObject$2(requireObjectCoercible$7(it));
};

// https://tc39.es/ecma262/#sec-iscallable

var isCallable$o = function (argument) {
  return typeof argument == 'function';
};

var isCallable$n = isCallable$o;

var isObject$g = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$n(it);
};

var global$S = global$V;
var isCallable$m = isCallable$o;

var aFunction$1 = function (argument) {
  return isCallable$m(argument) ? argument : undefined;
};

var getBuiltIn$a = function (namespace, method) {
  return arguments.length < 2 ? aFunction$1(global$S[namespace]) : global$S[namespace] && global$S[namespace][method];
};

var uncurryThis$p = functionUncurryThis$1;
var objectIsPrototypeOf$1 = uncurryThis$p({}.isPrototypeOf);

var getBuiltIn$9 = getBuiltIn$a;
var engineUserAgent$1 = getBuiltIn$9('navigator', 'userAgent') || '';

var global$R = global$V;
var userAgent$1 = engineUserAgent$1;
var process$1 = global$R.process;
var Deno$1 = global$R.Deno;
var versions$1 = process$1 && process$1.versions || Deno$1 && Deno$1.version;
var v8$1 = versions$1 && versions$1.v8;
var match$1, version$3;

if (v8$1) {
  match$1 = v8$1.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us

  version$3 = match$1[0] > 0 && match$1[0] < 4 ? 1 : +(match$1[0] + match$1[1]);
} // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0


if (!version$3 && userAgent$1) {
  match$1 = userAgent$1.match(/Edge\/(\d+)/);

  if (!match$1 || match$1[1] >= 74) {
    match$1 = userAgent$1.match(/Chrome\/(\d+)/);
    if (match$1) version$3 = +match$1[1];
  }
}

var engineV8Version$1 = version$3;

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION$5 = engineV8Version$1;
var fails$o = fails$s; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

var nativeSymbol$1 = !!Object.getOwnPropertySymbols && !fails$o(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION$5 && V8_VERSION$5 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$3 = nativeSymbol$1;
var useSymbolAsUid$1 = NATIVE_SYMBOL$3 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

var global$Q = global$V;
var getBuiltIn$8 = getBuiltIn$a;
var isCallable$l = isCallable$o;
var isPrototypeOf$1 = objectIsPrototypeOf$1;
var USE_SYMBOL_AS_UID$3 = useSymbolAsUid$1;
var Object$7 = global$Q.Object;
var isSymbol$5 = USE_SYMBOL_AS_UID$3 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$8('Symbol');
  return isCallable$l($Symbol) && isPrototypeOf$1($Symbol.prototype, Object$7(it));
};

var global$P = global$V;
var String$6 = global$P.String;

var tryToString$4 = function (argument) {
  try {
    return String$6(argument);
  } catch (error) {
    return 'Object';
  }
};

var global$O = global$V;
var isCallable$k = isCallable$o;
var tryToString$3 = tryToString$4;
var TypeError$h = global$O.TypeError; // `Assert: IsCallable(argument) is true`

var aCallable$3 = function (argument) {
  if (isCallable$k(argument)) return argument;
  throw TypeError$h(tryToString$3(argument) + ' is not a function');
};

var aCallable$2 = aCallable$3; // `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod

var getMethod$4 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable$2(func);
};

var global$N = global$V;
var call$b = functionCall$1;
var isCallable$j = isCallable$o;
var isObject$f = isObject$g;
var TypeError$g = global$N.TypeError; // `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive

var ordinaryToPrimitive$3 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$j(fn = input.toString) && !isObject$f(val = call$b(fn, input))) return val;
  if (isCallable$j(fn = input.valueOf) && !isObject$f(val = call$b(fn, input))) return val;
  if (pref !== 'string' && isCallable$j(fn = input.toString) && !isObject$f(val = call$b(fn, input))) return val;
  throw TypeError$g("Can't convert object to primitive value");
};

var shared$8 = {exports: {}};

var global$M = global$V; // eslint-disable-next-line es/no-object-defineproperty -- safe

var defineProperty$1 = Object.defineProperty;

var setGlobal$7 = function (key, value) {
  try {
    defineProperty$1(global$M, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global$M[key] = value;
  }

  return value;
};

var global$L = global$V;
var setGlobal$6 = setGlobal$7;
var SHARED$1 = '__core-js_shared__';
var store$7 = global$L[SHARED$1] || setGlobal$6(SHARED$1, {});
var sharedStore$1 = store$7;

var store$6 = sharedStore$1;
(shared$8.exports = function (key, value) {
  return store$6[key] || (store$6[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.21.0',
  mode: 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.21.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var global$K = global$V;
var requireObjectCoercible$6 = requireObjectCoercible$8;
var Object$6 = global$K.Object; // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject

var toObject$5 = function (argument) {
  return Object$6(requireObjectCoercible$6(argument));
};

var uncurryThis$o = functionUncurryThis$1;
var toObject$4 = toObject$5;
var hasOwnProperty$1 = uncurryThis$o({}.hasOwnProperty); // `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty

var hasOwnProperty_1$1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty$1(toObject$4(it), key);
};

var uncurryThis$n = functionUncurryThis$1;
var id$1 = 0;
var postfix$1 = Math.random();
var toString$7 = uncurryThis$n(1.0.toString);

var uid$5 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$7(++id$1 + postfix$1, 36);
};

var global$J = global$V;
var shared$7 = shared$8.exports;
var hasOwn$d = hasOwnProperty_1$1;
var uid$4 = uid$5;
var NATIVE_SYMBOL$2 = nativeSymbol$1;
var USE_SYMBOL_AS_UID$2 = useSymbolAsUid$1;
var WellKnownSymbolsStore$1 = shared$7('wks');
var Symbol$2 = global$J.Symbol;
var symbolFor$1 = Symbol$2 && Symbol$2['for'];
var createWellKnownSymbol$1 = USE_SYMBOL_AS_UID$2 ? Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$4;

var wellKnownSymbol$g = function (name) {
  if (!hasOwn$d(WellKnownSymbolsStore$1, name) || !(NATIVE_SYMBOL$2 || typeof WellKnownSymbolsStore$1[name] == 'string')) {
    var description = 'Symbol.' + name;

    if (NATIVE_SYMBOL$2 && hasOwn$d(Symbol$2, name)) {
      WellKnownSymbolsStore$1[name] = Symbol$2[name];
    } else if (USE_SYMBOL_AS_UID$2 && symbolFor$1) {
      WellKnownSymbolsStore$1[name] = symbolFor$1(description);
    } else {
      WellKnownSymbolsStore$1[name] = createWellKnownSymbol$1(description);
    }
  }

  return WellKnownSymbolsStore$1[name];
};

var global$I = global$V;
var call$a = functionCall$1;
var isObject$e = isObject$g;
var isSymbol$4 = isSymbol$5;
var getMethod$3 = getMethod$4;
var ordinaryToPrimitive$2 = ordinaryToPrimitive$3;
var wellKnownSymbol$f = wellKnownSymbol$g;
var TypeError$f = global$I.TypeError;
var TO_PRIMITIVE$1 = wellKnownSymbol$f('toPrimitive'); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive

var toPrimitive$3 = function (input, pref) {
  if (!isObject$e(input) || isSymbol$4(input)) return input;
  var exoticToPrim = getMethod$3(input, TO_PRIMITIVE$1);
  var result;

  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$a(exoticToPrim, input, pref);
    if (!isObject$e(result) || isSymbol$4(result)) return result;
    throw TypeError$f("Can't convert object to primitive value");
  }

  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive$2(input, pref);
};

var toPrimitive$2 = toPrimitive$3;
var isSymbol$3 = isSymbol$5; // `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey

var toPropertyKey$7 = function (argument) {
  var key = toPrimitive$2(argument, 'string');
  return isSymbol$3(key) ? key : key + '';
};

var global$H = global$V;
var isObject$d = isObject$g;
var document$2 = global$H.document; // typeof document.createElement is 'object' in old IE

var EXISTS$3 = isObject$d(document$2) && isObject$d(document$2.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$3 ? document$2.createElement(it) : {};
};

var DESCRIPTORS$c = descriptors$1;
var fails$n = fails$s;
var createElement$1 = documentCreateElement$2; // Thanks to IE8 for its funny defineProperty

var ie8DomDefine$1 = !DESCRIPTORS$c && !fails$n(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

var DESCRIPTORS$b = descriptors$1;
var call$9 = functionCall$1;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable$1;
var createPropertyDescriptor$6 = createPropertyDescriptor$7;
var toIndexedObject$8 = toIndexedObject$9;
var toPropertyKey$6 = toPropertyKey$7;
var hasOwn$c = hasOwnProperty_1$1;
var IE8_DOM_DEFINE$3 = ie8DomDefine$1; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

objectGetOwnPropertyDescriptor$1.f = DESCRIPTORS$b ? $getOwnPropertyDescriptor$3 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$8(O);
  P = toPropertyKey$6(P);
  if (IE8_DOM_DEFINE$3) try {
    return $getOwnPropertyDescriptor$3(O, P);
  } catch (error) {
    /* empty */
  }
  if (hasOwn$c(O, P)) return createPropertyDescriptor$6(!call$9(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var objectDefineProperty$1 = {};

var DESCRIPTORS$a = descriptors$1;
var fails$m = fails$s; // V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334

var v8PrototypeDefineBug$1 = DESCRIPTORS$a && fails$m(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () {
    /* empty */
  }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var global$G = global$V;
var isObject$c = isObject$g;
var String$5 = global$G.String;
var TypeError$e = global$G.TypeError; // `Assert: Type(argument) is Object`

var anObject$b = function (argument) {
  if (isObject$c(argument)) return argument;
  throw TypeError$e(String$5(argument) + ' is not an object');
};

var global$F = global$V;
var DESCRIPTORS$9 = descriptors$1;
var IE8_DOM_DEFINE$2 = ie8DomDefine$1;
var V8_PROTOTYPE_DEFINE_BUG$2 = v8PrototypeDefineBug$1;
var anObject$a = anObject$b;
var toPropertyKey$5 = toPropertyKey$7;
var TypeError$d = global$F.TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe

var $defineProperty$1 = Object.defineProperty; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;
var ENUMERABLE$1 = 'enumerable';
var CONFIGURABLE$3 = 'configurable';
var WRITABLE$1 = 'writable'; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

objectDefineProperty$1.f = DESCRIPTORS$9 ? V8_PROTOTYPE_DEFINE_BUG$2 ? function defineProperty(O, P, Attributes) {
  anObject$a(O);
  P = toPropertyKey$5(P);
  anObject$a(Attributes);

  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE$1 in Attributes && !Attributes[WRITABLE$1]) {
    var current = $getOwnPropertyDescriptor$2(O, P);

    if (current && current[WRITABLE$1]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$3 in Attributes ? Attributes[CONFIGURABLE$3] : current[CONFIGURABLE$3],
        enumerable: ENUMERABLE$1 in Attributes ? Attributes[ENUMERABLE$1] : current[ENUMERABLE$1],
        writable: false
      };
    }
  }

  return $defineProperty$1(O, P, Attributes);
} : $defineProperty$1 : function defineProperty(O, P, Attributes) {
  anObject$a(O);
  P = toPropertyKey$5(P);
  anObject$a(Attributes);
  if (IE8_DOM_DEFINE$2) try {
    return $defineProperty$1(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError$d('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$8 = descriptors$1;
var definePropertyModule$6 = objectDefineProperty$1;
var createPropertyDescriptor$5 = createPropertyDescriptor$7;
var createNonEnumerableProperty$8 = DESCRIPTORS$8 ? function (object, key, value) {
  return definePropertyModule$6.f(object, key, createPropertyDescriptor$5(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var redefine$4 = {exports: {}};

var uncurryThis$m = functionUncurryThis$1;
var isCallable$i = isCallable$o;
var store$5 = sharedStore$1;
var functionToString$1 = uncurryThis$m(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (!isCallable$i(store$5.inspectSource)) {
  store$5.inspectSource = function (it) {
    return functionToString$1(it);
  };
}

var inspectSource$7 = store$5.inspectSource;

var global$E = global$V;
var isCallable$h = isCallable$o;
var inspectSource$6 = inspectSource$7;
var WeakMap$3 = global$E.WeakMap;
var nativeWeakMap$1 = isCallable$h(WeakMap$3) && /native code/.test(inspectSource$6(WeakMap$3));

var shared$6 = shared$8.exports;
var uid$3 = uid$5;
var keys$1 = shared$6('keys');

var sharedKey$4 = function (key) {
  return keys$1[key] || (keys$1[key] = uid$3(key));
};

var hiddenKeys$8 = {};

var NATIVE_WEAK_MAP$1 = nativeWeakMap$1;
var global$D = global$V;
var uncurryThis$l = functionUncurryThis$1;
var isObject$b = isObject$g;
var createNonEnumerableProperty$7 = createNonEnumerableProperty$8;
var hasOwn$b = hasOwnProperty_1$1;
var shared$5 = sharedStore$1;
var sharedKey$3 = sharedKey$4;
var hiddenKeys$7 = hiddenKeys$8;
var OBJECT_ALREADY_INITIALIZED$1 = 'Object already initialized';
var TypeError$c = global$D.TypeError;
var WeakMap$2 = global$D.WeakMap;
var set$1, get$1, has$1;

var enforce$1 = function (it) {
  return has$1(it) ? get$1(it) : set$1(it, {});
};

var getterFor$1 = function (TYPE) {
  return function (it) {
    var state;

    if (!isObject$b(it) || (state = get$1(it)).type !== TYPE) {
      throw TypeError$c('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP$1 || shared$5.state) {
  var store$4 = shared$5.state || (shared$5.state = new WeakMap$2());
  var wmget$1 = uncurryThis$l(store$4.get);
  var wmhas$1 = uncurryThis$l(store$4.has);
  var wmset$1 = uncurryThis$l(store$4.set);

  set$1 = function (it, metadata) {
    if (wmhas$1(store$4, it)) throw new TypeError$c(OBJECT_ALREADY_INITIALIZED$1);
    metadata.facade = it;
    wmset$1(store$4, it, metadata);
    return metadata;
  };

  get$1 = function (it) {
    return wmget$1(store$4, it) || {};
  };

  has$1 = function (it) {
    return wmhas$1(store$4, it);
  };
} else {
  var STATE$1 = sharedKey$3('state');
  hiddenKeys$7[STATE$1] = true;

  set$1 = function (it, metadata) {
    if (hasOwn$b(it, STATE$1)) throw new TypeError$c(OBJECT_ALREADY_INITIALIZED$1);
    metadata.facade = it;
    createNonEnumerableProperty$7(it, STATE$1, metadata);
    return metadata;
  };

  get$1 = function (it) {
    return hasOwn$b(it, STATE$1) ? it[STATE$1] : {};
  };

  has$1 = function (it) {
    return hasOwn$b(it, STATE$1);
  };
}

var internalState$1 = {
  set: set$1,
  get: get$1,
  has: has$1,
  enforce: enforce$1,
  getterFor: getterFor$1
};

var DESCRIPTORS$7 = descriptors$1;
var hasOwn$a = hasOwnProperty_1$1;
var FunctionPrototype$3 = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getDescriptor$1 = DESCRIPTORS$7 && Object.getOwnPropertyDescriptor;
var EXISTS$2 = hasOwn$a(FunctionPrototype$3, 'name'); // additional protection from minified / mangled / dropped function names

var PROPER$1 = EXISTS$2 && function something() {
  /* empty */
}.name === 'something';

var CONFIGURABLE$2 = EXISTS$2 && (!DESCRIPTORS$7 || DESCRIPTORS$7 && getDescriptor$1(FunctionPrototype$3, 'name').configurable);
var functionName$1 = {
  EXISTS: EXISTS$2,
  PROPER: PROPER$1,
  CONFIGURABLE: CONFIGURABLE$2
};

var global$C = global$V;
var isCallable$g = isCallable$o;
var hasOwn$9 = hasOwnProperty_1$1;
var createNonEnumerableProperty$6 = createNonEnumerableProperty$8;
var setGlobal$5 = setGlobal$7;
var inspectSource$5 = inspectSource$7;
var InternalStateModule$1 = internalState$1;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName$1.CONFIGURABLE;
var getInternalState$2 = InternalStateModule$1.get;
var enforceInternalState$1 = InternalStateModule$1.enforce;
var TEMPLATE$1 = String(String).split('String');
(redefine$4.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;

  if (isCallable$g(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }

    if (!hasOwn$9(value, 'name') || CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name) {
      createNonEnumerableProperty$6(value, 'name', name);
    }

    state = enforceInternalState$1(value);

    if (!state.source) {
      state.source = TEMPLATE$1.join(typeof name == 'string' ? name : '');
    }
  }

  if (O === global$C) {
    if (simple) O[key] = value;else setGlobal$5(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else createNonEnumerableProperty$6(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable$g(this) && getInternalState$2(this).source || inspectSource$5(this);
});

var objectGetOwnPropertyNames$1 = {};

var ceil$1 = Math.ceil;
var floor$2 = Math.floor; // `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity

var toIntegerOrInfinity$8 = function (argument) {
  var number = +argument; // eslint-disable-next-line no-self-compare -- safe

  return number !== number || number === 0 ? 0 : (number > 0 ? floor$2 : ceil$1)(number);
};

var toIntegerOrInfinity$7 = toIntegerOrInfinity$8;
var max$2 = Math.max;
var min$4 = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

var toAbsoluteIndex$4 = function (index, length) {
  var integer = toIntegerOrInfinity$7(index);
  return integer < 0 ? max$2(integer + length, 0) : min$4(integer, length);
};

var toIntegerOrInfinity$6 = toIntegerOrInfinity$8;
var min$3 = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

var toLength$4 = function (argument) {
  return argument > 0 ? min$3(toIntegerOrInfinity$6(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$3 = toLength$4; // `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike

var lengthOfArrayLike$6 = function (obj) {
  return toLength$3(obj.length);
};

var toIndexedObject$7 = toIndexedObject$9;
var toAbsoluteIndex$3 = toAbsoluteIndex$4;
var lengthOfArrayLike$5 = lengthOfArrayLike$6; // `Array.prototype.{ indexOf, includes }` methods implementation

var createMethod$2 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$7($this);
    var length = lengthOfArrayLike$5(O);
    var index = toAbsoluteIndex$3(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

var arrayIncludes$1 = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$2(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$2(false)
};

var uncurryThis$k = functionUncurryThis$1;
var hasOwn$8 = hasOwnProperty_1$1;
var toIndexedObject$6 = toIndexedObject$9;
var indexOf$2 = arrayIncludes$1.indexOf;
var hiddenKeys$6 = hiddenKeys$8;
var push$2 = uncurryThis$k([].push);

var objectKeysInternal$1 = function (object, names) {
  var O = toIndexedObject$6(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !hasOwn$8(hiddenKeys$6, key) && hasOwn$8(O, key) && push$2(result, key); // Don't enum bug & hidden keys


  while (names.length > i) if (hasOwn$8(O, key = names[i++])) {
    ~indexOf$2(result, key) || push$2(result, key);
  }

  return result;
};

var enumBugKeys$5 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

var internalObjectKeys$2 = objectKeysInternal$1;
var enumBugKeys$4 = enumBugKeys$5;
var hiddenKeys$5 = enumBugKeys$4.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

objectGetOwnPropertyNames$1.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$2(O, hiddenKeys$5);
};

var objectGetOwnPropertySymbols$1 = {};

objectGetOwnPropertySymbols$1.f = Object.getOwnPropertySymbols;

var getBuiltIn$7 = getBuiltIn$a;
var uncurryThis$j = functionUncurryThis$1;
var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames$1;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols$1;
var anObject$9 = anObject$b;
var concat$1 = uncurryThis$j([].concat); // all object keys, includes non-enumerable and symbols

var ownKeys$4 = getBuiltIn$7('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule$1.f(anObject$9(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$7 = hasOwnProperty_1$1;
var ownKeys$3 = ownKeys$4;
var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor$1;
var definePropertyModule$5 = objectDefineProperty$1;

var copyConstructorProperties$3 = function (target, source, exceptions) {
  var keys = ownKeys$3(source);
  var defineProperty = definePropertyModule$5.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (!hasOwn$7(target, key) && !(exceptions && hasOwn$7(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$l = fails$s;
var isCallable$f = isCallable$o;
var replacement$1 = /#|\.prototype\./;

var isForced$3 = function (feature, detection) {
  var value = data$1[normalize$1(feature)];
  return value == POLYFILL$1 ? true : value == NATIVE$1 ? false : isCallable$f(detection) ? fails$l(detection) : !!detection;
};

var normalize$1 = isForced$3.normalize = function (string) {
  return String(string).replace(replacement$1, '.').toLowerCase();
};

var data$1 = isForced$3.data = {};
var NATIVE$1 = isForced$3.NATIVE = 'N';
var POLYFILL$1 = isForced$3.POLYFILL = 'P';
var isForced_1$1 = isForced$3;

var global$B = global$V;
var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor$1.f;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$8;
var redefine$3 = redefine$4.exports;
var setGlobal$4 = setGlobal$7;
var copyConstructorProperties$2 = copyConstructorProperties$3;
var isForced$2 = isForced_1$1;
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/

var _export$1 = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global$B;
  } else if (STATIC) {
    target = global$B[TARGET] || setGlobal$4(TARGET, {});
  } else {
    target = (global$B[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$2(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced$2(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties$2(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty$5(sourceProperty, 'sham', true);
    } // extend global


    redefine$3(target, key, sourceProperty, options);
  }
};

var classof$9 = classofRaw$3; // `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe

var isArray$5 = Array.isArray || function isArray(argument) {
  return classof$9(argument) == 'Array';
};

var toPropertyKey$4 = toPropertyKey$7;
var definePropertyModule$4 = objectDefineProperty$1;
var createPropertyDescriptor$4 = createPropertyDescriptor$7;

var createProperty$4 = function (object, key, value) {
  var propertyKey = toPropertyKey$4(key);
  if (propertyKey in object) definePropertyModule$4.f(object, propertyKey, createPropertyDescriptor$4(0, value));else object[propertyKey] = value;
};

var wellKnownSymbol$e = wellKnownSymbol$g;
var TO_STRING_TAG$3 = wellKnownSymbol$e('toStringTag');
var test$1 = {};
test$1[TO_STRING_TAG$3] = 'z';
var toStringTagSupport$1 = String(test$1) === '[object z]';

var global$A = global$V;
var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport$1;
var isCallable$e = isCallable$o;
var classofRaw$2 = classofRaw$3;
var wellKnownSymbol$d = wellKnownSymbol$g;
var TO_STRING_TAG$2 = wellKnownSymbol$d('toStringTag');
var Object$5 = global$A.Object; // ES3 wrong here

var CORRECT_ARGUMENTS$1 = classofRaw$2(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet$1 = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


var classof$8 = TO_STRING_TAG_SUPPORT$1 ? classofRaw$2 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet$1(O = Object$5(it), TO_STRING_TAG$2)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS$1 ? classofRaw$2(O) // ES3 arguments fallback
  : (result = classofRaw$2(O)) == 'Object' && isCallable$e(O.callee) ? 'Arguments' : result;
};

var uncurryThis$i = functionUncurryThis$1;
var fails$k = fails$s;
var isCallable$d = isCallable$o;
var classof$7 = classof$8;
var getBuiltIn$6 = getBuiltIn$a;
var inspectSource$4 = inspectSource$7;

var noop$1 = function () {
  /* empty */
};

var empty$1 = [];
var construct$1 = getBuiltIn$6('Reflect', 'construct');
var constructorRegExp$1 = /^\s*(?:class|function)\b/;
var exec$3 = uncurryThis$i(constructorRegExp$1.exec);
var INCORRECT_TO_STRING$1 = !constructorRegExp$1.exec(noop$1);

var isConstructorModern$1 = function isConstructor(argument) {
  if (!isCallable$d(argument)) return false;

  try {
    construct$1(noop$1, empty$1, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy$1 = function isConstructor(argument) {
  if (!isCallable$d(argument)) return false;

  switch (classof$7(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction':
      return false;
  }

  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING$1 || !!exec$3(constructorRegExp$1, inspectSource$4(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy$1.sham = true; // `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor

var isConstructor$4 = !construct$1 || fails$k(function () {
  var called;
  return isConstructorModern$1(isConstructorModern$1.call) || !isConstructorModern$1(Object) || !isConstructorModern$1(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy$1 : isConstructorModern$1;

var global$z = global$V;
var isArray$4 = isArray$5;
var isConstructor$3 = isConstructor$4;
var isObject$a = isObject$g;
var wellKnownSymbol$c = wellKnownSymbol$g;
var SPECIES$5 = wellKnownSymbol$c('species');
var Array$3 = global$z.Array; // a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesConstructor$3 = function (originalArray) {
  var C;

  if (isArray$4(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (isConstructor$3(C) && (C === Array$3 || isArray$4(C.prototype))) C = undefined;else if (isObject$a(C)) {
      C = C[SPECIES$5];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array$3 : C;
};

var arraySpeciesConstructor$2 = arraySpeciesConstructor$3; // `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesCreate$3 = function (originalArray, length) {
  return new (arraySpeciesConstructor$2(originalArray))(length === 0 ? 0 : length);
};

var fails$j = fails$s;
var wellKnownSymbol$b = wellKnownSymbol$g;
var V8_VERSION$4 = engineV8Version$1;
var SPECIES$4 = wellKnownSymbol$b('species');

var arrayMethodHasSpeciesSupport$3 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION$4 >= 51 || !fails$j(function () {
    var array = [];
    var constructor = array.constructor = {};

    constructor[SPECIES$4] = function () {
      return {
        foo: 1
      };
    };

    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $$4 = _export$1;
var global$y = global$V;
var fails$i = fails$s;
var isArray$3 = isArray$5;
var isObject$9 = isObject$g;
var toObject$3 = toObject$5;
var lengthOfArrayLike$4 = lengthOfArrayLike$6;
var createProperty$3 = createProperty$4;
var arraySpeciesCreate$2 = arraySpeciesCreate$3;
var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$3;
var wellKnownSymbol$a = wellKnownSymbol$g;
var V8_VERSION$3 = engineV8Version$1;
var IS_CONCAT_SPREADABLE$1 = wellKnownSymbol$a('isConcatSpreadable');
var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED$1 = 'Maximum allowed index exceeded';
var TypeError$b = global$y.TypeError; // We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679

var IS_CONCAT_SPREADABLE_SUPPORT$1 = V8_VERSION$3 >= 51 || !fails$i(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE$1] = false;
  return array.concat()[0] !== array;
});
var SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$2('concat');

var isConcatSpreadable$1 = function (O) {
  if (!isObject$9(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE$1];
  return spreadable !== undefined ? !!spreadable : isArray$3(O);
};

var FORCED$2 = !IS_CONCAT_SPREADABLE_SUPPORT$1 || !SPECIES_SUPPORT$1; // `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species

$$4({
  target: 'Array',
  proto: true,
  forced: FORCED$2
}, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject$3(this);
    var A = arraySpeciesCreate$2(O, 0);
    var n = 0;
    var i, k, length, len, E;

    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];

      if (isConcatSpreadable$1(E)) {
        len = lengthOfArrayLike$4(E);
        if (n + len > MAX_SAFE_INTEGER$1) throw TypeError$b(MAXIMUM_ALLOWED_INDEX_EXCEEDED$1);

        for (k = 0; k < len; k++, n++) if (k in E) createProperty$3(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER$1) throw TypeError$b(MAXIMUM_ALLOWED_INDEX_EXCEEDED$1);
        createProperty$3(A, n++, E);
      }
    }

    A.length = n;
    return A;
  }
});

var fails$h = fails$s;

var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$h(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () {
      throw 1;
    }, 1);
  });
};

var $$3 = _export$1;
var uncurryThis$h = functionUncurryThis$1;
var IndexedObject$1 = indexedObject$1;
var toIndexedObject$5 = toIndexedObject$9;
var arrayMethodIsStrict = arrayMethodIsStrict$1;
var un$Join = uncurryThis$h([].join);
var ES3_STRINGS = IndexedObject$1 != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ','); // `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join

$$3({
  target: 'Array',
  proto: true,
  forced: ES3_STRINGS || !STRICT_METHOD
}, {
  join: function join(separator) {
    return un$Join(toIndexedObject$5(this), separator === undefined ? ',' : separator);
  }
});

var global$x = global$V;
var classof$6 = classof$8;
var String$4 = global$x.String;

var toString$6 = function (argument) {
  if (classof$6(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String$4(argument);
};

var anObject$8 = anObject$b; // `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags

var regexpFlags$1 = function () {
  var that = anObject$8(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var fails$g = fails$s;
var global$w = global$V; // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError

var $RegExp$2 = global$w.RegExp;
var UNSUPPORTED_Y$2 = fails$g(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
}); // UC Browser bug
// https://github.com/zloirock/core-js/issues/1008

var MISSED_STICKY = UNSUPPORTED_Y$2 || fails$g(function () {
  return !$RegExp$2('a', 'y').sticky;
});
var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$g(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});
var regexpStickyHelpers = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y$2
};

var objectDefineProperties = {};

var internalObjectKeys$1 = objectKeysInternal$1;
var enumBugKeys$3 = enumBugKeys$5; // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe

var objectKeys$1 = Object.keys || function keys(O) {
  return internalObjectKeys$1(O, enumBugKeys$3);
};

var DESCRIPTORS$6 = descriptors$1;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug$1;
var definePropertyModule$3 = objectDefineProperty$1;
var anObject$7 = anObject$b;
var toIndexedObject$4 = toIndexedObject$9;
var objectKeys = objectKeys$1; // `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe

objectDefineProperties.f = DESCRIPTORS$6 && !V8_PROTOTYPE_DEFINE_BUG$1 ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$7(O);
  var props = toIndexedObject$4(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) definePropertyModule$3.f(O, key = keys[index++], props[key]);

  return O;
};

var getBuiltIn$5 = getBuiltIn$a;
var html$1 = getBuiltIn$5('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */
var anObject$6 = anObject$b;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys$2 = enumBugKeys$5;
var hiddenKeys$4 = hiddenKeys$8;
var html = html$1;
var documentCreateElement$1 = documentCreateElement$2;
var sharedKey$2 = sharedKey$4;
var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey$2('IE_PROTO');

var EmptyConstructor = function () {
  /* empty */
};

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak

  return temp;
}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement$1('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
}; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug


var activeXDocument;

var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }

  NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
  : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH

  var length = enumBugKeys$2.length;

  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys$2[length]];

  return NullProtoObject();
};

hiddenKeys$4[IE_PROTO] = true; // `Object.create` method
// https://tc39.es/ecma262/#sec-object.create

var objectCreate = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$6(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = NullProtoObject();

  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var fails$f = fails$s;
var global$v = global$V; // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError

var $RegExp$1 = global$v.RegExp;
var regexpUnsupportedDotAll = fails$f(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$e = fails$s;
var global$u = global$V; // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError

var $RegExp = global$u.RegExp;
var regexpUnsupportedNcg = fails$e(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */

/* eslint-disable regexp/no-useless-quantifier -- testing */


var call$8 = functionCall$1;
var uncurryThis$g = functionUncurryThis$1;
var toString$5 = toString$6;
var regexpFlags = regexpFlags$1;
var stickyHelpers$1 = regexpStickyHelpers;
var shared$4 = shared$8.exports;
var create = objectCreate;
var getInternalState$1 = internalState$1.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;
var nativeReplace = shared$4('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$2 = uncurryThis$g(''.charAt);
var indexOf$1 = uncurryThis$g(''.indexOf);
var replace = uncurryThis$g(''.replace);
var stringSlice$4 = uncurryThis$g(''.slice);

var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$8(nativeExec, re1, 'a');
  call$8(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();

var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState$1(re);
    var str = toString$5(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$8(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y$1 && re.sticky;
    var flags = call$8(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');

      if (indexOf$1(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$4(str, re.lastIndex); // Support anchored sticky behavior.

      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$2(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      } // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.


      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }

    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
    match = call$8(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$4(match.input, charsAdded);
        match[0] = stringSlice$4(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }

    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      call$8(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);

      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$3 = patchedExec;

var $$2 = _export$1;
var exec$2 = regexpExec$3; // `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec

$$2({
  target: 'RegExp',
  proto: true,
  forced: /./.exec !== exec$2
}, {
  exec: exec$2
});

var NATIVE_BIND$2 = functionBindNative$1;
var FunctionPrototype$2 = Function.prototype;
var apply$1 = FunctionPrototype$2.apply;
var call$7 = FunctionPrototype$2.call; // eslint-disable-next-line es/no-reflect -- safe

var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$2 ? call$7.bind(apply$1) : function () {
  return call$7.apply(apply$1, arguments);
});

var uncurryThis$f = functionUncurryThis$1;
var redefine$2 = redefine$4.exports;
var regexpExec$2 = regexpExec$3;
var fails$d = fails$s;
var wellKnownSymbol$9 = wellKnownSymbol$g;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$8;
var SPECIES$3 = wellKnownSymbol$9('species');
var RegExpPrototype = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$9(KEY);
  var DELEGATES_TO_SYMBOL = !fails$d(function () {
    // String methods call symbol-named RegEp methods
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$d(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.

      re.constructor = {};

      re.constructor[SPECIES$3] = function () {
        return re;
      };

      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
    var uncurriedNativeRegExpMethod = uncurryThis$f(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$f(nativeMethod);
      var $exec = regexp.exec;

      if ($exec === regexpExec$2 || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return {
            done: true,
            value: uncurriedNativeRegExpMethod(regexp, str, arg2)
          };
        }

        return {
          done: true,
          value: uncurriedNativeMethod(str, regexp, arg2)
        };
      }

      return {
        done: false
      };
    });
    redefine$2(String.prototype, KEY, methods[0]);
    redefine$2(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty$4(RegExpPrototype[SYMBOL], 'sham', true);
};

var isObject$8 = isObject$g;
var classof$5 = classofRaw$3;
var wellKnownSymbol$8 = wellKnownSymbol$g;
var MATCH = wellKnownSymbol$8('match'); // `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp

var isRegexp = function (it) {
  var isRegExp;
  return isObject$8(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof$5(it) == 'RegExp');
};

var global$t = global$V;
var isConstructor$2 = isConstructor$4;
var tryToString$2 = tryToString$4;
var TypeError$a = global$t.TypeError; // `Assert: IsConstructor(argument) is true`

var aConstructor$1 = function (argument) {
  if (isConstructor$2(argument)) return argument;
  throw TypeError$a(tryToString$2(argument) + ' is not a constructor');
};

var anObject$5 = anObject$b;
var aConstructor = aConstructor$1;
var wellKnownSymbol$7 = wellKnownSymbol$g;
var SPECIES$2 = wellKnownSymbol$7('species'); // `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor

var speciesConstructor$1 = function (O, defaultConstructor) {
  var C = anObject$5(O).constructor;
  var S;
  return C === undefined || (S = anObject$5(C)[SPECIES$2]) == undefined ? defaultConstructor : aConstructor(S);
};

var uncurryThis$e = functionUncurryThis$1;
var toIntegerOrInfinity$5 = toIntegerOrInfinity$8;
var toString$4 = toString$6;
var requireObjectCoercible$5 = requireObjectCoercible$8;
var charAt$1 = uncurryThis$e(''.charAt);
var charCodeAt = uncurryThis$e(''.charCodeAt);
var stringSlice$3 = uncurryThis$e(''.slice);

var createMethod$1 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$4(requireObjectCoercible$5($this));
    var position = toIntegerOrInfinity$5(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt$1(S, position) : first : CONVERT_TO_STRING ? stringSlice$3(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$1(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$1(true)
};

var charAt = stringMultibyte.charAt; // `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex

var advanceStringIndex$1 = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};

var global$s = global$V;
var toAbsoluteIndex$2 = toAbsoluteIndex$4;
var lengthOfArrayLike$3 = lengthOfArrayLike$6;
var createProperty$2 = createProperty$4;
var Array$2 = global$s.Array;
var max$1 = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike$3(O);
  var k = toAbsoluteIndex$2(start, length);
  var fin = toAbsoluteIndex$2(end === undefined ? length : end, length);
  var result = Array$2(max$1(fin - k, 0));

  for (var n = 0; k < fin; k++, n++) createProperty$2(result, n, O[k]);

  result.length = n;
  return result;
};

var global$r = global$V;
var call$6 = functionCall$1;
var anObject$4 = anObject$b;
var isCallable$c = isCallable$o;
var classof$4 = classofRaw$3;
var regexpExec$1 = regexpExec$3;
var TypeError$9 = global$r.TypeError; // `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec

var regexpExecAbstract = function (R, S) {
  var exec = R.exec;

  if (isCallable$c(exec)) {
    var result = call$6(exec, R, S);
    if (result !== null) anObject$4(result);
    return result;
  }

  if (classof$4(R) === 'RegExp') return call$6(regexpExec$1, R, S);
  throw TypeError$9('RegExp#exec called on incompatible receiver');
};

var apply = functionApply;
var call$5 = functionCall$1;
var uncurryThis$d = functionUncurryThis$1;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var isRegExp = isRegexp;
var anObject$3 = anObject$b;
var requireObjectCoercible$4 = requireObjectCoercible$8;
var speciesConstructor = speciesConstructor$1;
var advanceStringIndex = advanceStringIndex$1;
var toLength$2 = toLength$4;
var toString$3 = toString$6;
var getMethod$2 = getMethod$4;
var arraySlice = arraySliceSimple;
var callRegExpExec = regexpExecAbstract;
var regexpExec = regexpExec$3;
var stickyHelpers = regexpStickyHelpers;
var fails$c = fails$s;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min$2 = Math.min;
var $push = [].push;
var exec$1 = uncurryThis$d(/./.exec);
var push$1 = uncurryThis$d($push);
var stringSlice$2 = uncurryThis$d(''.slice); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$c(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;

  re.exec = function () {
    return originalExec.apply(this, arguments);
  };

  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
}); // @@split logic

fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;

  if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
  'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString$3(requireObjectCoercible$4(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

      if (!isRegExp(separator)) {
        return call$5(nativeSplit, string, separator, lim);
      }

      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;

      while (match = call$5(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;

        if (lastIndex > lastLastIndex) {
          push$1(output, stringSlice$2(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }

        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }

      if (lastLastIndex === string.length) {
        if (lastLength || !exec$1(separatorCopy, '')) push$1(output, '');
      } else push$1(output, stringSlice$2(string, lastLastIndex));

      return output.length > lim ? arraySlice(output, 0, lim) : output;
    }; // Chakra, V8

  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call$5(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [// `String.prototype.split` method
  // https://tc39.es/ecma262/#sec-string.prototype.split
  function split(separator, limit) {
    var O = requireObjectCoercible$4(this);
    var splitter = separator == undefined ? undefined : getMethod$2(separator, SPLIT);
    return splitter ? call$5(splitter, separator, O, limit) : call$5(internalSplit, toString$3(O), separator, limit);
  }, // `RegExp.prototype[@@split]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
  //
  // NOTE: This cannot be properly polyfilled in engines that don't support
  // the 'y' flag.
  function (string, limit) {
    var rx = anObject$3(this);
    var S = toString$3(string);
    var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
    if (res.done) return res.value;
    var C = speciesConstructor(rx, RegExp);
    var unicodeMatching = rx.unicode;
    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y ? 'g' : 'y'); // ^(? + rx + ) is needed, in combination with some S slicing, to
    // simulate the 'y' flag.

    var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
    if (lim === 0) return [];
    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
    var p = 0;
    var q = 0;
    var A = [];

    while (q < S.length) {
      splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
      var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice$2(S, q) : S);
      var e;

      if (z === null || (e = min$2(toLength$2(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
        q = advanceStringIndex(S, q, unicodeMatching);
      } else {
        push$1(A, stringSlice$2(S, p, q));
        if (A.length === lim) return A;

        for (var i = 1; i <= z.length - 1; i++) {
          push$1(A, z[i]);
          if (A.length === lim) return A;
        }

        q = p = e;
      }
    }

    push$1(A, stringSlice$2(S, p));
    return A;
  }];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

var uncurryThis$c = functionUncurryThis$1; // `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue

var thisNumberValue$1 = uncurryThis$c(1.0.valueOf);

var global$q = global$V;
var toIntegerOrInfinity$4 = toIntegerOrInfinity$8;
var toString$2 = toString$6;
var requireObjectCoercible$3 = requireObjectCoercible$8;
var RangeError$1 = global$q.RangeError; // `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat

var stringRepeat = function repeat(count) {
  var str = toString$2(requireObjectCoercible$3(this));
  var result = '';
  var n = toIntegerOrInfinity$4(count);
  if (n < 0 || n == Infinity) throw RangeError$1('Wrong number of repetitions');

  for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;

  return result;
};

var $$1 = _export$1;
var global$p = global$V;
var uncurryThis$b = functionUncurryThis$1;
var toIntegerOrInfinity$3 = toIntegerOrInfinity$8;
var thisNumberValue = thisNumberValue$1;
var $repeat = stringRepeat;
var fails$b = fails$s;
var RangeError = global$p.RangeError;
var String$3 = global$p.String;
var floor$1 = Math.floor;
var repeat = uncurryThis$b($repeat);
var stringSlice$1 = uncurryThis$b(''.slice);
var un$ToFixed = uncurryThis$b(1.0.toFixed);

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;

  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }

  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  }

  return n;
};

var multiply = function (data, n, c) {
  var index = -1;
  var c2 = c;

  while (++index < 6) {
    c2 += n * data[index];
    data[index] = c2 % 1e7;
    c2 = floor$1(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;

  while (--index >= 0) {
    c += data[index];
    data[index] = floor$1(c / n);
    c = c % n * 1e7;
  }
};

var dataToString = function (data) {
  var index = 6;
  var s = '';

  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = String$3(data[index]);
      s = s === '' ? t : s + repeat('0', 7 - t.length) + t;
    }
  }

  return s;
};

var FORCED$1 = fails$b(function () {
  return un$ToFixed(0.00008, 3) !== '0.000' || un$ToFixed(0.9, 0) !== '1' || un$ToFixed(1.255, 2) !== '1.25' || un$ToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
}) || !fails$b(function () {
  // V8 ~ Android 4.3-
  un$ToFixed({});
}); // `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed

$$1({
  target: 'Number',
  proto: true,
  forced: FORCED$1
}, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toIntegerOrInfinity$3(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k; // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits'); // eslint-disable-next-line no-self-compare -- NaN check

    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String$3(number);

    if (number < 0) {
      sign = '-';
      number = -number;
    }

    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;

      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;

        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }

        multiply(data, pow(10, j, 1), 0);
        j = e - 1;

        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }

        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + repeat('0', fractDigits);
      }
    }

    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits ? '0.' + repeat('0', fractDigits - k) + result : stringSlice$1(result, 0, k - fractDigits) + '.' + stringSlice$1(result, k - fractDigits));
    } else {
      result = sign + result;
    }

    return result;
  }
});

function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
/*
 * anime.js v3.1.5
 * (c) 2021 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

/*
 * anime.js v3.1.2
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */
// Defaults

var defaultInstanceSettings = {};
var defaultTweenSettings = {
  duration: 1000,
  round: 0
};
var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective']; // Caching

var cache = {
  CSS: {}
}; // Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

var is = {
  arr: function (a) {
    return Array.isArray(a);
  },
  obj: function (a) {
    return stringContains(Object.prototype.toString.call(a), 'Object');
  },
  pth: function (a) {
    return is.obj(a) && a.hasOwnProperty('totalLength');
  },
  svg: function (a) {
    return a instanceof SVGElement;
  },
  inp: function (a) {
    return a instanceof HTMLInputElement;
  },
  dom: function (a) {
    return a.nodeType || is.svg(a);
  },
  str: function (a) {
    return typeof a === 'string';
  },
  fnc: function (a) {
    return typeof a === 'function';
  },
  und: function (a) {
    return typeof a === 'undefined';
  },
  hex: function (a) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
  },
  rgb: function (a) {
    return /^rgb/.test(a);
  },
  hsl: function (a) {
    return /^hsl/.test(a);
  },
  col: function (a) {
    return is.hex(a) || is.rgb(a) || is.hsl(a);
  },
  key: function (a) {
    return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes';
  }
};

var penner = function () {
  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)
  var eases = {
    linear: function () {
      return function (t) {
        return t;
      };
    }
  };
  return eases;
}(); // Strings


function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch (e) {
    return;
  }
} // Arrays


function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];

  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];

      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }

  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) {
    return a.concat(is.arr(b) ? flattenArray(b) : b);
  }, []);
}

function toArray(o) {
  if (is.arr(o)) {
    return o;
  }

  if (is.str(o)) {
    o = selectString(o) || o;
  }

  if (o instanceof NodeList || o instanceof HTMLCollection) {
    return [].slice.call(o);
  }

  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) {
    return a === val;
  });
} // Objects


function cloneObject(o) {
  var clone = {};

  for (var p in o) {
    clone[p] = o[p];
  }

  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o1) {
    o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
  }

  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o2) {
    o[p] = is.und(o1[p]) ? o2[p] : o1[p];
  }

  return o;
} // Colors


function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return "rgba(" + r + "," + g + "," + b + ",1)";
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;

  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }

    if (t > 1) {
      t -= 1;
    }

    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }

    if (t < 1 / 2) {
      return q;
    }

    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }

    return p;
  }

  var r, g, b;

  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
}

function colorToRgb(val) {
  if (is.rgb(val)) {
    return rgbToRgba(val);
  }

  if (is.hex(val)) {
    return hexToRgba(val);
  }

  if (is.hsl(val)) {
    return hslToRgba(val);
  }
} // Units


function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);

  if (split) {
    return split[1];
  }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') {
    return 'px';
  }

  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) {
    return 'deg';
  }
} // Values


function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) {
    return val;
  }

  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);

  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) {
    return value;
  }

  var cached = cache.CSS[value + unit];

  if (!is.und(cached)) {
    return cached;
  }

  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (getAttribute(el, prop) || is.svg(el) && el[prop])) {
    return 'attribute';
  }

  if (is.dom(el) && arrayContains(validTransforms, prop)) {
    return 'transform';
  }

  if (is.dom(el) && prop !== 'transform' && getCSSValue(el, prop)) {
    return 'css';
  }

  if (el[prop] != null) {
    return 'object';
  }
}

function getElementTransforms(el) {
  if (!is.dom(el)) {
    return;
  }

  var str = el.style.transform || '';
  var reg = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m;

  while (m = reg.exec(str)) {
    transforms.set(m[1], m[2]);
  }

  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;

  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }

  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform':
      return getTransformValue(target, propName, animatable, unit);

    case 'css':
      return getCSSValue(target, propName, unit);

    case 'attribute':
      return getAttribute(target, propName);

    default:
      return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);

  if (!operator) {
    return to;
  }

  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));

  switch (operator[0][0]) {
    case '+':
      return x + y + u;

    case '-':
      return x - y + u;

    case '*':
      return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) {
    return colorToRgb(val);
  }

  if (/\s/g.test(val)) {
    return val;
  }

  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;

  if (unit) {
    return unitLess + unit;
  }

  return unitLess;
} // Decompose value


function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation

  var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: is.str(val) || unit ? value.split(rgx) : []
  };
} // Animatables


function parseTargets(targets) {
  var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
  return filterArray(targetsArray, function (item, pos, self) {
    return self.indexOf(item) === pos;
  });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {
      target: t,
      id: i,
      total: parsed.length,
      transforms: {
        list: getElementTransforms(t)
      }
    };
  });
} // Properties


function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);

  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = l === 2 && !is.obj(prop[0]);

    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) {
        settings.duration = tweenSettings.duration / l;
      }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {
        value: prop
      };
    }
  }

  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = is.obj(v) && !is.pth(v) ? v : {
      value: v
    };
    return obj;
  }).map(function (k) {
    return mergeObjects(k, settings);
  });
}

function getProperties(tweenSettings, params) {
  var properties = [];

  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }

  return properties;
} // Tweens


function normalizeTweenValues(tween, animatable) {
  var t = {};

  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);

    if (is.arr(value)) {
      value = value.map(function (v) {
        return getFunctionValue(v, animatable);
      });

      if (value.length === 1) {
        value = value[0];
      }
    }

    t[p] = value;
  }

  t.duration = parseFloat(t.duration);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;

    if (is.und(to)) {
      to = previousValue;
    }

    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.duration;
    tween.isPath = false;
    tween.isColor = is.col(tween.from.original);

    if (tween.isColor) {
      tween.round = 1;
    }

    previousTween = tween;
    return tween;
  });
} // Tween progress


var setProgressValue = {
  css: function (t, p, v) {
    return t.style[p] = v;
  },
  attribute: function (t, p, v) {
    return t.setAttribute(p, v);
  },
  object: function (t, p, v) {
    return t[p] = v;
  },
  transform: function (t, p, v, transforms, manual) {
    transforms.list.set(p, v);

    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) {
        str += prop + "(" + value + ") ";
      });
      t.style.transform = str;
    }
  }
}; // Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
} // Animations


function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);

  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end
    };
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) {
    return !is.und(a);
  });
} // Create Instance


function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;
  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) {
    return anim.duration;
  })) : tweenSettings.duration;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration
  });
} // Public Instance


function anime(params) {
  if (params === void 0) {
    params = {};
  }

  var children,
      childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) {
      return resolve = _resolve;
    });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  makePromise(instance);

  function seekChild(time, child) {
    if (child) {
      child.seek(time);
    }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) {
        seekChild(time, children[i]);
      }
    } else {
      for (var i$1 = childrenLength; i$1--;) {
        seekChild(time, children[i$1]);
      }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;

    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength]; // Only check for keyframes if there is more than one tween

      if (tweenLength) {
        tween = filterArray(tweens, function (t) {
          return insTime < t.end;
        })[0] || tween;
      }

      var elapsed = minMax(insTime - tween.start, 0, tween.duration) / tween.duration;
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = void 0;

      for (var n = 0; n < toNumbersLength; n++) {
        var value = void 0;
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;
        value = fromNumber + elapsed * (toNumber - fromNumber);

        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }

        numbers.push(value);
      } // Manual Array.reduce for better performances


      var stringsLength = strings.length;

      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];

        for (var s = 0; s < stringsLength; s++) {
          strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];

          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }

      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insTime = engineTime;
    instance.progress = minMax(insTime / insDuration * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;

    if (children) {
      syncInstanceChildren(insTime);
    }

    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
    }

    setAnimationsProgress(insTime);
    instance.currentTime = minMax(insTime, 0, insDuration);

    if (engineTime >= insDuration) {
      instance.paused = true;

      if (!instance.completed) {
        instance.completed = true;

        if (!instance.passThrough && 'Promise' in window) {
          resolve();
          makePromise(instance);
        }
      }
    }
  }

  instance.reset = function () {
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.completed = false;
    instance.reversePlayback = false;
    children = instance.children;
    childrenLength = children.length;

    for (var i = childrenLength; i--;) {
      instance.children[i].reset();
    }
  }; // Set Value helper


  instance.set = function (targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.seek = function (time) {
    setInstanceProgress(time);
  };

  instance.reset();
  return instance;
} // getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744


function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return getAttribute(el, 'width') * 2 + getAttribute(el, 'height') * 2;
}

function getLineLength(el) {
  return getDistance({
    x: getAttribute(el, 'x1'),
    y: getAttribute(el, 'y1')
  }, {
    x: getAttribute(el, 'x2'),
    y: getAttribute(el, 'y2')
  });
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;

  for (var i = 0; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);

    if (i > 0) {
      totalLength += getDistance(previousPos, currentPos);
    }

    previousPos = currentPos;
  }

  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
} // Path animation


function getTotalLength(el) {
  if (el.getTotalLength) {
    return el.getTotalLength();
  }

  switch (el.tagName.toLowerCase()) {
    case 'circle':
      return getCircleLength(el);

    case 'rect':
      return getRectLength(el);

    case 'line':
      return getLineLength(el);

    case 'polyline':
      return getPolylineLength(el);

    case 'polygon':
      return getPolygonLength(el);
  }
} // Motion path


function getParentSvgEl(el) {
  var parentEl = el.parentNode;

  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) {
      break;
    }

    parentEl = parentEl.parentNode;
  }

  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width,
    h: height,
    vW: viewBox[2],
    vH: viewBox[3]
  };
}

function getPath(path) {
  return {
    el: path,
    svg: getParentSvg(path),
    totalLength: getTotalLength(path),
    deltaCorrections: {
      x: 4,
      y: 5
    }
  };
}

function getPathProgress(path, progress, isPathTargetInsideSVG) {
  function point(offset) {
    if (offset === void 0) offset = 0;

    var _progress = progress * path.totalLength;

    var l = _progress + offset >= 1 ? _progress + offset : 0;
    return path.el.getPointAtLength(l);
  }

  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);
  var scaleX = 1; //isPathTargetInsideSVG ? 1 : svg.w / svg.vW;

  var scaleY = 1; //isPathTargetInsideSVG ? 1 : svg.h / svg.vH;

  return {
    x: (p.x - svg.x) * scaleX,
    y: (p.y - svg.y) * scaleY,
    angle: Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI
  };
}

anime.version = '3.1.0';
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.penner = penner;
anime.path = getPath;
anime.getPathProgress = getPathProgress;
var anime_es = anime;

var Anime$1 = /*#__PURE__*/function (_MotorCortex$Extendab) {
  _inherits(Anime, _MotorCortex$Extendab);

  var _super = _createSuper(Anime);

  function Anime() {
    _classCallCheck(this, Anime);

    return _super.apply(this, arguments);
  }

  _createClass(Anime, [{
    key: "onGetContext",
    value: function onGetContext() {
      var options = {};

      if (Object.prototype.hasOwnProperty.call(this.compoAttributes, this.attributeKey)) {
        var compoAttribute = this.compoAttributes[this.attributeKey];

        for (var i = 0; i < compoAttribute.length; i++) {
          if (!Object.prototype.hasOwnProperty.call(this.targetValue, compoAttribute[i])) {
            continue;
          }

          options[compoAttribute[i]] = [this.initialValue[compoAttribute[i]], this.targetValue[compoAttribute[i]]];
        }
      } else {
        options[this.attributeKey] = [this.initialValue, this.targetValue];
      }

      this.target = anime_es(_objectSpread2(_objectSpread2({
        autoplay: false,
        duration: this.props.duration,
        easing: "linear",
        targets: this.element
      }, (this.attrs || {}).attrs || {}), options)); // handle first render initial values
    }
    /**
     * @param {number} f
     */

  }, {
    key: "onProgress",
    value: function onProgress(f) {
      return this.target.seek(this.target.duration * f);
    }
  }]);

  return Anime;
}(MotorCortex__default["default"].ExtendableCSSEffect);

var check = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


var global$o = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$a = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$9 = fails$a; // Detect IE8's incomplete defineProperty implementation

var descriptors = !fails$9(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});
var fails$8 = fails$a;
var functionBindNative = !fails$8(function () {
  var test = function () {
    /* empty */
  }.bind(); // eslint-disable-next-line no-prototype-builtins -- safe


  return typeof test != 'function' || test.hasOwnProperty('prototype');
});
var NATIVE_BIND$1 = functionBindNative;
var call$4 = Function.prototype.call;
var functionCall = NATIVE_BIND$1 ? call$4.bind(call$4) : function () {
  return call$4.apply(call$4, arguments);
};
var objectPropertyIsEnumerable = {};
var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$3 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var NATIVE_BIND = functionBindNative;
var FunctionPrototype$1 = Function.prototype;
var bind = FunctionPrototype$1.bind;
var call$3 = FunctionPrototype$1.call;
var uncurryThis$a = NATIVE_BIND && bind.bind(call$3, call$3);
var functionUncurryThis = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis$a(fn);
} : function (fn) {
  return fn && function () {
    return call$3.apply(fn, arguments);
  };
};
var uncurryThis$9 = functionUncurryThis;
var toString$1 = uncurryThis$9({}.toString);
var stringSlice = uncurryThis$9(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice(toString$1(it), 8, -1);
};

var global$n = global$o;
var uncurryThis$8 = functionUncurryThis;
var fails$7 = fails$a;
var classof$3 = classofRaw$1;
var Object$4 = global$n.Object;
var split = uncurryThis$8(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

var indexedObject = fails$7(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$3(it) == 'String' ? split(it, '') : Object$4(it);
} : Object$4;
var global$m = global$o;
var TypeError$8 = global$m.TypeError; // `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible

var requireObjectCoercible$2 = function (it) {
  if (it == undefined) throw TypeError$8("Can't call method on " + it);
  return it;
};

var IndexedObject = indexedObject;
var requireObjectCoercible$1 = requireObjectCoercible$2;

var toIndexedObject$3 = function (it) {
  return IndexedObject(requireObjectCoercible$1(it));
}; // https://tc39.es/ecma262/#sec-iscallable


var isCallable$b = function (argument) {
  return typeof argument == 'function';
};

var isCallable$a = isCallable$b;

var isObject$7 = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$a(it);
};

var global$l = global$o;
var isCallable$9 = isCallable$b;

var aFunction = function (argument) {
  return isCallable$9(argument) ? argument : undefined;
};

var getBuiltIn$4 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$l[namespace]) : global$l[namespace] && global$l[namespace][method];
};

var uncurryThis$7 = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$7({}.isPrototypeOf);
var getBuiltIn$3 = getBuiltIn$4;
var engineUserAgent = getBuiltIn$3('navigator', 'userAgent') || '';
var global$k = global$o;
var userAgent = engineUserAgent;
var process = global$k.process;
var Deno = global$k.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version$1;

if (v8) {
  match = v8.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us

  version$1 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
} // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0


if (!version$1 && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version$1 = +match[1];
  }
}

var engineV8Version = version$1;
/* eslint-disable es/no-symbol -- required for testing */

var V8_VERSION$2 = engineV8Version;
var fails$6 = fails$a; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$6(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
});
/* eslint-disable es/no-symbol -- required for testing */

var NATIVE_SYMBOL$1 = nativeSymbol;
var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == 'symbol';
var global$j = global$o;
var getBuiltIn$2 = getBuiltIn$4;
var isCallable$8 = isCallable$b;
var isPrototypeOf = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var Object$3 = global$j.Object;
var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$2('Symbol');
  return isCallable$8($Symbol) && isPrototypeOf($Symbol.prototype, Object$3(it));
};
var global$i = global$o;
var String$2 = global$i.String;

var tryToString$1 = function (argument) {
  try {
    return String$2(argument);
  } catch (error) {
    return 'Object';
  }
};

var global$h = global$o;
var isCallable$7 = isCallable$b;
var tryToString = tryToString$1;
var TypeError$7 = global$h.TypeError; // `Assert: IsCallable(argument) is true`

var aCallable$1 = function (argument) {
  if (isCallable$7(argument)) return argument;
  throw TypeError$7(tryToString(argument) + ' is not a function');
};

var aCallable = aCallable$1; // `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod

var getMethod$1 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};

var global$g = global$o;
var call$2 = functionCall;
var isCallable$6 = isCallable$b;
var isObject$6 = isObject$7;
var TypeError$6 = global$g.TypeError; // `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive

var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$6(fn = input.toString) && !isObject$6(val = call$2(fn, input))) return val;
  if (isCallable$6(fn = input.valueOf) && !isObject$6(val = call$2(fn, input))) return val;
  if (pref !== 'string' && isCallable$6(fn = input.toString) && !isObject$6(val = call$2(fn, input))) return val;
  throw TypeError$6("Can't convert object to primitive value");
};

var shared$3 = {
  exports: {}
};
var global$f = global$o; // eslint-disable-next-line es/no-object-defineproperty -- safe

var defineProperty = Object.defineProperty;

var setGlobal$3 = function (key, value) {
  try {
    defineProperty(global$f, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global$f[key] = value;
  }

  return value;
};

var global$e = global$o;
var setGlobal$2 = setGlobal$3;
var SHARED = '__core-js_shared__';
var store$3 = global$e[SHARED] || setGlobal$2(SHARED, {});
var sharedStore = store$3;
var store$2 = sharedStore;
(shared$3.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.20.3',
  mode: 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});
var global$d = global$o;
var requireObjectCoercible = requireObjectCoercible$2;
var Object$2 = global$d.Object; // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject

var toObject$2 = function (argument) {
  return Object$2(requireObjectCoercible(argument));
};

var uncurryThis$6 = functionUncurryThis;
var toObject$1 = toObject$2;
var hasOwnProperty = uncurryThis$6({}.hasOwnProperty); // `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty

var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$1(it), key);
};

var uncurryThis$5 = functionUncurryThis;
var id = 0;
var postfix = Math.random();
var toString = uncurryThis$5(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};

var global$c = global$o;
var shared$2 = shared$3.exports;
var hasOwn$6 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = nativeSymbol;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var WellKnownSymbolsStore = shared$2('wks');
var Symbol$1 = global$c.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$6 = function (name) {
  if (!hasOwn$6(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;

    if (NATIVE_SYMBOL && hasOwn$6(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  }

  return WellKnownSymbolsStore[name];
};

var global$b = global$o;
var call$1 = functionCall;
var isObject$5 = isObject$7;
var isSymbol$1 = isSymbol$2;
var getMethod = getMethod$1;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$5 = wellKnownSymbol$6;
var TypeError$5 = global$b.TypeError;
var TO_PRIMITIVE = wellKnownSymbol$5('toPrimitive'); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive

var toPrimitive$1 = function (input, pref) {
  if (!isObject$5(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;

  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$1(exoticToPrim, input, pref);
    if (!isObject$5(result) || isSymbol$1(result)) return result;
    throw TypeError$5("Can't convert object to primitive value");
  }

  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2; // `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey

var toPropertyKey$3 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var global$a = global$o;
var isObject$4 = isObject$7;
var document$1 = global$a.document; // typeof document.createElement is 'object' in old IE

var EXISTS$1 = isObject$4(document$1) && isObject$4(document$1.createElement);

var documentCreateElement = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$5 = descriptors;
var fails$5 = fails$a;
var createElement = documentCreateElement; // Thanks to IE8 for its funny defineProperty

var ie8DomDefine = !DESCRIPTORS$5 && !fails$5(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});
var DESCRIPTORS$4 = descriptors;
var call = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;
var toIndexedObject$2 = toIndexedObject$3;
var toPropertyKey$2 = toPropertyKey$3;
var hasOwn$5 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

objectGetOwnPropertyDescriptor.f = DESCRIPTORS$4 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$2(O);
  P = toPropertyKey$2(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) {
    /* empty */
  }
  if (hasOwn$5(O, P)) return createPropertyDescriptor$2(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};
var objectDefineProperty = {};
var DESCRIPTORS$3 = descriptors;
var fails$4 = fails$a; // V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334

var v8PrototypeDefineBug = DESCRIPTORS$3 && fails$4(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () {
    /* empty */
  }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});
var global$9 = global$o;
var isObject$3 = isObject$7;
var String$1 = global$9.String;
var TypeError$4 = global$9.TypeError; // `Assert: Type(argument) is Object`

var anObject$2 = function (argument) {
  if (isObject$3(argument)) return argument;
  throw TypeError$4(String$1(argument) + ' is not an object');
};

var global$8 = global$o;
var DESCRIPTORS$2 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var anObject$1 = anObject$2;
var toPropertyKey$1 = toPropertyKey$3;
var TypeError$3 = global$8.TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe

var $defineProperty = Object.defineProperty; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable'; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

objectDefineProperty.f = DESCRIPTORS$2 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject$1(O);
  P = toPropertyKey$1(P);
  anObject$1(Attributes);

  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);

    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  }

  return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$1(O);
  P = toPropertyKey$1(P);
  anObject$1(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError$3('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};
var DESCRIPTORS$1 = descriptors;
var definePropertyModule$2 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;
var createNonEnumerableProperty$3 = DESCRIPTORS$1 ? function (object, key, value) {
  return definePropertyModule$2.f(object, key, createPropertyDescriptor$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};
var redefine$1 = {
  exports: {}
};
var uncurryThis$4 = functionUncurryThis;
var isCallable$5 = isCallable$b;
var store$1 = sharedStore;
var functionToString = uncurryThis$4(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (!isCallable$5(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store$1.inspectSource;
var global$7 = global$o;
var isCallable$4 = isCallable$b;
var inspectSource$2 = inspectSource$3;
var WeakMap$1 = global$7.WeakMap;
var nativeWeakMap = isCallable$4(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1));
var shared$1 = shared$3.exports;
var uid = uid$2;
var keys = shared$1('keys');

var sharedKey$1 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$3 = {};
var NATIVE_WEAK_MAP = nativeWeakMap;
var global$6 = global$o;
var uncurryThis$3 = functionUncurryThis;
var isObject$2 = isObject$7;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$3;
var hasOwn$4 = hasOwnProperty_1;
var shared = sharedStore;
var sharedKey = sharedKey$1;
var hiddenKeys$2 = hiddenKeys$3;
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$2 = global$6.TypeError;
var WeakMap = global$6.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;

    if (!isObject$2(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$2('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis$3(store.get);
  var wmhas = uncurryThis$3(store.has);
  var wmset = uncurryThis$3(store.set);

  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };

  get = function (it) {
    return wmget(store, it) || {};
  };

  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys$2[STATE] = true;

  set = function (it, metadata) {
    if (hasOwn$4(it, STATE)) throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$2(it, STATE, metadata);
    return metadata;
  };

  get = function (it) {
    return hasOwn$4(it, STATE) ? it[STATE] : {};
  };

  has = function (it) {
    return hasOwn$4(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};
var DESCRIPTORS = descriptors;
var hasOwn$3 = hasOwnProperty_1;
var FunctionPrototype = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$3(FunctionPrototype, 'name'); // additional protection from minified / mangled / dropped function names

var PROPER = EXISTS && function something() {
  /* empty */
}.name === 'something';

var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable);
var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};
var global$5 = global$o;
var isCallable$3 = isCallable$b;
var hasOwn$2 = hasOwnProperty_1;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$3;
var setGlobal$1 = setGlobal$3;
var inspectSource$1 = inspectSource$3;
var InternalStateModule = internalState;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(redefine$1.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;

  if (isCallable$3(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }

    if (!hasOwn$2(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
      createNonEnumerableProperty$1(value, 'name', name);
    }

    state = enforceInternalState(value);

    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }

  if (O === global$5) {
    if (simple) O[key] = value;else setGlobal$1(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else createNonEnumerableProperty$1(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable$3(this) && getInternalState(this).source || inspectSource$1(this);
});
var objectGetOwnPropertyNames = {};
var ceil = Math.ceil;
var floor = Math.floor; // `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity

var toIntegerOrInfinity$2 = function (argument) {
  var number = +argument; // eslint-disable-next-line no-self-compare -- safe

  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$2;
var max = Math.max;
var min$1 = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

var toAbsoluteIndex$1 = function (index, length) {
  var integer = toIntegerOrInfinity$1(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

var toIntegerOrInfinity = toIntegerOrInfinity$2;
var min = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

var toLength$1 = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength = toLength$1; // `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike

var lengthOfArrayLike$2 = function (obj) {
  return toLength(obj.length);
};

var toIndexedObject$1 = toIndexedObject$3;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike$1 = lengthOfArrayLike$2; // `Array.prototype.{ indexOf, includes }` methods implementation

var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$1($this);
    var length = lengthOfArrayLike$1(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};
var uncurryThis$2 = functionUncurryThis;
var hasOwn$1 = hasOwnProperty_1;
var toIndexedObject = toIndexedObject$3;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$1 = hiddenKeys$3;
var push = uncurryThis$2([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !hasOwn$1(hiddenKeys$1, key) && hasOwn$1(O, key) && push(result, key); // Don't enum bug & hidden keys


  while (names.length > i) if (hasOwn$1(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }

  return result;
};

var enumBugKeys$1 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$1;
var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

var objectGetOwnPropertySymbols = {};
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
var getBuiltIn$1 = getBuiltIn$4;
var uncurryThis$1 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject = anObject$2;
var concat = uncurryThis$1([].concat); // all object keys, includes non-enumerable and symbols

var ownKeys$1 = getBuiltIn$1('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$1 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$1.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$3 = fails$a;
var isCallable$2 = isCallable$b;
var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : isCallable$2(detection) ? fails$3(detection) : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';
var isForced_1 = isForced$1;
var global$4 = global$o;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty = createNonEnumerableProperty$3;
var redefine = redefine$1.exports;
var setGlobal = setGlobal$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/

var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global$4;
  } else if (STATIC) {
    target = global$4[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$4[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    } // extend global


    redefine(target, key, sourceProperty, options);
  }
};

var classof$2 = classofRaw$1; // `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe

var isArray$2 = Array.isArray || function isArray(argument) {
  return classof$2(argument) == 'Array';
};

var toPropertyKey = toPropertyKey$3;
var definePropertyModule = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$3;

var createProperty$1 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

var wellKnownSymbol$4 = wellKnownSymbol$6;
var TO_STRING_TAG$1 = wellKnownSymbol$4('toStringTag');
var test = {};
test[TO_STRING_TAG$1] = 'z';
var toStringTagSupport = String(test) === '[object z]';
var global$3 = global$o;
var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$1 = isCallable$b;
var classofRaw = classofRaw$1;
var wellKnownSymbol$3 = wellKnownSymbol$6;
var TO_STRING_TAG = wellKnownSymbol$3('toStringTag');
var Object$1 = global$3.Object; // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


var classof$1 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object$1(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && isCallable$1(O.callee) ? 'Arguments' : result;
};
var uncurryThis = functionUncurryThis;
var fails$2 = fails$a;
var isCallable = isCallable$b;
var classof = classof$1;
var getBuiltIn = getBuiltIn$4;
var inspectSource = inspectSource$3;

var noop = function () {
  /* empty */
};

var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;

  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;

  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction':
      return false;
  }

  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true; // `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor

var isConstructor$1 = !construct || fails$2(function () {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;
var global$2 = global$o;
var isArray$1 = isArray$2;
var isConstructor = isConstructor$1;
var isObject$1 = isObject$7;
var wellKnownSymbol$2 = wellKnownSymbol$6;
var SPECIES$1 = wellKnownSymbol$2('species');
var Array$1 = global$2.Array; // a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesConstructor$1 = function (originalArray) {
  var C;

  if (isArray$1(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (isConstructor(C) && (C === Array$1 || isArray$1(C.prototype))) C = undefined;else if (isObject$1(C)) {
      C = C[SPECIES$1];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array$1 : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1; // `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesCreate$1 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var fails$1 = fails$a;
var wellKnownSymbol$1 = wellKnownSymbol$6;
var V8_VERSION$1 = engineV8Version;
var SPECIES = wellKnownSymbol$1('species');

var arrayMethodHasSpeciesSupport$1 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION$1 >= 51 || !fails$1(function () {
    var array = [];
    var constructor = array.constructor = {};

    constructor[SPECIES] = function () {
      return {
        foo: 1
      };
    };

    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $ = _export;
var global$1 = global$o;
var fails = fails$a;
var isArray = isArray$2;
var isObject = isObject$7;
var toObject = toObject$2;
var lengthOfArrayLike = lengthOfArrayLike$2;
var createProperty = createProperty$1;
var arraySpeciesCreate = arraySpeciesCreate$1;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$1;
var wellKnownSymbol = wellKnownSymbol$6;
var V8_VERSION = engineV8Version;
var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError$1 = global$1.TypeError; // We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679

var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species

$({
  target: 'Array',
  proto: true,
  forced: FORCED
}, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;

    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];

      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError$1(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError$1(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }

    A.length = n;
    return A;
  }
});
/**
 * Takes as attributes:
 * {
 *  animatedAttrs: {
 *      positionOn: {
 *          pathElement: "selector of the path element"
 *      }
 *  }
 * }
 }
**/

var MotionPath = /*#__PURE__*/function (_Effect) {
  _inherits(MotionPath, _Effect);

  var _super = _createSuper(MotionPath);

  function MotionPath() {
    _classCallCheck(this, MotionPath);

    return _super.apply(this, arguments);
  }

  _createClass(MotionPath, [{
    key: "onGetContext",
    value: function onGetContext() {
      this.pixelsAccuracy = this.attrs.pixelsAccuracy || 4;
      this.calculatedPoints = [];
      var svgEl = this.context.getElements(this.targetValue.pathElement)[0];
      this.path = anime_es.path(svgEl);
      this.isPathTargetInsideSVG = this.element instanceof SVGElement;
    }
  }, {
    key: "onProgress",
    value: function onProgress(f) {
      var toSet;
      var distance = Math.round(this.path.totalLength / this.pixelsAccuracy * f) * this.pixelsAccuracy;

      if (this.calculatedPoints[distance] !== null && this.calculatedPoints[distance] !== undefined) {
        toSet = this.calculatedPoints[distance];
      } else {
        var position = anime_es.getPathProgress(this.path, distance / this.path.totalLength, this.isPathTargetInsideSVG); // console.log(position);

        toSet = "\n            translateX(".concat(position.x, "px)\n            translateY(").concat(position.y, "px)\n            rotate(").concat(position.angle, "deg)\n        ");
        this.calculatedPoints[distance] = toSet;
      }

      this.element.style.transform = toSet;
    }
  }]);

  return MotionPath;
}(MotorCortex.Effect);

var name$1 = "@donkeyclip/motorcortex-anime";
var version$2 = "2.1.17";
var index$1 = {
  npm_name: name$1,
  version: version$2,
  CSSEffect: Anime$1,
  incidents: [{
    exportable: MotionPath,
    name: "MotionPath",
    attributesValidationRules: {
      animatedAttrs: {
        type: "object",
        props: {
          positionOn: {
            type: "object",
            props: {
              pathElement: {
                type: "string"
              }
            }
          }
        }
      }
    }
  }]
};

var Anime = MotorCortex.loadPlugin(index$1);

var BannerA = /*#__PURE__*/function (_HTMLClip) {
  _inherits$1(BannerA, _HTMLClip);

  var _super = _createSuper$1(BannerA);

  function BannerA() {
    _classCallCheck$1(this, BannerA);

    return _super.apply(this, arguments);
  }

  _createClass$1(BannerA, [{
    key: "dinamicFontSize",
    value: function dinamicFontSize(lc, width) {
      var fontsize;
      fontsize = width / 0.6 / lc;

      if (fontsize >= 200 && width === 720) {
        fontsize = 200;
      }

      if (fontsize >= 100 && width === 360) {
        fontsize = 100;
      }

      return fontsize;
    }
  }, {
    key: "font",
    get: function get() {
      return [{
        type: "google-font",
        src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
      }];
    }
  }, {
    key: "html",
    get: function get() {
      var _this = this;

      var textlist = function () {
        var list = [];
        var n = Math.floor(_this.attrs.height / (_this.attrs.width * 0.2));
        _this.n = n;

        for (var i = 0; i < n; i++) {
          list.push("<div class=\"txt-group txt-".concat(i, "\">").concat(_this.attrs.txtGroup, "</div>"));
        }

        return list.join("");
      }();

      var strokeTextList = this.attrs.strokeText.split(" ");
      this.strokeTextLength = strokeTextList.length;

      var textlistStroke = function textlistStroke(className) {
        var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var list = [];

        for (var i = 0; i < strokeTextList.length; i++) {
          list.push("\n          <div style=\"".concat(style === true ? "top:".concat(_this.attrs.height / strokeTextList.length * i, "px;") : " ", "\" class=\"").concat(className).concat(i, "\">").concat(strokeTextList[i], "</div>"));
        }

        return list.join("");
      };

      return "\n    <div class=\"wrapper\">\n      <div class=\"left-image-wrapper\">\n        <div class=\"left-image\"> </div>\n      </div>\n\n      <div class=\"right-image-wrapper\">\n        <div class=\"right-image\"> </div>\n      </div>\n\n      <div  class=\"bg\"></div>\n      <div class=\"bg2\">\n        <div class=\"knockout\">\n          ".concat(textlist, "\n        </div>\n      </div>\n\n      <div class=\"lines-wrapper\">\n        <div class=\"lines lines-1\" style=\"\n          height:  ").concat(this.attrs.height * 0.1 * Math.random(), "px;\n          width: ").concat(this.attrs.width * 0.5 * Math.random().toFixed(2), "px;\n          top:").concat(this.attrs.height * Math.random().toFixed(2), "px;\n          \"></div>\n          \n        <div class=\"lines lines-2\" style=\"\n          height:").concat(this.attrs.height * 0.1 * Math.random(), "px;\n          width: ").concat(this.attrs.width * 0.5 * Math.random().toFixed(2), "px;\n          top:").concat(this.attrs.height * Math.random().toFixed(2), "px;\n        \"></div>\n        <div class=\"lines lines-3\" style=\"\n          height: ").concat(this.attrs.height * 0.1 * Math.random(), "px;\n          width: ").concat(this.attrs.width * 0.5 * Math.random().toFixed(2), "px;\n          top:").concat(this.attrs.height * Math.random().toFixed(2), "px;\n        \"></div>\n      </div>\n\n    \n\n      <div class=\"circles-wrapper\">\n        <div class=\"circle-1 circle\" ></div>\n        <div class=\"circle-2 circle \"></div>\n        <div class=\"circle-3 circle \"></div>\n      </div>\n      <div class=\"flex-center center-text-wrapper\" >\n        <div class=\"center-text\" data-text=\"Yeyey\">\n          ").concat(this.attrs.centerText, "\n        </div>\n        <div class=\"center-text-after\" data-text=\"Yeyey\">\n          ").concat(this.attrs.centerText, "\n        </div>\n        <div class=\"center-text-before\" data-text=\"Yeyey\">\n          ").concat(this.attrs.centerText, "\n        </div>\n        \n      </div>\n\n      <div  class=\"sliced-img-wrapper\">\n        <div class=\"sliced-img\"></div>\n      </div>\n      <div  style=\"opacity: 0;\"class=\"stroke-text-wrapper flex-center\">\n      \n        ").concat(textlistStroke("stroke-text-center txt-stroke-"), "\n        ").concat(textlistStroke("stroke-text-outline txt-stroke-outline-", true), "\n      </div>\n      <div class=\"doted\"></div>\n      <div class=\"doted-half\"></div>\n      <div class=\"rng-box\"></div>\n      <div class=\"yellow-underline\"></div>\n      <div class=\"yellow-transition\"> </div>\n      <div class=\"box\"> </div>\n      <div class=\"leftBlackBox\"></div>\n      <div class=\"rightBlackBox\"></div>\n\t  </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      var strokeTextList = this.attrs.strokeText.split(" ");
      return "\n    .wrapper{\n      width: ".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n     \n      display:flex;\n      font-family: 'Poppins', sans-serif;\n    }\n    .box{\n      width: ").concat(this.attrs.width * 0.03, "px;\n      height: ").concat(this.attrs.height * 2.4, ";\n      background: ").concat(this.attrs.mainColor, ";\n      position:absolute;\n      left: ").concat(this.attrs.width / 2, "px;\n    }\n\n    .doted{\n      background-image: radial-gradient(").concat(this.attrs.mainColor, " 16%, #0000 20%);\n      background-position: 0 0;\n      background-size: 16px 14px;\n      height: ").concat(this.attrs.height / 4.5, "px;\n      width: ").concat(this.attrs.width / 2.7, "px;\n      position:absolute;\n      left: 7%;\n      top: 65%\n    }\n\n    .doted,.doted-half{\n      background-image: radial-gradient(").concat(this.attrs.mainColor, " 16%, #0000 20%);\n      background-position: 0 0;\n      background-size: 16px 14px;\n      height: ").concat(this.attrs.height / 4.5, "px;\n      width: ").concat(this.attrs.width / 2.7, "px;\n      position:absolute;\n      left: 7%;\n      top: 65%;\n      opacity: 0;\n    }\n\n    .doted-half{\n      clip-path: polygon(0 31%, 85% 31%, 100% 55%, 15% 55%);\n      left: 65%;\n      top: 7%\n    }\n\n    .lines-wrapper{\n      height: ").concat(this.attrs.height, "px;\n      width: ").concat(this.attrs.width, "px;\n      position: absolute;\n    }\n\n    .lines{\n      background: ").concat(this.attrs.mainColor, ";\n      position: absolute;\n    }\n\n    .left-image-wrapper, .right-image-wrapper{\n      width:").concat(this.attrs.width / 2, "px;\n      overflow: hidden;\n    }\n  \n    .right-image{\n      height: ").concat(this.attrs.imgHeight, "px;\n      width: ").concat(this.attrs.imgWidth, "px;\n      position: relative;\n      background-image: url(").concat(this.attrs.bgUrl, ");\n      background-size: ").concat(this.attrs.imgWidth, "px;\n      transform: scale(1);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-wrap: wrap;\n      flex: 1 0 auto;\n      background-repeat: no-repeat;\n    }\n\n    .left-image{\n      height: ").concat(this.attrs.imgHeight, "px;\n      width: ").concat(this.attrs.imgWidth, "px;\n      position: relative;\n      background-image: url(").concat(this.attrs.bgUrl, ");\n      background-size: ").concat(this.attrs.imgWidth, "px;\n      transform: scale(1);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-wrap: wrap;\n      flex: 1 0 auto;\n    }\n\n    .left-image:after,.right-image:after {\n      content: \"\";\n      display: block;\n      background: linear-gradient(").concat(this.attrs.overlayColor, ");\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      z-index: -1;\n    }\n    \n    .txt-group{\n      font-size: ").concat(this.attrs.txtGroupSize, "px;\n    }\n\n    .txt-group:nth-of-type(odd){\n      height: 14%;\n    }\n\n    .txt-group:nth-of-type(2n+2) {\n      height: 14%;\n    }\n\n    .knockout {\n      background: url(").concat(this.attrs.bgUrl, ");\n      background-position: 50% 50%;\n      color: red;\n      -webkit-text-fill-color: transparent; \n      -webkit-background-clip: text;\n      font-weight: bold;\n      font-size: 0;\n      text-transform: uppercase;\n      width:").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      color: ").concat(this.attrs.mainColor, ";\n    }\n\n    .bg2{\n      background: ").concat(this.attrs.mainColor, ";\n      width:").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      position: absolute;\n      left:100%;\n    }\n\n    .bg{\n      background: url(").concat(this.attrs.bgUrl, ");\n      background-position: 50% 50%;\n      width:").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      position: absolute;\n    }\n\n    .circle{\n      width: ", 0, "px;\n      height: ", 0, "px;\n      background: transparent;\n      border-radius: 100%;\n      position: absolute;\n    }\n\n    .circles-wrapper{\n      position: absolute;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width:").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n    }\n\n    .center-text{\n      font-weight: bold;\n      font-size: ", 100, "px;\n      text-transform: uppercase;\n      color:").concat(this.attrs.mainColor, "\n    }\n\n    .center-text-before,.center-text-after{\n      content: attr(data-text);\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      z-index: -2;\n      opacity: 0.6;\n      font-size: ", 100, "px;\n      font-weight: bold;\n      text-transform: uppercase;\n    }\n\n    .center-text-before{\n      color: #ff00c1;\n    }\n\n    .center-text-after{\n      color: #3498db;\n    }\n\n    .flex-center{\n      position: absolute;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width:").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      z-index: 1;\n    }\n\n    .sliced-img-wrapper{\n      position: absolute;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width:").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);\n      overflow: hidden;\n    }\n\n    .sliced-img{\n      background: url(").concat(this.attrs.bgUrl, ");\n      background-position: 50% 50%;\n      width:").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      position: absolute;\n    }\n\n    .sliced-img::after{\n      content: \"\";\n        display: block;\n        background: linear-gradient(").concat(this.attrs.overlayColor, ");\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n    }\n\n    .stroke-text-center{\n      position: relative;\n      text-transform: uppercase;\n      width:").concat(this.attrs.width, "px;\n      color: ").concat(this.attrs.mainColor, ";\n      font-weight: 900;\n      display: flex;\n      align-items: center;\n      z-index: 1;\n    }\n\n    .stroke-text-wrapper{\n      display:flex;\n      flex-direction: column;\n    }\n\n    .stroke-text-outline{\n      font-size: ").concat(this.attrs.width * 0.3, "px;\n      text-transform: uppercase;\n      width:").concat(this.attrs.width, "px;\n      color: transparent;\n      font-weight: 900;\n      display: flex;\n      align-items: center;\n      -webkit-text-stroke: 3px aquamarine;\n      position: absolute;\n      height:").concat(this.attrs.height / strokeTextList.length, "px;\n    }\n\n    .rng-box::after{\n      content: \"\";\n      display: block;\n      background: linear-gradient(").concat(this.attrs.overlayColor, ");\n      position: absolute;\n      height:").concat(this.attrs.height * 0.08, "px;\n      width: ").concat(this.attrs.width * 0.6, "px;\n      background-size: ").concat(this.attrs.height, "px ").concat(this.attrs.width, "px;\n    }\n\n    .rng-box{\n      position: absolute;\n      height:").concat(this.attrs.height * 0.08, "px;\n      width: ").concat(this.attrs.width * 0.6, "px;\n      top:80%;\n      left:-100%;\n      z-index: 1;\n    }\n    \n    .yellow-underline{\n      position: absolute;\n      height:").concat(this.attrs.height * 0.01, "px;\n      width: ").concat(this.attrs.width * 0.5, "px;\n      top:90%;\n      left:-100%;\n      z-index: 1;\n      background: ").concat(this.attrs.mainColor, ";\n    }\n\n    .yellow-transition{\n      position: absolute;\n      height:").concat(this.attrs.height, "px;\n      width: ").concat(this.attrs.width, "px;\n      top:0%;\n      left:100%;\n      z-index: 1;\n      background: ").concat(this.attrs.mainColor, ";\n    }\n\n    .leftBlackBox,.rightBlackBox{\n      position: absolute;\n      height:").concat(this.attrs.height * 2, "px;\n      width: ").concat(this.attrs.width * 2, "px;\n      background: black;\n      transform: rotate(0deg); \n      z-index: 1;\n      top: -50%;\n    }\n\n    .leftBlackBox{\n      left: -200%;\n    }\n\n    .rightBlackBox{\n      left: 100%\n    }\n  ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var box = new Anime.Anime({
        animatedAttrs: {
          top: "-".concat(this.attrs.height * 0.1, "px"),
          height: "".concat(this.attrs.height * 0.1, "px")
        },
        initialValues: {
          top: "".concat(this.attrs.height, "px"),
          height: "".concat(this.attrs.height / 2.5, "px")
        },
        attrs: {}
      }, {
        duration: 500,
        selector: ".box",
        easing: "easeOutQuart",
        repeats: 2
      });
      var leftImageTop = new Anime.Anime({
        animatedAttrs: {
          backgroundPositionY: "".concat(this.attrs.height - this.attrs.imgHeight / 2, "px"),
          top: "-50%"
        },
        initialValues: {
          backgroundPositionY: "".concat(this.attrs.height - this.attrs.imgHeight / 2 + this.attrs.height, "px"),
          top: "-150%"
        }
      }, {
        duration: 300,
        selector: ".left-image",
        easing: "easeOutQuart"
      });
      var leftImageLeft = new Anime.Anime({
        animatedAttrs: {
          backgroundPositionX: "-".concat(this.attrs.imgWidth / 2 - this.attrs.width + this.attrs.width / 4, "px "),
          left: "-50%"
        },
        initialValues: {
          backgroundPositionX: "-".concat(this.attrs.imgWidth / 2 - this.attrs.width + this.attrs.width / 4 + this.attrs.width / 2, "px "),
          left: "100%"
        }
      }, {
        duration: 700,
        selector: ".left-image",
        easing: "easeOutQuart"
      });
      var rightImageTop = new Anime.Anime({
        animatedAttrs: {
          backgroundPositionY: "".concat(this.attrs.height - this.attrs.imgHeight / 2, "px"),
          top: "-50%"
        },
        initialValues: {
          backgroundPositionY: "-".concat((this.attrs.height - this.attrs.imgHeight / 2) * 4, "px"),
          top: "100%"
        }
      }, {
        duration: 700,
        selector: ".right-image",
        easing: "easeOutQuart"
      });
      var rightImageLeft = new Anime.Anime({
        animatedAttrs: {
          backgroundPositionX: "-".concat(this.attrs.imgWidth / 2 - this.attrs.width, "px"),
          left: "-200%"
        },
        initialValues: {
          backgroundPositionX: "-".concat(this.attrs.imgWidth / 2 - this.attrs.width, "px"),
          left: "-400%"
        }
      }, {
        duration: 200,
        selector: ".right-image",
        easing: "easeOutQuart"
      });
      var rightImageLeftWrapper = new Anime.Anime({
        animatedAttrs: {
          width: "".concat(this.attrs.width / 2, "px")
        },
        initialValues: {
          width: "".concat(this.attrs.width / 2 * 0.02, "px")
        }
      }, {
        duration: 200,
        selector: ".right-image-wrapper",
        easing: "easeOutQuart"
      });
      var dotedHalfOneOn = new Anime.Anime({
        animatedAttrs: {
          opacity: 1
        },
        initialValues: {
          opacity: 0
        }
      }, {
        duration: 1,
        selector: ".doted-half",
        easing: "easeOutQuart"
      });
      var dotedHalfOneOff = new Anime.Anime({
        animatedAttrs: {
          opacity: 0
        },
        initialValues: {
          opacity: 1
        }
      }, {
        duration: 1,
        selector: ".doted-half",
        easing: "easeOutQuart"
      });
      var dotedOneOn = new Anime.Anime({
        animatedAttrs: {
          opacity: 1
        },
        initialValues: {
          opacity: 0
        }
      }, {
        duration: 1,
        selector: ".doted",
        easing: "easeOutQuart"
      });
      var dotedOneOff = new Anime.Anime({
        animatedAttrs: {
          opacity: 0
        },
        initialValues: {
          opacity: 1
        }
      }, {
        duration: 1,
        selector: ".doted",
        easing: "easeOutQuart"
      });
      var bg2In = new Anime.Anime({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "100%"
        }
      }, {
        duration: 500,
        selector: ".bg2",
        easing: "easeOutQuart"
      });
      var bg2InBg = new Anime.Anime({
        animatedAttrs: {
          backgroundPositionX: "50%"
        },
        initialValues: {
          backgroundPositionX: "100%"
        }
      }, {
        duration: 500,
        selector: ".knockout",
        easing: "easeOutQuart"
      });
      var myGroup = new MotorCortex.Group();

      for (var i = 0; i < this.n; i++) {
        var textAnimationSize = new Anime.Anime({
          animatedAttrs: {
            fontSize: !this.attrs.txtGroupSize ? "".concat(this.attrs.width * 0.2, "px") : "".concat(this.attrs.txtGroupSize, "px"),
            marginLeft: i % 2 !== 1 ? "14%" : "6%"
          },
          initialValues: {
            fontSize: "0px",
            marginLeft: i % 2 !== 1 ? "85%" : "6%"
          }
        }, {
          duration: 500,
          selector: ".txt-" + i,
          easing: "easeOutCubic"
        });
        myGroup.addIncident(textAnimationSize, 500 + 50 * (i + 1));
      }

      var bg2OutBg = new Anime.Anime({
        animatedAttrs: {
          width: "0px"
        }
      }, {
        duration: 300,
        selector: ".bg2",
        easing: "easeOutQuart"
      });
      var bgInBg = new Anime.Anime({
        animatedAttrs: {
          opacity: 1
        },
        initialValues: {
          opacity: 0
        }
      }, {
        duration: 1,
        selector: ".bg",
        easing: "easeOutQuart"
      });
      var linesInOut = new Anime.Anime({
        animatedAttrs: {
          left: "-100%",
          width: "".concat(this.attrs.width / 2 * 0.1, "px")
        },
        initialValues: {
          left: "100%"
        }
      }, {
        duration: 1000,
        selector: ".lines-wrapper",
        easing: "easeOutQuart"
      });
      var circlesWrapper = new Anime.Anime({
        animatedAttrs: {
          opacity: 1
        },
        initialValues: {
          opacity: 0
        }
      }, {
        duration: 1,
        selector: ".circles-wrapper",
        easing: "easeOutQuart"
      });
      var circlesWrapperOp = new Anime.Anime({
        animatedAttrs: {
          opacity: 0
        },
        initialValues: {
          opacity: 1
        }
      }, {
        duration: 1,
        selector: ".circles-wrapper",
        easing: "easeOutQuart"
      });
      var circlesGroup = new MotorCortex.Group();

      for (var _i = 1; _i <= 3; _i++) {
        var ran = "".concat(Math.random() * 360 + "deg");
        var translateX = new Anime.Anime({
          animatedAttrs: {
            transform: {
              rotate: ran,
              translateX: "".concat(this.attrs.width / 2 * Math.random(), "px"),
              translateY: "".concat(this.attrs.width / 2 * Math.random(), "px")
            },
            width: "".concat(this.attrs.width * 0.2, "px"),
            height: "".concat(this.attrs.width * 0.2, "px"),
            border: " ".concat(0, "px solid ", this.attrs.mainColor)
          },
          initialValues: {
            transform: {
              rotate: ran,
              translateX: "0px",
              translateY: "0px"
            },
            width: "0px",
            height: "0px",
            border: " ".concat(this.attrs.width * 0.05, "px solid ").concat(this.attrs.mainColor)
          }
        }, {
          duration: 500,
          selector: ".circle-" + _i,
          easing: "easeOutCubic"
        });
        circlesGroup.addIncident(translateX, 500 + 50 * (_i + 1));
      }

      var centerTextWrapper = new Anime.Anime({
        animatedAttrs: {
          transform: {
            scale: 1
          }
        },
        initialValues: {
          transform: {
            scale: 0
          }
        }
      }, {
        duration: 500,
        selector: ".center-text-wrapper",
        easing: "easeOutBounce"
      });
      var centerTextAfter = new Anime.Anime({
        animatedAttrs: {
          left: "49%",
          top: "51%"
        },
        initialValues: {
          left: "50%",
          top: "50%"
        }
      }, {
        duration: 500,
        selector: ".center-text-after",
        easing: "easeOutBounce"
      });
      var centerTextBefore = new Anime.Anime({
        animatedAttrs: {
          left: "51%",
          top: "49%"
        },
        initialValues: {
          left: "50%",
          top: "50%"
        }
      }, {
        duration: 500,
        selector: ".center-text-before",
        easing: "easeOutBounce"
      });
      var slicedImgWrapper = new Anime.Anime({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "-100%"
        }
      }, {
        duration: 300,
        selector: ".sliced-img-wrapper",
        easing: "easeOutCubic"
      });
      var slicedImg = new Anime.Anime({
        animatedAttrs: {
          top: "0%"
        },
        initialValues: {
          top: "100%"
        }
      }, {
        duration: 300,
        selector: ".sliced-img",
        easing: "easeOutCubic"
      });
      var slicedImgWrappeClipPath = new Anime.Anime({
        animatedAttrs: {
          clipPath: "polygon(0 0, 100% 0, 100% 110%, 0 100%)"
        },
        initialValues: {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 90%)"
        }
      }, {
        duration: 300,
        selector: ".sliced-img-wrapper",
        easing: "easeOutCubic"
      });
      var slicedImgTranformUp = new Anime.Anime({
        animatedAttrs: {
          transform: {
            scale: 1.5
          }
        },
        initialValues: {
          transform: {
            scale: 1
          }
        }
      }, {
        duration: 150,
        selector: ".sliced-img",
        easing: "easeOutCubic"
      });
      var slicedImgTranformDown = new Anime.Anime({
        animatedAttrs: {
          transform: {
            scale: 1
          }
        },
        initialValues: {
          transform: {
            scale: 1.5
          }
        }
      }, {
        duration: 150,
        selector: ".sliced-img",
        easing: "easeOutCubic"
      });
      var slicedImgWrapperOpacity = new Anime.Anime({
        animatedAttrs: {
          opacity: 0
        },
        initialValues: {
          opacity: 1
        }
      }, {
        duration: 1,
        selector: ".sliced-img-wrapper,.center-text-wrapper",
        easing: "easeOutQuart"
      });
      var strokeTextWrapper = new Anime.Anime({
        animatedAttrs: {
          opacity: 1
        },
        initialValues: {
          opacity: 0
        }
      }, {
        duration: 300,
        selector: ".stroke-text-wrapper",
        easing: "easeOutQuart"
      });
      var strokeTextCenter = new Anime.Anime({
        animatedAttrs: {
          fontSize: "".concat(this.attrs.width * 0.15, "px"),
          left: "5%",
          height: "".concat(this.attrs.width * 0.15, "px")
        },
        initialValues: {
          fontSize: "".concat(0, "px"),
          left: "50%",
          height: "".concat(this.attrs.width * 0.15 * 3, "px")
        }
      }, {
        duration: 500,
        selector: ".stroke-text-center",
        easing: "easeOutQuart"
      });
      var strokeTextGroup = new MotorCortex.Group();

      for (var _i2 = 0; _i2 < this.strokeTextLength; _i2++) {
        var strokeTextOutline = new Anime.Anime({
          animatedAttrs: {
            left: _i2 % 2 !== 1 ? "-".concat(this.attrs.width * 0.1, "px") : "".concat(this.attrs.width * 0.1, "px")
          },
          initialValues: {
            left: _i2 % 2 === 1 ? "-".concat(this.attrs.width * 0.5, "px") : "".concat(this.attrs.width * 0.5, "px")
          }
        }, {
          duration: 3000 + 80 * (_i2 + 1),
          selector: ".txt-stroke-outline-" + _i2
        });
        strokeTextGroup.addIncident(strokeTextOutline, 500);
      }

      var bgDistortionOp = new Anime.Anime({
        animatedAttrs: {
          opacity: 0
        },
        initialValues: {
          opacity: 1
        }
      }, {
        duration: 20,
        selector: ".bg2"
      });
      var bgScaleUp = new Anime.Anime({
        animatedAttrs: {
          transform: {
            scale: 1.5
          }
        },
        initialValues: {
          transform: {
            scale: 1
          }
        }
      }, {
        duration: 200,
        selector: ".bg"
      });
      var bgScaleDown = new Anime.Anime({
        animatedAttrs: {
          transform: {
            scale: 1
          }
        },
        initialValues: {
          transform: {
            scale: 1.5
          }
        }
      }, {
        duration: 150,
        selector: ".bg"
      });
      var rngBoxDownIn = new Anime.Anime({
        animatedAttrs: {
          left: "30%"
        },
        initialValues: {
          left: "-70%"
        }
      }, {
        duration: 2000,
        selector: ".rng-box"
      });
      var yellowUnderLineLeftIn = new Anime.Anime({
        animatedAttrs: {
          left: "30%"
        },
        initialValues: {
          left: "-100%"
        }
      }, {
        duration: 2000,
        selector: ".yellow-underline"
      });
      var yellowUnderLineWidth = new Anime.Anime({
        animatedAttrs: {
          width: "0px"
        }
      }, {
        duration: 1000,
        selector: ".yellow-underline"
      });
      var yellowTransitionWidth = new Anime.Anime({
        animatedAttrs: {
          width: "0px"
        }
      }, {
        duration: 500,
        selector: ".yellow-transition"
      });
      var yellowTransitionLeft = new Anime.Anime({
        animatedAttrs: {
          left: "-100%"
        }
      }, {
        duration: 1000,
        selector: ".yellow-transition"
      });
      var circlesGroup2 = new MotorCortex.Group();
      var circlesWrapper2 = new Anime.Anime({
        animatedAttrs: {
          opacity: 1
        },
        initialValues: {
          opacity: 0
        }
      }, {
        duration: 1,
        selector: ".circles-wrapper",
        easing: "easeOutQuart"
      });
      var circlesWrapper2Position = new Anime.Anime({
        animatedAttrs: {
          top: "-33%",
          left: "-33%"
        }
      }, {
        duration: 1,
        selector: ".circles-wrapper",
        easing: "easeOutQuart"
      });

      for (var _i3 = 1; _i3 <= 3; _i3++) {
        var _ran = "".concat(Math.random() * 360 + "deg");

        var _translateX = new Anime.Anime({
          animatedAttrs: {
            transform: {
              rotate: _ran,
              translateX: "".concat(this.attrs.width / 2 * Math.random(), "px"),
              translateY: "".concat(this.attrs.width / 2 * Math.random(), "px")
            },
            width: "".concat(this.attrs.width * 0.2, "px"),
            height: "".concat(this.attrs.width * 0.2, "px"),
            border: " ".concat(0, "px solid yellow")
          },
          initialValues: {
            transform: {
              rotate: _ran,
              translateX: "0px",
              translateY: "0px"
            },
            width: "0px",
            height: "0px",
            border: " ".concat(this.attrs.width * 0.05, "px solid yellow")
          }
        }, {
          duration: 500,
          selector: ".circle-" + _i3,
          easing: "easeOutCubic"
        });

        circlesGroup2.addIncident(_translateX, 500 + 50 * (_i3 + 1));
      }

      var blackBoxRotate = new Anime.Anime({
        animatedAttrs: {
          transform: {
            rotate: "-90deg"
          }
        },
        initialValues: {
          transform: {
            rotate: "0deg"
          }
        }
      }, {
        duration: 600,
        selector: ".leftBlackBox,.rightBlackBox"
      });
      var blackBoxLeftTop = new Anime.Anime({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "-200%"
        }
      }, {
        duration: 1000,
        selector: ".leftBlackBox"
      });
      var blackBoxRightTop = new Anime.Anime({
        animatedAttrs: {
          left: "0%"
        },
        initialValues: {
          left: "100%"
        }
      }, {
        duration: 1000,
        selector: ".rightBlackBox"
      });
      this.addIncident(box, 0);
      this.addIncident(leftImageTop, 350);
      this.addIncident(leftImageLeft, 350);
      this.addIncident(rightImageTop, 0);
      this.addIncident(rightImageLeft, 350);
      this.addIncident(rightImageLeftWrapper, 350);
      this.addIncident(dotedHalfOneOn, 450);
      this.addIncident(dotedHalfOneOff, 600);
      this.addIncident(dotedOneOn, 600);
      this.addIncident(dotedOneOff, 1000);
      this.addIncident(bg2In, 700);
      this.addIncident(bg2InBg, 700);
      this.addIncident(myGroup, 500);
      this.addIncident(bg2OutBg, 1800);
      this.addIncident(bgInBg, 1779);
      this.addIncident(linesInOut, 1900);
      this.addIncident(circlesWrapper, 2000);
      this.addIncident(circlesGroup, 1400);
      this.addIncident(circlesWrapperOp, 2660);
      this.addIncident(centerTextWrapper, 2000);
      this.addIncident(centerTextAfter, 2170);
      this.addIncident(centerTextBefore, 2170);
      this.addIncident(slicedImgWrapper, 2500);
      this.addIncident(slicedImg, 2500);
      this.addIncident(slicedImgWrappeClipPath, 2700);
      this.addIncident(slicedImgTranformUp, 2550);
      this.addIncident(slicedImgTranformDown, 2850);
      this.addIncident(slicedImgWrapperOpacity, 3000);
      this.addIncident(strokeTextWrapper, 3000);
      this.addIncident(strokeTextCenter, 3000);
      this.addIncident(yellowTransitionLeft, 2400);
      this.addIncident(yellowTransitionWidth, 3000);
      this.addIncident(strokeTextGroup, 2400);
      this.addIncident(bgDistortionOp, 2920);
      this.addIncident(bgScaleUp, 3640);
      this.addIncident(bgScaleDown, 3840);
      this.addIncident(rngBoxDownIn, 4300);
      this.addIncident(yellowUnderLineLeftIn, 4200);
      this.addIncident(yellowUnderLineWidth, 5200);
      this.addIncident(circlesWrapper2, 3000);
      this.addIncident(circlesWrapper2Position, 3000);
      this.addIncident(circlesGroup2, 3010);
      this.addIncident(blackBoxRotate, 6000);
      this.addIncident(blackBoxLeftTop, 6000);
      this.addIncident(blackBoxRightTop, 6000);
    }
  }]);

  return BannerA;
}(MotorCortex.HTMLClip);

var BannerAValidation = {
  width: {
    optional: false,
    type: "number"
  },
  height: {
    optional: false,
    type: "number"
  },
  bgUrl: {
    optional: false,
    type: "string"
  },
  overlayColor: {
    optional: false,
    type: "array",
    min: 2,
    items: {
      optional: true,
      type: "color"
    }
  },
  imgWidth: {
    optional: false,
    type: "number"
  },
  imgHeight: {
    optional: false,
    type: "number"
  },
  strokeText: {
    type: "string"
  },
  txtGroupSize: {
    optional: true,
    type: "number"
  },
  mainColor: {
    optional: false,
    type: "color"
  },
  centerText: {
    type: "string"
  }
};

var name = "@donkeyclip/motorcortex-banners";
var version = "0.0.15";

var index = {
  npm_name: name,
  version: version,
  incidents: [{
    exportable: BannerA,
    name: "BannerA",
    attributesValidationRules: _objectSpread2$1({}, BannerAValidation)
  }]
};

module.exports = index;
