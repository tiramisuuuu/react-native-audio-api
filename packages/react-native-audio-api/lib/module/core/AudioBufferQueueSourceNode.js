"use strict";

import AudioScheduledSourceNode from "./AudioScheduledSourceNode.js";
import AudioParam from "./AudioParam.js";
import { InvalidStateError, RangeError } from "../errors/index.js";
export default class AudioBufferQueueSourceNode extends AudioScheduledSourceNode {
  constructor(context, node) {
    super(context, node);
    this.detune = new AudioParam(node.detune, context);
    this.playbackRate = new AudioParam(node.playbackRate, context);
  }
  enqueueBuffer(buffer, bufferId = 0, isLastBuffer = false) {
    this.node.enqueueBuffer(buffer.buffer, bufferId, isLastBuffer);
  }
  start(when = 0, offset = 0) {
    if (when < 0) {
      throw new RangeError(`when must be a finite non-negative number: ${when}`);
    }
    if (offset < 0) {
      throw new RangeError(`offset must be a finite non-negative number: ${offset}`);
    }
    if (this.hasBeenStarted) {
      throw new InvalidStateError('Cannot call start more than once');
    }
    this.hasBeenStarted = true;
    this.node.start(when, offset);
  }

  // eslint-disable-next-line accessor-pairs
  set onPositionChanged(callback) {
    const subscription = this.audioEventEmitter.addAudioEventListener('positionChanged', callback);
    this.node.onPositionChanged = subscription.subscriptionId;
  }

  // eslint-disable-next-line accessor-pairs
  set onPositionChangedInterval(value) {
    this.node.onPositionChangedInterval = value;
  }
}
//# sourceMappingURL=AudioBufferQueueSourceNode.js.map