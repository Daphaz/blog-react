import React from "react";

const AsideRight = () => {
	return (
		<aside className="right">
			<article className="top">
				<h2>Lorem ipsum dolor sit amet.</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
					expedita harum, voluptatum cumque esse labore. Eius ipsum veniam iure
					modi magni neque quas et voluptate est, velit molestias quod ipsa!
				</p>
				<div className="avatar-footer">
					<img src="https://via.placeholder.com/50" alt="author of article" />
					<legend>
						<h6>Jhon Doe</h6>
						<p>Editor</p>
					</legend>
				</div>
			</article>
			<article className="bottom">
				<h2>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit.</h2>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis.</p>
				<div className="avatar-footer">
					<img src="https://via.placeholder.com/50" alt="author of article" />
					<legend>
						<h6>Jhon Doe</h6>
						<p>Editor</p>
					</legend>
				</div>
			</article>
		</aside>
	);
};

export default AsideRight;
