import { defineComponent, h } from "vue";
import Meting from "../Meting/meting.js";

import type { VNode } from "vue";
import type { APlayerComponentsOptions, MetingOptions } from "../../options.js";
import type { Audio } from "aplayer/dist/APlayer.min.js";

import {
  aplayerGlobalOptions,
  aplayerGlobalAudios,
  metingOptions,
  // @ts-ignore
} from "@temp/SbAudioOptions.json";

const APlayerGlobalOptionsDefault =
  aplayerGlobalOptions as APlayerComponentsOptions;
const APlayerGlobalAudios = aplayerGlobalAudios as Array<Audio>;
const MetingOptionsDefault = metingOptions as MetingOptions;

export default defineComponent({
  setup() {
    if (
      (APlayerGlobalAudios && APlayerGlobalAudios.length > 0) ||
      MetingOptionsDefault.id ||
      (MetingOptionsDefault.list && MetingOptionsDefault.list.length > 0)
    ) {
      const src = {
        ...MetingOptionsDefault,
        ...APlayerGlobalOptionsDefault,
        audio: APlayerGlobalAudios,
      } as MetingOptions & APlayerComponentsOptions;
      return (): VNode => h(Meting, { src });
    } else {
      return (): VNode => h("div");
    }
  },
});
