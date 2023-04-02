import { defineClientConfig } from "@vuepress/client";

import APlayer from "./components/APlayer/index.js";
import APlayerGlobal from "./components/APlayerGlobal/index.js";

export default defineClientConfig({
  async enhance({ app }) {
    app.component("APlayer", APlayer);
  },
  rootComponents: [APlayerGlobal],
});
