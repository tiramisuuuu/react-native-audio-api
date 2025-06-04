import { AudioRecorderOptions } from './types';
import type { IAudioContext, IAudioRecorder, IOfflineAudioContext, IAudioEventEmitter } from './interfaces';
declare global {
    var createAudioContext: (sampleRate: number, initSuspended: boolean) => IAudioContext;
    var createOfflineAudioContext: (numberOfChannels: number, length: number, sampleRate: number) => IOfflineAudioContext;
    var createAudioRecorder: (options: AudioRecorderOptions) => IAudioRecorder;
    var AudioEventEmitter: IAudioEventEmitter;
}
export { default as AudioBuffer } from './core/AudioBuffer';
export { default as AudioBufferSourceNode } from './core/AudioBufferSourceNode';
export { default as AudioBufferQueueSourceNode } from './core/AudioBufferQueueSourceNode';
export { default as AudioContext } from './core/AudioContext';
export { default as OfflineAudioContext } from './core/OfflineAudioContext';
export { default as AudioDestinationNode } from './core/AudioDestinationNode';
export { default as AudioNode } from './core/AudioNode';
export { default as AnalyserNode } from './core/AnalyserNode';
export { default as AudioParam } from './core/AudioParam';
export { default as AudioScheduledSourceNode } from './core/AudioScheduledSourceNode';
export { default as BaseAudioContext } from './core/BaseAudioContext';
export { default as BiquadFilterNode } from './core/BiquadFilterNode';
export { default as GainNode } from './core/GainNode';
export { default as OscillatorNode } from './core/OscillatorNode';
export { default as StereoPannerNode } from './core/StereoPannerNode';
export { default as AudioRecorder } from './core/AudioRecorder';
export { default as AudioManager } from './system';
export { default as useSystemVolume } from './hooks/useSytemVolume';
export { OscillatorType, BiquadFilterType, ChannelCountMode, ChannelInterpretation, ContextState, WindowType, PeriodicWaveConstraints, } from './types';
export { IndexSizeError, InvalidAccessError, InvalidStateError, RangeError, NotSupportedError, } from './errors';
//# sourceMappingURL=api.d.ts.map