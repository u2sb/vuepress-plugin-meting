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
import type { APlayerOptions } from "aplayer/dist/APlayer.min.js";

export default defineComponent({
  props: {
    src: {
      type: Object as PropType<APlayerComponentsOptions>,
      required: true,
    },
  },

  setup(props) {
    const src: APlayerOptions = { ...props.src } as APlayerComponentsOptions;
    const el = ref(HTMLDivElement);
    let player: any;

    onMounted(async () => {
      Promise.all([
        import(/* webpackChunkName: "aplayer" */ "aplayer/dist/APlayer.min.js"),
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
