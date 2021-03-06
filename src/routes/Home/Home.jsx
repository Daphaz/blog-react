import React, { useState, useEffect } from "react";
import axios from "axios";

import { FilterPost } from "../../utils/constants";

import {
	Header,
	Categorie,
	AsideLeft,
	MainArticle,
	ContentArticle,
	AsideRight,
	Navigation,
} from "../../components/";

const Home = () => {
	const [articlesJavascript, setArticlesJavascript] = useState([]);
	const [articlesReact, setArticlesReact] = useState([]);
	const [articlesTuto, setArticlesTuto] = useState([]);
	const [articlesCss, setArticlesCss] = useState([]);
	const [dimensions, setDimensions] = useState({
		height: window.innerHeight,
		width: window.innerWidth,
	});

	const filterArticles = (articles) => {
		//for Javascript
		FilterPost(setArticlesJavascript, articles, "javascript");
		//for React
		FilterPost(setArticlesReact, articles, "react");
		//for Beginners
		FilterPost(setArticlesTuto, articles, "beginners");
		//for Css
		FilterPost(setArticlesCss, articles, "css");
	};

	useEffect(() => {
		let resize = () => {
			setDimensions({
				height: window.innerHeight,
				width: window.innerWidth,
			});
		};
		document.addEventListener("resize", resize);

		return () => document.removeEventListener("resize", resize);
	}, []);

	useEffect(() => {
		axios
			.get("https://dev.to/api/articles")
			.then((res) => {
				filterArticles(res.data);
			})
			.catch((e) => {
				console.error("getArticles : ", e);
			});
	}, []);

	return (
		<div className="container">
			<Navigation />
			<div className="bg"></div>
			<Header dimensions={dimensions} />
			<Categorie title="Latest Posts" />
			<section className="latest-posts">
				<AsideLeft articles={articlesReact} />
				<MainArticle articles={articlesJavascript} />
				<ContentArticle articles={articlesTuto} />
				<AsideRight articles={articlesCss} />
			</section>
		</div>
	);
};

export default Home;
