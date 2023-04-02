import { defineComponent, h, onMounted, ref } from "vue";

import type { VNode } from "vue";
import type { APlayerComponentsOptions } from "../../options.js";
import type { APlayerOptions, Audio } from "aplayer";

import {
  aplayerGlobal as aplayerDefault,
  aplayerGlobalMusic,
  // @ts-ignore
} from "@temp/MetingOptions.json";

const APlayerDefault = aplayerDefault as APlayerComponentsOptions;
const APlayerGlobalMusic = aplayerGlobalMusic as Array<Audio>;

export default defineComponent({
  setup() {
    const el = ref(HTMLDivElement);

    if (APlayerGlobalMusic) {
      const src: APlayerOptions = {
        ...APlayerDefault,
        audio: APlayerGlobalMusic,
      };

      onMounted(async () => {
        Promise.all([
          import(/* webpackChunkName: "aplayer" */ "aplayer"),
          import(
            /* webpackChunkName: "aplayer" */ "aplayer/dist/APlayer.min.css"
          ),
        ]).then(([{ default: APlayer }]) => {
          //@ts-ignore
          src.container = el.value;
          new APlayer(src);
        });
      });
    }

    return (): VNode =>
      h("div", {
        ref: el,
      });
  },
});
