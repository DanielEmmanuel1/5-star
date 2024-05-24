/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hand-shake": "url('../images/handshake.png')",
      },
    },
  },
  plugins: [],
};
