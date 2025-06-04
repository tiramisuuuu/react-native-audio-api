import { IAudioBufferQueueSourceNode } from '../interfaces';
import AudioScheduledSourceNode from './AudioScheduledSourceNode';
import BaseAudioContext from './BaseAudioContext';
import AudioBuffer from './AudioBuffer';
import AudioParam from './AudioParam';
import { OnPositionChangedEventType } from '../events/types';
export default class AudioBufferQueueSourceNode extends AudioScheduledSourceNode {
    readonly playbackRate: AudioParam;
    readonly detune: AudioParam;
    constructor(context: BaseAudioContext, node: IAudioBufferQueueSourceNode);
    enqueueBuffer(buffer: AudioBuffer, bufferId?: number, isLastBuffer?: boolean): void;
    start(when?: number, offset?: number): void;
    set onPositionChanged(callback: (event: OnPositionChangedEventType) => void);
    set onPositionChangedInterval(value: number);
}
//# sourceMappingURL=AudioBufferQueueSourceNode.d.ts.map