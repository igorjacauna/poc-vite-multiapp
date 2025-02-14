import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  externals: ["react", "react-dom", "react-router", "vite", "commander", "@vitejs/plugin-react"],
});