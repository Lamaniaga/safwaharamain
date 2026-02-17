/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./*.html",
        "./src/**/*.{ts,js}"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0F3D2E",
                gold: "#C6A75E",
            }
        },
    },
    plugins: [],
}

