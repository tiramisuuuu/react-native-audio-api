"use strict";

import AudioNode from "./AudioNode.js";
import { InvalidStateError, RangeError } from "../errors/index.js";
import { AudioEventEmitter } from "../events/index.js";
export default class AudioScheduledSourceNode extends AudioNode {
  hasBeenStarted = false;
  audioEventEmitter = new AudioEventEmitter(global.AudioEventEmitter);
  start(when = 0) {
    if (when < 0) {
      throw new RangeError(`when must be a finite non-negative number: ${when}`);
    }
    if (this.hasBeenStarted) {
      throw new InvalidStateError('Cannot call start more than once');
    }
    this.hasBeenStarted = true;
    this.node.start(when);
  }
  stop(when = 0) {
    if (when < 0) {
      throw new RangeError(`when must be a finite non-negative number: ${when}`);
    }
    if (!this.hasBeenStarted) {
      throw new InvalidStateError('Cannot call stop without calling start first');
    }
    this.node.stop(when);
  }

  // eslint-disable-next-line accessor-pairs
  set onended(callback) {
    const subscription = this.audioEventEmitter.addAudioEventListener('ended', callback);
    this.node.onended = subscription.subscriptionId;
  }
}
//# sourceMappingURL=AudioScheduledSourceNode.js.map