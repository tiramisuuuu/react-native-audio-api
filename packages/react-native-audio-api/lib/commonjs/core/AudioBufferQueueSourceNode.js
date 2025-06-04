"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AudioScheduledSourceNode = _interopRequireDefault(require("./AudioScheduledSourceNode"));
var _AudioParam = _interopRequireDefault(require("./AudioParam"));
var _errors = require("../errors");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class AudioBufferQueueSourceNode extends _AudioScheduledSourceNode.default {
  constructor(context, node) {
    super(context, node);
    this.detune = new _AudioParam.default(node.detune, context);
    this.playbackRate = new _AudioParam.default(node.playbackRate, context);
  }
  enqueueBuffer(buffer, bufferId = 0, isLastBuffer = false) {
    this.node.enqueueBuffer(buffer.buffer, bufferId, isLastBuffer);
  }
  start(when = 0, offset = 0) {
    if (when < 0) {
      throw new _errors.RangeError(`when must be a finite non-negative number: ${when}`);
    }
    if (offset < 0) {
      throw new _errors.RangeError(`offset must be a finite non-negative number: ${offset}`);
    }
    if (this.hasBeenStarted) {
      throw new _errors.InvalidStateError('Cannot call start more than once');
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
exports.default = AudioBufferQueueSourceNode;
//# sourceMappingURL=AudioBufferQueueSourceNode.js.map