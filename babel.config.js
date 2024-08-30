const babelConfig = (api) => {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: ["nativewind/babel"],
  }
}

module.exports = babelConfig
