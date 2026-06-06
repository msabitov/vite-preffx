import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  oxc: {
    jsx: {
      importSource: 'preffx',
      pragmaFrag: 'preffx.Fragment',
      pragma: 'preffx.h',
    },
    jsxInject: `import {h, Fragment} from 'preffx'`,
  }
})
