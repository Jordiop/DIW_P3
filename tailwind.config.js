/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            aspectRatio: {
                '32': '32 / 9'
            }
        },
    },
    plugins: [],
}