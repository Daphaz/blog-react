import React from "react";

const AvatarFooter = ({ websiteUrl, profileImg, name }) => {
	return (
		<div className="avatar-footer">
			{websiteUrl ? (
				<a href={websiteUrl} target="_blank" rel="noopener noreferrer">
					<img
						src={profileImg}
						alt="author of article"
						width="50px"
						height="50px"
					/>
				</a>
			) : (
				<img
					src={profileImg}
					alt="author of article"
					width="50px"
					height="50px"
				/>
			)}
			<legend>
				<h3>{name}</h3>
				<p>Editor</p>
			</legend>
		</div>
	);
};

export default AvatarFooter;
