import {
  PropType,
  defineComponent,
  h,
  onBeforeUnmount,
  onMounted,
  ref,
} from "vue";
import { GetAudioList } from "../../utils/meting.js";

import type { VNode } from "vue";
import type { APlayerComponentsOptions, MetingOptions } from "../../options.js";
import type { APlayerOptions } from "aplayer";

// @ts-ignore
import { aplayerOptions, metingOptions } from "@temp/MetingOptions.json";

export default defineComponent({
  props: {
    src: {
      type: Object as PropType<MetingOptions & APlayerComponentsOptions>,
    },
  },
  setup(props) {
    const src: MetingOptions & APlayerOptions = {
      ...props.src,
    } as MetingOptions & APlayerComponentsOptions;
    const el = ref(HTMLDivElement);
    let player: any;

    onMounted(async () => {
      Promise.all([
        GetAudioList(src),
        import(/* webpackChunkName: "aplayer" */ "aplayer"),
        import(
          /* webpackChunkName: "aplayer" */ "aplayer/dist/APlayer.min.css"
        ),
      ]).then(([audios, { default: APlayer }]) => {
        //@ts-ignore
        src.container = el.value;
        src.audio = audios;
        player = new APlayer(src);
      });
    });

    onBeforeUnmount(() => {
      player?.destroy();
    });

    return (): VNode =>
      h("div", {
        ref: el,
      });
  },
});