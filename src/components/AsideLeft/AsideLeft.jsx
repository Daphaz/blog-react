import React from "react";

const AsideLeft = () => {
	return (
		<aside className="left">
			<article className="top">
				<h2>Lorem ipsum dolor sit amet.</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
					impedit laboriosam aspernatur excepturi ducimus commodi eligendi esse
					veritatis placeat ut quod, fuga nobis ab. Accusantium vel voluptatem
					asperiores voluptatum voluptas.
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
				<h2>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente.
				</p>
			</article>
		</aside>
	);
};

export default AsideLeft;
