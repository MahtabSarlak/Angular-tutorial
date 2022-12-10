module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: "less-loader",
        options: {
          javascriptEnabled: true,
        },
      },
    ],
  },
};
