import { defineConfig } from "umi";
const { resolve } = require('path');
export default defineConfig({
  // routes: [
  //   { path: "/", component: "index" },
  //   { path: "/docs", component: "docs" },
  // ],
  alias:{
    utils:resolve(__dirname,"./src/utils"),
    components:resolve(__dirname,"./src/components"),
    common:resolve(__dirname,"./src/common")
  },
  npmClient: 'pnpm',
  plugins: ['@umijs/plugins/dist/antd'],
  antd: {
    // configProvider
    configProvider: {},
    // themes
    dark: false,
    compact: true,
    // babel-plugin-import
    import: false,
    // less or css, default less
    style: 'less',
    // shortcut of `configProvider.theme`
    // use to configure theme token, antd v5 only
    theme: {},
    // antd <App /> valid for version 5.1.0 or higher, default: undefined
    appConfig: {},
    // Transform DayJS to MomentJS
    momentPicker: true,
    // Add StyleProvider for legacy browsers
    styleProvider: {
      hashPriority: 'high',
      legacyTransformer: true,
    },}
});
