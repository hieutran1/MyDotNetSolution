/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        container: {
            center: true
        },
        extend: {
            colors: {

            },
            fontFamily: {

            },
            spacing: {

            },
            boxShadow: {

            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {}
                }
            }),
        },
    },
    plugins: [
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
        require('@tailwindcss/typography'),
    ],
}

