/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

// https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript
interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_API_PATH: string
  readonly VITE_IS_MOCKING_API: string
  readonly VITE_MOCKING_DELAY_MS: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}