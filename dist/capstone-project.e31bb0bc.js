// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"store/Home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  header: "Home Page",
  view: "Home"
};
exports.default = _default;
},{}],"store/Map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  header: "Map of Events",
  view: "Map"
};
exports.default = _default;
},{}],"store/Add.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  header: "Add",
  view: "Add"
};
exports.default = _default;
},{}],"store/Contact.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  header: "Contact Page",
  view: "Contact"
};
exports.default = _default;
},{}],"store/Links.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  title: "Home",
  text: "Home"
}, {
  title: "Map",
  text: "Map"
}, {
  title: "Add",
  text: "Add"
}, {
  title: "Contact",
  text: "Contact"
}];
exports.default = _default;
},{}],"store/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Home", {
  enumerable: true,
  get: function () {
    return _Home.default;
  }
});
Object.defineProperty(exports, "Map", {
  enumerable: true,
  get: function () {
    return _Map.default;
  }
});
Object.defineProperty(exports, "Add", {
  enumerable: true,
  get: function () {
    return _Add.default;
  }
});
Object.defineProperty(exports, "Contact", {
  enumerable: true,
  get: function () {
    return _Contact.default;
  }
});
Object.defineProperty(exports, "Links", {
  enumerable: true,
  get: function () {
    return _Links.default;
  }
});

var _Home = _interopRequireDefault(require("./Home"));

var _Map = _interopRequireDefault(require("./Map"));

var _Add = _interopRequireDefault(require("./Add"));

var _Contact = _interopRequireDefault(require("./Contact"));

var _Links = _interopRequireDefault(require("./Links"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Home":"store/Home.js","./Map":"store/Map.js","./Add":"store/Add.js","./Contact":"store/Contact.js","./Links":"store/Links.js"}],"StateSubject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StateSubject = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StateSubject =
/*#__PURE__*/
function () {
  function StateSubject(state) {
    _classCallCheck(this, StateSubject);

    this.observables = [];
    this.state = state;
  }

  _createClass(StateSubject, [{
    key: "getState",
    value: function getState() {
      return this.state;
    }
  }, {
    key: "setState",
    value: function setState(state) {
      this.state = state;
      this.notifyObservers(this.state);
    }
  }, {
    key: "notifyObservers",
    value: function notifyObservers(state) {
      this.observables.forEach(function (element) {
        element.notify(state);
      });
    }
  }, {
    key: "registerObserver",
    value: function registerObserver(stateObserver) {
      this.observables.push(stateObserver);
    }
  }, {
    key: "unregisterObserver",
    value: function unregisterObserver(stateObserver) {
      this.observables = this.observables.filter(function (obs) {
        return obs !== stateObserver;
      });
    }
  }]);

  return StateSubject;
}();

exports.StateSubject = StateSubject;
;
},{}],"components/views/Home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return "\n<section id=\"home\">\n    <img id=\"homePageImage1\" src=\"https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260\">   \n        <div class=\"search-box\">\n            <input class=\"search-txt\" type=\"text\" name=\"\" placeholder=\"Type to Search\">\n            <a class=\"search-btn\" href=\"#\">\n                <i class=\"fas fa-search\"></i>\n            </a>\n        </div>\n</section>";
};

exports.default = _default;
},{}],"components/views/Map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return "\n<section id=\"map\">\n</section>\n";
};

