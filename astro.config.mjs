// @ts-check
import { defineConfig } from "astro/config";

const site = process.env.ASTRO_SITE ?? "https://hannayvette.github.io";
const base = process.env.ASTRO_BASE ?? "/BelgraviaBallet";

export default defineConfig({
  site,
  base,
  trailingSlash: "always"
});
