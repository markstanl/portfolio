import type { Config } from 'tailwindcss'

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'], // or your paths
    theme: {
        extend: {
            colors: {
                brand: {
                    bg: '#333333',
                    text: '#f2f2f2',
                    prim: '#afe1fd',
                    sec: '#e1affd',
                    acc: '#46c898'
                },
                bg: '#333333',
                sec: '#e1affd',
            },
        },
    },
} satisfies Config