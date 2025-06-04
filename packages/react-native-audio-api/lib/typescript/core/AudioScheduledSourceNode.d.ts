import AudioNode from './AudioNode';
import { OnEndedEventType } from '../events/types';
import { AudioEventEmitter } from '../events';
export default class AudioScheduledSourceNode extends AudioNode {
    protected hasBeenStarted: boolean;
    protected readonly audioEventEmitter: AudioEventEmitter;
    start(when?: number): void;
    stop(when?: number): void;
    set onended(callback: (event: OnEndedEventType) => void);
}
//# sourceMappingURL=AudioScheduledSourceNode.d.ts.map