"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _errors = require("../errors");
var _AnalyserNode = _interopRequireDefault(require("./AnalyserNode"));
var _AudioDestinationNode = _interopRequireDefault(require("./AudioDestinationNode"));
var _AudioBuffer = _interopRequireDefault(require("./AudioBuffer"));
var _AudioBufferSourceNode = _interopRequireDefault(require("./AudioBufferSourceNode"));
var _BiquadFilterNode = _interopRequireDefault(require("./BiquadFilterNode"));
var _GainNode = _interopRequireDefault(require("./GainNode"));
var _OscillatorNode = _interopRequireDefault(require("./OscillatorNode"));
var _PeriodicWave = _interopRequireDefault(require("./PeriodicWave"));
var _StereoPannerNode = _interopRequireDefault(require("./StereoPannerNode"));
var _LoadCustomWasm = require("./custom/LoadCustomWasm");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class OfflineAudioContext {
  constructor(arg0, arg1, arg2) {
    if (typeof arg0 === 'object') {
      this.context = new window.OfflineAudioContext(arg0);
    } else if (typeof arg0 === 'number' && typeof arg1 === 'number' && typeof arg2 === 'number') {
      this.context = new window.OfflineAudioContext(arg0, arg1, arg2);
    } else {
      throw new _errors.NotSupportedError('Invalid constructor arguments');
    }
    this.sampleRate = this.context.sampleRate;
    this.destination = new _AudioDestinationNode.default(this, this.context.destination);
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
  async createBufferSource(options) {
    if (!options || !options.pitchCorrection) {
      return new _AudioBufferSourceNode.default(this, this.context.createBufferSource(), false);
    }
    await _LoadCustomWasm.globalWasmPromise;
    const wasmStretch = await window[_LoadCustomWasm.globalTag](this.context);
    return new _AudioBufferSourceNode.default(this, wasmStretch, true);
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
    return new _PeriodicWave.default(this.context.createPeriodicWave(real, imag, constraints));
  }
  createAnalyser() {
    return new _AnalyserNode.default(this, this.context.createAnalyser());
  }
  async decodeAudioDataSource(source) {
    const arrayBuffer = await fetch(source).then(response => response.arrayBuffer());
    return this.decodeAudioData(arrayBuffer);
  }
  async decodeAudioData(arrayBuffer) {
    return new _AudioBuffer.default(await this.context.decodeAudioData(arrayBuffer));
  }
  async startRendering() {
    return new _AudioBuffer.default(await this.context.startRendering());
  }
  async resume() {
    await this.context.resume();
  }
  async suspend(suspendTime) {
    await this.context.suspend(suspendTime);
  }
}
exports.default = OfflineAudioContext;
//# sourceMappingURL=OfflineAudioContext.js.map