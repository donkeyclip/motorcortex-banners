import { CSSEffect, Group, HTMLClip } from '@donkeyclip/motorcortex';

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

var check = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


var global$x = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$h = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$g = fails$h; // Detect IE8's incomplete defineProperty implementation

var descriptors = !fails$g(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});

var fails$f = fails$h;
var functionBindNative = !fails$f(function () {
  var test = function () {
    /* empty */
  }.bind(); // eslint-disable-next-line no-prototype-builtins -- safe


  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$2 = functionBindNative;
var call$8 = Function.prototype.call;
var functionCall = NATIVE_BIND$2 ? call$8.bind(call$8) : function () {
  return call$8.apply(call$8, arguments);
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

var NATIVE_BIND$1 = functionBindNative;
var FunctionPrototype$2 = Function.prototype;
var bind = FunctionPrototype$2.bind;
var call$7 = FunctionPrototype$2.call;
var uncurryThis$h = NATIVE_BIND$1 && bind.bind(call$7, call$7);
var functionUncurryThis = NATIVE_BIND$1 ? function (fn) {
  return fn && uncurryThis$h(fn);
} : function (fn) {
  return fn && function () {
    return call$7.apply(fn, arguments);
  };
};

var uncurryThis$g = functionUncurryThis;
var toString$6 = uncurryThis$g({}.toString);
var stringSlice$4 = uncurryThis$g(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice$4(toString$6(it), 8, -1);
};

var global$w = global$x;
var uncurryThis$f = functionUncurryThis;
var fails$e = fails$h;
var classof$6 = classofRaw$1;
var Object$4 = global$w.Object;
var split = uncurryThis$f(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

var indexedObject = fails$e(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$6(it) == 'String' ? split(it, '') : Object$4(it);
} : Object$4;

var global$v = global$x;
var TypeError$a = global$v.TypeError; // `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible

var requireObjectCoercible$5 = function (it) {
  if (it == undefined) throw TypeError$a("Can't call method on " + it);
  return it;
};

var IndexedObject$1 = indexedObject;
var requireObjectCoercible$4 = requireObjectCoercible$5;

var toIndexedObject$5 = function (it) {
  return IndexedObject$1(requireObjectCoercible$4(it));
};

// https://tc39.es/ecma262/#sec-iscallable

var isCallable$c = function (argument) {
  return typeof argument == 'function';
};

var isCallable$b = isCallable$c;

var isObject$8 = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$b(it);
};

var global$u = global$x;
var isCallable$a = isCallable$c;

var aFunction = function (argument) {
  return isCallable$a(argument) ? argument : undefined;
};

var getBuiltIn$5 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$u[namespace]) : global$u[namespace] && global$u[namespace][method];
};

var uncurryThis$e = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$e({}.isPrototypeOf);

var getBuiltIn$4 = getBuiltIn$5;
var engineUserAgent = getBuiltIn$4('navigator', 'userAgent') || '';

var global$t = global$x;
var userAgent = engineUserAgent;
var process = global$t.process;
var Deno = global$t.Deno;
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
var fails$d = fails$h; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$d(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$1 = nativeSymbol;
var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

var global$s = global$x;
var getBuiltIn$3 = getBuiltIn$5;
var isCallable$9 = isCallable$c;
var isPrototypeOf = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var Object$3 = global$s.Object;
var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$3('Symbol');
  return isCallable$9($Symbol) && isPrototypeOf($Symbol.prototype, Object$3(it));
};

var global$r = global$x;
var String$4 = global$r.String;

var tryToString$2 = function (argument) {
  try {
    return String$4(argument);
  } catch (error) {
    return 'Object';
  }
};

var global$q = global$x;
var isCallable$8 = isCallable$c;
var tryToString$1 = tryToString$2;
var TypeError$9 = global$q.TypeError; // `Assert: IsCallable(argument) is true`

var aCallable$1 = function (argument) {
  if (isCallable$8(argument)) return argument;
  throw TypeError$9(tryToString$1(argument) + ' is not a function');
};

var aCallable = aCallable$1; // `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod

var getMethod$2 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};

var global$p = global$x;
var call$6 = functionCall;
var isCallable$7 = isCallable$c;
var isObject$7 = isObject$8;
var TypeError$8 = global$p.TypeError; // `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive

