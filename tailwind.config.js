/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'background': "#222121",
        'outline': "#323031",
        'primary': "#DDE392",
        'secondary': "#938BA1",
      }
    }
  },
  plugins: []
};
