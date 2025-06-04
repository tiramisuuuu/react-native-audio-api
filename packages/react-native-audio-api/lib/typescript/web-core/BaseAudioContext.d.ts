import { ContextState, PeriodicWaveConstraints } from '../types';
import AnalyserNode from './AnalyserNode';
import AudioDestinationNode from './AudioDestinationNode';
import AudioBuffer from './AudioBuffer';
import AudioBufferSourceNode from './AudioBufferSourceNode';
import BiquadFilterNode from './BiquadFilterNode';
import GainNode from './GainNode';
import OscillatorNode from './OscillatorNode';
import PeriodicWave from './PeriodicWave';
import StereoPannerNode from './StereoPannerNode';
export default interface BaseAudioContext {
    readonly context: globalThis.BaseAudioContext;
    readonly destination: AudioDestinationNode;
    readonly sampleRate: number;
    get currentTime(): number;
    get state(): ContextState;
    createOscillator(): OscillatorNode;
    createGain(): GainNode;
    createStereoPanner(): StereoPannerNode;
    createBiquadFilter(): BiquadFilterNode;
    createBufferSource(): Promise<AudioBufferSourceNode>;
    createBuffer(numOfChannels: number, length: number, sampleRate: number): AudioBuffer;
    createPeriodicWave(real: Float32Array, imag: Float32Array, constraints?: PeriodicWaveConstraints): PeriodicWave;
    createAnalyser(): AnalyserNode;
    decodeAudioDataSource(source: string): Promise<AudioBuffer>;
    decodeAudioData(arrayBuffer: ArrayBuffer): Promise<AudioBuffer>;
}
//# sourceMappingURL=BaseAudioContext.d.ts.map