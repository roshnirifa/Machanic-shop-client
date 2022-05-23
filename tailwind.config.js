module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FDB91A",
          secondary: "#FE3A3B",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "autumn",
    ],
  },
  plugins: [require("daisyui")],
}
