// Configuración para GitHub Pages
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Vue_Crypto/' // Nombre del repositorio
    : '/',
  
  configureWebpack: {
    plugins: [
      // Asegura que los archivos .nojekyll y 404.html se copien al directorio dist
      new CopyPlugin([
        { from: path.resolve(__dirname, 'public/.nojekyll'), to: '' },
        { from: path.resolve(__dirname, 'public/404.html'), to: '' }
      ])
    ]
  }
}
