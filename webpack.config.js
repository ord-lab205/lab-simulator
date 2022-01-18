const process = require("process");
const path = require("path");
const dotenv = require("dotenv");
const nodeExternals = require('webpack-node-externals')

// module.exports = {
//   target: "node",
//   externals: [nodeExternals()],
//   entry: "./app.js",
//   output: {
//     filename: "index.js",
//     path: path.resolve(__dirname, "dist"),
//   }
// };

module.exports = (env, options) => {
  const output_filename = options.mode === "production" ? "index.js" : "main.js";
  console.log(path.resolve(__dirname, options.mode === "production" ? ".env" : "tmp.env"));
  dotenv.config({
    path: path.resolve(__dirname, options.mode === "production" ? ".env" : "tmp.env"),
  });
  console.log("env:", env);
  console.log("options:", options.mode);
  return {
    target: "node",
    externals: [nodeExternals()],
    entry: "./index.js",
    output: {
      filename: output_filename,
      path: path.resolve(__dirname, "dist"),
    },
  };
};
