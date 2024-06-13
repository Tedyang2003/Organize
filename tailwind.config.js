/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {  
    extend: {
      colors: {
        'main-blue': "#3A5DE9",
        'main-green': '#12A47B',
        'main-black': "#25313C",
        'custom-grey': "#474747",
        'overlay': "rgba(0, 0, 0, 0.233)",
        'light-grey': "#D7D7D7"
       },
       fontFamily: {
        poppins: ['Poppins'],
        lato: ['Lato']
      },
      backgroundImage: {
        "login-bg": "url('../public/images/login_bg.jpg')",
        "signup-bg": "url('../public/images/signup_bg.jpg')",
        "overlay-left": "linear-gradient(90deg,rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        "overlay-left-white": "linear-gradient(90deg,rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
        "overlay-top-white": "linear-gradient(180deg,rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
        "overlay-bottom-white": "linear-gradient(360deg ,rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
        "radial-elipse": "radial-gradient(circle, rgba(61,153,255, 0.4) 0%, rgba(23,255,198, 0.1) 70%);",
        "overlay-radial-white": "radial-gradient( rgba(255,255,255, 0.6) 0%, rgba( 255, 255,255, 1) 70%);",
        "bubble-1": "url('../public/images/bubble-1.jpeg')",
        "bubble-2": "url('../public/images/bubble-2.webp')",
        "bubble-3": "url('../public/images/bubble-3.webp')",
        "bubble-4": "url('../public/images/bubble-4.jpeg')",

      },
      backgroundColor: {
        "ghost-white-translucent": "rgb(248, 248, 255, 0.4)"
      },
      width: {
        "software": "250px",
        "track": "calc(250px * 12)",
        "screen-showcase": "40rem",
        "big-bubble": "30rem"
      },
      height: {
        "login-height": 'calc(100vh - 10rem)',
        "landing-height": 'calc(100vh - 12rem)',
        "software": "100px",
        "card": "370px",
        "line": "2px",
        "big-bubble": "30rem"
      },
      minHeight: {
        "min-page-height": "700px"
      },
      animation: {
        'page-fade': "fade 300ms 0s linear forwards",
        'label-fade':"moveUpAndLoad 300ms 0.7s linear forwards",
        'main-head-fade': "moveUpAndLoad 300ms 1s linear forwards",
        'sub-head-fade': "moveUpAndLoad 300ms 1.2s linear forwards",
        "carousel-auto-scroll": "scroll 15s linear infinite",
        "float": "float 3.5s 2s infinite ease-in-out"
      },
      opacity: {
        "custom-0": "0",
      },
      lineHeight: {
        "landing-h1": "3.75rem"
      },
      boxShadow: {
        "custom-lg": "0 10px 15px 0px rgb(0, 0, 0, 0.07), 0 4px 10px 0px rgb(0, 0, 0,  0.07);",
        "header": "0px 0px 20px 3px rgba(0,0,0,0.17);",
        "float-window": "0px 0px 40px 4px rgba(58,93,233,0.09);",
      }
    },
  },
  plugins: [],
}

