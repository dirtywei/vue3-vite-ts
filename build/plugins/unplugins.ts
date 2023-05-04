import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
// import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from 'path'
import { getSrcPath } from '../utils'

const customIconPath = resolve(getSrcPath(), 'assets/svg')

export default [
  AutoImport({
    imports: ['vue', 'vue-router'],
    dts: 'typings/auto-imports.d.ts',
    eslintrc: { enabled: true }
  }),
  Icons({
    compiler: 'vue3',
    autoInstall: true,
    customCollections: {
      custom: FileSystemIconLoader(customIconPath)
    },
    scale: 1,
    defaultClass: 'inline-block'
  }),
  Components({
    resolvers: [NaiveUiResolver(), IconsResolver({ customCollections: ['custom'], componentPrefix: 'icon' })],
    dts: 'typings/components.d.ts'
  })
  // createSvgIconsPlugin({
  //   iconDirs: [customIconPath],
  //   symbolId: 'icon-[dir]-[name]',
  //   inject: 'body-last',
  //   customDomId: '__CUSTOM_SVG_ICON__'
  // })
]
