import { PropType, defineComponent, h } from "vue";
import Meting from "./meting.js";

import type { VNode } from "vue";
import type { APlayerComponentsOptions, MetingOptions } from "../../options.js";
import type { APlayerOptions } from "aplayer";

// @ts-ignore
import { aplayerOptions, metingOptions } from "@temp/MetingOptions.json";

const APlayerOptionsDefault = aplayerOptions as APlayerComponentsOptions;
const MetingOptionsDefault = metingOptions as MetingOptions;

export default defineComponent({
  props: {
    id: {
      type: String,
      default: "",
    },
    server: {
      type: String,
      default: MetingOptionsDefault.server,
    },
    type: {
      type: String,
      default: MetingOptionsDefault.type,
    },
    auto: {
      type: String,
      default: "",
    },
    auth: {
      type: String,
      default: MetingOptionsDefault.auth,
    },
    api: {
      type: String,
      default: MetingOptionsDefault.api,
    },
    list: {
      type: Array,
    },
    fixed: {
      type: Boolean,
      default: APlayerOptionsDefault.fixed,
    },
    mini: {
      type: Boolean,
      default: APlayerOptionsDefault.mini,
    },
    autoplay: {
      type: Boolean,
      default: APlayerOptionsDefault.autoplay,
    },
    theme: {
      type: String,
      default: APlayerOptionsDefault.theme,
    },
    loop: {
      type: String as PropType<"all" | "one" | "none">,
      default: APlayerOptionsDefault.loop,
    },
    order: {
      type: String as PropType<"list" | "random">,
      default: APlayerOptionsDefault.order,
    },
    preload: {
      type: String as PropType<"none" | "metadata" | "auto">,
      default: APlayerOptionsDefault.preload,
    },
    volume: { type: Number, default: APlayerOptionsDefault.volume },
    mutex: { type: Boolean, default: APlayerOptionsDefault.mutex },
    listFolded: { type: Boolean, default: APlayerOptionsDefault.listFolded },
    listMaxHeight: {
      type: String,
      default: APlayerOptionsDefault.listMaxHeight,
    },
    lrcType: {
      type: Number as PropType<1 | 2 | 3>,
      default: APlayerOptionsDefault.lrcType,
    },
    audio: {
      type: [Object, Array],
    },
    storageName: { type: String, default: APlayerOptionsDefault.storageName },
    customAudioType: {
      type: Object as PropType<Record<string, void>>,
      default: () => APlayerOptionsDefault.customAudioType,
    },
    customInit: {
      type: Object as PropType<
        (player: any, src: APlayerOptions) => Promise<any>
      >,
      default: () => APlayerOptionsDefault.customAudioType,
    },
  },
  setup(props) {
    const src: MetingOptions & APlayerOptions = { ...props } as MetingOptions &
      APlayerComponentsOptions;

    return (): VNode => h(Meting, { src });
  },
});
