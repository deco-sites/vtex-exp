import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      "black": "#000",
      "black-dark": "#081223",
      "white": "#fff",
      "darkslategray": "#142032",
      "midnightblue": "#122644",
      "pink": "#ffc4dd",
      "darkgray": "#a1aab7",
      "crimson": "#f71963",
      "lightsteelblue": "#BCC5D1",
    },
    extend: {
      screens: {
        "3xl": "1900px",
      },
      display: ["group-hover"],
      animation: {
        "slide-left": "slide-left-frame 1s ease normal",
        "slide-right": "slide-right-frame 1s ease normal",
        "slide-bottom": "slide-bottom-frame 1s ease normal forwards",
        "slide-top": "slide-top-frame 1s ease normal forwards",
        "progress": "progress-frame ease normal",
        "expand-bar": "expand-bar-frame 1s infinite ease-out normal",
        "button-expand": "expand-button-frame 1s ease normal forwards",
      },
      keyframes: {
        "slide-top-frame": {
          from: { opacity: 0, transform: "translateY(-30%)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "slide-left-frame": {
          from: { opacity: 0, transform: "translateX(20%)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        "slide-right-frame": {
          from: { opacity: 0, transform: "translateX(-20%)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        "slide-bottom-frame": {
          from: { opacity: 0, transform: "translateY(30%)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "expand-bar-frame": {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        "expand-button-frame": {
          from: { transform: "scale(.3)", visibility: "hidden", opacity: 0 },
          to: { transform: "scale(1)", visibility: "visible", opacity: 1 },
        },
        "progress-frame": {
          from: {
            "--dot-progress": "0%",
          },
          to: {
            "--dot-progress": "100%",
          },
        },
      },
    },
  },
};
