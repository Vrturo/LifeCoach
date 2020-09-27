module.exports = {
  // The absolute path to your project
  context: __dirname + "/",
  // the entry point for our app
  entry: "./src/index.js",
  // where to put the compiled output (what our script tag will link to)
  output: {
    // where does it go?
    path: __dirname + "/dist",
    // what is the file called?
    filename: "bundle.js"
  },
  // how can we debug our bundle? for production, we can use 'source-map'
  devtool: "eval",
  module: {
    rules: [
/**
 * "babel-loader" is a compiler that uses babel to trandform javascript syntax.
 * It converts "future javascript not supported in the browser" into a backwards compatible version of JavaScript in current and older browsers or environments.
 */
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets:['@babel/preset-env']
          }
        }
      },

     {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  }
};