import React from "react";

import {
	Header,
	Categorie,
	AsideLeft,
	MainArticle,
	ContentArticle,
	AsideRight,
} from "../../components/";

const Home = () => {
	return (
		<div className="container">
			<div className="bg"></div>
			<Header />
			<Categorie />
			<section className="latest-posts">
				<AsideLeft />
				<MainArticle />
				<ContentArticle />
				<AsideRight />
			</section>
		</div>
	);
};

export default Home;
