"use strict";

import { NativeAudioAPIModule } from "../specs/index.js";
import { AudioEventEmitter } from "../events/index.js";
if (global.AudioEventEmitter == null) {
  if (!NativeAudioAPIModule) {
    throw new Error(`Failed to install react-native-audio-api: The native module could not be found.`);
  }
  NativeAudioAPIModule.install();
}
class AudioManager {
  constructor() {
    this.audioEventEmitter = new AudioEventEmitter(global.AudioEventEmitter);
  }
  getDevicePreferredSampleRate() {
    return NativeAudioAPIModule.getDevicePreferredSampleRate();
  }
  setAudioSessionActivity(enabled) {
    return NativeAudioAPIModule.setAudioSessionActivity(enabled);
  }
  setAudioSessionOptions(options) {
    NativeAudioAPIModule.setAudioSessionOptions(options.iosCategory ?? '', options.iosMode ?? '', options.iosOptions ?? [], options.iosAllowHaptics ?? false);
  }
  setLockScreenInfo(info) {
    NativeAudioAPIModule.setLockScreenInfo(info);
  }
  resetLockScreenInfo() {
    NativeAudioAPIModule.resetLockScreenInfo();
  }
  observeAudioInterruptions(enabled) {
    NativeAudioAPIModule.observeAudioInterruptions(enabled);
  }
  observeVolumeChanges(enabled) {
    NativeAudioAPIModule.observeVolumeChanges(enabled);
  }
  enableRemoteCommand(name, enabled) {
    NativeAudioAPIModule.enableRemoteCommand(name, enabled);
  }
  addSystemEventListener(name, callback) {
    return this.audioEventEmitter.addAudioEventListener(name, callback);
  }
  async requestRecordingPermissions() {
    return NativeAudioAPIModule.requestRecordingPermissions();
  }
  async checkRecordingPermissions() {
    return NativeAudioAPIModule.checkRecordingPermissions();
  }
}
export default new AudioManager();
//# sourceMappingURL=AudioManager.js.map