const { merge } = require("webpack-merge");
const commonConfiguration = require("./webpack.common.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(commonConfiguration, {
	mode: "production",
	plugins: [new CleanWebpackPlugin()],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].css",
						},
					},
					"extract-loader",
					"css-loader?-url",
					"postcss-loader",
					"sass-loader",
				],
			},
		],
	},
});
