"use strict";

import { InvalidAccessError, NotSupportedError } from "../errors/index.js";
import AnalyserNode from "./AnalyserNode.js";
import AudioDestinationNode from "./AudioDestinationNode.js";
import AudioBuffer from "./AudioBuffer.js";
import AudioBufferSourceNode from "./AudioBufferSourceNode.js";
import BiquadFilterNode from "./BiquadFilterNode.js";
import GainNode from "./GainNode.js";
import OscillatorNode from "./OscillatorNode.js";
import PeriodicWave from "./PeriodicWave.js";
import StereoPannerNode from "./StereoPannerNode.js";
import { globalWasmPromise, globalTag } from "./custom/LoadCustomWasm.js";
export default class OfflineAudioContext {
  constructor(arg0, arg1, arg2) {
    if (typeof arg0 === 'object') {
      this.context = new window.OfflineAudioContext(arg0);
    } else if (typeof arg0 === 'number' && typeof arg1 === 'number' && typeof arg2 === 'number') {
      this.context = new window.OfflineAudioContext(arg0, arg1, arg2);
    } else {
      throw new NotSupportedError('Invalid constructor arguments');
    }
    this.sampleRate = this.context.sampleRate;
    this.destination = new AudioDestinationNode(this, this.context.destination);
  }
  get currentTime() {
    return this.context.currentTime;
  }
  get state() {
    return this.context.state;
  }
  createOscillator() {
    return new OscillatorNode(this, this.context.createOscillator());
  }
  createGain() {
    return new GainNode(this, this.context.createGain());
  }
  createStereoPanner() {
    return new StereoPannerNode(this, this.context.createStereoPanner());
  }
  createBiquadFilter() {
    return new BiquadFilterNode(this, this.context.createBiquadFilter());
  }
  async createBufferSource(options) {
    if (!options || !options.pitchCorrection) {
      return new AudioBufferSourceNode(this, this.context.createBufferSource(), false);
    }
    await globalWasmPromise;
    const wasmStretch = await window[globalTag](this.context);
    return new AudioBufferSourceNode(this, wasmStretch, true);
  }
  createBuffer(numOfChannels, length, sampleRate) {
    if (numOfChannels < 1 || numOfChannels >= 32) {
      throw new NotSupportedError(`The number of channels provided (${numOfChannels}) is outside the range [1, 32]`);
    }
    if (length <= 0) {
      throw new NotSupportedError(`The number of frames provided (${length}) is less than or equal to the minimum bound (0)`);
    }
    if (sampleRate < 8000 || sampleRate > 96000) {
      throw new NotSupportedError(`The sample rate provided (${sampleRate}) is outside the range [8000, 96000]`);
    }
    return new AudioBuffer(this.context.createBuffer(numOfChannels, length, sampleRate));
  }
  createPeriodicWave(real, imag, constraints) {
    if (real.length !== imag.length) {
      throw new InvalidAccessError(`The lengths of the real (${real.length}) and imaginary (${imag.length}) arrays must match.`);
    }
    return new PeriodicWave(this.context.createPeriodicWave(real, imag, constraints));
  }
  createAnalyser() {
    return new AnalyserNode(this, this.context.createAnalyser());
  }
  async decodeAudioDataSource(source) {
    const arrayBuffer = await fetch(source).then(response => response.arrayBuffer());
    return this.decodeAudioData(arrayBuffer);
  }
  async decodeAudioData(arrayBuffer) {
    return new AudioBuffer(await this.context.decodeAudioData(arrayBuffer));
  }
  async startRendering() {
    return new AudioBuffer(await this.context.startRendering());
  }
  async resume() {
    await this.context.resume();
  }
  async suspend(suspendTime) {
    await this.context.suspend(suspendTime);
  }
}
//# sourceMappingURL=OfflineAudioContext.js.map