exports.default = _default;
},{}],"components/views/Add.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return "\n<section id=\"add\">\n    <div class=\"addEventForm\">\n        <h2>Add an Event</h2>\n        <form class=\"addform\" action=\"https://formspree.io/xgeypedl\" method=\"POST\"> -->\n            <div>\n                <label>First Name:</label>\n                <input type=\"text\" id=\"fname\" name=\"firstname\" placeholder=\"First Name\">\n            </div>\n            <div>\n                <label>Last Name:</label>\n                <input type=\"text\" id=\"lname\" name=\"lastname\" placeholder=\"Last Name\">\n            </div>\n            <div>\n                <label>Name of Event:</label>\n                <input type=\"text\" id=\"ename\" name=\"nameofevent\" placeholder=\"Name of Event\">\n            </div>\n            <div>\n                <label>Name of Organization:</label>\n                <input type=\"text\" id=\"oname\" name=\"organizationname\" placeholder=\"Organization Name\">\n            </div>\n            <div>\n                <label>Date of Event:</label>\n                <input type=\"text\" id=\"date\" name=\"startdate\" placeholder=\"Start Date of Event\">\n            </div>\n            <div>\n                <label>Time of Event:</label>\n                <input type=\"text\" id=\"time\" name=\"timeofevent\" placeholder=\"Time of Event\">\n            </div>\n            <div>\n                <label>Location of Event:</label>\n                <input type=\"text\" id=\"location\" name=\"locationofevent\" placeholder=\"Location of Event\">\n            </div>\n            <div>\n                <label>E-mail Address:</label>\n                <input type=\"email\" id=\"email\" name=\"emailaddress\" placeholder=\"E-mail Address\">\n            </div>\n            <div>\n                <label>Contact Number:</label>\n                <input type=\"tel\" id=\"number\" name=\"phonenumber\" placeholder=\"Contact Number\">\n            </div>\n            <div>\n                <input type=\"submit\" id=\"submit\" placeholder=\"Submit\">\n            </div>\n        </form>\n    </div>\n</section>";
};

exports.default = _default;
},{}],"components/views/Contact.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return "\n<section id=\"contact\">\n    <div class=\"about\">\n        <h2>About</h2>\n        <p>This website began as a capstone project for a brand new developer who aspires to grow in their role and gain experience as a front-end web developer.</p>\n    </div>       \n    <div class=\"contactForm\">\n        <h2>Contact</h2>\n        <form class=\"contact\" action=\"https://formspree.io/xgeypedl\" method=\"POST\">\n            <div>\n                <label>First Name:</label>\n                <input type=\"text\" id=\"fname\" name=\"firstname\" placeholder=\"First Name\">\n            </div>\n            <div>\n                <label>Last Name:</label>\n                <input type=\"text\" id=\"lname\" name=\"lastname\" placeholder=\"Last Name\">\n            </div>\n            <div>\n                <label>E-mail Address:</label>\n                <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"E-mail Address\">\n            </div>\n            <div>\n                <label>Write Your Message Here:</label>\n                <textarea name=\"msg\" id=\"msg\" cols=\"40\" rows=\"5\" placeholder=\"A Brief Message...\"></textarea>\n            </div>\n            <div>\n                <input type=\"submit\" id=\"submit\" placeholder=\"Submit\">\n            </div>\n        </form>\n    </div>\n</section>";
};

exports.default = _default;
},{}],"components/views/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Home", {
  enumerable: true,
  get: function () {
    return _Home.default;
  }
});
Object.defineProperty(exports, "Map", {
  enumerable: true,
  get: function () {
    return _Map.default;
  }
});
Object.defineProperty(exports, "Add", {
  enumerable: true,
  get: function () {
    return _Add.default;
  }
});
Object.defineProperty(exports, "Contact", {
  enumerable: true,
  get: function () {
    return _Contact.default;
  }
});

var _Home = _interopRequireDefault(require("./Home"));

var _Map = _interopRequireDefault(require("./Map"));

var _Add = _interopRequireDefault(require("./Add"));

var _Contact = _interopRequireDefault(require("./Contact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Home":"components/views/Home.js","./Map":"components/views/Map.js","./Add":"components/views/Add.js","./Contact":"components/views/Contact.js"}],"components/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(st) {
  return "";
};

exports.default = _default;
},{}],"components/Nav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = require(".");

var _default = function _default(links) {
  return "\n    <nav>\n        <div class=\"logo\">\n            <h4>Clique Safe</h4>\n        </div>\n        <ul class=\"hidden-mobile\" id=\"nav-links\">\n            ".concat(links.map(function (link) {
    return "<li><a class=\"nav-clicks\" href=\"#\" aria-label=".concat(link.text, ">").concat(link.title, "</a></li>");
  }).join(''), "\n        </ul>\n        <div class=\"burger\">\n            <div class=\"line1\"></div>\n            <div class=\"line2\"></div>\n            <div class=\"line3\"></div>\n        </div>\n    </nav>");
};

