import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    'src/bin/core-cli.ts',
    {
      builder: "copy",
      input: 'src/bin/runner/plugins/virtualModuleTemplate',
      pattern: '**/*.ejs',
      outDir: 'dist/bin/virtualModuleTemplate'
    },
  ]
});