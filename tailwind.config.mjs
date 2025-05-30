 /** @type { import ('tailwindcss').Config} */

import { Outfit } from 'next/font/google';

 export default {
    content: [
        "./pages/**/*.{js,ts,tsx,mdx}",
        "./components/**/*.{js,ts,tsx,mdx}",
        "./app/**/*.{js,ts,tsx,mdx}",
    ],

    theme:{
        extend: {
            colors:{
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#11001F',
            },
            fontFamily:{
                Outfit: ["Outfit"," sans-serif"],
                Ovo: [ "Ovo", "serif"]
            }
        },
    },
    darkMode:'selector',
    plugins:[],
    
 };