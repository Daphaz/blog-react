import React from "react";
import Skeleton from "react-loading-skeleton";

import AvatarFooter from "../AvatarFooter.jsx";

const MainArticle = ({ articles }) => {
	return (
		<main className="main">
			{articles.length > 1 ? (
				<>
					<figure className="top">
						<a href={articles[0].url} target="_blank" rel="noopener noreferrer">
							{articles[0].cover_image && (
								<img
									className="main-img"
									src={articles[0].cover_image}
									width="100%"
									height="300px"
									alt="image cover a post"
								/>
							)}
							<h2>{articles[0].title}</h2>
						</a>
						<p>{articles[0].description}</p>
						<AvatarFooter
							websiteUrl={articles[0].user.website_url}
							profileImg={articles[0].user.profile_image_90}
							name={articles[0].user.name}
						/>
					</figure>
					<figure className="bottom">
						<a href={articles[1].url} target="_blank" rel="noopener noreferrer">
							{articles[1].cover_image && (
								<img
									className="main-img"
									src={articles[1].cover_image}
									width="100%"
									height="300px"
									alt="image cover a post"
								/>
							)}
							<h2>{articles[1].title}</h2>
						</a>
						<p>{articles[1].description}</p>
						<AvatarFooter
							websiteUrl={articles[1].user.website_url}
							profileImg={articles[1].user.profile_image_90}
							name={articles[1].user.name}
						/>
					</figure>
				</>
			) : (
				<>
					<figure className="top">
						<Skeleton className="main-img" width={"100%"} height={300} />
						<h2>
							<Skeleton height={50} />
						</h2>
						<p>
							<Skeleton count={5} />
						</p>
						<div className="avatar-footer">
							<Skeleton circle={true} width={50} height={50} />
							<legend>
								<h6>
									<Skeleton />
								</h6>
								<p>
									<Skeleton />
								</p>
							</legend>
						</div>
					</figure>
					<figure className="bottom">
						<Skeleton className="main-img" width={"100%"} height={300} />
						<h2>
							<Skeleton height={50} />
						</h2>
						<p>
							<Skeleton count={5} />
						</p>
						<div className="avatar-footer">
							<Skeleton circle={true} width={50} height={50} />
							<legend>
								<h6>
									<Skeleton />
								</h6>
								<p>
									<Skeleton />
								</p>
							</legend>
						</div>
					</figure>
				</>
			)}
		</main>
	);
};

export default MainArticle;