var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$7(fn = input.toString) && !isObject$7(val = call$6(fn, input))) return val;
  if (isCallable$7(fn = input.valueOf) && !isObject$7(val = call$6(fn, input))) return val;
  if (pref !== 'string' && isCallable$7(fn = input.toString) && !isObject$7(val = call$6(fn, input))) return val;
  throw TypeError$8("Can't convert object to primitive value");
};

var shared$4 = {exports: {}};

var global$o = global$x; // eslint-disable-next-line es/no-object-defineproperty -- safe

var defineProperty = Object.defineProperty;

var setGlobal$3 = function (key, value) {
  try {
    defineProperty(global$o, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global$o[key] = value;
  }

  return value;
};

var global$n = global$x;
var setGlobal$2 = setGlobal$3;
var SHARED = '__core-js_shared__';
var store$3 = global$n[SHARED] || setGlobal$2(SHARED, {});
var sharedStore = store$3;

var store$2 = sharedStore;
(shared$4.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.21.0',
  mode: 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.21.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var global$m = global$x;
var requireObjectCoercible$3 = requireObjectCoercible$5;
var Object$2 = global$m.Object; // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject

var toObject$2 = function (argument) {
  return Object$2(requireObjectCoercible$3(argument));
};

var uncurryThis$d = functionUncurryThis;
var toObject$1 = toObject$2;
var hasOwnProperty = uncurryThis$d({}.hasOwnProperty); // `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty

var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$1(it), key);
};

var uncurryThis$c = functionUncurryThis;
var id = 0;
var postfix = Math.random();
var toString$5 = uncurryThis$c(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$5(++id + postfix, 36);
};

