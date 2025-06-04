"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _configPlugins = require("@expo/config-plugins");
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
  return (0, _configPlugins.withInfoPlist)(config, iosConfig => {
    iosConfig.modResults.UIBackgroundModes = [...Array.from(new Set([...(iosConfig.modResults.UIBackgroundModes ?? []), 'audio']))];
    return iosConfig;
  });
};
const withAndroidPermissions = (config, {
  androidPermissions
}) => {
  return _configPlugins.AndroidConfig.Permissions.withPermissions(config, androidPermissions);
};
const withForegroundService = (config, {
  androidFSTypes
}) => {
  return (0, _configPlugins.withAndroidManifest)(config, mod => {
    const manifest = mod.modResults;
    const mainApplication = _configPlugins.AndroidConfig.Manifest.getMainApplicationOrThrow(manifest);
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
var _default = exports.default = (0, _configPlugins.createRunOncePlugin)(withAudioAPI, pkg.name, pkg.version);
//# sourceMappingURL=withAudioAPI.js.map