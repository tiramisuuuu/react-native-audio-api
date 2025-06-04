"use strict";

import AudioNode from "./AudioNode.js";
import { RangeError, InvalidStateError } from "../errors/index.js";
export default class AudioScheduledSourceNode extends AudioNode {
  hasBeenStarted = false;
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
    const eventCallback = _event => {
      callback();
    };
    this.node.onended = eventCallback;
  }
}
//# sourceMappingURL=AudioScheduledSourceNode.js.map