exports.default = _default;
},{".":"components/index.js"}],"components/Main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var views = _interopRequireWildcard(require("./views"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = function _default(st) {
  return "".concat(views[st.view](st));
};

exports.default = _default;
},{"./views":"components/views/index.js"}],"components/Footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return "<footer class=\"footer\">\n            <p><a href=\"#home\">Home</a></p>\n            <p><a href=\"#event-map\">Map of Events</a></p>\n            <p><a href=\"#event-add\">Add an Event</a></p>\n            <p><a href=\"#about-contact\">About/Contact</a></p>\n            <a rel=\"license\" href=\"http://creativecommons.org/licenses/by/4.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"https://i.creativecommons.org/l/by/4.0/80x15.png\" /></a><br />This work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by/4.0/\">Creative Commons Attribution 4.0 International License</a>\n        </footer>";
};

exports.default = _default;
},{}],"components/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function () {
    return _Header.default;
  }
});
Object.defineProperty(exports, "Nav", {
  enumerable: true,
  get: function () {
    return _Nav.default;
  }
});
Object.defineProperty(exports, "Main", {
  enumerable: true,
  get: function () {
    return _Main.default;
  }
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function () {
    return _Footer.default;
  }
});

var _Header = _interopRequireDefault(require("./Header"));

var _Nav = _interopRequireDefault(require("./Nav"));

var _Main = _interopRequireDefault(require("./Main"));

var _Footer = _interopRequireDefault(require("./Footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Header":"components/Header.js","./Nav":"components/Nav.js","./Main":"components/Main.js","./Footer":"components/Footer.js"}],"StateObserver.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StateObserver = void 0;

var views = _interopRequireWildcard(require("./components/views"));

var _components = require("./components");

var state = _interopRequireWildcard(require("./store"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StateObserver =
/*#__PURE__*/
function () {
  function StateObserver(subject, stateContext) {
    _classCallCheck(this, StateObserver);

    this.subject = subject;
    this.stateContext = stateContext;
    this.active = subject.state.view == stateContext.view;
    subject.registerObserver(this);
  }

  _createClass(StateObserver, [{
    key: "notify",
    value: function notify(state) {
      if (state.view == this.stateContext.view) {
        this.active = true;
      } else {
        this.active = false;
      }

      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      if (this.active == true) {
        document.querySelector("#root").innerHTML = "\n                ".concat((0, _components.Header)(this.stateContext), "\n                ").concat((0, _components.Nav)(state.Links), "\n                ").concat((0, _components.Main)(this.stateContext), "\n                ").concat(views[this.stateContext.view](this.stateContext), "\n                ").concat((0, _components.Footer)(this.stateContext), "\n            ");
        this.addNavEventListeners();
      }
    }
  }, {
    key: "addNavEventListeners",
    value: function addNavEventListeners() {
      var _this = this;

      // add event listeners to Nav items for navigation
      document.querySelectorAll("nav a").forEach(function (navLink) {
        return navLink.addEventListener("click", function (event) {
          event.preventDefault();

          _this.subject.setState(stateStore[event.target.title]);
        });
      }); // add menu toggle to bars icon in nav bar

      document.querySelector(".burger").addEventListener("click", function (event) {
        document.querySelector(".hidden-mobile").classList.toggle(".hidden--mobile");
      });
    }
  }]);

  return StateObserver;
}();

exports.StateObserver = StateObserver;
},{"./components/views":"components/views/index.js","./components":"components/index.js","./store":"store/index.js"}],"index.js":[function(require,module,exports) {
"use strict";

var state = _interopRequireWildcard(require("./store"));

var _StateSubject = require("./StateSubject");

var _StateObserver = require("./StateObserver");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var appState = new _StateSubject.StateSubject(state.Home);
var pages = [];
pages.push(new _StateObserver.StateObserver(appState, state.Add));
pages.push(new _StateObserver.StateObserver(appState, state.Contact));
pages.push(new _StateObserver.StateObserver(appState, state.Map));
pages.push(new _StateObserver.StateObserver(appState, state.Home));
appState.setState(state.Home);
},{"./store":"store/index.js","./StateSubject":"StateSubject.js","./StateObserver":"StateObserver.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64486" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/capstone-project.e31bb0bc.js.map