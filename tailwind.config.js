/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#e64c73",
                "primary-dark": "#c23a5b",
                "background-light": "#fcf9f9",
                "background-dark": "#211115",
                "surface-light": "#ffffff",
                "surface-dark": "#2d1b20",
                "text-main": "#4a2c34",
                "text-subtle": "#8f6e78",
                "gold-accent": "#cfa055"
            },
            fontFamily: {
                "display": ["Plus Jakarta Sans", "sans-serif"],
                "serif": ["Playfair Display", "serif"]
            },
            borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "2xl": "1rem", "3xl": "1.5rem", "full": "9999px" },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
}

