import type { TurboModule } from 'react-native';
import { PermissionStatus } from '../system/types';
interface Spec extends TurboModule {
    install(): boolean;
    getDevicePreferredSampleRate(): number;
    setAudioSessionActivity(enabled: boolean): Promise<boolean>;
    setAudioSessionOptions(category: string, mode: string, options: Array<string>, allowHaptics: boolean): void;
    setLockScreenInfo(info: {
        [key: string]: string | boolean | number | undefined;
    }): void;
    resetLockScreenInfo(): void;
    enableRemoteCommand(name: string, enabled: boolean): void;
    observeAudioInterruptions(enabled: boolean): void;
    observeVolumeChanges(enabled: boolean): void;
    requestRecordingPermissions(): Promise<PermissionStatus>;
    checkRecordingPermissions(): Promise<PermissionStatus>;
}
declare const NativeAudioAPIModule: Spec | null;
export { NativeAudioAPIModule };
//# sourceMappingURL=NativeAudioAPIModule.d.ts.map