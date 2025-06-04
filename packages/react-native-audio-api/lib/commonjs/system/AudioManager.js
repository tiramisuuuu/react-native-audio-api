"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _specs = require("../specs");
var _events = require("../events");
if (global.AudioEventEmitter == null) {
  if (!_specs.NativeAudioAPIModule) {
    throw new Error(`Failed to install react-native-audio-api: The native module could not be found.`);
  }
  _specs.NativeAudioAPIModule.install();
}
class AudioManager {
  constructor() {
    this.audioEventEmitter = new _events.AudioEventEmitter(global.AudioEventEmitter);
  }
  getDevicePreferredSampleRate() {
    return _specs.NativeAudioAPIModule.getDevicePreferredSampleRate();
  }
  setAudioSessionActivity(enabled) {
    return _specs.NativeAudioAPIModule.setAudioSessionActivity(enabled);
  }
  setAudioSessionOptions(options) {
    _specs.NativeAudioAPIModule.setAudioSessionOptions(options.iosCategory ?? '', options.iosMode ?? '', options.iosOptions ?? [], options.iosAllowHaptics ?? false);
  }
  setLockScreenInfo(info) {
    _specs.NativeAudioAPIModule.setLockScreenInfo(info);
  }
  resetLockScreenInfo() {
    _specs.NativeAudioAPIModule.resetLockScreenInfo();
  }
  observeAudioInterruptions(enabled) {
    _specs.NativeAudioAPIModule.observeAudioInterruptions(enabled);
  }
  observeVolumeChanges(enabled) {
    _specs.NativeAudioAPIModule.observeVolumeChanges(enabled);
  }
  enableRemoteCommand(name, enabled) {
    _specs.NativeAudioAPIModule.enableRemoteCommand(name, enabled);
  }
  addSystemEventListener(name, callback) {
    return this.audioEventEmitter.addAudioEventListener(name, callback);
  }
  async requestRecordingPermissions() {
    return _specs.NativeAudioAPIModule.requestRecordingPermissions();
  }
  async checkRecordingPermissions() {
    return _specs.NativeAudioAPIModule.checkRecordingPermissions();
  }
}
var _default = exports.default = new AudioManager();
//# sourceMappingURL=AudioManager.js.map