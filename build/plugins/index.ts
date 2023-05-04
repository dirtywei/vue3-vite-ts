import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import unocss from 'unocss/vite'
import unplugins from './unplugins'

export function setupVitePlugins() {
  const plugins = [vue(), vueJsx(), legacy(), unocss(), ...unplugins]
  return plugins
}
