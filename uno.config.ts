import {
  defineConfig,
  presetAttributify,
  presetWind,
  presetIcons,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  theme: {
    fontFamily: {
      geist: "Geist-Regular",
    },
    colors: {
      primary: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
      },
    },
  },
  presets: [
    presetWind(),
    presetAttributify(),
    presetIcons({
      collections: {
        carbon: () =>
          import("@iconify-json/carbon/icons.json").then((i) => i.default),
        logos: () =>
          import("@iconify-json/logos/icons.json").then((i) => i.default),
      },
    }),
  ],
  transformers: [transformerDirectives()],
  darkMode: "class",
  shortcuts: {
    btn: "px-4 py-2 rounded-lg font-medium transition-colors",
    "btn-primary": "btn bg-blue-600 hover:bg-blue-700 text-white",
    "btn-secondary":
      "btn bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white",
    card: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6",
    "text-muted": "text-gray-600 dark:text-gray-400",
  },
});
