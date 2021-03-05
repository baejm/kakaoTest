module.exports = {
  css: {
    sourceMap: true,
    extract: {
      filename: "[name].css", // to have a name related to a theme
      chunkFilename: "css/[name].css"
    },
    loaderOptions: {
      scss: {
        additionalData: `
            @import "~@/assets/style/common.scss";           
          `
      }
    }
  }
};
