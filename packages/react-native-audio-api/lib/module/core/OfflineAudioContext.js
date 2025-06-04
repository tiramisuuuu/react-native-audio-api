"use strict";

import BaseAudioContext from "./BaseAudioContext.js";
import { InvalidStateError, NotSupportedError } from "../errors/index.js";
import AudioBuffer from "./AudioBuffer.js";
export default class OfflineAudioContext extends BaseAudioContext {
  constructor(arg0, arg1, arg2) {
    if (typeof arg0 === 'object') {
      const {
        numberOfChannels,
        length,
        sampleRate
      } = arg0;
      super(global.createOfflineAudioContext(numberOfChannels, length, sampleRate));
      this.duration = length / sampleRate;
    } else if (typeof arg0 === 'number' && typeof arg1 === 'number' && typeof arg2 === 'number') {
      super(global.createOfflineAudioContext(arg0, arg1, arg2));
      this.duration = arg1 / arg2;
    } else {
      throw new NotSupportedError('Invalid constructor arguments');
    }
    this.isSuspended = false;
    this.isRendering = false;
  }
  async resume() {
    if (!this.isRendering) {
      throw new InvalidStateError('Cannot resume an OfflineAudioContext while rendering');
    }
    if (!this.isSuspended) {
      throw new InvalidStateError('Cannot resume an OfflineAudioContext that is not suspended');
    }
    this.isSuspended = false;
    await this.context.resume();
  }
  async suspend(suspendTime) {
    if (suspendTime < 0) {
      throw new InvalidStateError('suspendTime must be a non-negative number');
    }
    if (suspendTime < this.context.currentTime) {
      throw new InvalidStateError(`suspendTime must be greater than the current time: ${suspendTime}`);
    }
    if (suspendTime > this.duration) {
      throw new InvalidStateError(`suspendTime must be less than the duration of the context: ${suspendTime}`);
    }
    this.isSuspended = true;
    await this.context.suspend(suspendTime);
  }
  async startRendering() {
    if (this.isRendering) {
      throw new InvalidStateError('OfflineAudioContext is already rendering');
    }
    this.isRendering = true;
    const audioBuffer = await this.context.startRendering();
    return new AudioBuffer(audioBuffer);
  }
}
//# sourceMappingURL=OfflineAudioContext.js.map