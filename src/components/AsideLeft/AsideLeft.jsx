import React from "react";
import Skeleton from "react-loading-skeleton";

import AvatarFooter from "../AvatarFooter.jsx";

const AsideLeft = ({ articles }) => {
	return (
		<>
			{articles.length > 1 ? (
				<aside className="left">
					<article className="top">
						<a
							href={articles[0].url}
							target="_blank"
							referrerPolicy="no-referrer">
							<h2>{articles[0].title}</h2>
							<p>{articles[0].description}</p>
						</a>
						<AvatarFooter
							websiteUrl={articles[0].user.website_url}
							profileImg={articles[0].user.profile_image_90}
							name={articles[0].user.name}
						/>
					</article>
					<article className="bottom">
						<a
							href={articles[1].url}
							target="_blank"
							referrerPolicy="no-referrer">
							<h2>{articles[1].title}</h2>
							<p>{articles[1].description}</p>
						</a>
						<AvatarFooter
							websiteUrl={articles[1].user.website_url}
							profileImg={articles[1].user.profile_image_90}
							name={articles[1].user.name}
						/>
					</article>
				</aside>
			) : (
				<aside className="left">
					<article className="top">
						<h2>
							<Skeleton />
						</h2>
						<p>
							<Skeleton count={4} />
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
					</article>
					<article className="bottom">
						<h2>
							<Skeleton />
						</h2>
						<p>
							<Skeleton count={2} />
						</p>
					</article>
				</aside>
			)}
		</>
	);
};

export default AsideLeft;
