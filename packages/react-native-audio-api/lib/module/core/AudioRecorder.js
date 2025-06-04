"use strict";

import AudioBuffer from "./AudioBuffer.js";
import { AudioEventEmitter } from "../events/index.js";
export default class AudioRecorder {
  audioEventEmitter = new AudioEventEmitter(global.AudioEventEmitter);
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
        buffer: new AudioBuffer(event.buffer),
        numFrames: event.numFrames,
        when: event.when
      });
    };
    const subscription = this.audioEventEmitter.addAudioEventListener('audioReady', onAudioReadyCallback);
    this.recorder.onAudioReady = subscription.subscriptionId;
  }
}
//# sourceMappingURL=AudioRecorder.js.map