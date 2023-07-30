import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: "text", value: " 🔗" },
        },
      ],
    ],
  },
  integrations: [preact()],
});
