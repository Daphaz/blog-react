const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
	entry: [
		path.resolve(__dirname, "../src/index.js"),
		path.resolve(__dirname, "../src/scss/styles.scss"),
	],
	output: {
		filename: "bundle.[contenthash].js",
		path: path.resolve(__dirname, "../dist"),
	},
	devtool: "source-map",
	plugins: [
		new CopyWebpackPlugin({
			patterns: [{ from: path.resolve(__dirname, "../assets") }],
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "../public/index.html"),
			minify: true,
		}),
		new MiniCSSExtractPlugin(),
	],
	module: {
		rules: [
			// HTML
			{
				test: /\.(html)$/,
				use: ["html-loader"],
			},

			// JS & JSX
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},

			// CSS
			{
				test: /\.css$/,
				use: [MiniCSSExtractPlugin.loader, "css-loader"],
			},

			// Images
			{
				test: /\.(jpg|png|gif|svg)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: "assets/images/",
						},
					},
				],
			},

			// Fonts
			{
				test: /\.(ttf|eot|woff|woff2)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: "assets/fonts/",
						},
					},
				],
			},

			// Shaders
			{
				test: /\.(glsl|vs|fs|vert|frag)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "raw-loader",
						options: {
							outputPath: "assets/shaders/",
						},
					},
				],
			},
		],
	},
};
