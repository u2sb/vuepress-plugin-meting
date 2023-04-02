import { getDirname, path } from "@vuepress/utils";
import { deepmerge } from "deepmerge-ts";
import { MetingPluginsOptionsDefault } from "./options.js";

import type { App, PluginObject } from "@vuepress/core";
import type { MetingPluginsOptions } from "./options.js";

const __dirname = getDirname(import.meta.url);

const MetingPlugins = (options: MetingPluginsOptions = {}): PluginObject => {
  options = deepmerge(MetingPluginsOptionsDefault, options);
  return {
    name: "vuepress-plugin-meting",
    async onPrepared(app: App) {
      await app.writeTemp("MetingOptions.json", JSON.stringify(options));
    },
    clientConfigFile: path.resolve(__dirname, "client.js"),
    extendsBundlerOptions: (bundlerOptions, app) => {
      // 修改 @vuepress/bundler-vite 的配置项
      if (app.options.bundler.name === "@vuepress/bundler-vite") {
        bundlerOptions.viteOptions ??= {};
        bundlerOptions.viteOptions.optimizeDeps = {
          include: ["aplayer/dist/APlayer.min.js", "hls.js/dist/hls.min.js"],
        };
      }
    },
  };
};

export default MetingPlugins;
