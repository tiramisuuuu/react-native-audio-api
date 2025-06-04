"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  AudioBuffer: true,
  AudioBufferSourceNode: true,
  AudioContext: true,
  OfflineAudioContext: true,
  AudioDestinationNode: true,
  AudioNode: true,
  AnalyserNode: true,
  AudioParam: true,
  AudioScheduledSourceNode: true,
  BaseAudioContext: true,
  BiquadFilterNode: true,
  GainNode: true,
  OscillatorNode: true,
  StereoPannerNode: true,
  OscillatorType: true,
  BiquadFilterType: true,
  ChannelCountMode: true,
  ChannelInterpretation: true,
  ContextState: true,
  WindowType: true,
  PeriodicWaveConstraints: true,
  IndexSizeError: true,
  InvalidAccessError: true,
  InvalidStateError: true,
  RangeError: true,
  NotSupportedError: true
};
Object.defineProperty(exports, "AnalyserNode", {
  enumerable: true,
  get: function () {
    return _AnalyserNode.default;
  }
});
Object.defineProperty(exports, "AudioBuffer", {
  enumerable: true,
  get: function () {
    return _AudioBuffer.default;
  }
});
Object.defineProperty(exports, "AudioBufferSourceNode", {
  enumerable: true,
  get: function () {
    return _AudioBufferSourceNode.default;
  }
});
Object.defineProperty(exports, "AudioContext", {
  enumerable: true,
  get: function () {
    return _AudioContext.default;
  }
});
Object.defineProperty(exports, "AudioDestinationNode", {
  enumerable: true,
  get: function () {
    return _AudioDestinationNode.default;
  }
});
Object.defineProperty(exports, "AudioNode", {
  enumerable: true,
  get: function () {
    return _AudioNode.default;
  }
});
Object.defineProperty(exports, "AudioParam", {
  enumerable: true,
  get: function () {
    return _AudioParam.default;
  }
});
Object.defineProperty(exports, "AudioScheduledSourceNode", {
  enumerable: true,
  get: function () {
    return _AudioScheduledSourceNode.default;
  }
});
Object.defineProperty(exports, "BaseAudioContext", {
  enumerable: true,
  get: function () {
    return _BaseAudioContext.default;
  }
});
Object.defineProperty(exports, "BiquadFilterNode", {
  enumerable: true,
  get: function () {
    return _BiquadFilterNode.default;
  }
});
Object.defineProperty(exports, "BiquadFilterType", {
  enumerable: true,
  get: function () {
    return _types.BiquadFilterType;
  }
});
Object.defineProperty(exports, "ChannelCountMode", {
  enumerable: true,
  get: function () {
    return _types.ChannelCountMode;
  }
});
Object.defineProperty(exports, "ChannelInterpretation", {
  enumerable: true,
  get: function () {
    return _types.ChannelInterpretation;
  }
});
Object.defineProperty(exports, "ContextState", {
  enumerable: true,
  get: function () {
    return _types.ContextState;
  }
});
Object.defineProperty(exports, "GainNode", {
  enumerable: true,
  get: function () {
    return _GainNode.default;
  }
});
Object.defineProperty(exports, "IndexSizeError", {
  enumerable: true,
  get: function () {
    return _errors.IndexSizeError;
  }
});
Object.defineProperty(exports, "InvalidAccessError", {
  enumerable: true,
  get: function () {
    return _errors.InvalidAccessError;
  }
});
Object.defineProperty(exports, "InvalidStateError", {
  enumerable: true,
  get: function () {
    return _errors.InvalidStateError;
  }
});
Object.defineProperty(exports, "NotSupportedError", {
  enumerable: true,
  get: function () {
    return _errors.NotSupportedError;
  }
});
Object.defineProperty(exports, "OfflineAudioContext", {
  enumerable: true,
  get: function () {
    return _OfflineAudioContext.default;
  }
});
Object.defineProperty(exports, "OscillatorNode", {
  enumerable: true,
  get: function () {
    return _OscillatorNode.default;
  }
});
Object.defineProperty(exports, "OscillatorType", {
  enumerable: true,
  get: function () {
    return _types.OscillatorType;
  }
});
Object.defineProperty(exports, "PeriodicWaveConstraints", {
  enumerable: true,
  get: function () {
    return _types.PeriodicWaveConstraints;
  }
});
Object.defineProperty(exports, "RangeError", {
  enumerable: true,
  get: function () {
    return _errors.RangeError;
  }
});
Object.defineProperty(exports, "StereoPannerNode", {
  enumerable: true,
  get: function () {
    return _StereoPannerNode.default;
  }
});
Object.defineProperty(exports, "WindowType", {
  enumerable: true,
  get: function () {
    return _types.WindowType;
  }
});
var _AudioBuffer = _interopRequireDefault(require("./web-core/AudioBuffer"));
var _AudioBufferSourceNode = _interopRequireDefault(require("./web-core/AudioBufferSourceNode"));
var _AudioContext = _interopRequireDefault(require("./web-core/AudioContext"));
var _OfflineAudioContext = _interopRequireDefault(require("./web-core/OfflineAudioContext"));
var _AudioDestinationNode = _interopRequireDefault(require("./web-core/AudioDestinationNode"));
var _AudioNode = _interopRequireDefault(require("./web-core/AudioNode"));
var _AnalyserNode = _interopRequireDefault(require("./web-core/AnalyserNode"));
var _AudioParam = _interopRequireDefault(require("./web-core/AudioParam"));
var _AudioScheduledSourceNode = _interopRequireDefault(require("./web-core/AudioScheduledSourceNode"));
var _BaseAudioContext = _interopRequireDefault(require("./web-core/BaseAudioContext"));
var _BiquadFilterNode = _interopRequireDefault(require("./web-core/BiquadFilterNode"));
var _GainNode = _interopRequireDefault(require("./web-core/GainNode"));
var _OscillatorNode = _interopRequireDefault(require("./web-core/OscillatorNode"));
var _StereoPannerNode = _interopRequireDefault(require("./web-core/StereoPannerNode"));
var _custom = require("./web-core/custom");
Object.keys(_custom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _custom[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _custom[key];
    }
  });
});
var _types = require("./types");
var _errors = require("./errors");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
//# sourceMappingURL=api.web.js.map