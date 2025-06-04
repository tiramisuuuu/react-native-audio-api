"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useSystemVolume;
var _react = require("react");
var _AudioManager = _interopRequireDefault(require("../system/AudioManager"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function useSystemVolume() {
  const [volume, setVolume] = (0, _react.useState)(0);
  (0, _react.useEffect)(() => {
    _AudioManager.default.observeVolumeChanges(true);
    const listener = _AudioManager.default.addSystemEventListener('volumeChange', e => {
      setVolume(parseFloat(e.value.toFixed(2)));
    });
    return () => {
      listener?.remove();
      _AudioManager.default.observeVolumeChanges(false);
    };
  }, []);
  return volume;
}
//# sourceMappingURL=useSytemVolume.js.map