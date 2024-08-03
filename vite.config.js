import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/e-plantShopping",//para poder desplegarl el sitio web en github se debe cambiar por el nombre de mi repositorio
  plugins: [react()],
})

/*
Una vez que se ejecutó "npm install gh-pages --save-dev", 
se configuró la línea 6 de este archivo y haber anexado las líneas 8 y 9 en el archivo package.json, 
ejecutamos el comando "npm run deploy"
Now perform deploy command in the terminal to executes the "deploy" script defined in the package.json file, deploying the project to GitHub Pages using the gh-pages tool.
npm run deploy
*/