import { createVuetify } from 'vuetify'

export default createVuetify({
theme: {
defaultTheme: 'dark', // or 'light'
themes: {
    dark: {
    colors: {
        surface: '#d62020ff', // Example: adjust surface color for dark theme
        overlay: '#8a1111ff', // Example: adjust overlay color for dark theme
    },
    },
},
},
})