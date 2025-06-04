"use strict";

import AudioScheduledSourceNode from "./AudioScheduledSourceNode.js";
import AudioBuffer from "./AudioBuffer.js";
import AudioParam from "./AudioParam.js";
import { InvalidStateError, RangeError } from "../errors/index.js";
export default class AudioBufferSourceNode extends AudioScheduledSourceNode {
  constructor(context, node) {
    super(context, node);
    this.detune = new AudioParam(node.detune, context);
    this.playbackRate = new AudioParam(node.playbackRate, context);
  }
  get buffer() {
    const buffer = this.node.buffer;
    if (!buffer) {
      return null;
    }
    return new AudioBuffer(buffer);
  }
  set buffer(buffer) {
    if (!buffer) {
      this.node.buffer = null;
      return;
    }
    this.node.buffer = buffer.buffer;
  }
  get loop() {
    return this.node.loop;
  }
  set loop(value) {
    this.node.loop = value;
  }
  get loopStart() {
    return this.node.loopStart;
  }
  set loopStart(value) {
    this.node.loopStart = value;
  }
  get loopEnd() {
    return this.node.loopEnd;
  }
  set loopEnd(value) {
    this.node.loopEnd = value;
  }
  start(when = 0, offset = 0, duration) {
    if (when < 0) {
      throw new RangeError(`when must be a finite non-negative number: ${when}`);
    }
    if (offset < 0) {
      throw new RangeError(`offset must be a finite non-negative number: ${offset}`);
    }
    if (duration && duration < 0) {
      throw new RangeError(`duration must be a finite non-negative number: ${duration}`);
    }
    if (this.hasBeenStarted) {
      throw new InvalidStateError('Cannot call start more than once');
    }
    this.hasBeenStarted = true;
    this.node.start(when, offset, duration);
  }
}
//# sourceMappingURL=AudioBufferSourceNode.js.map