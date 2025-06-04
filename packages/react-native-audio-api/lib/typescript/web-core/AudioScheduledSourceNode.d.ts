import AudioNode from './AudioNode';
export default class AudioScheduledSourceNode extends AudioNode {
    protected hasBeenStarted: boolean;
    start(when?: number): void;
    stop(when?: number): void;
    set onended(callback: (arg?: number) => void);
}
//# sourceMappingURL=AudioScheduledSourceNode.d.ts.map