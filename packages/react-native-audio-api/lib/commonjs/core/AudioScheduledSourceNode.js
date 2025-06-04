"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AudioNode = _interopRequireDefault(require("./AudioNode"));
var _errors = require("../errors");
var _events = require("../events");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class AudioScheduledSourceNode extends _AudioNode.default {
  hasBeenStarted = false;
  audioEventEmitter = new _events.AudioEventEmitter(global.AudioEventEmitter);
  start(when = 0) {
    if (when < 0) {
      throw new _errors.RangeError(`when must be a finite non-negative number: ${when}`);
    }
    if (this.hasBeenStarted) {
      throw new _errors.InvalidStateError('Cannot call start more than once');
    }
    this.hasBeenStarted = true;
    this.node.start(when);
  }
  stop(when = 0) {
    if (when < 0) {
      throw new _errors.RangeError(`when must be a finite non-negative number: ${when}`);
    }
    if (!this.hasBeenStarted) {
      throw new _errors.InvalidStateError('Cannot call stop without calling start first');
    }
    this.node.stop(when);
  }

  // eslint-disable-next-line accessor-pairs
  set onended(callback) {
    const subscription = this.audioEventEmitter.addAudioEventListener('ended', callback);
    this.node.onended = subscription.subscriptionId;
  }
}
exports.default = AudioScheduledSourceNode;
//# sourceMappingURL=AudioScheduledSourceNode.js.map