import {
  PropType,
  defineComponent,
  h,
  onBeforeUnmount,
  onMounted,
  ref,
} from "vue";

import type { VNode } from "vue";
import type { APlayerComponentsOptions } from "../../options.js";
import type { APlayerOptions } from "aplayer";

// @ts-ignore
import { aplayer as aplayerDefault } from "@temp/MetingOptions.json";

const APlayerDefault = aplayerDefault as APlayerComponentsOptions;

export default defineComponent({
  props: {
    fixed: {
      type: Boolean,
      default: APlayerDefault.fixed,
    },
    mini: {
      type: Boolean,
      default: APlayerDefault.mini,
    },
    autoplay: {
      type: Boolean,
      default: APlayerDefault.autoplay,
    },
    theme: {
      type: String,
      default: APlayerDefault.theme,
    },
    loop: {
      type: String as PropType<"all" | "one" | "none">,
      default: APlayerDefault.loop,
    },
    order: {
      type: String as PropType<"list" | "random">,
      default: APlayerDefault.order,
    },
    preload: {
      type: String as PropType<"none" | "metadata" | "auto">,
      default: APlayerDefault.preload,
    },
    volume: { type: Number, default: APlayerDefault.volume },
    mutex: { type: Boolean, default: APlayerDefault.mutex },
    listFolded: { type: Boolean, default: APlayerDefault.listFolded },
    listMaxHeight: { type: String, default: APlayerDefault.listMaxHeight },
    lrcType: {
      type: Number as PropType<1 | 2 | 3>,
      default: APlayerDefault.lrcType,
    },
    audio: {
      type: [Object, Array],
      required: true,
    },
    storageName: { type: String, default: APlayerDefault.storageName },
    customAudioType: {
      type: Object as PropType<Record<string, void>>,
      default: () => APlayerDefault.customAudioType,
    },
    customInit: {
      type: Object as PropType<
        (player: any, src: APlayerOptions) => Promise<any>
      >,
      default: () => APlayerDefault.customAudioType,
    },
  },
  setup(props) {
    const src: APlayerOptions = { ...props } as APlayerComponentsOptions;
    const el = ref(HTMLDivElement);
    let player: any;

    onMounted(async () => {
      Promise.all([
        import(/* webpackChunkName: "aplayer" */ "aplayer"),
        import(
          /* webpackChunkName: "aplayer" */ "aplayer/dist/APlayer.min.css"
        ),
      ]).then(([{ default: APlayer }]) => {
        //@ts-ignore
        src.container = el.value;
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
