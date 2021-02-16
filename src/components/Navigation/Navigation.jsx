import React from "react";

const links = [
	{
		title: "Javascript",
		path: "/",
	},
	{
		title: "React",
		path: "/",
	},
	{
		title: "Beginners",
		path: "/",
	},
	{
		title: "Css",
		path: "/",
	},
	{
		title: "Latest Posts",
		path: "/",
	},
];

const Navigation = () => {
	return (
		<div className="menu">
			<nav>
				<ul>
					{links.map((link, i) => {
						return (
							<li key={i}>
								<a href={link.path}>{link.title}</a>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Navigation;
