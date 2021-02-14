import React from "react";

const MainArticle = () => {
	return (
		<main className="main">
			<figure>
				<img
					src="https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					width="100%"
					height="300px"
					alt="image post"
				/>
				<h2>Title</h2>
				<h4>Lorem ipsum dolor sit amet.</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
					maiores voluptatem est harum ea voluptatibus beatae! Eveniet in error
					laboriosam omnis dicta quidem aperiam facere alias, ea animi, tempora
					maxime.aliquid vel dolore? Autem, soluta aliquam a modi error culpa
					dolorum, praesentium atque incidunt rem, eveniet quisquam?
				</p>
				<div className="avatar-footer">
					<img src="https://via.placeholder.com/50" alt="author of article" />
					<legend>
						<h6>Jhon Doe</h6>
						<p>Editor</p>
					</legend>
				</div>
			</figure>
		</main>
	);
};

export default MainArticle;
