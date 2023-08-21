import { type Preview, setup } from '@storybook/vue3'
import { type App } from 'vue'
import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'

const pinia = createPinia()

setup((app: App) => {
    app.use(pinia)
    app.use(Quasar, {
        plugins: {}
    })
})

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    }
}

export default preview