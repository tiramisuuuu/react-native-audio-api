import { ContextState, PeriodicWaveConstraints, AudioContextOptions, AudioBufferSourceNodeOptions } from '../types';
import BaseAudioContext from './BaseAudioContext';
import AnalyserNode from './AnalyserNode';
import AudioDestinationNode from './AudioDestinationNode';
import AudioBuffer from './AudioBuffer';
import AudioBufferSourceNode from './AudioBufferSourceNode';
import BiquadFilterNode from './BiquadFilterNode';
import GainNode from './GainNode';
import OscillatorNode from './OscillatorNode';
import PeriodicWave from './PeriodicWave';
import StereoPannerNode from './StereoPannerNode';
export default class AudioContext implements BaseAudioContext {
    readonly context: globalThis.AudioContext;
    readonly destination: AudioDestinationNode;
    readonly sampleRate: number;
    constructor(options?: AudioContextOptions, _initSuspended?: boolean);
    get currentTime(): number;
    get state(): ContextState;
    createOscillator(): OscillatorNode;
    createGain(): GainNode;
    createStereoPanner(): StereoPannerNode;
    createBiquadFilter(): BiquadFilterNode;
    createBufferSource(options?: AudioBufferSourceNodeOptions): Promise<AudioBufferSourceNode>;
    createBuffer(numOfChannels: number, length: number, sampleRate: number): AudioBuffer;
    createPeriodicWave(real: Float32Array, imag: Float32Array, constraints?: PeriodicWaveConstraints): PeriodicWave;
    createAnalyser(): AnalyserNode;
    decodeAudioDataSource(source: string): Promise<AudioBuffer>;
    decodeAudioData(arrayBuffer: ArrayBuffer): Promise<AudioBuffer>;
    close(): Promise<void>;
    resume(): Promise<void>;
    suspend(): Promise<void>;
}
//# sourceMappingURL=AudioContext.d.ts.map