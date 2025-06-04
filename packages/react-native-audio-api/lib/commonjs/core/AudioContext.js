"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _BaseAudioContext = _interopRequireDefault(require("./BaseAudioContext"));
var _system = _interopRequireDefault(require("../system"));
var _errors = require("../errors");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class AudioContext extends _BaseAudioContext.default {
  constructor(options) {
    if (options && options.sampleRate && (options.sampleRate < 8000 || options.sampleRate > 96000)) {
      throw new _errors.NotSupportedError(`The provided sampleRate is not supported: ${options.sampleRate}`);
    }
    super(global.createAudioContext(options?.sampleRate || _system.default.getDevicePreferredSampleRate(), options?.initSuspended || false));
  }
  async close() {
    await this.context.close();
  }
  async resume() {
    await this.context.resume();
  }
  async suspend() {
    await this.context.suspend();
  }
}
exports.default = AudioContext;
//# sourceMappingURL=AudioContext.js.map