import type { APlayerOptions, Audio } from "aplayer";

export interface APlayerComponentsOptions
  extends Omit<APlayerOptions, "container"> {}

export interface MetingPluginsOptions {
  aplayer?: APlayerComponentsOptions;
  aplayerGlobal?: APlayerComponentsOptions;
  aplayerGlobalMusic?: Array<Audio>;
}

export const MetingPluginsOptionsDefault: MetingPluginsOptions = {
  aplayer: {
    fixed: false,
    mini: false,
    autoplay: false,
    theme: "#2980b9",
    loop: "all",
    order: "list",
    preload: "auto",
    volume: 0.7,
    mutex: true,
    lrcType: 3,
    listFolded: false,
    listMaxHeight: "340px",
    storageName: "@u2sb/vuepress-plugin-meting",
  },
  aplayerGlobal: {
    fixed: true,
    mini: true,
    autoplay: false,
    theme: "#2980b9",
    loop: "all",
    order: "list",
    preload: "auto",
    volume: 0.7,
    mutex: true,
    lrcType: 3,
    listFolded: false,
    listMaxHeight: "540px",
    storageName: "@u2sb/vuepress-plugin-meting",
  },
};
