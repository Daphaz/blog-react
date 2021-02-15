import React from "react";

const AvatarFooter = ({ websiteUrl, profileImg, name }) => {
	return (
		<div className="avatar-footer">
			<a href={websiteUrl} target="_blank" referrerPolicy="no-referrer">
				<img
					src={profileImg}
					alt="author of article"
					width="50px"
					height="50px"
				/>
			</a>
			<legend>
				<h6>{name}</h6>
				<p>Editor</p>
			</legend>
		</div>
	);
};

export default AvatarFooter;
