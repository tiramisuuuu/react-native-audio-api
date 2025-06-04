"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
Object.defineProperty(exports, "AudioBufferQueueSourceNode", {
  enumerable: true,
  get: function () {
    return _AudioBufferQueueSourceNode.default;
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
Object.defineProperty(exports, "AudioManager", {
  enumerable: true,
  get: function () {
    return _system.default;
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
Object.defineProperty(exports, "AudioRecorder", {
  enumerable: true,
  get: function () {
    return _AudioRecorder.default;
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
Object.defineProperty(exports, "useSystemVolume", {
  enumerable: true,
  get: function () {
    return _useSytemVolume.default;
  }
});
var _specs = require("./specs");
var _AudioBuffer = _interopRequireDefault(require("./core/AudioBuffer"));
var _AudioBufferSourceNode = _interopRequireDefault(require("./core/AudioBufferSourceNode"));
var _AudioBufferQueueSourceNode = _interopRequireDefault(require("./core/AudioBufferQueueSourceNode"));
var _AudioContext = _interopRequireDefault(require("./core/AudioContext"));
var _OfflineAudioContext = _interopRequireDefault(require("./core/OfflineAudioContext"));
var _AudioDestinationNode = _interopRequireDefault(require("./core/AudioDestinationNode"));
var _AudioNode = _interopRequireDefault(require("./core/AudioNode"));
var _AnalyserNode = _interopRequireDefault(require("./core/AnalyserNode"));
var _AudioParam = _interopRequireDefault(require("./core/AudioParam"));
var _AudioScheduledSourceNode = _interopRequireDefault(require("./core/AudioScheduledSourceNode"));
var _BaseAudioContext = _interopRequireDefault(require("./core/BaseAudioContext"));
var _BiquadFilterNode = _interopRequireDefault(require("./core/BiquadFilterNode"));
var _GainNode = _interopRequireDefault(require("./core/GainNode"));
var _OscillatorNode = _interopRequireDefault(require("./core/OscillatorNode"));
var _StereoPannerNode = _interopRequireDefault(require("./core/StereoPannerNode"));
var _AudioRecorder = _interopRequireDefault(require("./core/AudioRecorder"));
var _system = _interopRequireDefault(require("./system"));
var _useSytemVolume = _interopRequireDefault(require("./hooks/useSytemVolume"));
var _types = require("./types");
var _errors = require("./errors");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable no-var */

/* eslint-disable no-var */

if (global.createAudioContext == null || global.createOfflineAudioContext == null || global.createAudioRecorder == null || global.AudioEventEmitter == null) {
  if (!_specs.NativeAudioAPIModule) {
    throw new Error(`Failed to install react-native-audio-api: The native module could not be found.`);
  }
  _specs.NativeAudioAPIModule.install();
}
//# sourceMappingURL=api.js.map