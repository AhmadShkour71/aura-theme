const { createVirtualTheme, sassToJS, readStyleFile } = require('../functions')

module.exports = createVirtualTheme({
  name: 'Aura Dark',
  type: 'dark',
  colors: sassToJS(readStyleFile('aura-dark')),
})