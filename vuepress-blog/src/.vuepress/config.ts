import { defineUserConfig } from 'vuepress'
import theme from './theme.js'

export default defineUserConfig({
    base: '/',

    locales: {
        '/'   : {
            lang       : 'en-US',
            title      : 'Wind brother',
            description: 'A Wind brother blog for EveryOne',
        },
        '/zh/': {
            lang       : 'zh-CN',
            title      : '风少',
            description: '风少的 blog',
        },
    },

    theme,

    shouldPrefetch: false,
})
