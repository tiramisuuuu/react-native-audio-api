"use strict";

import AudioDestinationNode from "./AudioDestinationNode.js";
import OscillatorNode from "./OscillatorNode.js";
import GainNode from "./GainNode.js";
import StereoPannerNode from "./StereoPannerNode.js";
import BiquadFilterNode from "./BiquadFilterNode.js";
import AudioBufferSourceNode from "./AudioBufferSourceNode.js";
import AudioBuffer from "./AudioBuffer.js";
import PeriodicWave from "./PeriodicWave.js";
import AnalyserNode from "./AnalyserNode.js";
import AudioBufferQueueSourceNode from "./AudioBufferQueueSourceNode.js";
import { InvalidAccessError, NotSupportedError } from "../errors/index.js";
export default class BaseAudioContext {
  constructor(context) {
    this.context = context;
    this.destination = new AudioDestinationNode(this, context.destination);
    this.sampleRate = context.sampleRate;
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
  createBufferSource(options) {
    const pitchCorrection = options?.pitchCorrection ?? false;
    return new AudioBufferSourceNode(this, this.context.createBufferSource(pitchCorrection));
  }
  createBufferQueueSource() {
    return new AudioBufferQueueSourceNode(this, this.context.createBufferQueueSource());
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
    const disableNormalization = constraints?.disableNormalization ?? false;
    return new PeriodicWave(this.context.createPeriodicWave(real, imag, disableNormalization));
  }
  createAnalyser() {
    return new AnalyserNode(this, this.context.createAnalyser());
  }
  async decodeAudioDataSource(sourcePath) {
    // Remove the file:// prefix if it exists
    if (sourcePath.startsWith('file://')) {
      sourcePath = sourcePath.replace('file://', '');
    }
    return new AudioBuffer(await this.context.decodeAudioDataSource(sourcePath));
  }
  async decodeAudioData(arrayBuffer) {
    return new AudioBuffer(await this.context.decodeAudioData(new Uint8Array(arrayBuffer)));
  }
}
//# sourceMappingURL=BaseAudioContext.js.map