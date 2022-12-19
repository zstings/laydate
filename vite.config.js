import { defineConfig } from 'vite'
import { resolve } from 'path'
import { realname } from './package.json'

export default defineConfig({
  build: {
    assetsDir: '',
    lib: {
      entry: resolve(__dirname, 'src/laydate.js'),
      name: 'laydate',
      format: ['umd'],
      fileName: () => `${realname}.js`
    }
  }
})
