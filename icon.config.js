module.exports = {
  /**
   * {String|null} name      Name of svg and js file.
   * {String}      icons     List of SVG files.
   * {String|null} template  JavaScript output Mustache template.
   * {String|null} svgDest   Main output directory.
   * {String|null} jsDest    JavaScript output destination.
   */
  symbol: {
    name: 'logos',
    icons: 'icons/*.svg',
    template: 'icon-symbol.hbs',
    svgDest: 'assets',
    jsDest: 'assets'
  }
}
