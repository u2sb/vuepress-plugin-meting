import { defineClientConfig } from "@vuepress/client";

import APlayer from "./components/APlayer/index.js";
import APlayerGlobal from "./components/APlayerGlobal/index.js";
import Meting from "./components/Meting/index.js";

export default defineClientConfig({
  async enhance({ app }) {
    app.component("APlayer", APlayer);
    app.component("Meting", Meting);
    app.component("MetingJs", Meting);
  },
  rootComponents: [APlayerGlobal],
});
