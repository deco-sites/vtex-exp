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
      "white": "#fff",
      "darkslategray": "#142032",
      "midnightblue": "#122644",
      "pink": "#ffc4dd",
      "darkgray": "#a1aab7",
      "crimson": "#f71963",
    },
  },
};
