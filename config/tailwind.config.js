const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
    content: [
        "./public/*.html",
        "./app/helpers/**/*.rb",
        "./app/javascript/**/*.js",
        "./app/views/**/*.{erb,haml,html,slim}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                brand: {
                    50: "#fef2f3",
                    100: "#fee2e4",
                    200: "#fecace",
                    300: "#fda4aa",
                    400: "#f97079",
                    500: "#ef3340",
                    600: "#dd2532",
                    700: "#ba1b26",
                    800: "#9a1a23",
                    900: "#801c23",
                    950: "#450a0e",
                },
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/container-queries"),
    ],
}
