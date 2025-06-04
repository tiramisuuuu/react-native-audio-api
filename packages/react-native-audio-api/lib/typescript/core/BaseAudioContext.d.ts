import { IBaseAudioContext } from '../interfaces';
import { ContextState, PeriodicWaveConstraints, AudioBufferSourceNodeOptions } from '../types';
import AudioDestinationNode from './AudioDestinationNode';
import OscillatorNode from './OscillatorNode';
import GainNode from './GainNode';
import StereoPannerNode from './StereoPannerNode';
import BiquadFilterNode from './BiquadFilterNode';
import AudioBufferSourceNode from './AudioBufferSourceNode';
import AudioBuffer from './AudioBuffer';
import PeriodicWave from './PeriodicWave';
import AnalyserNode from './AnalyserNode';
import AudioBufferQueueSourceNode from './AudioBufferQueueSourceNode';
export default class BaseAudioContext {
    readonly destination: AudioDestinationNode;
    readonly sampleRate: number;
    protected readonly context: IBaseAudioContext;
    constructor(context: IBaseAudioContext);
    get currentTime(): number;
    get state(): ContextState;
    createOscillator(): OscillatorNode;
    createGain(): GainNode;
    createStereoPanner(): StereoPannerNode;
    createBiquadFilter(): BiquadFilterNode;
    createBufferSource(options?: AudioBufferSourceNodeOptions): AudioBufferSourceNode;
    createBufferQueueSource(): AudioBufferQueueSourceNode;
    createBuffer(numOfChannels: number, length: number, sampleRate: number): AudioBuffer;
    createPeriodicWave(real: Float32Array, imag: Float32Array, constraints?: PeriodicWaveConstraints): PeriodicWave;
    createAnalyser(): AnalyserNode;
    decodeAudioDataSource(sourcePath: string): Promise<AudioBuffer>;
    decodeAudioData(arrayBuffer: ArrayBuffer): Promise<AudioBuffer>;
}
//# sourceMappingURL=BaseAudioContext.d.ts.map