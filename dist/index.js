"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/gsap/dist/gsap.js
  var require_gsap = __commonJS({
    "node_modules/gsap/dist/gsap.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = global || self, factory(global.window = global.window || {}));
      })(exports, function(exports2) {
        "use strict";
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          subClass.__proto__ = superClass;
        }
        function _assertThisInitialized(self2) {
          if (self2 === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return self2;
        }
        var _config = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
            lineHeight: ""
          }
        }, _defaults = {
          duration: 0.5,
          overwrite: false,
          delay: 0
        }, _suppressOverwrites, _reverting, _context, _bigNum = 1e8, _tinyNum = 1 / _bigNum, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString = function _isString2(value) {
          return typeof value === "string";
        }, _isFunction = function _isFunction2(value) {
          return typeof value === "function";
        }, _isNumber = function _isNumber2(value) {
          return typeof value === "number";
        }, _isUndefined = function _isUndefined2(value) {
          return typeof value === "undefined";
        }, _isObject = function _isObject2(value) {
          return typeof value === "object";
        }, _isNotFalse = function _isNotFalse2(value) {
          return value !== false;
        }, _windowExists = function _windowExists2() {
          return typeof window !== "undefined";
        }, _isFuncOrString = function _isFuncOrString2(value) {
          return _isFunction(value) || _isString(value);
        }, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
        }, _isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[^,'"\[\]\s]+/gi, _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, _globalTimeline, _win, _coreInitted, _doc, _globals = {}, _installScope = {}, _coreReady, _install = function _install2(scope) {
          return (_installScope = _merge(scope, _globals)) && gsap2;
        }, _missingPlugin = function _missingPlugin2(property, value) {
          return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
        }, _warn = function _warn2(message, suppress) {
          return !suppress && console.warn(message);
        }, _addGlobal = function _addGlobal2(name, obj) {
          return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
        }, _emptyFunc = function _emptyFunc2() {
          return 0;
        }, _startAtRevertConfig = {
          suppressEvents: true,
          isStart: true,
          kill: false
        }, _revertConfigNoKill = {
          suppressEvents: true,
          kill: false
        }, _revertConfig = {
          suppressEvents: true
        }, _reservedProps = {}, _lazyTweens = [], _lazyLookup = {}, _lastRenderedFrame, _plugins = {}, _effects = {}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness2(targets) {
          var target = targets[0], harnessPlugin, i;
          _isObject(target) || _isFunction(target) || (targets = [targets]);
          if (!(harnessPlugin = (target._gsap || {}).harness)) {
            i = _harnessPlugins.length;
            while (i-- && !_harnessPlugins[i].targetTest(target)) {
            }
            harnessPlugin = _harnessPlugins[i];
          }
          i = targets.length;
          while (i--) {
            targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
          }
          return targets;
        }, _getCache = function _getCache2(target) {
          return target._gsap || _harness(toArray(target))[0]._gsap;
        }, _getProperty = function _getProperty2(target, property, v) {
          return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
        }, _forEachName = function _forEachName2(names, func) {
          return (names = names.split(",")).forEach(func) || names;
        }, _round = function _round2(value) {
          return Math.round(value * 1e5) / 1e5 || 0;
        }, _roundPrecise = function _roundPrecise2(value) {
          return Math.round(value * 1e7) / 1e7 || 0;
        }, _parseRelative = function _parseRelative2(start, value) {
          var operator = value.charAt(0), end = parseFloat(value.substr(2));
          start = parseFloat(start);
          return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
        }, _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
          var l = toFind.length, i = 0;
          for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {
          }
          return i < l;
        }, _lazyRender = function _lazyRender2() {
          var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
          _lazyLookup = {};
          _lazyTweens.length = 0;
          for (i = 0; i < l; i++) {
            tween = a[i];
            tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
          }
        }, _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
          _lazyTweens.length && !_reverting && _lazyRender();
          animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
          _lazyTweens.length && !_reverting && _lazyRender();
        }, _numericIfPossible = function _numericIfPossible2(value) {
          var n = parseFloat(value);
          return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
        }, _passThrough = function _passThrough2(p) {
          return p;
        }, _setDefaults = function _setDefaults2(obj, defaults) {
          for (var p in defaults) {
            p in obj || (obj[p] = defaults[p]);
          }
          return obj;
        }, _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
          return function(obj, defaults) {
            for (var p in defaults) {
              p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
            }
          };
        }, _merge = function _merge2(base, toMerge) {
          for (var p in toMerge) {
            base[p] = toMerge[p];
          }
          return base;
        }, _mergeDeep = function _mergeDeep2(base, toMerge) {
          for (var p in toMerge) {
            p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
          }
          return base;
        }, _copyExcluding = function _copyExcluding2(obj, excluding) {
          var copy = {}, p;
          for (p in obj) {
            p in excluding || (copy[p] = obj[p]);
          }
          return copy;
        }, _inheritDefaults = function _inheritDefaults2(vars) {
          var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
          if (_isNotFalse(vars.inherit)) {
            while (parent) {
              func(vars, parent.vars.defaults);
              parent = parent.parent || parent._dp;
            }
          }
          return vars;
        }, _arraysMatch = function _arraysMatch2(a1, a2) {
          var i = a1.length, match = i === a2.length;
          while (match && i-- && a1[i] === a2[i]) {
          }
          return i < 0;
        }, _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
          if (firstProp === void 0) {
            firstProp = "_first";
          }
          if (lastProp === void 0) {
            lastProp = "_last";
          }
          var prev = parent[lastProp], t;
          if (sortBy) {
            t = child[sortBy];
            while (prev && prev[sortBy] > t) {
              prev = prev._prev;
            }
          }
          if (prev) {
            child._next = prev._next;
            prev._next = child;
          } else {
            child._next = parent[firstProp];
            parent[firstProp] = child;
          }
          if (child._next) {
            child._next._prev = child;
          } else {
            parent[lastProp] = child;
          }
          child._prev = prev;
          child.parent = child._dp = parent;
          return child;
        }, _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
          if (firstProp === void 0) {
            firstProp = "_first";
          }
          if (lastProp === void 0) {
            lastProp = "_last";
          }
          var prev = child._prev, next = child._next;
          if (prev) {
            prev._next = next;
          } else if (parent[firstProp] === child) {
            parent[firstProp] = next;
          }
          if (next) {
            next._prev = prev;
          } else if (parent[lastProp] === child) {
            parent[lastProp] = prev;
          }
          child._next = child._prev = child.parent = null;
        }, _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
          child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
          child._act = 0;
        }, _uncache = function _uncache2(animation, child) {
          if (animation && (!child || child._end > animation._dur || child._start < 0)) {
            var a = animation;
            while (a) {
              a._dirty = 1;
              a = a.parent;
            }
          }
          return animation;
        }, _recacheAncestors = function _recacheAncestors2(animation) {
          var parent = animation.parent;
          while (parent && parent.parent) {
            parent._dirty = 1;
            parent.totalDuration();
            parent = parent.parent;
          }
          return animation;
        }, _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
          return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
        }, _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
          return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
        }, _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
          return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
        }, _animationCycle = function _animationCycle2(tTime, cycleDuration) {
          var whole = Math.floor(tTime /= cycleDuration);
          return tTime && whole === tTime ? whole - 1 : whole;
        }, _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
          return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
        }, _setEnd = function _setEnd2(animation) {
          return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
        }, _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
          var parent = animation._dp;
          if (parent && parent.smoothChildTiming && animation._ts) {
            animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
            _setEnd(animation);
            parent._dirty || _uncache(parent, animation);
          }
          return animation;
        }, _postAddChecks = function _postAddChecks2(timeline, child) {
          var t;
          if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
            t = _parentToChildTotalTime(timeline.rawTime(), child);
            if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
              child.render(t, true);
            }
          }
          if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
            if (timeline._dur < timeline.duration()) {
              t = timeline;
              while (t._dp) {
                t.rawTime() >= 0 && t.totalTime(t._tTime);
                t = t._dp;
              }
            }
            timeline._zTime = -_tinyNum;
          }
        }, _addToTimeline = function _addToTimeline2(timeline, child, position, skipChecks) {
          child.parent && _removeFromParent(child);
          child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
          child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
          _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
          _isFromOrFromStart(child) || (timeline._recent = child);
          skipChecks || _postAddChecks(timeline, child);
          timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime);
          return timeline;
        }, _scrollTrigger = function _scrollTrigger2(animation, trigger) {
          return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
        }, _attemptInitTween = function _attemptInitTween2(tween, time, force, suppressEvents, tTime) {
          _initTween(tween, time, tTime);
          if (!tween._initted) {
            return 1;
          }
          if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
            _lazyTweens.push(tween);
            tween._lazy = [tTime, suppressEvents];
            return 1;
          }
        }, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
          var parent = _ref.parent;
          return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
        }, _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
          var data = _ref2.data;
          return data === "isFromStart" || data === "isStart";
        }, _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
          var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
          if (repeatDelay && tween._repeat) {
            tTime = _clamp(0, tween._tDur, totalTime);
            iteration = _animationCycle(tTime, repeatDelay);
            tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
            if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
              prevRatio = 1 - ratio;
              tween.vars.repeatRefresh && tween._initted && tween.invalidate();
            }
          }
          if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
            if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
              return;
            }
            prevIteration = tween._zTime;
            tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
            suppressEvents || (suppressEvents = totalTime && !prevIteration);
            tween.ratio = ratio;
            tween._from && (ratio = 1 - ratio);
            tween._time = 0;
            tween._tTime = tTime;
            pt = tween._pt;
            while (pt) {
              pt.r(ratio, pt.d);
              pt = pt._next;
            }
            totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
            tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
            tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
            if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
              ratio && _removeFromParent(tween, 1);
              if (!suppressEvents && !_reverting) {
                _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
                tween._prom && tween._prom();
              }
            }
          } else if (!tween._zTime) {
            tween._zTime = totalTime;
          }
        }, _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
          var child;
          if (time > prevTime) {
            child = animation._first;
            while (child && child._start <= time) {
              if (child.data === "isPause" && child._start > prevTime) {
                return child;
              }
              child = child._next;
            }
          } else {
            child = animation._last;
            while (child && child._start >= time) {
              if (child.data === "isPause" && child._start < prevTime) {
                return child;
              }
              child = child._prev;
            }
          }
        }, _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
          var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
          totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
          animation._dur = dur;
          animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
          totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
          animation.parent && _setEnd(animation);
          skipUncache || _uncache(animation.parent, animation);
          return animation;
        }, _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
          return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
        }, _zeroPosition = {
          _start: 0,
          endTime: _emptyFunc,
          totalDuration: _emptyFunc
        }, _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
          var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i, offset, isPercent;
          if (_isString(position) && (isNaN(position) || position in labels)) {
            offset = position.charAt(0);
            isPercent = position.substr(-1) === "%";
            i = position.indexOf("=");
            if (offset === "<" || offset === ">") {
              i >= 0 && (position = position.replace(/=/, ""));
              return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
            }
            if (i < 0) {
              position in labels || (labels[position] = clippedDuration);
              return labels[position];
            }
            offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
            if (isPercent && percentAnimation) {
              offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
            }
            return i > 1 ? _parsePosition2(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
          }
          return position == null ? clippedDuration : +position;
        }, _createTweenType = function _createTweenType2(type, params, timeline) {
          var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
          isLegacy && (vars.duration = params[1]);
          vars.parent = timeline;
          if (type) {
            irVars = vars;
            parent = timeline;
            while (parent && !("immediateRender" in irVars)) {
              irVars = parent.vars.defaults || {};
              parent = _isNotFalse(parent.vars.inherit) && parent.parent;
            }
            vars.immediateRender = _isNotFalse(irVars.immediateRender);
            type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
          }
          return new Tween(params[0], vars, params[varsIndex + 1]);
        }, _conditionalReturn = function _conditionalReturn2(value, func) {
          return value || value === 0 ? func(value) : func;
        }, _clamp = function _clamp2(min, max, value) {
          return value < min ? min : value > max ? max : value;
        }, getUnit = function getUnit2(value, v) {
          return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
        }, clamp = function clamp2(min, max, value) {
          return _conditionalReturn(value, function(v) {
            return _clamp(min, max, v);
          });
        }, _slice = [].slice, _isArrayLike = function _isArrayLike2(value, nonEmpty) {
          return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
        }, _flatten = function _flatten2(ar, leaveStrings, accumulator) {
          if (accumulator === void 0) {
            accumulator = [];
          }
          return ar.forEach(function(value) {
            var _accumulator;
            return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
          }) || accumulator;
        }, toArray = function toArray2(value, scope, leaveStrings) {
          return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
        }, selector = function selector2(value) {
          value = toArray(value)[0] || _warn("Invalid scope") || {};
          return function(v) {
            var el = value.current || value.nativeElement || value;
            return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
          };
        }, shuffle = function shuffle2(a) {
          return a.sort(function() {
            return 0.5 - Math.random();
          });
        }, distribute = function distribute2(v) {
          if (_isFunction(v)) {
            return v;
          }
          var vars = _isObject(v) ? v : {
            each: v
          }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
          if (_isString(from)) {
            ratioX = ratioY = {
              center: 0.5,
              edges: 0.5,
              end: 1
            }[from] || 0;
          } else if (!isDecimal && ratios) {
            ratioX = from[0];
            ratioY = from[1];
          }
          return function(i, target, a) {
            var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
            if (!distances) {
              wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
              if (!wrapAt) {
                max = -_bigNum;
                while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {
                }
                wrapAt < l && wrapAt--;
              }
              distances = cache[l] = [];
              originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
              originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
              max = 0;
              min = _bigNum;
              for (j = 0; j < l; j++) {
                x = j % wrapAt - originX;
                y = originY - (j / wrapAt | 0);
                distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
                d > max && (max = d);
                d < min && (min = d);
              }
              from === "random" && shuffle(distances);
              distances.max = max - min;
              distances.min = min;
              distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
              distances.b = l < 0 ? base - l : base;
              distances.u = getUnit(vars.amount || vars.each) || 0;
              ease = ease && l < 0 ? _invertEase(ease) : ease;
            }
            l = (distances[i] - distances.min) / distances.max || 0;
            return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
          };
        }, _roundModifier = function _roundModifier2(v) {
          var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
          return function(raw) {
            var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
            return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
          };
        }, snap = function snap2(snapTo, value) {
          var isArray = _isArray(snapTo), radius, is2D;
          if (!isArray && _isObject(snapTo)) {
            radius = isArray = snapTo.radius || _bigNum;
            if (snapTo.values) {
              snapTo = toArray(snapTo.values);
              if (is2D = !_isNumber(snapTo[0])) {
                radius *= radius;
              }
            } else {
              snapTo = _roundModifier(snapTo.increment);
            }
          }
          return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
            is2D = snapTo(raw);
            return Math.abs(is2D - raw) <= radius ? is2D : raw;
          } : function(raw) {
            var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
            while (i--) {
              if (is2D) {
                dx = snapTo[i].x - x;
                dy = snapTo[i].y - y;
                dx = dx * dx + dy * dy;
              } else {
                dx = Math.abs(snapTo[i] - x);
              }
              if (dx < min) {
                min = dx;
                closest = i;
              }
            }
            closest = !radius || min <= radius ? snapTo[closest] : raw;
            return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
          });
        }, random = function random2(min, max, roundingIncrement, returnFunction) {
          return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
            return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
          });
        }, pipe = function pipe2() {
          for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
            functions[_key] = arguments[_key];
          }
          return function(value) {
            return functions.reduce(function(v, f) {
              return f(v);
            }, value);
          };
        }, unitize = function unitize2(func, unit) {
          return function(value) {
            return func(parseFloat(value)) + (unit || getUnit(value));
          };
        }, normalize = function normalize2(min, max, value) {
          return mapRange(min, max, 0, 1, value);
        }, _wrapArray = function _wrapArray2(a, wrapper, value) {
          return _conditionalReturn(value, function(index) {
            return a[~~wrapper(index)];
          });
        }, wrap = function wrap2(min, max, value) {
          var range = max - min;
          return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
            return (range + (value2 - min) % range) % range + min;
          });
        }, wrapYoyo = function wrapYoyo2(min, max, value) {
          var range = max - min, total = range * 2;
          return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
            value2 = (total + (value2 - min) % total) % total || 0;
            return min + (value2 > range ? total - value2 : value2);
          });
        }, _replaceRandom = function _replaceRandom2(value) {
          var prev = 0, s = "", i, nums, end, isArray;
          while (~(i = value.indexOf("random(", prev))) {
            end = value.indexOf(")", i);
            isArray = value.charAt(i + 7) === "[";
            nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
            s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
            prev = end + 1;
          }
          return s + value.substr(prev, value.length - prev);
        }, mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
          var inRange = inMax - inMin, outRange = outMax - outMin;
          return _conditionalReturn(value, function(value2) {
            return outMin + ((value2 - inMin) / inRange * outRange || 0);
          });
        }, interpolate = function interpolate2(start, end, progress, mutate) {
          var func = isNaN(start + end) ? 0 : function(p2) {
            return (1 - p2) * start + p2 * end;
          };
          if (!func) {
            var isString = _isString(start), master = {}, p, i, interpolators, l, il;
            progress === true && (mutate = 1) && (progress = null);
            if (isString) {
              start = {
                p: start
              };
              end = {
                p: end
              };
            } else if (_isArray(start) && !_isArray(end)) {
              interpolators = [];
              l = start.length;
              il = l - 2;
              for (i = 1; i < l; i++) {
                interpolators.push(interpolate2(start[i - 1], start[i]));
              }
              l--;
              func = function func2(p2) {
                p2 *= l;
                var i2 = Math.min(il, ~~p2);
                return interpolators[i2](p2 - i2);
              };
              progress = end;
            } else if (!mutate) {
              start = _merge(_isArray(start) ? [] : {}, start);
            }
            if (!interpolators) {
              for (p in end) {
                _addPropTween.call(master, start, p, "get", end[p]);
              }
              func = function func2(p2) {
                return _renderPropTweens(p2, master) || (isString ? start.p : start);
              };
            }
          }
          return _conditionalReturn(progress, func);
        }, _getLabelInDirection = function _getLabelInDirection2(timeline, fromTime, backward) {
          var labels = timeline.labels, min = _bigNum, p, distance, label;
          for (p in labels) {
            distance = labels[p] - fromTime;
            if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
              label = p;
              min = distance;
            }
          }
          return label;
        }, _callback = function _callback2(animation, type, executeLazyFirst) {
          var v = animation.vars, callback = v[type], prevContext = _context, context = animation._ctx, params, scope, result;
          if (!callback) {
            return;
          }
          params = v[type + "Params"];
          scope = v.callbackScope || animation;
          executeLazyFirst && _lazyTweens.length && _lazyRender();
          context && (_context = context);
          result = params ? callback.apply(scope, params) : callback.call(scope);
          _context = prevContext;
          return result;
        }, _interrupt = function _interrupt2(animation) {
          _removeFromParent(animation);
          animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
          animation.progress() < 1 && _callback(animation, "onInterrupt");
          return animation;
        }, _quickTween, _registerPluginQueue = [], _createPlugin = function _createPlugin2(config) {
          if (!config)
            return;
          config = !config.name && config["default"] || config;
          if (_windowExists() || config.headless) {
            var name = config.name, isFunc = _isFunction(config), Plugin = name && !isFunc && config.init ? function() {
              this._props = [];
            } : config, instanceDefaults = {
              init: _emptyFunc,
              render: _renderPropTweens,
              add: _addPropTween,
              kill: _killPropTweensOf,
              modifier: _addPluginModifier,
              rawVars: 0
            }, statics = {
              targetTest: 0,
              get: 0,
              getSetter: _getSetter,
              aliases: {},
              register: 0
            };
            _wake();
            if (config !== Plugin) {
              if (_plugins[name]) {
                return;
              }
              _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics));
              _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));
              _plugins[Plugin.prop = name] = Plugin;
              if (config.targetTest) {
                _harnessPlugins.push(Plugin);
                _reservedProps[name] = 1;
              }
              name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
            }
            _addGlobal(name, Plugin);
            config.register && config.register(gsap2, Plugin, PropTween);
          } else {
            _registerPluginQueue.push(config);
          }
        }, _255 = 255, _colorLookup = {
          aqua: [0, _255, _255],
          lime: [0, _255, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, _255],
          navy: [0, 0, 128],
          white: [_255, _255, _255],
          olive: [128, 128, 0],
          yellow: [_255, _255, 0],
          orange: [_255, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [_255, 0, 0],
          pink: [_255, 192, 203],
          cyan: [0, _255, _255],
          transparent: [_255, _255, _255, 0]
        }, _hue = function _hue2(h, m1, m2) {
          h += h < 0 ? 1 : h > 1 ? -1 : 0;
          return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
        }, splitColor = function splitColor2(v, toHSL, forceAlpha) {
          var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
          if (!a) {
            if (v.substr(-1) === ",") {
              v = v.substr(0, v.length - 1);
            }
            if (_colorLookup[v]) {
              a = _colorLookup[v];
            } else if (v.charAt(0) === "#") {
              if (v.length < 6) {
                r = v.charAt(1);
                g = v.charAt(2);
                b = v.charAt(3);
                v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
              }
              if (v.length === 9) {
                a = parseInt(v.substr(1, 6), 16);
                return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
              }
              v = parseInt(v.substr(1), 16);
              a = [v >> 16, v >> 8 & _255, v & _255];
            } else if (v.substr(0, 3) === "hsl") {
              a = wasHSL = v.match(_strictNumExp);
              if (!toHSL) {
                h = +a[0] % 360 / 360;
                s = +a[1] / 100;
                l = +a[2] / 100;
                g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
                r = l * 2 - g;
                a.length > 3 && (a[3] *= 1);
                a[0] = _hue(h + 1 / 3, r, g);
                a[1] = _hue(h, r, g);
                a[2] = _hue(h - 1 / 3, r, g);
              } else if (~v.indexOf("=")) {
                a = v.match(_numExp);
                forceAlpha && a.length < 4 && (a[3] = 1);
                return a;
              }
            } else {
              a = v.match(_strictNumExp) || _colorLookup.transparent;
            }
            a = a.map(Number);
          }
          if (toHSL && !wasHSL) {
            r = a[0] / _255;
            g = a[1] / _255;
            b = a[2] / _255;
            max = Math.max(r, g, b);
            min = Math.min(r, g, b);
            l = (max + min) / 2;
            if (max === min) {
              h = s = 0;
            } else {
              d = max - min;
              s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
              h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
              h *= 60;
            }
            a[0] = ~~(h + 0.5);
            a[1] = ~~(s * 100 + 0.5);
            a[2] = ~~(l * 100 + 0.5);
          }
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }, _colorOrderData = function _colorOrderData2(v) {
          var values = [], c = [], i = -1;
          v.split(_colorExp).forEach(function(v2) {
            var a = v2.match(_numWithUnitExp) || [];
            values.push.apply(values, a);
            c.push(i += a.length + 1);
          });
          values.c = c;
          return values;
        }, _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
          var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
          if (!colors) {
            return s;
          }
          colors = colors.map(function(color) {
            return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
          });
          if (orderMatchData) {
            d = _colorOrderData(s);
            c = orderMatchData.c;
            if (c.join(result) !== d.c.join(result)) {
              shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
              l = shell.length - 1;
              for (; i < l; i++) {
                result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
              }
            }
          }
          if (!shell) {
            shell = s.split(_colorExp);
            l = shell.length - 1;
            for (; i < l; i++) {
              result += shell[i] + colors[i];
            }
          }
          return result + shell[l];
        }, _colorExp = function() {
          var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
          for (p in _colorLookup) {
            s += "|" + p + "\\b";
          }
          return new RegExp(s + ")", "gi");
        }(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter2(a) {
          var combined = a.join(" "), toHSL;
          _colorExp.lastIndex = 0;
          if (_colorExp.test(combined)) {
            toHSL = _hslExp.test(combined);
            a[1] = _formatColors(a[1], toHSL);
            a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
            return true;
          }
        }, _tickerActive, _ticker = function() {
          var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners2 = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick2(v) {
            var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
            (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
            _lastUpdate += elapsed;
            time = _lastUpdate - _startTime;
            overlap = time - _nextTime;
            if (overlap > 0 || manual) {
              frame = ++_self.frame;
              _delta = time - _self.time * 1e3;
              _self.time = time = time / 1e3;
              _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
              dispatch = 1;
            }
            manual || (_id = _req(_tick2));
            if (dispatch) {
              for (_i = 0; _i < _listeners2.length; _i++) {
                _listeners2[_i](time, _delta, frame, v);
              }
            }
          };
          _self = {
            time: 0,
            frame: 0,
            tick: function tick() {
              _tick(true);
            },
            deltaRatio: function deltaRatio(fps) {
              return _delta / (1e3 / (fps || 60));
            },
            wake: function wake() {
              if (_coreReady) {
                if (!_coreInitted && _windowExists()) {
                  _win = _coreInitted = window;
                  _doc = _win.document || {};
                  _globals.gsap = gsap2;
                  (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap2.version);
                  _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
                  _registerPluginQueue.forEach(_createPlugin);
                }
                _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
                _id && _self.sleep();
                _req = _raf || function(f) {
                  return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
                };
                _tickerActive = 1;
                _tick(2);
              }
            },
            sleep: function sleep() {
              (_raf ? cancelAnimationFrame : clearTimeout)(_id);
              _tickerActive = 0;
              _req = _emptyFunc;
            },
            lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
              _lagThreshold = threshold || Infinity;
              _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
            },
            fps: function fps(_fps) {
              _gap = 1e3 / (_fps || 240);
              _nextTime = _self.time * 1e3 + _gap;
            },
            add: function add(callback, once, prioritize) {
              var func = once ? function(t, d, f, v) {
                callback(t, d, f, v);
                _self.remove(func);
              } : callback;
              _self.remove(callback);
              _listeners2[prioritize ? "unshift" : "push"](func);
              _wake();
              return func;
            },
            remove: function remove(callback, i) {
              ~(i = _listeners2.indexOf(callback)) && _listeners2.splice(i, 1) && _i >= i && _i--;
            },
            _listeners: _listeners2
          };
          return _self;
        }(), _wake = function _wake2() {
          return !_tickerActive && _ticker.wake();
        }, _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString2(value) {
          var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
          for (; i < l; i++) {
            val = split[i];
            index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
            parsedVal = val.substr(0, index);
            obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
            key = val.substr(index + 1).trim();
          }
          return obj;
        }, _valueInParentheses = function _valueInParentheses2(value) {
          var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
          return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
        }, _configEaseFromString = function _configEaseFromString2(name) {
          var split = (name + "").split("("), ease = _easeMap[split[0]];
          return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
        }, _invertEase = function _invertEase2(ease) {
          return function(p) {
            return 1 - ease(1 - p);
          };
        }, _propagateYoyoEase = function _propagateYoyoEase2(timeline, isYoyo) {
          var child = timeline._first, ease;
          while (child) {
            if (child instanceof Timeline) {
              _propagateYoyoEase2(child, isYoyo);
            } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
              if (child.timeline) {
                _propagateYoyoEase2(child.timeline, isYoyo);
              } else {
                ease = child._ease;
                child._ease = child._yEase;
                child._yEase = ease;
                child._yoyo = isYoyo;
              }
            }
            child = child._next;
          }
        }, _parseEase = function _parseEase2(ease, defaultEase) {
          return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
        }, _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
          if (easeOut === void 0) {
            easeOut = function easeOut2(p) {
              return 1 - easeIn(1 - p);
            };
          }
          if (easeInOut === void 0) {
            easeInOut = function easeInOut2(p) {
              return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
            };
          }
          var ease = {
            easeIn,
            easeOut,
            easeInOut
          }, lowercaseName;
          _forEachName(names, function(name) {
            _easeMap[name] = _globals[name] = ease;
            _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
            for (var p in ease) {
              _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
            }
          });
          return ease;
        }, _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
          return function(p) {
            return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
          };
        }, _configElastic = function _configElastic2(type, amplitude, period) {
          var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p) {
            return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
          }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
            return 1 - easeOut(1 - p);
          } : _easeInOutFromOut(easeOut);
          p2 = _2PI / p2;
          ease.config = function(amplitude2, period2) {
            return _configElastic2(type, amplitude2, period2);
          };
          return ease;
        }, _configBack = function _configBack2(type, overshoot) {
          if (overshoot === void 0) {
            overshoot = 1.70158;
          }
          var easeOut = function easeOut2(p) {
            return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
          }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
            return 1 - easeOut(1 - p);
          } : _easeInOutFromOut(easeOut);
          ease.config = function(overshoot2) {
            return _configBack2(type, overshoot2);
          };
          return ease;
        };
        _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
          var power = i < 5 ? i + 1 : i;
          _insertEase(name + ",Power" + (power - 1), i ? function(p) {
            return Math.pow(p, power);
          } : function(p) {
            return p;
          }, function(p) {
            return 1 - Math.pow(1 - p, power);
          }, function(p) {
            return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
          });
        });
        _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
        _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
        (function(n, c) {
          var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p) {
            return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
          };
          _insertEase("Bounce", function(p) {
            return 1 - easeOut(1 - p);
          }, easeOut);
        })(7.5625, 2.75);
        _insertEase("Expo", function(p) {
          return p ? Math.pow(2, 10 * (p - 1)) : 0;
        });
        _insertEase("Circ", function(p) {
          return -(_sqrt(1 - p * p) - 1);
        });
        _insertEase("Sine", function(p) {
          return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
        });
        _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
        _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
          config: function config(steps, immediateStart) {
            if (steps === void 0) {
              steps = 1;
            }
            var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
            return function(p) {
              return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
            };
          }
        };
        _defaults.ease = _easeMap["quad.out"];
        _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
          return _callbackNames += name + "," + name + "Params,";
        });
        var GSCache = function GSCache2(target, harness) {
          this.id = _gsID++;
          target._gsap = this;
          this.target = target;
          this.harness = harness;
          this.get = harness ? harness.get : _getProperty;
          this.set = harness ? harness.getSetter : _getSetter;
        };
        var Animation = function() {
          function Animation2(vars) {
            this.vars = vars;
            this._delay = +vars.delay || 0;
            if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
              this._rDelay = vars.repeatDelay || 0;
              this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
            }
            this._ts = 1;
            _setDuration(this, +vars.duration, 1, 1);
            this.data = vars.data;
            if (_context) {
              this._ctx = _context;
              _context.data.push(this);
            }
            _tickerActive || _ticker.wake();
          }
          var _proto = Animation2.prototype;
          _proto.delay = function delay(value) {
            if (value || value === 0) {
              this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
              this._delay = value;
              return this;
            }
            return this._delay;
          };
          _proto.duration = function duration(value) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
          };
          _proto.totalDuration = function totalDuration(value) {
            if (!arguments.length) {
              return this._tDur;
            }
            this._dirty = 0;
            return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
          };
          _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
            _wake();
            if (!arguments.length) {
              return this._tTime;
            }
            var parent = this._dp;
            if (parent && parent.smoothChildTiming && this._ts) {
              _alignPlayhead(this, _totalTime);
              !parent._dp || parent.parent || _postAddChecks(parent, this);
              while (parent && parent.parent) {
                if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
                  parent.totalTime(parent._tTime, true);
                }
                parent = parent.parent;
              }
              if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
                _addToTimeline(this._dp, this, this._start - this._delay);
              }
            }
            if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
              this._ts || (this._pTime = _totalTime);
              _lazySafeRender(this, _totalTime, suppressEvents);
            }
            return this;
          };
          _proto.time = function time(value, suppressEvents) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
          };
          _proto.totalProgress = function totalProgress(value, suppressEvents) {
            return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
          };
          _proto.progress = function progress(value, suppressEvents) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
          };
          _proto.iteration = function iteration(value, suppressEvents) {
            var cycleDuration = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
          };
          _proto.timeScale = function timeScale(value, suppressEvents) {
            if (!arguments.length) {
              return this._rts === -_tinyNum ? 0 : this._rts;
            }
            if (this._rts === value) {
              return this;
            }
            var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
            this._rts = +value || 0;
            this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
            this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), suppressEvents !== false);
            _setEnd(this);
            return _recacheAncestors(this);
          };
          _proto.paused = function paused(value) {
            if (!arguments.length) {
              return this._ps;
            }
            if (this._ps !== value) {
              this._ps = value;
              if (value) {
                this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
                this._ts = this._act = 0;
              } else {
                _wake();
                this._ts = this._rts;
                this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
              }
            }
            return this;
          };
          _proto.startTime = function startTime(value) {
            if (arguments.length) {
              this._start = value;
              var parent = this.parent || this._dp;
              parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
              return this;
            }
            return this._start;
          };
          _proto.endTime = function endTime(includeRepeats) {
            return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
          };
          _proto.rawTime = function rawTime(wrapRepeats) {
            var parent = this.parent || this._dp;
            return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
          };
          _proto.revert = function revert(config) {
            if (config === void 0) {
              config = _revertConfig;
            }
            var prevIsReverting = _reverting;
            _reverting = config;
            if (this._initted || this._startAt) {
              this.timeline && this.timeline.revert(config);
              this.totalTime(-0.01, config.suppressEvents);
            }
            this.data !== "nested" && config.kill !== false && this.kill();
            _reverting = prevIsReverting;
            return this;
          };
          _proto.globalTime = function globalTime(rawTime) {
            var animation = this, time = arguments.length ? rawTime : animation.rawTime();
            while (animation) {
              time = animation._start + time / (Math.abs(animation._ts) || 1);
              animation = animation._dp;
            }
            return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time;
          };
          _proto.repeat = function repeat(value) {
            if (arguments.length) {
              this._repeat = value === Infinity ? -2 : value;
              return _onUpdateTotalDuration(this);
            }
            return this._repeat === -2 ? Infinity : this._repeat;
          };
          _proto.repeatDelay = function repeatDelay(value) {
            if (arguments.length) {
              var time = this._time;
              this._rDelay = value;
              _onUpdateTotalDuration(this);
              return time ? this.time(time) : this;
            }
            return this._rDelay;
          };
          _proto.yoyo = function yoyo(value) {
            if (arguments.length) {
              this._yoyo = value;
              return this;
            }
            return this._yoyo;
          };
          _proto.seek = function seek(position, suppressEvents) {
            return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
          };
          _proto.restart = function restart(includeDelay, suppressEvents) {
            return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
          };
          _proto.play = function play(from, suppressEvents) {
            from != null && this.seek(from, suppressEvents);
            return this.reversed(false).paused(false);
          };
          _proto.reverse = function reverse(from, suppressEvents) {
            from != null && this.seek(from || this.totalDuration(), suppressEvents);
            return this.reversed(true).paused(false);
          };
          _proto.pause = function pause(atTime, suppressEvents) {
            atTime != null && this.seek(atTime, suppressEvents);
            return this.paused(true);
          };
          _proto.resume = function resume() {
            return this.paused(false);
          };
          _proto.reversed = function reversed(value) {
            if (arguments.length) {
              !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
              return this;
            }
            return this._rts < 0;
          };
          _proto.invalidate = function invalidate() {
            this._initted = this._act = 0;
            this._zTime = -_tinyNum;
            return this;
          };
          _proto.isActive = function isActive() {
            var parent = this.parent || this._dp, start = this._start, rawTime;
            return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
          };
          _proto.eventCallback = function eventCallback(type, callback, params) {
            var vars = this.vars;
            if (arguments.length > 1) {
              if (!callback) {
                delete vars[type];
              } else {
                vars[type] = callback;
                params && (vars[type + "Params"] = params);
                type === "onUpdate" && (this._onUpdate = callback);
              }
              return this;
            }
            return vars[type];
          };
          _proto.then = function then(onFulfilled) {
            var self2 = this;
            return new Promise(function(resolve) {
              var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
                var _then = self2.then;
                self2.then = null;
                _isFunction(f) && (f = f(self2)) && (f.then || f === self2) && (self2.then = _then);
                resolve(f);
                self2.then = _then;
              };
              if (self2._initted && self2.totalProgress() === 1 && self2._ts >= 0 || !self2._tTime && self2._ts < 0) {
                _resolve();
              } else {
                self2._prom = _resolve;
              }
            });
          };
          _proto.kill = function kill() {
            _interrupt(this);
          };
          return Animation2;
        }();
        _setDefaults(Animation.prototype, {
          _time: 0,
          _start: 0,
          _end: 0,
          _tTime: 0,
          _tDur: 0,
          _dirty: 0,
          _repeat: 0,
          _yoyo: false,
          parent: null,
          _initted: false,
          _rDelay: 0,
          _ts: 1,
          _dp: 0,
          ratio: 0,
          _zTime: -_tinyNum,
          _prom: 0,
          _ps: false,
          _rts: 1
        });
        var Timeline = function(_Animation) {
          _inheritsLoose(Timeline2, _Animation);
          function Timeline2(vars, position) {
            var _this;
            if (vars === void 0) {
              vars = {};
            }
            _this = _Animation.call(this, vars) || this;
            _this.labels = {};
            _this.smoothChildTiming = !!vars.smoothChildTiming;
            _this.autoRemoveChildren = !!vars.autoRemoveChildren;
            _this._sort = _isNotFalse(vars.sortChildren);
            _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
            vars.reversed && _this.reverse();
            vars.paused && _this.paused(true);
            vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
            return _this;
          }
          var _proto2 = Timeline2.prototype;
          _proto2.to = function to(targets, vars, position) {
            _createTweenType(0, arguments, this);
            return this;
          };
          _proto2.from = function from(targets, vars, position) {
            _createTweenType(1, arguments, this);
            return this;
          };
          _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
            _createTweenType(2, arguments, this);
            return this;
          };
          _proto2.set = function set(targets, vars, position) {
            vars.duration = 0;
            vars.parent = this;
            _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
            vars.immediateRender = !!vars.immediateRender;
            new Tween(targets, vars, _parsePosition(this, position), 1);
            return this;
          };
          _proto2.call = function call(callback, params, position) {
            return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
          };
          _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
            vars.duration = duration;
            vars.stagger = vars.stagger || stagger;
            vars.onComplete = onCompleteAll;
            vars.onCompleteParams = onCompleteAllParams;
            vars.parent = this;
            new Tween(targets, vars, _parsePosition(this, position));
            return this;
          };
          _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
            vars.runBackwards = 1;
            _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
            return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
          };
          _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
            toVars.startAt = fromVars;
            _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
            return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
          };
          _proto2.render = function render(totalTime, suppressEvents, force) {
            var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
            this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
            if (tTime !== this._tTime || force || crossingStart) {
              if (prevTime !== this._time && dur) {
                tTime += this._time - prevTime;
                totalTime += this._time - prevTime;
              }
              time = tTime;
              prevStart = this._start;
              timeScale = this._ts;
              prevPaused = !timeScale;
              if (crossingStart) {
                dur || (prevTime = this._zTime);
                (totalTime || !suppressEvents) && (this._zTime = totalTime);
              }
              if (this._repeat) {
                yoyo = this._yoyo;
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && totalTime < 0) {
                  return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                }
                time = _roundPrecise(tTime % cycleDuration);
                if (tTime === tDur) {
                  iteration = this._repeat;
                  time = dur;
                } else {
                  iteration = ~~(tTime / cycleDuration);
                  if (iteration && iteration === tTime / cycleDuration) {
                    time = dur;
                    iteration--;
                  }
                  time > dur && (time = dur);
                }
                prevIteration = _animationCycle(this._tTime, cycleDuration);
                !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
                if (yoyo && iteration & 1) {
                  time = dur - time;
                  isYoyo = 1;
                }
                if (iteration !== prevIteration && !this._lock) {
                  var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
                  iteration < prevIteration && (rewinding = !rewinding);
                  prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
                  this._lock = 1;
                  this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                  this._tTime = tTime;
                  !suppressEvents && this.parent && _callback(this, "onRepeat");
                  this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
                  if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
                    return this;
                  }
                  dur = this._dur;
                  tDur = this._tDur;
                  if (doesWrap) {
                    this._lock = 2;
                    prevTime = rewinding ? dur : -1e-4;
                    this.render(prevTime, true);
                    this.vars.repeatRefresh && !isYoyo && this.invalidate();
                  }
                  this._lock = 0;
                  if (!this._ts && !prevPaused) {
                    return this;
                  }
                  _propagateYoyoEase(this, isYoyo);
                }
              }
              if (this._hasPause && !this._forcing && this._lock < 2) {
                pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
                if (pauseTween) {
                  tTime -= time - (time = pauseTween._start);
                }
              }
              this._tTime = tTime;
              this._time = time;
              this._act = !timeScale;
              if (!this._initted) {
                this._onUpdate = this.vars.onUpdate;
                this._initted = 1;
                this._zTime = totalTime;
                prevTime = 0;
              }
              if (!prevTime && time && !suppressEvents && !iteration) {
                _callback(this, "onStart");
                if (this._tTime !== tTime) {
                  return this;
                }
              }
              if (time >= prevTime && totalTime >= 0) {
                child = this._first;
                while (child) {
                  next = child._next;
                  if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                    if (child.parent !== this) {
                      return this.render(totalTime, suppressEvents, force);
                    }
                    child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                    if (time !== this._time || !this._ts && !prevPaused) {
                      pauseTween = 0;
                      next && (tTime += this._zTime = -_tinyNum);
                      break;
                    }
                  }
                  child = next;
                }
              } else {
                child = this._last;
                var adjustedTime = totalTime < 0 ? totalTime : time;
                while (child) {
                  next = child._prev;
                  if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                    if (child.parent !== this) {
                      return this.render(totalTime, suppressEvents, force);
                    }
                    child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt));
                    if (time !== this._time || !this._ts && !prevPaused) {
                      pauseTween = 0;
                      next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                      break;
                    }
                  }
                  child = next;
                }
              }
              if (pauseTween && !suppressEvents) {
                this.pause();
                pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
                if (this._ts) {
                  this._start = prevStart;
                  _setEnd(this);
                  return this.render(totalTime, suppressEvents, force);
                }
              }
              this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
              if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
                if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
                  if (!this._lock) {
                    (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                    if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                      _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                      this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                    }
                  }
                }
              }
            }
            return this;
          };
          _proto2.add = function add(child, position) {
            var _this2 = this;
            _isNumber(position) || (position = _parsePosition(this, position, child));
            if (!(child instanceof Animation)) {
              if (_isArray(child)) {
                child.forEach(function(obj) {
                  return _this2.add(obj, position);
                });
                return this;
              }
              if (_isString(child)) {
                return this.addLabel(child, position);
              }
              if (_isFunction(child)) {
                child = Tween.delayedCall(0, child);
              } else {
                return this;
              }
            }
            return this !== child ? _addToTimeline(this, child, position) : this;
          };
          _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
            if (nested === void 0) {
              nested = true;
            }
            if (tweens === void 0) {
              tweens = true;
            }
            if (timelines === void 0) {
              timelines = true;
            }
            if (ignoreBeforeTime === void 0) {
              ignoreBeforeTime = -_bigNum;
            }
            var a = [], child = this._first;
            while (child) {
              if (child._start >= ignoreBeforeTime) {
                if (child instanceof Tween) {
                  tweens && a.push(child);
                } else {
                  timelines && a.push(child);
                  nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
                }
              }
              child = child._next;
            }
            return a;
          };
          _proto2.getById = function getById(id) {
            var animations = this.getChildren(1, 1, 1), i = animations.length;
            while (i--) {
              if (animations[i].vars.id === id) {
                return animations[i];
              }
            }
          };
          _proto2.remove = function remove(child) {
            if (_isString(child)) {
              return this.removeLabel(child);
            }
            if (_isFunction(child)) {
              return this.killTweensOf(child);
            }
            _removeLinkedListItem(this, child);
            if (child === this._recent) {
              this._recent = this._last;
            }
            return _uncache(this);
          };
          _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
            if (!arguments.length) {
              return this._tTime;
            }
            this._forcing = 1;
            if (!this._dp && this._ts) {
              this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
            }
            _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
            this._forcing = 0;
            return this;
          };
          _proto2.addLabel = function addLabel(label, position) {
            this.labels[label] = _parsePosition(this, position);
            return this;
          };
          _proto2.removeLabel = function removeLabel(label) {
            delete this.labels[label];
            return this;
          };
          _proto2.addPause = function addPause(position, callback, params) {
            var t = Tween.delayedCall(0, callback || _emptyFunc, params);
            t.data = "isPause";
            this._hasPause = 1;
            return _addToTimeline(this, t, _parsePosition(this, position));
          };
          _proto2.removePause = function removePause(position) {
            var child = this._first;
            position = _parsePosition(this, position);
            while (child) {
              if (child._start === position && child.data === "isPause") {
                _removeFromParent(child);
              }
              child = child._next;
            }
          };
          _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
            var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
            while (i--) {
              _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
            }
            return this;
          };
          _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
            var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
            while (child) {
              if (child instanceof Tween) {
                if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
                  a.push(child);
                }
              } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
                a.push.apply(a, children);
              }
              child = child._next;
            }
            return a;
          };
          _proto2.tweenTo = function tweenTo(position, vars) {
            vars = vars || {};
            var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
              ease: vars.ease || "none",
              lazy: false,
              immediateRender: false,
              time: endTime,
              overwrite: "auto",
              duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
              onStart: function onStart() {
                tl.pause();
                if (!initted) {
                  var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
                  tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                  initted = 1;
                }
                _onStart && _onStart.apply(tween, onStartParams || []);
              }
            }, vars));
            return immediateRender ? tween.render(0) : tween;
          };
          _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
            return this.tweenTo(toPosition, _setDefaults({
              startAt: {
                time: _parsePosition(this, fromPosition)
              }
            }, vars));
          };
          _proto2.recent = function recent() {
            return this._recent;
          };
          _proto2.nextLabel = function nextLabel(afterTime) {
            if (afterTime === void 0) {
              afterTime = this._time;
            }
            return _getLabelInDirection(this, _parsePosition(this, afterTime));
          };
          _proto2.previousLabel = function previousLabel(beforeTime) {
            if (beforeTime === void 0) {
              beforeTime = this._time;
            }
            return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
          };
          _proto2.currentLabel = function currentLabel(value) {
            return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
          };
          _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
            if (ignoreBeforeTime === void 0) {
              ignoreBeforeTime = 0;
            }
            var child = this._first, labels = this.labels, p;
            while (child) {
              if (child._start >= ignoreBeforeTime) {
                child._start += amount;
                child._end += amount;
              }
              child = child._next;
            }
            if (adjustLabels) {
              for (p in labels) {
                if (labels[p] >= ignoreBeforeTime) {
                  labels[p] += amount;
                }
              }
            }
            return _uncache(this);
          };
          _proto2.invalidate = function invalidate(soft) {
            var child = this._first;
            this._lock = 0;
            while (child) {
              child.invalidate(soft);
              child = child._next;
            }
            return _Animation.prototype.invalidate.call(this, soft);
          };
          _proto2.clear = function clear(includeLabels) {
            if (includeLabels === void 0) {
              includeLabels = true;
            }
            var child = this._first, next;
            while (child) {
              next = child._next;
              this.remove(child);
              child = next;
            }
            this._dp && (this._time = this._tTime = this._pTime = 0);
            includeLabels && (this.labels = {});
            return _uncache(this);
          };
          _proto2.totalDuration = function totalDuration(value) {
            var max = 0, self2 = this, child = self2._last, prevStart = _bigNum, prev, start, parent;
            if (arguments.length) {
              return self2.timeScale((self2._repeat < 0 ? self2.duration() : self2.totalDuration()) / (self2.reversed() ? -value : value));
            }
            if (self2._dirty) {
              parent = self2.parent;
              while (child) {
                prev = child._prev;
                child._dirty && child.totalDuration();
                start = child._start;
                if (start > prevStart && self2._sort && child._ts && !self2._lock) {
                  self2._lock = 1;
                  _addToTimeline(self2, child, start - child._delay, 1)._lock = 0;
                } else {
                  prevStart = start;
                }
                if (start < 0 && child._ts) {
                  max -= start;
                  if (!parent && !self2._dp || parent && parent.smoothChildTiming) {
                    self2._start += start / self2._ts;
                    self2._time -= start;
                    self2._tTime -= start;
                  }
                  self2.shiftChildren(-start, false, -Infinity);
                  prevStart = 0;
                }
                child._end > max && child._ts && (max = child._end);
                child = prev;
              }
              _setDuration(self2, self2 === _globalTimeline && self2._time > max ? self2._time : max, 1, 1);
              self2._dirty = 0;
            }
            return self2._tDur;
          };
          Timeline2.updateRoot = function updateRoot(time) {
            if (_globalTimeline._ts) {
              _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
              _lastRenderedFrame = _ticker.frame;
            }
            if (_ticker.frame >= _nextGCFrame) {
              _nextGCFrame += _config.autoSleep || 120;
              var child = _globalTimeline._first;
              if (!child || !child._ts) {
                if (_config.autoSleep && _ticker._listeners.length < 2) {
                  while (child && !child._ts) {
                    child = child._next;
                  }
                  child || _ticker.sleep();
                }
              }
            }
          };
          return Timeline2;
        }(Animation);
        _setDefaults(Timeline.prototype, {
          _lock: 0,
          _hasPause: 0,
          _forcing: 0
        });
        var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
          var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
          pt.b = start;
          pt.e = end;
          start += "";
          end += "";
          if (hasRandom = ~end.indexOf("random(")) {
            end = _replaceRandom(end);
          }
          if (stringFilter) {
            a = [start, end];
            stringFilter(a, target, prop);
            start = a[0];
            end = a[1];
          }
          startNums = start.match(_complexStringNumExp) || [];
          while (result = _complexStringNumExp.exec(end)) {
            endNum = result[0];
            chunk = end.substring(index, result.index);
            if (color) {
              color = (color + 1) % 5;
            } else if (chunk.substr(-5) === "rgba(") {
              color = 1;
            }
            if (endNum !== startNums[matchIndex++]) {
              startNum = parseFloat(startNums[matchIndex - 1]) || 0;
              pt._pt = {
                _next: pt._pt,
                p: chunk || matchIndex === 1 ? chunk : ",",
                s: startNum,
                c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
                m: color && color < 4 ? Math.round : 0
              };
              index = _complexStringNumExp.lastIndex;
            }
          }
          pt.c = index < end.length ? end.substring(index, end.length) : "";
          pt.fp = funcParam;
          if (_relExp.test(end) || hasRandom) {
            pt.e = 0;
          }
          this._pt = pt;
          return pt;
        }, _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
          _isFunction(end) && (end = end(index || 0, target, targets));
          var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
          if (_isString(end)) {
            if (~end.indexOf("random(")) {
              end = _replaceRandom(end);
            }
            if (end.charAt(1) === "=") {
              pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
              if (pt || pt === 0) {
                end = pt;
              }
            }
          }
          if (!optional || parsedStart !== end || _forceAllPropTweens) {
            if (!isNaN(parsedStart * end) && end !== "") {
              pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
              funcParam && (pt.fp = funcParam);
              modifier && pt.modifier(modifier, this, target);
              return this._pt = pt;
            }
            !currentValue && !(prop in target) && _missingPlugin(prop, end);
            return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
          }
        }, _processVars = function _processVars2(vars, index, target, targets, tween) {
          _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
          if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
            return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
          }
          var copy = {}, p;
          for (p in vars) {
            copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
          }
          return copy;
        }, _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
          var plugin, pt, ptLookup, i;
          if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
            tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
            if (tween !== _quickTween) {
              ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
              i = plugin._props.length;
              while (i--) {
                ptLookup[plugin._props[i]] = pt;
              }
            }
          }
          return plugin;
        }, _overwritingTween, _forceAllPropTweens, _initTween = function _initTween2(tween, time, tTime) {
          var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
          tl && (!keyframes || !ease) && (ease = "none");
          tween._ease = _parseEase(ease, _defaults.ease);
          tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
          if (yoyoEase && tween._yoyo && !tween._repeat) {
            yoyoEase = tween._yEase;
            tween._yEase = tween._ease;
            tween._ease = yoyoEase;
          }
          tween._from = !tl && !!vars.runBackwards;
          if (!tl || keyframes && !vars.stagger) {
            harness = targets[0] ? _getCache(targets[0]).harness : 0;
            harnessVars = harness && vars[harness.prop];
            cleanVars = _copyExcluding(vars, _reservedProps);
            if (prevStartAt) {
              prevStartAt._zTime < 0 && prevStartAt.progress(1);
              time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
              prevStartAt._lazy = 0;
            }
            if (startAt) {
              _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
                data: "isStart",
                overwrite: false,
                parent,
                immediateRender: true,
                lazy: !prevStartAt && _isNotFalse(lazy),
                startAt: null,
                delay: 0,
                onUpdate: onUpdate && function() {
                  return _callback(tween, "onUpdate");
                },
                stagger: 0
              }, startAt)));
              tween._startAt._dp = 0;
              tween._startAt._sat = tween;
              time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
              if (immediateRender) {
                if (dur && time <= 0 && tTime <= 0) {
                  time && (tween._zTime = time);
                  return;
                }
              }
            } else if (runBackwards && dur) {
              if (!prevStartAt) {
                time && (immediateRender = false);
                p = _setDefaults({
                  overwrite: false,
                  data: "isFromStart",
                  lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
                  immediateRender,
                  stagger: 0,
                  parent
                }, cleanVars);
                harnessVars && (p[harness.prop] = harnessVars);
                _removeFromParent(tween._startAt = Tween.set(targets, p));
                tween._startAt._dp = 0;
                tween._startAt._sat = tween;
                time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
                tween._zTime = time;
                if (!immediateRender) {
                  _initTween2(tween._startAt, _tinyNum, _tinyNum);
                } else if (!time) {
                  return;
                }
              }
            }
            tween._pt = tween._ptCache = 0;
            lazy = dur && _isNotFalse(lazy) || lazy && !dur;
            for (i = 0; i < targets.length; i++) {
              target = targets[i];
              gsData = target._gsap || _harness(targets)[i]._gsap;
              tween._ptLookup[i] = ptLookup = {};
              _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
              index = fullTargets === targets ? i : fullTargets.indexOf(target);
              if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
                tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
                plugin._props.forEach(function(name) {
                  ptLookup[name] = pt;
                });
                plugin.priority && (hasPriority = 1);
              }
              if (!harness || harnessVars) {
                for (p in cleanVars) {
                  if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
                    plugin.priority && (hasPriority = 1);
                  } else {
                    ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
                  }
                }
              }
              tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
              if (autoOverwrite && tween._pt) {
                _overwritingTween = tween;
                _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
                overwritten = !tween.parent;
                _overwritingTween = 0;
              }
              tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
            }
            hasPriority && _sortPropTweensByPriority(tween);
            tween._onInit && tween._onInit(tween);
          }
          tween._onUpdate = onUpdate;
          tween._initted = (!tween._op || tween._pt) && !overwritten;
          keyframes && time <= 0 && tl.render(_bigNum, true, true);
        }, _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
          var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
          if (!ptCache) {
            ptCache = tween._ptCache[property] = [];
            lookup = tween._ptLookup;
            i = tween._targets.length;
            while (i--) {
              pt = lookup[i][property];
              if (pt && pt.d && pt.d._pt) {
                pt = pt.d._pt;
                while (pt && pt.p !== property && pt.fp !== property) {
                  pt = pt._next;
                }
              }
              if (!pt) {
                _forceAllPropTweens = 1;
                tween.vars[property] = "+=0";
                _initTween(tween, time);
                _forceAllPropTweens = 0;
                return skipRecursion ? _warn(property + " not eligible for reset") : 1;
              }
              ptCache.push(pt);
            }
          }
          i = ptCache.length;
          while (i--) {
            rootPT = ptCache[i];
            pt = rootPT._pt || rootPT;
            pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
            pt.c = value - pt.s;
            rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
            rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
          }
        }, _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
          var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
          if (!propertyAliases) {
            return vars;
          }
          copy = _merge({}, vars);
          for (p in propertyAliases) {
            if (p in copy) {
              aliases = propertyAliases[p].split(",");
              i = aliases.length;
              while (i--) {
                copy[aliases[i]] = copy[p];
              }
            }
          }
          return copy;
        }, _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
          var ease = obj.ease || easeEach || "power1.inOut", p, a;
          if (_isArray(obj)) {
            a = allProps[prop] || (allProps[prop] = []);
            obj.forEach(function(value, i) {
              return a.push({
                t: i / (obj.length - 1) * 100,
                v: value,
                e: ease
              });
            });
          } else {
            for (p in obj) {
              a = allProps[p] || (allProps[p] = []);
              p === "ease" || a.push({
                t: parseFloat(prop),
                v: obj[p],
                e: ease
              });
            }
          }
        }, _parseFuncOrString = function _parseFuncOrString2(value, tween, i, target, targets) {
          return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
        }, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", _staggerPropsToSkip = {};
        _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
          return _staggerPropsToSkip[name] = 1;
        });
        var Tween = function(_Animation2) {
          _inheritsLoose(Tween2, _Animation2);
          function Tween2(targets, vars, position, skipInherit) {
            var _this3;
            if (typeof vars === "number") {
              position.duration = vars;
              vars = position;
              position = null;
            }
            _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
            var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
            _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
            _this3._ptLookup = [];
            _this3._overwrite = overwrite;
            if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
              vars = _this3.vars;
              tl = _this3.timeline = new Timeline({
                data: "nested",
                defaults: defaults || {},
                targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
              });
              tl.kill();
              tl.parent = tl._dp = _assertThisInitialized(_this3);
              tl._start = 0;
              if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
                l = parsedTargets.length;
                staggerFunc = stagger && distribute(stagger);
                if (_isObject(stagger)) {
                  for (p in stagger) {
                    if (~_staggerTweenProps.indexOf(p)) {
                      staggerVarsToMerge || (staggerVarsToMerge = {});
                      staggerVarsToMerge[p] = stagger[p];
                    }
                  }
                }
                for (i = 0; i < l; i++) {
                  copy = _copyExcluding(vars, _staggerPropsToSkip);
                  copy.stagger = 0;
                  yoyoEase && (copy.yoyoEase = yoyoEase);
                  staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                  curTarget = parsedTargets[i];
                  copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
                  copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
                  if (!stagger && l === 1 && copy.delay) {
                    _this3._delay = delay = copy.delay;
                    _this3._start += delay;
                    copy.delay = 0;
                  }
                  tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
                  tl._ease = _easeMap.none;
                }
                tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
              } else if (keyframes) {
                _inheritDefaults(_setDefaults(tl.vars.defaults, {
                  ease: "none"
                }));
                tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
                var time = 0, a, kf, v;
                if (_isArray(keyframes)) {
                  keyframes.forEach(function(frame) {
                    return tl.to(parsedTargets, frame, ">");
                  });
                  tl.duration();
                } else {
                  copy = {};
                  for (p in keyframes) {
                    p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
                  }
                  for (p in copy) {
                    a = copy[p].sort(function(a2, b) {
                      return a2.t - b.t;
                    });
                    time = 0;
                    for (i = 0; i < a.length; i++) {
                      kf = a[i];
                      v = {
                        ease: kf.e,
                        duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                      };
                      v[p] = kf.v;
                      tl.to(parsedTargets, v, time);
                      time += v.duration;
                    }
                  }
                  tl.duration() < duration && tl.to({}, {
                    duration: duration - tl.duration()
                  });
                }
              }
              duration || _this3.duration(duration = tl.duration());
            } else {
              _this3.timeline = 0;
            }
            if (overwrite === true && !_suppressOverwrites) {
              _overwritingTween = _assertThisInitialized(_this3);
              _globalTimeline.killTweensOf(parsedTargets);
              _overwritingTween = 0;
            }
            _addToTimeline(parent, _assertThisInitialized(_this3), position);
            vars.reversed && _this3.reverse();
            vars.paused && _this3.paused(true);
            if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
              _this3._tTime = -_tinyNum;
              _this3.render(Math.max(0, -delay) || 0);
            }
            scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
            return _this3;
          }
          var _proto3 = Tween2.prototype;
          _proto3.render = function render(totalTime, suppressEvents, force) {
            var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase;
            if (!dur) {
              _renderZeroDurationTween(this, totalTime, suppressEvents, force);
            } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
              time = tTime;
              timeline = this.timeline;
              if (this._repeat) {
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && isNegative) {
                  return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                }
                time = _roundPrecise(tTime % cycleDuration);
                if (tTime === tDur) {
                  iteration = this._repeat;
                  time = dur;
                } else {
                  iteration = ~~(tTime / cycleDuration);
                  if (iteration && iteration === _roundPrecise(tTime / cycleDuration)) {
                    time = dur;
                    iteration--;
                  }
                  time > dur && (time = dur);
                }
                isYoyo = this._yoyo && iteration & 1;
                if (isYoyo) {
                  yoyoEase = this._yEase;
                  time = dur - time;
                }
                prevIteration = _animationCycle(this._tTime, cycleDuration);
                if (time === prevTime && !force && this._initted && iteration === prevIteration) {
                  this._tTime = tTime;
                  return this;
                }
                if (iteration !== prevIteration) {
                  timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);
                  if (this.vars.repeatRefresh && !isYoyo && !this._lock && this._time !== cycleDuration && this._initted) {
                    this._lock = force = 1;
                    this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
                  }
                }
              }
              if (!this._initted) {
                if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
                  this._tTime = 0;
                  return this;
                }
                if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
                  return this;
                }
                if (dur !== this._dur) {
                  return this.render(totalTime, suppressEvents, force);
                }
              }
              this._tTime = tTime;
              this._time = time;
              if (!this._act && this._ts) {
                this._act = 1;
                this._lazy = 0;
              }
              this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
              if (this._from) {
                this.ratio = ratio = 1 - ratio;
              }
              if (time && !prevTime && !suppressEvents && !iteration) {
                _callback(this, "onStart");
                if (this._tTime !== tTime) {
                  return this;
                }
              }
              pt = this._pt;
              while (pt) {
                pt.r(ratio, pt.d);
                pt = pt._next;
              }
              timeline && timeline.render(totalTime < 0 ? totalTime : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
              if (this._onUpdate && !suppressEvents) {
                isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
                _callback(this, "onUpdate");
              }
              this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
              if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
                isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
                (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
                  _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                  this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                }
              }
            }
            return this;
          };
          _proto3.targets = function targets() {
            return this._targets;
          };
          _proto3.invalidate = function invalidate(soft) {
            (!soft || !this.vars.runBackwards) && (this._startAt = 0);
            this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
            this._ptLookup = [];
            this.timeline && this.timeline.invalidate(soft);
            return _Animation2.prototype.invalidate.call(this, soft);
          };
          _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
            _tickerActive || _ticker.wake();
            this._ts || this.play();
            var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
            this._initted || _initTween(this, time);
            ratio = this._ease(time / this._dur);
            if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
              return this.resetTo(property, value, start, startIsRelative, 1);
            }
            _alignPlayhead(this, 0);
            this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
            return this.render(0);
          };
          _proto3.kill = function kill(targets, vars) {
            if (vars === void 0) {
              vars = "all";
            }
            if (!targets && (!vars || vars === "all")) {
              this._lazy = this._pt = 0;
              return this.parent ? _interrupt(this) : this;
            }
            if (this.timeline) {
              var tDur = this.timeline.totalDuration();
              this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
              this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
              return this;
            }
            var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
            if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
              vars === "all" && (this._pt = 0);
              return _interrupt(this);
            }
            overwrittenProps = this._op = this._op || [];
            if (vars !== "all") {
              if (_isString(vars)) {
                p = {};
                _forEachName(vars, function(name) {
                  return p[name] = 1;
                });
                vars = p;
              }
              vars = _addAliasesToVars(parsedTargets, vars);
            }
            i = parsedTargets.length;
            while (i--) {
              if (~killingTargets.indexOf(parsedTargets[i])) {
                curLookup = propTweenLookup[i];
                if (vars === "all") {
                  overwrittenProps[i] = vars;
                  props = curLookup;
                  curOverwriteProps = {};
                } else {
                  curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
                  props = vars;
                }
                for (p in props) {
                  pt = curLookup && curLookup[p];
                  if (pt) {
                    if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                      _removeLinkedListItem(this, pt, "_pt");
                    }
                    delete curLookup[p];
                  }
                  if (curOverwriteProps !== "all") {
                    curOverwriteProps[p] = 1;
                  }
                }
              }
            }
            this._initted && !this._pt && firstPT && _interrupt(this);
            return this;
          };
          Tween2.to = function to(targets, vars) {
            return new Tween2(targets, vars, arguments[2]);
          };
          Tween2.from = function from(targets, vars) {
            return _createTweenType(1, arguments);
          };
          Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
            return new Tween2(callback, 0, {
              immediateRender: false,
              lazy: false,
              overwrite: false,
              delay,
              onComplete: callback,
              onReverseComplete: callback,
              onCompleteParams: params,
              onReverseCompleteParams: params,
              callbackScope: scope
            });
          };
          Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
            return _createTweenType(2, arguments);
          };
          Tween2.set = function set(targets, vars) {
            vars.duration = 0;
            vars.repeatDelay || (vars.repeat = 0);
            return new Tween2(targets, vars);
          };
          Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
            return _globalTimeline.killTweensOf(targets, props, onlyActive);
          };
          return Tween2;
        }(Animation);
        _setDefaults(Tween.prototype, {
          _targets: [],
          _lazy: 0,
          _startAt: 0,
          _op: 0,
          _onInit: 0
        });
        _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
          Tween[name] = function() {
            var tl = new Timeline(), params = _slice.call(arguments, 0);
            params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
            return tl[name].apply(tl, params);
          };
        });
        var _setterPlain = function _setterPlain2(target, property, value) {
          return target[property] = value;
        }, _setterFunc = function _setterFunc2(target, property, value) {
          return target[property](value);
        }, _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
          return target[property](data.fp, value);
        }, _setterAttribute = function _setterAttribute2(target, property, value) {
          return target.setAttribute(property, value);
        }, _getSetter = function _getSetter2(target, property) {
          return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
        }, _renderPlain = function _renderPlain2(ratio, data) {
          return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
        }, _renderBoolean = function _renderBoolean2(ratio, data) {
          return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
        }, _renderComplexString = function _renderComplexString2(ratio, data) {
          var pt = data._pt, s = "";
          if (!ratio && data.b) {
            s = data.b;
          } else if (ratio === 1 && data.e) {
            s = data.e;
          } else {
            while (pt) {
              s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
              pt = pt._next;
            }
            s += data.c;
          }
          data.set(data.t, data.p, s, data);
        }, _renderPropTweens = function _renderPropTweens2(ratio, data) {
          var pt = data._pt;
          while (pt) {
            pt.r(ratio, pt.d);
            pt = pt._next;
          }
        }, _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
          var pt = this._pt, next;
          while (pt) {
            next = pt._next;
            pt.p === property && pt.modifier(modifier, tween, target);
            pt = next;
          }
        }, _killPropTweensOf = function _killPropTweensOf2(property) {
          var pt = this._pt, hasNonDependentRemaining, next;
          while (pt) {
            next = pt._next;
            if (pt.p === property && !pt.op || pt.op === property) {
              _removeLinkedListItem(this, pt, "_pt");
            } else if (!pt.dep) {
              hasNonDependentRemaining = 1;
            }
            pt = next;
          }
          return !hasNonDependentRemaining;
        }, _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
          data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
        }, _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
          var pt = parent._pt, next, pt2, first, last;
          while (pt) {
            next = pt._next;
            pt2 = first;
            while (pt2 && pt2.pr > pt.pr) {
              pt2 = pt2._next;
            }
            if (pt._prev = pt2 ? pt2._prev : last) {
              pt._prev._next = pt;
            } else {
              first = pt;
            }
            if (pt._next = pt2) {
              pt2._prev = pt;
            } else {
              last = pt;
            }
            pt = next;
          }
          parent._pt = first;
        };
        var PropTween = function() {
          function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
            this.t = target;
            this.s = start;
            this.c = change;
            this.p = prop;
            this.r = renderer || _renderPlain;
            this.d = data || this;
            this.set = setter || _setterPlain;
            this.pr = priority || 0;
            this._next = next;
            if (next) {
              next._prev = this;
            }
          }
          var _proto4 = PropTween2.prototype;
          _proto4.modifier = function modifier(func, tween, target) {
            this.mSet = this.mSet || this.set;
            this.set = _setterWithModifier;
            this.m = func;
            this.mt = target;
            this.tween = tween;
          };
          return PropTween2;
        }();
        _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
          return _reservedProps[name] = 1;
        });
        _globals.TweenMax = _globals.TweenLite = Tween;
        _globals.TimelineLite = _globals.TimelineMax = Timeline;
        _globalTimeline = new Timeline({
          sortChildren: false,
          defaults: _defaults,
          autoRemoveChildren: true,
          id: "root",
          smoothChildTiming: true
        });
        _config.stringFilter = _colorStringFilter;
        var _media = [], _listeners = {}, _emptyArray = [], _lastMediaTime = 0, _contextID = 0, _dispatch = function _dispatch2(type) {
          return (_listeners[type] || _emptyArray).map(function(f) {
            return f();
          });
        }, _onMediaChange = function _onMediaChange2() {
          var time = Date.now(), matches = [];
          if (time - _lastMediaTime > 2) {
            _dispatch("matchMediaInit");
            _media.forEach(function(c) {
              var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
              for (p in queries) {
                match = _win.matchMedia(queries[p]).matches;
                match && (anyMatch = 1);
                if (match !== conditions[p]) {
                  conditions[p] = match;
                  toggled = 1;
                }
              }
              if (toggled) {
                c.revert();
                anyMatch && matches.push(c);
              }
            });
            _dispatch("matchMediaRevert");
            matches.forEach(function(c) {
              return c.onMatch(c, function(func) {
                return c.add(null, func);
              });
            });
            _lastMediaTime = time;
            _dispatch("matchMedia");
          }
        };
        var Context = function() {
          function Context2(func, scope) {
            this.selector = scope && selector(scope);
            this.data = [];
            this._r = [];
            this.isReverted = false;
            this.id = _contextID++;
            func && this.add(func);
          }
          var _proto5 = Context2.prototype;
          _proto5.add = function add(name, func, scope) {
            if (_isFunction(name)) {
              scope = func;
              func = name;
              name = _isFunction;
            }
            var self2 = this, f = function f2() {
              var prev = _context, prevSelector = self2.selector, result;
              prev && prev !== self2 && prev.data.push(self2);
              scope && (self2.selector = selector(scope));
              _context = self2;
              result = func.apply(self2, arguments);
              _isFunction(result) && self2._r.push(result);
              _context = prev;
              self2.selector = prevSelector;
              self2.isReverted = false;
              return result;
            };
            self2.last = f;
            return name === _isFunction ? f(self2, function(func2) {
              return self2.add(null, func2);
            }) : name ? self2[name] = f : f;
          };
          _proto5.ignore = function ignore(func) {
            var prev = _context;
            _context = null;
            func(this);
            _context = prev;
          };
          _proto5.getTweens = function getTweens() {
            var a = [];
            this.data.forEach(function(e) {
              return e instanceof Context2 ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
            });
            return a;
          };
          _proto5.clear = function clear() {
            this._r.length = this.data.length = 0;
          };
          _proto5.kill = function kill(revert, matchMedia) {
            var _this4 = this;
            if (revert) {
              (function() {
                var tweens = _this4.getTweens(), i2 = _this4.data.length, t;
                while (i2--) {
                  t = _this4.data[i2];
                  if (t.data === "isFlip") {
                    t.revert();
                    t.getChildren(true, true, false).forEach(function(tween) {
                      return tweens.splice(tweens.indexOf(tween), 1);
                    });
                  }
                }
                tweens.map(function(t2) {
                  return {
                    g: t2._dur || t2._delay || t2._sat && !t2._sat.vars.immediateRender ? t2.globalTime(0) : -Infinity,
                    t: t2
                  };
                }).sort(function(a, b) {
                  return b.g - a.g || -Infinity;
                }).forEach(function(o) {
                  return o.t.revert(revert);
                });
                i2 = _this4.data.length;
                while (i2--) {
                  t = _this4.data[i2];
                  if (t instanceof Timeline) {
                    if (t.data !== "nested") {
                      t.scrollTrigger && t.scrollTrigger.revert();
                      t.kill();
                    }
                  } else {
                    !(t instanceof Tween) && t.revert && t.revert(revert);
                  }
                }
                _this4._r.forEach(function(f) {
                  return f(revert, _this4);
                });
                _this4.isReverted = true;
              })();
            } else {
              this.data.forEach(function(e) {
                return e.kill && e.kill();
              });
            }
            this.clear();
            if (matchMedia) {
              var i = _media.length;
              while (i--) {
                _media[i].id === this.id && _media.splice(i, 1);
              }
            }
          };
          _proto5.revert = function revert(config) {
            this.kill(config || {});
          };
          return Context2;
        }();
        var MatchMedia = function() {
          function MatchMedia2(scope) {
            this.contexts = [];
            this.scope = scope;
            _context && _context.data.push(this);
          }
          var _proto6 = MatchMedia2.prototype;
          _proto6.add = function add(conditions, func, scope) {
            _isObject(conditions) || (conditions = {
              matches: conditions
            });
            var context = new Context(0, scope || this.scope), cond = context.conditions = {}, mq, p, active;
            _context && !context.selector && (context.selector = _context.selector);
            this.contexts.push(context);
            func = context.add("onMatch", func);
            context.queries = conditions;
            for (p in conditions) {
              if (p === "all") {
                active = 1;
              } else {
                mq = _win.matchMedia(conditions[p]);
                if (mq) {
                  _media.indexOf(context) < 0 && _media.push(context);
                  (cond[p] = mq.matches) && (active = 1);
                  mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
                }
              }
            }
            active && func(context, function(f) {
              return context.add(null, f);
            });
            return this;
          };
          _proto6.revert = function revert(config) {
            this.kill(config || {});
          };
          _proto6.kill = function kill(revert) {
            this.contexts.forEach(function(c) {
              return c.kill(revert, true);
            });
          };
          return MatchMedia2;
        }();
        var _gsap = {
          registerPlugin: function registerPlugin() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            args.forEach(function(config) {
              return _createPlugin(config);
            });
          },
          timeline: function timeline(vars) {
            return new Timeline(vars);
          },
          getTweensOf: function getTweensOf(targets, onlyActive) {
            return _globalTimeline.getTweensOf(targets, onlyActive);
          },
          getProperty: function getProperty(target, property, unit, uncache) {
            _isString(target) && (target = toArray(target)[0]);
            var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
            unit === "native" && (unit = "");
            return !target ? target : !property ? function(property2, unit2, uncache2) {
              return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
            } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
          },
          quickSetter: function quickSetter(target, property, unit) {
            target = toArray(target);
            if (target.length > 1) {
              var setters = target.map(function(t) {
                return gsap2.quickSetter(t, property, unit);
              }), l = setters.length;
              return function(value) {
                var i = l;
                while (i--) {
                  setters[i](value);
                }
              };
            }
            target = target[0] || {};
            var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
              var p2 = new Plugin();
              _quickTween._pt = 0;
              p2.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
              p2.render(1, p2);
              _quickTween._pt && _renderPropTweens(1, _quickTween);
            } : cache.set(target, p);
            return Plugin ? setter : function(value) {
              return setter(target, p, unit ? value + unit : value, cache, 1);
            };
          },
          quickTo: function quickTo(target, property, vars) {
            var _merge2;
            var tween = gsap2.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})), func = function func2(value, start, startIsRelative) {
              return tween.resetTo(property, value, start, startIsRelative);
            };
            func.tween = tween;
            return func;
          },
          isTweening: function isTweening(targets) {
            return _globalTimeline.getTweensOf(targets, true).length > 0;
          },
          defaults: function defaults(value) {
            value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
            return _mergeDeep(_defaults, value || {});
          },
          config: function config(value) {
            return _mergeDeep(_config, value || {});
          },
          registerEffect: function registerEffect(_ref3) {
            var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
            (plugins || "").split(",").forEach(function(pluginName) {
              return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
            });
            _effects[name] = function(targets, vars, tl) {
              return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
            };
            if (extendTimeline) {
              Timeline.prototype[name] = function(targets, vars, position) {
                return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
              };
            }
          },
          registerEase: function registerEase(name, ease) {
            _easeMap[name] = _parseEase(ease);
          },
          parseEase: function parseEase(ease, defaultEase) {
            return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
          },
          getById: function getById(id) {
            return _globalTimeline.getById(id);
          },
          exportRoot: function exportRoot(vars, includeDelayedCalls) {
            if (vars === void 0) {
              vars = {};
            }
            var tl = new Timeline(vars), child, next;
            tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
            _globalTimeline.remove(tl);
            tl._dp = 0;
            tl._time = tl._tTime = _globalTimeline._time;
            child = _globalTimeline._first;
            while (child) {
              next = child._next;
              if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
                _addToTimeline(tl, child, child._start - child._delay);
              }
              child = next;
            }
            _addToTimeline(_globalTimeline, tl, 0);
            return tl;
          },
          context: function context(func, scope) {
            return func ? new Context(func, scope) : _context;
          },
          matchMedia: function matchMedia(scope) {
            return new MatchMedia(scope);
          },
          matchMediaRefresh: function matchMediaRefresh() {
            return _media.forEach(function(c) {
              var cond = c.conditions, found, p;
              for (p in cond) {
                if (cond[p]) {
                  cond[p] = false;
                  found = 1;
                }
              }
              found && c.revert();
            }) || _onMediaChange();
          },
          addEventListener: function addEventListener(type, callback) {
            var a = _listeners[type] || (_listeners[type] = []);
            ~a.indexOf(callback) || a.push(callback);
          },
          removeEventListener: function removeEventListener(type, callback) {
            var a = _listeners[type], i = a && a.indexOf(callback);
            i >= 0 && a.splice(i, 1);
          },
          utils: {
            wrap,
            wrapYoyo,
            distribute,
            random,
            snap,
            normalize,
            getUnit,
            clamp,
            splitColor,
            toArray,
            selector,
            mapRange,
            pipe,
            unitize,
            interpolate,
            shuffle
          },
          install: _install,
          effects: _effects,
          ticker: _ticker,
          updateRoot: Timeline.updateRoot,
          plugins: _plugins,
          globalTimeline: _globalTimeline,
          core: {
            PropTween,
            globals: _addGlobal,
            Tween,
            Timeline,
            Animation,
            getCache: _getCache,
            _removeLinkedListItem,
            reverting: function reverting() {
              return _reverting;
            },
            context: function context(toAdd) {
              if (toAdd && _context) {
                _context.data.push(toAdd);
                toAdd._ctx = _context;
              }
              return _context;
            },
            suppressOverwrites: function suppressOverwrites(value) {
              return _suppressOverwrites = value;
            }
          }
        };
        _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
          return _gsap[name] = Tween[name];
        });
        _ticker.add(Timeline.updateRoot);
        _quickTween = _gsap.to({}, {
          duration: 0
        });
        var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
          var pt = plugin._pt;
          while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
            pt = pt._next;
          }
          return pt;
        }, _addModifiers = function _addModifiers2(tween, modifiers) {
          var targets = tween._targets, p, i, pt;
          for (p in modifiers) {
            i = targets.length;
            while (i--) {
              pt = tween._ptLookup[i][p];
              if (pt && (pt = pt.d)) {
                if (pt._pt) {
                  pt = _getPluginPropTween(pt, p);
                }
                pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
              }
            }
          }
        }, _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
          return {
            name,
            rawVars: 1,
            init: function init(target, vars, tween) {
              tween._onInit = function(tween2) {
                var temp, p;
                if (_isString(vars)) {
                  temp = {};
                  _forEachName(vars, function(name2) {
                    return temp[name2] = 1;
                  });
                  vars = temp;
                }
                if (modifier) {
                  temp = {};
                  for (p in vars) {
                    temp[p] = modifier(vars[p]);
                  }
                  vars = temp;
                }
                _addModifiers(tween2, vars);
              };
            }
          };
        };
        var gsap2 = _gsap.registerPlugin({
          name: "attr",
          init: function init(target, vars, tween, index, targets) {
            var p, pt, v;
            this.tween = tween;
            for (p in vars) {
              v = target.getAttribute(p) || "";
              pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
              pt.op = p;
              pt.b = v;
              this._props.push(p);
            }
          },
          render: function render(ratio, data) {
            var pt = data._pt;
            while (pt) {
              _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
              pt = pt._next;
            }
          }
        }, {
          name: "endArray",
          init: function init(target, value) {
            var i = value.length;
            while (i--) {
              this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
            }
          }
        }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
        Tween.version = Timeline.version = gsap2.version = "3.12.5";
        _coreReady = 1;
        _windowExists() && _wake();
        var Power0 = _easeMap.Power0, Power1 = _easeMap.Power1, Power2 = _easeMap.Power2, Power3 = _easeMap.Power3, Power4 = _easeMap.Power4, Linear = _easeMap.Linear, Quad = _easeMap.Quad, Cubic = _easeMap.Cubic, Quart = _easeMap.Quart, Quint = _easeMap.Quint, Strong = _easeMap.Strong, Elastic = _easeMap.Elastic, Back = _easeMap.Back, SteppedEase = _easeMap.SteppedEase, Bounce = _easeMap.Bounce, Sine = _easeMap.Sine, Expo = _easeMap.Expo, Circ = _easeMap.Circ;
        var _win$1, _doc$1, _docElement, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _reverting$1, _windowExists$1 = function _windowExists2() {
          return typeof window !== "undefined";
        }, _transformProps = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, _bigNum$1 = 1e8, _capsExp = /([A-Z])/g, _horizontalExp = /(left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity"
        }, _renderCSSProp = function _renderCSSProp2(ratio, data) {
          return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
        }, _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
          return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
        }, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
          return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
        }, _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
          var value = data.s + data.c * ratio;
          data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
        }, _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
          return data.set(data.t, data.p, ratio ? data.e : data.b, data);
        }, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
          return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
        }, _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
          return target.style[property] = value;
        }, _setterCSSProp = function _setterCSSProp2(target, property, value) {
          return target.style.setProperty(property, value);
        }, _setterTransform = function _setterTransform2(target, property, value) {
          return target._gsap[property] = value;
        }, _setterScale = function _setterScale2(target, property, value) {
          return target._gsap.scaleX = target._gsap.scaleY = value;
        }, _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
          var cache = target._gsap;
          cache.scaleX = cache.scaleY = value;
          cache.renderTransform(ratio, cache);
        }, _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
          var cache = target._gsap;
          cache[property] = value;
          cache.renderTransform(ratio, cache);
        }, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _saveStyle = function _saveStyle2(property, isNotCSS) {
          var _this = this;
          var target = this.target, style = target.style, cache = target._gsap;
          if (property in _transformProps && style) {
            this.tfm = this.tfm || {};
            if (property !== "transform") {
              property = _propertyAliases[property] || property;
              ~property.indexOf(",") ? property.split(",").forEach(function(a) {
                return _this.tfm[a] = _get(target, a);
              }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property);
              property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
            } else {
              return _propertyAliases.transform.split(",").forEach(function(p) {
                return _saveStyle2.call(_this, p, isNotCSS);
              });
            }
            if (this.props.indexOf(_transformProp) >= 0) {
              return;
            }
            if (cache.svg) {
              this.svgo = target.getAttribute("data-svg-origin");
              this.props.push(_transformOriginProp, isNotCSS, "");
            }
            property = _transformProp;
          }
          (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
        }, _removeIndependentTransforms = function _removeIndependentTransforms2(style) {
          if (style.translate) {
            style.removeProperty("translate");
            style.removeProperty("scale");
            style.removeProperty("rotate");
          }
        }, _revertStyle = function _revertStyle2() {
          var props = this.props, target = this.target, style = target.style, cache = target._gsap, i, p;
          for (i = 0; i < props.length; i += 3) {
            props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
          }
          if (this.tfm) {
            for (p in this.tfm) {
              cache[p] = this.tfm[p];
            }
            if (cache.svg) {
              cache.renderTransform();
              target.setAttribute("data-svg-origin", this.svgo || "");
            }
            i = _reverting$1();
            if ((!i || !i.isStart) && !style[_transformProp]) {
              _removeIndependentTransforms(style);
              if (cache.zOrigin && style[_transformOriginProp]) {
                style[_transformOriginProp] += " " + cache.zOrigin + "px";
                cache.zOrigin = 0;
                cache.renderTransform();
              }
              cache.uncache = 1;
            }
          }
        }, _getStyleSaver = function _getStyleSaver2(target, properties) {
          var saver = {
            target,
            props: [],
            revert: _revertStyle,
            save: _saveStyle
          };
          target._gsap || gsap2.core.getCache(target);
          properties && properties.split(",").forEach(function(p) {
            return saver.save(p);
          });
          return saver;
        }, _supports3D, _createElement = function _createElement2(type, ns) {
          var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
          return e && e.style ? e : _doc$1.createElement(type);
        }, _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
          var cs = getComputedStyle(target);
          return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
        }, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
          var e = element || _tempDiv, s = e.style, i = 5;
          if (property in s && !preferPrefix) {
            return property;
          }
          property = property.charAt(0).toUpperCase() + property.substr(1);
          while (i-- && !(_prefixes[i] + property in s)) {
          }
          return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
        }, _initCore = function _initCore2() {
          if (_windowExists$1() && window.document) {
            _win$1 = window;
            _doc$1 = _win$1.document;
            _docElement = _doc$1.documentElement;
            _tempDiv = _createElement("div") || {
              style: {}
            };
            _tempDivStyler = _createElement("div");
            _transformProp = _checkPropPrefix(_transformProp);
            _transformOriginProp = _transformProp + "Origin";
            _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
            _supports3D = !!_checkPropPrefix("perspective");
            _reverting$1 = gsap2.core.reverting;
            _pluginInitted = 1;
          }
        }, _getBBoxHack = function _getBBoxHack2(swapIfPossible) {
          var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
          _docElement.appendChild(svg);
          svg.appendChild(this);
          this.style.display = "block";
          if (swapIfPossible) {
            try {
              bbox = this.getBBox();
              this._gsapBBox = this.getBBox;
              this.getBBox = _getBBoxHack2;
            } catch (e) {
            }
          } else if (this._gsapBBox) {
            bbox = this._gsapBBox();
          }
          if (oldParent) {
            if (oldSibling) {
              oldParent.insertBefore(this, oldSibling);
            } else {
              oldParent.appendChild(this);
            }
          }
          _docElement.removeChild(svg);
          this.style.cssText = oldCSS;
          return bbox;
        }, _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
          var i = attributesArray.length;
          while (i--) {
            if (target.hasAttribute(attributesArray[i])) {
              return target.getAttribute(attributesArray[i]);
            }
          }
        }, _getBBox = function _getBBox2(target) {
          var bounds;
          try {
            bounds = target.getBBox();
          } catch (error) {
            bounds = _getBBoxHack.call(target, true);
          }
          bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
          return bounds && !bounds.width && !bounds.x && !bounds.y ? {
            x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
            y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          } : bounds;
        }, _isSVG = function _isSVG2(e) {
          return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
        }, _removeProperty = function _removeProperty2(target, property) {
          if (property) {
            var style = target.style, first2Chars;
            if (property in _transformProps && property !== _transformOriginProp) {
              property = _transformProp;
            }
            if (style.removeProperty) {
              first2Chars = property.substr(0, 2);
              if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
                property = "-" + property;
              }
              style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
            } else {
              style.removeAttribute(property);
            }
          }
        }, _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
          var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
          plugin._pt = pt;
          pt.b = beginning;
          pt.e = end;
          plugin._props.push(property);
          return pt;
        }, _nonConvertibleUnits = {
          deg: 1,
          rad: 1,
          turn: 1
        }, _nonStandardLayouts = {
          grid: 1,
          flex: 1
        }, _convertToUnit = function _convertToUnit2(target, property, value, unit) {
          var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
          if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
            return curValue;
          }
          curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
          isSVG = target.getCTM && _isSVG(target);
          if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
            px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
            return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
          }
          style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
          parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
          if (isSVG) {
            parent = (target.ownerSVGElement || {}).parentNode;
          }
          if (!parent || parent === _doc$1 || !parent.appendChild) {
            parent = _doc$1.body;
          }
          cache = parent._gsap;
          if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
            return _round(curValue / cache.width * amount);
          } else {
            if (toPercent && (property === "height" || property === "width")) {
              var v = target.style[property];
              target.style[property] = amount + unit;
              px = target[measureProperty];
              v ? target.style[property] = v : _removeProperty(target, property);
            } else {
              (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
              parent === target && (style.position = "static");
              parent.appendChild(_tempDiv);
              px = _tempDiv[measureProperty];
              parent.removeChild(_tempDiv);
              style.position = "absolute";
            }
            if (horizontal && toPercent) {
              cache = _getCache(parent);
              cache.time = _ticker.time;
              cache.width = parent[measureProperty];
            }
          }
          return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
        }, _get = function _get2(target, property, unit, uncache) {
          var value;
          _pluginInitted || _initCore();
          if (property in _propertyAliases && property !== "transform") {
            property = _propertyAliases[property];
            if (~property.indexOf(",")) {
              property = property.split(",")[0];
            }
          }
          if (_transformProps[property] && property !== "transform") {
            value = _parseTransform(target, uncache);
            value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
          } else {
            value = target.style[property];
            if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
              value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
            }
          }
          return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
        }, _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
          if (!start || start === "none") {
            var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
            if (s && s !== start) {
              prop = p;
              start = s;
            } else if (prop === "borderColor") {
              start = _getComputedProperty(target, "borderTopColor");
            }
          }
          var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
          pt.b = start;
          pt.e = end;
          start += "";
          end += "";
          if (end === "auto") {
            startValue = target.style[prop];
            target.style[prop] = end;
            end = _getComputedProperty(target, prop) || end;
            startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
          }
          a = [start, end];
          _colorStringFilter(a);
          start = a[0];
          end = a[1];
          startValues = start.match(_numWithUnitExp) || [];
          endValues = end.match(_numWithUnitExp) || [];
          if (endValues.length) {
            while (result = _numWithUnitExp.exec(end)) {
              endValue = result[0];
              chunk = end.substring(index, result.index);
              if (color) {
                color = (color + 1) % 5;
              } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
                color = 1;
              }
              if (endValue !== (startValue = startValues[matchIndex++] || "")) {
                startNum = parseFloat(startValue) || 0;
                startUnit = startValue.substr((startNum + "").length);
                endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
                endNum = parseFloat(endValue);
                endUnit = endValue.substr((endNum + "").length);
                index = _numWithUnitExp.lastIndex - endUnit.length;
                if (!endUnit) {
                  endUnit = endUnit || _config.units[prop] || startUnit;
                  if (index === end.length) {
                    end += endUnit;
                    pt.e += endUnit;
                  }
                }
                if (startUnit !== endUnit) {
                  startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
                }
                pt._pt = {
                  _next: pt._pt,
                  p: chunk || matchIndex === 1 ? chunk : ",",
                  s: startNum,
                  c: endNum - startNum,
                  m: color && color < 4 || prop === "zIndex" ? Math.round : 0
                };
              }
            }
            pt.c = index < end.length ? end.substring(index, end.length) : "";
          } else {
            pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
          }
          _relExp.test(end) && (pt.e = 0);
          this._pt = pt;
          return pt;
        }, _keywordToPercent = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
        }, _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
          var split = value.split(" "), x = split[0], y = split[1] || "50%";
          if (x === "top" || x === "bottom" || y === "left" || y === "right") {
            value = x;
            x = y;
            y = value;
          }
          split[0] = _keywordToPercent[x] || x;
          split[1] = _keywordToPercent[y] || y;
          return split.join(" ");
        }, _renderClearProps = function _renderClearProps2(ratio, data) {
          if (data.tween && data.tween._time === data.tween._dur) {
            var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
            if (props === "all" || props === true) {
              style.cssText = "";
              clearTransforms = 1;
            } else {
              props = props.split(",");
              i = props.length;
              while (--i > -1) {
                prop = props[i];
                if (_transformProps[prop]) {
                  clearTransforms = 1;
                  prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
                }
                _removeProperty(target, prop);
              }
            }
            if (clearTransforms) {
              _removeProperty(target, _transformProp);
              if (cache) {
                cache.svg && target.removeAttribute("transform");
                _parseTransform(target, 1);
                cache.uncache = 1;
                _removeIndependentTransforms(style);
              }
            }
          }
        }, _specialProps = {
          clearProps: function clearProps(plugin, target, property, endValue, tween) {
            if (tween.data !== "isFromStart") {
              var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
              pt.u = endValue;
              pt.pr = -10;
              pt.tween = tween;
              plugin._props.push(property);
              return 1;
            }
          }
        }, _identity2DMatrix = [1, 0, 0, 1, 0, 0], _rotationalProperties = {}, _isNullTransform = function _isNullTransform2(value) {
          return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
        }, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
          var matrixString = _getComputedProperty(target, _transformProp);
          return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
        }, _getMatrix = function _getMatrix2(target, force2D) {
          var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
          if (cache.svg && target.getAttribute("transform")) {
            temp = target.transform.baseVal.consolidate().matrix;
            matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
            return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
          } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
            temp = style.display;
            style.display = "block";
            parent = target.parentNode;
            if (!parent || !target.offsetParent) {
              addedToDOM = 1;
              nextSibling = target.nextElementSibling;
              _docElement.appendChild(target);
            }
            matrix = _getComputedTransformMatrixAsArray(target);
            temp ? style.display = temp : _removeProperty(target, "display");
            if (addedToDOM) {
              nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
            }
          }
          return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
        }, _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
          var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
          if (!originIsAbsolute) {
            bounds = _getBBox(target);
            xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
            yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
          } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
            x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
            y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
            xOrigin = x;
            yOrigin = y;
          }
          if (smooth || smooth !== false && cache.smooth) {
            tx = xOrigin - xOriginOld;
            ty = yOrigin - yOriginOld;
            cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
            cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
          } else {
            cache.xOffset = cache.yOffset = 0;
          }
          cache.xOrigin = xOrigin;
          cache.yOrigin = yOrigin;
          cache.smooth = !!smooth;
          cache.origin = origin;
          cache.originIsAbsolute = !!originIsAbsolute;
          target.style[_transformOriginProp] = "0px 0px";
          if (pluginToAddPropTweensTo) {
            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
          }
          target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
        }, _parseTransform = function _parseTransform2(target, uncache) {
          var cache = target._gsap || new GSCache(target);
          if ("x" in cache && !uncache && !cache.uncache) {
            return cache;
          }
          var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
          x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
          scaleX = scaleY = 1;
          cache.svg = !!(target.getCTM && _isSVG(target));
          if (cs.translate) {
            if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
              style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
            }
            style.scale = style.rotate = style.translate = "none";
          }
          matrix = _getMatrix(target, cache.svg);
          if (cache.svg) {
            if (cache.uncache) {
              t2 = target.getBBox();
              origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
              t1 = "";
            } else {
              t1 = !uncache && target.getAttribute("data-svg-origin");
            }
            _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
          }
          xOrigin = cache.xOrigin || 0;
          yOrigin = cache.yOrigin || 0;
          if (matrix !== _identity2DMatrix) {
            a = matrix[0];
            b = matrix[1];
            c = matrix[2];
            d = matrix[3];
            x = a12 = matrix[4];
            y = a22 = matrix[5];
            if (matrix.length === 6) {
              scaleX = Math.sqrt(a * a + b * b);
              scaleY = Math.sqrt(d * d + c * c);
              rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
              skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
              skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
              if (cache.svg) {
                x -= xOrigin - (xOrigin * a + yOrigin * c);
                y -= yOrigin - (xOrigin * b + yOrigin * d);
              }
            } else {
              a32 = matrix[6];
              a42 = matrix[7];
              a13 = matrix[8];
              a23 = matrix[9];
              a33 = matrix[10];
              a43 = matrix[11];
              x = matrix[12];
              y = matrix[13];
              z = matrix[14];
              angle = _atan2(a32, a33);
              rotationX = angle * _RAD2DEG;
              if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a12 * cos + a13 * sin;
                t2 = a22 * cos + a23 * sin;
                t3 = a32 * cos + a33 * sin;
                a13 = a12 * -sin + a13 * cos;
                a23 = a22 * -sin + a23 * cos;
                a33 = a32 * -sin + a33 * cos;
                a43 = a42 * -sin + a43 * cos;
                a12 = t1;
                a22 = t2;
                a32 = t3;
              }
              angle = _atan2(-c, a33);
              rotationY = angle * _RAD2DEG;
              if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a * cos - a13 * sin;
                t2 = b * cos - a23 * sin;
                t3 = c * cos - a33 * sin;
                a43 = d * sin + a43 * cos;
                a = t1;
                b = t2;
                c = t3;
              }
              angle = _atan2(b, a);
              rotation = angle * _RAD2DEG;
              if (angle) {
                cos = Math.cos(angle);
                sin = Math.sin(angle);
                t1 = a * cos + b * sin;
                t2 = a12 * cos + a22 * sin;
                b = b * cos - a * sin;
                a22 = a22 * cos - a12 * sin;
                a = t1;
                a12 = t2;
              }
              if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
                rotationX = rotation = 0;
                rotationY = 180 - rotationY;
              }
              scaleX = _round(Math.sqrt(a * a + b * b + c * c));
              scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
              angle = _atan2(a12, a22);
              skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
              perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
            }
            if (cache.svg) {
              t1 = target.getAttribute("transform");
              cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
              t1 && target.setAttribute("transform", t1);
            }
          }
          if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
            if (invertedScaleX) {
              scaleX *= -1;
              skewX += rotation <= 0 ? 180 : -180;
              rotation += rotation <= 0 ? 180 : -180;
            } else {
              scaleY *= -1;
              skewX += skewX <= 0 ? 180 : -180;
            }
          }
          uncache = uncache || cache.uncache;
          cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
          cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
          cache.z = z + px;
          cache.scaleX = _round(scaleX);
          cache.scaleY = _round(scaleY);
          cache.rotation = _round(rotation) + deg;
          cache.rotationX = _round(rotationX) + deg;
          cache.rotationY = _round(rotationY) + deg;
          cache.skewX = skewX + deg;
          cache.skewY = skewY + deg;
          cache.transformPerspective = perspective + px;
          if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
            style[_transformOriginProp] = _firstTwoOnly(origin);
          }
          cache.xOffset = cache.yOffset = 0;
          cache.force3D = _config.force3D;
          cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
          cache.uncache = 0;
          return cache;
        }, _firstTwoOnly = function _firstTwoOnly2(value) {
          return (value = value.split(" "))[0] + " " + value[1];
        }, _addPxTranslate = function _addPxTranslate2(target, start, value) {
          var unit = getUnit(start);
          return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
        }, _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
          cache.z = "0px";
          cache.rotationY = cache.rotationX = "0deg";
          cache.force3D = 0;
          _renderCSSTransforms(ratio, cache);
        }, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
          var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
          if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
            var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
            angle = parseFloat(rotationX) * _DEG2RAD;
            cos = Math.cos(angle);
            x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
            y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
            z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
          }
          if (transformPerspective !== _zeroPx) {
            transforms += "perspective(" + transformPerspective + _endParenthesis;
          }
          if (xPercent || yPercent) {
            transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
          }
          if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
            transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
          }
          if (rotation !== _zeroDeg) {
            transforms += "rotate(" + rotation + _endParenthesis;
          }
          if (rotationY !== _zeroDeg) {
            transforms += "rotateY(" + rotationY + _endParenthesis;
          }
          if (rotationX !== _zeroDeg) {
            transforms += "rotateX(" + rotationX + _endParenthesis;
          }
          if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
            transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
          }
          if (scaleX !== 1 || scaleY !== 1) {
            transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
          }
          target.style[_transformProp] = transforms || "translate(0, 0)";
        }, _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
          var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
          rotation = parseFloat(rotation);
          skewX = parseFloat(skewX);
          skewY = parseFloat(skewY);
          if (skewY) {
            skewY = parseFloat(skewY);
            skewX += skewY;
            rotation += skewY;
          }
          if (rotation || skewX) {
            rotation *= _DEG2RAD;
            skewX *= _DEG2RAD;
            a11 = Math.cos(rotation) * scaleX;
            a21 = Math.sin(rotation) * scaleX;
            a12 = Math.sin(rotation - skewX) * -scaleY;
            a22 = Math.cos(rotation - skewX) * scaleY;
            if (skewX) {
              skewY *= _DEG2RAD;
              temp = Math.tan(skewX - skewY);
              temp = Math.sqrt(1 + temp * temp);
              a12 *= temp;
              a22 *= temp;
              if (skewY) {
                temp = Math.tan(skewY);
                temp = Math.sqrt(1 + temp * temp);
                a11 *= temp;
                a21 *= temp;
              }
            }
            a11 = _round(a11);
            a21 = _round(a21);
            a12 = _round(a12);
            a22 = _round(a22);
          } else {
            a11 = scaleX;
            a22 = scaleY;
            a21 = a12 = 0;
          }
          if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
            tx = _convertToUnit(target, "x", x, "px");
            ty = _convertToUnit(target, "y", y, "px");
          }
          if (xOrigin || yOrigin || xOffset || yOffset) {
            tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
            ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
          }
          if (xPercent || yPercent) {
            temp = target.getBBox();
            tx = _round(tx + xPercent / 100 * temp.width);
            ty = _round(ty + yPercent / 100 * temp.height);
          }
          temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
          target.setAttribute("transform", temp);
          forceCSS && (target.style[_transformProp] = temp);
        }, _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
          var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
          if (isString) {
            direction = endValue.split("_")[1];
            if (direction === "short") {
              change %= cap;
              if (change !== change % (cap / 2)) {
                change += change < 0 ? cap : -cap;
              }
            }
            if (direction === "cw" && change < 0) {
              change = (change + cap * _bigNum$1) % cap - ~~(change / cap) * cap;
            } else if (direction === "ccw" && change > 0) {
              change = (change - cap * _bigNum$1) % cap - ~~(change / cap) * cap;
            }
          }
          plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
          pt.e = finalValue;
          pt.u = "deg";
          plugin._props.push(property);
          return pt;
        }, _assign = function _assign2(target, source) {
          for (var p in source) {
            target[p] = source[p];
          }
          return target;
        }, _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
          var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
          if (startCache.svg) {
            startValue = target.getAttribute("transform");
            target.setAttribute("transform", "");
            style[_transformProp] = transforms;
            endCache = _parseTransform(target, 1);
            _removeProperty(target, _transformProp);
            target.setAttribute("transform", startValue);
          } else {
            startValue = getComputedStyle(target)[_transformProp];
            style[_transformProp] = transforms;
            endCache = _parseTransform(target, 1);
            style[_transformProp] = startValue;
          }
          for (p in _transformProps) {
            startValue = startCache[p];
            endValue = endCache[p];
            if (startValue !== endValue && exclude.indexOf(p) < 0) {
              startUnit = getUnit(startValue);
              endUnit = getUnit(endValue);
              startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
              endNum = parseFloat(endValue);
              plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
              plugin._pt.u = endUnit || 0;
              plugin._props.push(p);
            }
          }
          _assign(endCache, startCache);
        };
        _forEachName("padding,margin,Width,Radius", function(name, index) {
          var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function(side) {
            return index < 2 ? name + side : "border" + side + name;
          });
          _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
            var a, vars;
            if (arguments.length < 4) {
              a = props.map(function(prop) {
                return _get(plugin, prop, property);
              });
              vars = a.join(" ");
              return vars.split(a[0]).length === 5 ? a[0] : vars;
            }
            a = (endValue + "").split(" ");
            vars = {};
            props.forEach(function(prop, i) {
              return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
            });
            plugin.init(target, vars, tween);
          };
        });
        var CSSPlugin = {
          name: "css",
          register: _initCore,
          targetTest: function targetTest(target) {
            return target.style && target.nodeType;
          },
          init: function init(target, vars, tween, index, targets) {
            var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
            _pluginInitted || _initCore();
            this.styles = this.styles || _getStyleSaver(target);
            inlineProps = this.styles.props;
            this.tween = tween;
            for (p in vars) {
              if (p === "autoRound") {
                continue;
              }
              endValue = vars[p];
              if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
                continue;
              }
              type = typeof endValue;
              specialProp = _specialProps[p];
              if (type === "function") {
                endValue = endValue.call(tween, index, target, targets);
                type = typeof endValue;
              }
              if (type === "string" && ~endValue.indexOf("random(")) {
                endValue = _replaceRandom(endValue);
              }
              if (specialProp) {
                specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
              } else if (p.substr(0, 2) === "--") {
                startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
                endValue += "";
                _colorExp.lastIndex = 0;
                if (!_colorExp.test(startValue)) {
                  startUnit = getUnit(startValue);
                  endUnit = getUnit(endValue);
                }
                endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
                this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
                props.push(p);
                inlineProps.push(p, 0, style[p]);
              } else if (type !== "undefined") {
                if (startAt && p in startAt) {
                  startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
                  _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
                  getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
                  (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
                } else {
                  startValue = _get(target, p);
                }
                startNum = parseFloat(startValue);
                relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
                relative && (endValue = endValue.substr(2));
                endNum = parseFloat(endValue);
                if (p in _propertyAliases) {
                  if (p === "autoAlpha") {
                    if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                      startNum = 0;
                    }
                    inlineProps.push("visibility", 0, style.visibility);
                    _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                  }
                  if (p !== "scale" && p !== "transform") {
                    p = _propertyAliases[p];
                    ~p.indexOf(",") && (p = p.split(",")[0]);
                  }
                }
                isTransformRelated = p in _transformProps;
                if (isTransformRelated) {
                  this.styles.save(p);
                  if (!transformPropTween) {
                    cache = target._gsap;
                    cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
                    smooth = vars.smoothOrigin !== false && cache.smooth;
                    transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
                    transformPropTween.dep = 1;
                  }
                  if (p === "scale") {
                    this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
                    this._pt.u = 0;
                    props.push("scaleY", p);
                    p += "X";
                  } else if (p === "transformOrigin") {
                    inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
                    endValue = _convertKeywordsToPercentages(endValue);
                    if (cache.svg) {
                      _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                    } else {
                      endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                      endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                      _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                    }
                    continue;
                  } else if (p === "svgOrigin") {
                    _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                    continue;
                  } else if (p in _rotationalProperties) {
                    _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
                    continue;
                  } else if (p === "smoothOrigin") {
                    _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                    continue;
                  } else if (p === "force3D") {
                    cache[p] = endValue;
                    continue;
                  } else if (p === "transform") {
                    _addRawTransformPTs(this, endValue, target);
                    continue;
                  }
                } else if (!(p in style)) {
                  p = _checkPropPrefix(p) || p;
                }
                if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
                  startUnit = (startValue + "").substr((startNum + "").length);
                  endNum || (endNum = 0);
                  endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
                  startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
                  this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
                  this._pt.u = endUnit || 0;
                  if (startUnit !== endUnit && endUnit !== "%") {
                    this._pt.b = startValue;
                    this._pt.r = _renderCSSPropWithBeginning;
                  }
                } else if (!(p in style)) {
                  if (p in target) {
                    this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
                  } else if (p !== "parseTransform") {
                    _missingPlugin(p, endValue);
                    continue;
                  }
                } else {
                  _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
                }
                isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
                props.push(p);
              }
            }
            hasPriority && _sortPropTweensByPriority(this);
          },
          render: function render(ratio, data) {
            if (data.tween._time || !_reverting$1()) {
              var pt = data._pt;
              while (pt) {
                pt.r(ratio, pt.d);
                pt = pt._next;
              }
            } else {
              data.styles.revert();
            }
          },
          get: _get,
          aliases: _propertyAliases,
          getSetter: function getSetter(target, property, plugin) {
            var p = _propertyAliases[property];
            p && p.indexOf(",") < 0 && (property = p);
            return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
          },
          core: {
            _removeProperty,
            _getMatrix
          }
        };
        gsap2.utils.checkPrefix = _checkPropPrefix;
        gsap2.core.getStyleSaver = _getStyleSaver;
        (function(positionAndScale, rotation, others, aliases) {
          var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
            _transformProps[name] = 1;
          });
          _forEachName(rotation, function(name) {
            _config.units[name] = "deg";
            _rotationalProperties[name] = 1;
          });
          _propertyAliases[all[13]] = positionAndScale + "," + rotation;
          _forEachName(aliases, function(name) {
            var split = name.split(":");
            _propertyAliases[split[1]] = all[split[0]];
          });
        })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
        _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
          _config.units[name] = "px";
        });
        gsap2.registerPlugin(CSSPlugin);
        var gsapWithCSS = gsap2.registerPlugin(CSSPlugin) || gsap2, TweenMaxWithCSS = gsapWithCSS.core.Tween;
        exports2.Back = Back;
        exports2.Bounce = Bounce;
        exports2.CSSPlugin = CSSPlugin;
        exports2.Circ = Circ;
        exports2.Cubic = Cubic;
        exports2.Elastic = Elastic;
        exports2.Expo = Expo;
        exports2.Linear = Linear;
        exports2.Power0 = Power0;
        exports2.Power1 = Power1;
        exports2.Power2 = Power2;
        exports2.Power3 = Power3;
        exports2.Power4 = Power4;
        exports2.Quad = Quad;
        exports2.Quart = Quart;
        exports2.Quint = Quint;
        exports2.Sine = Sine;
        exports2.SteppedEase = SteppedEase;
        exports2.Strong = Strong;
        exports2.TimelineLite = Timeline;
        exports2.TimelineMax = Timeline;
        exports2.TweenLite = Tween;
        exports2.TweenMax = TweenMaxWithCSS;
        exports2.default = gsapWithCSS;
        exports2.gsap = gsapWithCSS;
        if (typeof window === "undefined" || window !== exports2) {
          Object.defineProperty(exports2, "__esModule", { value: true });
        } else {
          delete window.default;
        }
      });
    }
  });

  // node_modules/gsap/dist/CustomEase.js
  var require_CustomEase = __commonJS({
    "node_modules/gsap/dist/CustomEase.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = global || self, factory(global.window = global.window || {}));
      })(exports, function(exports2) {
        "use strict";
        var _svgPathExp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, _scientific = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig, _DEG2RAD = Math.PI / 180, _sin = Math.sin, _cos = Math.cos, _abs = Math.abs, _sqrt = Math.sqrt, _isNumber = function _isNumber2(value) {
          return typeof value === "number";
        }, _roundingNum = 1e5, _round = function _round2(value) {
          return Math.round(value * _roundingNum) / _roundingNum || 0;
        };
        function transformRawPath(rawPath, a, b, c, d, tx, ty) {
          var j = rawPath.length, segment, l, i, x, y;
          while (--j > -1) {
            segment = rawPath[j];
            l = segment.length;
            for (i = 0; i < l; i += 2) {
              x = segment[i];
              y = segment[i + 1];
              segment[i] = x * a + y * c + tx;
              segment[i + 1] = x * b + y * d + ty;
            }
          }
          rawPath._dirty = 1;
          return rawPath;
        }
        function arcToSegment(lastX, lastY, rx, ry, angle, largeArcFlag, sweepFlag, x, y) {
          if (lastX === x && lastY === y) {
            return;
          }
          rx = _abs(rx);
          ry = _abs(ry);
          var angleRad = angle % 360 * _DEG2RAD, cosAngle = _cos(angleRad), sinAngle = _sin(angleRad), PI = Math.PI, TWOPI = PI * 2, dx2 = (lastX - x) / 2, dy2 = (lastY - y) / 2, x1 = cosAngle * dx2 + sinAngle * dy2, y1 = -sinAngle * dx2 + cosAngle * dy2, x1_sq = x1 * x1, y1_sq = y1 * y1, radiiCheck = x1_sq / (rx * rx) + y1_sq / (ry * ry);
          if (radiiCheck > 1) {
            rx = _sqrt(radiiCheck) * rx;
            ry = _sqrt(radiiCheck) * ry;
          }
          var rx_sq = rx * rx, ry_sq = ry * ry, sq = (rx_sq * ry_sq - rx_sq * y1_sq - ry_sq * x1_sq) / (rx_sq * y1_sq + ry_sq * x1_sq);
          if (sq < 0) {
            sq = 0;
          }
          var coef = (largeArcFlag === sweepFlag ? -1 : 1) * _sqrt(sq), cx1 = coef * (rx * y1 / ry), cy1 = coef * -(ry * x1 / rx), sx2 = (lastX + x) / 2, sy2 = (lastY + y) / 2, cx = sx2 + (cosAngle * cx1 - sinAngle * cy1), cy = sy2 + (sinAngle * cx1 + cosAngle * cy1), ux = (x1 - cx1) / rx, uy = (y1 - cy1) / ry, vx = (-x1 - cx1) / rx, vy = (-y1 - cy1) / ry, temp = ux * ux + uy * uy, angleStart = (uy < 0 ? -1 : 1) * Math.acos(ux / _sqrt(temp)), angleExtent = (ux * vy - uy * vx < 0 ? -1 : 1) * Math.acos((ux * vx + uy * vy) / _sqrt(temp * (vx * vx + vy * vy)));
          isNaN(angleExtent) && (angleExtent = PI);
          if (!sweepFlag && angleExtent > 0) {
            angleExtent -= TWOPI;
          } else if (sweepFlag && angleExtent < 0) {
            angleExtent += TWOPI;
          }
          angleStart %= TWOPI;
          angleExtent %= TWOPI;
          var segments = Math.ceil(_abs(angleExtent) / (TWOPI / 4)), rawPath = [], angleIncrement = angleExtent / segments, controlLength = 4 / 3 * _sin(angleIncrement / 2) / (1 + _cos(angleIncrement / 2)), ma = cosAngle * rx, mb = sinAngle * rx, mc = sinAngle * -ry, md = cosAngle * ry, i;
          for (i = 0; i < segments; i++) {
            angle = angleStart + i * angleIncrement;
            x1 = _cos(angle);
            y1 = _sin(angle);
            ux = _cos(angle += angleIncrement);
            uy = _sin(angle);
            rawPath.push(x1 - controlLength * y1, y1 + controlLength * x1, ux + controlLength * uy, uy - controlLength * ux, ux, uy);
          }
          for (i = 0; i < rawPath.length; i += 2) {
            x1 = rawPath[i];
            y1 = rawPath[i + 1];
            rawPath[i] = x1 * ma + y1 * mc + cx;
            rawPath[i + 1] = x1 * mb + y1 * md + cy;
          }
          rawPath[i - 2] = x;
          rawPath[i - 1] = y;
          return rawPath;
        }
        function stringToRawPath(d) {
          var a = (d + "").replace(_scientific, function(m) {
            var n = +m;
            return n < 1e-4 && n > -1e-4 ? 0 : n;
          }).match(_svgPathExp) || [], path = [], relativeX = 0, relativeY = 0, twoThirds = 2 / 3, elements = a.length, points = 0, errorMessage = "ERROR: malformed path: " + d, i, j, x, y, command, isRelative, segment, startX, startY, difX, difY, beziers, prevCommand, flag1, flag2, line = function line2(sx, sy, ex, ey) {
            difX = (ex - sx) / 3;
            difY = (ey - sy) / 3;
            segment.push(sx + difX, sy + difY, ex - difX, ey - difY, ex, ey);
          };
          if (!d || !isNaN(a[0]) || isNaN(a[1])) {
            console.log(errorMessage);
            return path;
          }
          for (i = 0; i < elements; i++) {
            prevCommand = command;
            if (isNaN(a[i])) {
              command = a[i].toUpperCase();
              isRelative = command !== a[i];
            } else {
              i--;
            }
            x = +a[i + 1];
            y = +a[i + 2];
            if (isRelative) {
              x += relativeX;
              y += relativeY;
            }
            if (!i) {
              startX = x;
              startY = y;
            }
            if (command === "M") {
              if (segment) {
                if (segment.length < 8) {
                  path.length -= 1;
                } else {
                  points += segment.length;
                }
              }
              relativeX = startX = x;
              relativeY = startY = y;
              segment = [x, y];
              path.push(segment);
              i += 2;
              command = "L";
            } else if (command === "C") {
              if (!segment) {
                segment = [0, 0];
              }
              if (!isRelative) {
                relativeX = relativeY = 0;
              }
              segment.push(x, y, relativeX + a[i + 3] * 1, relativeY + a[i + 4] * 1, relativeX += a[i + 5] * 1, relativeY += a[i + 6] * 1);
              i += 6;
            } else if (command === "S") {
              difX = relativeX;
              difY = relativeY;
              if (prevCommand === "C" || prevCommand === "S") {
                difX += relativeX - segment[segment.length - 4];
                difY += relativeY - segment[segment.length - 3];
              }
              if (!isRelative) {
                relativeX = relativeY = 0;
              }
              segment.push(difX, difY, x, y, relativeX += a[i + 3] * 1, relativeY += a[i + 4] * 1);
              i += 4;
            } else if (command === "Q") {
              difX = relativeX + (x - relativeX) * twoThirds;
              difY = relativeY + (y - relativeY) * twoThirds;
              if (!isRelative) {
                relativeX = relativeY = 0;
              }
              relativeX += a[i + 3] * 1;
              relativeY += a[i + 4] * 1;
              segment.push(difX, difY, relativeX + (x - relativeX) * twoThirds, relativeY + (y - relativeY) * twoThirds, relativeX, relativeY);
              i += 4;
            } else if (command === "T") {
              difX = relativeX - segment[segment.length - 4];
              difY = relativeY - segment[segment.length - 3];
              segment.push(relativeX + difX, relativeY + difY, x + (relativeX + difX * 1.5 - x) * twoThirds, y + (relativeY + difY * 1.5 - y) * twoThirds, relativeX = x, relativeY = y);
              i += 2;
            } else if (command === "H") {
              line(relativeX, relativeY, relativeX = x, relativeY);
              i += 1;
            } else if (command === "V") {
              line(relativeX, relativeY, relativeX, relativeY = x + (isRelative ? relativeY - relativeX : 0));
              i += 1;
            } else if (command === "L" || command === "Z") {
              if (command === "Z") {
                x = startX;
                y = startY;
                segment.closed = true;
              }
              if (command === "L" || _abs(relativeX - x) > 0.5 || _abs(relativeY - y) > 0.5) {
                line(relativeX, relativeY, x, y);
                if (command === "L") {
                  i += 2;
                }
              }
              relativeX = x;
              relativeY = y;
            } else if (command === "A") {
              flag1 = a[i + 4];
              flag2 = a[i + 5];
              difX = a[i + 6];
              difY = a[i + 7];
              j = 7;
              if (flag1.length > 1) {
                if (flag1.length < 3) {
                  difY = difX;
                  difX = flag2;
                  j--;
                } else {
                  difY = flag2;
                  difX = flag1.substr(2);
                  j -= 2;
                }
                flag2 = flag1.charAt(1);
                flag1 = flag1.charAt(0);
              }
              beziers = arcToSegment(relativeX, relativeY, +a[i + 1], +a[i + 2], +a[i + 3], +flag1, +flag2, (isRelative ? relativeX : 0) + difX * 1, (isRelative ? relativeY : 0) + difY * 1);
              i += j;
              if (beziers) {
                for (j = 0; j < beziers.length; j++) {
                  segment.push(beziers[j]);
                }
              }
              relativeX = segment[segment.length - 2];
              relativeY = segment[segment.length - 1];
            } else {
              console.log(errorMessage);
            }
          }
          i = segment.length;
          if (i < 6) {
            path.pop();
            i = 0;
          } else if (segment[0] === segment[i - 2] && segment[1] === segment[i - 1]) {
            segment.closed = true;
          }
          path.totalPoints = points + i;
          return path;
        }
        function rawPathToString(rawPath) {
          if (_isNumber(rawPath[0])) {
            rawPath = [rawPath];
          }
          var result = "", l = rawPath.length, sl, s, i, segment;
          for (s = 0; s < l; s++) {
            segment = rawPath[s];
            result += "M" + _round(segment[0]) + "," + _round(segment[1]) + " C";
            sl = segment.length;
            for (i = 2; i < sl; i++) {
              result += _round(segment[i++]) + "," + _round(segment[i++]) + " " + _round(segment[i++]) + "," + _round(segment[i++]) + " " + _round(segment[i++]) + "," + _round(segment[i]) + " ";
            }
            if (segment.closed) {
              result += "z";
            }
          }
          return result;
        }
        var gsap2, _coreInitted, _getGSAP = function _getGSAP2() {
          return gsap2 || typeof window !== "undefined" && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
        }, _initCore = function _initCore2() {
          gsap2 = _getGSAP();
          if (gsap2) {
            gsap2.registerEase("_CE", CustomEase2.create);
            _coreInitted = 1;
          } else {
            console.warn("Please gsap.registerPlugin(CustomEase)");
          }
        }, _bigNum = 1e20, _round$1 = function _round2(value) {
          return ~~(value * 1e3 + (value < 0 ? -0.5 : 0.5)) / 1e3;
        }, _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi, _needsParsingExp = /[cLlsSaAhHvVtTqQ]/g, _findMinimum = function _findMinimum2(values) {
          var l = values.length, min = _bigNum, i;
          for (i = 1; i < l; i += 6) {
            +values[i] < min && (min = +values[i]);
          }
          return min;
        }, _normalize = function _normalize2(values, height, originY) {
          if (!originY && originY !== 0) {
            originY = Math.max(+values[values.length - 1], +values[1]);
          }
          var tx = +values[0] * -1, ty = -originY, l = values.length, sx = 1 / (+values[l - 2] + tx), sy = -height || (Math.abs(+values[l - 1] - +values[1]) < 0.01 * (+values[l - 2] - +values[0]) ? _findMinimum(values) + ty : +values[l - 1] + ty), i;
          if (sy) {
            sy = 1 / sy;
          } else {
            sy = -sx;
          }
          for (i = 0; i < l; i += 2) {
            values[i] = (+values[i] + tx) * sx;
            values[i + 1] = (+values[i + 1] + ty) * sy;
          }
        }, _bezierToPoints = function _bezierToPoints2(x1, y1, x2, y2, x3, y3, x4, y4, threshold, points, index) {
          var x12 = (x1 + x2) / 2, y12 = (y1 + y2) / 2, x23 = (x2 + x3) / 2, y23 = (y2 + y3) / 2, x34 = (x3 + x4) / 2, y34 = (y3 + y4) / 2, x123 = (x12 + x23) / 2, y123 = (y12 + y23) / 2, x234 = (x23 + x34) / 2, y234 = (y23 + y34) / 2, x1234 = (x123 + x234) / 2, y1234 = (y123 + y234) / 2, dx = x4 - x1, dy = y4 - y1, d2 = Math.abs((x2 - x4) * dy - (y2 - y4) * dx), d3 = Math.abs((x3 - x4) * dy - (y3 - y4) * dx), length;
          if (!points) {
            points = [{
              x: x1,
              y: y1
            }, {
              x: x4,
              y: y4
            }];
            index = 1;
          }
          points.splice(index || points.length - 1, 0, {
            x: x1234,
            y: y1234
          });
          if ((d2 + d3) * (d2 + d3) > threshold * (dx * dx + dy * dy)) {
            length = points.length;
            _bezierToPoints2(x1, y1, x12, y12, x123, y123, x1234, y1234, threshold, points, index);
            _bezierToPoints2(x1234, y1234, x234, y234, x34, y34, x4, y4, threshold, points, index + 1 + (points.length - length));
          }
          return points;
        };
        var CustomEase2 = function() {
          function CustomEase3(id, data, config) {
            _coreInitted || _initCore();
            this.id = id;
            this.setData(data, config);
          }
          var _proto = CustomEase3.prototype;
          _proto.setData = function setData(data, config) {
            config = config || {};
            data = data || "0,0,1,1";
            var values = data.match(_numExp), closest = 1, points = [], lookup = [], precision = config.precision || 1, fast = precision <= 1, l, a1, a2, i, inc, j, point, prevPoint, p;
            this.data = data;
            if (_needsParsingExp.test(data) || ~data.indexOf("M") && data.indexOf("C") < 0) {
              values = stringToRawPath(data)[0];
            }
            l = values.length;
            if (l === 4) {
              values.unshift(0, 0);
              values.push(1, 1);
              l = 8;
            } else if ((l - 2) % 6) {
              throw "Invalid CustomEase";
            }
            if (+values[0] !== 0 || +values[l - 2] !== 1) {
              _normalize(values, config.height, config.originY);
            }
            this.segment = values;
            for (i = 2; i < l; i += 6) {
              a1 = {
                x: +values[i - 2],
                y: +values[i - 1]
              };
              a2 = {
                x: +values[i + 4],
                y: +values[i + 5]
              };
              points.push(a1, a2);
              _bezierToPoints(a1.x, a1.y, +values[i], +values[i + 1], +values[i + 2], +values[i + 3], a2.x, a2.y, 1 / (precision * 2e5), points, points.length - 1);
            }
            l = points.length;
            for (i = 0; i < l; i++) {
              point = points[i];
              prevPoint = points[i - 1] || point;
              if ((point.x > prevPoint.x || prevPoint.y !== point.y && prevPoint.x === point.x || point === prevPoint) && point.x <= 1) {
                prevPoint.cx = point.x - prevPoint.x;
                prevPoint.cy = point.y - prevPoint.y;
                prevPoint.n = point;
                prevPoint.nx = point.x;
                if (fast && i > 1 && Math.abs(prevPoint.cy / prevPoint.cx - points[i - 2].cy / points[i - 2].cx) > 2) {
                  fast = 0;
                }
                if (prevPoint.cx < closest) {
                  if (!prevPoint.cx) {
                    prevPoint.cx = 1e-3;
                    if (i === l - 1) {
                      prevPoint.x -= 1e-3;
                      closest = Math.min(closest, 1e-3);
                      fast = 0;
                    }
                  } else {
                    closest = prevPoint.cx;
                  }
                }
              } else {
                points.splice(i--, 1);
                l--;
              }
            }
            l = 1 / closest + 1 | 0;
            inc = 1 / l;
            j = 0;
            point = points[0];
            if (fast) {
              for (i = 0; i < l; i++) {
                p = i * inc;
                if (point.nx < p) {
                  point = points[++j];
                }
                a1 = point.y + (p - point.x) / point.cx * point.cy;
                lookup[i] = {
                  x: p,
                  cx: inc,
                  y: a1,
                  cy: 0,
                  nx: 9
                };
                if (i) {
                  lookup[i - 1].cy = a1 - lookup[i - 1].y;
                }
              }
              lookup[l - 1].cy = points[points.length - 1].y - a1;
            } else {
              for (i = 0; i < l; i++) {
                if (point.nx < i * inc) {
                  point = points[++j];
                }
                lookup[i] = point;
              }
              if (j < points.length - 1) {
                lookup[i - 1] = points[points.length - 2];
              }
            }
            this.ease = function(p2) {
              var point2 = lookup[p2 * l | 0] || lookup[l - 1];
              if (point2.nx < p2) {
                point2 = point2.n;
              }
              return point2.y + (p2 - point2.x) / point2.cx * point2.cy;
            };
            this.ease.custom = this;
            this.id && gsap2 && gsap2.registerEase(this.id, this.ease);
            return this;
          };
          _proto.getSVGData = function getSVGData(config) {
            return CustomEase3.getSVGData(this, config);
          };
          CustomEase3.create = function create(id, data, config) {
            return new CustomEase3(id, data, config).ease;
          };
          CustomEase3.register = function register(core) {
            gsap2 = core;
            _initCore();
          };
          CustomEase3.get = function get(id) {
            return gsap2.parseEase(id);
          };
          CustomEase3.getSVGData = function getSVGData(ease, config) {
            config = config || {};
            var width = config.width || 100, height = config.height || 100, x = config.x || 0, y = (config.y || 0) + height, e = gsap2.utils.toArray(config.path)[0], a, slope, i, inc, tx, ty, precision, threshold, prevX, prevY;
            if (config.invert) {
              height = -height;
              y = 0;
            }
            if (typeof ease === "string") {
              ease = gsap2.parseEase(ease);
            }
            if (ease.custom) {
              ease = ease.custom;
            }
            if (ease instanceof CustomEase3) {
              a = rawPathToString(transformRawPath([ease.segment], width, 0, 0, -height, x, y));
            } else {
              a = [x, y];
              precision = Math.max(5, (config.precision || 1) * 200);
              inc = 1 / precision;
              precision += 2;
              threshold = 5 / precision;
              prevX = _round$1(x + inc * width);
              prevY = _round$1(y + ease(inc) * -height);
              slope = (prevY - y) / (prevX - x);
              for (i = 2; i < precision; i++) {
                tx = _round$1(x + i * inc * width);
                ty = _round$1(y + ease(i * inc) * -height);
                if (Math.abs((ty - prevY) / (tx - prevX) - slope) > threshold || i === precision - 1) {
                  a.push(prevX, prevY);
                  slope = (ty - prevY) / (tx - prevX);
                }
                prevX = tx;
                prevY = ty;
              }
              a = "M" + a.join(",");
            }
            e && e.setAttribute("d", a);
            return a;
          };
          return CustomEase3;
        }();
        _getGSAP() && gsap2.registerPlugin(CustomEase2);
        CustomEase2.version = "3.12.5";
        exports2.CustomEase = CustomEase2;
        exports2.default = CustomEase2;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // node_modules/gsap/dist/Flip.js
  var require_Flip = __commonJS({
    "node_modules/gsap/dist/Flip.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = global || self, factory(global.window = global.window || {}));
      })(exports, function(exports2) {
        "use strict";
        var _doc, _win, _docElement, _body, _divContainer, _svgContainer, _identityMatrix, _gEl, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _hasOffsetBug, _setDoc = function _setDoc2(element) {
          var doc = element.ownerDocument || element;
          if (!(_transformProp in element.style) && "msTransform" in element.style) {
            _transformProp = "msTransform";
            _transformOriginProp = _transformProp + "Origin";
          }
          while (doc.parentNode && (doc = doc.parentNode)) {
          }
          _win = window;
          _identityMatrix = new Matrix2D();
          if (doc) {
            _doc = doc;
            _docElement = doc.documentElement;
            _body = doc.body;
            _gEl = _doc.createElementNS("http://www.w3.org/2000/svg", "g");
            _gEl.style.transform = "none";
            var d1 = doc.createElement("div"), d2 = doc.createElement("div"), root = doc && (doc.body || doc.firstElementChild);
            if (root && root.appendChild) {
              root.appendChild(d1);
              d1.appendChild(d2);
              d1.setAttribute("style", "position:static;transform:translate3d(0,0,1px)");
              _hasOffsetBug = d2.offsetParent !== d1;
              root.removeChild(d1);
            }
          }
          return doc;
        }, _forceNonZeroScale = function _forceNonZeroScale2(e) {
          var a, cache;
          while (e && e !== _body) {
            cache = e._gsap;
            cache && cache.uncache && cache.get(e, "x");
            if (cache && !cache.scaleX && !cache.scaleY && cache.renderTransform) {
              cache.scaleX = cache.scaleY = 1e-4;
              cache.renderTransform(1, cache);
              a ? a.push(cache) : a = [cache];
            }
            e = e.parentNode;
          }
          return a;
        }, _svgTemps = [], _divTemps = [], _getDocScrollTop = function _getDocScrollTop2() {
          return _win.pageYOffset || _doc.scrollTop || _docElement.scrollTop || _body.scrollTop || 0;
        }, _getDocScrollLeft = function _getDocScrollLeft2() {
          return _win.pageXOffset || _doc.scrollLeft || _docElement.scrollLeft || _body.scrollLeft || 0;
        }, _svgOwner = function _svgOwner2(element) {
          return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
        }, _isFixed = function _isFixed2(element) {
          if (_win.getComputedStyle(element).position === "fixed") {
            return true;
          }
          element = element.parentNode;
          if (element && element.nodeType === 1) {
            return _isFixed2(element);
          }
        }, _createSibling = function _createSibling2(element, i) {
          if (element.parentNode && (_doc || _setDoc(element))) {
            var svg = _svgOwner(element), ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", type = svg ? i ? "rect" : "g" : "div", x = i !== 2 ? 0 : 100, y = i === 3 ? 100 : 0, css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", e = _doc.createElementNS ? _doc.createElementNS(ns.replace(/^https/, "http"), type) : _doc.createElement(type);
            if (i) {
              if (!svg) {
                if (!_divContainer) {
                  _divContainer = _createSibling2(element);
                  _divContainer.style.cssText = css;
                }
                e.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x + "px";
                _divContainer.appendChild(e);
              } else {
                _svgContainer || (_svgContainer = _createSibling2(element));
                e.setAttribute("width", 0.01);
                e.setAttribute("height", 0.01);
                e.setAttribute("transform", "translate(" + x + "," + y + ")");
                _svgContainer.appendChild(e);
              }
            }
            return e;
          }
          throw "Need document and parent.";
        }, _consolidate = function _consolidate2(m) {
          var c = new Matrix2D(), i = 0;
          for (; i < m.numberOfItems; i++) {
            c.multiply(m.getItem(i).matrix);
          }
          return c;
        }, _getCTM = function _getCTM2(svg) {
          var m = svg.getCTM(), transform;
          if (!m) {
            transform = svg.style[_transformProp];
            svg.style[_transformProp] = "none";
            svg.appendChild(_gEl);
            m = _gEl.getCTM();
            svg.removeChild(_gEl);
            transform ? svg.style[_transformProp] = transform : svg.style.removeProperty(_transformProp.replace(/([A-Z])/g, "-$1").toLowerCase());
          }
          return m || _identityMatrix.clone();
        }, _placeSiblings = function _placeSiblings2(element, adjustGOffset) {
          var svg = _svgOwner(element), isRootSVG = element === svg, siblings = svg ? _svgTemps : _divTemps, parent = element.parentNode, container, m, b, x, y, cs;
          if (element === _win) {
            return element;
          }
          siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
          container = svg ? _svgContainer : _divContainer;
          if (svg) {
            if (isRootSVG) {
              b = _getCTM(element);
              x = -b.e / b.a;
              y = -b.f / b.d;
              m = _identityMatrix;
            } else if (element.getBBox) {
              b = element.getBBox();
              m = element.transform ? element.transform.baseVal : {};
              m = !m.numberOfItems ? _identityMatrix : m.numberOfItems > 1 ? _consolidate(m) : m.getItem(0).matrix;
              x = m.a * b.x + m.c * b.y;
              y = m.b * b.x + m.d * b.y;
            } else {
              m = new Matrix2D();
              x = y = 0;
            }
            if (adjustGOffset && element.tagName.toLowerCase() === "g") {
              x = y = 0;
            }
            (isRootSVG ? svg : parent).appendChild(container);
            container.setAttribute("transform", "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + (m.e + x) + "," + (m.f + y) + ")");
          } else {
            x = y = 0;
            if (_hasOffsetBug) {
              m = element.offsetParent;
              b = element;
              while (b && (b = b.parentNode) && b !== m && b.parentNode) {
                if ((_win.getComputedStyle(b)[_transformProp] + "").length > 4) {
                  x = b.offsetLeft;
                  y = b.offsetTop;
                  b = 0;
                }
              }
            }
            cs = _win.getComputedStyle(element);
            if (cs.position !== "absolute" && cs.position !== "fixed") {
              m = element.offsetParent;
              while (parent && parent !== m) {
                x += parent.scrollLeft || 0;
                y += parent.scrollTop || 0;
                parent = parent.parentNode;
              }
            }
            b = container.style;
            b.top = element.offsetTop - y + "px";
            b.left = element.offsetLeft - x + "px";
            b[_transformProp] = cs[_transformProp];
            b[_transformOriginProp] = cs[_transformOriginProp];
            b.position = cs.position === "fixed" ? "fixed" : "absolute";
            element.parentNode.appendChild(container);
          }
          return container;
        }, _setMatrix = function _setMatrix2(m, a, b, c, d, e, f) {
          m.a = a;
          m.b = b;
          m.c = c;
          m.d = d;
          m.e = e;
          m.f = f;
          return m;
        };
        var Matrix2D = function() {
          function Matrix2D2(a, b, c, d, e, f) {
            if (a === void 0) {
              a = 1;
            }
            if (b === void 0) {
              b = 0;
            }
            if (c === void 0) {
              c = 0;
            }
            if (d === void 0) {
              d = 1;
            }
            if (e === void 0) {
              e = 0;
            }
            if (f === void 0) {
              f = 0;
            }
            _setMatrix(this, a, b, c, d, e, f);
          }
          var _proto = Matrix2D2.prototype;
          _proto.inverse = function inverse() {
            var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, determinant = a * d - b * c || 1e-10;
            return _setMatrix(this, d / determinant, -b / determinant, -c / determinant, a / determinant, (c * f - d * e) / determinant, -(a * f - b * e) / determinant);
          };
          _proto.multiply = function multiply(matrix) {
            var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, a2 = matrix.a, b2 = matrix.c, c2 = matrix.b, d2 = matrix.d, e2 = matrix.e, f2 = matrix.f;
            return _setMatrix(this, a2 * a + c2 * c, a2 * b + c2 * d, b2 * a + d2 * c, b2 * b + d2 * d, e + e2 * a + f2 * c, f + e2 * b + f2 * d);
          };
          _proto.clone = function clone() {
            return new Matrix2D2(this.a, this.b, this.c, this.d, this.e, this.f);
          };
          _proto.equals = function equals(matrix) {
            var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
            return a === matrix.a && b === matrix.b && c === matrix.c && d === matrix.d && e === matrix.e && f === matrix.f;
          };
          _proto.apply = function apply(point, decoratee) {
            if (decoratee === void 0) {
              decoratee = {};
            }
            var x = point.x, y = point.y, a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
            decoratee.x = x * a + y * c + e || 0;
            decoratee.y = x * b + y * d + f || 0;
            return decoratee;
          };
          return Matrix2D2;
        }();
        function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
          if (!element || !element.parentNode || (_doc || _setDoc(element)).documentElement === element) {
            return new Matrix2D();
          }
          var zeroScales = _forceNonZeroScale(element), svg = _svgOwner(element), temps = svg ? _svgTemps : _divTemps, container = _placeSiblings(element, adjustGOffset), b1 = temps[0].getBoundingClientRect(), b2 = temps[1].getBoundingClientRect(), b3 = temps[2].getBoundingClientRect(), parent = container.parentNode, isFixed = !includeScrollInFixed && _isFixed(element), m = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));
          parent.removeChild(container);
          if (zeroScales) {
            b1 = zeroScales.length;
            while (b1--) {
              b2 = zeroScales[b1];
              b2.scaleX = b2.scaleY = 0;
              b2.renderTransform(1, b2);
            }
          }
          return inverse ? m.inverse() : m;
        }
        var _id = 1, _toArray, gsap2, _batch, _batchAction, _body$1, _closestTenth, _getStyleSaver, _forEachBatch = function _forEachBatch2(batch, name) {
          return batch.actions.forEach(function(a) {
            return a.vars[name] && a.vars[name](a);
          });
        }, _batchLookup = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _emptyObj = {}, _dashedNameLookup = {}, _memoizedRemoveProps = {}, _listToArray = function _listToArray2(list) {
          return typeof list === "string" ? list.split(" ").join("").split(",") : list;
        }, _callbacks = _listToArray("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"), _removeProps = _listToArray("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"), _getEl = function _getEl2(target) {
          return _toArray(target)[0] || console.warn("Element not found:", target);
        }, _round = function _round2(value) {
          return Math.round(value * 1e4) / 1e4 || 0;
        }, _toggleClass = function _toggleClass2(targets, className, action) {
          return targets.forEach(function(el) {
            return el.classList[action](className);
          });
        }, _reserved = {
          zIndex: 1,
          kill: 1,
          simple: 1,
          spin: 1,
          clearProps: 1,
          targets: 1,
          toggleClass: 1,
          onComplete: 1,
          onUpdate: 1,
          onInterrupt: 1,
          onStart: 1,
          delay: 1,
          repeat: 1,
          repeatDelay: 1,
          yoyo: 1,
          scale: 1,
          fade: 1,
          absolute: 1,
          props: 1,
          onEnter: 1,
          onLeave: 1,
          custom: 1,
          paused: 1,
          nested: 1,
          prune: 1,
          absoluteOnLeave: 1
        }, _fitReserved = {
          zIndex: 1,
          simple: 1,
          clearProps: 1,
          scale: 1,
          absolute: 1,
          fitChild: 1,
          getVars: 1,
          props: 1
        }, _camelToDashed = function _camelToDashed2(p) {
          return p.replace(/([A-Z])/g, "-$1").toLowerCase();
        }, _copy = function _copy2(obj, exclude) {
          var result = {}, p;
          for (p in obj) {
            exclude[p] || (result[p] = obj[p]);
          }
          return result;
        }, _memoizedProps = {}, _memoizeProps = function _memoizeProps2(props) {
          var p = _memoizedProps[props] = _listToArray(props);
          _memoizedRemoveProps[props] = p.concat(_removeProps);
          return p;
        }, _getInverseGlobalMatrix = function _getInverseGlobalMatrix2(el) {
          var cache = el._gsap || gsap2.core.getCache(el);
          if (cache.gmCache === gsap2.ticker.frame) {
            return cache.gMatrix;
          }
          cache.gmCache = gsap2.ticker.frame;
          return cache.gMatrix = getGlobalMatrix(el, true, false, true);
        }, _getDOMDepth = function _getDOMDepth2(el, invert, level) {
          if (level === void 0) {
            level = 0;
          }
          var parent = el.parentNode, inc = 1e3 * Math.pow(10, level) * (invert ? -1 : 1), l = invert ? -inc * 900 : 0;
          while (el) {
            l += inc;
            el = el.previousSibling;
          }
          return parent ? l + _getDOMDepth2(parent, invert, level + 1) : l;
        }, _orderByDOMDepth = function _orderByDOMDepth2(comps, invert, isElStates) {
          comps.forEach(function(comp) {
            return comp.d = _getDOMDepth(isElStates ? comp.element : comp.t, invert);
          });
          comps.sort(function(c1, c2) {
            return c1.d - c2.d;
          });
          return comps;
        }, _recordInlineStyles = function _recordInlineStyles2(elState, props) {
          var style = elState.element.style, a = elState.css = elState.css || [], i = props.length, p, v;
          while (i--) {
            p = props[i];
            v = style[p] || style.getPropertyValue(p);
            a.push(v ? p : _dashedNameLookup[p] || (_dashedNameLookup[p] = _camelToDashed(p)), v);
          }
          return style;
        }, _applyInlineStyles = function _applyInlineStyles2(state) {
          var css = state.css, style = state.element.style, i = 0;
          state.cache.uncache = 1;
          for (; i < css.length; i += 2) {
            css[i + 1] ? style[css[i]] = css[i + 1] : style.removeProperty(css[i]);
          }
          if (!css[css.indexOf("transform") + 1] && style.translate) {
            style.removeProperty("translate");
            style.removeProperty("scale");
            style.removeProperty("rotate");
          }
        }, _setFinalStates = function _setFinalStates2(comps, onlyTransforms) {
          comps.forEach(function(c) {
            return c.a.cache.uncache = 1;
          });
          onlyTransforms || comps.finalStates.forEach(_applyInlineStyles);
        }, _absoluteProps = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","), _makeAbsolute = function _makeAbsolute2(elState, fallbackNode, ignoreBatch) {
          var element = elState.element, width = elState.width, height = elState.height, uncache = elState.uncache, getProp = elState.getProp, style = element.style, i = 4, result, displayIsNone, cs;
          typeof fallbackNode !== "object" && (fallbackNode = elState);
          if (_batch && ignoreBatch !== 1) {
            _batch._abs.push({
              t: element,
              b: elState,
              a: elState,
              sd: 0
            });
            _batch._final.push(function() {
              return (elState.cache.uncache = 1) && _applyInlineStyles(elState);
            });
            return element;
          }
          displayIsNone = getProp("display") === "none";
          if (!elState.isVisible || displayIsNone) {
            displayIsNone && (_recordInlineStyles(elState, ["display"]).display = fallbackNode.display);
            elState.matrix = fallbackNode.matrix;
            elState.width = width = elState.width || fallbackNode.width;
            elState.height = height = elState.height || fallbackNode.height;
          }
          _recordInlineStyles(elState, _absoluteProps);
          cs = window.getComputedStyle(element);
          while (i--) {
            style[_absoluteProps[i]] = cs[_absoluteProps[i]];
          }
          style.gridArea = "1 / 1 / 1 / 1";
          style.transition = "none";
          style.position = "absolute";
          style.width = width + "px";
          style.height = height + "px";
          style.top || (style.top = "0px");
          style.left || (style.left = "0px");
          if (uncache) {
            result = new ElementState(element);
          } else {
            result = _copy(elState, _emptyObj);
            result.position = "absolute";
            if (elState.simple) {
              var bounds = element.getBoundingClientRect();
              result.matrix = new Matrix2D(1, 0, 0, 1, bounds.left + _getDocScrollLeft(), bounds.top + _getDocScrollTop());
            } else {
              result.matrix = getGlobalMatrix(element, false, false, true);
            }
          }
          result = _fit(result, elState, true);
          elState.x = _closestTenth(result.x, 0.01);
          elState.y = _closestTenth(result.y, 0.01);
          return element;
        }, _filterComps = function _filterComps2(comps, targets) {
          if (targets !== true) {
            targets = _toArray(targets);
            comps = comps.filter(function(c) {
              if (targets.indexOf((c.sd < 0 ? c.b : c.a).element) !== -1) {
                return true;
              } else {
                c.t._gsap.renderTransform(1);
                if (c.b.isVisible) {
                  c.t.style.width = c.b.width + "px";
                  c.t.style.height = c.b.height + "px";
                }
              }
            });
          }
          return comps;
        }, _makeCompsAbsolute = function _makeCompsAbsolute2(comps) {
          return _orderByDOMDepth(comps, true).forEach(function(c) {
            return (c.a.isVisible || c.b.isVisible) && _makeAbsolute(c.sd < 0 ? c.b : c.a, c.b, 1);
          });
        }, _findElStateInState = function _findElStateInState2(state, other) {
          return other && state.idLookup[_parseElementState(other).id] || state.elementStates[0];
        }, _parseElementState = function _parseElementState2(elOrNode, props, simple, other) {
          return elOrNode instanceof ElementState ? elOrNode : elOrNode instanceof FlipState ? _findElStateInState(elOrNode, other) : new ElementState(typeof elOrNode === "string" ? _getEl(elOrNode) || console.warn(elOrNode + " not found") : elOrNode, props, simple);
        }, _recordProps = function _recordProps2(elState, props) {
          var getProp = gsap2.getProperty(elState.element, null, "native"), obj = elState.props = {}, i = props.length;
          while (i--) {
            obj[props[i]] = (getProp(props[i]) + "").trim();
          }
          obj.zIndex && (obj.zIndex = parseFloat(obj.zIndex) || 0);
          return elState;
        }, _applyProps = function _applyProps2(element, props) {
          var style = element.style || element, p;
          for (p in props) {
            style[p] = props[p];
          }
        }, _getID = function _getID2(el) {
          var id = el.getAttribute("data-flip-id");
          id || el.setAttribute("data-flip-id", id = "auto-" + _id++);
          return id;
        }, _elementsFromElementStates = function _elementsFromElementStates2(elStates) {
          return elStates.map(function(elState) {
            return elState.element;
          });
        }, _handleCallback = function _handleCallback2(callback, elStates, tl) {
          return callback && elStates.length && tl.add(callback(_elementsFromElementStates(elStates), tl, new FlipState(elStates, 0, true)), 0);
        }, _fit = function _fit2(fromState, toState, scale, applyProps, fitChild, vars) {
          var element = fromState.element, cache = fromState.cache, parent = fromState.parent, x = fromState.x, y = fromState.y, width = toState.width, height = toState.height, scaleX = toState.scaleX, scaleY = toState.scaleY, rotation = toState.rotation, bounds = toState.bounds, styles = vars && _getStyleSaver && _getStyleSaver(element, "transform"), dimensionState = fromState, _toState$matrix = toState.matrix, e = _toState$matrix.e, f = _toState$matrix.f, deep = fromState.bounds.width !== bounds.width || fromState.bounds.height !== bounds.height || fromState.scaleX !== scaleX || fromState.scaleY !== scaleY || fromState.rotation !== rotation, simple = !deep && fromState.simple && toState.simple && !fitChild, skewX, fromPoint, toPoint, getProp, parentMatrix, matrix, bbox;
          if (simple || !parent) {
            scaleX = scaleY = 1;
            rotation = skewX = 0;
          } else {
            parentMatrix = _getInverseGlobalMatrix(parent);
            matrix = parentMatrix.clone().multiply(toState.ctm ? toState.matrix.clone().multiply(toState.ctm) : toState.matrix);
            rotation = _round(Math.atan2(matrix.b, matrix.a) * _RAD2DEG);
            skewX = _round(Math.atan2(matrix.c, matrix.d) * _RAD2DEG + rotation) % 360;
            scaleX = Math.sqrt(Math.pow(matrix.a, 2) + Math.pow(matrix.b, 2));
            scaleY = Math.sqrt(Math.pow(matrix.c, 2) + Math.pow(matrix.d, 2)) * Math.cos(skewX * _DEG2RAD);
            if (fitChild) {
              fitChild = _toArray(fitChild)[0];
              getProp = gsap2.getProperty(fitChild);
              bbox = fitChild.getBBox && typeof fitChild.getBBox === "function" && fitChild.getBBox();
              dimensionState = {
                scaleX: getProp("scaleX"),
                scaleY: getProp("scaleY"),
                width: bbox ? bbox.width : Math.ceil(parseFloat(getProp("width", "px"))),
                height: bbox ? bbox.height : parseFloat(getProp("height", "px"))
              };
            }
            cache.rotation = rotation + "deg";
            cache.skewX = skewX + "deg";
          }
          if (scale) {
            scaleX *= width === dimensionState.width || !dimensionState.width ? 1 : width / dimensionState.width;
            scaleY *= height === dimensionState.height || !dimensionState.height ? 1 : height / dimensionState.height;
            cache.scaleX = scaleX;
            cache.scaleY = scaleY;
          } else {
            width = _closestTenth(width * scaleX / dimensionState.scaleX, 0);
            height = _closestTenth(height * scaleY / dimensionState.scaleY, 0);
            element.style.width = width + "px";
            element.style.height = height + "px";
          }
          applyProps && _applyProps(element, toState.props);
          if (simple || !parent) {
            x += e - fromState.matrix.e;
            y += f - fromState.matrix.f;
          } else if (deep || parent !== toState.parent) {
            cache.renderTransform(1, cache);
            matrix = getGlobalMatrix(fitChild || element, false, false, true);
            fromPoint = parentMatrix.apply({
              x: matrix.e,
              y: matrix.f
            });
            toPoint = parentMatrix.apply({
              x: e,
              y: f
            });
            x += toPoint.x - fromPoint.x;
            y += toPoint.y - fromPoint.y;
          } else {
            parentMatrix.e = parentMatrix.f = 0;
            toPoint = parentMatrix.apply({
              x: e - fromState.matrix.e,
              y: f - fromState.matrix.f
            });
            x += toPoint.x;
            y += toPoint.y;
          }
          x = _closestTenth(x, 0.02);
          y = _closestTenth(y, 0.02);
          if (vars && !(vars instanceof ElementState)) {
            styles && styles.revert();
          } else {
            cache.x = x + "px";
            cache.y = y + "px";
            cache.renderTransform(1, cache);
          }
          if (vars) {
            vars.x = x;
            vars.y = y;
            vars.rotation = rotation;
            vars.skewX = skewX;
            if (scale) {
              vars.scaleX = scaleX;
              vars.scaleY = scaleY;
            } else {
              vars.width = width;
              vars.height = height;
            }
          }
          return vars || cache;
        }, _parseState = function _parseState2(targetsOrState, vars) {
          return targetsOrState instanceof FlipState ? targetsOrState : new FlipState(targetsOrState, vars);
        }, _getChangingElState = function _getChangingElState2(toState, fromState, id) {
          var to1 = toState.idLookup[id], to2 = toState.alt[id];
          return to2.isVisible && (!(fromState.getElementState(to2.element) || to2).isVisible || !to1.isVisible) ? to2 : to1;
        }, _bodyMetrics = [], _bodyProps = "width,height,overflowX,overflowY".split(","), _bodyLocked, _lockBodyScroll = function _lockBodyScroll2(lock) {
          if (lock !== _bodyLocked) {
            var s = _body$1.style, w = _body$1.clientWidth === window.outerWidth, h = _body$1.clientHeight === window.outerHeight, i = 4;
            if (lock && (w || h)) {
              while (i--) {
                _bodyMetrics[i] = s[_bodyProps[i]];
              }
              if (w) {
                s.width = _body$1.clientWidth + "px";
                s.overflowY = "hidden";
              }
              if (h) {
                s.height = _body$1.clientHeight + "px";
                s.overflowX = "hidden";
              }
              _bodyLocked = lock;
            } else if (_bodyLocked) {
              while (i--) {
                _bodyMetrics[i] ? s[_bodyProps[i]] = _bodyMetrics[i] : s.removeProperty(_camelToDashed(_bodyProps[i]));
              }
              _bodyLocked = lock;
            }
          }
        }, _fromTo = function _fromTo2(fromState, toState, vars, relative) {
          fromState instanceof FlipState && toState instanceof FlipState || console.warn("Not a valid state object.");
          vars = vars || {};
          var _vars = vars, clearProps = _vars.clearProps, onEnter = _vars.onEnter, onLeave = _vars.onLeave, absolute = _vars.absolute, absoluteOnLeave = _vars.absoluteOnLeave, custom = _vars.custom, delay = _vars.delay, paused = _vars.paused, repeat = _vars.repeat, repeatDelay = _vars.repeatDelay, yoyo = _vars.yoyo, toggleClass = _vars.toggleClass, nested = _vars.nested, _zIndex = _vars.zIndex, scale = _vars.scale, fade = _vars.fade, stagger = _vars.stagger, spin = _vars.spin, prune = _vars.prune, props = ("props" in vars ? vars : fromState).props, tweenVars = _copy(vars, _reserved), animation = gsap2.timeline({
            delay,
            paused,
            repeat,
            repeatDelay,
            yoyo,
            data: "isFlip"
          }), remainingProps = tweenVars, entering = [], leaving = [], comps = [], swapOutTargets = [], spinNum = spin === true ? 1 : spin || 0, spinFunc = typeof spin === "function" ? spin : function() {
            return spinNum;
          }, interrupted = fromState.interrupted || toState.interrupted, addFunc = animation[relative !== 1 ? "to" : "from"], v, p, endTime, i, el, comp, state, targets, finalStates, fromNode, toNode, run, a, b;
          for (p in toState.idLookup) {
            toNode = !toState.alt[p] ? toState.idLookup[p] : _getChangingElState(toState, fromState, p);
            el = toNode.element;
            fromNode = fromState.idLookup[p];
            fromState.alt[p] && el === fromNode.element && (fromState.alt[p].isVisible || !toNode.isVisible) && (fromNode = fromState.alt[p]);
            if (fromNode) {
              comp = {
                t: el,
                b: fromNode,
                a: toNode,
                sd: fromNode.element === el ? 0 : toNode.isVisible ? 1 : -1
              };
              comps.push(comp);
              if (comp.sd) {
                if (comp.sd < 0) {
                  comp.b = toNode;
                  comp.a = fromNode;
                }
                interrupted && _recordInlineStyles(comp.b, props ? _memoizedRemoveProps[props] : _removeProps);
                fade && comps.push(comp.swap = {
                  t: fromNode.element,
                  b: comp.b,
                  a: comp.a,
                  sd: -comp.sd,
                  swap: comp
                });
              }
              el._flip = fromNode.element._flip = _batch ? _batch.timeline : animation;
            } else if (toNode.isVisible) {
              comps.push({
                t: el,
                b: _copy(toNode, {
                  isVisible: 1
                }),
                a: toNode,
                sd: 0,
                entering: 1
              });
              el._flip = _batch ? _batch.timeline : animation;
            }
          }
          props && (_memoizedProps[props] || _memoizeProps(props)).forEach(function(p2) {
            return tweenVars[p2] = function(i2) {
              return comps[i2].a.props[p2];
            };
          });
          comps.finalStates = finalStates = [];
          run = function run2() {
            _orderByDOMDepth(comps);
            _lockBodyScroll(true);
            for (i = 0; i < comps.length; i++) {
              comp = comps[i];
              a = comp.a;
              b = comp.b;
              if (prune && !a.isDifferent(b) && !comp.entering) {
                comps.splice(i--, 1);
              } else {
                el = comp.t;
                nested && !(comp.sd < 0) && i && (a.matrix = getGlobalMatrix(el, false, false, true));
                if (b.isVisible && a.isVisible) {
                  if (comp.sd < 0) {
                    state = new ElementState(el, props, fromState.simple);
                    _fit(state, a, scale, 0, 0, state);
                    state.matrix = getGlobalMatrix(el, false, false, true);
                    state.css = comp.b.css;
                    comp.a = a = state;
                    fade && (el.style.opacity = interrupted ? b.opacity : a.opacity);
                    stagger && swapOutTargets.push(el);
                  } else if (comp.sd > 0 && fade) {
                    el.style.opacity = interrupted ? a.opacity - b.opacity : "0";
                  }
                  _fit(a, b, scale, props);
                } else if (b.isVisible !== a.isVisible) {
                  if (!b.isVisible) {
                    a.isVisible && entering.push(a);
                    comps.splice(i--, 1);
                  } else if (!a.isVisible) {
                    b.css = a.css;
                    leaving.push(b);
                    comps.splice(i--, 1);
                    absolute && nested && _fit(a, b, scale, props);
                  }
                }
                if (!scale) {
                  el.style.maxWidth = Math.max(a.width, b.width) + "px";
                  el.style.maxHeight = Math.max(a.height, b.height) + "px";
                  el.style.minWidth = Math.min(a.width, b.width) + "px";
                  el.style.minHeight = Math.min(a.height, b.height) + "px";
                }
                nested && toggleClass && el.classList.add(toggleClass);
              }
              finalStates.push(a);
            }
            var classTargets;
            if (toggleClass) {
              classTargets = finalStates.map(function(s) {
                return s.element;
              });
              nested && classTargets.forEach(function(e) {
                return e.classList.remove(toggleClass);
              });
            }
            _lockBodyScroll(false);
            if (scale) {
              tweenVars.scaleX = function(i2) {
                return comps[i2].a.scaleX;
              };
              tweenVars.scaleY = function(i2) {
                return comps[i2].a.scaleY;
              };
            } else {
              tweenVars.width = function(i2) {
                return comps[i2].a.width + "px";
              };
              tweenVars.height = function(i2) {
                return comps[i2].a.height + "px";
              };
              tweenVars.autoRound = vars.autoRound || false;
            }
            tweenVars.x = function(i2) {
              return comps[i2].a.x + "px";
            };
            tweenVars.y = function(i2) {
              return comps[i2].a.y + "px";
            };
            tweenVars.rotation = function(i2) {
              return comps[i2].a.rotation + (spin ? spinFunc(i2, targets[i2], targets) * 360 : 0);
            };
            tweenVars.skewX = function(i2) {
              return comps[i2].a.skewX;
            };
            targets = comps.map(function(c) {
              return c.t;
            });
            if (_zIndex || _zIndex === 0) {
              tweenVars.modifiers = {
                zIndex: function zIndex() {
                  return _zIndex;
                }
              };
              tweenVars.zIndex = _zIndex;
              tweenVars.immediateRender = vars.immediateRender !== false;
            }
            fade && (tweenVars.opacity = function(i2) {
              return comps[i2].sd < 0 ? 0 : comps[i2].sd > 0 ? comps[i2].a.opacity : "+=0";
            });
            if (swapOutTargets.length) {
              stagger = gsap2.utils.distribute(stagger);
              var dummyArray = targets.slice(swapOutTargets.length);
              tweenVars.stagger = function(i2, el2) {
                return stagger(~swapOutTargets.indexOf(el2) ? targets.indexOf(comps[i2].swap.t) : i2, el2, dummyArray);
              };
            }
            _callbacks.forEach(function(name) {
              return vars[name] && animation.eventCallback(name, vars[name], vars[name + "Params"]);
            });
            if (custom && targets.length) {
              remainingProps = _copy(tweenVars, _reserved);
              if ("scale" in custom) {
                custom.scaleX = custom.scaleY = custom.scale;
                delete custom.scale;
              }
              for (p in custom) {
                v = _copy(custom[p], _fitReserved);
                v[p] = tweenVars[p];
                !("duration" in v) && "duration" in tweenVars && (v.duration = tweenVars.duration);
                v.stagger = tweenVars.stagger;
                addFunc.call(animation, targets, v, 0);
                delete remainingProps[p];
              }
            }
            if (targets.length || leaving.length || entering.length) {
              toggleClass && animation.add(function() {
                return _toggleClass(classTargets, toggleClass, animation._zTime < 0 ? "remove" : "add");
              }, 0) && !paused && _toggleClass(classTargets, toggleClass, "add");
              targets.length && addFunc.call(animation, targets, remainingProps, 0);
            }
            _handleCallback(onEnter, entering, animation);
            _handleCallback(onLeave, leaving, animation);
            var batchTl = _batch && _batch.timeline;
            if (batchTl) {
              batchTl.add(animation, 0);
              _batch._final.push(function() {
                return _setFinalStates(comps, !clearProps);
              });
            }
            endTime = animation.duration();
            animation.call(function() {
              var forward = animation.time() >= endTime;
              forward && !batchTl && _setFinalStates(comps, !clearProps);
              toggleClass && _toggleClass(classTargets, toggleClass, forward ? "remove" : "add");
            });
          };
          absoluteOnLeave && (absolute = comps.filter(function(comp2) {
            return !comp2.sd && !comp2.a.isVisible && comp2.b.isVisible;
          }).map(function(comp2) {
            return comp2.a.element;
          }));
          if (_batch) {
            var _batch$_abs;
            absolute && (_batch$_abs = _batch._abs).push.apply(_batch$_abs, _filterComps(comps, absolute));
            _batch._run.push(run);
          } else {
            absolute && _makeCompsAbsolute(_filterComps(comps, absolute));
            run();
          }
          var anim = _batch ? _batch.timeline : animation;
          anim.revert = function() {
            return _killFlip(anim, 1, 1);
          };
          return anim;
        }, _interrupt = function _interrupt2(tl) {
          tl.vars.onInterrupt && tl.vars.onInterrupt.apply(tl, tl.vars.onInterruptParams || []);
          tl.getChildren(true, false, true).forEach(_interrupt2);
        }, _killFlip = function _killFlip2(tl, action, force) {
          if (tl && tl.progress() < 1 && (!tl.paused() || force)) {
            if (action) {
              _interrupt(tl);
              action < 2 && tl.progress(1);
              tl.kill();
            }
            return true;
          }
        }, _createLookup = function _createLookup2(state) {
          var lookup = state.idLookup = {}, alt = state.alt = {}, elStates = state.elementStates, i = elStates.length, elState;
          while (i--) {
            elState = elStates[i];
            lookup[elState.id] ? alt[elState.id] = elState : lookup[elState.id] = elState;
          }
        };
        var FlipState = function() {
          function FlipState2(targets, vars, targetsAreElementStates) {
            this.props = vars && vars.props;
            this.simple = !!(vars && vars.simple);
            if (targetsAreElementStates) {
              this.targets = _elementsFromElementStates(targets);
              this.elementStates = targets;
              _createLookup(this);
            } else {
              this.targets = _toArray(targets);
              var soft = vars && (vars.kill === false || vars.batch && !vars.kill);
              _batch && !soft && _batch._kill.push(this);
              this.update(soft || !!_batch);
            }
          }
          var _proto = FlipState2.prototype;
          _proto.update = function update(soft) {
            var _this = this;
            this.elementStates = this.targets.map(function(el) {
              return new ElementState(el, _this.props, _this.simple);
            });
            _createLookup(this);
            this.interrupt(soft);
            this.recordInlineStyles();
            return this;
          };
          _proto.clear = function clear() {
            this.targets.length = this.elementStates.length = 0;
            _createLookup(this);
            return this;
          };
          _proto.fit = function fit(state, scale, nested) {
            var elStatesInOrder = _orderByDOMDepth(this.elementStates.slice(0), false, true), toElStates = (state || this).idLookup, i = 0, fromNode, toNode;
            for (; i < elStatesInOrder.length; i++) {
              fromNode = elStatesInOrder[i];
              nested && (fromNode.matrix = getGlobalMatrix(fromNode.element, false, false, true));
              toNode = toElStates[fromNode.id];
              toNode && _fit(fromNode, toNode, scale, true, 0, fromNode);
              fromNode.matrix = getGlobalMatrix(fromNode.element, false, false, true);
            }
            return this;
          };
          _proto.getProperty = function getProperty(element, property) {
            var es = this.getElementState(element) || _emptyObj;
            return (property in es ? es : es.props || _emptyObj)[property];
          };
          _proto.add = function add(state) {
            var i = state.targets.length, lookup = this.idLookup, alt = this.alt, index, es, es2;
            while (i--) {
              es = state.elementStates[i];
              es2 = lookup[es.id];
              if (es2 && (es.element === es2.element || alt[es.id] && alt[es.id].element === es.element)) {
                index = this.elementStates.indexOf(es.element === es2.element ? es2 : alt[es.id]);
                this.targets.splice(index, 1, state.targets[i]);
                this.elementStates.splice(index, 1, es);
              } else {
                this.targets.push(state.targets[i]);
                this.elementStates.push(es);
              }
            }
            state.interrupted && (this.interrupted = true);
            state.simple || (this.simple = false);
            _createLookup(this);
            return this;
          };
          _proto.compare = function compare(state) {
            var l1 = state.idLookup, l2 = this.idLookup, unchanged = [], changed = [], enter = [], leave = [], targets = [], a1 = state.alt, a2 = this.alt, place = function place2(s12, s22, el2) {
              return (s12.isVisible !== s22.isVisible ? s12.isVisible ? enter : leave : s12.isVisible ? changed : unchanged).push(el2) && targets.push(el2);
            }, placeIfDoesNotExist = function placeIfDoesNotExist2(s12, s22, el2) {
              return targets.indexOf(el2) < 0 && place(s12, s22, el2);
            }, s1, s2, p, el, s1Alt, s2Alt, c1, c2;
            for (p in l1) {
              s1Alt = a1[p];
              s2Alt = a2[p];
              s1 = !s1Alt ? l1[p] : _getChangingElState(state, this, p);
              el = s1.element;
              s2 = l2[p];
              if (s2Alt) {
                c2 = s2.isVisible || !s2Alt.isVisible && el === s2.element ? s2 : s2Alt;
                c1 = s1Alt && !s1.isVisible && !s1Alt.isVisible && c2.element === s1Alt.element ? s1Alt : s1;
                if (c1.isVisible && c2.isVisible && c1.element !== c2.element) {
                  (c1.isDifferent(c2) ? changed : unchanged).push(c1.element, c2.element);
                  targets.push(c1.element, c2.element);
                } else {
                  place(c1, c2, c1.element);
                }
                s1Alt && c1.element === s1Alt.element && (s1Alt = l1[p]);
                placeIfDoesNotExist(c1.element !== s2.element && s1Alt ? s1Alt : c1, s2, s2.element);
                placeIfDoesNotExist(s1Alt && s1Alt.element === s2Alt.element ? s1Alt : c1, s2Alt, s2Alt.element);
                s1Alt && placeIfDoesNotExist(s1Alt, s2Alt.element === s1Alt.element ? s2Alt : s2, s1Alt.element);
              } else {
                !s2 ? enter.push(el) : !s2.isDifferent(s1) ? unchanged.push(el) : place(s1, s2, el);
                s1Alt && placeIfDoesNotExist(s1Alt, s2, s1Alt.element);
              }
            }
            for (p in l2) {
              if (!l1[p]) {
                leave.push(l2[p].element);
                a2[p] && leave.push(a2[p].element);
              }
            }
            return {
              changed,
              unchanged,
              enter,
              leave
            };
          };
          _proto.recordInlineStyles = function recordInlineStyles() {
            var props = _memoizedRemoveProps[this.props] || _removeProps, i = this.elementStates.length;
            while (i--) {
              _recordInlineStyles(this.elementStates[i], props);
            }
          };
          _proto.interrupt = function interrupt(soft) {
            var _this2 = this;
            var timelines = [];
            this.targets.forEach(function(t) {
              var tl = t._flip, foundInProgress = _killFlip(tl, soft ? 0 : 1);
              soft && foundInProgress && timelines.indexOf(tl) < 0 && tl.add(function() {
                return _this2.updateVisibility();
              });
              foundInProgress && timelines.push(tl);
            });
            !soft && timelines.length && this.updateVisibility();
            this.interrupted || (this.interrupted = !!timelines.length);
          };
          _proto.updateVisibility = function updateVisibility() {
            this.elementStates.forEach(function(es) {
              var b = es.element.getBoundingClientRect();
              es.isVisible = !!(b.width || b.height || b.top || b.left);
              es.uncache = 1;
            });
          };
          _proto.getElementState = function getElementState(element) {
            return this.elementStates[this.targets.indexOf(_getEl(element))];
          };
          _proto.makeAbsolute = function makeAbsolute() {
            return _orderByDOMDepth(this.elementStates.slice(0), true, true).map(_makeAbsolute);
          };
          return FlipState2;
        }();
        var ElementState = function() {
          function ElementState2(element, props, simple) {
            this.element = element;
            this.update(props, simple);
          }
          var _proto2 = ElementState2.prototype;
          _proto2.isDifferent = function isDifferent(state) {
            var b1 = this.bounds, b2 = state.bounds;
            return b1.top !== b2.top || b1.left !== b2.left || b1.width !== b2.width || b1.height !== b2.height || !this.matrix.equals(state.matrix) || this.opacity !== state.opacity || this.props && state.props && JSON.stringify(this.props) !== JSON.stringify(state.props);
          };
          _proto2.update = function update(props, simple) {
            var self2 = this, element = self2.element, getProp = gsap2.getProperty(element), cache = gsap2.core.getCache(element), bounds = element.getBoundingClientRect(), bbox = element.getBBox && typeof element.getBBox === "function" && element.nodeName.toLowerCase() !== "svg" && element.getBBox(), m = simple ? new Matrix2D(1, 0, 0, 1, bounds.left + _getDocScrollLeft(), bounds.top + _getDocScrollTop()) : getGlobalMatrix(element, false, false, true);
            self2.getProp = getProp;
            self2.element = element;
            self2.id = _getID(element);
            self2.matrix = m;
            self2.cache = cache;
            self2.bounds = bounds;
            self2.isVisible = !!(bounds.width || bounds.height || bounds.left || bounds.top);
            self2.display = getProp("display");
            self2.position = getProp("position");
            self2.parent = element.parentNode;
            self2.x = getProp("x");
            self2.y = getProp("y");
            self2.scaleX = cache.scaleX;
            self2.scaleY = cache.scaleY;
            self2.rotation = getProp("rotation");
            self2.skewX = getProp("skewX");
            self2.opacity = getProp("opacity");
            self2.width = bbox ? bbox.width : _closestTenth(getProp("width", "px"), 0.04);
            self2.height = bbox ? bbox.height : _closestTenth(getProp("height", "px"), 0.04);
            props && _recordProps(self2, _memoizedProps[props] || _memoizeProps(props));
            self2.ctm = element.getCTM && element.nodeName.toLowerCase() === "svg" && _getCTM(element).inverse();
            self2.simple = simple || _round(m.a) === 1 && !_round(m.b) && !_round(m.c) && _round(m.d) === 1;
            self2.uncache = 0;
          };
          return ElementState2;
        }();
        var FlipAction = function() {
          function FlipAction2(vars, batch) {
            this.vars = vars;
            this.batch = batch;
            this.states = [];
            this.timeline = batch.timeline;
          }
          var _proto3 = FlipAction2.prototype;
          _proto3.getStateById = function getStateById(id) {
            var i = this.states.length;
            while (i--) {
              if (this.states[i].idLookup[id]) {
                return this.states[i];
              }
            }
          };
          _proto3.kill = function kill() {
            this.batch.remove(this);
          };
          return FlipAction2;
        }();
        var FlipBatch = function() {
          function FlipBatch2(id) {
            this.id = id;
            this.actions = [];
            this._kill = [];
            this._final = [];
            this._abs = [];
            this._run = [];
            this.data = {};
            this.state = new FlipState();
            this.timeline = gsap2.timeline();
          }
          var _proto4 = FlipBatch2.prototype;
          _proto4.add = function add(config) {
            var result = this.actions.filter(function(action) {
              return action.vars === config;
            });
            if (result.length) {
              return result[0];
            }
            result = new FlipAction(typeof config === "function" ? {
              animate: config
            } : config, this);
            this.actions.push(result);
            return result;
          };
          _proto4.remove = function remove(action) {
            var i = this.actions.indexOf(action);
            i >= 0 && this.actions.splice(i, 1);
            return this;
          };
          _proto4.getState = function getState(merge) {
            var _this3 = this;
            var prevBatch = _batch, prevAction = _batchAction;
            _batch = this;
            this.state.clear();
            this._kill.length = 0;
            this.actions.forEach(function(action) {
              if (action.vars.getState) {
                action.states.length = 0;
                _batchAction = action;
                action.state = action.vars.getState(action);
              }
              merge && action.states.forEach(function(s) {
                return _this3.state.add(s);
              });
            });
            _batchAction = prevAction;
            _batch = prevBatch;
            this.killConflicts();
            return this;
          };
          _proto4.animate = function animate() {
            var _this4 = this;
            var prevBatch = _batch, tl = this.timeline, i = this.actions.length, finalStates, endTime;
            _batch = this;
            tl.clear();
            this._abs.length = this._final.length = this._run.length = 0;
            this.actions.forEach(function(a) {
              a.vars.animate && a.vars.animate(a);
              var onEnter = a.vars.onEnter, onLeave = a.vars.onLeave, targets = a.targets, s, result;
              if (targets && targets.length && (onEnter || onLeave)) {
                s = new FlipState();
                a.states.forEach(function(state) {
                  return s.add(state);
                });
                result = s.compare(Flip2.getState(targets));
                result.enter.length && onEnter && onEnter(result.enter);
                result.leave.length && onLeave && onLeave(result.leave);
              }
            });
            _makeCompsAbsolute(this._abs);
            this._run.forEach(function(f) {
              return f();
            });
            endTime = tl.duration();
            finalStates = this._final.slice(0);
            tl.add(function() {
              if (endTime <= tl.time()) {
                finalStates.forEach(function(f) {
                  return f();
                });
                _forEachBatch(_this4, "onComplete");
              }
            });
            _batch = prevBatch;
            while (i--) {
              this.actions[i].vars.once && this.actions[i].kill();
            }
            _forEachBatch(this, "onStart");
            tl.restart();
            return this;
          };
          _proto4.loadState = function loadState(done) {
            done || (done = function done2() {
              return 0;
            });
            var queue = [];
            this.actions.forEach(function(c) {
              if (c.vars.loadState) {
                var i, f = function f2(targets) {
                  targets && (c.targets = targets);
                  i = queue.indexOf(f2);
                  if (~i) {
                    queue.splice(i, 1);
                    queue.length || done();
                  }
                };
                queue.push(f);
                c.vars.loadState(f);
              }
            });
            queue.length || done();
            return this;
          };
          _proto4.setState = function setState() {
            this.actions.forEach(function(c) {
              return c.targets = c.vars.setState && c.vars.setState(c);
            });
            return this;
          };
          _proto4.killConflicts = function killConflicts(soft) {
            this.state.interrupt(soft);
            this._kill.forEach(function(state) {
              return state.interrupt(soft);
            });
            return this;
          };
          _proto4.run = function run(skipGetState, merge) {
            var _this5 = this;
            if (this !== _batch) {
              skipGetState || this.getState(merge);
              this.loadState(function() {
                if (!_this5._killed) {
                  _this5.setState();
                  _this5.animate();
                }
              });
            }
            return this;
          };
          _proto4.clear = function clear(stateOnly) {
            this.state.clear();
            stateOnly || (this.actions.length = 0);
          };
          _proto4.getStateById = function getStateById(id) {
            var i = this.actions.length, s;
            while (i--) {
              s = this.actions[i].getStateById(id);
              if (s) {
                return s;
              }
            }
            return this.state.idLookup[id] && this.state;
          };
          _proto4.kill = function kill() {
            this._killed = 1;
            this.clear();
            delete _batchLookup[this.id];
          };
          return FlipBatch2;
        }();
        var Flip2 = function() {
          function Flip3() {
          }
          Flip3.getState = function getState(targets, vars) {
            var state = _parseState(targets, vars);
            _batchAction && _batchAction.states.push(state);
            vars && vars.batch && Flip3.batch(vars.batch).state.add(state);
            return state;
          };
          Flip3.from = function from(state, vars) {
            vars = vars || {};
            "clearProps" in vars || (vars.clearProps = true);
            return _fromTo(state, _parseState(vars.targets || state.targets, {
              props: vars.props || state.props,
              simple: vars.simple,
              kill: !!vars.kill
            }), vars, -1);
          };
          Flip3.to = function to(state, vars) {
            return _fromTo(state, _parseState(vars.targets || state.targets, {
              props: vars.props || state.props,
              simple: vars.simple,
              kill: !!vars.kill
            }), vars, 1);
          };
          Flip3.fromTo = function fromTo(fromState, toState, vars) {
            return _fromTo(fromState, toState, vars);
          };
          Flip3.fit = function fit(fromEl, toEl, vars) {
            var v = vars ? _copy(vars, _fitReserved) : {}, _ref = vars || v, absolute = _ref.absolute, scale = _ref.scale, getVars = _ref.getVars, props = _ref.props, runBackwards = _ref.runBackwards, onComplete = _ref.onComplete, simple = _ref.simple, fitChild = vars && vars.fitChild && _getEl(vars.fitChild), before = _parseElementState(toEl, props, simple, fromEl), after = _parseElementState(fromEl, 0, simple, before), inlineProps = props ? _memoizedRemoveProps[props] : _removeProps, ctx = gsap2.context();
            props && _applyProps(v, before.props);
            _recordInlineStyles(after, inlineProps);
            if (runBackwards) {
              "immediateRender" in v || (v.immediateRender = true);
              v.onComplete = function() {
                _applyInlineStyles(after);
                onComplete && onComplete.apply(this, arguments);
              };
            }
            absolute && _makeAbsolute(after, before);
            v = _fit(after, before, scale || fitChild, props, fitChild, v.duration || getVars ? v : 0);
            ctx && !getVars && ctx.add(function() {
              return function() {
                return _applyInlineStyles(after);
              };
            });
            return getVars ? v : v.duration ? gsap2.to(after.element, v) : null;
          };
          Flip3.makeAbsolute = function makeAbsolute(targetsOrStates, vars) {
            return (targetsOrStates instanceof FlipState ? targetsOrStates : new FlipState(targetsOrStates, vars)).makeAbsolute();
          };
          Flip3.batch = function batch(id) {
            id || (id = "default");
            return _batchLookup[id] || (_batchLookup[id] = new FlipBatch(id));
          };
          Flip3.killFlipsOf = function killFlipsOf(targets, complete) {
            (targets instanceof FlipState ? targets.targets : _toArray(targets)).forEach(function(t) {
              return t && _killFlip(t._flip, complete !== false ? 1 : 2);
            });
          };
          Flip3.isFlipping = function isFlipping(target) {
            var f = Flip3.getByTarget(target);
            return !!f && f.isActive();
          };
          Flip3.getByTarget = function getByTarget(target) {
            return (_getEl(target) || _emptyObj)._flip;
          };
          Flip3.getElementState = function getElementState(target, props) {
            return new ElementState(_getEl(target), props);
          };
          Flip3.convertCoordinates = function convertCoordinates(fromElement, toElement, point) {
            var m = getGlobalMatrix(toElement, true, true).multiply(getGlobalMatrix(fromElement));
            return point ? m.apply(point) : m;
          };
          Flip3.register = function register(core) {
            _body$1 = typeof document !== "undefined" && document.body;
            if (_body$1) {
              gsap2 = core;
              _setDoc(_body$1);
              _toArray = gsap2.utils.toArray;
              _getStyleSaver = gsap2.core.getStyleSaver;
              var snap = gsap2.utils.snap(0.1);
              _closestTenth = function _closestTenth2(value, add) {
                return snap(parseFloat(value) + add);
              };
            }
          };
          return Flip3;
        }();
        Flip2.version = "3.12.5";
        typeof window !== "undefined" && window.gsap && window.gsap.registerPlugin(Flip2);
        exports2.Flip = Flip2;
        exports2.default = Flip2;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // node_modules/gsap/dist/ScrollTrigger.js
  var require_ScrollTrigger = __commonJS({
    "node_modules/gsap/dist/ScrollTrigger.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = global || self, factory(global.window = global.window || {}));
      })(exports, function(exports2) {
        "use strict";
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        var gsap2, _coreInitted, _clamp, _win, _doc, _docEl, _body, _isTouch, _pointerType, ScrollTrigger2, _root, _normalizer, _eventTypes, _context, _getGSAP = function _getGSAP2() {
          return gsap2 || typeof window !== "undefined" && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
        }, _startup = 1, _observers = [], _scrollers = [], _proxies = [], _getTime = Date.now, _bridge = function _bridge2(name, value) {
          return value;
        }, _integrate = function _integrate2() {
          var core = ScrollTrigger2.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
          scrollers.push.apply(scrollers, _scrollers);
          proxies.push.apply(proxies, _proxies);
          _scrollers = scrollers;
          _proxies = proxies;
          _bridge = function _bridge2(name, value) {
            return data[name](value);
          };
        }, _getProxyProp = function _getProxyProp2(element, property) {
          return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
        }, _isViewport = function _isViewport2(el) {
          return !!~_root.indexOf(el);
        }, _addListener = function _addListener2(element, type, func, passive, capture) {
          return element.addEventListener(type, func, {
            passive: passive !== false,
            capture: !!capture
          });
        }, _removeListener = function _removeListener2(element, type, func, capture) {
          return element.removeEventListener(type, func, !!capture);
        }, _scrollLeft = "scrollLeft", _scrollTop = "scrollTop", _onScroll = function _onScroll2() {
          return _normalizer && _normalizer.isPressed || _scrollers.cache++;
        }, _scrollCacheFunc = function _scrollCacheFunc2(f, doNotCache) {
          var cachingFunc = function cachingFunc2(value) {
            if (value || value === 0) {
              _startup && (_win.history.scrollRestoration = "manual");
              var isNormalizing = _normalizer && _normalizer.isPressed;
              value = cachingFunc2.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0);
              f(value);
              cachingFunc2.cacheID = _scrollers.cache;
              isNormalizing && _bridge("ss", value);
            } else if (doNotCache || _scrollers.cache !== cachingFunc2.cacheID || _bridge("ref")) {
              cachingFunc2.cacheID = _scrollers.cache;
              cachingFunc2.v = f();
            }
            return cachingFunc2.v + cachingFunc2.offset;
          };
          cachingFunc.offset = 0;
          return f && cachingFunc;
        }, _horizontal = {
          s: _scrollLeft,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: _scrollCacheFunc(function(value) {
            return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
          })
        }, _vertical = {
          s: _scrollTop,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: _horizontal,
          sc: _scrollCacheFunc(function(value) {
            return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
          })
        }, _getTarget = function _getTarget2(t, self2) {
          return (self2 && self2._ctx && self2._ctx.selector || gsap2.utils.toArray)(t)[0] || (typeof t === "string" && gsap2.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
        }, _getScrollFunc = function _getScrollFunc2(element, _ref) {
          var s = _ref.s, sc = _ref.sc;
          _isViewport(element) && (element = _doc.scrollingElement || _docEl);
          var i = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
          !~i && (i = _scrollers.push(element) - 1);
          _scrollers[i + offset] || _addListener(element, "scroll", _onScroll);
          var prev = _scrollers[i + offset], func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
            return arguments.length ? element[s] = value : element[s];
          })));
          func.target = element;
          prev || (func.smooth = gsap2.getProperty(element, "scrollBehavior") === "smooth");
          return func;
        }, _getVelocityProp = function _getVelocityProp2(value, minTimeRefresh, useDelta) {
          var v1 = value, v2 = value, t1 = _getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update2(value2, force) {
            var t = _getTime();
            if (force || t - t1 > min) {
              v2 = v1;
              v1 = value2;
              t2 = t1;
              t1 = t;
            } else if (useDelta) {
              v1 += value2;
            } else {
              v1 = v2 + (value2 - v2) / (t - t2) * (t1 - t2);
            }
          }, reset = function reset2() {
            v2 = v1 = useDelta ? 0 : v1;
            t2 = t1 = 0;
          }, getVelocity = function getVelocity2(latestValue) {
            var tOld = t2, vOld = v2, t = _getTime();
            (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
            return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1e3;
          };
          return {
            update,
            reset,
            getVelocity
          };
        }, _getEvent = function _getEvent2(e, preventDefault) {
          preventDefault && !e._gsapAllow && e.preventDefault();
          return e.changedTouches ? e.changedTouches[0] : e;
        }, _getAbsoluteMax = function _getAbsoluteMax2(a) {
          var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
          return Math.abs(max) >= Math.abs(min) ? max : min;
        }, _setScrollTrigger = function _setScrollTrigger2() {
          ScrollTrigger2 = gsap2.core.globals().ScrollTrigger;
          ScrollTrigger2 && ScrollTrigger2.core && _integrate();
        }, _initCore = function _initCore2(core) {
          gsap2 = core || _getGSAP();
          if (!_coreInitted && gsap2 && typeof document !== "undefined" && document.body) {
            _win = window;
            _doc = document;
            _docEl = _doc.documentElement;
            _body = _doc.body;
            _root = [_win, _doc, _docEl, _body];
            _clamp = gsap2.utils.clamp;
            _context = gsap2.core.context || function() {
            };
            _pointerType = "onpointerenter" in _body ? "pointer" : "mouse";
            _isTouch = Observer2.isTouch = _win.matchMedia && _win.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
            _eventTypes = Observer2.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
            setTimeout(function() {
              return _startup = 0;
            }, 500);
            _setScrollTrigger();
            _coreInitted = 1;
          }
          return _coreInitted;
        };
        _horizontal.op = _vertical;
        _scrollers.cache = 0;
        var Observer2 = function() {
          function Observer3(vars) {
            this.init(vars);
          }
          var _proto = Observer3.prototype;
          _proto.init = function init(vars) {
            _coreInitted || _initCore(gsap2) || console.warn("Please gsap.registerPlugin(Observer)");
            ScrollTrigger2 || _setScrollTrigger();
            var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
            this.target = target = _getTarget(target) || _docEl;
            this.vars = vars;
            ignore && (ignore = gsap2.utils.toArray(ignore));
            tolerance = tolerance || 1e-9;
            dragMinimum = dragMinimum || 0;
            wheelSpeed = wheelSpeed || 1;
            scrollSpeed = scrollSpeed || 1;
            type = type || "wheel,touch,pointer";
            debounce = debounce !== false;
            lineHeight || (lineHeight = parseFloat(_win.getComputedStyle(_body).lineHeight) || 22);
            var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self2 = this, prevDeltaX = 0, prevDeltaY = 0, passive = vars.passive || !preventDefault, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport(target), ownerDoc = target.ownerDocument || _doc, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function clickCapture2() {
              return onClickTime = _getTime();
            }, _ignoreCheck = function _ignoreCheck2(e, isPointerOrTouch) {
              return (self2.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
            }, onStopFunc = function onStopFunc2() {
              self2._vx.reset();
              self2._vy.reset();
              onStopDelayedCall.pause();
              onStop && onStop(self2);
            }, update = function update2() {
              var dx = self2.deltaX = _getAbsoluteMax(deltaX), dy = self2.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
              onChange && (changedX || changedY) && onChange(self2, dx, dy, deltaX, deltaY);
              if (changedX) {
                onRight && self2.deltaX > 0 && onRight(self2);
                onLeft && self2.deltaX < 0 && onLeft(self2);
                onChangeX && onChangeX(self2);
                onToggleX && self2.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self2);
                prevDeltaX = self2.deltaX;
                deltaX[0] = deltaX[1] = deltaX[2] = 0;
              }
              if (changedY) {
                onDown && self2.deltaY > 0 && onDown(self2);
                onUp && self2.deltaY < 0 && onUp(self2);
                onChangeY && onChangeY(self2);
                onToggleY && self2.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self2);
                prevDeltaY = self2.deltaY;
                deltaY[0] = deltaY[1] = deltaY[2] = 0;
              }
              if (moved || dragged) {
                onMove && onMove(self2);
                if (dragged) {
                  onDrag(self2);
                  dragged = false;
                }
                moved = false;
              }
              locked && !(locked = false) && onLockAxis && onLockAxis(self2);
              if (wheeled) {
                onWheel(self2);
                wheeled = false;
              }
              id = 0;
            }, onDelta = function onDelta2(x, y, index) {
              deltaX[index] += x;
              deltaY[index] += y;
              self2._vx.update(x);
              self2._vy.update(y);
              debounce ? id || (id = requestAnimationFrame(update)) : update();
            }, onTouchOrPointerDelta = function onTouchOrPointerDelta2(x, y) {
              if (lockAxis && !axis) {
                self2.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
                locked = true;
              }
              if (axis !== "y") {
                deltaX[2] += x;
                self2._vx.update(x, true);
              }
              if (axis !== "x") {
                deltaY[2] += y;
                self2._vy.update(y, true);
              }
              debounce ? id || (id = requestAnimationFrame(update)) : update();
            }, _onDrag = function _onDrag2(e) {
              if (_ignoreCheck(e, 1)) {
                return;
              }
              e = _getEvent(e, preventDefault);
              var x = e.clientX, y = e.clientY, dx = x - self2.x, dy = y - self2.y, isDragging = self2.isDragging;
              self2.x = x;
              self2.y = y;
              if (isDragging || Math.abs(self2.startX - x) >= dragMinimum || Math.abs(self2.startY - y) >= dragMinimum) {
                onDrag && (dragged = true);
                isDragging || (self2.isDragging = true);
                onTouchOrPointerDelta(dx, dy);
                isDragging || onDragStart && onDragStart(self2);
              }
            }, _onPress = self2.onPress = function(e) {
              if (_ignoreCheck(e, 1) || e && e.button) {
                return;
              }
              self2.axis = axis = null;
              onStopDelayedCall.pause();
              self2.isPressed = true;
              e = _getEvent(e);
              prevDeltaX = prevDeltaY = 0;
              self2.startX = self2.x = e.clientX;
              self2.startY = self2.y = e.clientY;
              self2._vx.reset();
              self2._vy.reset();
              _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, true);
              self2.deltaX = self2.deltaY = 0;
              onPress && onPress(self2);
            }, _onRelease = self2.onRelease = function(e) {
              if (_ignoreCheck(e, 1)) {
                return;
              }
              _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
              var isTrackingDrag = !isNaN(self2.y - self2.startY), wasDragging = self2.isDragging, isDragNotClick = wasDragging && (Math.abs(self2.x - self2.startX) > 3 || Math.abs(self2.y - self2.startY) > 3), eventData = _getEvent(e);
              if (!isDragNotClick && isTrackingDrag) {
                self2._vx.reset();
                self2._vy.reset();
                if (preventDefault && allowClicks) {
                  gsap2.delayedCall(0.08, function() {
                    if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
                      if (e.target.click) {
                        e.target.click();
                      } else if (ownerDoc.createEvent) {
                        var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                        syntheticEvent.initMouseEvent("click", true, true, _win, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                        e.target.dispatchEvent(syntheticEvent);
                      }
                    }
                  });
                }
              }
              self2.isDragging = self2.isGesturing = self2.isPressed = false;
              onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
              onDragEnd && wasDragging && onDragEnd(self2);
              onRelease && onRelease(self2, isDragNotClick);
            }, _onGestureStart = function _onGestureStart2(e) {
              return e.touches && e.touches.length > 1 && (self2.isGesturing = true) && onGestureStart(e, self2.isDragging);
            }, _onGestureEnd = function _onGestureEnd2() {
              return (self2.isGesturing = false) || onGestureEnd(self2);
            }, onScroll = function onScroll2(e) {
              if (_ignoreCheck(e)) {
                return;
              }
              var x = scrollFuncX(), y = scrollFuncY();
              onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
              scrollX = x;
              scrollY = y;
              onStop && onStopDelayedCall.restart(true);
            }, _onWheel = function _onWheel2(e) {
              if (_ignoreCheck(e)) {
                return;
              }
              e = _getEvent(e, preventDefault);
              onWheel && (wheeled = true);
              var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win.innerHeight : 1) * wheelSpeed;
              onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
              onStop && !isNormalizer && onStopDelayedCall.restart(true);
            }, _onMove = function _onMove2(e) {
              if (_ignoreCheck(e)) {
                return;
              }
              var x = e.clientX, y = e.clientY, dx = x - self2.x, dy = y - self2.y;
              self2.x = x;
              self2.y = y;
              moved = true;
              onStop && onStopDelayedCall.restart(true);
              (dx || dy) && onTouchOrPointerDelta(dx, dy);
            }, _onHover = function _onHover2(e) {
              self2.event = e;
              onHover(self2);
            }, _onHoverEnd = function _onHoverEnd2(e) {
              self2.event = e;
              onHoverEnd(self2);
            }, _onClick = function _onClick2(e) {
              return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self2);
            };
            onStopDelayedCall = self2._dc = gsap2.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
            self2.deltaX = self2.deltaY = 0;
            self2._vx = _getVelocityProp(0, 50, true);
            self2._vy = _getVelocityProp(0, 50, true);
            self2.scrollX = scrollFuncX;
            self2.scrollY = scrollFuncY;
            self2.isDragging = self2.isGesturing = self2.isPressed = false;
            _context(this);
            self2.enable = function(e) {
              if (!self2.isEnabled) {
                _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
                type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, passive, capture);
                type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, passive, capture);
                if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
                  _addListener(target, _eventTypes[0], _onPress, passive, capture);
                  _addListener(ownerDoc, _eventTypes[2], _onRelease);
                  _addListener(ownerDoc, _eventTypes[3], _onRelease);
                  allowClicks && _addListener(target, "click", clickCapture, true, true);
                  onClick && _addListener(target, "click", _onClick);
                  onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
                  onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
                  onHover && _addListener(target, _pointerType + "enter", _onHover);
                  onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
                  onMove && _addListener(target, _pointerType + "move", _onMove);
                }
                self2.isEnabled = true;
                e && e.type && _onPress(e);
                onEnable && onEnable(self2);
              }
              return self2;
            };
            self2.disable = function() {
              if (self2.isEnabled) {
                _observers.filter(function(o) {
                  return o !== self2 && _isViewport(o.target);
                }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
                if (self2.isPressed) {
                  self2._vx.reset();
                  self2._vy.reset();
                  _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
                }
                _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
                _removeListener(target, "wheel", _onWheel, capture);
                _removeListener(target, _eventTypes[0], _onPress, capture);
                _removeListener(ownerDoc, _eventTypes[2], _onRelease);
                _removeListener(ownerDoc, _eventTypes[3], _onRelease);
                _removeListener(target, "click", clickCapture, true);
                _removeListener(target, "click", _onClick);
                _removeListener(ownerDoc, "gesturestart", _onGestureStart);
                _removeListener(ownerDoc, "gestureend", _onGestureEnd);
                _removeListener(target, _pointerType + "enter", _onHover);
                _removeListener(target, _pointerType + "leave", _onHoverEnd);
                _removeListener(target, _pointerType + "move", _onMove);
                self2.isEnabled = self2.isPressed = self2.isDragging = false;
                onDisable && onDisable(self2);
              }
            };
            self2.kill = self2.revert = function() {
              self2.disable();
              var i = _observers.indexOf(self2);
              i >= 0 && _observers.splice(i, 1);
              _normalizer === self2 && (_normalizer = 0);
            };
            _observers.push(self2);
            isNormalizer && _isViewport(target) && (_normalizer = self2);
            self2.enable(event);
          };
          _createClass(Observer3, [{
            key: "velocityX",
            get: function get() {
              return this._vx.getVelocity();
            }
          }, {
            key: "velocityY",
            get: function get() {
              return this._vy.getVelocity();
            }
          }]);
          return Observer3;
        }();
        Observer2.version = "3.12.5";
        Observer2.create = function(vars) {
          return new Observer2(vars);
        };
        Observer2.register = _initCore;
        Observer2.getAll = function() {
          return _observers.slice();
        };
        Observer2.getById = function(id) {
          return _observers.filter(function(o) {
            return o.vars.id === id;
          })[0];
        };
        _getGSAP() && gsap2.registerPlugin(Observer2);
        var gsap$1, _coreInitted$1, _win$1, _doc$1, _docEl$1, _body$1, _root$1, _resizeDelay, _toArray, _clamp$1, _time2, _syncInterval, _refreshing, _pointerIsDown, _transformProp, _i, _prevWidth, _prevHeight, _autoRefresh, _sort, _suppressOverwrites, _ignoreResize, _normalizer$1, _ignoreMobileResize, _baseScreenHeight, _baseScreenWidth, _fixIOSBug, _context$1, _scrollRestoration, _div100vh, _100vh, _isReverted, _clampingMax, _limitCallbacks, _startup$1 = 1, _getTime$1 = Date.now, _time1 = _getTime$1(), _lastScrollTime = 0, _enabled = 0, _parseClamp = function _parseClamp2(value, type, self2) {
          var clamp = _isString(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
          self2["_" + type + "Clamp"] = clamp;
          return clamp ? value.substr(6, value.length - 7) : value;
        }, _keepClamp = function _keepClamp2(value, clamp) {
          return clamp && (!_isString(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
        }, _rafBugFix = function _rafBugFix2() {
          return _enabled && requestAnimationFrame(_rafBugFix2);
        }, _pointerDownHandler = function _pointerDownHandler2() {
          return _pointerIsDown = 1;
        }, _pointerUpHandler = function _pointerUpHandler2() {
          return _pointerIsDown = 0;
        }, _passThrough = function _passThrough2(v) {
          return v;
        }, _round = function _round2(value) {
          return Math.round(value * 1e5) / 1e5 || 0;
        }, _windowExists = function _windowExists2() {
          return typeof window !== "undefined";
        }, _getGSAP$1 = function _getGSAP2() {
          return gsap$1 || _windowExists() && (gsap$1 = window.gsap) && gsap$1.registerPlugin && gsap$1;
        }, _isViewport$1 = function _isViewport2(e) {
          return !!~_root$1.indexOf(e);
        }, _getViewportDimension = function _getViewportDimension2(dimensionProperty) {
          return (dimensionProperty === "Height" ? _100vh : _win$1["inner" + dimensionProperty]) || _docEl$1["client" + dimensionProperty] || _body$1["client" + dimensionProperty];
        }, _getBoundsFunc = function _getBoundsFunc2(element) {
          return _getProxyProp(element, "getBoundingClientRect") || (_isViewport$1(element) ? function() {
            _winOffsets.width = _win$1.innerWidth;
            _winOffsets.height = _100vh;
            return _winOffsets;
          } : function() {
            return _getBounds(element);
          });
        }, _getSizeFunc = function _getSizeFunc2(scroller, isViewport, _ref) {
          var d = _ref.d, d2 = _ref.d2, a = _ref.a;
          return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
            return a()[d];
          } : function() {
            return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
          };
        }, _getOffsetsFunc = function _getOffsetsFunc2(element, isViewport) {
          return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
            return _winOffsets;
          };
        }, _maxScroll = function _maxScroll2(element, _ref2) {
          var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
          return Math.max(0, (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport$1(element) ? (_docEl$1[s] || _body$1[s]) - _getViewportDimension(d2) : element[s] - element["offset" + d2]);
        }, _iterateAutoRefresh = function _iterateAutoRefresh2(func, events) {
          for (var i = 0; i < _autoRefresh.length; i += 3) {
            (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
          }
        }, _isString = function _isString2(value) {
          return typeof value === "string";
        }, _isFunction = function _isFunction2(value) {
          return typeof value === "function";
        }, _isNumber = function _isNumber2(value) {
          return typeof value === "number";
        }, _isObject = function _isObject2(value) {
          return typeof value === "object";
        }, _endAnimation = function _endAnimation2(animation, reversed, pause) {
          return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
        }, _callback = function _callback2(self2, func) {
          if (self2.enabled) {
            var result = self2._ctx ? self2._ctx.add(function() {
              return func(self2);
            }) : func(self2);
            result && result.totalTime && (self2.callbackAnimation = result);
          }
        }, _abs = Math.abs, _left = "left", _top = "top", _right = "right", _bottom = "bottom", _width = "width", _height = "height", _Right = "Right", _Left = "Left", _Top = "Top", _Bottom = "Bottom", _padding = "padding", _margin = "margin", _Width = "Width", _Height = "Height", _px = "px", _getComputedStyle = function _getComputedStyle2(element) {
          return _win$1.getComputedStyle(element);
        }, _makePositionable = function _makePositionable2(element) {
          var position = _getComputedStyle(element).position;
          element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
        }, _setDefaults = function _setDefaults2(obj, defaults) {
          for (var p in defaults) {
            p in obj || (obj[p] = defaults[p]);
          }
          return obj;
        }, _getBounds = function _getBounds2(element, withoutTransforms) {
          var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap$1.to(element, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
          }).progress(1), bounds = element.getBoundingClientRect();
          tween && tween.progress(0).kill();
          return bounds;
        }, _getSize = function _getSize2(element, _ref3) {
          var d2 = _ref3.d2;
          return element["offset" + d2] || element["client" + d2] || 0;
        }, _getLabelRatioArray = function _getLabelRatioArray2(timeline) {
          var a = [], labels = timeline.labels, duration = timeline.duration(), p;
          for (p in labels) {
            a.push(labels[p] / duration);
          }
          return a;
        }, _getClosestLabel = function _getClosestLabel2(animation) {
          return function(value) {
            return gsap$1.utils.snap(_getLabelRatioArray(animation), value);
          };
        }, _snapDirectional = function _snapDirectional2(snapIncrementOrArray) {
          var snap = gsap$1.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a2, b) {
            return a2 - b;
          });
          return a ? function(value, direction, threshold) {
            if (threshold === void 0) {
              threshold = 1e-3;
            }
            var i;
            if (!direction) {
              return snap(value);
            }
            if (direction > 0) {
              value -= threshold;
              for (i = 0; i < a.length; i++) {
                if (a[i] >= value) {
                  return a[i];
                }
              }
              return a[i - 1];
            } else {
              i = a.length;
              value += threshold;
              while (i--) {
                if (a[i] <= value) {
                  return a[i];
                }
              }
            }
            return a[0];
          } : function(value, direction, threshold) {
            if (threshold === void 0) {
              threshold = 1e-3;
            }
            var snapped = snap(value);
            return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
          };
        }, _getLabelAtDirection = function _getLabelAtDirection2(timeline) {
          return function(value, st) {
            return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
          };
        }, _multiListener = function _multiListener2(func, element, types, callback) {
          return types.split(",").forEach(function(type) {
            return func(element, type, callback);
          });
        }, _addListener$1 = function _addListener2(element, type, func, nonPassive, capture) {
          return element.addEventListener(type, func, {
            passive: !nonPassive,
            capture: !!capture
          });
        }, _removeListener$1 = function _removeListener2(element, type, func, capture) {
          return element.removeEventListener(type, func, !!capture);
        }, _wheelListener = function _wheelListener2(func, el, scrollFunc) {
          scrollFunc = scrollFunc && scrollFunc.wheelHandler;
          if (scrollFunc) {
            func(el, "wheel", scrollFunc);
            func(el, "touchmove", scrollFunc);
          }
        }, _markerDefaults = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        }, _defaults = {
          toggleActions: "play",
          anticipatePin: 0
        }, _keywords = {
          top: 0,
          left: 0,
          center: 0.5,
          bottom: 1,
          right: 1
        }, _offsetToPx = function _offsetToPx2(value, size) {
          if (_isString(value)) {
            var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
            if (~eqIndex) {
              value.indexOf("%") > eqIndex && (relative *= size / 100);
              value = value.substr(0, eqIndex - 1);
            }
            value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
          }
          return value;
        }, _createMarker = function _createMarker2(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
          var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
          var e = _doc$1.createElement("div"), useFixedPosition = _isViewport$1(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body$1 : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
          (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
          matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
          e._isStart = isStart;
          e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
          e.style.cssText = css;
          e.innerText = name || name === 0 ? type + "-" + name : type;
          parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
          e._offset = e["offset" + direction.op.d2];
          _positionMarker(e, 0, direction, isStart);
          return e;
        }, _positionMarker = function _positionMarker2(marker, start, direction, flipped) {
          var vars = {
            display: "block"
          }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
          marker._isFlipped = flipped;
          vars[direction.a + "Percent"] = flipped ? -100 : 0;
          vars[direction.a] = flipped ? "1px" : 0;
          vars["border" + side + _Width] = 1;
          vars["border" + oppositeSide + _Width] = 0;
          vars[direction.p] = start + "px";
          gsap$1.set(marker, vars);
        }, _triggers = [], _ids = {}, _rafID, _sync = function _sync2() {
          return _getTime$1() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
        }, _onScroll$1 = function _onScroll2() {
          if (!_normalizer$1 || !_normalizer$1.isPressed || _normalizer$1.startX > _body$1.clientWidth) {
            _scrollers.cache++;
            if (_normalizer$1) {
              _rafID || (_rafID = requestAnimationFrame(_updateAll));
            } else {
              _updateAll();
            }
            _lastScrollTime || _dispatch("scrollStart");
            _lastScrollTime = _getTime$1();
          }
        }, _setBaseDimensions = function _setBaseDimensions2() {
          _baseScreenWidth = _win$1.innerWidth;
          _baseScreenHeight = _win$1.innerHeight;
        }, _onResize = function _onResize2() {
          _scrollers.cache++;
          !_refreshing && !_ignoreResize && !_doc$1.fullscreenElement && !_doc$1.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win$1.innerWidth || Math.abs(_win$1.innerHeight - _baseScreenHeight) > _win$1.innerHeight * 0.25) && _resizeDelay.restart(true);
        }, _listeners = {}, _emptyArray = [], _softRefresh = function _softRefresh2() {
          return _removeListener$1(ScrollTrigger$1, "scrollEnd", _softRefresh2) || _refreshAll(true);
        }, _dispatch = function _dispatch2(type) {
          return _listeners[type] && _listeners[type].map(function(f) {
            return f();
          }) || _emptyArray;
        }, _savedStyles = [], _revertRecorded = function _revertRecorded2(media) {
          for (var i = 0; i < _savedStyles.length; i += 5) {
            if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
              _savedStyles[i].style.cssText = _savedStyles[i + 1];
              _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
              _savedStyles[i + 3].uncache = 1;
            }
          }
        }, _revertAll = function _revertAll2(kill, media) {
          var trigger;
          for (_i = 0; _i < _triggers.length; _i++) {
            trigger = _triggers[_i];
            if (trigger && (!media || trigger._ctx === media)) {
              if (kill) {
                trigger.kill(1);
              } else {
                trigger.revert(true, true);
              }
            }
          }
          _isReverted = true;
          media && _revertRecorded(media);
          media || _dispatch("revert");
        }, _clearScrollMemory = function _clearScrollMemory2(scrollRestoration, force) {
          _scrollers.cache++;
          (force || !_refreshingAll) && _scrollers.forEach(function(obj) {
            return _isFunction(obj) && obj.cacheID++ && (obj.rec = 0);
          });
          _isString(scrollRestoration) && (_win$1.history.scrollRestoration = _scrollRestoration = scrollRestoration);
        }, _refreshingAll, _refreshID = 0, _queueRefreshID, _queueRefreshAll = function _queueRefreshAll2() {
          if (_queueRefreshID !== _refreshID) {
            var id = _queueRefreshID = _refreshID;
            requestAnimationFrame(function() {
              return id === _refreshID && _refreshAll(true);
            });
          }
        }, _refresh100vh = function _refresh100vh2() {
          _body$1.appendChild(_div100vh);
          _100vh = !_normalizer$1 && _div100vh.offsetHeight || _win$1.innerHeight;
          _body$1.removeChild(_div100vh);
        }, _hideAllMarkers = function _hideAllMarkers2(hide) {
          return _toArray(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(el) {
            return el.style.display = hide ? "none" : "block";
          });
        }, _refreshAll = function _refreshAll2(force, skipRevert) {
          if (_lastScrollTime && !force && !_isReverted) {
            _addListener$1(ScrollTrigger$1, "scrollEnd", _softRefresh);
            return;
          }
          _refresh100vh();
          _refreshingAll = ScrollTrigger$1.isRefreshing = true;
          _scrollers.forEach(function(obj) {
            return _isFunction(obj) && ++obj.cacheID && (obj.rec = obj());
          });
          var refreshInits = _dispatch("refreshInit");
          _sort && ScrollTrigger$1.sort();
          skipRevert || _revertAll();
          _scrollers.forEach(function(obj) {
            if (_isFunction(obj)) {
              obj.smooth && (obj.target.style.scrollBehavior = "auto");
              obj(0);
            }
          });
          _triggers.slice(0).forEach(function(t) {
            return t.refresh();
          });
          _isReverted = false;
          _triggers.forEach(function(t) {
            if (t._subPinOffset && t.pin) {
              var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t.pin[prop];
              t.revert(true, 1);
              t.adjustPinSpacing(t.pin[prop] - original);
              t.refresh();
            }
          });
          _clampingMax = 1;
          _hideAllMarkers(true);
          _triggers.forEach(function(t) {
            var max = _maxScroll(t.scroller, t._dir), endClamp = t.vars.end === "max" || t._endClamp && t.end > max, startClamp = t._startClamp && t.start >= max;
            (endClamp || startClamp) && t.setPositions(startClamp ? max - 1 : t.start, endClamp ? Math.max(startClamp ? max : t.start + 1, max) : t.end, true);
          });
          _hideAllMarkers(false);
          _clampingMax = 0;
          refreshInits.forEach(function(result) {
            return result && result.render && result.render(-1);
          });
          _scrollers.forEach(function(obj) {
            if (_isFunction(obj)) {
              obj.smooth && requestAnimationFrame(function() {
                return obj.target.style.scrollBehavior = "smooth";
              });
              obj.rec && obj(obj.rec);
            }
          });
          _clearScrollMemory(_scrollRestoration, 1);
          _resizeDelay.pause();
          _refreshID++;
          _refreshingAll = 2;
          _updateAll(2);
          _triggers.forEach(function(t) {
            return _isFunction(t.vars.onRefresh) && t.vars.onRefresh(t);
          });
          _refreshingAll = ScrollTrigger$1.isRefreshing = false;
          _dispatch("refresh");
        }, _lastScroll = 0, _direction = 1, _primary, _updateAll = function _updateAll2(force) {
          if (force === 2 || !_refreshingAll && !_isReverted) {
            ScrollTrigger$1.isUpdating = true;
            _primary && _primary.update(0);
            var l = _triggers.length, time = _getTime$1(), recordVelocity = time - _time1 >= 50, scroll = l && _triggers[0].scroll();
            _direction = _lastScroll > scroll ? -1 : 1;
            _refreshingAll || (_lastScroll = scroll);
            if (recordVelocity) {
              if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
                _lastScrollTime = 0;
                _dispatch("scrollEnd");
              }
              _time2 = _time1;
              _time1 = time;
            }
            if (_direction < 0) {
              _i = l;
              while (_i-- > 0) {
                _triggers[_i] && _triggers[_i].update(0, recordVelocity);
              }
              _direction = 1;
            } else {
              for (_i = 0; _i < l; _i++) {
                _triggers[_i] && _triggers[_i].update(0, recordVelocity);
              }
            }
            ScrollTrigger$1.isUpdating = false;
          }
          _rafID = 0;
        }, _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]), _swapPinOut = function _swapPinOut2(pin, spacer, state) {
          _setState(state);
          var cache = pin._gsap;
          if (cache.spacerIsNative) {
            _setState(cache.spacerState);
          } else if (pin._gsap.swappedIn) {
            var parent = spacer.parentNode;
            if (parent) {
              parent.insertBefore(pin, spacer);
              parent.removeChild(spacer);
            }
          }
          pin._gsap.swappedIn = false;
        }, _swapPinIn = function _swapPinIn2(pin, spacer, cs, spacerState) {
          if (!pin._gsap.swappedIn) {
            var i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
            while (i--) {
              p = _propNamesToCopy[i];
              spacerStyle[p] = cs[p];
            }
            spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
            cs.display === "inline" && (spacerStyle.display = "inline-block");
            pinStyle[_bottom] = pinStyle[_right] = "auto";
            spacerStyle.flexBasis = cs.flexBasis || "auto";
            spacerStyle.overflow = "visible";
            spacerStyle.boxSizing = "border-box";
            spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
            spacerStyle[_height] = _getSize(pin, _vertical) + _px;
            spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
            _setState(spacerState);
            pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
            pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
            pinStyle[_padding] = cs[_padding];
            if (pin.parentNode !== spacer) {
              pin.parentNode.insertBefore(spacer, pin);
              spacer.appendChild(pin);
            }
            pin._gsap.swappedIn = true;
          }
        }, _capsExp = /([A-Z])/g, _setState = function _setState2(state) {
          if (state) {
            var style = state.t.style, l = state.length, i = 0, p, value;
            (state.t._gsap || gsap$1.core.getCache(state.t)).uncache = 1;
            for (; i < l; i += 2) {
              value = state[i + 1];
              p = state[i];
              if (value) {
                style[p] = value;
              } else if (style[p]) {
                style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
              }
            }
          }
        }, _getState = function _getState2(element) {
          var l = _stateProps.length, style = element.style, state = [], i = 0;
          for (; i < l; i++) {
            state.push(_stateProps[i], style[_stateProps[i]]);
          }
          state.t = element;
          return state;
        }, _copyState = function _copyState2(state, override, omitOffsets) {
          var result = [], l = state.length, i = omitOffsets ? 8 : 0, p;
          for (; i < l; i += 2) {
            p = state[i];
            result.push(p, p in override ? override[p] : state[i + 1]);
          }
          result.t = state.t;
          return result;
        }, _winOffsets = {
          left: 0,
          top: 0
        }, _parsePosition = function _parsePosition2(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self2, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
          _isFunction(value) && (value = value(self2));
          if (_isString(value) && value.substr(0, 3) === "max") {
            value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
          }
          var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
          containerAnimation && containerAnimation.seek(0);
          isNaN(value) || (value = +value);
          if (!_isNumber(value)) {
            _isFunction(trigger) && (trigger = trigger(self2));
            var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display;
            element = _getTarget(trigger, self2) || _body$1;
            bounds = _getBounds(element) || {};
            if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
              display = element.style.display;
              element.style.display = "block";
              bounds = _getBounds(element);
              display ? element.style.display = display : element.style.removeProperty("display");
            }
            localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
            globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
            value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
            markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
            scrollerSize -= scrollerSize - globalOffset;
          } else {
            containerAnimation && (value = gsap$1.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
            markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
          }
          if (clampZeroProp) {
            self2[clampZeroProp] = value || -1e-3;
            value < 0 && (value = 0);
          }
          if (marker) {
            var position = value + scrollerSize, isStart = marker._isStart;
            p1 = "scroll" + direction.d2;
            _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body$1[p1], _docEl$1[p1]) : marker.parentNode[p1]) <= position + 1);
            if (useFixedPosition) {
              scrollerBounds = _getBounds(markerScroller);
              useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
            }
          }
          if (containerAnimation && element) {
            p1 = _getBounds(element);
            containerAnimation.seek(scrollerMax);
            p2 = _getBounds(element);
            containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
            value = value / containerAnimation._caScrollDist * scrollerMax;
          }
          containerAnimation && containerAnimation.seek(time);
          return containerAnimation ? value : Math.round(value);
        }, _prefixExp = /(webkit|moz|length|cssText|inset)/i, _reparent = function _reparent2(element, parent, top, left) {
          if (element.parentNode !== parent) {
            var style = element.style, p, cs;
            if (parent === _body$1) {
              element._stOrig = style.cssText;
              cs = _getComputedStyle(element);
              for (p in cs) {
                if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
                  style[p] = cs[p];
                }
              }
              style.top = top;
              style.left = left;
            } else {
              style.cssText = element._stOrig;
            }
            gsap$1.core.getCache(element).uncache = 1;
            parent.appendChild(element);
          }
        }, _interruptionTracker = function _interruptionTracker2(getValueFunc, initialValue, onInterrupt) {
          var last1 = initialValue, last2 = last1;
          return function(value) {
            var current = Math.round(getValueFunc());
            if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
              value = current;
              onInterrupt && onInterrupt();
            }
            last2 = last1;
            last1 = value;
            return value;
          };
        }, _shiftMarker = function _shiftMarker2(marker, direction, value) {
          var vars = {};
          vars[direction.p] = "+=" + value;
          gsap$1.set(marker, vars);
        }, _getTweenCreator = function _getTweenCreator2(scroller, direction) {
          var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, getTween = function getTween2(scrollTo, vars, initialValue, change1, change2) {
            var tween = getTween2.tween, onComplete = vars.onComplete, modifiers = {};
            initialValue = initialValue || getScroll();
            var checkForInterruption = _interruptionTracker(getScroll, initialValue, function() {
              tween.kill();
              getTween2.tween = 0;
            });
            change2 = change1 && change2 || 0;
            change1 = change1 || scrollTo - initialValue;
            tween && tween.kill();
            vars[prop] = scrollTo;
            vars.inherit = false;
            vars.modifiers = modifiers;
            modifiers[prop] = function() {
              return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
            };
            vars.onUpdate = function() {
              _scrollers.cache++;
              getTween2.tween && _updateAll();
            };
            vars.onComplete = function() {
              getTween2.tween = 0;
              onComplete && onComplete.call(tween);
            };
            tween = getTween2.tween = gsap$1.to(scroller, vars);
            return tween;
          };
          scroller[prop] = getScroll;
          getScroll.wheelHandler = function() {
            return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
          };
          _addListener$1(scroller, "wheel", getScroll.wheelHandler);
          ScrollTrigger$1.isTouch && _addListener$1(scroller, "touchmove", getScroll.wheelHandler);
          return getTween;
        };
        var ScrollTrigger$1 = function() {
          function ScrollTrigger3(vars, animation) {
            _coreInitted$1 || ScrollTrigger3.register(gsap$1) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
            _context$1(this);
            this.init(vars, animation);
          }
          var _proto = ScrollTrigger3.prototype;
          _proto.init = function init(vars, animation) {
            this.progress = this.start = 0;
            this.vars && this.kill(true, true);
            if (!_enabled) {
              this.update = this.refresh = this.kill = _passThrough;
              return;
            }
            vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
              trigger: vars
            } : vars, _defaults);
            var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win$1), scrollerCache = gsap$1.core.getCache(scroller), isViewport = _isViewport$1(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self2 = this, onRefreshInit = vars.onRefreshInit && function() {
              return vars.onRefreshInit(self2);
            }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, prevProgress = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, executingOnRefresh, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap2, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
            self2._startClamp = self2._endClamp = false;
            self2._dir = direction;
            anticipatePin *= 45;
            self2.scroller = scroller;
            self2.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
            scroll1 = scrollFunc();
            self2.vars = vars;
            animation = animation || vars.animation;
            if ("refreshPriority" in vars) {
              _sort = 1;
              vars.refreshPriority === -9999 && (_primary = self2);
            }
            scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
              top: _getTweenCreator(scroller, _vertical),
              left: _getTweenCreator(scroller, _horizontal)
            };
            self2.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
            self2.scrubDuration = function(value) {
              scrubSmooth = _isNumber(value) && value;
              if (!scrubSmooth) {
                scrubTween && scrubTween.progress(1).kill();
                scrubTween = 0;
              } else {
                scrubTween ? scrubTween.duration(value) : scrubTween = gsap$1.to(animation, {
                  ease: "expo",
                  totalProgress: "+=0",
                  inherit: false,
                  duration: scrubSmooth,
                  paused: true,
                  onComplete: function onComplete() {
                    return onScrubComplete && onScrubComplete(self2);
                  }
                });
              }
            };
            if (animation) {
              animation.vars.lazy = false;
              animation._initted && !self2.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
              self2.animation = animation.pause();
              animation.scrollTrigger = self2;
              self2.scrubDuration(scrub);
              snap1 = 0;
              id || (id = animation.vars.id);
            }
            if (snap) {
              if (!_isObject(snap) || snap.push) {
                snap = {
                  snapTo: snap
                };
              }
              "scrollBehavior" in _body$1.style && gsap$1.set(isViewport ? [_body$1, _docEl$1] : scroller, {
                scrollBehavior: "auto"
              });
              _scrollers.forEach(function(o) {
                return _isFunction(o) && o.target === (isViewport ? _doc$1.scrollingElement || _docEl$1 : scroller) && (o.smooth = false);
              });
              snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function(value, st) {
                return _snapDirectional(snap.snapTo)(value, _getTime$1() - lastRefresh < 500 ? 0 : st.direction);
              } : gsap$1.utils.snap(snap.snapTo);
              snapDurClamp = snap.duration || {
                min: 0.1,
                max: 2
              };
              snapDurClamp = _isObject(snapDurClamp) ? _clamp$1(snapDurClamp.min, snapDurClamp.max) : _clamp$1(snapDurClamp, snapDurClamp);
              snapDelayedCall = gsap$1.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function() {
                var scroll = scrollFunc(), refreshedRecently = _getTime$1() - lastRefresh < 500, tween = tweenTo.tween;
                if ((refreshedRecently || Math.abs(self2.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
                  var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime$1() - _time2) * 1e3 || 0, change1 = gsap$1.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap.inertia === false ? 0 : change1), endValue, endScroll, _snap = snap, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
                  endValue = snapFunc(naturalEnd, self2);
                  _isNumber(endValue) || (endValue = naturalEnd);
                  endScroll = Math.round(start + endValue * change);
                  if (scroll <= end && scroll >= start && endScroll !== scroll) {
                    if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
                      return;
                    }
                    if (snap.inertia === false) {
                      change1 = endValue - progress;
                    }
                    tweenTo(endScroll, {
                      duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                      ease: snap.ease || "power3",
                      data: _abs(endScroll - scroll),
                      onInterrupt: function onInterrupt() {
                        return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self2);
                      },
                      onComplete: function onComplete() {
                        self2.update();
                        lastSnap = scrollFunc();
                        if (animation) {
                          scrubTween ? scrubTween.resetTo("totalProgress", endValue, animation._tTime / animation._tDur) : animation.progress(endValue);
                        }
                        snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self2.progress;
                        onSnapComplete && onSnapComplete(self2);
                        _onComplete && _onComplete(self2);
                      }
                    }, scroll, change1 * change, endScroll - scroll - change1 * change);
                    onStart && onStart(self2, tweenTo.tween);
                  }
                } else if (self2.isActive && lastSnap !== scroll) {
                  snapDelayedCall.restart(true);
                }
              }).pause();
            }
            id && (_ids[id] = self2);
            trigger = self2.trigger = _getTarget(trigger || pin !== true && pin);
            customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
            customRevertReturn && (customRevertReturn = customRevertReturn(self2));
            pin = pin === true ? trigger : _getTarget(pin);
            _isString(toggleClass) && (toggleClass = {
              targets: trigger,
              className: toggleClass
            });
            if (pin) {
              pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
              self2.pin = pin;
              pinCache = gsap$1.core.getCache(pin);
              if (!pinCache.spacer) {
                if (pinSpacer) {
                  pinSpacer = _getTarget(pinSpacer);
                  pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
                  pinCache.spacerIsNative = !!pinSpacer;
                  pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
                }
                pinCache.spacer = spacer = pinSpacer || _doc$1.createElement("div");
                spacer.classList.add("pin-spacer");
                id && spacer.classList.add("pin-spacer-" + id);
                pinCache.pinState = pinOriginalState = _getState(pin);
              } else {
                pinOriginalState = pinCache.pinState;
              }
              vars.force3D !== false && gsap$1.set(pin, {
                force3D: true
              });
              self2.spacer = spacer = pinCache.spacer;
              cs = _getComputedStyle(pin);
              spacingStart = cs[pinSpacing + direction.os2];
              pinGetter = gsap$1.getProperty(pin);
              pinSetter = gsap$1.quickSetter(pin, direction.a, _px);
              _swapPinIn(pin, spacer, cs);
              pinState = _getState(pin);
            }
            if (markers) {
              markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
              markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
              markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
              offset = markerStartTrigger["offset" + direction.op.d2];
              var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
              markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
              markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
              containerAnimation && (caMarkerSetter = gsap$1.quickSetter([markerStart, markerEnd], direction.a, _px));
              if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
                _makePositionable(isViewport ? _body$1 : scroller);
                gsap$1.set([markerStartTrigger, markerEndTrigger], {
                  force3D: true
                });
                markerStartSetter = gsap$1.quickSetter(markerStartTrigger, direction.a, _px);
                markerEndSetter = gsap$1.quickSetter(markerEndTrigger, direction.a, _px);
              }
            }
            if (containerAnimation) {
              var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
              containerAnimation.eventCallback("onUpdate", function() {
                self2.update(0, 0, 1);
                oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
              });
            }
            self2.previous = function() {
              return _triggers[_triggers.indexOf(self2) - 1];
            };
            self2.next = function() {
              return _triggers[_triggers.indexOf(self2) + 1];
            };
            self2.revert = function(revert, temp) {
              if (!temp) {
                return self2.kill(true);
              }
              var r = revert !== false || !self2.enabled, prevRefreshing = _refreshing;
              if (r !== self2.isReverted) {
                if (r) {
                  prevScroll = Math.max(scrollFunc(), self2.scroll.rec || 0);
                  prevProgress = self2.progress;
                  prevAnimProgress = animation && animation.progress();
                }
                markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
                  return m.style.display = r ? "none" : "block";
                });
                if (r) {
                  _refreshing = self2;
                  self2.update(r);
                }
                if (pin && (!pinReparent || !self2.isActive)) {
                  if (r) {
                    _swapPinOut(pin, spacer, pinOriginalState);
                  } else {
                    _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
                  }
                }
                r || self2.update(r);
                _refreshing = prevRefreshing;
                self2.isReverted = r;
              }
            };
            self2.refresh = function(soft, force, position, pinOffset) {
              if ((_refreshing || !self2.enabled) && !force) {
                return;
              }
              if (pin && soft && _lastScrollTime) {
                _addListener$1(ScrollTrigger3, "scrollEnd", _softRefresh);
                return;
              }
              !_refreshingAll && onRefreshInit && onRefreshInit(self2);
              _refreshing = self2;
              if (tweenTo.tween && !position) {
                tweenTo.tween.kill();
                tweenTo.tween = 0;
              }
              scrubTween && scrubTween.pause();
              invalidateOnRefresh && animation && animation.revert({
                kill: false
              }).invalidate();
              self2.isReverted || self2.revert(true, true);
              self2._subPinOffset = false;
              var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), isFirstRefresh = change <= 0.01, offset2 = 0, otherPinOffset = pinOffset || 0, parsedEnd = _isObject(position) ? position.end : vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = _isObject(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self2.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer, self2), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self2)) || 0, i = triggerIndex, cs2, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, markerStartOffset, markerEndOffset;
              if (markers && _isObject(position)) {
                markerStartOffset = gsap$1.getProperty(markerStartTrigger, direction.p);
                markerEndOffset = gsap$1.getProperty(markerEndTrigger, direction.p);
              }
              while (i--) {
                curTrigger = _triggers[i];
                curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self2);
                curPin = curTrigger.pin;
                if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
                  revertedPins || (revertedPins = []);
                  revertedPins.unshift(curTrigger);
                  curTrigger.revert(true, true);
                }
                if (curTrigger !== _triggers[i]) {
                  triggerIndex--;
                  i--;
                }
              }
              _isFunction(parsedStart) && (parsedStart = parsedStart(self2));
              parsedStart = _parseClamp(parsedStart, "start", self2);
              start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self2._startClamp && "_startClamp") || (pin ? -1e-3 : 0);
              _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self2));
              if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
                if (~parsedEnd.indexOf(" ")) {
                  parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
                } else {
                  offset2 = _offsetToPx(parsedEnd.substr(2), size);
                  parsedEnd = _isString(parsedStart) ? parsedStart : (containerAnimation ? gsap$1.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset2;
                  parsedEndTrigger = trigger;
                }
              }
              parsedEnd = _parseClamp(parsedEnd, "end", self2);
              end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset2, markerEnd, markerEndTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self2._endClamp && "_endClamp")) || -1e-3;
              offset2 = 0;
              i = triggerIndex;
              while (i--) {
                curTrigger = _triggers[i];
                curPin = curTrigger.pin;
                if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
                  cs2 = curTrigger.end - (self2._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);
                  if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
                    offset2 += cs2 * (1 - curTrigger.progress);
                  }
                  curPin === pin && (otherPinOffset += cs2);
                }
              }
              start += offset2;
              end += offset2;
              self2._startClamp && (self2._startClamp += offset2);
              if (self2._endClamp && !_refreshingAll) {
                self2._endClamp = end || -1e-3;
                end = Math.min(end, _maxScroll(scroller, direction));
              }
              change = end - start || (start -= 0.01) && 1e-3;
              if (isFirstRefresh) {
                prevProgress = gsap$1.utils.clamp(0, 1, gsap$1.utils.normalize(start, end, prevScroll));
              }
              self2._pinPush = otherPinOffset;
              if (markerStart && offset2) {
                cs2 = {};
                cs2[direction.a] = "+=" + offset2;
                pinnedContainer && (cs2[direction.p] = "-=" + scrollFunc());
                gsap$1.set([markerStart, markerEnd], cs2);
              }
              if (pin && !(_clampingMax && self2.end >= _maxScroll(scroller, direction))) {
                cs2 = _getComputedStyle(pin);
                isVertical = direction === _vertical;
                scroll = scrollFunc();
                pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
                if (!max && end > 1) {
                  forcedOverflow = (isViewport ? _doc$1.scrollingElement || _docEl$1 : scroller).style;
                  forcedOverflow = {
                    style: forcedOverflow,
                    value: forcedOverflow["overflow" + direction.a.toUpperCase()]
                  };
                  if (isViewport && _getComputedStyle(_body$1)["overflow" + direction.a.toUpperCase()] !== "scroll") {
                    forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
                  }
                }
                _swapPinIn(pin, spacer, cs2);
                pinState = _getState(pin);
                bounds = _getBounds(pin, true);
                oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
                if (pinSpacing) {
                  spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
                  spacerState.t = spacer;
                  i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
                  if (i) {
                    spacerState.push(direction.d, i + _px);
                    spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
                  }
                  _setState(spacerState);
                  if (pinnedContainer) {
                    _triggers.forEach(function(t) {
                      if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) {
                        t._subPinOffset = true;
                      }
                    });
                  }
                  useFixedPosition && scrollFunc(prevScroll);
                } else {
                  i = _getSize(pin, direction);
                  i && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
                }
                if (useFixedPosition) {
                  override = {
                    top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
                    left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
                    boxSizing: "border-box",
                    position: "fixed"
                  };
                  override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
                  override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
                  override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
                  override[_padding] = cs2[_padding];
                  override[_padding + _Top] = cs2[_padding + _Top];
                  override[_padding + _Right] = cs2[_padding + _Right];
                  override[_padding + _Bottom] = cs2[_padding + _Bottom];
                  override[_padding + _Left] = cs2[_padding + _Left];
                  pinActiveState = _copyState(pinOriginalState, override, pinReparent);
                  _refreshingAll && scrollFunc(0);
                }
                if (animation) {
                  initted = animation._initted;
                  _suppressOverwrites(1);
                  animation.render(animation.duration(), true, true);
                  pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
                  pinMoves = Math.abs(change - pinChange) > 1;
                  useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2);
                  animation.render(0, true, true);
                  initted || animation.invalidate(true);
                  animation.parent || animation.totalTime(animation.totalTime());
                  _suppressOverwrites(0);
                } else {
                  pinChange = change;
                }
                forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
              } else if (trigger && scrollFunc() && !containerAnimation) {
                bounds = trigger.parentNode;
                while (bounds && bounds !== _body$1) {
                  if (bounds._pinOffset) {
                    start -= bounds._pinOffset;
                    end -= bounds._pinOffset;
                  }
                  bounds = bounds.parentNode;
                }
              }
              revertedPins && revertedPins.forEach(function(t) {
                return t.revert(false, true);
              });
              self2.start = start;
              self2.end = end;
              scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();
              if (!containerAnimation && !_refreshingAll) {
                scroll1 < prevScroll && scrollFunc(prevScroll);
                self2.scroll.rec = 0;
              }
              self2.revert(false, true);
              lastRefresh = _getTime$1();
              if (snapDelayedCall) {
                lastSnap = -1;
                snapDelayedCall.restart(true);
              }
              _refreshing = 0;
              animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true);
              if (isFirstRefresh || prevProgress !== self2.progress || containerAnimation || invalidateOnRefresh) {
                animation && !isToggle && animation.totalProgress(containerAnimation && start < -1e-3 && !prevProgress ? gsap$1.utils.normalize(start, end, 0) : prevProgress, true);
                self2.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
              }
              pin && pinSpacing && (spacer._pinOffset = Math.round(self2.progress * pinChange));
              scrubTween && scrubTween.invalidate();
              if (!isNaN(markerStartOffset)) {
                markerStartOffset -= gsap$1.getProperty(markerStartTrigger, direction.p);
                markerEndOffset -= gsap$1.getProperty(markerEndTrigger, direction.p);
                _shiftMarker(markerStartTrigger, direction, markerStartOffset);
                _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));
                _shiftMarker(markerEndTrigger, direction, markerEndOffset);
                _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
              }
              isFirstRefresh && !_refreshingAll && self2.update();
              if (onRefresh && !_refreshingAll && !executingOnRefresh) {
                executingOnRefresh = true;
                onRefresh(self2);
                executingOnRefresh = false;
              }
            };
            self2.getVelocity = function() {
              return (scrollFunc() - scroll2) / (_getTime$1() - _time2) * 1e3 || 0;
            };
            self2.endAnimation = function() {
              _endAnimation(self2.callbackAnimation);
              if (animation) {
                scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self2.direction < 0, 1);
              }
            };
            self2.labelToScroll = function(label) {
              return animation && animation.labels && (start || self2.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
            };
            self2.getTrailing = function(name) {
              var i = _triggers.indexOf(self2), a = self2.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
              return (_isString(name) ? a.filter(function(t) {
                return t.vars.preventOverlaps === name;
              }) : a).filter(function(t) {
                return self2.direction > 0 ? t.end <= start : t.start >= end;
              });
            };
            self2.update = function(reset, recordVelocity, forceFake) {
              if (containerAnimation && !forceFake && !reset) {
                return;
              }
              var scroll = _refreshingAll === true ? prevScroll : self2.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress2 = self2.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
              if (recordVelocity) {
                scroll2 = scroll1;
                scroll1 = containerAnimation ? scrollFunc() : scroll;
                if (snap) {
                  snap2 = snap1;
                  snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
                }
              }
              if (anticipatePin && pin && !_refreshing && !_startup$1 && _lastScrollTime) {
                if (!clipped && start < scroll + (scroll - scroll2) / (_getTime$1() - _time2) * anticipatePin) {
                  clipped = 1e-4;
                } else if (clipped === 1 && end > scroll + (scroll - scroll2) / (_getTime$1() - _time2) * anticipatePin) {
                  clipped = 0.9999;
                }
              }
              if (clipped !== prevProgress2 && self2.enabled) {
                isActive = self2.isActive = !!clipped && clipped < 1;
                wasActive = !!prevProgress2 && prevProgress2 < 1;
                toggled = isActive !== wasActive;
                stateChanged = toggled || !!clipped !== !!prevProgress2;
                self2.direction = clipped > prevProgress2 ? 1 : -1;
                self2.progress = clipped;
                if (stateChanged && !_refreshing) {
                  toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3;
                  if (isToggle) {
                    action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
                    isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
                  }
                }
                preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self2) : self2.getTrailing(preventOverlaps).forEach(function(t) {
                  return t.endAnimation();
                }));
                if (!isToggle) {
                  if (scrubTween && !_refreshing && !_startup$1) {
                    scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start);
                    if (scrubTween.resetTo) {
                      scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
                    } else {
                      scrubTween.vars.totalProgress = clipped;
                      scrubTween.invalidate().restart();
                    }
                  } else if (animation) {
                    animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
                  }
                }
                if (pin) {
                  reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
                  if (!useFixedPosition) {
                    pinSetter(_round(pinStart + pinChange * clipped));
                  } else if (stateChanged) {
                    isAtMax = !reset && clipped > prevProgress2 && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
                    if (pinReparent) {
                      if (!reset && (isActive || isAtMax)) {
                        var bounds = _getBounds(pin, true), _offset = scroll - start;
                        _reparent(pin, _body$1, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                      } else {
                        _reparent(pin, spacer);
                      }
                    }
                    _setState(isActive || isAtMax ? pinActiveState : pinState);
                    pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
                  }
                }
                snap && !tweenTo.tween && !_refreshing && !_startup$1 && snapDelayedCall.restart(true);
                toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function(el) {
                  return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
                });
                onUpdate && !isToggle && !reset && onUpdate(self2);
                if (stateChanged && !_refreshing) {
                  if (isToggle) {
                    if (isTakingAction) {
                      if (action === "complete") {
                        animation.pause().totalProgress(1);
                      } else if (action === "reset") {
                        animation.restart(true).pause();
                      } else if (action === "restart") {
                        animation.restart(true);
                      } else {
                        animation[action]();
                      }
                    }
                    onUpdate && onUpdate(self2);
                  }
                  if (toggled || !_limitCallbacks) {
                    onToggle && toggled && _callback(self2, onToggle);
                    callbacks[toggleState] && _callback(self2, callbacks[toggleState]);
                    once && (clipped === 1 ? self2.kill(false, 1) : callbacks[toggleState] = 0);
                    if (!toggled) {
                      toggleState = clipped === 1 ? 1 : 3;
                      callbacks[toggleState] && _callback(self2, callbacks[toggleState]);
                    }
                  }
                  if (fastScrollEnd && !isActive && Math.abs(self2.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
                    _endAnimation(self2.callbackAnimation);
                    scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
                  }
                } else if (isToggle && onUpdate && !_refreshing) {
                  onUpdate(self2);
                }
              }
              if (markerEndSetter) {
                var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
                markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
                markerEndSetter(n);
              }
              caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
            };
            self2.enable = function(reset, refresh) {
              if (!self2.enabled) {
                self2.enabled = true;
                _addListener$1(scroller, "resize", _onResize);
                isViewport || _addListener$1(scroller, "scroll", _onScroll$1);
                onRefreshInit && _addListener$1(ScrollTrigger3, "refreshInit", onRefreshInit);
                if (reset !== false) {
                  self2.progress = prevProgress = 0;
                  scroll1 = scroll2 = lastSnap = scrollFunc();
                }
                refresh !== false && self2.refresh();
              }
            };
            self2.getTween = function(snap3) {
              return snap3 && tweenTo ? tweenTo.tween : scrubTween;
            };
            self2.setPositions = function(newStart, newEnd, keepClamp, pinOffset) {
              if (containerAnimation) {
                var st = containerAnimation.scrollTrigger, duration = containerAnimation.duration(), _change = st.end - st.start;
                newStart = st.start + _change * newStart / duration;
                newEnd = st.start + _change * newEnd / duration;
              }
              self2.refresh(false, false, {
                start: _keepClamp(newStart, keepClamp && !!self2._startClamp),
                end: _keepClamp(newEnd, keepClamp && !!self2._endClamp)
              }, pinOffset);
              self2.update();
            };
            self2.adjustPinSpacing = function(amount) {
              if (spacerState && amount) {
                var i = spacerState.indexOf(direction.d) + 1;
                spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
                spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
                _setState(spacerState);
              }
            };
            self2.disable = function(reset, allowAnimation) {
              if (self2.enabled) {
                reset !== false && self2.revert(true, true);
                self2.enabled = self2.isActive = false;
                allowAnimation || scrubTween && scrubTween.pause();
                prevScroll = 0;
                pinCache && (pinCache.uncache = 1);
                onRefreshInit && _removeListener$1(ScrollTrigger3, "refreshInit", onRefreshInit);
                if (snapDelayedCall) {
                  snapDelayedCall.pause();
                  tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
                }
                if (!isViewport) {
                  var i = _triggers.length;
                  while (i--) {
                    if (_triggers[i].scroller === scroller && _triggers[i] !== self2) {
                      return;
                    }
                  }
                  _removeListener$1(scroller, "resize", _onResize);
                  isViewport || _removeListener$1(scroller, "scroll", _onScroll$1);
                }
              }
            };
            self2.kill = function(revert, allowAnimation) {
              self2.disable(revert, allowAnimation);
              scrubTween && !allowAnimation && scrubTween.kill();
              id && delete _ids[id];
              var i = _triggers.indexOf(self2);
              i >= 0 && _triggers.splice(i, 1);
              i === _i && _direction > 0 && _i--;
              i = 0;
              _triggers.forEach(function(t) {
                return t.scroller === self2.scroller && (i = 1);
              });
              i || _refreshingAll || (self2.scroll.rec = 0);
              if (animation) {
                animation.scrollTrigger = null;
                revert && animation.revert({
                  kill: false
                });
                allowAnimation || animation.kill();
              }
              markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
                return m.parentNode && m.parentNode.removeChild(m);
              });
              _primary === self2 && (_primary = 0);
              if (pin) {
                pinCache && (pinCache.uncache = 1);
                i = 0;
                _triggers.forEach(function(t) {
                  return t.pin === pin && i++;
                });
                i || (pinCache.spacer = 0);
              }
              vars.onKill && vars.onKill(self2);
            };
            _triggers.push(self2);
            self2.enable(false, false);
            customRevertReturn && customRevertReturn(self2);
            if (animation && animation.add && !change) {
              var updateFunc = self2.update;
              self2.update = function() {
                self2.update = updateFunc;
                start || end || self2.refresh();
              };
              gsap$1.delayedCall(0.01, self2.update);
              change = 0.01;
              start = end = 0;
            } else {
              self2.refresh();
            }
            pin && _queueRefreshAll();
          };
          ScrollTrigger3.register = function register(core) {
            if (!_coreInitted$1) {
              gsap$1 = core || _getGSAP$1();
              _windowExists() && window.document && ScrollTrigger3.enable();
              _coreInitted$1 = _enabled;
            }
            return _coreInitted$1;
          };
          ScrollTrigger3.defaults = function defaults(config) {
            if (config) {
              for (var p in config) {
                _defaults[p] = config[p];
              }
            }
            return _defaults;
          };
          ScrollTrigger3.disable = function disable(reset, kill) {
            _enabled = 0;
            _triggers.forEach(function(trigger) {
              return trigger[kill ? "kill" : "disable"](reset);
            });
            _removeListener$1(_win$1, "wheel", _onScroll$1);
            _removeListener$1(_doc$1, "scroll", _onScroll$1);
            clearInterval(_syncInterval);
            _removeListener$1(_doc$1, "touchcancel", _passThrough);
            _removeListener$1(_body$1, "touchstart", _passThrough);
            _multiListener(_removeListener$1, _doc$1, "pointerdown,touchstart,mousedown", _pointerDownHandler);
            _multiListener(_removeListener$1, _doc$1, "pointerup,touchend,mouseup", _pointerUpHandler);
            _resizeDelay.kill();
            _iterateAutoRefresh(_removeListener$1);
            for (var i = 0; i < _scrollers.length; i += 3) {
              _wheelListener(_removeListener$1, _scrollers[i], _scrollers[i + 1]);
              _wheelListener(_removeListener$1, _scrollers[i], _scrollers[i + 2]);
            }
          };
          ScrollTrigger3.enable = function enable() {
            _win$1 = window;
            _doc$1 = document;
            _docEl$1 = _doc$1.documentElement;
            _body$1 = _doc$1.body;
            if (gsap$1) {
              _toArray = gsap$1.utils.toArray;
              _clamp$1 = gsap$1.utils.clamp;
              _context$1 = gsap$1.core.context || _passThrough;
              _suppressOverwrites = gsap$1.core.suppressOverwrites || _passThrough;
              _scrollRestoration = _win$1.history.scrollRestoration || "auto";
              _lastScroll = _win$1.pageYOffset;
              gsap$1.core.globals("ScrollTrigger", ScrollTrigger3);
              if (_body$1) {
                _enabled = 1;
                _div100vh = document.createElement("div");
                _div100vh.style.height = "100vh";
                _div100vh.style.position = "absolute";
                _refresh100vh();
                _rafBugFix();
                Observer2.register(gsap$1);
                ScrollTrigger3.isTouch = Observer2.isTouch;
                _fixIOSBug = Observer2.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
                _ignoreMobileResize = Observer2.isTouch === 1;
                _addListener$1(_win$1, "wheel", _onScroll$1);
                _root$1 = [_win$1, _doc$1, _docEl$1, _body$1];
                if (gsap$1.matchMedia) {
                  ScrollTrigger3.matchMedia = function(vars) {
                    var mm = gsap$1.matchMedia(), p;
                    for (p in vars) {
                      mm.add(p, vars[p]);
                    }
                    return mm;
                  };
                  gsap$1.addEventListener("matchMediaInit", function() {
                    return _revertAll();
                  });
                  gsap$1.addEventListener("matchMediaRevert", function() {
                    return _revertRecorded();
                  });
                  gsap$1.addEventListener("matchMedia", function() {
                    _refreshAll(0, 1);
                    _dispatch("matchMedia");
                  });
                  gsap$1.matchMedia("(orientation: portrait)", function() {
                    _setBaseDimensions();
                    return _setBaseDimensions;
                  });
                } else {
                  console.warn("Requires GSAP 3.11.0 or later");
                }
                _setBaseDimensions();
                _addListener$1(_doc$1, "scroll", _onScroll$1);
                var bodyStyle = _body$1.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap$1.core.Animation.prototype, bounds, i;
                AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
                  value: function value() {
                    return this.time(-0.01, true);
                  }
                });
                bodyStyle.borderTopStyle = "solid";
                bounds = _getBounds(_body$1);
                _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
                _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
                border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
                _syncInterval = setInterval(_sync, 250);
                gsap$1.delayedCall(0.5, function() {
                  return _startup$1 = 0;
                });
                _addListener$1(_doc$1, "touchcancel", _passThrough);
                _addListener$1(_body$1, "touchstart", _passThrough);
                _multiListener(_addListener$1, _doc$1, "pointerdown,touchstart,mousedown", _pointerDownHandler);
                _multiListener(_addListener$1, _doc$1, "pointerup,touchend,mouseup", _pointerUpHandler);
                _transformProp = gsap$1.utils.checkPrefix("transform");
                _stateProps.push(_transformProp);
                _coreInitted$1 = _getTime$1();
                _resizeDelay = gsap$1.delayedCall(0.2, _refreshAll).pause();
                _autoRefresh = [_doc$1, "visibilitychange", function() {
                  var w = _win$1.innerWidth, h = _win$1.innerHeight;
                  if (_doc$1.hidden) {
                    _prevWidth = w;
                    _prevHeight = h;
                  } else if (_prevWidth !== w || _prevHeight !== h) {
                    _onResize();
                  }
                }, _doc$1, "DOMContentLoaded", _refreshAll, _win$1, "load", _refreshAll, _win$1, "resize", _onResize];
                _iterateAutoRefresh(_addListener$1);
                _triggers.forEach(function(trigger) {
                  return trigger.enable(0, 1);
                });
                for (i = 0; i < _scrollers.length; i += 3) {
                  _wheelListener(_removeListener$1, _scrollers[i], _scrollers[i + 1]);
                  _wheelListener(_removeListener$1, _scrollers[i], _scrollers[i + 2]);
                }
              }
            }
          };
          ScrollTrigger3.config = function config(vars) {
            "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
            var ms = vars.syncInterval;
            ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
            "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger3.isTouch === 1 && vars.ignoreMobileResize);
            if ("autoRefreshEvents" in vars) {
              _iterateAutoRefresh(_removeListener$1) || _iterateAutoRefresh(_addListener$1, vars.autoRefreshEvents || "none");
              _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
            }
          };
          ScrollTrigger3.scrollerProxy = function scrollerProxy(target, vars) {
            var t = _getTarget(target), i = _scrollers.indexOf(t), isViewport = _isViewport$1(t);
            if (~i) {
              _scrollers.splice(i, isViewport ? 6 : 2);
            }
            if (vars) {
              isViewport ? _proxies.unshift(_win$1, vars, _body$1, vars, _docEl$1, vars) : _proxies.unshift(t, vars);
            }
          };
          ScrollTrigger3.clearMatchMedia = function clearMatchMedia(query) {
            _triggers.forEach(function(t) {
              return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
            });
          };
          ScrollTrigger3.isInViewport = function isInViewport(element, ratio, horizontal) {
            var bounds = (_isString(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
            return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win$1.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win$1.innerHeight;
          };
          ScrollTrigger3.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
            _isString(element) && (element = _getTarget(element));
            var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
            return horizontal ? (bounds.left + offset) / _win$1.innerWidth : (bounds.top + offset) / _win$1.innerHeight;
          };
          ScrollTrigger3.killAll = function killAll(allowListeners) {
            _triggers.slice(0).forEach(function(t) {
              return t.vars.id !== "ScrollSmoother" && t.kill();
            });
            if (allowListeners !== true) {
              var listeners = _listeners.killAll || [];
              _listeners = {};
              listeners.forEach(function(f) {
                return f();
              });
            }
          };
          return ScrollTrigger3;
        }();
        ScrollTrigger$1.version = "3.12.5";
        ScrollTrigger$1.saveStyles = function(targets) {
          return targets ? _toArray(targets).forEach(function(target) {
            if (target && target.style) {
              var i = _savedStyles.indexOf(target);
              i >= 0 && _savedStyles.splice(i, 5);
              _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap$1.core.getCache(target), _context$1());
            }
          }) : _savedStyles;
        };
        ScrollTrigger$1.revert = function(soft, media) {
          return _revertAll(!soft, media);
        };
        ScrollTrigger$1.create = function(vars, animation) {
          return new ScrollTrigger$1(vars, animation);
        };
        ScrollTrigger$1.refresh = function(safe) {
          return safe ? _onResize() : (_coreInitted$1 || ScrollTrigger$1.register()) && _refreshAll(true);
        };
        ScrollTrigger$1.update = function(force) {
          return ++_scrollers.cache && _updateAll(force === true ? 2 : 0);
        };
        ScrollTrigger$1.clearScrollMemory = _clearScrollMemory;
        ScrollTrigger$1.maxScroll = function(element, horizontal) {
          return _maxScroll(element, horizontal ? _horizontal : _vertical);
        };
        ScrollTrigger$1.getScrollFunc = function(element, horizontal) {
          return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
        };
        ScrollTrigger$1.getById = function(id) {
          return _ids[id];
        };
        ScrollTrigger$1.getAll = function() {
          return _triggers.filter(function(t) {
            return t.vars.id !== "ScrollSmoother";
          });
        };
        ScrollTrigger$1.isScrolling = function() {
          return !!_lastScrollTime;
        };
        ScrollTrigger$1.snapDirectional = _snapDirectional;
        ScrollTrigger$1.addEventListener = function(type, callback) {
          var a = _listeners[type] || (_listeners[type] = []);
          ~a.indexOf(callback) || a.push(callback);
        };
        ScrollTrigger$1.removeEventListener = function(type, callback) {
          var a = _listeners[type], i = a && a.indexOf(callback);
          i >= 0 && a.splice(i, 1);
        };
        ScrollTrigger$1.batch = function(targets, vars) {
          var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback2(type, callback) {
            var elements = [], triggers = [], delay = gsap$1.delayedCall(interval, function() {
              callback(elements, triggers);
              elements = [];
              triggers = [];
            }).pause();
            return function(self2) {
              elements.length || delay.restart(true);
              elements.push(self2.trigger);
              triggers.push(self2);
              batchMax <= elements.length && delay.progress(1);
            };
          }, p;
          for (p in vars) {
            varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
          }
          if (_isFunction(batchMax)) {
            batchMax = batchMax();
            _addListener$1(ScrollTrigger$1, "refresh", function() {
              return batchMax = vars.batchMax();
            });
          }
          _toArray(targets).forEach(function(target) {
            var config = {};
            for (p in varsCopy) {
              config[p] = varsCopy[p];
            }
            config.trigger = target;
            result.push(ScrollTrigger$1.create(config));
          });
          return result;
        };
        var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier2(scrollFunc, current, end, max) {
          current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
          return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
        }, _allowNativePanning = function _allowNativePanning2(target, direction) {
          if (direction === true) {
            target.style.removeProperty("touch-action");
          } else {
            target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer2.isTouch ? " pinch-zoom" : "") : "none";
          }
          target === _docEl$1 && _allowNativePanning2(_body$1, direction);
        }, _overflow = {
          auto: 1,
          scroll: 1
        }, _nestedScroll = function _nestedScroll2(_ref5) {
          var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
          var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || gsap$1.core.getCache(node), time = _getTime$1(), cs;
          if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
            while (node && node !== _body$1 && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) {
              node = node.parentNode;
            }
            cache._isScroll = node && node !== target && !_isViewport$1(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
            cache._isScrollT = time;
          }
          if (cache._isScroll || axis === "x") {
            event.stopPropagation();
            event._gsapAllow = true;
          }
        }, _inputObserver = function _inputObserver2(target, type, inputs, nested) {
          return Observer2.create({
            target,
            capture: true,
            debounce: false,
            lockAxis: true,
            type,
            onWheel: nested = nested && _nestedScroll,
            onPress: nested,
            onDrag: nested,
            onScroll: nested,
            onEnable: function onEnable() {
              return inputs && _addListener$1(_doc$1, Observer2.eventTypes[0], _captureInputs, false, true);
            },
            onDisable: function onDisable() {
              return _removeListener$1(_doc$1, Observer2.eventTypes[0], _captureInputs, true);
            }
          });
        }, _inputExp = /(input|label|select|textarea)/i, _inputIsFocused, _captureInputs = function _captureInputs2(e) {
          var isInput = _inputExp.test(e.target.tagName);
          if (isInput || _inputIsFocused) {
            e._gsapAllow = true;
            _inputIsFocused = isInput;
          }
        }, _getScrollNormalizer = function _getScrollNormalizer2(vars) {
          _isObject(vars) || (vars = {});
          vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
          vars.type || (vars.type = "wheel,touch");
          vars.debounce = !!vars.debounce;
          vars.id = vars.id || "normalizer";
          var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, onRelease = _vars2.onRelease, self2, maxY, target = _getTarget(vars.target) || _docEl$1, smoother = gsap$1.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale = 1, initialScale = (Observer2.isTouch && _win$1.visualViewport ? _win$1.visualViewport.scale * _win$1.visualViewport.width : _win$1.outerWidth) / _win$1.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction(momentum) ? function() {
            return momentum(self2);
          } : function() {
            return momentum || 2.8;
          }, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove2() {
            return skipTouchMove = false;
          }, scrollClampX = _passThrough, scrollClampY = _passThrough, updateClamps = function updateClamps2() {
            maxY = _maxScroll(target, _vertical);
            scrollClampY = _clamp$1(_fixIOSBug ? 1 : 0, maxY);
            normalizeScrollX && (scrollClampX = _clamp$1(0, _maxScroll(target, _horizontal)));
            lastRefreshID = _refreshID;
          }, removeContentOffset = function removeContentOffset2() {
            content._gsap.y = _round(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
            content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
            scrollFuncY.offset = scrollFuncY.cacheID = 0;
          }, ignoreDrag = function ignoreDrag2() {
            if (skipTouchMove) {
              requestAnimationFrame(resumeTouchMove);
              var offset = _round(self2.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
              if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
                scrollFuncY.offset = scroll - scrollFuncY.v;
                var y = _round((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
                content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
                content._gsap.y = y + "px";
                scrollFuncY.cacheID = _scrollers.cache;
                _updateAll();
              }
              return true;
            }
            scrollFuncY.offset && removeContentOffset();
            skipTouchMove = true;
          }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize2() {
            updateClamps();
            if (tween.isActive() && tween.vars.scrollY > maxY) {
              scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
            }
          };
          content && gsap$1.set(content, {
            y: "+=0"
          });
          vars.ignoreCheck = function(e) {
            return _fixIOSBug && e.type === "touchmove" && ignoreDrag() || scale > 1.05 && e.type !== "touchstart" || self2.isGesturing || e.touches && e.touches.length > 1;
          };
          vars.onPress = function() {
            skipTouchMove = false;
            var prevScale = scale;
            scale = _round((_win$1.visualViewport && _win$1.visualViewport.scale || 1) / initialScale);
            tween.pause();
            prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
            startScrollX = scrollFuncX();
            startScrollY = scrollFuncY();
            updateClamps();
            lastRefreshID = _refreshID;
          };
          vars.onRelease = vars.onGestureStart = function(self3, wasDragging) {
            scrollFuncY.offset && removeContentOffset();
            if (!wasDragging) {
              onStopDelayedCall.restart(true);
            } else {
              _scrollers.cache++;
              var dur = resolveMomentumDuration(), currentScroll, endScroll;
              if (normalizeScrollX) {
                currentScroll = scrollFuncX();
                endScroll = currentScroll + dur * 0.05 * -self3.velocityX / 0.227;
                dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
                tween.vars.scrollX = scrollClampX(endScroll);
              }
              currentScroll = scrollFuncY();
              endScroll = currentScroll + dur * 0.05 * -self3.velocityY / 0.227;
              dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
              tween.vars.scrollY = scrollClampY(endScroll);
              tween.invalidate().duration(dur).play(0.01);
              if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
                gsap$1.to({}, {
                  onUpdate: onResize,
                  duration: dur
                });
              }
            }
            onRelease && onRelease(self3);
          };
          vars.onWheel = function() {
            tween._ts && tween.pause();
            if (_getTime$1() - wheelRefresh > 1e3) {
              lastRefreshID = 0;
              wheelRefresh = _getTime$1();
            }
          };
          vars.onChange = function(self3, dx, dy, xArray, yArray) {
            _refreshID !== lastRefreshID && updateClamps();
            dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self3.startX - self3.x) : scrollFuncX() + dx - xArray[1]));
            if (dy) {
              scrollFuncY.offset && removeContentOffset();
              var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self3.startY - self3.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
              isTouch && y !== yClamped && (startScrollY += yClamped - y);
              scrollFuncY(yClamped);
            }
            (dy || dx) && _updateAll();
          };
          vars.onEnable = function() {
            _allowNativePanning(target, normalizeScrollX ? false : "x");
            ScrollTrigger$1.addEventListener("refresh", onResize);
            _addListener$1(_win$1, "resize", onResize);
            if (scrollFuncY.smooth) {
              scrollFuncY.target.style.scrollBehavior = "auto";
              scrollFuncY.smooth = scrollFuncX.smooth = false;
            }
            inputObserver.enable();
          };
          vars.onDisable = function() {
            _allowNativePanning(target, true);
            _removeListener$1(_win$1, "resize", onResize);
            ScrollTrigger$1.removeEventListener("refresh", onResize);
            inputObserver.kill();
          };
          vars.lockAxis = vars.lockAxis !== false;
          self2 = new Observer2(vars);
          self2.iOS = _fixIOSBug;
          _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
          _fixIOSBug && gsap$1.ticker.add(_passThrough);
          onStopDelayedCall = self2._dc;
          tween = gsap$1.to(self2, {
            ease: "power4",
            paused: true,
            inherit: false,
            scrollX: normalizeScrollX ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function() {
                return tween.pause();
              })
            },
            onUpdate: _updateAll,
            onComplete: onStopDelayedCall.vars.onComplete
          });
          return self2;
        };
        ScrollTrigger$1.sort = function(func) {
          return _triggers.sort(func || function(a, b) {
            return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
          });
        };
        ScrollTrigger$1.observe = function(vars) {
          return new Observer2(vars);
        };
        ScrollTrigger$1.normalizeScroll = function(vars) {
          if (typeof vars === "undefined") {
            return _normalizer$1;
          }
          if (vars === true && _normalizer$1) {
            return _normalizer$1.enable();
          }
          if (vars === false) {
            _normalizer$1 && _normalizer$1.kill();
            _normalizer$1 = vars;
            return;
          }
          var normalizer = vars instanceof Observer2 ? vars : _getScrollNormalizer(vars);
          _normalizer$1 && _normalizer$1.target === normalizer.target && _normalizer$1.kill();
          _isViewport$1(normalizer.target) && (_normalizer$1 = normalizer);
          return normalizer;
        };
        ScrollTrigger$1.core = {
          _getVelocityProp,
          _inputObserver,
          _scrollers,
          _proxies,
          bridge: {
            ss: function ss() {
              _lastScrollTime || _dispatch("scrollStart");
              _lastScrollTime = _getTime$1();
            },
            ref: function ref() {
              return _refreshing;
            }
          }
        };
        _getGSAP$1() && gsap$1.registerPlugin(ScrollTrigger$1);
        exports2.ScrollTrigger = ScrollTrigger$1;
        exports2.default = ScrollTrigger$1;
        if (typeof window === "undefined" || window !== exports2) {
          Object.defineProperty(exports2, "__esModule", { value: true });
        } else {
          delete window.default;
        }
      });
    }
  });

  // node_modules/gsap/dist/Observer.js
  var require_Observer = __commonJS({
    "node_modules/gsap/dist/Observer.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = global || self, factory(global.window = global.window || {}));
      })(exports, function(exports2) {
        "use strict";
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        var gsap2, _coreInitted, _clamp, _win, _doc, _docEl, _body, _isTouch, _pointerType, ScrollTrigger2, _root, _normalizer, _eventTypes, _context, _getGSAP = function _getGSAP2() {
          return gsap2 || typeof window !== "undefined" && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
        }, _startup = 1, _observers = [];
        exports2._scrollers = [];
        exports2._proxies = [];
        var _getTime = Date.now, _bridge = function _bridge2(name, value) {
          return value;
        }, _integrate = function _integrate2() {
          var core = ScrollTrigger2.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
          scrollers.push.apply(scrollers, exports2._scrollers);
          proxies.push.apply(proxies, exports2._proxies);
          exports2._scrollers = scrollers;
          exports2._proxies = proxies;
          _bridge = function _bridge2(name, value) {
            return data[name](value);
          };
        }, _getProxyProp = function _getProxyProp2(element, property) {
          return ~exports2._proxies.indexOf(element) && exports2._proxies[exports2._proxies.indexOf(element) + 1][property];
        }, _isViewport = function _isViewport2(el) {
          return !!~_root.indexOf(el);
        }, _addListener = function _addListener2(element, type, func, passive, capture) {
          return element.addEventListener(type, func, {
            passive: passive !== false,
            capture: !!capture
          });
        }, _removeListener = function _removeListener2(element, type, func, capture) {
          return element.removeEventListener(type, func, !!capture);
        }, _scrollLeft = "scrollLeft", _scrollTop = "scrollTop", _onScroll = function _onScroll2() {
          return _normalizer && _normalizer.isPressed || exports2._scrollers.cache++;
        }, _scrollCacheFunc = function _scrollCacheFunc2(f, doNotCache) {
          var cachingFunc = function cachingFunc2(value) {
            if (value || value === 0) {
              _startup && (_win.history.scrollRestoration = "manual");
              var isNormalizing = _normalizer && _normalizer.isPressed;
              value = cachingFunc2.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0);
              f(value);
              cachingFunc2.cacheID = exports2._scrollers.cache;
              isNormalizing && _bridge("ss", value);
            } else if (doNotCache || exports2._scrollers.cache !== cachingFunc2.cacheID || _bridge("ref")) {
              cachingFunc2.cacheID = exports2._scrollers.cache;
              cachingFunc2.v = f();
            }
            return cachingFunc2.v + cachingFunc2.offset;
          };
          cachingFunc.offset = 0;
          return f && cachingFunc;
        }, _horizontal = {
          s: _scrollLeft,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: _scrollCacheFunc(function(value) {
            return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
          })
        }, _vertical = {
          s: _scrollTop,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: _horizontal,
          sc: _scrollCacheFunc(function(value) {
            return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
          })
        }, _getTarget = function _getTarget2(t, self2) {
          return (self2 && self2._ctx && self2._ctx.selector || gsap2.utils.toArray)(t)[0] || (typeof t === "string" && gsap2.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
        }, _getScrollFunc = function _getScrollFunc2(element, _ref) {
          var s = _ref.s, sc = _ref.sc;
          _isViewport(element) && (element = _doc.scrollingElement || _docEl);
          var i = exports2._scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
          !~i && (i = exports2._scrollers.push(element) - 1);
          exports2._scrollers[i + offset] || _addListener(element, "scroll", _onScroll);
          var prev = exports2._scrollers[i + offset], func = prev || (exports2._scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
            return arguments.length ? element[s] = value : element[s];
          })));
          func.target = element;
          prev || (func.smooth = gsap2.getProperty(element, "scrollBehavior") === "smooth");
          return func;
        }, _getVelocityProp = function _getVelocityProp2(value, minTimeRefresh, useDelta) {
          var v1 = value, v2 = value, t1 = _getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update2(value2, force) {
            var t = _getTime();
            if (force || t - t1 > min) {
              v2 = v1;
              v1 = value2;
              t2 = t1;
              t1 = t;
            } else if (useDelta) {
              v1 += value2;
            } else {
              v1 = v2 + (value2 - v2) / (t - t2) * (t1 - t2);
            }
          }, reset = function reset2() {
            v2 = v1 = useDelta ? 0 : v1;
            t2 = t1 = 0;
          }, getVelocity = function getVelocity2(latestValue) {
            var tOld = t2, vOld = v2, t = _getTime();
            (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
            return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1e3;
          };
          return {
            update,
            reset,
            getVelocity
          };
        }, _getEvent = function _getEvent2(e, preventDefault) {
          preventDefault && !e._gsapAllow && e.preventDefault();
          return e.changedTouches ? e.changedTouches[0] : e;
        }, _getAbsoluteMax = function _getAbsoluteMax2(a) {
          var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
          return Math.abs(max) >= Math.abs(min) ? max : min;
        }, _setScrollTrigger = function _setScrollTrigger2() {
          ScrollTrigger2 = gsap2.core.globals().ScrollTrigger;
          ScrollTrigger2 && ScrollTrigger2.core && _integrate();
        }, _initCore = function _initCore2(core) {
          gsap2 = core || _getGSAP();
          if (!_coreInitted && gsap2 && typeof document !== "undefined" && document.body) {
            _win = window;
            _doc = document;
            _docEl = _doc.documentElement;
            _body = _doc.body;
            _root = [_win, _doc, _docEl, _body];
            _clamp = gsap2.utils.clamp;
            _context = gsap2.core.context || function() {
            };
            _pointerType = "onpointerenter" in _body ? "pointer" : "mouse";
            _isTouch = Observer2.isTouch = _win.matchMedia && _win.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
            _eventTypes = Observer2.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
            setTimeout(function() {
              return _startup = 0;
            }, 500);
            _setScrollTrigger();
            _coreInitted = 1;
          }
          return _coreInitted;
        };
        _horizontal.op = _vertical;
        exports2._scrollers.cache = 0;
        var Observer2 = function() {
          function Observer3(vars) {
            this.init(vars);
          }
          var _proto = Observer3.prototype;
          _proto.init = function init(vars) {
            _coreInitted || _initCore(gsap2) || console.warn("Please gsap.registerPlugin(Observer)");
            ScrollTrigger2 || _setScrollTrigger();
            var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
            this.target = target = _getTarget(target) || _docEl;
            this.vars = vars;
            ignore && (ignore = gsap2.utils.toArray(ignore));
            tolerance = tolerance || 1e-9;
            dragMinimum = dragMinimum || 0;
            wheelSpeed = wheelSpeed || 1;
            scrollSpeed = scrollSpeed || 1;
            type = type || "wheel,touch,pointer";
            debounce = debounce !== false;
            lineHeight || (lineHeight = parseFloat(_win.getComputedStyle(_body).lineHeight) || 22);
            var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self2 = this, prevDeltaX = 0, prevDeltaY = 0, passive = vars.passive || !preventDefault, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport(target), ownerDoc = target.ownerDocument || _doc, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function clickCapture2() {
              return onClickTime = _getTime();
            }, _ignoreCheck = function _ignoreCheck2(e, isPointerOrTouch) {
              return (self2.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
            }, onStopFunc = function onStopFunc2() {
              self2._vx.reset();
              self2._vy.reset();
              onStopDelayedCall.pause();
              onStop && onStop(self2);
            }, update = function update2() {
              var dx = self2.deltaX = _getAbsoluteMax(deltaX), dy = self2.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
              onChange && (changedX || changedY) && onChange(self2, dx, dy, deltaX, deltaY);
              if (changedX) {
                onRight && self2.deltaX > 0 && onRight(self2);
                onLeft && self2.deltaX < 0 && onLeft(self2);
                onChangeX && onChangeX(self2);
                onToggleX && self2.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self2);
                prevDeltaX = self2.deltaX;
                deltaX[0] = deltaX[1] = deltaX[2] = 0;
              }
              if (changedY) {
                onDown && self2.deltaY > 0 && onDown(self2);
                onUp && self2.deltaY < 0 && onUp(self2);
                onChangeY && onChangeY(self2);
                onToggleY && self2.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self2);
                prevDeltaY = self2.deltaY;
                deltaY[0] = deltaY[1] = deltaY[2] = 0;
              }
              if (moved || dragged) {
                onMove && onMove(self2);
                if (dragged) {
                  onDrag(self2);
                  dragged = false;
                }
                moved = false;
              }
              locked && !(locked = false) && onLockAxis && onLockAxis(self2);
              if (wheeled) {
                onWheel(self2);
                wheeled = false;
              }
              id = 0;
            }, onDelta = function onDelta2(x, y, index) {
              deltaX[index] += x;
              deltaY[index] += y;
              self2._vx.update(x);
              self2._vy.update(y);
              debounce ? id || (id = requestAnimationFrame(update)) : update();
            }, onTouchOrPointerDelta = function onTouchOrPointerDelta2(x, y) {
              if (lockAxis && !axis) {
                self2.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
                locked = true;
              }
              if (axis !== "y") {
                deltaX[2] += x;
                self2._vx.update(x, true);
              }
              if (axis !== "x") {
                deltaY[2] += y;
                self2._vy.update(y, true);
              }
              debounce ? id || (id = requestAnimationFrame(update)) : update();
            }, _onDrag = function _onDrag2(e) {
              if (_ignoreCheck(e, 1)) {
                return;
              }
              e = _getEvent(e, preventDefault);
              var x = e.clientX, y = e.clientY, dx = x - self2.x, dy = y - self2.y, isDragging = self2.isDragging;
              self2.x = x;
              self2.y = y;
              if (isDragging || Math.abs(self2.startX - x) >= dragMinimum || Math.abs(self2.startY - y) >= dragMinimum) {
                onDrag && (dragged = true);
                isDragging || (self2.isDragging = true);
                onTouchOrPointerDelta(dx, dy);
                isDragging || onDragStart && onDragStart(self2);
              }
            }, _onPress = self2.onPress = function(e) {
              if (_ignoreCheck(e, 1) || e && e.button) {
                return;
              }
              self2.axis = axis = null;
              onStopDelayedCall.pause();
              self2.isPressed = true;
              e = _getEvent(e);
              prevDeltaX = prevDeltaY = 0;
              self2.startX = self2.x = e.clientX;
              self2.startY = self2.y = e.clientY;
              self2._vx.reset();
              self2._vy.reset();
              _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, true);
              self2.deltaX = self2.deltaY = 0;
              onPress && onPress(self2);
            }, _onRelease = self2.onRelease = function(e) {
              if (_ignoreCheck(e, 1)) {
                return;
              }
              _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
              var isTrackingDrag = !isNaN(self2.y - self2.startY), wasDragging = self2.isDragging, isDragNotClick = wasDragging && (Math.abs(self2.x - self2.startX) > 3 || Math.abs(self2.y - self2.startY) > 3), eventData = _getEvent(e);
              if (!isDragNotClick && isTrackingDrag) {
                self2._vx.reset();
                self2._vy.reset();
                if (preventDefault && allowClicks) {
                  gsap2.delayedCall(0.08, function() {
                    if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
                      if (e.target.click) {
                        e.target.click();
                      } else if (ownerDoc.createEvent) {
                        var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                        syntheticEvent.initMouseEvent("click", true, true, _win, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                        e.target.dispatchEvent(syntheticEvent);
                      }
                    }
                  });
                }
              }
              self2.isDragging = self2.isGesturing = self2.isPressed = false;
              onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
              onDragEnd && wasDragging && onDragEnd(self2);
              onRelease && onRelease(self2, isDragNotClick);
            }, _onGestureStart = function _onGestureStart2(e) {
              return e.touches && e.touches.length > 1 && (self2.isGesturing = true) && onGestureStart(e, self2.isDragging);
            }, _onGestureEnd = function _onGestureEnd2() {
              return (self2.isGesturing = false) || onGestureEnd(self2);
            }, onScroll = function onScroll2(e) {
              if (_ignoreCheck(e)) {
                return;
              }
              var x = scrollFuncX(), y = scrollFuncY();
              onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
              scrollX = x;
              scrollY = y;
              onStop && onStopDelayedCall.restart(true);
            }, _onWheel = function _onWheel2(e) {
              if (_ignoreCheck(e)) {
                return;
              }
              e = _getEvent(e, preventDefault);
              onWheel && (wheeled = true);
              var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win.innerHeight : 1) * wheelSpeed;
              onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
              onStop && !isNormalizer && onStopDelayedCall.restart(true);
            }, _onMove = function _onMove2(e) {
              if (_ignoreCheck(e)) {
                return;
              }
              var x = e.clientX, y = e.clientY, dx = x - self2.x, dy = y - self2.y;
              self2.x = x;
              self2.y = y;
              moved = true;
              onStop && onStopDelayedCall.restart(true);
              (dx || dy) && onTouchOrPointerDelta(dx, dy);
            }, _onHover = function _onHover2(e) {
              self2.event = e;
              onHover(self2);
            }, _onHoverEnd = function _onHoverEnd2(e) {
              self2.event = e;
              onHoverEnd(self2);
            }, _onClick = function _onClick2(e) {
              return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self2);
            };
            onStopDelayedCall = self2._dc = gsap2.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
            self2.deltaX = self2.deltaY = 0;
            self2._vx = _getVelocityProp(0, 50, true);
            self2._vy = _getVelocityProp(0, 50, true);
            self2.scrollX = scrollFuncX;
            self2.scrollY = scrollFuncY;
            self2.isDragging = self2.isGesturing = self2.isPressed = false;
            _context(this);
            self2.enable = function(e) {
              if (!self2.isEnabled) {
                _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
                type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, passive, capture);
                type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, passive, capture);
                if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
                  _addListener(target, _eventTypes[0], _onPress, passive, capture);
                  _addListener(ownerDoc, _eventTypes[2], _onRelease);
                  _addListener(ownerDoc, _eventTypes[3], _onRelease);
                  allowClicks && _addListener(target, "click", clickCapture, true, true);
                  onClick && _addListener(target, "click", _onClick);
                  onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
                  onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
                  onHover && _addListener(target, _pointerType + "enter", _onHover);
                  onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
                  onMove && _addListener(target, _pointerType + "move", _onMove);
                }
                self2.isEnabled = true;
                e && e.type && _onPress(e);
                onEnable && onEnable(self2);
              }
              return self2;
            };
            self2.disable = function() {
              if (self2.isEnabled) {
                _observers.filter(function(o) {
                  return o !== self2 && _isViewport(o.target);
                }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
                if (self2.isPressed) {
                  self2._vx.reset();
                  self2._vy.reset();
                  _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
                }
                _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
                _removeListener(target, "wheel", _onWheel, capture);
                _removeListener(target, _eventTypes[0], _onPress, capture);
                _removeListener(ownerDoc, _eventTypes[2], _onRelease);
                _removeListener(ownerDoc, _eventTypes[3], _onRelease);
                _removeListener(target, "click", clickCapture, true);
                _removeListener(target, "click", _onClick);
                _removeListener(ownerDoc, "gesturestart", _onGestureStart);
                _removeListener(ownerDoc, "gestureend", _onGestureEnd);
                _removeListener(target, _pointerType + "enter", _onHover);
                _removeListener(target, _pointerType + "leave", _onHoverEnd);
                _removeListener(target, _pointerType + "move", _onMove);
                self2.isEnabled = self2.isPressed = self2.isDragging = false;
                onDisable && onDisable(self2);
              }
            };
            self2.kill = self2.revert = function() {
              self2.disable();
              var i = _observers.indexOf(self2);
              i >= 0 && _observers.splice(i, 1);
              _normalizer === self2 && (_normalizer = 0);
            };
            _observers.push(self2);
            isNormalizer && _isViewport(target) && (_normalizer = self2);
            self2.enable(event);
          };
          _createClass(Observer3, [{
            key: "velocityX",
            get: function get() {
              return this._vx.getVelocity();
            }
          }, {
            key: "velocityY",
            get: function get() {
              return this._vy.getVelocity();
            }
          }]);
          return Observer3;
        }();
        Observer2.version = "3.12.5";
        Observer2.create = function(vars) {
          return new Observer2(vars);
        };
        Observer2.register = _initCore;
        Observer2.getAll = function() {
          return _observers.slice();
        };
        Observer2.getById = function(id) {
          return _observers.filter(function(o) {
            return o.vars.id === id;
          })[0];
        };
        _getGSAP() && gsap2.registerPlugin(Observer2);
        exports2.Observer = Observer2;
        exports2._getProxyProp = _getProxyProp;
        exports2._getScrollFunc = _getScrollFunc;
        exports2._getTarget = _getTarget;
        exports2._getVelocityProp = _getVelocityProp;
        exports2._horizontal = _horizontal;
        exports2._isViewport = _isViewport;
        exports2._vertical = _vertical;
        exports2.default = Observer2;
        if (typeof window === "undefined" || window !== exports2) {
          Object.defineProperty(exports2, "__esModule", { value: true });
        } else {
          delete window.default;
        }
      });
    }
  });

  // node_modules/gsap/dist/ScrollToPlugin.js
  var require_ScrollToPlugin = __commonJS({
    "node_modules/gsap/dist/ScrollToPlugin.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = global || self, factory(global.window = global.window || {}));
      })(exports, function(exports2) {
        "use strict";
        var gsap2, _coreInitted, _window, _docEl, _body, _toArray, _config, ScrollTrigger2, _windowExists = function _windowExists2() {
          return typeof window !== "undefined";
        }, _getGSAP = function _getGSAP2() {
          return gsap2 || _windowExists() && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
        }, _isString = function _isString2(value) {
          return typeof value === "string";
        }, _isFunction = function _isFunction2(value) {
          return typeof value === "function";
        }, _max = function _max2(element, axis) {
          var dim = axis === "x" ? "Width" : "Height", scroll = "scroll" + dim, client = "client" + dim;
          return element === _window || element === _docEl || element === _body ? Math.max(_docEl[scroll], _body[scroll]) - (_window["inner" + dim] || _docEl[client] || _body[client]) : element[scroll] - element["offset" + dim];
        }, _buildGetter = function _buildGetter2(e, axis) {
          var p = "scroll" + (axis === "x" ? "Left" : "Top");
          if (e === _window) {
            if (e.pageXOffset != null) {
              p = "page" + axis.toUpperCase() + "Offset";
            } else {
              e = _docEl[p] != null ? _docEl : _body;
            }
          }
          return function() {
            return e[p];
          };
        }, _clean = function _clean2(value, index, target, targets) {
          _isFunction(value) && (value = value(index, target, targets));
          if (typeof value !== "object") {
            return _isString(value) && value !== "max" && value.charAt(1) !== "=" ? {
              x: value,
              y: value
            } : {
              y: value
            };
          } else if (value.nodeType) {
            return {
              y: value,
              x: value
            };
          } else {
            var result = {}, p;
            for (p in value) {
              result[p] = p !== "onAutoKill" && _isFunction(value[p]) ? value[p](index, target, targets) : value[p];
            }
            return result;
          }
        }, _getOffset = function _getOffset2(element, container) {
          element = _toArray(element)[0];
          if (!element || !element.getBoundingClientRect) {
            return console.warn("scrollTo target doesn't exist. Using 0") || {
              x: 0,
              y: 0
            };
          }
          var rect = element.getBoundingClientRect(), isRoot = !container || container === _window || container === _body, cRect = isRoot ? {
            top: _docEl.clientTop - (_window.pageYOffset || _docEl.scrollTop || _body.scrollTop || 0),
            left: _docEl.clientLeft - (_window.pageXOffset || _docEl.scrollLeft || _body.scrollLeft || 0)
          } : container.getBoundingClientRect(), offsets = {
            x: rect.left - cRect.left,
            y: rect.top - cRect.top
          };
          if (!isRoot && container) {
            offsets.x += _buildGetter(container, "x")();
            offsets.y += _buildGetter(container, "y")();
          }
          return offsets;
        }, _parseVal = function _parseVal2(value, target, axis, currentVal, offset) {
          return !isNaN(value) && typeof value !== "object" ? parseFloat(value) - offset : _isString(value) && value.charAt(1) === "=" ? parseFloat(value.substr(2)) * (value.charAt(0) === "-" ? -1 : 1) + currentVal - offset : value === "max" ? _max(target, axis) - offset : Math.min(_max(target, axis), _getOffset(value, target)[axis] - offset);
        }, _initCore = function _initCore2() {
          gsap2 = _getGSAP();
          if (_windowExists() && gsap2 && typeof document !== "undefined" && document.body) {
            _window = window;
            _body = document.body;
            _docEl = document.documentElement;
            _toArray = gsap2.utils.toArray;
            gsap2.config({
              autoKillThreshold: 7
            });
            _config = gsap2.config();
            _coreInitted = 1;
          }
        };
        var ScrollToPlugin2 = {
          version: "3.12.5",
          name: "scrollTo",
          rawVars: 1,
          register: function register(core) {
            gsap2 = core;
            _initCore();
          },
          init: function init(target, value, tween, index, targets) {
            _coreInitted || _initCore();
            var data = this, snapType = gsap2.getProperty(target, "scrollSnapType");
            data.isWin = target === _window;
            data.target = target;
            data.tween = tween;
            value = _clean(value, index, target, targets);
            data.vars = value;
            data.autoKill = !!value.autoKill;
            data.getX = _buildGetter(target, "x");
            data.getY = _buildGetter(target, "y");
            data.x = data.xPrev = data.getX();
            data.y = data.yPrev = data.getY();
            ScrollTrigger2 || (ScrollTrigger2 = gsap2.core.globals().ScrollTrigger);
            gsap2.getProperty(target, "scrollBehavior") === "smooth" && gsap2.set(target, {
              scrollBehavior: "auto"
            });
            if (snapType && snapType !== "none") {
              data.snap = 1;
              data.snapInline = target.style.scrollSnapType;
              target.style.scrollSnapType = "none";
            }
            if (value.x != null) {
              data.add(data, "x", data.x, _parseVal(value.x, target, "x", data.x, value.offsetX || 0), index, targets);
              data._props.push("scrollTo_x");
            } else {
              data.skipX = 1;
            }
            if (value.y != null) {
              data.add(data, "y", data.y, _parseVal(value.y, target, "y", data.y, value.offsetY || 0), index, targets);
              data._props.push("scrollTo_y");
            } else {
              data.skipY = 1;
            }
          },
          render: function render(ratio, data) {
            var pt = data._pt, target = data.target, tween = data.tween, autoKill = data.autoKill, xPrev = data.xPrev, yPrev = data.yPrev, isWin = data.isWin, snap = data.snap, snapInline = data.snapInline, x, y, yDif, xDif, threshold;
            while (pt) {
              pt.r(ratio, pt.d);
              pt = pt._next;
            }
            x = isWin || !data.skipX ? data.getX() : xPrev;
            y = isWin || !data.skipY ? data.getY() : yPrev;
            yDif = y - yPrev;
            xDif = x - xPrev;
            threshold = _config.autoKillThreshold;
            if (data.x < 0) {
              data.x = 0;
            }
            if (data.y < 0) {
              data.y = 0;
            }
            if (autoKill) {
              if (!data.skipX && (xDif > threshold || xDif < -threshold) && x < _max(target, "x")) {
                data.skipX = 1;
              }
              if (!data.skipY && (yDif > threshold || yDif < -threshold) && y < _max(target, "y")) {
                data.skipY = 1;
              }
              if (data.skipX && data.skipY) {
                tween.kill();
                data.vars.onAutoKill && data.vars.onAutoKill.apply(tween, data.vars.onAutoKillParams || []);
              }
            }
            if (isWin) {
              _window.scrollTo(!data.skipX ? data.x : x, !data.skipY ? data.y : y);
            } else {
              data.skipY || (target.scrollTop = data.y);
              data.skipX || (target.scrollLeft = data.x);
            }
            if (snap && (ratio === 1 || ratio === 0)) {
              y = target.scrollTop;
              x = target.scrollLeft;
              snapInline ? target.style.scrollSnapType = snapInline : target.style.removeProperty("scroll-snap-type");
              target.scrollTop = y + 1;
              target.scrollLeft = x + 1;
              target.scrollTop = y;
              target.scrollLeft = x;
            }
            data.xPrev = data.x;
            data.yPrev = data.y;
            ScrollTrigger2 && ScrollTrigger2.update();
          },
          kill: function kill(property) {
            var both = property === "scrollTo", i = this._props.indexOf(property);
            if (both || property === "scrollTo_x") {
              this.skipX = 1;
            }
            if (both || property === "scrollTo_y") {
              this.skipY = 1;
            }
            i > -1 && this._props.splice(i, 1);
            return !this._props.length;
          }
        };
        ScrollToPlugin2.max = _max;
        ScrollToPlugin2.getOffset = _getOffset;
        ScrollToPlugin2.buildGetter = _buildGetter;
        _getGSAP() && gsap2.registerPlugin(ScrollToPlugin2);
        exports2.ScrollToPlugin = ScrollToPlugin2;
        exports2.default = ScrollToPlugin2;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // node_modules/gsap/dist/Draggable.js
  var require_Draggable = __commonJS({
    "node_modules/gsap/dist/Draggable.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = global || self, factory(global.window = global.window || {}));
      })(exports, function(exports2) {
        "use strict";
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          subClass.__proto__ = superClass;
        }
        function _assertThisInitialized(self2) {
          if (self2 === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return self2;
        }
        var _doc, _win, _docElement, _body, _divContainer, _svgContainer, _identityMatrix, _gEl, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _hasOffsetBug, _setDoc = function _setDoc2(element) {
          var doc = element.ownerDocument || element;
          if (!(_transformProp in element.style) && "msTransform" in element.style) {
            _transformProp = "msTransform";
            _transformOriginProp = _transformProp + "Origin";
          }
          while (doc.parentNode && (doc = doc.parentNode)) {
          }
          _win = window;
          _identityMatrix = new Matrix2D();
          if (doc) {
            _doc = doc;
            _docElement = doc.documentElement;
            _body = doc.body;
            _gEl = _doc.createElementNS("http://www.w3.org/2000/svg", "g");
            _gEl.style.transform = "none";
            var d1 = doc.createElement("div"), d2 = doc.createElement("div"), root = doc && (doc.body || doc.firstElementChild);
            if (root && root.appendChild) {
              root.appendChild(d1);
              d1.appendChild(d2);
              d1.setAttribute("style", "position:static;transform:translate3d(0,0,1px)");
              _hasOffsetBug = d2.offsetParent !== d1;
              root.removeChild(d1);
            }
          }
          return doc;
        }, _forceNonZeroScale = function _forceNonZeroScale2(e) {
          var a, cache;
          while (e && e !== _body) {
            cache = e._gsap;
            cache && cache.uncache && cache.get(e, "x");
            if (cache && !cache.scaleX && !cache.scaleY && cache.renderTransform) {
              cache.scaleX = cache.scaleY = 1e-4;
              cache.renderTransform(1, cache);
              a ? a.push(cache) : a = [cache];
            }
            e = e.parentNode;
          }
          return a;
        }, _svgTemps = [], _divTemps = [], _getDocScrollTop = function _getDocScrollTop2() {
          return _win.pageYOffset || _doc.scrollTop || _docElement.scrollTop || _body.scrollTop || 0;
        }, _getDocScrollLeft = function _getDocScrollLeft2() {
          return _win.pageXOffset || _doc.scrollLeft || _docElement.scrollLeft || _body.scrollLeft || 0;
        }, _svgOwner = function _svgOwner2(element) {
          return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
        }, _isFixed = function _isFixed2(element) {
          if (_win.getComputedStyle(element).position === "fixed") {
            return true;
          }
          element = element.parentNode;
          if (element && element.nodeType === 1) {
            return _isFixed2(element);
          }
        }, _createSibling = function _createSibling2(element, i) {
          if (element.parentNode && (_doc || _setDoc(element))) {
            var svg = _svgOwner(element), ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", type = svg ? i ? "rect" : "g" : "div", x = i !== 2 ? 0 : 100, y = i === 3 ? 100 : 0, css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", e = _doc.createElementNS ? _doc.createElementNS(ns.replace(/^https/, "http"), type) : _doc.createElement(type);
            if (i) {
              if (!svg) {
                if (!_divContainer) {
                  _divContainer = _createSibling2(element);
                  _divContainer.style.cssText = css;
                }
                e.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x + "px";
                _divContainer.appendChild(e);
              } else {
                _svgContainer || (_svgContainer = _createSibling2(element));
                e.setAttribute("width", 0.01);
                e.setAttribute("height", 0.01);
                e.setAttribute("transform", "translate(" + x + "," + y + ")");
                _svgContainer.appendChild(e);
              }
            }
            return e;
          }
          throw "Need document and parent.";
        }, _consolidate = function _consolidate2(m) {
          var c = new Matrix2D(), i = 0;
          for (; i < m.numberOfItems; i++) {
            c.multiply(m.getItem(i).matrix);
          }
          return c;
        }, _getCTM = function _getCTM2(svg) {
          var m = svg.getCTM(), transform;
          if (!m) {
            transform = svg.style[_transformProp];
            svg.style[_transformProp] = "none";
            svg.appendChild(_gEl);
            m = _gEl.getCTM();
            svg.removeChild(_gEl);
            transform ? svg.style[_transformProp] = transform : svg.style.removeProperty(_transformProp.replace(/([A-Z])/g, "-$1").toLowerCase());
          }
          return m || _identityMatrix.clone();
        }, _placeSiblings = function _placeSiblings2(element, adjustGOffset) {
          var svg = _svgOwner(element), isRootSVG = element === svg, siblings = svg ? _svgTemps : _divTemps, parent = element.parentNode, container, m, b, x, y, cs;
          if (element === _win) {
            return element;
          }
          siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
          container = svg ? _svgContainer : _divContainer;
          if (svg) {
            if (isRootSVG) {
              b = _getCTM(element);
              x = -b.e / b.a;
              y = -b.f / b.d;
              m = _identityMatrix;
            } else if (element.getBBox) {
              b = element.getBBox();
              m = element.transform ? element.transform.baseVal : {};
              m = !m.numberOfItems ? _identityMatrix : m.numberOfItems > 1 ? _consolidate(m) : m.getItem(0).matrix;
              x = m.a * b.x + m.c * b.y;
              y = m.b * b.x + m.d * b.y;
            } else {
              m = new Matrix2D();
              x = y = 0;
            }
            if (adjustGOffset && element.tagName.toLowerCase() === "g") {
              x = y = 0;
            }
            (isRootSVG ? svg : parent).appendChild(container);
            container.setAttribute("transform", "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + (m.e + x) + "," + (m.f + y) + ")");
          } else {
            x = y = 0;
            if (_hasOffsetBug) {
              m = element.offsetParent;
              b = element;
              while (b && (b = b.parentNode) && b !== m && b.parentNode) {
                if ((_win.getComputedStyle(b)[_transformProp] + "").length > 4) {
                  x = b.offsetLeft;
                  y = b.offsetTop;
                  b = 0;
                }
              }
            }
            cs = _win.getComputedStyle(element);
            if (cs.position !== "absolute" && cs.position !== "fixed") {
              m = element.offsetParent;
              while (parent && parent !== m) {
                x += parent.scrollLeft || 0;
                y += parent.scrollTop || 0;
                parent = parent.parentNode;
              }
            }
            b = container.style;
            b.top = element.offsetTop - y + "px";
            b.left = element.offsetLeft - x + "px";
            b[_transformProp] = cs[_transformProp];
            b[_transformOriginProp] = cs[_transformOriginProp];
            b.position = cs.position === "fixed" ? "fixed" : "absolute";
            element.parentNode.appendChild(container);
          }
          return container;
        }, _setMatrix = function _setMatrix2(m, a, b, c, d, e, f) {
          m.a = a;
          m.b = b;
          m.c = c;
          m.d = d;
          m.e = e;
          m.f = f;
          return m;
        };
        var Matrix2D = function() {
          function Matrix2D2(a, b, c, d, e, f) {
            if (a === void 0) {
              a = 1;
            }
            if (b === void 0) {
              b = 0;
            }
            if (c === void 0) {
              c = 0;
            }
            if (d === void 0) {
              d = 1;
            }
            if (e === void 0) {
              e = 0;
            }
            if (f === void 0) {
              f = 0;
            }
            _setMatrix(this, a, b, c, d, e, f);
          }
          var _proto = Matrix2D2.prototype;
          _proto.inverse = function inverse() {
            var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, determinant = a * d - b * c || 1e-10;
            return _setMatrix(this, d / determinant, -b / determinant, -c / determinant, a / determinant, (c * f - d * e) / determinant, -(a * f - b * e) / determinant);
          };
          _proto.multiply = function multiply(matrix) {
            var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, a2 = matrix.a, b2 = matrix.c, c2 = matrix.b, d2 = matrix.d, e2 = matrix.e, f2 = matrix.f;
            return _setMatrix(this, a2 * a + c2 * c, a2 * b + c2 * d, b2 * a + d2 * c, b2 * b + d2 * d, e + e2 * a + f2 * c, f + e2 * b + f2 * d);
          };
          _proto.clone = function clone() {
            return new Matrix2D2(this.a, this.b, this.c, this.d, this.e, this.f);
          };
          _proto.equals = function equals(matrix) {
            var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
            return a === matrix.a && b === matrix.b && c === matrix.c && d === matrix.d && e === matrix.e && f === matrix.f;
          };
          _proto.apply = function apply(point, decoratee) {
            if (decoratee === void 0) {
              decoratee = {};
            }
            var x = point.x, y = point.y, a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
            decoratee.x = x * a + y * c + e || 0;
            decoratee.y = x * b + y * d + f || 0;
            return decoratee;
          };
          return Matrix2D2;
        }();
        function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
          if (!element || !element.parentNode || (_doc || _setDoc(element)).documentElement === element) {
            return new Matrix2D();
          }
          var zeroScales = _forceNonZeroScale(element), svg = _svgOwner(element), temps = svg ? _svgTemps : _divTemps, container = _placeSiblings(element, adjustGOffset), b1 = temps[0].getBoundingClientRect(), b2 = temps[1].getBoundingClientRect(), b3 = temps[2].getBoundingClientRect(), parent = container.parentNode, isFixed = !includeScrollInFixed && _isFixed(element), m = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));
          parent.removeChild(container);
          if (zeroScales) {
            b1 = zeroScales.length;
            while (b1--) {
              b2 = zeroScales[b1];
              b2.scaleX = b2.scaleY = 0;
              b2.renderTransform(1, b2);
            }
          }
          return inverse ? m.inverse() : m;
        }
        var gsap2, _win$1, _doc$1, _docElement$1, _body$1, _tempDiv, _placeholderDiv, _coreInitted, _checkPrefix, _toArray, _supportsPassive, _isTouchDevice, _touchEventLookup, _isMultiTouching, _isAndroid, InertiaPlugin, _defaultCursor, _supportsPointer, _context, _getStyleSaver, _dragCount = 0, _windowExists = function _windowExists2() {
          return typeof window !== "undefined";
        }, _getGSAP = function _getGSAP2() {
          return gsap2 || _windowExists() && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
        }, _isFunction = function _isFunction2(value) {
          return typeof value === "function";
        }, _isObject = function _isObject2(value) {
          return typeof value === "object";
        }, _isUndefined = function _isUndefined2(value) {
          return typeof value === "undefined";
        }, _emptyFunc = function _emptyFunc2() {
          return false;
        }, _transformProp$1 = "transform", _transformOriginProp$1 = "transformOrigin", _round = function _round2(value) {
          return Math.round(value * 1e4) / 1e4;
        }, _isArray = Array.isArray, _createElement = function _createElement2(type, ns) {
          var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
          return e.style ? e : _doc$1.createElement(type);
        }, _RAD2DEG = 180 / Math.PI, _bigNum = 1e20, _identityMatrix$1 = new Matrix2D(), _getTime = Date.now || function() {
          return (/* @__PURE__ */ new Date()).getTime();
        }, _renderQueue = [], _lookup = {}, _lookupCount = 0, _clickableTagExp = /^(?:a|input|textarea|button|select)$/i, _lastDragTime = 0, _temp1 = {}, _windowProxy = {}, _copy = function _copy2(obj, factor) {
          var copy = {}, p;
          for (p in obj) {
            copy[p] = factor ? obj[p] * factor : obj[p];
          }
          return copy;
        }, _extend = function _extend2(obj, defaults) {
          for (var p in defaults) {
            if (!(p in obj)) {
              obj[p] = defaults[p];
            }
          }
          return obj;
        }, _setTouchActionForAllDescendants = function _setTouchActionForAllDescendants2(elements, value) {
          var i = elements.length, children;
          while (i--) {
            value ? elements[i].style.touchAction = value : elements[i].style.removeProperty("touch-action");
            children = elements[i].children;
            children && children.length && _setTouchActionForAllDescendants2(children, value);
          }
        }, _renderQueueTick = function _renderQueueTick2() {
          return _renderQueue.forEach(function(func) {
            return func();
          });
        }, _addToRenderQueue = function _addToRenderQueue2(func) {
          _renderQueue.push(func);
          if (_renderQueue.length === 1) {
            gsap2.ticker.add(_renderQueueTick);
          }
        }, _renderQueueTimeout = function _renderQueueTimeout2() {
          return !_renderQueue.length && gsap2.ticker.remove(_renderQueueTick);
        }, _removeFromRenderQueue = function _removeFromRenderQueue2(func) {
          var i = _renderQueue.length;
          while (i--) {
            if (_renderQueue[i] === func) {
              _renderQueue.splice(i, 1);
            }
          }
          gsap2.to(_renderQueueTimeout, {
            overwrite: true,
            delay: 15,
            duration: 0,
            onComplete: _renderQueueTimeout,
            data: "_draggable"
          });
        }, _setDefaults = function _setDefaults2(obj, defaults) {
          for (var p in defaults) {
            if (!(p in obj)) {
              obj[p] = defaults[p];
            }
          }
          return obj;
        }, _addListener = function _addListener2(element, type, func, capture) {
          if (element.addEventListener) {
            var touchType = _touchEventLookup[type];
            capture = capture || (_supportsPassive ? {
              passive: false
            } : null);
            element.addEventListener(touchType || type, func, capture);
            touchType && type !== touchType && element.addEventListener(type, func, capture);
          }
        }, _removeListener = function _removeListener2(element, type, func, capture) {
          if (element.removeEventListener) {
            var touchType = _touchEventLookup[type];
            element.removeEventListener(touchType || type, func, capture);
            touchType && type !== touchType && element.removeEventListener(type, func, capture);
          }
        }, _preventDefault = function _preventDefault2(event) {
          event.preventDefault && event.preventDefault();
          event.preventManipulation && event.preventManipulation();
        }, _hasTouchID = function _hasTouchID2(list, ID) {
          var i = list.length;
          while (i--) {
            if (list[i].identifier === ID) {
              return true;
            }
          }
        }, _onMultiTouchDocumentEnd = function _onMultiTouchDocumentEnd2(event) {
          _isMultiTouching = event.touches && _dragCount < event.touches.length;
          _removeListener(event.target, "touchend", _onMultiTouchDocumentEnd2);
        }, _onMultiTouchDocument = function _onMultiTouchDocument2(event) {
          _isMultiTouching = event.touches && _dragCount < event.touches.length;
          _addListener(event.target, "touchend", _onMultiTouchDocumentEnd);
        }, _getDocScrollTop$1 = function _getDocScrollTop2(doc) {
          return _win$1.pageYOffset || doc.scrollTop || doc.documentElement.scrollTop || doc.body.scrollTop || 0;
        }, _getDocScrollLeft$1 = function _getDocScrollLeft2(doc) {
          return _win$1.pageXOffset || doc.scrollLeft || doc.documentElement.scrollLeft || doc.body.scrollLeft || 0;
        }, _addScrollListener = function _addScrollListener2(e, callback) {
          _addListener(e, "scroll", callback);
          if (!_isRoot(e.parentNode)) {
            _addScrollListener2(e.parentNode, callback);
          }
        }, _removeScrollListener = function _removeScrollListener2(e, callback) {
          _removeListener(e, "scroll", callback);
          if (!_isRoot(e.parentNode)) {
            _removeScrollListener2(e.parentNode, callback);
          }
        }, _isRoot = function _isRoot2(e) {
          return !!(!e || e === _docElement$1 || e.nodeType === 9 || e === _doc$1.body || e === _win$1 || !e.nodeType || !e.parentNode);
        }, _getMaxScroll = function _getMaxScroll2(element, axis) {
          var dim = axis === "x" ? "Width" : "Height", scroll = "scroll" + dim, client = "client" + dim;
          return Math.max(0, _isRoot(element) ? Math.max(_docElement$1[scroll], _body$1[scroll]) - (_win$1["inner" + dim] || _docElement$1[client] || _body$1[client]) : element[scroll] - element[client]);
        }, _recordMaxScrolls = function _recordMaxScrolls2(e, skipCurrent) {
          var x = _getMaxScroll(e, "x"), y = _getMaxScroll(e, "y");
          if (_isRoot(e)) {
            e = _windowProxy;
          } else {
            _recordMaxScrolls2(e.parentNode, skipCurrent);
          }
          e._gsMaxScrollX = x;
          e._gsMaxScrollY = y;
          if (!skipCurrent) {
            e._gsScrollX = e.scrollLeft || 0;
            e._gsScrollY = e.scrollTop || 0;
          }
        }, _setStyle = function _setStyle2(element, property, value) {
          var style = element.style;
          if (!style) {
            return;
          }
          if (_isUndefined(style[property])) {
            property = _checkPrefix(property, element) || property;
          }
          if (value == null) {
            style.removeProperty && style.removeProperty(property.replace(/([A-Z])/g, "-$1").toLowerCase());
          } else {
            style[property] = value;
          }
        }, _getComputedStyle = function _getComputedStyle2(element) {
          return _win$1.getComputedStyle(element instanceof Element ? element : element.host || (element.parentNode || {}).host || element);
        }, _tempRect = {}, _parseRect = function _parseRect2(e) {
          if (e === _win$1) {
            _tempRect.left = _tempRect.top = 0;
            _tempRect.width = _tempRect.right = _docElement$1.clientWidth || e.innerWidth || _body$1.clientWidth || 0;
            _tempRect.height = _tempRect.bottom = (e.innerHeight || 0) - 20 < _docElement$1.clientHeight ? _docElement$1.clientHeight : e.innerHeight || _body$1.clientHeight || 0;
            return _tempRect;
          }
          var doc = e.ownerDocument || _doc$1, r = !_isUndefined(e.pageX) ? {
            left: e.pageX - _getDocScrollLeft$1(doc),
            top: e.pageY - _getDocScrollTop$1(doc),
            right: e.pageX - _getDocScrollLeft$1(doc) + 1,
            bottom: e.pageY - _getDocScrollTop$1(doc) + 1
          } : !e.nodeType && !_isUndefined(e.left) && !_isUndefined(e.top) ? e : _toArray(e)[0].getBoundingClientRect();
          if (_isUndefined(r.right) && !_isUndefined(r.width)) {
            r.right = r.left + r.width;
            r.bottom = r.top + r.height;
          } else if (_isUndefined(r.width)) {
            r = {
              width: r.right - r.left,
              height: r.bottom - r.top,
              right: r.right,
              left: r.left,
              bottom: r.bottom,
              top: r.top
            };
          }
          return r;
        }, _dispatchEvent = function _dispatchEvent2(target, type, callbackName) {
          var vars = target.vars, callback = vars[callbackName], listeners = target._listeners[type], result;
          if (_isFunction(callback)) {
            result = callback.apply(vars.callbackScope || target, vars[callbackName + "Params"] || [target.pointerEvent]);
          }
          if (listeners && target.dispatchEvent(type) === false) {
            result = false;
          }
          return result;
        }, _getBounds = function _getBounds2(target, context) {
          var e = _toArray(target)[0], top, left, offset;
          if (!e.nodeType && e !== _win$1) {
            if (!_isUndefined(target.left)) {
              offset = {
                x: 0,
                y: 0
              };
              return {
                left: target.left - offset.x,
                top: target.top - offset.y,
                width: target.width,
                height: target.height
              };
            }
            left = target.min || target.minX || target.minRotation || 0;
            top = target.min || target.minY || 0;
            return {
              left,
              top,
              width: (target.max || target.maxX || target.maxRotation || 0) - left,
              height: (target.max || target.maxY || 0) - top
            };
          }
          return _getElementBounds(e, context);
        }, _point1 = {}, _getElementBounds = function _getElementBounds2(element, context) {
          context = _toArray(context)[0];
          var isSVG = element.getBBox && element.ownerSVGElement, doc = element.ownerDocument || _doc$1, left, right, top, bottom, matrix, p1, p2, p3, p4, bbox, width, height, cs;
          if (element === _win$1) {
            top = _getDocScrollTop$1(doc);
            left = _getDocScrollLeft$1(doc);
            right = left + (doc.documentElement.clientWidth || element.innerWidth || doc.body.clientWidth || 0);
            bottom = top + ((element.innerHeight || 0) - 20 < doc.documentElement.clientHeight ? doc.documentElement.clientHeight : element.innerHeight || doc.body.clientHeight || 0);
          } else if (context === _win$1 || _isUndefined(context)) {
            return element.getBoundingClientRect();
          } else {
            left = top = 0;
            if (isSVG) {
              bbox = element.getBBox();
              width = bbox.width;
              height = bbox.height;
            } else {
              if (element.viewBox && (bbox = element.viewBox.baseVal)) {
                left = bbox.x || 0;
                top = bbox.y || 0;
                width = bbox.width;
                height = bbox.height;
              }
              if (!width) {
                cs = _getComputedStyle(element);
                bbox = cs.boxSizing === "border-box";
                width = (parseFloat(cs.width) || element.clientWidth || 0) + (bbox ? 0 : parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth));
                height = (parseFloat(cs.height) || element.clientHeight || 0) + (bbox ? 0 : parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth));
              }
            }
            right = width;
            bottom = height;
          }
          if (element === context) {
            return {
              left,
              top,
              width: right - left,
              height: bottom - top
            };
          }
          matrix = getGlobalMatrix(context, true).multiply(getGlobalMatrix(element));
          p1 = matrix.apply({
            x: left,
            y: top
          });
          p2 = matrix.apply({
            x: right,
            y: top
          });
          p3 = matrix.apply({
            x: right,
            y: bottom
          });
          p4 = matrix.apply({
            x: left,
            y: bottom
          });
          left = Math.min(p1.x, p2.x, p3.x, p4.x);
          top = Math.min(p1.y, p2.y, p3.y, p4.y);
          return {
            left,
            top,
            width: Math.max(p1.x, p2.x, p3.x, p4.x) - left,
            height: Math.max(p1.y, p2.y, p3.y, p4.y) - top
          };
        }, _parseInertia = function _parseInertia2(draggable, snap, max, min, factor, forceZeroVelocity) {
          var vars = {}, a, i, l;
          if (snap) {
            if (factor !== 1 && snap instanceof Array) {
              vars.end = a = [];
              l = snap.length;
              if (_isObject(snap[0])) {
                for (i = 0; i < l; i++) {
                  a[i] = _copy(snap[i], factor);
                }
              } else {
                for (i = 0; i < l; i++) {
                  a[i] = snap[i] * factor;
                }
              }
              max += 1.1;
              min -= 1.1;
            } else if (_isFunction(snap)) {
              vars.end = function(value) {
                var result = snap.call(draggable, value), copy, p;
                if (factor !== 1) {
                  if (_isObject(result)) {
                    copy = {};
                    for (p in result) {
                      copy[p] = result[p] * factor;
                    }
                    result = copy;
                  } else {
                    result *= factor;
                  }
                }
                return result;
              };
            } else {
              vars.end = snap;
            }
          }
          if (max || max === 0) {
            vars.max = max;
          }
          if (min || min === 0) {
            vars.min = min;
          }
          if (forceZeroVelocity) {
            vars.velocity = 0;
          }
          return vars;
        }, _isClickable = function _isClickable2(element) {
          var data;
          return !element || !element.getAttribute || element === _body$1 ? false : (data = element.getAttribute("data-clickable")) === "true" || data !== "false" && (_clickableTagExp.test(element.nodeName + "") || element.getAttribute("contentEditable") === "true") ? true : _isClickable2(element.parentNode);
        }, _setSelectable = function _setSelectable2(elements, selectable) {
          var i = elements.length, e;
          while (i--) {
            e = elements[i];
            e.ondragstart = e.onselectstart = selectable ? null : _emptyFunc;
            gsap2.set(e, {
              lazy: true,
              userSelect: selectable ? "text" : "none"
            });
          }
        }, _isFixed$1 = function _isFixed2(element) {
          if (_getComputedStyle(element).position === "fixed") {
            return true;
          }
          element = element.parentNode;
          if (element && element.nodeType === 1) {
            return _isFixed2(element);
          }
        }, _supports3D, _addPaddingBR, ScrollProxy = function ScrollProxy2(element, vars) {
          element = gsap2.utils.toArray(element)[0];
          vars = vars || {};
          var content = document.createElement("div"), style = content.style, node = element.firstChild, offsetTop = 0, offsetLeft = 0, prevTop = element.scrollTop, prevLeft = element.scrollLeft, scrollWidth = element.scrollWidth, scrollHeight = element.scrollHeight, extraPadRight = 0, maxLeft = 0, maxTop = 0, elementWidth, elementHeight, contentHeight, nextNode, transformStart, transformEnd;
          if (_supports3D && vars.force3D !== false) {
            transformStart = "translate3d(";
            transformEnd = "px,0px)";
          } else if (_transformProp$1) {
            transformStart = "translate(";
            transformEnd = "px)";
          }
          this.scrollTop = function(value, force) {
            if (!arguments.length) {
              return -this.top();
            }
            this.top(-value, force);
          };
          this.scrollLeft = function(value, force) {
            if (!arguments.length) {
              return -this.left();
            }
            this.left(-value, force);
          };
          this.left = function(value, force) {
            if (!arguments.length) {
              return -(element.scrollLeft + offsetLeft);
            }
            var dif = element.scrollLeft - prevLeft, oldOffset = offsetLeft;
            if ((dif > 2 || dif < -2) && !force) {
              prevLeft = element.scrollLeft;
              gsap2.killTweensOf(this, {
                left: 1,
                scrollLeft: 1
              });
              this.left(-prevLeft);
              if (vars.onKill) {
                vars.onKill();
              }
              return;
            }
            value = -value;
            if (value < 0) {
              offsetLeft = value - 0.5 | 0;
              value = 0;
            } else if (value > maxLeft) {
              offsetLeft = value - maxLeft | 0;
              value = maxLeft;
            } else {
              offsetLeft = 0;
            }
            if (offsetLeft || oldOffset) {
              if (!this._skip) {
                style[_transformProp$1] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
              }
              if (offsetLeft + extraPadRight >= 0) {
                style.paddingRight = offsetLeft + extraPadRight + "px";
              }
            }
            element.scrollLeft = value | 0;
            prevLeft = element.scrollLeft;
          };
          this.top = function(value, force) {
            if (!arguments.length) {
              return -(element.scrollTop + offsetTop);
            }
            var dif = element.scrollTop - prevTop, oldOffset = offsetTop;
            if ((dif > 2 || dif < -2) && !force) {
              prevTop = element.scrollTop;
              gsap2.killTweensOf(this, {
                top: 1,
                scrollTop: 1
              });
              this.top(-prevTop);
              if (vars.onKill) {
                vars.onKill();
              }
              return;
            }
            value = -value;
            if (value < 0) {
              offsetTop = value - 0.5 | 0;
              value = 0;
            } else if (value > maxTop) {
              offsetTop = value - maxTop | 0;
              value = maxTop;
            } else {
              offsetTop = 0;
            }
            if (offsetTop || oldOffset) {
              if (!this._skip) {
                style[_transformProp$1] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
              }
            }
            element.scrollTop = value | 0;
            prevTop = element.scrollTop;
          };
          this.maxScrollTop = function() {
            return maxTop;
          };
          this.maxScrollLeft = function() {
            return maxLeft;
          };
          this.disable = function() {
            node = content.firstChild;
            while (node) {
              nextNode = node.nextSibling;
              element.appendChild(node);
              node = nextNode;
            }
            if (element === content.parentNode) {
              element.removeChild(content);
            }
          };
          this.enable = function() {
            node = element.firstChild;
            if (node === content) {
              return;
            }
            while (node) {
              nextNode = node.nextSibling;
              content.appendChild(node);
              node = nextNode;
            }
            element.appendChild(content);
            this.calibrate();
          };
          this.calibrate = function(force) {
            var widthMatches = element.clientWidth === elementWidth, cs, x, y;
            prevTop = element.scrollTop;
            prevLeft = element.scrollLeft;
            if (widthMatches && element.clientHeight === elementHeight && content.offsetHeight === contentHeight && scrollWidth === element.scrollWidth && scrollHeight === element.scrollHeight && !force) {
              return;
            }
            if (offsetTop || offsetLeft) {
              x = this.left();
              y = this.top();
              this.left(-element.scrollLeft);
              this.top(-element.scrollTop);
            }
            cs = _getComputedStyle(element);
            if (!widthMatches || force) {
              style.display = "block";
              style.width = "auto";
              style.paddingRight = "0px";
              extraPadRight = Math.max(0, element.scrollWidth - element.clientWidth);
              if (extraPadRight) {
                extraPadRight += parseFloat(cs.paddingLeft) + (_addPaddingBR ? parseFloat(cs.paddingRight) : 0);
              }
            }
            style.display = "inline-block";
            style.position = "relative";
            style.overflow = "visible";
            style.verticalAlign = "top";
            style.boxSizing = "content-box";
            style.width = "100%";
            style.paddingRight = extraPadRight + "px";
            if (_addPaddingBR) {
              style.paddingBottom = cs.paddingBottom;
            }
            elementWidth = element.clientWidth;
            elementHeight = element.clientHeight;
            scrollWidth = element.scrollWidth;
            scrollHeight = element.scrollHeight;
            maxLeft = element.scrollWidth - elementWidth;
            maxTop = element.scrollHeight - elementHeight;
            contentHeight = content.offsetHeight;
            style.display = "block";
            if (x || y) {
              this.left(x);
              this.top(y);
            }
          };
          this.content = content;
          this.element = element;
          this._skip = false;
          this.enable();
        }, _initCore = function _initCore2(required) {
          if (_windowExists() && document.body) {
            var nav = window && window.navigator;
            _win$1 = window;
            _doc$1 = document;
            _docElement$1 = _doc$1.documentElement;
            _body$1 = _doc$1.body;
            _tempDiv = _createElement("div");
            _supportsPointer = !!window.PointerEvent;
            _placeholderDiv = _createElement("div");
            _placeholderDiv.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab";
            _defaultCursor = _placeholderDiv.style.cursor === "grab" ? "grab" : "move";
            _isAndroid = nav && nav.userAgent.toLowerCase().indexOf("android") !== -1;
            _isTouchDevice = "ontouchstart" in _docElement$1 && "orientation" in _win$1 || nav && (nav.MaxTouchPoints > 0 || nav.msMaxTouchPoints > 0);
            _addPaddingBR = function() {
              var div = _createElement("div"), child = _createElement("div"), childStyle = child.style, parent = _body$1, val;
              childStyle.display = "inline-block";
              childStyle.position = "relative";
              div.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden";
              div.appendChild(child);
              parent.appendChild(div);
              val = child.offsetHeight + 18 > div.scrollHeight;
              parent.removeChild(div);
              return val;
            }();
            _touchEventLookup = function(types) {
              var standard = types.split(","), converted = ("onpointerdown" in _tempDiv ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in _tempDiv ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : types).split(","), obj = {}, i = 4;
              while (--i > -1) {
                obj[standard[i]] = converted[i];
                obj[converted[i]] = standard[i];
              }
              try {
                _docElement$1.addEventListener("test", null, Object.defineProperty({}, "passive", {
                  get: function get() {
                    _supportsPassive = 1;
                  }
                }));
              } catch (e) {
              }
              return obj;
            }("touchstart,touchmove,touchend,touchcancel");
            _addListener(_doc$1, "touchcancel", _emptyFunc);
            _addListener(_win$1, "touchmove", _emptyFunc);
            _body$1 && _body$1.addEventListener("touchstart", _emptyFunc);
            _addListener(_doc$1, "contextmenu", function() {
              for (var p in _lookup) {
                if (_lookup[p].isPressed) {
                  _lookup[p].endDrag();
                }
              }
            });
            gsap2 = _coreInitted = _getGSAP();
          }
          if (gsap2) {
            InertiaPlugin = gsap2.plugins.inertia;
            _context = gsap2.core.context || function() {
            };
            _checkPrefix = gsap2.utils.checkPrefix;
            _transformProp$1 = _checkPrefix(_transformProp$1);
            _transformOriginProp$1 = _checkPrefix(_transformOriginProp$1);
            _toArray = gsap2.utils.toArray;
            _getStyleSaver = gsap2.core.getStyleSaver;
            _supports3D = !!_checkPrefix("perspective");
          } else if (required) {
            console.warn("Please gsap.registerPlugin(Draggable)");
          }
        };
        var EventDispatcher = function() {
          function EventDispatcher2(target) {
            this._listeners = {};
            this.target = target || this;
          }
          var _proto = EventDispatcher2.prototype;
          _proto.addEventListener = function addEventListener(type, callback) {
            var list = this._listeners[type] || (this._listeners[type] = []);
            if (!~list.indexOf(callback)) {
              list.push(callback);
            }
          };
          _proto.removeEventListener = function removeEventListener(type, callback) {
            var list = this._listeners[type], i = list && list.indexOf(callback);
            i >= 0 && list.splice(i, 1);
          };
          _proto.dispatchEvent = function dispatchEvent(type) {
            var _this = this;
            var result;
            (this._listeners[type] || []).forEach(function(callback) {
              return callback.call(_this, {
                type,
                target: _this.target
              }) === false && (result = false);
            });
            return result;
          };
          return EventDispatcher2;
        }();
        var Draggable2 = function(_EventDispatcher) {
          _inheritsLoose(Draggable3, _EventDispatcher);
          function Draggable3(target, vars) {
            var _this2;
            _this2 = _EventDispatcher.call(this) || this;
            _coreInitted || _initCore(1);
            target = _toArray(target)[0];
            _this2.styles = _getStyleSaver && _getStyleSaver(target, "transform,left,top");
            if (!InertiaPlugin) {
              InertiaPlugin = gsap2.plugins.inertia;
            }
            _this2.vars = vars = _copy(vars || {});
            _this2.target = target;
            _this2.x = _this2.y = _this2.rotation = 0;
            _this2.dragResistance = parseFloat(vars.dragResistance) || 0;
            _this2.edgeResistance = isNaN(vars.edgeResistance) ? 1 : parseFloat(vars.edgeResistance) || 0;
            _this2.lockAxis = vars.lockAxis;
            _this2.autoScroll = vars.autoScroll || 0;
            _this2.lockedAxis = null;
            _this2.allowEventDefault = !!vars.allowEventDefault;
            gsap2.getProperty(target, "x");
            var type = (vars.type || "x,y").toLowerCase(), xyMode = ~type.indexOf("x") || ~type.indexOf("y"), rotationMode = type.indexOf("rotation") !== -1, xProp = rotationMode ? "rotation" : xyMode ? "x" : "left", yProp = xyMode ? "y" : "top", allowX = !!(~type.indexOf("x") || ~type.indexOf("left") || type === "scroll"), allowY = !!(~type.indexOf("y") || ~type.indexOf("top") || type === "scroll"), minimumMovement = vars.minimumMovement || 2, self2 = _assertThisInitialized(_this2), triggers = _toArray(vars.trigger || vars.handle || target), killProps = {}, dragEndTime = 0, checkAutoScrollBounds = false, autoScrollMarginTop = vars.autoScrollMarginTop || 40, autoScrollMarginRight = vars.autoScrollMarginRight || 40, autoScrollMarginBottom = vars.autoScrollMarginBottom || 40, autoScrollMarginLeft = vars.autoScrollMarginLeft || 40, isClickable = vars.clickableTest || _isClickable, clickTime = 0, gsCache = target._gsap || gsap2.core.getCache(target), isFixed = _isFixed$1(target), getPropAsNum = function getPropAsNum2(property, unit) {
              return parseFloat(gsCache.get(target, property, unit));
            }, ownerDoc = target.ownerDocument || _doc$1, enabled, scrollProxy, startPointerX, startPointerY, startElementX, startElementY, hasBounds, hasDragCallback, hasMoveCallback, maxX, minX, maxY, minY, touch, touchID, rotationOrigin, dirty, old, snapX, snapY, snapXY, isClicking, touchEventTarget, matrix, interrupted, allowNativeTouchScrolling, touchDragAxis, isDispatching, clickDispatch, trustedClickDispatch, isPreventingDefault, innerMatrix, dragged, onContextMenu = function onContextMenu2(e) {
              _preventDefault(e);
              e.stopImmediatePropagation && e.stopImmediatePropagation();
              return false;
            }, render = function render2(suppressEvents) {
              if (self2.autoScroll && self2.isDragging && (checkAutoScrollBounds || dirty)) {
                var e = target, autoScrollFactor = self2.autoScroll * 15, parent, isRoot, rect, pointerX, pointerY, changeX, changeY, gap;
                checkAutoScrollBounds = false;
                _windowProxy.scrollTop = _win$1.pageYOffset != null ? _win$1.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
                _windowProxy.scrollLeft = _win$1.pageXOffset != null ? _win$1.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;
                pointerX = self2.pointerX - _windowProxy.scrollLeft;
                pointerY = self2.pointerY - _windowProxy.scrollTop;
                while (e && !isRoot) {
                  isRoot = _isRoot(e.parentNode);
                  parent = isRoot ? _windowProxy : e.parentNode;
                  rect = isRoot ? {
                    bottom: Math.max(_docElement$1.clientHeight, _win$1.innerHeight || 0),
                    right: Math.max(_docElement$1.clientWidth, _win$1.innerWidth || 0),
                    left: 0,
                    top: 0
                  } : parent.getBoundingClientRect();
                  changeX = changeY = 0;
                  if (allowY) {
                    gap = parent._gsMaxScrollY - parent.scrollTop;
                    if (gap < 0) {
                      changeY = gap;
                    } else if (pointerY > rect.bottom - autoScrollMarginBottom && gap) {
                      checkAutoScrollBounds = true;
                      changeY = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.bottom - pointerY) / autoScrollMarginBottom) | 0);
                    } else if (pointerY < rect.top + autoScrollMarginTop && parent.scrollTop) {
                      checkAutoScrollBounds = true;
                      changeY = -Math.min(parent.scrollTop, autoScrollFactor * (1 - Math.max(0, pointerY - rect.top) / autoScrollMarginTop) | 0);
                    }
                    if (changeY) {
                      parent.scrollTop += changeY;
                    }
                  }
                  if (allowX) {
                    gap = parent._gsMaxScrollX - parent.scrollLeft;
                    if (gap < 0) {
                      changeX = gap;
                    } else if (pointerX > rect.right - autoScrollMarginRight && gap) {
                      checkAutoScrollBounds = true;
                      changeX = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.right - pointerX) / autoScrollMarginRight) | 0);
                    } else if (pointerX < rect.left + autoScrollMarginLeft && parent.scrollLeft) {
                      checkAutoScrollBounds = true;
                      changeX = -Math.min(parent.scrollLeft, autoScrollFactor * (1 - Math.max(0, pointerX - rect.left) / autoScrollMarginLeft) | 0);
                    }
                    if (changeX) {
                      parent.scrollLeft += changeX;
                    }
                  }
                  if (isRoot && (changeX || changeY)) {
                    _win$1.scrollTo(parent.scrollLeft, parent.scrollTop);
                    setPointerPosition(self2.pointerX + changeX, self2.pointerY + changeY);
                  }
                  e = parent;
                }
              }
              if (dirty) {
                var x = self2.x, y = self2.y;
                if (rotationMode) {
                  self2.deltaX = x - parseFloat(gsCache.rotation);
                  self2.rotation = x;
                  gsCache.rotation = x + "deg";
                  gsCache.renderTransform(1, gsCache);
                } else {
                  if (scrollProxy) {
                    if (allowY) {
                      self2.deltaY = y - scrollProxy.top();
                      scrollProxy.top(y);
                    }
                    if (allowX) {
                      self2.deltaX = x - scrollProxy.left();
                      scrollProxy.left(x);
                    }
                  } else if (xyMode) {
                    if (allowY) {
                      self2.deltaY = y - parseFloat(gsCache.y);
                      gsCache.y = y + "px";
                    }
                    if (allowX) {
                      self2.deltaX = x - parseFloat(gsCache.x);
                      gsCache.x = x + "px";
                    }
                    gsCache.renderTransform(1, gsCache);
                  } else {
                    if (allowY) {
                      self2.deltaY = y - parseFloat(target.style.top || 0);
                      target.style.top = y + "px";
                    }
                    if (allowX) {
                      self2.deltaX = x - parseFloat(target.style.left || 0);
                      target.style.left = x + "px";
                    }
                  }
                }
                if (hasDragCallback && !suppressEvents && !isDispatching) {
                  isDispatching = true;
                  if (_dispatchEvent(self2, "drag", "onDrag") === false) {
                    if (allowX) {
                      self2.x -= self2.deltaX;
                    }
                    if (allowY) {
                      self2.y -= self2.deltaY;
                    }
                    render2(true);
                  }
                  isDispatching = false;
                }
              }
              dirty = false;
            }, syncXY = function syncXY2(skipOnUpdate, skipSnap) {
              var x = self2.x, y = self2.y, snappedValue, cs;
              if (!target._gsap) {
                gsCache = gsap2.core.getCache(target);
              }
              gsCache.uncache && gsap2.getProperty(target, "x");
              if (xyMode) {
                self2.x = parseFloat(gsCache.x);
                self2.y = parseFloat(gsCache.y);
              } else if (rotationMode) {
                self2.x = self2.rotation = parseFloat(gsCache.rotation);
              } else if (scrollProxy) {
                self2.y = scrollProxy.top();
                self2.x = scrollProxy.left();
              } else {
                self2.y = parseFloat(target.style.top || (cs = _getComputedStyle(target)) && cs.top) || 0;
                self2.x = parseFloat(target.style.left || (cs || {}).left) || 0;
              }
              if ((snapX || snapY || snapXY) && !skipSnap && (self2.isDragging || self2.isThrowing)) {
                if (snapXY) {
                  _temp1.x = self2.x;
                  _temp1.y = self2.y;
                  snappedValue = snapXY(_temp1);
                  if (snappedValue.x !== self2.x) {
                    self2.x = snappedValue.x;
                    dirty = true;
                  }
                  if (snappedValue.y !== self2.y) {
                    self2.y = snappedValue.y;
                    dirty = true;
                  }
                }
                if (snapX) {
                  snappedValue = snapX(self2.x);
                  if (snappedValue !== self2.x) {
                    self2.x = snappedValue;
                    if (rotationMode) {
                      self2.rotation = snappedValue;
                    }
                    dirty = true;
                  }
                }
                if (snapY) {
                  snappedValue = snapY(self2.y);
                  if (snappedValue !== self2.y) {
                    self2.y = snappedValue;
                  }
                  dirty = true;
                }
              }
              dirty && render(true);
              if (!skipOnUpdate) {
                self2.deltaX = self2.x - x;
                self2.deltaY = self2.y - y;
                _dispatchEvent(self2, "throwupdate", "onThrowUpdate");
              }
            }, buildSnapFunc = function buildSnapFunc2(snap, min, max, factor) {
              if (min == null) {
                min = -_bigNum;
              }
              if (max == null) {
                max = _bigNum;
              }
              if (_isFunction(snap)) {
                return function(n) {
                  var edgeTolerance = !self2.isPressed ? 1 : 1 - self2.edgeResistance;
                  return snap.call(self2, (n > max ? max + (n - max) * edgeTolerance : n < min ? min + (n - min) * edgeTolerance : n) * factor) * factor;
                };
              }
              if (_isArray(snap)) {
                return function(n) {
                  var i = snap.length, closest = 0, absDif = _bigNum, val, dif;
                  while (--i > -1) {
                    val = snap[i];
                    dif = val - n;
                    if (dif < 0) {
                      dif = -dif;
                    }
                    if (dif < absDif && val >= min && val <= max) {
                      closest = i;
                      absDif = dif;
                    }
                  }
                  return snap[closest];
                };
              }
              return isNaN(snap) ? function(n) {
                return n;
              } : function() {
                return snap * factor;
              };
            }, buildPointSnapFunc = function buildPointSnapFunc2(snap, minX2, maxX2, minY2, maxY2, radius, factor) {
              radius = radius && radius < _bigNum ? radius * radius : _bigNum;
              if (_isFunction(snap)) {
                return function(point) {
                  var edgeTolerance = !self2.isPressed ? 1 : 1 - self2.edgeResistance, x = point.x, y = point.y, result, dx, dy;
                  point.x = x = x > maxX2 ? maxX2 + (x - maxX2) * edgeTolerance : x < minX2 ? minX2 + (x - minX2) * edgeTolerance : x;
                  point.y = y = y > maxY2 ? maxY2 + (y - maxY2) * edgeTolerance : y < minY2 ? minY2 + (y - minY2) * edgeTolerance : y;
                  result = snap.call(self2, point);
                  if (result !== point) {
                    point.x = result.x;
                    point.y = result.y;
                  }
                  if (factor !== 1) {
                    point.x *= factor;
                    point.y *= factor;
                  }
                  if (radius < _bigNum) {
                    dx = point.x - x;
                    dy = point.y - y;
                    if (dx * dx + dy * dy > radius) {
                      point.x = x;
                      point.y = y;
                    }
                  }
                  return point;
                };
              }
              if (_isArray(snap)) {
                return function(p) {
                  var i = snap.length, closest = 0, minDist = _bigNum, x, y, point, dist;
                  while (--i > -1) {
                    point = snap[i];
                    x = point.x - p.x;
                    y = point.y - p.y;
                    dist = x * x + y * y;
                    if (dist < minDist) {
                      closest = i;
                      minDist = dist;
                    }
                  }
                  return minDist <= radius ? snap[closest] : p;
                };
              }
              return function(n) {
                return n;
              };
            }, calculateBounds = function calculateBounds2() {
              var bounds, targetBounds, snap, snapIsRaw;
              hasBounds = false;
              if (scrollProxy) {
                scrollProxy.calibrate();
                self2.minX = minX = -scrollProxy.maxScrollLeft();
                self2.minY = minY = -scrollProxy.maxScrollTop();
                self2.maxX = maxX = self2.maxY = maxY = 0;
                hasBounds = true;
              } else if (!!vars.bounds) {
                bounds = _getBounds(vars.bounds, target.parentNode);
                if (rotationMode) {
                  self2.minX = minX = bounds.left;
                  self2.maxX = maxX = bounds.left + bounds.width;
                  self2.minY = minY = self2.maxY = maxY = 0;
                } else if (!_isUndefined(vars.bounds.maxX) || !_isUndefined(vars.bounds.maxY)) {
                  bounds = vars.bounds;
                  self2.minX = minX = bounds.minX;
                  self2.minY = minY = bounds.minY;
                  self2.maxX = maxX = bounds.maxX;
                  self2.maxY = maxY = bounds.maxY;
                } else {
                  targetBounds = _getBounds(target, target.parentNode);
                  self2.minX = minX = Math.round(getPropAsNum(xProp, "px") + bounds.left - targetBounds.left);
                  self2.minY = minY = Math.round(getPropAsNum(yProp, "px") + bounds.top - targetBounds.top);
                  self2.maxX = maxX = Math.round(minX + (bounds.width - targetBounds.width));
                  self2.maxY = maxY = Math.round(minY + (bounds.height - targetBounds.height));
                }
                if (minX > maxX) {
                  self2.minX = maxX;
                  self2.maxX = maxX = minX;
                  minX = self2.minX;
                }
                if (minY > maxY) {
                  self2.minY = maxY;
                  self2.maxY = maxY = minY;
                  minY = self2.minY;
                }
                if (rotationMode) {
                  self2.minRotation = minX;
                  self2.maxRotation = maxX;
                }
                hasBounds = true;
              }
              if (vars.liveSnap) {
                snap = vars.liveSnap === true ? vars.snap || {} : vars.liveSnap;
                snapIsRaw = _isArray(snap) || _isFunction(snap);
                if (rotationMode) {
                  snapX = buildSnapFunc(snapIsRaw ? snap : snap.rotation, minX, maxX, 1);
                  snapY = null;
                } else {
                  if (snap.points) {
                    snapXY = buildPointSnapFunc(snapIsRaw ? snap : snap.points, minX, maxX, minY, maxY, snap.radius, scrollProxy ? -1 : 1);
                  } else {
                    if (allowX) {
                      snapX = buildSnapFunc(snapIsRaw ? snap : snap.x || snap.left || snap.scrollLeft, minX, maxX, scrollProxy ? -1 : 1);
                    }
                    if (allowY) {
                      snapY = buildSnapFunc(snapIsRaw ? snap : snap.y || snap.top || snap.scrollTop, minY, maxY, scrollProxy ? -1 : 1);
                    }
                  }
                }
              }
            }, onThrowComplete = function onThrowComplete2() {
              self2.isThrowing = false;
              _dispatchEvent(self2, "throwcomplete", "onThrowComplete");
            }, onThrowInterrupt = function onThrowInterrupt2() {
              self2.isThrowing = false;
            }, animate = function animate2(inertia, forceZeroVelocity) {
              var snap, snapIsRaw, tween, overshootTolerance;
              if (inertia && InertiaPlugin) {
                if (inertia === true) {
                  snap = vars.snap || vars.liveSnap || {};
                  snapIsRaw = _isArray(snap) || _isFunction(snap);
                  inertia = {
                    resistance: (vars.throwResistance || vars.resistance || 1e3) / (rotationMode ? 10 : 1)
                  };
                  if (rotationMode) {
                    inertia.rotation = _parseInertia(self2, snapIsRaw ? snap : snap.rotation, maxX, minX, 1, forceZeroVelocity);
                  } else {
                    if (allowX) {
                      inertia[xProp] = _parseInertia(self2, snapIsRaw ? snap : snap.points || snap.x || snap.left, maxX, minX, scrollProxy ? -1 : 1, forceZeroVelocity || self2.lockedAxis === "x");
                    }
                    if (allowY) {
                      inertia[yProp] = _parseInertia(self2, snapIsRaw ? snap : snap.points || snap.y || snap.top, maxY, minY, scrollProxy ? -1 : 1, forceZeroVelocity || self2.lockedAxis === "y");
                    }
                    if (snap.points || _isArray(snap) && _isObject(snap[0])) {
                      inertia.linkedProps = xProp + "," + yProp;
                      inertia.radius = snap.radius;
                    }
                  }
                }
                self2.isThrowing = true;
                overshootTolerance = !isNaN(vars.overshootTolerance) ? vars.overshootTolerance : vars.edgeResistance === 1 ? 0 : 1 - self2.edgeResistance + 0.2;
                if (!inertia.duration) {
                  inertia.duration = {
                    max: Math.max(vars.minDuration || 0, "maxDuration" in vars ? vars.maxDuration : 2),
                    min: !isNaN(vars.minDuration) ? vars.minDuration : overshootTolerance === 0 || _isObject(inertia) && inertia.resistance > 1e3 ? 0 : 0.5,
                    overshoot: overshootTolerance
                  };
                }
                self2.tween = tween = gsap2.to(scrollProxy || target, {
                  inertia,
                  data: "_draggable",
                  inherit: false,
                  onComplete: onThrowComplete,
                  onInterrupt: onThrowInterrupt,
                  onUpdate: vars.fastMode ? _dispatchEvent : syncXY,
                  onUpdateParams: vars.fastMode ? [self2, "onthrowupdate", "onThrowUpdate"] : snap && snap.radius ? [false, true] : []
                });
                if (!vars.fastMode) {
                  if (scrollProxy) {
                    scrollProxy._skip = true;
                  }
                  tween.render(1e9, true, true);
                  syncXY(true, true);
                  self2.endX = self2.x;
                  self2.endY = self2.y;
                  if (rotationMode) {
                    self2.endRotation = self2.x;
                  }
                  tween.play(0);
                  syncXY(true, true);
                  if (scrollProxy) {
                    scrollProxy._skip = false;
                  }
                }
              } else if (hasBounds) {
                self2.applyBounds();
              }
            }, updateMatrix = function updateMatrix2(shiftStart) {
              var start = matrix, p;
              matrix = getGlobalMatrix(target.parentNode, true);
              if (shiftStart && self2.isPressed && !matrix.equals(start || new Matrix2D())) {
                p = start.inverse().apply({
                  x: startPointerX,
                  y: startPointerY
                });
                matrix.apply(p, p);
                startPointerX = p.x;
                startPointerY = p.y;
              }
              if (matrix.equals(_identityMatrix$1)) {
                matrix = null;
              }
            }, recordStartPositions = function recordStartPositions2() {
              var edgeTolerance = 1 - self2.edgeResistance, offsetX = isFixed ? _getDocScrollLeft$1(ownerDoc) : 0, offsetY = isFixed ? _getDocScrollTop$1(ownerDoc) : 0, parsedOrigin, x, y;
              if (xyMode) {
                gsCache.x = getPropAsNum(xProp, "px") + "px";
                gsCache.y = getPropAsNum(yProp, "px") + "px";
                gsCache.renderTransform();
              }
              updateMatrix(false);
              _point1.x = self2.pointerX - offsetX;
              _point1.y = self2.pointerY - offsetY;
              matrix && matrix.apply(_point1, _point1);
              startPointerX = _point1.x;
              startPointerY = _point1.y;
              if (dirty) {
                setPointerPosition(self2.pointerX, self2.pointerY);
                render(true);
              }
              innerMatrix = getGlobalMatrix(target);
              if (scrollProxy) {
                calculateBounds();
                startElementY = scrollProxy.top();
                startElementX = scrollProxy.left();
              } else {
                if (isTweening()) {
                  syncXY(true, true);
                  calculateBounds();
                } else {
                  self2.applyBounds();
                }
                if (rotationMode) {
                  parsedOrigin = target.ownerSVGElement ? [gsCache.xOrigin - target.getBBox().x, gsCache.yOrigin - target.getBBox().y] : (_getComputedStyle(target)[_transformOriginProp$1] || "0 0").split(" ");
                  rotationOrigin = self2.rotationOrigin = getGlobalMatrix(target).apply({
                    x: parseFloat(parsedOrigin[0]) || 0,
                    y: parseFloat(parsedOrigin[1]) || 0
                  });
                  syncXY(true, true);
                  x = self2.pointerX - rotationOrigin.x - offsetX;
                  y = rotationOrigin.y - self2.pointerY + offsetY;
                  startElementX = self2.x;
                  startElementY = self2.y = Math.atan2(y, x) * _RAD2DEG;
                } else {
                  startElementY = getPropAsNum(yProp, "px");
                  startElementX = getPropAsNum(xProp, "px");
                }
              }
              if (hasBounds && edgeTolerance) {
                if (startElementX > maxX) {
                  startElementX = maxX + (startElementX - maxX) / edgeTolerance;
                } else if (startElementX < minX) {
                  startElementX = minX - (minX - startElementX) / edgeTolerance;
                }
                if (!rotationMode) {
                  if (startElementY > maxY) {
                    startElementY = maxY + (startElementY - maxY) / edgeTolerance;
                  } else if (startElementY < minY) {
                    startElementY = minY - (minY - startElementY) / edgeTolerance;
                  }
                }
              }
              self2.startX = startElementX = _round(startElementX);
              self2.startY = startElementY = _round(startElementY);
            }, isTweening = function isTweening2() {
              return self2.tween && self2.tween.isActive();
            }, removePlaceholder = function removePlaceholder2() {
              if (_placeholderDiv.parentNode && !isTweening() && !self2.isDragging) {
                _placeholderDiv.parentNode.removeChild(_placeholderDiv);
              }
            }, onPress = function onPress2(e, force) {
              var i;
              if (!enabled || self2.isPressed || !e || (e.type === "mousedown" || e.type === "pointerdown") && !force && _getTime() - clickTime < 30 && _touchEventLookup[self2.pointerEvent.type]) {
                isPreventingDefault && e && enabled && _preventDefault(e);
                return;
              }
              interrupted = isTweening();
              dragged = false;
              self2.pointerEvent = e;
              if (_touchEventLookup[e.type]) {
                touchEventTarget = ~e.type.indexOf("touch") ? e.currentTarget || e.target : ownerDoc;
                _addListener(touchEventTarget, "touchend", onRelease);
                _addListener(touchEventTarget, "touchmove", onMove);
                _addListener(touchEventTarget, "touchcancel", onRelease);
                _addListener(ownerDoc, "touchstart", _onMultiTouchDocument);
              } else {
                touchEventTarget = null;
                _addListener(ownerDoc, "mousemove", onMove);
              }
              touchDragAxis = null;
              if (!_supportsPointer || !touchEventTarget) {
                _addListener(ownerDoc, "mouseup", onRelease);
                e && e.target && _addListener(e.target, "mouseup", onRelease);
              }
              isClicking = isClickable.call(self2, e.target) && vars.dragClickables === false && !force;
              if (isClicking) {
                _addListener(e.target, "change", onRelease);
                _dispatchEvent(self2, "pressInit", "onPressInit");
                _dispatchEvent(self2, "press", "onPress");
                _setSelectable(triggers, true);
                isPreventingDefault = false;
                return;
              }
              allowNativeTouchScrolling = !touchEventTarget || allowX === allowY || self2.vars.allowNativeTouchScrolling === false || self2.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2) ? false : allowX ? "y" : "x";
              isPreventingDefault = !allowNativeTouchScrolling && !self2.allowEventDefault;
              if (isPreventingDefault) {
                _preventDefault(e);
                _addListener(_win$1, "touchforcechange", _preventDefault);
              }
              if (e.changedTouches) {
                e = touch = e.changedTouches[0];
                touchID = e.identifier;
              } else if (e.pointerId) {
                touchID = e.pointerId;
              } else {
                touch = touchID = null;
              }
              _dragCount++;
              _addToRenderQueue(render);
              startPointerY = self2.pointerY = e.pageY;
              startPointerX = self2.pointerX = e.pageX;
              _dispatchEvent(self2, "pressInit", "onPressInit");
              if (allowNativeTouchScrolling || self2.autoScroll) {
                _recordMaxScrolls(target.parentNode);
              }
              if (target.parentNode && self2.autoScroll && !scrollProxy && !rotationMode && target.parentNode._gsMaxScrollX && !_placeholderDiv.parentNode && !target.getBBox) {
                _placeholderDiv.style.width = target.parentNode.scrollWidth + "px";
                target.parentNode.appendChild(_placeholderDiv);
              }
              recordStartPositions();
              self2.tween && self2.tween.kill();
              self2.isThrowing = false;
              gsap2.killTweensOf(scrollProxy || target, killProps, true);
              scrollProxy && gsap2.killTweensOf(target, {
                scrollTo: 1
              }, true);
              self2.tween = self2.lockedAxis = null;
              if (vars.zIndexBoost || !rotationMode && !scrollProxy && vars.zIndexBoost !== false) {
                target.style.zIndex = Draggable3.zIndex++;
              }
              self2.isPressed = true;
              hasDragCallback = !!(vars.onDrag || self2._listeners.drag);
              hasMoveCallback = !!(vars.onMove || self2._listeners.move);
              if (vars.cursor !== false || vars.activeCursor) {
                i = triggers.length;
                while (--i > -1) {
                  gsap2.set(triggers[i], {
                    cursor: vars.activeCursor || vars.cursor || (_defaultCursor === "grab" ? "grabbing" : _defaultCursor)
                  });
                }
              }
              _dispatchEvent(self2, "press", "onPress");
            }, onMove = function onMove2(e) {
              var originalEvent = e, touches, pointerX, pointerY, i, dx, dy;
              if (!enabled || _isMultiTouching || !self2.isPressed || !e) {
                isPreventingDefault && e && enabled && _preventDefault(e);
                return;
              }
              self2.pointerEvent = e;
              touches = e.changedTouches;
              if (touches) {
                e = touches[0];
                if (e !== touch && e.identifier !== touchID) {
                  i = touches.length;
                  while (--i > -1 && (e = touches[i]).identifier !== touchID && e.target !== target) {
                  }
                  if (i < 0) {
                    return;
                  }
                }
              } else if (e.pointerId && touchID && e.pointerId !== touchID) {
                return;
              }
              if (touchEventTarget && allowNativeTouchScrolling && !touchDragAxis) {
                _point1.x = e.pageX - (isFixed ? _getDocScrollLeft$1(ownerDoc) : 0);
                _point1.y = e.pageY - (isFixed ? _getDocScrollTop$1(ownerDoc) : 0);
                matrix && matrix.apply(_point1, _point1);
                pointerX = _point1.x;
                pointerY = _point1.y;
                dx = Math.abs(pointerX - startPointerX);
                dy = Math.abs(pointerY - startPointerY);
                if (dx !== dy && (dx > minimumMovement || dy > minimumMovement) || _isAndroid && allowNativeTouchScrolling === touchDragAxis) {
                  touchDragAxis = dx > dy && allowX ? "x" : "y";
                  if (allowNativeTouchScrolling && touchDragAxis !== allowNativeTouchScrolling) {
                    _addListener(_win$1, "touchforcechange", _preventDefault);
                  }
                  if (self2.vars.lockAxisOnTouchScroll !== false && allowX && allowY) {
                    self2.lockedAxis = touchDragAxis === "x" ? "y" : "x";
                    _isFunction(self2.vars.onLockAxis) && self2.vars.onLockAxis.call(self2, originalEvent);
                  }
                  if (_isAndroid && allowNativeTouchScrolling === touchDragAxis) {
                    onRelease(originalEvent);
                    return;
                  }
                }
              }
              if (!self2.allowEventDefault && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling !== touchDragAxis) && originalEvent.cancelable !== false) {
                _preventDefault(originalEvent);
                isPreventingDefault = true;
              } else if (isPreventingDefault) {
                isPreventingDefault = false;
              }
              if (self2.autoScroll) {
                checkAutoScrollBounds = true;
              }
              setPointerPosition(e.pageX, e.pageY, hasMoveCallback);
            }, setPointerPosition = function setPointerPosition2(pointerX, pointerY, invokeOnMove) {
              var dragTolerance = 1 - self2.dragResistance, edgeTolerance = 1 - self2.edgeResistance, prevPointerX = self2.pointerX, prevPointerY = self2.pointerY, prevStartElementY = startElementY, prevX = self2.x, prevY = self2.y, prevEndX = self2.endX, prevEndY = self2.endY, prevEndRotation = self2.endRotation, prevDirty = dirty, xChange, yChange, x, y, dif, temp;
              self2.pointerX = pointerX;
              self2.pointerY = pointerY;
              if (isFixed) {
                pointerX -= _getDocScrollLeft$1(ownerDoc);
                pointerY -= _getDocScrollTop$1(ownerDoc);
              }
              if (rotationMode) {
                y = Math.atan2(rotationOrigin.y - pointerY, pointerX - rotationOrigin.x) * _RAD2DEG;
                dif = self2.y - y;
                if (dif > 180) {
                  startElementY -= 360;
                  self2.y = y;
                } else if (dif < -180) {
                  startElementY += 360;
                  self2.y = y;
                }
                if (self2.x !== startElementX || Math.abs(startElementY - y) > minimumMovement) {
                  self2.y = y;
                  x = startElementX + (startElementY - y) * dragTolerance;
                } else {
                  x = startElementX;
                }
              } else {
                if (matrix) {
                  temp = pointerX * matrix.a + pointerY * matrix.c + matrix.e;
                  pointerY = pointerX * matrix.b + pointerY * matrix.d + matrix.f;
                  pointerX = temp;
                }
                yChange = pointerY - startPointerY;
                xChange = pointerX - startPointerX;
                if (yChange < minimumMovement && yChange > -minimumMovement) {
                  yChange = 0;
                }
                if (xChange < minimumMovement && xChange > -minimumMovement) {
                  xChange = 0;
                }
                if ((self2.lockAxis || self2.lockedAxis) && (xChange || yChange)) {
                  temp = self2.lockedAxis;
                  if (!temp) {
                    self2.lockedAxis = temp = allowX && Math.abs(xChange) > Math.abs(yChange) ? "y" : allowY ? "x" : null;
                    if (temp && _isFunction(self2.vars.onLockAxis)) {
                      self2.vars.onLockAxis.call(self2, self2.pointerEvent);
                    }
                  }
                  if (temp === "y") {
                    yChange = 0;
                  } else if (temp === "x") {
                    xChange = 0;
                  }
                }
                x = _round(startElementX + xChange * dragTolerance);
                y = _round(startElementY + yChange * dragTolerance);
              }
              if ((snapX || snapY || snapXY) && (self2.x !== x || self2.y !== y && !rotationMode)) {
                if (snapXY) {
                  _temp1.x = x;
                  _temp1.y = y;
                  temp = snapXY(_temp1);
                  x = _round(temp.x);
                  y = _round(temp.y);
                }
                if (snapX) {
                  x = _round(snapX(x));
                }
                if (snapY) {
                  y = _round(snapY(y));
                }
              }
              if (hasBounds) {
                if (x > maxX) {
                  x = maxX + Math.round((x - maxX) * edgeTolerance);
                } else if (x < minX) {
                  x = minX + Math.round((x - minX) * edgeTolerance);
                }
                if (!rotationMode) {
                  if (y > maxY) {
                    y = Math.round(maxY + (y - maxY) * edgeTolerance);
                  } else if (y < minY) {
                    y = Math.round(minY + (y - minY) * edgeTolerance);
                  }
                }
              }
              if (self2.x !== x || self2.y !== y && !rotationMode) {
                if (rotationMode) {
                  self2.endRotation = self2.x = self2.endX = x;
                  dirty = true;
                } else {
                  if (allowY) {
                    self2.y = self2.endY = y;
                    dirty = true;
                  }
                  if (allowX) {
                    self2.x = self2.endX = x;
                    dirty = true;
                  }
                }
                if (!invokeOnMove || _dispatchEvent(self2, "move", "onMove") !== false) {
                  if (!self2.isDragging && self2.isPressed) {
                    self2.isDragging = dragged = true;
                    _dispatchEvent(self2, "dragstart", "onDragStart");
                  }
                } else {
                  self2.pointerX = prevPointerX;
                  self2.pointerY = prevPointerY;
                  startElementY = prevStartElementY;
                  self2.x = prevX;
                  self2.y = prevY;
                  self2.endX = prevEndX;
                  self2.endY = prevEndY;
                  self2.endRotation = prevEndRotation;
                  dirty = prevDirty;
                }
              }
            }, onRelease = function onRelease2(e, force) {
              if (!enabled || !self2.isPressed || e && touchID != null && !force && (e.pointerId && e.pointerId !== touchID && e.target !== target || e.changedTouches && !_hasTouchID(e.changedTouches, touchID))) {
                isPreventingDefault && e && enabled && _preventDefault(e);
                return;
              }
              self2.isPressed = false;
              var originalEvent = e, wasDragging = self2.isDragging, isContextMenuRelease = self2.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2), placeholderDelayedCall = gsap2.delayedCall(1e-3, removePlaceholder), touches, i, syntheticEvent, eventTarget, syntheticClick;
              if (touchEventTarget) {
                _removeListener(touchEventTarget, "touchend", onRelease2);
                _removeListener(touchEventTarget, "touchmove", onMove);
                _removeListener(touchEventTarget, "touchcancel", onRelease2);
                _removeListener(ownerDoc, "touchstart", _onMultiTouchDocument);
              } else {
                _removeListener(ownerDoc, "mousemove", onMove);
              }
              _removeListener(_win$1, "touchforcechange", _preventDefault);
              if (!_supportsPointer || !touchEventTarget) {
                _removeListener(ownerDoc, "mouseup", onRelease2);
                e && e.target && _removeListener(e.target, "mouseup", onRelease2);
              }
              dirty = false;
              if (wasDragging) {
                dragEndTime = _lastDragTime = _getTime();
                self2.isDragging = false;
              }
              _removeFromRenderQueue(render);
              if (isClicking && !isContextMenuRelease) {
                if (e) {
                  _removeListener(e.target, "change", onRelease2);
                  self2.pointerEvent = originalEvent;
                }
                _setSelectable(triggers, false);
                _dispatchEvent(self2, "release", "onRelease");
                _dispatchEvent(self2, "click", "onClick");
                isClicking = false;
                return;
              }
              i = triggers.length;
              while (--i > -1) {
                _setStyle(triggers[i], "cursor", vars.cursor || (vars.cursor !== false ? _defaultCursor : null));
              }
              _dragCount--;
              if (e) {
                touches = e.changedTouches;
                if (touches) {
                  e = touches[0];
                  if (e !== touch && e.identifier !== touchID) {
                    i = touches.length;
                    while (--i > -1 && (e = touches[i]).identifier !== touchID && e.target !== target) {
                    }
                    if (i < 0 && !force) {
                      return;
                    }
                  }
                }
                self2.pointerEvent = originalEvent;
                self2.pointerX = e.pageX;
                self2.pointerY = e.pageY;
              }
              if (isContextMenuRelease && originalEvent) {
                _preventDefault(originalEvent);
                isPreventingDefault = true;
                _dispatchEvent(self2, "release", "onRelease");
              } else if (originalEvent && !wasDragging) {
                isPreventingDefault = false;
                if (interrupted && (vars.snap || vars.bounds)) {
                  animate(vars.inertia || vars.throwProps);
                }
                _dispatchEvent(self2, "release", "onRelease");
                if ((!_isAndroid || originalEvent.type !== "touchmove") && originalEvent.type.indexOf("cancel") === -1) {
                  _dispatchEvent(self2, "click", "onClick");
                  if (_getTime() - clickTime < 300) {
                    _dispatchEvent(self2, "doubleclick", "onDoubleClick");
                  }
                  eventTarget = originalEvent.target || target;
                  clickTime = _getTime();
                  syntheticClick = function syntheticClick2() {
                    if (clickTime !== clickDispatch && self2.enabled() && !self2.isPressed && !originalEvent.defaultPrevented) {
                      if (eventTarget.click) {
                        eventTarget.click();
                      } else if (ownerDoc.createEvent) {
                        syntheticEvent = ownerDoc.createEvent("MouseEvents");
                        syntheticEvent.initMouseEvent("click", true, true, _win$1, 1, self2.pointerEvent.screenX, self2.pointerEvent.screenY, self2.pointerX, self2.pointerY, false, false, false, false, 0, null);
                        eventTarget.dispatchEvent(syntheticEvent);
                      }
                    }
                  };
                  if (!_isAndroid && !originalEvent.defaultPrevented) {
                    gsap2.delayedCall(0.05, syntheticClick);
                  }
                }
              } else {
                animate(vars.inertia || vars.throwProps);
                if (!self2.allowEventDefault && originalEvent && (vars.dragClickables !== false || !isClickable.call(self2, originalEvent.target)) && wasDragging && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling === touchDragAxis) && originalEvent.cancelable !== false) {
                  isPreventingDefault = true;
                  _preventDefault(originalEvent);
                } else {
                  isPreventingDefault = false;
                }
                _dispatchEvent(self2, "release", "onRelease");
              }
              isTweening() && placeholderDelayedCall.duration(self2.tween.duration());
              wasDragging && _dispatchEvent(self2, "dragend", "onDragEnd");
              return true;
            }, updateScroll = function updateScroll2(e) {
              if (e && self2.isDragging && !scrollProxy) {
                var parent = e.target || target.parentNode, deltaX = parent.scrollLeft - parent._gsScrollX, deltaY = parent.scrollTop - parent._gsScrollY;
                if (deltaX || deltaY) {
                  if (matrix) {
                    startPointerX -= deltaX * matrix.a + deltaY * matrix.c;
                    startPointerY -= deltaY * matrix.d + deltaX * matrix.b;
                  } else {
                    startPointerX -= deltaX;
                    startPointerY -= deltaY;
                  }
                  parent._gsScrollX += deltaX;
                  parent._gsScrollY += deltaY;
                  setPointerPosition(self2.pointerX, self2.pointerY);
                }
              }
            }, onClick = function onClick2(e) {
              var time = _getTime(), recentlyClicked = time - clickTime < 100, recentlyDragged = time - dragEndTime < 50, alreadyDispatched = recentlyClicked && clickDispatch === clickTime, defaultPrevented = self2.pointerEvent && self2.pointerEvent.defaultPrevented, alreadyDispatchedTrusted = recentlyClicked && trustedClickDispatch === clickTime, trusted = e.isTrusted || e.isTrusted == null && recentlyClicked && alreadyDispatched;
              if ((alreadyDispatched || recentlyDragged && self2.vars.suppressClickOnDrag !== false) && e.stopImmediatePropagation) {
                e.stopImmediatePropagation();
              }
              if (recentlyClicked && !(self2.pointerEvent && self2.pointerEvent.defaultPrevented) && (!alreadyDispatched || trusted && !alreadyDispatchedTrusted)) {
                if (trusted && alreadyDispatched) {
                  trustedClickDispatch = clickTime;
                }
                clickDispatch = clickTime;
                return;
              }
              if (self2.isPressed || recentlyDragged || recentlyClicked) {
                if (!trusted || !e.detail || !recentlyClicked || defaultPrevented) {
                  _preventDefault(e);
                }
              }
              if (!recentlyClicked && !recentlyDragged && !dragged) {
                e && e.target && (self2.pointerEvent = e);
                _dispatchEvent(self2, "click", "onClick");
              }
            }, localizePoint = function localizePoint2(p) {
              return matrix ? {
                x: p.x * matrix.a + p.y * matrix.c + matrix.e,
                y: p.x * matrix.b + p.y * matrix.d + matrix.f
              } : {
                x: p.x,
                y: p.y
              };
            };
            old = Draggable3.get(target);
            old && old.kill();
            _this2.startDrag = function(event, align) {
              var r1, r2, p1, p2;
              onPress(event || self2.pointerEvent, true);
              if (align && !self2.hitTest(event || self2.pointerEvent)) {
                r1 = _parseRect(event || self2.pointerEvent);
                r2 = _parseRect(target);
                p1 = localizePoint({
                  x: r1.left + r1.width / 2,
                  y: r1.top + r1.height / 2
                });
                p2 = localizePoint({
                  x: r2.left + r2.width / 2,
                  y: r2.top + r2.height / 2
                });
                startPointerX -= p1.x - p2.x;
                startPointerY -= p1.y - p2.y;
              }
              if (!self2.isDragging) {
                self2.isDragging = dragged = true;
                _dispatchEvent(self2, "dragstart", "onDragStart");
              }
            };
            _this2.drag = onMove;
            _this2.endDrag = function(e) {
              return onRelease(e || self2.pointerEvent, true);
            };
            _this2.timeSinceDrag = function() {
              return self2.isDragging ? 0 : (_getTime() - dragEndTime) / 1e3;
            };
            _this2.timeSinceClick = function() {
              return (_getTime() - clickTime) / 1e3;
            };
            _this2.hitTest = function(target2, threshold) {
              return Draggable3.hitTest(self2.target, target2, threshold);
            };
            _this2.getDirection = function(from, diagonalThreshold) {
              var mode = from === "velocity" && InertiaPlugin ? from : _isObject(from) && !rotationMode ? "element" : "start", xChange, yChange, ratio, direction, r1, r2;
              if (mode === "element") {
                r1 = _parseRect(self2.target);
                r2 = _parseRect(from);
              }
              xChange = mode === "start" ? self2.x - startElementX : mode === "velocity" ? InertiaPlugin.getVelocity(target, xProp) : r1.left + r1.width / 2 - (r2.left + r2.width / 2);
              if (rotationMode) {
                return xChange < 0 ? "counter-clockwise" : "clockwise";
              } else {
                diagonalThreshold = diagonalThreshold || 2;
                yChange = mode === "start" ? self2.y - startElementY : mode === "velocity" ? InertiaPlugin.getVelocity(target, yProp) : r1.top + r1.height / 2 - (r2.top + r2.height / 2);
                ratio = Math.abs(xChange / yChange);
                direction = ratio < 1 / diagonalThreshold ? "" : xChange < 0 ? "left" : "right";
                if (ratio < diagonalThreshold) {
                  if (direction !== "") {
                    direction += "-";
                  }
                  direction += yChange < 0 ? "up" : "down";
                }
              }
              return direction;
            };
            _this2.applyBounds = function(newBounds, sticky) {
              var x, y, forceZeroVelocity, e, parent, isRoot;
              if (newBounds && vars.bounds !== newBounds) {
                vars.bounds = newBounds;
                return self2.update(true, sticky);
              }
              syncXY(true);
              calculateBounds();
              if (hasBounds && !isTweening()) {
                x = self2.x;
                y = self2.y;
                if (x > maxX) {
                  x = maxX;
                } else if (x < minX) {
                  x = minX;
                }
                if (y > maxY) {
                  y = maxY;
                } else if (y < minY) {
                  y = minY;
                }
                if (self2.x !== x || self2.y !== y) {
                  forceZeroVelocity = true;
                  self2.x = self2.endX = x;
                  if (rotationMode) {
                    self2.endRotation = x;
                  } else {
                    self2.y = self2.endY = y;
                  }
                  dirty = true;
                  render(true);
                  if (self2.autoScroll && !self2.isDragging) {
                    _recordMaxScrolls(target.parentNode);
                    e = target;
                    _windowProxy.scrollTop = _win$1.pageYOffset != null ? _win$1.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
                    _windowProxy.scrollLeft = _win$1.pageXOffset != null ? _win$1.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;
                    while (e && !isRoot) {
                      isRoot = _isRoot(e.parentNode);
                      parent = isRoot ? _windowProxy : e.parentNode;
                      if (allowY && parent.scrollTop > parent._gsMaxScrollY) {
                        parent.scrollTop = parent._gsMaxScrollY;
                      }
                      if (allowX && parent.scrollLeft > parent._gsMaxScrollX) {
                        parent.scrollLeft = parent._gsMaxScrollX;
                      }
                      e = parent;
                    }
                  }
                }
                if (self2.isThrowing && (forceZeroVelocity || self2.endX > maxX || self2.endX < minX || self2.endY > maxY || self2.endY < minY)) {
                  animate(vars.inertia || vars.throwProps, forceZeroVelocity);
                }
              }
              return self2;
            };
            _this2.update = function(applyBounds, sticky, ignoreExternalChanges) {
              if (sticky && self2.isPressed) {
                var m = getGlobalMatrix(target), p = innerMatrix.apply({
                  x: self2.x - startElementX,
                  y: self2.y - startElementY
                }), m2 = getGlobalMatrix(target.parentNode, true);
                m2.apply({
                  x: m.e - p.x,
                  y: m.f - p.y
                }, p);
                self2.x -= p.x - m2.e;
                self2.y -= p.y - m2.f;
                render(true);
                recordStartPositions();
              }
              var x = self2.x, y = self2.y;
              updateMatrix(!sticky);
              if (applyBounds) {
                self2.applyBounds();
              } else {
                dirty && ignoreExternalChanges && render(true);
                syncXY(true);
              }
              if (sticky) {
                setPointerPosition(self2.pointerX, self2.pointerY);
                dirty && render(true);
              }
              if (self2.isPressed && !sticky && (allowX && Math.abs(x - self2.x) > 0.01 || allowY && Math.abs(y - self2.y) > 0.01 && !rotationMode)) {
                recordStartPositions();
              }
              if (self2.autoScroll) {
                _recordMaxScrolls(target.parentNode, self2.isDragging);
                checkAutoScrollBounds = self2.isDragging;
                render(true);
                _removeScrollListener(target, updateScroll);
                _addScrollListener(target, updateScroll);
              }
              return self2;
            };
            _this2.enable = function(type2) {
              var setVars = {
                lazy: true
              }, id, i, trigger;
              if (vars.cursor !== false) {
                setVars.cursor = vars.cursor || _defaultCursor;
              }
              if (gsap2.utils.checkPrefix("touchCallout")) {
                setVars.touchCallout = "none";
              }
              if (type2 !== "soft") {
                _setTouchActionForAllDescendants(triggers, allowX === allowY ? "none" : vars.allowNativeTouchScrolling && target.scrollHeight === target.clientHeight === (target.scrollWidth === target.clientHeight) || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x");
                i = triggers.length;
                while (--i > -1) {
                  trigger = triggers[i];
                  _supportsPointer || _addListener(trigger, "mousedown", onPress);
                  _addListener(trigger, "touchstart", onPress);
                  _addListener(trigger, "click", onClick, true);
                  gsap2.set(trigger, setVars);
                  if (trigger.getBBox && trigger.ownerSVGElement && allowX !== allowY) {
                    gsap2.set(trigger.ownerSVGElement, {
                      touchAction: vars.allowNativeTouchScrolling || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x"
                    });
                  }
                  vars.allowContextMenu || _addListener(trigger, "contextmenu", onContextMenu);
                }
                _setSelectable(triggers, false);
              }
              _addScrollListener(target, updateScroll);
              enabled = true;
              if (InertiaPlugin && type2 !== "soft") {
                InertiaPlugin.track(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
              }
              target._gsDragID = id = "d" + _lookupCount++;
              _lookup[id] = self2;
              if (scrollProxy) {
                scrollProxy.enable();
                scrollProxy.element._gsDragID = id;
              }
              (vars.bounds || rotationMode) && recordStartPositions();
              vars.bounds && self2.applyBounds();
              return self2;
            };
            _this2.disable = function(type2) {
              var dragging = self2.isDragging, i = triggers.length, trigger;
              while (--i > -1) {
                _setStyle(triggers[i], "cursor", null);
              }
              if (type2 !== "soft") {
                _setTouchActionForAllDescendants(triggers, null);
                i = triggers.length;
                while (--i > -1) {
                  trigger = triggers[i];
                  _setStyle(trigger, "touchCallout", null);
                  _removeListener(trigger, "mousedown", onPress);
                  _removeListener(trigger, "touchstart", onPress);
                  _removeListener(trigger, "click", onClick, true);
                  _removeListener(trigger, "contextmenu", onContextMenu);
                }
                _setSelectable(triggers, true);
                if (touchEventTarget) {
                  _removeListener(touchEventTarget, "touchcancel", onRelease);
                  _removeListener(touchEventTarget, "touchend", onRelease);
                  _removeListener(touchEventTarget, "touchmove", onMove);
                }
                _removeListener(ownerDoc, "mouseup", onRelease);
                _removeListener(ownerDoc, "mousemove", onMove);
              }
              _removeScrollListener(target, updateScroll);
              enabled = false;
              if (InertiaPlugin && type2 !== "soft") {
                InertiaPlugin.untrack(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
                self2.tween && self2.tween.kill();
              }
              scrollProxy && scrollProxy.disable();
              _removeFromRenderQueue(render);
              self2.isDragging = self2.isPressed = isClicking = false;
              dragging && _dispatchEvent(self2, "dragend", "onDragEnd");
              return self2;
            };
            _this2.enabled = function(value, type2) {
              return arguments.length ? value ? self2.enable(type2) : self2.disable(type2) : enabled;
            };
            _this2.kill = function() {
              self2.isThrowing = false;
              self2.tween && self2.tween.kill();
              self2.disable();
              gsap2.set(triggers, {
                clearProps: "userSelect"
              });
              delete _lookup[target._gsDragID];
              return self2;
            };
            _this2.revert = function() {
              this.kill();
              this.styles && this.styles.revert();
            };
            if (~type.indexOf("scroll")) {
              scrollProxy = _this2.scrollProxy = new ScrollProxy(target, _extend({
                onKill: function onKill() {
                  self2.isPressed && onRelease(null);
                }
              }, vars));
              target.style.overflowY = allowY && !_isTouchDevice ? "auto" : "hidden";
              target.style.overflowX = allowX && !_isTouchDevice ? "auto" : "hidden";
              target = scrollProxy.content;
            }
            if (rotationMode) {
              killProps.rotation = 1;
            } else {
              if (allowX) {
                killProps[xProp] = 1;
              }
              if (allowY) {
                killProps[yProp] = 1;
              }
            }
            gsCache.force3D = "force3D" in vars ? vars.force3D : true;
            _context(_assertThisInitialized(_this2));
            _this2.enable();
            return _this2;
          }
          Draggable3.register = function register(core) {
            gsap2 = core;
            _initCore();
          };
          Draggable3.create = function create(targets, vars) {
            _coreInitted || _initCore(true);
            return _toArray(targets).map(function(target) {
              return new Draggable3(target, vars);
            });
          };
          Draggable3.get = function get(target) {
            return _lookup[(_toArray(target)[0] || {})._gsDragID];
          };
          Draggable3.timeSinceDrag = function timeSinceDrag() {
            return (_getTime() - _lastDragTime) / 1e3;
          };
          Draggable3.hitTest = function hitTest(obj1, obj2, threshold) {
            if (obj1 === obj2) {
              return false;
            }
            var r1 = _parseRect(obj1), r2 = _parseRect(obj2), top = r1.top, left = r1.left, right = r1.right, bottom = r1.bottom, width = r1.width, height = r1.height, isOutside = r2.left > right || r2.right < left || r2.top > bottom || r2.bottom < top, overlap, area, isRatio;
            if (isOutside || !threshold) {
              return !isOutside;
            }
            isRatio = (threshold + "").indexOf("%") !== -1;
            threshold = parseFloat(threshold) || 0;
            overlap = {
              left: Math.max(left, r2.left),
              top: Math.max(top, r2.top)
            };
            overlap.width = Math.min(right, r2.right) - overlap.left;
            overlap.height = Math.min(bottom, r2.bottom) - overlap.top;
            if (overlap.width < 0 || overlap.height < 0) {
              return false;
            }
            if (isRatio) {
              threshold *= 0.01;
              area = overlap.width * overlap.height;
              return area >= width * height * threshold || area >= r2.width * r2.height * threshold;
            }
            return overlap.width > threshold && overlap.height > threshold;
          };
          return Draggable3;
        }(EventDispatcher);
        _setDefaults(Draggable2.prototype, {
          pointerX: 0,
          pointerY: 0,
          startX: 0,
          startY: 0,
          deltaX: 0,
          deltaY: 0,
          isDragging: false,
          isPressed: false
        });
        Draggable2.zIndex = 1e3;
        Draggable2.version = "3.12.5";
        _getGSAP() && gsap2.registerPlugin(Draggable2);
        exports2.Draggable = Draggable2;
        exports2.default = Draggable2;
        if (typeof window === "undefined" || window !== exports2) {
          Object.defineProperty(exports2, "__esModule", { value: true });
        } else {
          delete window.default;
        }
      });
    }
  });

  // node_modules/gsap/dist/MotionPathPlugin.js
  var require_MotionPathPlugin = __commonJS({
    "node_modules/gsap/dist/MotionPathPlugin.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = global || self, factory(global.window = global.window || {}));
      })(exports, function(exports2) {
        "use strict";
        var _svgPathExp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, _numbersExp = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, _scientific = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig, _selectorExp = /(^[#\.][a-z]|[a-y][a-z])/i, _DEG2RAD = Math.PI / 180, _RAD2DEG = 180 / Math.PI, _sin = Math.sin, _cos = Math.cos, _abs = Math.abs, _sqrt = Math.sqrt, _atan2 = Math.atan2, _largeNum = 1e8, _isString = function _isString2(value) {
          return typeof value === "string";
        }, _isNumber = function _isNumber2(value) {
          return typeof value === "number";
        }, _isUndefined = function _isUndefined2(value) {
          return typeof value === "undefined";
        }, _temp = {}, _temp2 = {}, _roundingNum = 1e5, _wrapProgress = function _wrapProgress2(progress) {
          return Math.round((progress + _largeNum) % 1 * _roundingNum) / _roundingNum || (progress < 0 ? 0 : 1);
        }, _round = function _round2(value) {
          return Math.round(value * _roundingNum) / _roundingNum || 0;
        }, _roundPrecise = function _roundPrecise2(value) {
          return Math.round(value * 1e10) / 1e10 || 0;
        }, _splitSegment = function _splitSegment2(rawPath, segIndex, i, t) {
          var segment = rawPath[segIndex], shift = t === 1 ? 6 : subdivideSegment(segment, i, t);
          if ((shift || !t) && shift + i + 2 < segment.length) {
            rawPath.splice(segIndex, 0, segment.slice(0, i + shift + 2));
            segment.splice(0, i + shift);
            return 1;
          }
        }, _getSampleIndex = function _getSampleIndex2(samples, length, progress) {
          var l = samples.length, i = ~~(progress * l);
          if (samples[i] > length) {
            while (--i && samples[i] > length) {
            }
            i < 0 && (i = 0);
          } else {
            while (samples[++i] < length && i < l) {
            }
          }
          return i < l ? i : l - 1;
        }, _reverseRawPath = function _reverseRawPath2(rawPath, skipOuter) {
          var i = rawPath.length;
          skipOuter || rawPath.reverse();
          while (i--) {
            rawPath[i].reversed || reverseSegment(rawPath[i]);
          }
        }, _copyMetaData = function _copyMetaData2(source, copy) {
          copy.totalLength = source.totalLength;
          if (source.samples) {
            copy.samples = source.samples.slice(0);
            copy.lookup = source.lookup.slice(0);
            copy.minLength = source.minLength;
            copy.resolution = source.resolution;
          } else if (source.totalPoints) {
            copy.totalPoints = source.totalPoints;
          }
          return copy;
        }, _appendOrMerge = function _appendOrMerge2(rawPath, segment) {
          var index = rawPath.length, prevSeg = rawPath[index - 1] || [], l = prevSeg.length;
          if (index && segment[0] === prevSeg[l - 2] && segment[1] === prevSeg[l - 1]) {
            segment = prevSeg.concat(segment.slice(2));
            index--;
          }
          rawPath[index] = segment;
        };
        function getRawPath(value) {
          value = _isString(value) && _selectorExp.test(value) ? document.querySelector(value) || value : value;
          var e = value.getAttribute ? value : 0, rawPath;
          if (e && (value = value.getAttribute("d"))) {
            if (!e._gsPath) {
              e._gsPath = {};
            }
            rawPath = e._gsPath[value];
            return rawPath && !rawPath._dirty ? rawPath : e._gsPath[value] = stringToRawPath(value);
          }
          return !value ? console.warn("Expecting a <path> element or an SVG path data string") : _isString(value) ? stringToRawPath(value) : _isNumber(value[0]) ? [value] : value;
        }
        function copyRawPath(rawPath) {
          var a = [], i = 0;
          for (; i < rawPath.length; i++) {
            a[i] = _copyMetaData(rawPath[i], rawPath[i].slice(0));
          }
          return _copyMetaData(rawPath, a);
        }
        function reverseSegment(segment) {
          var i = 0, y;
          segment.reverse();
          for (; i < segment.length; i += 2) {
            y = segment[i];
            segment[i] = segment[i + 1];
            segment[i + 1] = y;
          }
          segment.reversed = !segment.reversed;
        }
        var _createPath = function _createPath2(e, ignore) {
          var path = document.createElementNS("http://www.w3.org/2000/svg", "path"), attr = [].slice.call(e.attributes), i = attr.length, name;
          ignore = "," + ignore + ",";
          while (--i > -1) {
            name = attr[i].nodeName.toLowerCase();
            if (ignore.indexOf("," + name + ",") < 0) {
              path.setAttributeNS(null, name, attr[i].nodeValue);
            }
          }
          return path;
        }, _typeAttrs = {
          rect: "rx,ry,x,y,width,height",
          circle: "r,cx,cy",
          ellipse: "rx,ry,cx,cy",
          line: "x1,x2,y1,y2"
        }, _attrToObj = function _attrToObj2(e, attrs) {
          var props = attrs ? attrs.split(",") : [], obj = {}, i = props.length;
          while (--i > -1) {
            obj[props[i]] = +e.getAttribute(props[i]) || 0;
          }
          return obj;
        };
        function convertToPath(element, swap) {
          var type = element.tagName.toLowerCase(), circ = 0.552284749831, data, x, y, r, ry, path, rcirc, rycirc, points, w, h, x2, x3, x4, x5, x6, y2, y3, y4, y5, y6, attr;
          if (type === "path" || !element.getBBox) {
            return element;
          }
          path = _createPath(element, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points");
          attr = _attrToObj(element, _typeAttrs[type]);
          if (type === "rect") {
            r = attr.rx;
            ry = attr.ry || r;
            x = attr.x;
            y = attr.y;
            w = attr.width - r * 2;
            h = attr.height - ry * 2;
            if (r || ry) {
              x2 = x + r * (1 - circ);
              x3 = x + r;
              x4 = x3 + w;
              x5 = x4 + r * circ;
              x6 = x4 + r;
              y2 = y + ry * (1 - circ);
              y3 = y + ry;
              y4 = y3 + h;
              y5 = y4 + ry * circ;
              y6 = y4 + ry;
              data = "M" + x6 + "," + y3 + " V" + y4 + " C" + [x6, y5, x5, y6, x4, y6, x4 - (x4 - x3) / 3, y6, x3 + (x4 - x3) / 3, y6, x3, y6, x2, y6, x, y5, x, y4, x, y4 - (y4 - y3) / 3, x, y3 + (y4 - y3) / 3, x, y3, x, y2, x2, y, x3, y, x3 + (x4 - x3) / 3, y, x4 - (x4 - x3) / 3, y, x4, y, x5, y, x6, y2, x6, y3].join(",") + "z";
            } else {
              data = "M" + (x + w) + "," + y + " v" + h + " h" + -w + " v" + -h + " h" + w + "z";
            }
          } else if (type === "circle" || type === "ellipse") {
            if (type === "circle") {
              r = ry = attr.r;
              rycirc = r * circ;
            } else {
              r = attr.rx;
              ry = attr.ry;
              rycirc = ry * circ;
            }
            x = attr.cx;
            y = attr.cy;
            rcirc = r * circ;
            data = "M" + (x + r) + "," + y + " C" + [x + r, y + rycirc, x + rcirc, y + ry, x, y + ry, x - rcirc, y + ry, x - r, y + rycirc, x - r, y, x - r, y - rycirc, x - rcirc, y - ry, x, y - ry, x + rcirc, y - ry, x + r, y - rycirc, x + r, y].join(",") + "z";
          } else if (type === "line") {
            data = "M" + attr.x1 + "," + attr.y1 + " L" + attr.x2 + "," + attr.y2;
          } else if (type === "polyline" || type === "polygon") {
            points = (element.getAttribute("points") + "").match(_numbersExp) || [];
            x = points.shift();
            y = points.shift();
            data = "M" + x + "," + y + " L" + points.join(",");
            if (type === "polygon") {
              data += "," + x + "," + y + "z";
            }
          }
          path.setAttribute("d", rawPathToString(path._gsRawPath = stringToRawPath(data)));
          if (swap && element.parentNode) {
            element.parentNode.insertBefore(path, element);
            element.parentNode.removeChild(element);
          }
          return path;
        }
        function getRotationAtBezierT(segment, i, t) {
          var a = segment[i], b = segment[i + 2], c = segment[i + 4], x;
          a += (b - a) * t;
          b += (c - b) * t;
          a += (b - a) * t;
          x = b + (c + (segment[i + 6] - c) * t - b) * t - a;
          a = segment[i + 1];
          b = segment[i + 3];
          c = segment[i + 5];
          a += (b - a) * t;
          b += (c - b) * t;
          a += (b - a) * t;
          return _round(_atan2(b + (c + (segment[i + 7] - c) * t - b) * t - a, x) * _RAD2DEG);
        }
        function sliceRawPath(rawPath, start, end) {
          end = _isUndefined(end) ? 1 : _roundPrecise(end) || 0;
          start = _roundPrecise(start) || 0;
          var loops = Math.max(0, ~~(_abs(end - start) - 1e-8)), path = copyRawPath(rawPath);
          if (start > end) {
            start = 1 - start;
            end = 1 - end;
            _reverseRawPath(path);
            path.totalLength = 0;
          }
          if (start < 0 || end < 0) {
            var offset = Math.abs(~~Math.min(start, end)) + 1;
            start += offset;
            end += offset;
          }
          path.totalLength || cacheRawPathMeasurements(path);
          var wrap = end > 1, s = getProgressData(path, start, _temp, true), e = getProgressData(path, end, _temp2), eSeg = e.segment, sSeg = s.segment, eSegIndex = e.segIndex, sSegIndex = s.segIndex, ei = e.i, si = s.i, sameSegment = sSegIndex === eSegIndex, sameBezier = ei === si && sameSegment, wrapsBehind, sShift, eShift, i, copy, totalSegments, l, j;
          if (wrap || loops) {
            wrapsBehind = eSegIndex < sSegIndex || sameSegment && ei < si || sameBezier && e.t < s.t;
            if (_splitSegment(path, sSegIndex, si, s.t)) {
              sSegIndex++;
              if (!wrapsBehind) {
                eSegIndex++;
                if (sameBezier) {
                  e.t = (e.t - s.t) / (1 - s.t);
                  ei = 0;
                } else if (sameSegment) {
                  ei -= si;
                }
              }
            }
            if (Math.abs(1 - (end - start)) < 1e-5) {
              eSegIndex = sSegIndex - 1;
            } else if (!e.t && eSegIndex) {
              eSegIndex--;
            } else if (_splitSegment(path, eSegIndex, ei, e.t) && wrapsBehind) {
              sSegIndex++;
            }
            if (s.t === 1) {
              sSegIndex = (sSegIndex + 1) % path.length;
            }
            copy = [];
            totalSegments = path.length;
            l = 1 + totalSegments * loops;
            j = sSegIndex;
            l += (totalSegments - sSegIndex + eSegIndex) % totalSegments;
            for (i = 0; i < l; i++) {
              _appendOrMerge(copy, path[j++ % totalSegments]);
            }
            path = copy;
          } else {
            eShift = e.t === 1 ? 6 : subdivideSegment(eSeg, ei, e.t);
            if (start !== end) {
              sShift = subdivideSegment(sSeg, si, sameBezier ? s.t / e.t : s.t);
              sameSegment && (eShift += sShift);
              eSeg.splice(ei + eShift + 2);
              (sShift || si) && sSeg.splice(0, si + sShift);
              i = path.length;
              while (i--) {
                (i < sSegIndex || i > eSegIndex) && path.splice(i, 1);
              }
            } else {
              eSeg.angle = getRotationAtBezierT(eSeg, ei + eShift, 0);
              ei += eShift;
              s = eSeg[ei];
              e = eSeg[ei + 1];
              eSeg.length = eSeg.totalLength = 0;
              eSeg.totalPoints = path.totalPoints = 8;
              eSeg.push(s, e, s, e, s, e, s, e);
            }
          }
          path.totalLength = 0;
          return path;
        }
        function measureSegment(segment, startIndex, bezierQty) {
          startIndex = startIndex || 0;
          if (!segment.samples) {
            segment.samples = [];
            segment.lookup = [];
          }
          var resolution = ~~segment.resolution || 12, inc = 1 / resolution, endIndex = bezierQty ? startIndex + bezierQty * 6 + 1 : segment.length, x1 = segment[startIndex], y1 = segment[startIndex + 1], samplesIndex = startIndex ? startIndex / 6 * resolution : 0, samples = segment.samples, lookup = segment.lookup, min = (startIndex ? segment.minLength : _largeNum) || _largeNum, prevLength = samples[samplesIndex + bezierQty * resolution - 1], length = startIndex ? samples[samplesIndex - 1] : 0, i, j, x4, x3, x2, xd, xd1, y4, y3, y2, yd, yd1, inv, t, lengthIndex, l, segLength;
          samples.length = lookup.length = 0;
          for (j = startIndex + 2; j < endIndex; j += 6) {
            x4 = segment[j + 4] - x1;
            x3 = segment[j + 2] - x1;
            x2 = segment[j] - x1;
            y4 = segment[j + 5] - y1;
            y3 = segment[j + 3] - y1;
            y2 = segment[j + 1] - y1;
            xd = xd1 = yd = yd1 = 0;
            if (_abs(x4) < 0.01 && _abs(y4) < 0.01 && _abs(x2) + _abs(y2) < 0.01) {
              if (segment.length > 8) {
                segment.splice(j, 6);
                j -= 6;
                endIndex -= 6;
              }
            } else {
              for (i = 1; i <= resolution; i++) {
                t = inc * i;
                inv = 1 - t;
                xd = xd1 - (xd1 = (t * t * x4 + 3 * inv * (t * x3 + inv * x2)) * t);
                yd = yd1 - (yd1 = (t * t * y4 + 3 * inv * (t * y3 + inv * y2)) * t);
                l = _sqrt(yd * yd + xd * xd);
                if (l < min) {
                  min = l;
                }
                length += l;
                samples[samplesIndex++] = length;
              }
            }
            x1 += x4;
            y1 += y4;
          }
          if (prevLength) {
            prevLength -= length;
            for (; samplesIndex < samples.length; samplesIndex++) {
              samples[samplesIndex] += prevLength;
            }
          }
          if (samples.length && min) {
            segment.totalLength = segLength = samples[samples.length - 1] || 0;
            segment.minLength = min;
            if (segLength / min < 9999) {
              l = lengthIndex = 0;
              for (i = 0; i < segLength; i += min) {
                lookup[l++] = samples[lengthIndex] < i ? ++lengthIndex : lengthIndex;
              }
            }
          } else {
            segment.totalLength = samples[0] = 0;
          }
          return startIndex ? length - samples[startIndex / 2 - 1] : length;
        }
        function cacheRawPathMeasurements(rawPath, resolution) {
          var pathLength, points, i;
          for (i = pathLength = points = 0; i < rawPath.length; i++) {
            rawPath[i].resolution = ~~resolution || 12;
            points += rawPath[i].length;
            pathLength += measureSegment(rawPath[i]);
          }
          rawPath.totalPoints = points;
          rawPath.totalLength = pathLength;
          return rawPath;
        }
        function subdivideSegment(segment, i, t) {
          if (t <= 0 || t >= 1) {
            return 0;
          }
          var ax = segment[i], ay = segment[i + 1], cp1x = segment[i + 2], cp1y = segment[i + 3], cp2x = segment[i + 4], cp2y = segment[i + 5], bx = segment[i + 6], by = segment[i + 7], x1a = ax + (cp1x - ax) * t, x2 = cp1x + (cp2x - cp1x) * t, y1a = ay + (cp1y - ay) * t, y2 = cp1y + (cp2y - cp1y) * t, x1 = x1a + (x2 - x1a) * t, y1 = y1a + (y2 - y1a) * t, x2a = cp2x + (bx - cp2x) * t, y2a = cp2y + (by - cp2y) * t;
          x2 += (x2a - x2) * t;
          y2 += (y2a - y2) * t;
          segment.splice(i + 2, 4, _round(x1a), _round(y1a), _round(x1), _round(y1), _round(x1 + (x2 - x1) * t), _round(y1 + (y2 - y1) * t), _round(x2), _round(y2), _round(x2a), _round(y2a));
          segment.samples && segment.samples.splice(i / 6 * segment.resolution | 0, 0, 0, 0, 0, 0, 0, 0);
          return 6;
        }
        function getProgressData(rawPath, progress, decoratee, pushToNextIfAtEnd) {
          decoratee = decoratee || {};
          rawPath.totalLength || cacheRawPathMeasurements(rawPath);
          if (progress < 0 || progress > 1) {
            progress = _wrapProgress(progress);
          }
          var segIndex = 0, segment = rawPath[0], samples, resolution, length, min, max, i, t;
          if (!progress) {
            t = i = segIndex = 0;
            segment = rawPath[0];
          } else if (progress === 1) {
            t = 1;
            segIndex = rawPath.length - 1;
            segment = rawPath[segIndex];
            i = segment.length - 8;
          } else {
            if (rawPath.length > 1) {
              length = rawPath.totalLength * progress;
              max = i = 0;
              while ((max += rawPath[i++].totalLength) < length) {
                segIndex = i;
              }
              segment = rawPath[segIndex];
              min = max - segment.totalLength;
              progress = (length - min) / (max - min) || 0;
            }
            samples = segment.samples;
            resolution = segment.resolution;
            length = segment.totalLength * progress;
            i = segment.lookup.length ? segment.lookup[~~(length / segment.minLength)] || 0 : _getSampleIndex(samples, length, progress);
            min = i ? samples[i - 1] : 0;
            max = samples[i];
            if (max < length) {
              min = max;
              max = samples[++i];
            }
            t = 1 / resolution * ((length - min) / (max - min) + i % resolution);
            i = ~~(i / resolution) * 6;
            if (pushToNextIfAtEnd && t === 1) {
              if (i + 6 < segment.length) {
                i += 6;
                t = 0;
              } else if (segIndex + 1 < rawPath.length) {
                i = t = 0;
                segment = rawPath[++segIndex];
              }
            }
          }
          decoratee.t = t;
          decoratee.i = i;
          decoratee.path = rawPath;
          decoratee.segment = segment;
          decoratee.segIndex = segIndex;
          return decoratee;
        }
        function getPositionOnPath(rawPath, progress, includeAngle, point) {
          var segment = rawPath[0], result = point || {}, samples, resolution, length, min, max, i, t, a, inv;
          if (progress < 0 || progress > 1) {
            progress = _wrapProgress(progress);
          }
          segment.lookup || cacheRawPathMeasurements(rawPath);
          if (rawPath.length > 1) {
            length = rawPath.totalLength * progress;
            max = i = 0;
            while ((max += rawPath[i++].totalLength) < length) {
              segment = rawPath[i];
            }
            min = max - segment.totalLength;
            progress = (length - min) / (max - min) || 0;
          }
          samples = segment.samples;
          resolution = segment.resolution;
          length = segment.totalLength * progress;
          i = segment.lookup.length ? segment.lookup[progress < 1 ? ~~(length / segment.minLength) : segment.lookup.length - 1] || 0 : _getSampleIndex(samples, length, progress);
          min = i ? samples[i - 1] : 0;
          max = samples[i];
          if (max < length) {
            min = max;
            max = samples[++i];
          }
          t = 1 / resolution * ((length - min) / (max - min) + i % resolution) || 0;
          inv = 1 - t;
          i = ~~(i / resolution) * 6;
          a = segment[i];
          result.x = _round((t * t * (segment[i + 6] - a) + 3 * inv * (t * (segment[i + 4] - a) + inv * (segment[i + 2] - a))) * t + a);
          result.y = _round((t * t * (segment[i + 7] - (a = segment[i + 1])) + 3 * inv * (t * (segment[i + 5] - a) + inv * (segment[i + 3] - a))) * t + a);
          if (includeAngle) {
            result.angle = segment.totalLength ? getRotationAtBezierT(segment, i, t >= 1 ? 1 - 1e-9 : t ? t : 1e-9) : segment.angle || 0;
          }
          return result;
        }
        function transformRawPath(rawPath, a, b, c, d, tx, ty) {
          var j = rawPath.length, segment, l, i, x, y;
          while (--j > -1) {
            segment = rawPath[j];
            l = segment.length;
            for (i = 0; i < l; i += 2) {
              x = segment[i];
              y = segment[i + 1];
              segment[i] = x * a + y * c + tx;
              segment[i + 1] = x * b + y * d + ty;
            }
          }
          rawPath._dirty = 1;
          return rawPath;
        }
        function arcToSegment(lastX, lastY, rx, ry, angle, largeArcFlag, sweepFlag, x, y) {
          if (lastX === x && lastY === y) {
            return;
          }
          rx = _abs(rx);
          ry = _abs(ry);
          var angleRad = angle % 360 * _DEG2RAD, cosAngle = _cos(angleRad), sinAngle = _sin(angleRad), PI = Math.PI, TWOPI = PI * 2, dx2 = (lastX - x) / 2, dy2 = (lastY - y) / 2, x1 = cosAngle * dx2 + sinAngle * dy2, y1 = -sinAngle * dx2 + cosAngle * dy2, x1_sq = x1 * x1, y1_sq = y1 * y1, radiiCheck = x1_sq / (rx * rx) + y1_sq / (ry * ry);
          if (radiiCheck > 1) {
            rx = _sqrt(radiiCheck) * rx;
            ry = _sqrt(radiiCheck) * ry;
          }
          var rx_sq = rx * rx, ry_sq = ry * ry, sq = (rx_sq * ry_sq - rx_sq * y1_sq - ry_sq * x1_sq) / (rx_sq * y1_sq + ry_sq * x1_sq);
          if (sq < 0) {
            sq = 0;
          }
          var coef = (largeArcFlag === sweepFlag ? -1 : 1) * _sqrt(sq), cx1 = coef * (rx * y1 / ry), cy1 = coef * -(ry * x1 / rx), sx2 = (lastX + x) / 2, sy2 = (lastY + y) / 2, cx = sx2 + (cosAngle * cx1 - sinAngle * cy1), cy = sy2 + (sinAngle * cx1 + cosAngle * cy1), ux = (x1 - cx1) / rx, uy = (y1 - cy1) / ry, vx = (-x1 - cx1) / rx, vy = (-y1 - cy1) / ry, temp = ux * ux + uy * uy, angleStart = (uy < 0 ? -1 : 1) * Math.acos(ux / _sqrt(temp)), angleExtent = (ux * vy - uy * vx < 0 ? -1 : 1) * Math.acos((ux * vx + uy * vy) / _sqrt(temp * (vx * vx + vy * vy)));
          isNaN(angleExtent) && (angleExtent = PI);
          if (!sweepFlag && angleExtent > 0) {
            angleExtent -= TWOPI;
          } else if (sweepFlag && angleExtent < 0) {
            angleExtent += TWOPI;
          }
          angleStart %= TWOPI;
          angleExtent %= TWOPI;
          var segments = Math.ceil(_abs(angleExtent) / (TWOPI / 4)), rawPath = [], angleIncrement = angleExtent / segments, controlLength = 4 / 3 * _sin(angleIncrement / 2) / (1 + _cos(angleIncrement / 2)), ma = cosAngle * rx, mb = sinAngle * rx, mc = sinAngle * -ry, md = cosAngle * ry, i;
          for (i = 0; i < segments; i++) {
            angle = angleStart + i * angleIncrement;
            x1 = _cos(angle);
            y1 = _sin(angle);
            ux = _cos(angle += angleIncrement);
            uy = _sin(angle);
            rawPath.push(x1 - controlLength * y1, y1 + controlLength * x1, ux + controlLength * uy, uy - controlLength * ux, ux, uy);
          }
          for (i = 0; i < rawPath.length; i += 2) {
            x1 = rawPath[i];
            y1 = rawPath[i + 1];
            rawPath[i] = x1 * ma + y1 * mc + cx;
            rawPath[i + 1] = x1 * mb + y1 * md + cy;
          }
          rawPath[i - 2] = x;
          rawPath[i - 1] = y;
          return rawPath;
        }
        function stringToRawPath(d) {
          var a = (d + "").replace(_scientific, function(m) {
            var n = +m;
            return n < 1e-4 && n > -1e-4 ? 0 : n;
          }).match(_svgPathExp) || [], path = [], relativeX = 0, relativeY = 0, twoThirds = 2 / 3, elements = a.length, points = 0, errorMessage = "ERROR: malformed path: " + d, i, j, x, y, command, isRelative, segment, startX, startY, difX, difY, beziers, prevCommand, flag1, flag2, line = function line2(sx, sy, ex, ey) {
            difX = (ex - sx) / 3;
            difY = (ey - sy) / 3;
            segment.push(sx + difX, sy + difY, ex - difX, ey - difY, ex, ey);
          };
          if (!d || !isNaN(a[0]) || isNaN(a[1])) {
            console.log(errorMessage);
            return path;
          }
          for (i = 0; i < elements; i++) {
            prevCommand = command;
            if (isNaN(a[i])) {
              command = a[i].toUpperCase();
              isRelative = command !== a[i];
            } else {
              i--;
            }
            x = +a[i + 1];
            y = +a[i + 2];
            if (isRelative) {
              x += relativeX;
              y += relativeY;
            }
            if (!i) {
              startX = x;
              startY = y;
            }
            if (command === "M") {
              if (segment) {
                if (segment.length < 8) {
                  path.length -= 1;
                } else {
                  points += segment.length;
                }
              }
              relativeX = startX = x;
              relativeY = startY = y;
              segment = [x, y];
              path.push(segment);
              i += 2;
              command = "L";
            } else if (command === "C") {
              if (!segment) {
                segment = [0, 0];
              }
              if (!isRelative) {
                relativeX = relativeY = 0;
              }
              segment.push(x, y, relativeX + a[i + 3] * 1, relativeY + a[i + 4] * 1, relativeX += a[i + 5] * 1, relativeY += a[i + 6] * 1);
              i += 6;
            } else if (command === "S") {
              difX = relativeX;
              difY = relativeY;
              if (prevCommand === "C" || prevCommand === "S") {
                difX += relativeX - segment[segment.length - 4];
                difY += relativeY - segment[segment.length - 3];
              }
              if (!isRelative) {
                relativeX = relativeY = 0;
              }
              segment.push(difX, difY, x, y, relativeX += a[i + 3] * 1, relativeY += a[i + 4] * 1);
              i += 4;
            } else if (command === "Q") {
              difX = relativeX + (x - relativeX) * twoThirds;
              difY = relativeY + (y - relativeY) * twoThirds;
              if (!isRelative) {
                relativeX = relativeY = 0;
              }
              relativeX += a[i + 3] * 1;
              relativeY += a[i + 4] * 1;
              segment.push(difX, difY, relativeX + (x - relativeX) * twoThirds, relativeY + (y - relativeY) * twoThirds, relativeX, relativeY);
              i += 4;
            } else if (command === "T") {
              difX = relativeX - segment[segment.length - 4];
              difY = relativeY - segment[segment.length - 3];
              segment.push(relativeX + difX, relativeY + difY, x + (relativeX + difX * 1.5 - x) * twoThirds, y + (relativeY + difY * 1.5 - y) * twoThirds, relativeX = x, relativeY = y);
              i += 2;
            } else if (command === "H") {
              line(relativeX, relativeY, relativeX = x, relativeY);
              i += 1;
            } else if (command === "V") {
              line(relativeX, relativeY, relativeX, relativeY = x + (isRelative ? relativeY - relativeX : 0));
              i += 1;
            } else if (command === "L" || command === "Z") {
              if (command === "Z") {
                x = startX;
                y = startY;
                segment.closed = true;
              }
              if (command === "L" || _abs(relativeX - x) > 0.5 || _abs(relativeY - y) > 0.5) {
                line(relativeX, relativeY, x, y);
                if (command === "L") {
                  i += 2;
                }
              }
              relativeX = x;
              relativeY = y;
            } else if (command === "A") {
              flag1 = a[i + 4];
              flag2 = a[i + 5];
              difX = a[i + 6];
              difY = a[i + 7];
              j = 7;
              if (flag1.length > 1) {
                if (flag1.length < 3) {
                  difY = difX;
                  difX = flag2;
                  j--;
                } else {
                  difY = flag2;
                  difX = flag1.substr(2);
                  j -= 2;
                }
                flag2 = flag1.charAt(1);
                flag1 = flag1.charAt(0);
              }
              beziers = arcToSegment(relativeX, relativeY, +a[i + 1], +a[i + 2], +a[i + 3], +flag1, +flag2, (isRelative ? relativeX : 0) + difX * 1, (isRelative ? relativeY : 0) + difY * 1);
              i += j;
              if (beziers) {
                for (j = 0; j < beziers.length; j++) {
                  segment.push(beziers[j]);
                }
              }
              relativeX = segment[segment.length - 2];
              relativeY = segment[segment.length - 1];
            } else {
              console.log(errorMessage);
            }
          }
          i = segment.length;
          if (i < 6) {
            path.pop();
            i = 0;
          } else if (segment[0] === segment[i - 2] && segment[1] === segment[i - 1]) {
            segment.closed = true;
          }
          path.totalPoints = points + i;
          return path;
        }
        function flatPointsToSegment(points, curviness) {
          if (curviness === void 0) {
            curviness = 1;
          }
          var x = points[0], y = 0, segment = [x, y], i = 2;
          for (; i < points.length; i += 2) {
            segment.push(x, y, points[i], y = (points[i] - x) * curviness / 2, x = points[i], -y);
          }
          return segment;
        }
        function pointsToSegment(points, curviness) {
          _abs(points[0] - points[2]) < 1e-4 && _abs(points[1] - points[3]) < 1e-4 && (points = points.slice(2));
          var l = points.length - 2, x = +points[0], y = +points[1], nextX = +points[2], nextY = +points[3], segment = [x, y, x, y], dx2 = nextX - x, dy2 = nextY - y, closed = Math.abs(points[l] - x) < 1e-3 && Math.abs(points[l + 1] - y) < 1e-3, prevX, prevY, i, dx1, dy1, r1, r2, r3, tl, mx1, mx2, mxm, my1, my2, mym;
          if (closed) {
            points.push(nextX, nextY);
            nextX = x;
            nextY = y;
            x = points[l - 2];
            y = points[l - 1];
            points.unshift(x, y);
            l += 4;
          }
          curviness = curviness || curviness === 0 ? +curviness : 1;
          for (i = 2; i < l; i += 2) {
            prevX = x;
            prevY = y;
            x = nextX;
            y = nextY;
            nextX = +points[i + 2];
            nextY = +points[i + 3];
            if (x === nextX && y === nextY) {
              continue;
            }
            dx1 = dx2;
            dy1 = dy2;
            dx2 = nextX - x;
            dy2 = nextY - y;
            r1 = _sqrt(dx1 * dx1 + dy1 * dy1);
            r2 = _sqrt(dx2 * dx2 + dy2 * dy2);
            r3 = _sqrt(Math.pow(dx2 / r2 + dx1 / r1, 2) + Math.pow(dy2 / r2 + dy1 / r1, 2));
            tl = (r1 + r2) * curviness * 0.25 / r3;
            mx1 = x - (x - prevX) * (r1 ? tl / r1 : 0);
            mx2 = x + (nextX - x) * (r2 ? tl / r2 : 0);
            mxm = x - (mx1 + ((mx2 - mx1) * (r1 * 3 / (r1 + r2) + 0.5) / 4 || 0));
            my1 = y - (y - prevY) * (r1 ? tl / r1 : 0);
            my2 = y + (nextY - y) * (r2 ? tl / r2 : 0);
            mym = y - (my1 + ((my2 - my1) * (r1 * 3 / (r1 + r2) + 0.5) / 4 || 0));
            if (x !== prevX || y !== prevY) {
              segment.push(_round(mx1 + mxm), _round(my1 + mym), _round(x), _round(y), _round(mx2 + mxm), _round(my2 + mym));
            }
          }
          x !== nextX || y !== nextY || segment.length < 4 ? segment.push(_round(nextX), _round(nextY), _round(nextX), _round(nextY)) : segment.length -= 2;
          if (segment.length === 2) {
            segment.push(x, y, x, y, x, y);
          } else if (closed) {
            segment.splice(0, 6);
            segment.length = segment.length - 6;
          }
          return segment;
        }
        function rawPathToString(rawPath) {
          if (_isNumber(rawPath[0])) {
            rawPath = [rawPath];
          }
          var result = "", l = rawPath.length, sl, s, i, segment;
          for (s = 0; s < l; s++) {
            segment = rawPath[s];
            result += "M" + _round(segment[0]) + "," + _round(segment[1]) + " C";
            sl = segment.length;
            for (i = 2; i < sl; i++) {
              result += _round(segment[i++]) + "," + _round(segment[i++]) + " " + _round(segment[i++]) + "," + _round(segment[i++]) + " " + _round(segment[i++]) + "," + _round(segment[i]) + " ";
            }
            if (segment.closed) {
              result += "z";
            }
          }
          return result;
        }
        var _doc, _win, _docElement, _body, _divContainer, _svgContainer, _identityMatrix, _gEl, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _hasOffsetBug, _setDoc = function _setDoc2(element) {
          var doc = element.ownerDocument || element;
          if (!(_transformProp in element.style) && "msTransform" in element.style) {
            _transformProp = "msTransform";
            _transformOriginProp = _transformProp + "Origin";
          }
          while (doc.parentNode && (doc = doc.parentNode)) {
          }
          _win = window;
          _identityMatrix = new Matrix2D();
          if (doc) {
            _doc = doc;
            _docElement = doc.documentElement;
            _body = doc.body;
            _gEl = _doc.createElementNS("http://www.w3.org/2000/svg", "g");
            _gEl.style.transform = "none";
            var d1 = doc.createElement("div"), d2 = doc.createElement("div"), root = doc && (doc.body || doc.firstElementChild);
            if (root && root.appendChild) {
              root.appendChild(d1);
              d1.appendChild(d2);
              d1.setAttribute("style", "position:static;transform:translate3d(0,0,1px)");
              _hasOffsetBug = d2.offsetParent !== d1;
              root.removeChild(d1);
            }
          }
          return doc;
        }, _forceNonZeroScale = function _forceNonZeroScale2(e) {
          var a, cache;
          while (e && e !== _body) {
            cache = e._gsap;
            cache && cache.uncache && cache.get(e, "x");
            if (cache && !cache.scaleX && !cache.scaleY && cache.renderTransform) {
              cache.scaleX = cache.scaleY = 1e-4;
              cache.renderTransform(1, cache);
              a ? a.push(cache) : a = [cache];
            }
            e = e.parentNode;
          }
          return a;
        }, _svgTemps = [], _divTemps = [], _getDocScrollTop = function _getDocScrollTop2() {
          return _win.pageYOffset || _doc.scrollTop || _docElement.scrollTop || _body.scrollTop || 0;
        }, _getDocScrollLeft = function _getDocScrollLeft2() {
          return _win.pageXOffset || _doc.scrollLeft || _docElement.scrollLeft || _body.scrollLeft || 0;
        }, _svgOwner = function _svgOwner2(element) {
          return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
        }, _isFixed = function _isFixed2(element) {
          if (_win.getComputedStyle(element).position === "fixed") {
            return true;
          }
          element = element.parentNode;
          if (element && element.nodeType === 1) {
            return _isFixed2(element);
          }
        }, _createSibling = function _createSibling2(element, i) {
          if (element.parentNode && (_doc || _setDoc(element))) {
            var svg = _svgOwner(element), ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", type = svg ? i ? "rect" : "g" : "div", x = i !== 2 ? 0 : 100, y = i === 3 ? 100 : 0, css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", e = _doc.createElementNS ? _doc.createElementNS(ns.replace(/^https/, "http"), type) : _doc.createElement(type);
            if (i) {
              if (!svg) {
                if (!_divContainer) {
                  _divContainer = _createSibling2(element);
                  _divContainer.style.cssText = css;
                }
                e.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x + "px";
                _divContainer.appendChild(e);
              } else {
                _svgContainer || (_svgContainer = _createSibling2(element));
                e.setAttribute("width", 0.01);
                e.setAttribute("height", 0.01);
                e.setAttribute("transform", "translate(" + x + "," + y + ")");
                _svgContainer.appendChild(e);
              }
            }
            return e;
          }
          throw "Need document and parent.";
        }, _consolidate = function _consolidate2(m) {
          var c = new Matrix2D(), i = 0;
          for (; i < m.numberOfItems; i++) {
            c.multiply(m.getItem(i).matrix);
          }
          return c;
        }, _getCTM = function _getCTM2(svg) {
          var m = svg.getCTM(), transform;
          if (!m) {
            transform = svg.style[_transformProp];
            svg.style[_transformProp] = "none";
            svg.appendChild(_gEl);
            m = _gEl.getCTM();
            svg.removeChild(_gEl);
            transform ? svg.style[_transformProp] = transform : svg.style.removeProperty(_transformProp.replace(/([A-Z])/g, "-$1").toLowerCase());
          }
          return m || _identityMatrix.clone();
        }, _placeSiblings = function _placeSiblings2(element, adjustGOffset) {
          var svg = _svgOwner(element), isRootSVG = element === svg, siblings = svg ? _svgTemps : _divTemps, parent = element.parentNode, container, m, b, x, y, cs;
          if (element === _win) {
            return element;
          }
          siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
          container = svg ? _svgContainer : _divContainer;
          if (svg) {
            if (isRootSVG) {
              b = _getCTM(element);
              x = -b.e / b.a;
              y = -b.f / b.d;
              m = _identityMatrix;
            } else if (element.getBBox) {
              b = element.getBBox();
              m = element.transform ? element.transform.baseVal : {};
              m = !m.numberOfItems ? _identityMatrix : m.numberOfItems > 1 ? _consolidate(m) : m.getItem(0).matrix;
              x = m.a * b.x + m.c * b.y;
              y = m.b * b.x + m.d * b.y;
            } else {
              m = new Matrix2D();
              x = y = 0;
            }
            if (adjustGOffset && element.tagName.toLowerCase() === "g") {
              x = y = 0;
            }
            (isRootSVG ? svg : parent).appendChild(container);
            container.setAttribute("transform", "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + (m.e + x) + "," + (m.f + y) + ")");
          } else {
            x = y = 0;
            if (_hasOffsetBug) {
              m = element.offsetParent;
              b = element;
              while (b && (b = b.parentNode) && b !== m && b.parentNode) {
                if ((_win.getComputedStyle(b)[_transformProp] + "").length > 4) {
                  x = b.offsetLeft;
                  y = b.offsetTop;
                  b = 0;
                }
              }
            }
            cs = _win.getComputedStyle(element);
            if (cs.position !== "absolute" && cs.position !== "fixed") {
              m = element.offsetParent;
              while (parent && parent !== m) {
                x += parent.scrollLeft || 0;
                y += parent.scrollTop || 0;
                parent = parent.parentNode;
              }
            }
            b = container.style;
            b.top = element.offsetTop - y + "px";
            b.left = element.offsetLeft - x + "px";
            b[_transformProp] = cs[_transformProp];
            b[_transformOriginProp] = cs[_transformOriginProp];
            b.position = cs.position === "fixed" ? "fixed" : "absolute";
            element.parentNode.appendChild(container);
          }
          return container;
        }, _setMatrix = function _setMatrix2(m, a, b, c, d, e, f) {
          m.a = a;
          m.b = b;
          m.c = c;
          m.d = d;
          m.e = e;
          m.f = f;
          return m;
        };
        var Matrix2D = function() {
          function Matrix2D2(a, b, c, d, e, f) {
            if (a === void 0) {
              a = 1;
            }
            if (b === void 0) {
              b = 0;
            }
            if (c === void 0) {
              c = 0;
            }
            if (d === void 0) {
              d = 1;
            }
            if (e === void 0) {
              e = 0;
            }
            if (f === void 0) {
              f = 0;
            }
            _setMatrix(this, a, b, c, d, e, f);
          }
          var _proto = Matrix2D2.prototype;
          _proto.inverse = function inverse() {
            var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, determinant = a * d - b * c || 1e-10;
            return _setMatrix(this, d / determinant, -b / determinant, -c / determinant, a / determinant, (c * f - d * e) / determinant, -(a * f - b * e) / determinant);
          };
          _proto.multiply = function multiply(matrix) {
            var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, a2 = matrix.a, b2 = matrix.c, c2 = matrix.b, d2 = matrix.d, e2 = matrix.e, f2 = matrix.f;
            return _setMatrix(this, a2 * a + c2 * c, a2 * b + c2 * d, b2 * a + d2 * c, b2 * b + d2 * d, e + e2 * a + f2 * c, f + e2 * b + f2 * d);
          };
          _proto.clone = function clone() {
            return new Matrix2D2(this.a, this.b, this.c, this.d, this.e, this.f);
          };
          _proto.equals = function equals(matrix) {
            var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
            return a === matrix.a && b === matrix.b && c === matrix.c && d === matrix.d && e === matrix.e && f === matrix.f;
          };
          _proto.apply = function apply(point, decoratee) {
            if (decoratee === void 0) {
              decoratee = {};
            }
            var x = point.x, y = point.y, a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
            decoratee.x = x * a + y * c + e || 0;
            decoratee.y = x * b + y * d + f || 0;
            return decoratee;
          };
          return Matrix2D2;
        }();
        function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
          if (!element || !element.parentNode || (_doc || _setDoc(element)).documentElement === element) {
            return new Matrix2D();
          }
          var zeroScales = _forceNonZeroScale(element), svg = _svgOwner(element), temps = svg ? _svgTemps : _divTemps, container = _placeSiblings(element, adjustGOffset), b1 = temps[0].getBoundingClientRect(), b2 = temps[1].getBoundingClientRect(), b3 = temps[2].getBoundingClientRect(), parent = container.parentNode, isFixed = !includeScrollInFixed && _isFixed(element), m = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));
          parent.removeChild(container);
          if (zeroScales) {
            b1 = zeroScales.length;
            while (b1--) {
              b2 = zeroScales[b1];
              b2.scaleX = b2.scaleY = 0;
              b2.renderTransform(1, b2);
            }
          }
          return inverse ? m.inverse() : m;
        }
        var _xProps = "x,translateX,left,marginLeft,xPercent".split(","), _yProps = "y,translateY,top,marginTop,yPercent".split(","), _DEG2RAD$1 = Math.PI / 180, gsap2, PropTween, _getUnit, _toArray, _getStyleSaver, _reverting, _getGSAP = function _getGSAP2() {
          return gsap2 || typeof window !== "undefined" && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
        }, _populateSegmentFromArray = function _populateSegmentFromArray2(segment, values, property, mode) {
          var l = values.length, si = mode === 2 ? 0 : mode, i = 0, v;
          for (; i < l; i++) {
            segment[si] = v = parseFloat(values[i][property]);
            mode === 2 && (segment[si + 1] = 0);
            si += 2;
          }
          return segment;
        }, _getPropNum = function _getPropNum2(target, prop, unit) {
          return parseFloat(target._gsap.get(target, prop, unit || "px")) || 0;
        }, _relativize = function _relativize2(segment) {
          var x = segment[0], y = segment[1], i;
          for (i = 2; i < segment.length; i += 2) {
            x = segment[i] += x;
            y = segment[i + 1] += y;
          }
        }, _segmentToRawPath = function _segmentToRawPath2(plugin, segment, target, x, y, slicer, vars, unitX, unitY) {
          if (vars.type === "cubic") {
            segment = [segment];
          } else {
            vars.fromCurrent !== false && segment.unshift(_getPropNum(target, x, unitX), y ? _getPropNum(target, y, unitY) : 0);
            vars.relative && _relativize(segment);
            var pointFunc = y ? pointsToSegment : flatPointsToSegment;
            segment = [pointFunc(segment, vars.curviness)];
          }
          segment = slicer(_align(segment, target, vars));
          _addDimensionalPropTween(plugin, target, x, segment, "x", unitX);
          y && _addDimensionalPropTween(plugin, target, y, segment, "y", unitY);
          return cacheRawPathMeasurements(segment, vars.resolution || (vars.curviness === 0 ? 20 : 12));
        }, _emptyFunc = function _emptyFunc2(v) {
          return v;
        }, _numExp = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g, _originToPoint = function _originToPoint2(element, origin, parentMatrix) {
          var m = getGlobalMatrix(element), x = 0, y = 0, svg;
          if ((element.tagName + "").toLowerCase() === "svg") {
            svg = element.viewBox.baseVal;
            svg.width || (svg = {
              width: +element.getAttribute("width"),
              height: +element.getAttribute("height")
            });
          } else {
            svg = origin && element.getBBox && element.getBBox();
          }
          if (origin && origin !== "auto") {
            x = origin.push ? origin[0] * (svg ? svg.width : element.offsetWidth || 0) : origin.x;
            y = origin.push ? origin[1] * (svg ? svg.height : element.offsetHeight || 0) : origin.y;
          }
          return parentMatrix.apply(x || y ? m.apply({
            x,
            y
          }) : {
            x: m.e,
            y: m.f
          });
        }, _getAlignMatrix = function _getAlignMatrix2(fromElement, toElement, fromOrigin, toOrigin) {
          var parentMatrix = getGlobalMatrix(fromElement.parentNode, true, true), m = parentMatrix.clone().multiply(getGlobalMatrix(toElement)), fromPoint = _originToPoint(fromElement, fromOrigin, parentMatrix), _originToPoint2 = _originToPoint(toElement, toOrigin, parentMatrix), x = _originToPoint2.x, y = _originToPoint2.y, p;
          m.e = m.f = 0;
          if (toOrigin === "auto" && toElement.getTotalLength && toElement.tagName.toLowerCase() === "path") {
            p = toElement.getAttribute("d").match(_numExp) || [];
            p = m.apply({
              x: +p[0],
              y: +p[1]
            });
            x += p.x;
            y += p.y;
          }
          if (p) {
            p = m.apply(toElement.getBBox());
            x -= p.x;
            y -= p.y;
          }
          m.e = x - fromPoint.x;
          m.f = y - fromPoint.y;
          return m;
        }, _align = function _align2(rawPath, target, _ref) {
          var align = _ref.align, matrix = _ref.matrix, offsetX = _ref.offsetX, offsetY = _ref.offsetY, alignOrigin = _ref.alignOrigin;
          var x = rawPath[0][0], y = rawPath[0][1], curX = _getPropNum(target, "x"), curY = _getPropNum(target, "y"), alignTarget, m, p;
          if (!rawPath || !rawPath.length) {
            return getRawPath("M0,0L0,0");
          }
          if (align) {
            if (align === "self" || (alignTarget = _toArray(align)[0] || target) === target) {
              transformRawPath(rawPath, 1, 0, 0, 1, curX - x, curY - y);
            } else {
              if (alignOrigin && alignOrigin[2] !== false) {
                gsap2.set(target, {
                  transformOrigin: alignOrigin[0] * 100 + "% " + alignOrigin[1] * 100 + "%"
                });
              } else {
                alignOrigin = [_getPropNum(target, "xPercent") / -100, _getPropNum(target, "yPercent") / -100];
              }
              m = _getAlignMatrix(target, alignTarget, alignOrigin, "auto");
              p = m.apply({
                x,
                y
              });
              transformRawPath(rawPath, m.a, m.b, m.c, m.d, curX + m.e - (p.x - m.e), curY + m.f - (p.y - m.f));
            }
          }
          if (matrix) {
            transformRawPath(rawPath, matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, matrix.f);
          } else if (offsetX || offsetY) {
            transformRawPath(rawPath, 1, 0, 0, 1, offsetX || 0, offsetY || 0);
          }
          return rawPath;
        }, _addDimensionalPropTween = function _addDimensionalPropTween2(plugin, target, property, rawPath, pathProperty, forceUnit) {
          var cache = target._gsap, harness = cache.harness, alias = harness && harness.aliases && harness.aliases[property], prop = alias && alias.indexOf(",") < 0 ? alias : property, pt = plugin._pt = new PropTween(plugin._pt, target, prop, 0, 0, _emptyFunc, 0, cache.set(target, prop, plugin));
          pt.u = _getUnit(cache.get(target, prop, forceUnit)) || 0;
          pt.path = rawPath;
          pt.pp = pathProperty;
          plugin._props.push(prop);
        }, _sliceModifier = function _sliceModifier2(start, end) {
          return function(rawPath) {
            return start || end !== 1 ? sliceRawPath(rawPath, start, end) : rawPath;
          };
        };
        var MotionPathPlugin2 = {
          version: "3.12.5",
          name: "motionPath",
          register: function register(core, Plugin, propTween) {
            gsap2 = core;
            _getUnit = gsap2.utils.getUnit;
            _toArray = gsap2.utils.toArray;
            _getStyleSaver = gsap2.core.getStyleSaver;
            _reverting = gsap2.core.reverting || function() {
            };
            PropTween = propTween;
          },
          init: function init(target, vars, tween) {
            if (!gsap2) {
              console.warn("Please gsap.registerPlugin(MotionPathPlugin)");
              return false;
            }
            if (!(typeof vars === "object" && !vars.style) || !vars.path) {
              vars = {
                path: vars
              };
            }
            var rawPaths = [], _vars = vars, path = _vars.path, autoRotate = _vars.autoRotate, unitX = _vars.unitX, unitY = _vars.unitY, x = _vars.x, y = _vars.y, firstObj = path[0], slicer = _sliceModifier(vars.start, "end" in vars ? vars.end : 1), rawPath, p;
            this.rawPaths = rawPaths;
            this.target = target;
            this.tween = tween;
            this.styles = _getStyleSaver && _getStyleSaver(target, "transform");
            if (this.rotate = autoRotate || autoRotate === 0) {
              this.rOffset = parseFloat(autoRotate) || 0;
              this.radians = !!vars.useRadians;
              this.rProp = vars.rotation || "rotation";
              this.rSet = target._gsap.set(target, this.rProp, this);
              this.ru = _getUnit(target._gsap.get(target, this.rProp)) || 0;
            }
            if (Array.isArray(path) && !("closed" in path) && typeof firstObj !== "number") {
              for (p in firstObj) {
                if (!x && ~_xProps.indexOf(p)) {
                  x = p;
                } else if (!y && ~_yProps.indexOf(p)) {
                  y = p;
                }
              }
              if (x && y) {
                rawPaths.push(_segmentToRawPath(this, _populateSegmentFromArray(_populateSegmentFromArray([], path, x, 0), path, y, 1), target, x, y, slicer, vars, unitX || _getUnit(path[0][x]), unitY || _getUnit(path[0][y])));
              } else {
                x = y = 0;
              }
              for (p in firstObj) {
                p !== x && p !== y && rawPaths.push(_segmentToRawPath(this, _populateSegmentFromArray([], path, p, 2), target, p, 0, slicer, vars, _getUnit(path[0][p])));
              }
            } else {
              rawPath = slicer(_align(getRawPath(vars.path), target, vars));
              cacheRawPathMeasurements(rawPath, vars.resolution);
              rawPaths.push(rawPath);
              _addDimensionalPropTween(this, target, vars.x || "x", rawPath, "x", vars.unitX || "px");
              _addDimensionalPropTween(this, target, vars.y || "y", rawPath, "y", vars.unitY || "px");
            }
          },
          render: function render(ratio, data) {
            var rawPaths = data.rawPaths, i = rawPaths.length, pt = data._pt;
            if (data.tween._time || !_reverting()) {
              if (ratio > 1) {
                ratio = 1;
              } else if (ratio < 0) {
                ratio = 0;
              }
              while (i--) {
                getPositionOnPath(rawPaths[i], ratio, !i && data.rotate, rawPaths[i]);
              }
              while (pt) {
                pt.set(pt.t, pt.p, pt.path[pt.pp] + pt.u, pt.d, ratio);
                pt = pt._next;
              }
              data.rotate && data.rSet(data.target, data.rProp, rawPaths[0].angle * (data.radians ? _DEG2RAD$1 : 1) + data.rOffset + data.ru, data, ratio);
            } else {
              data.styles.revert();
            }
          },
          getLength: function getLength(path) {
            return cacheRawPathMeasurements(getRawPath(path)).totalLength;
          },
          sliceRawPath,
          getRawPath,
          pointsToSegment,
          stringToRawPath,
          rawPathToString,
          transformRawPath,
          getGlobalMatrix,
          getPositionOnPath,
          cacheRawPathMeasurements,
          convertToPath: function convertToPath$1(targets, swap) {
            return _toArray(targets).map(function(target) {
              return convertToPath(target, swap !== false);
            });
          },
          convertCoordinates: function convertCoordinates(fromElement, toElement, point) {
            var m = getGlobalMatrix(toElement, true, true).multiply(getGlobalMatrix(fromElement));
            return point ? m.apply(point) : m;
          },
          getAlignMatrix: _getAlignMatrix,
          getRelativePosition: function getRelativePosition(fromElement, toElement, fromOrigin, toOrigin) {
            var m = _getAlignMatrix(fromElement, toElement, fromOrigin, toOrigin);
            return {
              x: m.e,
              y: m.f
            };
          },
          arrayToRawPath: function arrayToRawPath(value, vars) {
            vars = vars || {};
            var segment = _populateSegmentFromArray(_populateSegmentFromArray([], value, vars.x || "x", 0), value, vars.y || "y", 1);
            vars.relative && _relativize(segment);
            return [vars.type === "cubic" ? segment : pointsToSegment(segment, vars.curviness)];
          }
        };
        _getGSAP() && gsap2.registerPlugin(MotionPathPlugin2);
        exports2.MotionPathPlugin = MotionPathPlugin2;
        exports2.default = MotionPathPlugin2;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // node_modules/gsap/dist/EaselPlugin.js
  var require_EaselPlugin = __commonJS({
    "node_modules/gsap/dist/EaselPlugin.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = global || self, factory(global.window = global.window || {}));
      })(exports, function(exports2) {
        "use strict";
        var gsap2, _coreInitted, _win, _createJS, _ColorFilter, _ColorMatrixFilter, _colorProps = "redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset".split(","), _windowExists = function _windowExists2() {
          return typeof window !== "undefined";
        }, _getGSAP = function _getGSAP2() {
          return gsap2 || _windowExists() && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
        }, _getCreateJS = function _getCreateJS2() {
          return _createJS || _win && _win.createjs || _win || {};
        }, _warn = function _warn2(message) {
          return console.warn(message);
        }, _cache = function _cache2(target) {
          var b = target.getBounds && target.getBounds();
          if (!b) {
            b = target.nominalBounds || {
              x: 0,
              y: 0,
              width: 100,
              height: 100
            };
            target.setBounds && target.setBounds(b.x, b.y, b.width, b.height);
          }
          target.cache && target.cache(b.x, b.y, b.width, b.height);
          _warn("EaselPlugin: for filters to display in EaselJS, you must call the object's cache() method first. GSAP attempted to use the target's getBounds() for the cache but that may not be completely accurate. " + target);
        }, _parseColorFilter = function _parseColorFilter2(target, v, plugin) {
          if (!_ColorFilter) {
            _ColorFilter = _getCreateJS().ColorFilter;
            if (!_ColorFilter) {
              _warn("EaselPlugin error: The EaselJS ColorFilter JavaScript file wasn't loaded.");
            }
          }
          var filters = target.filters || [], i = filters.length, c, s, e, a, p, pt;
          while (i--) {
            if (filters[i] instanceof _ColorFilter) {
              s = filters[i];
              break;
            }
          }
          if (!s) {
            s = new _ColorFilter();
            filters.push(s);
            target.filters = filters;
          }
          e = s.clone();
          if (v.tint != null) {
            c = gsap2.utils.splitColor(v.tint);
            a = v.tintAmount != null ? +v.tintAmount : 1;
            e.redOffset = +c[0] * a;
            e.greenOffset = +c[1] * a;
            e.blueOffset = +c[2] * a;
            e.redMultiplier = e.greenMultiplier = e.blueMultiplier = 1 - a;
          } else {
            for (p in v) {
              if (p !== "exposure") {
                if (p !== "brightness") {
                  e[p] = +v[p];
                }
              }
            }
          }
          if (v.exposure != null) {
            e.redOffset = e.greenOffset = e.blueOffset = 255 * (+v.exposure - 1);
            e.redMultiplier = e.greenMultiplier = e.blueMultiplier = 1;
          } else if (v.brightness != null) {
            a = +v.brightness - 1;
            e.redOffset = e.greenOffset = e.blueOffset = a > 0 ? a * 255 : 0;
            e.redMultiplier = e.greenMultiplier = e.blueMultiplier = 1 - Math.abs(a);
          }
          i = 8;
          while (i--) {
            p = _colorProps[i];
            if (s[p] !== e[p]) {
              pt = plugin.add(s, p, s[p], e[p], 0, 0, 0, 0, 0, 1);
              if (pt) {
                pt.op = "easel_colorFilter";
              }
            }
          }
          plugin._props.push("easel_colorFilter");
          if (!target.cacheID) {
            _cache(target);
          }
        }, _idMatrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], _lumR = 0.212671, _lumG = 0.71516, _lumB = 0.072169, _applyMatrix = function _applyMatrix2(m, m2) {
          if (!(m instanceof Array) || !(m2 instanceof Array)) {
            return m2;
          }
          var temp = [], i = 0, z = 0, y, x;
          for (y = 0; y < 4; y++) {
            for (x = 0; x < 5; x++) {
              z = x === 4 ? m[i + 4] : 0;
              temp[i + x] = m[i] * m2[x] + m[i + 1] * m2[x + 5] + m[i + 2] * m2[x + 10] + m[i + 3] * m2[x + 15] + z;
            }
            i += 5;
          }
          return temp;
        }, _setSaturation = function _setSaturation2(m, n) {
          if (isNaN(n)) {
            return m;
          }
          var inv = 1 - n, r = inv * _lumR, g = inv * _lumG, b = inv * _lumB;
          return _applyMatrix([r + n, g, b, 0, 0, r, g + n, b, 0, 0, r, g, b + n, 0, 0, 0, 0, 0, 1, 0], m);
        }, _colorize = function _colorize2(m, color, amount) {
          if (isNaN(amount)) {
            amount = 1;
          }
          var c = gsap2.utils.splitColor(color), r = c[0] / 255, g = c[1] / 255, b = c[2] / 255, inv = 1 - amount;
          return _applyMatrix([inv + amount * r * _lumR, amount * r * _lumG, amount * r * _lumB, 0, 0, amount * g * _lumR, inv + amount * g * _lumG, amount * g * _lumB, 0, 0, amount * b * _lumR, amount * b * _lumG, inv + amount * b * _lumB, 0, 0, 0, 0, 0, 1, 0], m);
        }, _setHue = function _setHue2(m, n) {
          if (isNaN(n)) {
            return m;
          }
          n *= Math.PI / 180;
          var c = Math.cos(n), s = Math.sin(n);
          return _applyMatrix([_lumR + c * (1 - _lumR) + s * -_lumR, _lumG + c * -_lumG + s * -_lumG, _lumB + c * -_lumB + s * (1 - _lumB), 0, 0, _lumR + c * -_lumR + s * 0.143, _lumG + c * (1 - _lumG) + s * 0.14, _lumB + c * -_lumB + s * -0.283, 0, 0, _lumR + c * -_lumR + s * -(1 - _lumR), _lumG + c * -_lumG + s * _lumG, _lumB + c * (1 - _lumB) + s * _lumB, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], m);
        }, _setContrast = function _setContrast2(m, n) {
          if (isNaN(n)) {
            return m;
          }
          n += 0.01;
          return _applyMatrix([n, 0, 0, 0, 128 * (1 - n), 0, n, 0, 0, 128 * (1 - n), 0, 0, n, 0, 128 * (1 - n), 0, 0, 0, 1, 0], m);
        }, _parseColorMatrixFilter = function _parseColorMatrixFilter2(target, v, plugin) {
          if (!_ColorMatrixFilter) {
            _ColorMatrixFilter = _getCreateJS().ColorMatrixFilter;
            if (!_ColorMatrixFilter) {
              _warn("EaselPlugin: The EaselJS ColorMatrixFilter JavaScript file wasn't loaded.");
            }
          }
          var filters = target.filters || [], i = filters.length, matrix, startMatrix, s, pg;
          while (--i > -1) {
            if (filters[i] instanceof _ColorMatrixFilter) {
              s = filters[i];
              break;
            }
          }
          if (!s) {
            s = new _ColorMatrixFilter(_idMatrix.slice());
            filters.push(s);
            target.filters = filters;
          }
          startMatrix = s.matrix;
          matrix = _idMatrix.slice();
          if (v.colorize != null) {
            matrix = _colorize(matrix, v.colorize, Number(v.colorizeAmount));
          }
          if (v.contrast != null) {
            matrix = _setContrast(matrix, Number(v.contrast));
          }
          if (v.hue != null) {
            matrix = _setHue(matrix, Number(v.hue));
          }
          if (v.saturation != null) {
            matrix = _setSaturation(matrix, Number(v.saturation));
          }
          i = matrix.length;
          while (--i > -1) {
            if (matrix[i] !== startMatrix[i]) {
              pg = plugin.add(startMatrix, i, startMatrix[i], matrix[i], 0, 0, 0, 0, 0, 1);
              if (pg) {
                pg.op = "easel_colorMatrixFilter";
              }
            }
          }
          plugin._props.push("easel_colorMatrixFilter");
          if (!target.cacheID) {
            _cache();
          }
          plugin._matrix = startMatrix;
        }, _initCore = function _initCore2(core) {
          gsap2 = core || _getGSAP();
          if (_windowExists()) {
            _win = window;
          }
          if (gsap2) {
            _coreInitted = 1;
          }
        };
        var EaselPlugin2 = {
          version: "3.12.5",
          name: "easel",
          init: function init(target, value, tween, index, targets) {
            if (!_coreInitted) {
              _initCore();
              if (!gsap2) {
                _warn("Please gsap.registerPlugin(EaselPlugin)");
              }
            }
            this.target = target;
            var p, pt, tint, colorMatrix, end, labels, i;
            for (p in value) {
              end = value[p];
              if (p === "colorFilter" || p === "tint" || p === "tintAmount" || p === "exposure" || p === "brightness") {
                if (!tint) {
                  _parseColorFilter(target, value.colorFilter || value, this);
                  tint = true;
                }
              } else if (p === "saturation" || p === "contrast" || p === "hue" || p === "colorize" || p === "colorizeAmount") {
                if (!colorMatrix) {
                  _parseColorMatrixFilter(target, value.colorMatrixFilter || value, this);
                  colorMatrix = true;
                }
              } else if (p === "frame") {
                if (typeof end === "string" && end.charAt(1) !== "=" && (labels = target.labels)) {
                  for (i = 0; i < labels.length; i++) {
                    if (labels[i].label === end) {
                      end = labels[i].position;
                    }
                  }
                }
                pt = this.add(target, "gotoAndStop", target.currentFrame, end, index, targets, Math.round, 0, 0, 1);
                if (pt) {
                  pt.op = p;
                }
              } else if (target[p] != null) {
                this.add(target, p, "get", end);
              }
            }
          },
          render: function render(ratio, data) {
            var pt = data._pt;
            while (pt) {
              pt.r(ratio, pt.d);
              pt = pt._next;
            }
            if (data.target.cacheID) {
              data.target.updateCache();
            }
          },
          register: _initCore
        };
        EaselPlugin2.registerCreateJS = function(createjs) {
          _createJS = createjs;
        };
        _getGSAP() && gsap2.registerPlugin(EaselPlugin2);
        exports2.EaselPlugin = EaselPlugin2;
        exports2.default = EaselPlugin2;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // node_modules/gsap/dist/TextPlugin.js
  var require_TextPlugin = __commonJS({
    "node_modules/gsap/dist/TextPlugin.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = global || self, factory(global.window = global.window || {}));
      })(exports, function(exports2) {
        "use strict";
        var _trimExp = /(?:^\s+|\s+$)/g;
        var emojiExp = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
        function getText(e) {
          var type = e.nodeType, result = "";
          if (type === 1 || type === 9 || type === 11) {
            if (typeof e.textContent === "string") {
              return e.textContent;
            } else {
              for (e = e.firstChild; e; e = e.nextSibling) {
                result += getText(e);
              }
            }
          } else if (type === 3 || type === 4) {
            return e.nodeValue;
          }
          return result;
        }
        function splitInnerHTML(element, delimiter, trim, preserveSpaces) {
          var node = element.firstChild, result = [], s;
          while (node) {
            if (node.nodeType === 3) {
              s = (node.nodeValue + "").replace(/^\n+/g, "");
              if (!preserveSpaces) {
                s = s.replace(/\s+/g, " ");
              }
              result.push.apply(result, emojiSafeSplit(s, delimiter, trim, preserveSpaces));
            } else if ((node.nodeName + "").toLowerCase() === "br") {
              result[result.length - 1] += "<br>";
            } else {
              result.push(node.outerHTML);
            }
            node = node.nextSibling;
          }
          s = result.length;
          while (s--) {
            result[s] === "&" && result.splice(s, 1, "&amp;");
          }
          return result;
        }
        function emojiSafeSplit(text, delimiter, trim, preserveSpaces) {
          text += "";
          trim && (text = text.trim ? text.trim() : text.replace(_trimExp, ""));
          if (delimiter && delimiter !== "") {
            return text.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(delimiter);
          }
          var result = [], l = text.length, i = 0, j, character;
          for (; i < l; i++) {
            character = text.charAt(i);
            if (character.charCodeAt(0) >= 55296 && character.charCodeAt(0) <= 56319 || text.charCodeAt(i + 1) >= 65024 && text.charCodeAt(i + 1) <= 65039) {
              j = ((text.substr(i, 12).split(emojiExp) || [])[1] || "").length || 2;
              character = text.substr(i, j);
              result.emoji = 1;
              i += j - 1;
            }
            result.push(character === ">" ? "&gt;" : character === "<" ? "&lt;" : preserveSpaces && character === " " && (text.charAt(i - 1) === " " || text.charAt(i + 1) === " ") ? "&nbsp;" : character);
          }
          return result;
        }
        var gsap2, _tempDiv, _getGSAP = function _getGSAP2() {
          return gsap2 || typeof window !== "undefined" && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
        };
        var TextPlugin2 = {
          version: "3.12.5",
          name: "text",
          init: function init(target, value, tween) {
            typeof value !== "object" && (value = {
              value
            });
            var i = target.nodeName.toUpperCase(), data = this, _value = value, newClass = _value.newClass, oldClass = _value.oldClass, preserveSpaces = _value.preserveSpaces, rtl = _value.rtl, delimiter = data.delimiter = value.delimiter || "", fillChar = data.fillChar = value.fillChar || (value.padSpace ? "&nbsp;" : ""), _short, text, original, j, condensedText, condensedOriginal, aggregate, s;
            data.svg = target.getBBox && (i === "TEXT" || i === "TSPAN");
            if (!("innerHTML" in target) && !data.svg) {
              return false;
            }
            data.target = target;
            if (!("value" in value)) {
              data.text = data.original = [""];
              return;
            }
            original = splitInnerHTML(target, delimiter, false, preserveSpaces);
            _tempDiv || (_tempDiv = document.createElement("div"));
            _tempDiv.innerHTML = value.value;
            text = splitInnerHTML(_tempDiv, delimiter, false, preserveSpaces);
            data.from = tween._from;
            if ((data.from || rtl) && !(rtl && data.from)) {
              i = original;
              original = text;
              text = i;
            }
            data.hasClass = !!(newClass || oldClass);
            data.newClass = rtl ? oldClass : newClass;
            data.oldClass = rtl ? newClass : oldClass;
            i = original.length - text.length;
            _short = i < 0 ? original : text;
            if (i < 0) {
              i = -i;
            }
            while (--i > -1) {
              _short.push(fillChar);
            }
            if (value.type === "diff") {
              j = 0;
              condensedText = [];
              condensedOriginal = [];
              aggregate = "";
              for (i = 0; i < text.length; i++) {
                s = text[i];
                if (s === original[i]) {
                  aggregate += s;
                } else {
                  condensedText[j] = aggregate + s;
                  condensedOriginal[j++] = aggregate + original[i];
                  aggregate = "";
                }
              }
              text = condensedText;
              original = condensedOriginal;
              if (aggregate) {
                text.push(aggregate);
                original.push(aggregate);
              }
            }
            value.speed && tween.duration(Math.min(0.05 / value.speed * _short.length, value.maxDuration || 9999));
            data.rtl = rtl;
            data.original = original;
            data.text = text;
            data._props.push("text");
          },
          render: function render(ratio, data) {
            if (ratio > 1) {
              ratio = 1;
            } else if (ratio < 0) {
              ratio = 0;
            }
            if (data.from) {
              ratio = 1 - ratio;
            }
            var text = data.text, hasClass = data.hasClass, newClass = data.newClass, oldClass = data.oldClass, delimiter = data.delimiter, target = data.target, fillChar = data.fillChar, original = data.original, rtl = data.rtl, l = text.length, i = (rtl ? 1 - ratio : ratio) * l + 0.5 | 0, applyNew, applyOld, str;
            if (hasClass && ratio) {
              applyNew = newClass && i;
              applyOld = oldClass && i !== l;
              str = (applyNew ? "<span class='" + newClass + "'>" : "") + text.slice(0, i).join(delimiter) + (applyNew ? "</span>" : "") + (applyOld ? "<span class='" + oldClass + "'>" : "") + delimiter + original.slice(i).join(delimiter) + (applyOld ? "</span>" : "");
            } else {
              str = text.slice(0, i).join(delimiter) + delimiter + original.slice(i).join(delimiter);
            }
            if (data.svg) {
              target.textContent = str;
            } else {
              target.innerHTML = fillChar === "&nbsp;" && ~str.indexOf("  ") ? str.split("  ").join("&nbsp;&nbsp;") : str;
            }
          }
        };
        TextPlugin2.splitInnerHTML = splitInnerHTML;
        TextPlugin2.emojiSafeSplit = emojiSafeSplit;
        TextPlugin2.getText = getText;
        _getGSAP() && gsap2.registerPlugin(TextPlugin2);
        exports2.TextPlugin = TextPlugin2;
        exports2.default = TextPlugin2;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // index.ts
  var import_gsap = __toESM(require_gsap());
  var import_CustomEase = __toESM(require_CustomEase());
  var import_Flip = __toESM(require_Flip());
  var import_ScrollTrigger = __toESM(require_ScrollTrigger());
  var import_Observer = __toESM(require_Observer());
  var import_ScrollToPlugin = __toESM(require_ScrollToPlugin());
  var import_Draggable = __toESM(require_Draggable());
  var import_MotionPathPlugin = __toESM(require_MotionPathPlugin());
  var import_EaselPlugin = __toESM(require_EaselPlugin());
  var import_TextPlugin = __toESM(require_TextPlugin());
  import_gsap.gsap.registerPlugin(import_Flip.Flip, import_ScrollTrigger.ScrollTrigger, import_Observer.Observer, import_ScrollToPlugin.ScrollToPlugin, import_Draggable.Draggable, import_MotionPathPlugin.MotionPathPlugin, import_EaselPlugin.EaselPlugin, import_TextPlugin.TextPlugin, import_CustomEase.CustomEase);
  import_gsap.gsap.to(".menu_gl", {
    opacity: 0,
    ease: "power2.out",
    duration: 4
  });
})();
/*! Bundled license information:

gsap/dist/gsap.js:
  (*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/dist/CustomEase.js:
  (*!
   * CustomEase 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/dist/Flip.js:
  (*!
   * Flip 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/dist/ScrollTrigger.js:
  (*!
   * Observer 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
  (*!
   * ScrollTrigger 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/dist/Observer.js:
  (*!
   * Observer 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/dist/ScrollToPlugin.js:
  (*!
   * ScrollToPlugin 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/dist/MotionPathPlugin.js:
  (*!
   * MotionPathPlugin 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/dist/EaselPlugin.js:
  (*!
   * EaselPlugin 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/dist/TextPlugin.js:
  (*!
   * TextPlugin 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
