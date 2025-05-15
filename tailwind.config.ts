import type { Config } from 'tailwindcss'

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'], // or your paths
    theme: {
        extend: {
            fontFamily: {
                inter: ['var(--font-inter)', 'sans-serif'],
                jetbrains: ['var(--font-jetbrains-mono)', 'monospace'],
            },
            colors: {
                brand: {
                    bg: '#333333',
                    'bg-hover': '#474747',
                    text: '#f2f2f2',
                    'text-hover': '#cecece',
                    prim: '#afe1fd',
                    'prim-dark': '#023350',
                    'prim-hover': '#8ebeda',
                    sec: '#e1affd',
                    'sec-dark': '#330250',
                    'sec-hover': '#B682D5',
                    acc: '#46c898',
                    'acc-dark': '#37b989',
                    footer: '#474747',
                    border: '#333333',
                },
            },
        },
    },
} satisfies Config