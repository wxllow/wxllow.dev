/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

const themeCustomization = {
    "primary": "#6a92e2",
            
    "secondary": "#cc2874",
             
    "accent": "#e88dda",
 
 
    "neutral": "#212121",
}
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {},
        container: {
            center: true,
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [ {
            dark: {
                ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
                ...themeCustomization,
                "base-100"   : "#131313",


            },
          }, {
            light:
            {
                ...require("daisyui/src/theming/themes")["[data-theme=light]"],
                ...themeCustomization,
                "accent": "#a13891"
            }
          }],
    },
};
