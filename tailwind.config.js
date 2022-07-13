module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#dac0f9",

          "secondary": "#1dbef4",

          "accent": "#96cddd",

          "neutral": "#1F2933",

          "base-100": "#E3E6E8",

          "info": "#9BB5F3",

          "success": "#63E39B",

          "warning": "#F2CC64",

          "error": "#E14C5B",
        },
      },
    ],
  },
  plugins: [
    require("daisyui")],


}