var global$l = global$x;
var shared$3 = shared$4.exports;
var hasOwn$6 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = nativeSymbol;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var WellKnownSymbolsStore = shared$3('wks');
var Symbol$1 = global$l.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$9 = function (name) {
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

var global$k = global$x;
var call$5 = functionCall;
var isObject$6 = isObject$8;
var isSymbol$1 = isSymbol$2;
var getMethod$1 = getMethod$2;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$8 = wellKnownSymbol$9;
var TypeError$7 = global$k.TypeError;
var TO_PRIMITIVE = wellKnownSymbol$8('toPrimitive'); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive

var toPrimitive$1 = function (input, pref) {
  if (!isObject$6(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$1(input, TO_PRIMITIVE);
  var result;

  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$5(exoticToPrim, input, pref);
    if (!isObject$6(result) || isSymbol$1(result)) return result;
    throw TypeError$7("Can't convert object to primitive value");
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

var global$j = global$x;
var isObject$5 = isObject$8;
var document$1 = global$j.document; // typeof document.createElement is 'object' in old IE

var EXISTS$1 = isObject$5(document$1) && isObject$5(document$1.createElement);

var documentCreateElement$1 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$6 = descriptors;
var fails$c = fails$h;
var createElement = documentCreateElement$1; // Thanks to IE8 for its funny defineProperty

var ie8DomDefine = !DESCRIPTORS$6 && !fails$c(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

var DESCRIPTORS$5 = descriptors;
var call$4 = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;
var toIndexedObject$4 = toIndexedObject$5;
var toPropertyKey$2 = toPropertyKey$3;
var hasOwn$5 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

objectGetOwnPropertyDescriptor.f = DESCRIPTORS$5 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$4(O);
  P = toPropertyKey$2(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) {
    /* empty */
  }
  if (hasOwn$5(O, P)) return createPropertyDescriptor$2(!call$4(propertyIsEnumerableModule.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$4 = descriptors;
var fails$b = fails$h; // V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334

var v8PrototypeDefineBug = DESCRIPTORS$4 && fails$b(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () {
    /* empty */
  }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var global$i = global$x;
var isObject$4 = isObject$8;
var String$3 = global$i.String;
var TypeError$6 = global$i.TypeError; // `Assert: Type(argument) is Object`

var anObject$8 = function (argument) {
  if (isObject$4(argument)) return argument;
  throw TypeError$6(String$3(argument) + ' is not an object');
};

var global$h = global$x;
var DESCRIPTORS$3 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$7 = anObject$8;
var toPropertyKey$1 = toPropertyKey$3;
var TypeError$5 = global$h.TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe

var $defineProperty = Object.defineProperty; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable'; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

objectDefineProperty.f = DESCRIPTORS$3 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$7(O);
  P = toPropertyKey$1(P);
  anObject$7(Attributes);

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
  anObject$7(O);
  P = toPropertyKey$1(P);
  anObject$7(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError$5('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$2 = descriptors;
var definePropertyModule$3 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;
var createNonEnumerableProperty$4 = DESCRIPTORS$2 ? function (object, key, value) {
  return definePropertyModule$3.f(object, key, createPropertyDescriptor$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var redefine$2 = {exports: {}};

var uncurryThis$b = functionUncurryThis;
var isCallable$6 = isCallable$c;
var store$1 = sharedStore;
var functionToString = uncurryThis$b(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (!isCallable$6(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store$1.inspectSource;

var global$g = global$x;
var isCallable$5 = isCallable$c;
var inspectSource$2 = inspectSource$3;
var WeakMap$1 = global$g.WeakMap;
var nativeWeakMap = isCallable$5(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1));

var shared$2 = shared$4.exports;
var uid = uid$2;
var keys = shared$2('keys');

var sharedKey$2 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = nativeWeakMap;
var global$f = global$x;
var uncurryThis$a = functionUncurryThis;
var isObject$3 = isObject$8;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;
var hasOwn$4 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$1 = sharedKey$2;
var hiddenKeys$3 = hiddenKeys$4;
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$4 = global$f.TypeError;
var WeakMap = global$f.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;

    if (!isObject$3(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$4('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP || shared$1.state) {
  var store = shared$1.state || (shared$1.state = new WeakMap());
  var wmget = uncurryThis$a(store.get);
  var wmhas = uncurryThis$a(store.has);
  var wmset = uncurryThis$a(store.set);

  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError$4(OBJECT_ALREADY_INITIALIZED);
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
  var STATE = sharedKey$1('state');
  hiddenKeys$3[STATE] = true;

  set = function (it, metadata) {
    if (hasOwn$4(it, STATE)) throw new TypeError$4(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$3(it, STATE, metadata);
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

var DESCRIPTORS$1 = descriptors;
var hasOwn$3 = hasOwnProperty_1;
var FunctionPrototype$1 = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getDescriptor = DESCRIPTORS$1 && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$3(FunctionPrototype$1, 'name'); // additional protection from minified / mangled / dropped function names

var PROPER = EXISTS && function something() {
  /* empty */
}.name === 'something';

var CONFIGURABLE = EXISTS && (!DESCRIPTORS$1 || DESCRIPTORS$1 && getDescriptor(FunctionPrototype$1, 'name').configurable);
var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var global$e = global$x;
var isCallable$4 = isCallable$c;
var hasOwn$2 = hasOwnProperty_1;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$4;
var setGlobal$1 = setGlobal$3;
var inspectSource$1 = inspectSource$3;
var InternalStateModule = internalState;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var getInternalState$1 = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(redefine$2.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;

  if (isCallable$4(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }

    if (!hasOwn$2(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
      createNonEnumerableProperty$2(value, 'name', name);
    }

    state = enforceInternalState(value);

    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }

  if (O === global$e) {
    if (simple) O[key] = value;else setGlobal$1(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else createNonEnumerableProperty$2(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable$4(this) && getInternalState$1(this).source || inspectSource$1(this);
});

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor$1 = Math.floor; // `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity

var toIntegerOrInfinity$5 = function (argument) {
  var number = +argument; // eslint-disable-next-line no-self-compare -- safe

  return number !== number || number === 0 ? 0 : (number > 0 ? floor$1 : ceil)(number);
};

var toIntegerOrInfinity$4 = toIntegerOrInfinity$5;
var max$1 = Math.max;
var min$2 = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

var toAbsoluteIndex$2 = function (index, length) {
  var integer = toIntegerOrInfinity$4(index);
  return integer < 0 ? max$1(integer + length, 0) : min$2(integer, length);
};

var toIntegerOrInfinity$3 = toIntegerOrInfinity$5;
var min$1 = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

var toLength$2 = function (argument) {
  return argument > 0 ? min$1(toIntegerOrInfinity$3(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$1 = toLength$2; // `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike

var lengthOfArrayLike$3 = function (obj) {
  return toLength$1(obj.length);
};

var toIndexedObject$3 = toIndexedObject$5;
var toAbsoluteIndex$1 = toAbsoluteIndex$2;
var lengthOfArrayLike$2 = lengthOfArrayLike$3; // `Array.prototype.{ indexOf, includes }` methods implementation

var createMethod$1 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$3($this);
    var length = lengthOfArrayLike$2(O);
    var index = toAbsoluteIndex$1(fromIndex, length);
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
  includes: createMethod$1(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$1(false)
};

var uncurryThis$9 = functionUncurryThis;
var hasOwn$1 = hasOwnProperty_1;
var toIndexedObject$2 = toIndexedObject$5;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;
var push$1 = uncurryThis$9([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$2(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !hasOwn$1(hiddenKeys$2, key) && hasOwn$1(O, key) && push$1(result, key); // Don't enum bug & hidden keys


  while (names.length > i) if (hasOwn$1(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$1(result, key);
  }

  return result;
};

var enumBugKeys$3 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;
var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$1);
};

var objectGetOwnPropertySymbols = {};

objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$2 = getBuiltIn$5;
var uncurryThis$8 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject$6 = anObject$8;
var concat = uncurryThis$8([].concat); // all object keys, includes non-enumerable and symbols

var ownKeys$1 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$6(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$2 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$2.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$a = fails$h;
var isCallable$3 = isCallable$c;
var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : isCallable$3(detection) ? fails$a(detection) : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';
var isForced_1 = isForced$1;

var global$d = global$x;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;
var redefine$1 = redefine$2.exports;
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
    target = global$d;
  } else if (STATIC) {
    target = global$d[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$d[TARGET] || {}).prototype;
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
      createNonEnumerableProperty$1(sourceProperty, 'sham', true);
    } // extend global


    redefine$1(target, key, sourceProperty, options);
  }
};

var classof$5 = classofRaw$1; // `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe

var isArray$2 = Array.isArray || function isArray(argument) {
  return classof$5(argument) == 'Array';
};

var toPropertyKey = toPropertyKey$3;
var definePropertyModule$1 = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$3;

var createProperty$2 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule$1.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

var wellKnownSymbol$7 = wellKnownSymbol$9;
var TO_STRING_TAG$1 = wellKnownSymbol$7('toStringTag');
var test = {};
test[TO_STRING_TAG$1] = 'z';
var toStringTagSupport = String(test) === '[object z]';

var global$c = global$x;
var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$2 = isCallable$c;
var classofRaw = classofRaw$1;
var wellKnownSymbol$6 = wellKnownSymbol$9;
var TO_STRING_TAG = wellKnownSymbol$6('toStringTag');
var Object$1 = global$c.Object; // ES3 wrong here

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


var classof$4 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object$1(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && isCallable$2(O.callee) ? 'Arguments' : result;
};

var uncurryThis$7 = functionUncurryThis;
var fails$9 = fails$h;
var isCallable$1 = isCallable$c;
var classof$3 = classof$4;
var getBuiltIn$1 = getBuiltIn$5;
var inspectSource = inspectSource$3;

var noop = function () {
  /* empty */
};

var empty = [];
var construct = getBuiltIn$1('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$2 = uncurryThis$7(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$1(argument)) return false;

  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$1(argument)) return false;

  switch (classof$3(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction':
      return false;
  }

  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true; // `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor

var isConstructor$2 = !construct || fails$9(function () {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;

var global$b = global$x;
var isArray$1 = isArray$2;
var isConstructor$1 = isConstructor$2;
var isObject$2 = isObject$8;
var wellKnownSymbol$5 = wellKnownSymbol$9;
var SPECIES$3 = wellKnownSymbol$5('species');
var Array$2 = global$b.Array; // a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesConstructor$1 = function (originalArray) {
  var C;

  if (isArray$1(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (isConstructor$1(C) && (C === Array$2 || isArray$1(C.prototype))) C = undefined;else if (isObject$2(C)) {
      C = C[SPECIES$3];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array$2 : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1; // `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesCreate$1 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var fails$8 = fails$h;
var wellKnownSymbol$4 = wellKnownSymbol$9;
var V8_VERSION$1 = engineV8Version;
var SPECIES$2 = wellKnownSymbol$4('species');

var arrayMethodHasSpeciesSupport$1 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION$1 >= 51 || !fails$8(function () {
    var array = [];
    var constructor = array.constructor = {};

    constructor[SPECIES$2] = function () {
      return {
        foo: 1
      };
    };

    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $$3 = _export;
var global$a = global$x;
var fails$7 = fails$h;
var isArray = isArray$2;
var isObject$1 = isObject$8;
var toObject = toObject$2;
var lengthOfArrayLike$1 = lengthOfArrayLike$3;
var createProperty$1 = createProperty$2;
var arraySpeciesCreate = arraySpeciesCreate$1;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$1;
var wellKnownSymbol$3 = wellKnownSymbol$9;
var V8_VERSION = engineV8Version;
var IS_CONCAT_SPREADABLE = wellKnownSymbol$3('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError$3 = global$a.TypeError; // We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679

var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$7(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject$1(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species

$$3({
  target: 'Array',
  proto: true,
  forced: FORCED$1
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
        len = lengthOfArrayLike$1(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError$3(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

        for (k = 0; k < len; k++, n++) if (k in E) createProperty$1(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError$3(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty$1(A, n++, E);
      }
    }

    A.length = n;
    return A;
  }
});

var fails$6 = fails$h;

var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$6(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () {
      throw 1;
    }, 1);
  });
};

var $$2 = _export;
var uncurryThis$6 = functionUncurryThis;
var IndexedObject = indexedObject;
var toIndexedObject$1 = toIndexedObject$5;
var arrayMethodIsStrict = arrayMethodIsStrict$1;
var un$Join = uncurryThis$6([].join);
var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ','); // `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join

$$2({
  target: 'Array',
  proto: true,
  forced: ES3_STRINGS || !STRICT_METHOD
}, {
  join: function join(separator) {
    return un$Join(toIndexedObject$1(this), separator === undefined ? ',' : separator);
  }
});

var global$9 = global$x;
var classof$2 = classof$4;
var String$2 = global$9.String;

var toString$4 = function (argument) {
  if (classof$2(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String$2(argument);
};

var anObject$5 = anObject$8; // `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags

var regexpFlags$1 = function () {
  var that = anObject$5(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var fails$5 = fails$h;
var global$8 = global$x; // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError

var $RegExp$2 = global$8.RegExp;
var UNSUPPORTED_Y$2 = fails$5(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
}); // UC Browser bug
// https://github.com/zloirock/core-js/issues/1008

var MISSED_STICKY = UNSUPPORTED_Y$2 || fails$5(function () {
  return !$RegExp$2('a', 'y').sticky;
});
var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$5(function () {
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

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3; // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe

var objectKeys$1 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule = objectDefineProperty;
var anObject$4 = anObject$8;
var toIndexedObject = toIndexedObject$5;
var objectKeys = objectKeys$1; // `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe

objectDefineProperties.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$4(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);

  return O;
};

var getBuiltIn = getBuiltIn$5;
var html$1 = getBuiltIn('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */
var anObject$3 = anObject$8;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html = html$1;
var documentCreateElement = documentCreateElement$1;
var sharedKey = sharedKey$2;
var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

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
  var iframe = documentCreateElement('iframe');
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

  var length = enumBugKeys.length;

  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];

  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true; // `Object.create` method
// https://tc39.es/ecma262/#sec-object.create

var objectCreate = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$3(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = NullProtoObject();

  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var fails$4 = fails$h;
var global$7 = global$x; // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError

var $RegExp$1 = global$7.RegExp;
var regexpUnsupportedDotAll = fails$4(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$3 = fails$h;
var global$6 = global$x; // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError

var $RegExp = global$6.RegExp;
var regexpUnsupportedNcg = fails$3(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */

/* eslint-disable regexp/no-useless-quantifier -- testing */


var call$3 = functionCall;
var uncurryThis$5 = functionUncurryThis;
var toString$3 = toString$4;
var regexpFlags = regexpFlags$1;
var stickyHelpers$1 = regexpStickyHelpers;
var shared = shared$4.exports;
var create = objectCreate;
var getInternalState = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;
var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$2 = uncurryThis$5(''.charAt);
var indexOf = uncurryThis$5(''.indexOf);
var replace = uncurryThis$5(''.replace);
var stringSlice$3 = uncurryThis$5(''.slice);

var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$3(nativeExec, re1, 'a');
  call$3(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();

var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString$3(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$3(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y$1 && re.sticky;
    var flags = call$3(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');

      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$3(str, re.lastIndex); // Support anchored sticky behavior.

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
    match = call$3(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$3(match.input, charsAdded);
        match[0] = stringSlice$3(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }

    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      call$3(nativeReplace, match[0], reCopy, function () {
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

var $$1 = _export;
var exec$1 = regexpExec$3; // `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec

$$1({
  target: 'RegExp',
  proto: true,
  forced: /./.exec !== exec$1
}, {
  exec: exec$1
});

var NATIVE_BIND = functionBindNative;
var FunctionPrototype = Function.prototype;
var apply$1 = FunctionPrototype.apply;
var call$2 = FunctionPrototype.call; // eslint-disable-next-line es/no-reflect -- safe

var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call$2.bind(apply$1) : function () {
  return call$2.apply(apply$1, arguments);
});

var uncurryThis$4 = functionUncurryThis;
var redefine = redefine$2.exports;
var regexpExec$2 = regexpExec$3;
var fails$2 = fails$h;
var wellKnownSymbol$2 = wellKnownSymbol$9;
var createNonEnumerableProperty = createNonEnumerableProperty$4;
var SPECIES$1 = wellKnownSymbol$2('species');
var RegExpPrototype = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$2(KEY);
  var DELEGATES_TO_SYMBOL = !fails$2(function () {
    // String methods call symbol-named RegEp methods
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$2(function () {
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

      re.constructor[SPECIES$1] = function () {
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
    var uncurriedNativeRegExpMethod = uncurryThis$4(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$4(nativeMethod);
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
    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};

var isObject = isObject$8;
var classof$1 = classofRaw$1;
var wellKnownSymbol$1 = wellKnownSymbol$9;
var MATCH = wellKnownSymbol$1('match'); // `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp

var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof$1(it) == 'RegExp');
};

var global$5 = global$x;
var isConstructor = isConstructor$2;
var tryToString = tryToString$2;
var TypeError$2 = global$5.TypeError; // `Assert: IsConstructor(argument) is true`

var aConstructor$1 = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError$2(tryToString(argument) + ' is not a constructor');
};

var anObject$2 = anObject$8;
var aConstructor = aConstructor$1;
var wellKnownSymbol = wellKnownSymbol$9;
var SPECIES = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor

var speciesConstructor$1 = function (O, defaultConstructor) {
  var C = anObject$2(O).constructor;
  var S;
  return C === undefined || (S = anObject$2(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};

var uncurryThis$3 = functionUncurryThis;
var toIntegerOrInfinity$2 = toIntegerOrInfinity$5;
var toString$2 = toString$4;
var requireObjectCoercible$2 = requireObjectCoercible$5;
var charAt$1 = uncurryThis$3(''.charAt);
var charCodeAt = uncurryThis$3(''.charCodeAt);
var stringSlice$2 = uncurryThis$3(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$2(requireObjectCoercible$2($this));
    var position = toIntegerOrInfinity$2(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt$1(S, position) : first : CONVERT_TO_STRING ? stringSlice$2(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

var charAt = stringMultibyte.charAt; // `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex

var advanceStringIndex$1 = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};

var global$4 = global$x;
var toAbsoluteIndex = toAbsoluteIndex$2;
var lengthOfArrayLike = lengthOfArrayLike$3;
var createProperty = createProperty$2;
var Array$1 = global$4.Array;
var max = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = Array$1(max(fin - k, 0));

  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);

  result.length = n;
  return result;
};

var global$3 = global$x;
var call$1 = functionCall;
var anObject$1 = anObject$8;
var isCallable = isCallable$c;
var classof = classofRaw$1;
var regexpExec$1 = regexpExec$3;
var TypeError$1 = global$3.TypeError; // `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec

var regexpExecAbstract = function (R, S) {
  var exec = R.exec;

  if (isCallable(exec)) {
    var result = call$1(exec, R, S);
    if (result !== null) anObject$1(result);
    return result;
  }

  if (classof(R) === 'RegExp') return call$1(regexpExec$1, R, S);
  throw TypeError$1('RegExp#exec called on incompatible receiver');
};

var apply = functionApply;
var call = functionCall;
var uncurryThis$2 = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var isRegExp = isRegexp;
var anObject = anObject$8;
var requireObjectCoercible$1 = requireObjectCoercible$5;
var speciesConstructor = speciesConstructor$1;
var advanceStringIndex = advanceStringIndex$1;
var toLength = toLength$2;
var toString$1 = toString$4;
var getMethod = getMethod$2;
var arraySlice = arraySliceSimple;
var callRegExpExec = regexpExecAbstract;
var regexpExec = regexpExec$3;
var stickyHelpers = regexpStickyHelpers;
var fails$1 = fails$h;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var $push = [].push;
var exec = uncurryThis$2(/./.exec);
var push = uncurryThis$2($push);
var stringSlice$1 = uncurryThis$2(''.slice); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$1(function () {
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
      var string = toString$1(requireObjectCoercible$1(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

      if (!isRegExp(separator)) {
        return call(nativeSplit, string, separator, lim);
      }

      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;

      while (match = call(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;

        if (lastIndex > lastLastIndex) {
          push(output, stringSlice$1(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }

        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }

      if (lastLastIndex === string.length) {
        if (lastLength || !exec(separatorCopy, '')) push(output, '');
      } else push(output, stringSlice$1(string, lastLastIndex));

      return output.length > lim ? arraySlice(output, 0, lim) : output;
    }; // Chakra, V8

  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [// `String.prototype.split` method
  // https://tc39.es/ecma262/#sec-string.prototype.split
  function split(separator, limit) {
    var O = requireObjectCoercible$1(this);
    var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
    return splitter ? call(splitter, separator, O, limit) : call(internalSplit, toString$1(O), separator, limit);
  }, // `RegExp.prototype[@@split]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
  //
  // NOTE: This cannot be properly polyfilled in engines that don't support
  // the 'y' flag.
  function (string, limit) {
    var rx = anObject(this);
    var S = toString$1(string);
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
      var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice$1(S, q) : S);
      var e;

      if (z === null || (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
        q = advanceStringIndex(S, q, unicodeMatching);
      } else {
        push(A, stringSlice$1(S, p, q));
        if (A.length === lim) return A;

        for (var i = 1; i <= z.length - 1; i++) {
          push(A, z[i]);
          if (A.length === lim) return A;
        }

        q = p = e;
      }
    }

    push(A, stringSlice$1(S, p));
    return A;
  }];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

var uncurryThis$1 = functionUncurryThis; // `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue

var thisNumberValue$1 = uncurryThis$1(1.0.valueOf);

var global$2 = global$x;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$5;
var toString = toString$4;
var requireObjectCoercible = requireObjectCoercible$5;
var RangeError$1 = global$2.RangeError; // `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat

var stringRepeat = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity$1(count);
  if (n < 0 || n == Infinity) throw RangeError$1('Wrong number of repetitions');

  for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;

  return result;
};

var $ = _export;
var global$1 = global$x;
var uncurryThis = functionUncurryThis;
var toIntegerOrInfinity = toIntegerOrInfinity$5;
var thisNumberValue = thisNumberValue$1;
var $repeat = stringRepeat;
var fails = fails$h;
var RangeError = global$1.RangeError;
var String$1 = global$1.String;
var floor = Math.floor;
var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);
var un$ToFixed = uncurryThis(1.0.toFixed);

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
    c2 = floor(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;

  while (--index >= 0) {
    c += data[index];
    data[index] = floor(c / n);
    c = c % n * 1e7;
  }
};

var dataToString = function (data) {
  var index = 6;
  var s = '';

  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = String$1(data[index]);
      s = s === '' ? t : s + repeat('0', 7 - t.length) + t;
    }
  }

  return s;
};

var FORCED = fails(function () {
  return un$ToFixed(0.00008, 3) !== '0.000' || un$ToFixed(0.9, 0) !== '1' || un$ToFixed(1.255, 2) !== '1.25' || un$ToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
}) || !fails(function () {
  // V8 ~ Android 4.3-
  un$ToFixed({});
}); // `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed

$({
  target: 'Number',
  proto: true,
  forced: FORCED
}, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toIntegerOrInfinity(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k; // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits'); // eslint-disable-next-line no-self-compare -- NaN check

    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String$1(number);

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
      result = sign + (k <= fractDigits ? '0.' + repeat('0', fractDigits - k) + result : stringSlice(result, 0, k - fractDigits) + '.' + stringSlice(result, k - fractDigits));
    } else {
      result = sign + result;
    }

    return result;
  }
});

var BannerA = /*#__PURE__*/function (_HTMLClip) {
  _inherits(BannerA, _HTMLClip);

  var _super = _createSuper(BannerA);

  function BannerA() {
    _classCallCheck(this, BannerA);

    return _super.apply(this, arguments);
  }

  _createClass(BannerA, [{
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
      var box = new CSSEffect({
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
      var leftImageTop = new CSSEffect({
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
      var leftImageLeft = new CSSEffect({
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
      var rightImageTop = new CSSEffect({
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
      var rightImageLeft = new CSSEffect({
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
      var rightImageLeftWrapper = new CSSEffect({
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
      var dotedHalfOneOn = new CSSEffect({
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
      var dotedHalfOneOff = new CSSEffect({
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
      var dotedOneOn = new CSSEffect({
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
      var dotedOneOff = new CSSEffect({
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
      var bg2In = new CSSEffect({
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
      var bg2InBg = new CSSEffect({
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
      var myGroup = new Group();

      for (var i = 0; i < this.n; i++) {
        var textAnimationSize = new CSSEffect({
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

      var bg2OutBg = new CSSEffect({
        animatedAttrs: {
          width: "0px"
        }
      }, {
        duration: 300,
        selector: ".bg2",
        easing: "easeOutQuart"
      });
      var bgInBg = new CSSEffect({
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
      var linesInOut = new CSSEffect({
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
      var circlesWrapper = new CSSEffect({
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
      var circlesWrapperOp = new CSSEffect({
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
      var circlesGroup = new Group();

      for (var _i = 1; _i <= 3; _i++) {
        var ran = "".concat(Math.random() * 360 + "deg");
        var translateX = new CSSEffect({
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

      var centerTextWrapper = new CSSEffect({
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
      var centerTextAfter = new CSSEffect({
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
      var centerTextBefore = new CSSEffect({
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
      var slicedImgWrapper = new CSSEffect({
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
      var slicedImg = new CSSEffect({
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
      var slicedImgWrappeClipPath = new CSSEffect({
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
      var slicedImgTranformUp = new CSSEffect({
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
      var slicedImgTranformDown = new CSSEffect({
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
      var slicedImgWrapperOpacity = new CSSEffect({
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
      var strokeTextWrapper = new CSSEffect({
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
      var strokeTextCenter = new CSSEffect({
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
      var strokeTextGroup = new Group();

      for (var _i2 = 0; _i2 < this.strokeTextLength; _i2++) {
        var strokeTextOutline = new CSSEffect({
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

      var bgDistortionOp = new CSSEffect({
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
      var bgScaleUp = new CSSEffect({
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
      var bgScaleDown = new CSSEffect({
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
      var rngBoxDownIn = new CSSEffect({
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
      var yellowUnderLineLeftIn = new CSSEffect({
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
      var yellowUnderLineWidth = new CSSEffect({
        animatedAttrs: {
          width: "0px"
        }
      }, {
        duration: 1000,
        selector: ".yellow-underline"
      });
      var yellowTransitionWidth = new CSSEffect({
        animatedAttrs: {
          width: "0px"
        }
      }, {
        duration: 500,
        selector: ".yellow-transition"
      });
      var yellowTransitionLeft = new CSSEffect({
        animatedAttrs: {
          left: "-100%"
        }
      }, {
        duration: 1000,
        selector: ".yellow-transition"
      });
      var circlesGroup2 = new Group();
      var circlesWrapper2 = new CSSEffect({
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
      var circlesWrapper2Position = new CSSEffect({
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

        var _translateX = new CSSEffect({
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

      var blackBoxRotate = new CSSEffect({
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
      var blackBoxLeftTop = new CSSEffect({
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
      var blackBoxRightTop = new CSSEffect({
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
}(HTMLClip);

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
    attributesValidationRules: _objectSpread2({}, BannerAValidation)
  }]
};

export { index as default };
