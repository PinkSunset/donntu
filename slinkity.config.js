// .eleventy.js or eleventy.config.js
const slinkity = require('slinkity')
const vue = require('@slinkity/renderer-vue')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(slinkity.plugin, slinkity.defineConfig({
    renderers: [vue],
  }))
}
