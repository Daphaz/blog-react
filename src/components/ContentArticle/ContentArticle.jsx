import React from "react";
import Skeleton from "react-loading-skeleton";

const ContentArticle = ({ articles }) => {
	return (
		<div className="content">
			{articles.length > 1 ? (
				<>
					<article>
						<a href={articles[1].url} target="_blank" rel="noopener noreferrer">
							<img
								className="content-img"
								src={articles[1].cover_image}
								width="100%"
								height="170px"
								alt="image post"
							/>
							<h2>{articles[1].title}</h2>
						</a>
						<p>by {articles[1].user.name}</p>
					</article>
					{articles[2] && (
						<article>
							<a
								href={articles[2].url}
								target="_blank"
								rel="noopener noreferrer">
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
					)}
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
