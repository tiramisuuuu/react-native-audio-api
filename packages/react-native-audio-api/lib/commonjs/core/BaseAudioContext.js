"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AudioDestinationNode = _interopRequireDefault(require("./AudioDestinationNode"));
var _OscillatorNode = _interopRequireDefault(require("./OscillatorNode"));
var _GainNode = _interopRequireDefault(require("./GainNode"));
var _StereoPannerNode = _interopRequireDefault(require("./StereoPannerNode"));
var _BiquadFilterNode = _interopRequireDefault(require("./BiquadFilterNode"));
var _AudioBufferSourceNode = _interopRequireDefault(require("./AudioBufferSourceNode"));
var _AudioBuffer = _interopRequireDefault(require("./AudioBuffer"));
var _PeriodicWave = _interopRequireDefault(require("./PeriodicWave"));
var _AnalyserNode = _interopRequireDefault(require("./AnalyserNode"));
var _AudioBufferQueueSourceNode = _interopRequireDefault(require("./AudioBufferQueueSourceNode"));
var _errors = require("../errors");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class BaseAudioContext {
  constructor(context) {
    this.context = context;
    this.destination = new _AudioDestinationNode.default(this, context.destination);
    this.sampleRate = context.sampleRate;
  }
  get currentTime() {
    return this.context.currentTime;
  }
  get state() {
    return this.context.state;
  }
  createOscillator() {
    return new _OscillatorNode.default(this, this.context.createOscillator());
  }
  createGain() {
    return new _GainNode.default(this, this.context.createGain());
  }
  createStereoPanner() {
    return new _StereoPannerNode.default(this, this.context.createStereoPanner());
  }
  createBiquadFilter() {
    return new _BiquadFilterNode.default(this, this.context.createBiquadFilter());
  }
  createBufferSource(options) {
    const pitchCorrection = options?.pitchCorrection ?? false;
    return new _AudioBufferSourceNode.default(this, this.context.createBufferSource(pitchCorrection));
  }
  createBufferQueueSource() {
    return new _AudioBufferQueueSourceNode.default(this, this.context.createBufferQueueSource());
  }
  createBuffer(numOfChannels, length, sampleRate) {
    if (numOfChannels < 1 || numOfChannels >= 32) {
      throw new _errors.NotSupportedError(`The number of channels provided (${numOfChannels}) is outside the range [1, 32]`);
    }
    if (length <= 0) {
      throw new _errors.NotSupportedError(`The number of frames provided (${length}) is less than or equal to the minimum bound (0)`);
    }
    if (sampleRate < 8000 || sampleRate > 96000) {
      throw new _errors.NotSupportedError(`The sample rate provided (${sampleRate}) is outside the range [8000, 96000]`);
    }
    return new _AudioBuffer.default(this.context.createBuffer(numOfChannels, length, sampleRate));
  }
  createPeriodicWave(real, imag, constraints) {
    if (real.length !== imag.length) {
      throw new _errors.InvalidAccessError(`The lengths of the real (${real.length}) and imaginary (${imag.length}) arrays must match.`);
    }
    const disableNormalization = constraints?.disableNormalization ?? false;
    return new _PeriodicWave.default(this.context.createPeriodicWave(real, imag, disableNormalization));
  }
  createAnalyser() {
    return new _AnalyserNode.default(this, this.context.createAnalyser());
  }
  async decodeAudioDataSource(sourcePath) {
    // Remove the file:// prefix if it exists
    if (sourcePath.startsWith('file://')) {
      sourcePath = sourcePath.replace('file://', '');
    }
    return new _AudioBuffer.default(await this.context.decodeAudioDataSource(sourcePath));
  }
  async decodeAudioData(arrayBuffer) {
    return new _AudioBuffer.default(await this.context.decodeAudioData(new Uint8Array(arrayBuffer)));
  }
}
exports.default = BaseAudioContext;
//# sourceMappingURL=BaseAudioContext.js.map