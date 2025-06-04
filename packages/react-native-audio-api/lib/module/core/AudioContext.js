"use strict";

import BaseAudioContext from "./BaseAudioContext.js";
import AudioManager from "../system/index.js";
import { NotSupportedError } from "../errors/index.js";
export default class AudioContext extends BaseAudioContext {
  constructor(options) {
    if (options && options.sampleRate && (options.sampleRate < 8000 || options.sampleRate > 96000)) {
      throw new NotSupportedError(`The provided sampleRate is not supported: ${options.sampleRate}`);
    }
    super(global.createAudioContext(options?.sampleRate || AudioManager.getDevicePreferredSampleRate(), options?.initSuspended || false));
  }
  async close() {
    await this.context.close();
  }
  async resume() {
    await this.context.resume();
  }
  async suspend() {
    await this.context.suspend();
  }
}
//# sourceMappingURL=AudioContext.js.map