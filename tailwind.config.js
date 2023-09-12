/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
        './node_modules/tw-elements-react/dist/js/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                'accent-1': '#333',
            },
        },
    },
    variants: {},
    darkMode: 'class',
    plugins: [require('tw-elements-react/dist/plugin.cjs')],
};
