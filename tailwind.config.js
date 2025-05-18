/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titulos: ['BlairITC', 'sans-serif'], // si usas una fuente local
        subtitulos:['BlairITCMedium', 'san-serif'],
        parrafos:['FuturaBook','san-serif'],
        medioparrafo:['Futura','san-serif'],

      },
      colors: {
        primario: {
          DEFAULT: '#3b463e',
          light: '#6e712e',
        },
        secundario: {
          DEFAULT: '#d6b997',
          light: '#ccc0b4',
        },
      },
    },
  },
  plugins: [],
}

