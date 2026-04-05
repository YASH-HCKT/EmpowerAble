/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#0a3622",
                "accent-gold": "#d4af37",
                "background-light": "#E8fac2",
                "background-dark": "#051a10",
                "neutral-muted": "#0a362220",
            },
            keyframes: {
                "x-slider": {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(calc(-50% - 1.25rem))" }
                }
            },
            animation: {
                "x-slider": "x-slider 20s linear infinite"
            }
        },
    },
    plugins: [],
}
