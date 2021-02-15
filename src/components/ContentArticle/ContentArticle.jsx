import React from "react";
import Skeleton from "react-loading-skeleton";

const ContentArticle = ({ articles }) => {
	return (
		<div className="content">
			{articles.length > 2 ? (
				<>
					<article>
						<a href={articles[0].url} target="_blank" rel="noopener noreferrer">
							<img
								className="content-img"
								src={articles[0].cover_image}
								width="100%"
								height="170px"
								alt="image post"
							/>
							<h2>{articles[0].title}</h2>
						</a>
						<p>by {articles[0].user.name}</p>
					</article>
					<article>
						<a href={articles[2].url} target="_blank" rel="noopener noreferrer">
							<img
								className="content-img"
								src={articles[2].cover_image}
								width="100%"
								height="170px"
								alt="image post"
							/>
							<h2>{articles[2].title}</h2>
						</a>
						<p>by {articles[2].user.name}</p>
					</article>
				</>
			) : (
				<>
					<article>
						<Skeleton width="100%" height={170} />
						<h2>
							<Skeleton />
						</h2>
						<p>
							<Skeleton />
						</p>
					</article>
					<article>
						<Skeleton width="100%" height={170} />
						<h2>
							<Skeleton />
						</h2>
						<p>
							<Skeleton />
						</p>
					</article>
				</>
			)}
		</div>
	);
};

export default ContentArticle;
