import { defineConfig } from "vocs";

export default defineConfig({
  title: "Fuel by Example",
  sidebar: [
    {
      text: "create fuels",
      link: "/create-fuels",
    },
    {
      text: "SRC20 Fungible Asset Minter",
      link: "/fungible-asset-minter",
    },
  ],
  theme: {
    colorScheme: "dark",
    accentColor: {
      textAccent: "#00f58c",
      backgroundAccent: "#00f58c",
      backgroundAccentText: "#000",
      backgroundAccentHover: "#00d77c",
      borderAccent: "#00c26d",
      textAccentHover: "#00c26d",
    },
  },
});
