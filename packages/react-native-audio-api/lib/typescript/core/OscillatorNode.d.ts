import { IOscillatorNode } from '../interfaces';
import { OscillatorType } from '../types';
import AudioScheduledSourceNode from './AudioScheduledSourceNode';
import AudioParam from './AudioParam';
import BaseAudioContext from './BaseAudioContext';
import PeriodicWave from './PeriodicWave';
export default class OscillatorNode extends AudioScheduledSourceNode {
    readonly frequency: AudioParam;
    readonly detune: AudioParam;
    constructor(context: BaseAudioContext, node: IOscillatorNode);
    get type(): OscillatorType;
    set type(value: OscillatorType);
    setPeriodicWave(wave: PeriodicWave): void;
}
//# sourceMappingURL=OscillatorNode.d.ts.map