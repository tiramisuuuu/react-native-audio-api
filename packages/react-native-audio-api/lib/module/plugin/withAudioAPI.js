"use strict";

import { AndroidConfig, createRunOncePlugin, withInfoPlist, withAndroidManifest } from '@expo/config-plugins';
const pkg = require('react-native-audio-api/package.json');
const withDefaultOptions = options => {
  return {
    iosBackgroundMode: true,
    androidPermissions: ['android.permission.FOREGROUND_SERVICE', 'android.permission.WAKE_LOCK'],
    androidForegroundService: true,
    androidFSTypes: ['mediaPlayback'],
    ...options
  };
};
const withBackgroundAudio = config => {
  return withInfoPlist(config, iosConfig => {
    iosConfig.modResults.UIBackgroundModes = [...Array.from(new Set([...(iosConfig.modResults.UIBackgroundModes ?? []), 'audio']))];
    return iosConfig;
  });
};
const withAndroidPermissions = (config, {
  androidPermissions
}) => {
  return AndroidConfig.Permissions.withPermissions(config, androidPermissions);
};
const withForegroundService = (config, {
  androidFSTypes
}) => {
  return withAndroidManifest(config, mod => {
    const manifest = mod.modResults;
    const mainApplication = AndroidConfig.Manifest.getMainApplicationOrThrow(manifest);
    const SFTypes = androidFSTypes.join('|');
    const serviceElement = {
      $: {
        'android:name': 'com.swmansion.audioapi.system.MediaNotificationManager$NotificationService',
        'android:stopWithTask': 'true',
        'android:foregroundServiceType': SFTypes
      },
      intentFilter: []
    };
    if (!mainApplication.service) {
      mainApplication.service = [];
    }
    mainApplication.service.push(serviceElement);
    return mod;
  });
};
const withAudioAPI = (config, optionsIn) => {
  const options = withDefaultOptions(optionsIn ?? {});
  if (options.iosBackgroundMode) {
    config = withBackgroundAudio(config);
  }
  config = withAndroidPermissions(config, options);
  if (options.androidForegroundService) {
    config = withForegroundService(config, options);
  }
  return config;
};
export default createRunOncePlugin(withAudioAPI, pkg.name, pkg.version);
//# sourceMappingURL=withAudioAPI.js.map