module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
  webpack: {
      html: {
          template: 'src/index.html',
      }
  }
}
