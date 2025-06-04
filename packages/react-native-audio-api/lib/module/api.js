"use strict";

import { NativeAudioAPIModule } from "./specs/index.js";

/* eslint-disable no-var */

/* eslint-disable no-var */

if (global.createAudioContext == null || global.createOfflineAudioContext == null || global.createAudioRecorder == null || global.AudioEventEmitter == null) {
  if (!NativeAudioAPIModule) {
    throw new Error(`Failed to install react-native-audio-api: The native module could not be found.`);
  }
  NativeAudioAPIModule.install();
}
export { default as AudioBuffer } from "./core/AudioBuffer.js";
export { default as AudioBufferSourceNode } from "./core/AudioBufferSourceNode.js";
export { default as AudioBufferQueueSourceNode } from "./core/AudioBufferQueueSourceNode.js";
export { default as AudioContext } from "./core/AudioContext.js";
export { default as OfflineAudioContext } from "./core/OfflineAudioContext.js";
export { default as AudioDestinationNode } from "./core/AudioDestinationNode.js";
export { default as AudioNode } from "./core/AudioNode.js";
export { default as AnalyserNode } from "./core/AnalyserNode.js";
export { default as AudioParam } from "./core/AudioParam.js";
export { default as AudioScheduledSourceNode } from "./core/AudioScheduledSourceNode.js";
export { default as BaseAudioContext } from "./core/BaseAudioContext.js";
export { default as BiquadFilterNode } from "./core/BiquadFilterNode.js";
export { default as GainNode } from "./core/GainNode.js";
export { default as OscillatorNode } from "./core/OscillatorNode.js";
export { default as StereoPannerNode } from "./core/StereoPannerNode.js";
export { default as AudioRecorder } from "./core/AudioRecorder.js";
export { default as AudioManager } from "./system/index.js";
export { default as useSystemVolume } from "./hooks/useSytemVolume.js";
export { OscillatorType, BiquadFilterType, ChannelCountMode, ChannelInterpretation, ContextState, WindowType, PeriodicWaveConstraints } from "./types.js";
export { IndexSizeError, InvalidAccessError, InvalidStateError, RangeError, NotSupportedError } from "./errors/index.js";
//# sourceMappingURL=api.js.map