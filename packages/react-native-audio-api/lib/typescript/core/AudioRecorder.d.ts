import { IAudioRecorder } from '../interfaces';
import { AudioRecorderOptions } from '../types';
import { OnAudioReadyEventType } from '../events/types';
export default class AudioRecorder {
    protected readonly recorder: IAudioRecorder;
    private readonly audioEventEmitter;
    constructor(options: AudioRecorderOptions);
    start(): void;
    stop(): void;
    onAudioReady(callback: (event: OnAudioReadyEventType) => void): void;
}
//# sourceMappingURL=AudioRecorder.d.ts.map