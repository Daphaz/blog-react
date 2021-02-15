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
} from "../../components/";

const Home = () => {
	const [articlesJavascript, setArticlesJavascript] = useState([]);
	const [articlesReact, setArticlesReact] = useState([]);
	const [articlesTuto, setArticlesTuto] = useState([]);
	const [articlesCss, setArticlesCss] = useState([]);

	const filterArticles = (articles) => {
		//for Javascript
		FilterPost(setArticlesJavascript, articles, "javascript");
		//for React
		FilterPost(setArticlesReact, articles, "react");
		//for Tutorial
		FilterPost(setArticlesTuto, articles, "tutorial");
		//for css
		FilterPost(setArticlesCss, articles, "css");
	};

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
			<div className="bg"></div>
			<Header />
			<Categorie />
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
