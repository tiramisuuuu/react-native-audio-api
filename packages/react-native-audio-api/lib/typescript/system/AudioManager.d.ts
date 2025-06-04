import { SessionOptions, LockScreenInfo, PermissionStatus } from './types';
import { SystemEventName, SystemEventCallback, RemoteCommandEventName } from '../events/types';
import { AudioEventSubscription } from '../events';
declare class AudioManager {
    private readonly audioEventEmitter;
    constructor();
    getDevicePreferredSampleRate(): number;
    setAudioSessionActivity(enabled: boolean): Promise<boolean>;
    setAudioSessionOptions(options: SessionOptions): void;
    setLockScreenInfo(info: LockScreenInfo): void;
    resetLockScreenInfo(): void;
    observeAudioInterruptions(enabled: boolean): void;
    observeVolumeChanges(enabled: boolean): void;
    enableRemoteCommand(name: RemoteCommandEventName, enabled: boolean): void;
    addSystemEventListener<Name extends SystemEventName>(name: Name, callback: SystemEventCallback<Name>): AudioEventSubscription;
    requestRecordingPermissions(): Promise<PermissionStatus>;
    checkRecordingPermissions(): Promise<PermissionStatus>;
}
declare const _default: AudioManager;
export default _default;
//# sourceMappingURL=AudioManager.d.ts.map