"use strict";

import { useEffect, useState } from 'react';
import AudioManager from "../system/AudioManager.js";
export default function useSystemVolume() {
  const [volume, setVolume] = useState(0);
  useEffect(() => {
    AudioManager.observeVolumeChanges(true);
    const listener = AudioManager.addSystemEventListener('volumeChange', e => {
      setVolume(parseFloat(e.value.toFixed(2)));
    });
    return () => {
      listener?.remove();
      AudioManager.observeVolumeChanges(false);
    };
  }, []);
  return volume;
}
//# sourceMappingURL=useSytemVolume.js.map