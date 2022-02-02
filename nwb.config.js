module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Hooks',
      externals: {
        react: 'React'
      }
    }
  }
}
