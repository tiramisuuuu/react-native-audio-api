import AudioBuffer from '../core/AudioBuffer';
interface EventEmptyType {
}
export interface EventTypeWithValue {
    value: number;
}
export interface OnEndedEventType {
    value: number;
    state: 'stopped' | 'ended';
    bufferId: number | undefined;
}
export interface OnPositionChangedEventType {
    value: number;
    bufferId: number;
}
interface OnInterruptionEventType {
    type: 'ended' | 'began';
    shouldResume: boolean;
}
interface OnRouteChangeEventType {
    reason: 'Unknown' | 'Override' | 'CategoryChange' | 'WakeFromSleep' | 'NewDeviceAvailable' | 'OldDeviceUnavailable' | 'ConfigurationChange' | 'NoSuitableRouteForCategory';
}
interface RemoteCommandEvents {
    remotePlay: EventEmptyType;
    remotePause: EventEmptyType;
    remoteStop: EventEmptyType;
    remoteTogglePlayPause: EventEmptyType;
    remoteChangePlaybackRate: EventTypeWithValue;
    remoteNextTrack: EventEmptyType;
    remotePreviousTrack: EventEmptyType;
    remoteSkipForward: EventTypeWithValue;
    remoteSkipBackward: EventTypeWithValue;
    remoteSeekForward: EventEmptyType;
    remoteSeekBackward: EventEmptyType;
    remoteChangePlaybackPosition: EventTypeWithValue;
}
type SystemEvents = RemoteCommandEvents & {
    volumeChange: EventTypeWithValue;
    interruption: OnInterruptionEventType;
    routeChange: OnRouteChangeEventType;
};
export interface OnAudioReadyEventType {
    buffer: AudioBuffer;
    numFrames: number;
    when: number;
}
interface AudioAPIEvents {
    ended: OnEndedEventType;
    audioReady: OnAudioReadyEventType;
    positionChanged: OnPositionChangedEventType;
    audioError: EventEmptyType;
    systemStateChanged: EventEmptyType;
}
type AudioEvents = SystemEvents & AudioAPIEvents;
export type RemoteCommandEventName = keyof RemoteCommandEvents;
export type SystemEventName = keyof SystemEvents;
export type SystemEventCallback<Name extends SystemEventName> = (event: SystemEvents[Name]) => void;
export type AudioAPIEventName = keyof AudioAPIEvents;
export type AudioAPIEventCallback<Name extends AudioAPIEventName> = (event: AudioAPIEvents[Name]) => void;
export type AudioEventName = keyof AudioEvents;
export type AudioEventCallback<Name extends AudioEventName> = (event: AudioEvents[Name]) => void;
export {};
//# sourceMappingURL=types.d.ts.map