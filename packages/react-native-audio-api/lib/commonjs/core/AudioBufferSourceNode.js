"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AudioScheduledSourceNode = _interopRequireDefault(require("./AudioScheduledSourceNode"));
var _AudioBuffer = _interopRequireDefault(require("./AudioBuffer"));
var _AudioParam = _interopRequireDefault(require("./AudioParam"));
var _errors = require("../errors");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class AudioBufferSourceNode extends _AudioScheduledSourceNode.default {
  constructor(context, node) {
    super(context, node);
    this.detune = new _AudioParam.default(node.detune, context);
    this.playbackRate = new _AudioParam.default(node.playbackRate, context);
  }
  get buffer() {
    const buffer = this.node.buffer;
    if (!buffer) {
      return null;
    }
    return new _AudioBuffer.default(buffer);
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
      throw new _errors.RangeError(`when must be a finite non-negative number: ${when}`);
    }
    if (offset < 0) {
      throw new _errors.RangeError(`offset must be a finite non-negative number: ${offset}`);
    }
    if (duration && duration < 0) {
      throw new _errors.RangeError(`duration must be a finite non-negative number: ${duration}`);
    }
    if (this.hasBeenStarted) {
      throw new _errors.InvalidStateError('Cannot call start more than once');
    }
    this.hasBeenStarted = true;
    this.node.start(when, offset, duration);
  }
}
exports.default = AudioBufferSourceNode;
//# sourceMappingURL=AudioBufferSourceNode.js.map