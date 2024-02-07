const { addDynamicIconSelectors } = require('@iconify/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'header-text': '#FF2400',
      },
    },
    listStyleImage: {
      check: 'url("./img/check.svg")',
      chec: 'url("./img/chec.svg")',
    },
  },
  plugins: [
    // Plugin with dynamic selectors for '.icon-'
    addDynamicIconSelectors(),
    // Plugin with dynamic selectors that contains
    // only css for overriding icon for '.icon-hover-'
    addDynamicIconSelectors({
      prefix: 'icon-hover',
      overrideOnly: true,
    }),
  ],
}
