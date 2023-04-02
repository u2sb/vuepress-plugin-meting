import type { APlayerOptions } from "aplayer-ts";

export interface MetingPluginsOptions {
  aplayer?: APlayerOptions;
  aplayerGlobal?: APlayerOptions;
}

export const MetingPluginsOptionsDefault: MetingPluginsOptions = {
  aplayer: {},
  aplayerGlobal: {},
};
