"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AudioBuffer = _interopRequireDefault(require("./AudioBuffer"));
var _events = require("../events");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class AudioRecorder {
  audioEventEmitter = new _events.AudioEventEmitter(global.AudioEventEmitter);
  constructor(options) {
    this.recorder = global.createAudioRecorder(options);
  }
  start() {
    this.recorder.start();
  }
  stop() {
    this.recorder.stop();
  }
  onAudioReady(callback) {
    const onAudioReadyCallback = event => {
      callback({
        buffer: new _AudioBuffer.default(event.buffer),
        numFrames: event.numFrames,
        when: event.when
      });
    };
    const subscription = this.audioEventEmitter.addAudioEventListener('audioReady', onAudioReadyCallback);
    this.recorder.onAudioReady = subscription.subscriptionId;
  }
}
exports.default = AudioRecorder;
//# sourceMappingURL=AudioRecorder.js.map