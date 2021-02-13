import React from "react";

import { Header } from "../../components/";

const Home = () => {
	return (
		<div className="container">
			<div className="bg"></div>
			<Header />
			<div className="categorie">
				<h1>Latest Posts</h1>
			</div>
			<section className="latest-posts">
				<aside className="left">
					<article className="top">
						<h2>Lorem ipsum dolor sit amet.</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
							impedit laboriosam aspernatur excepturi ducimus commodi eligendi
							esse veritatis placeat ut quod, fuga nobis ab. Accusantium vel
							voluptatem asperiores voluptatum voluptas.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
							quasi. Quo iure reprehenderit aliquam dolorum maxime velit at
							omnis dolore minus?
						</p>
						<div className="avatar-footer">
							<img
								src="https://via.placeholder.com/50"
								alt="author of article"
							/>
							<legend>
								<h6>Jhon Doe</h6>
								<p>Editor</p>
							</legend>
						</div>
					</article>
					<article className="bottom">
						<h2>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
							pariatur.
						</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente.
						</p>
					</article>
				</aside>
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
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Voluptate maiores voluptatem est harum ea voluptatibus beatae!
							Eveniet in error laboriosam omnis dicta quidem aperiam facere
							alias, ea animi, tempora maxime.aliquid vel dolore? Autem, soluta
							aliquam a modi error culpa dolorum, praesentium atque incidunt
							rem, eveniet quisquam?
						</p>
						<div className="avatar-footer">
							<img
								src="https://via.placeholder.com/50"
								alt="author of article"
							/>
							<legend>
								<h6>Jhon Doe</h6>
								<p>Editor</p>
							</legend>
						</div>
					</figure>
				</main>
				<div className="content">
					<article>
						<img
							src="https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							width="100%"
							height="170px"
							alt="image post"
						/>
						<h2>Lorem ipsum dolor sit amet.</h2>
						<p>by Jhon Doe</p>
					</article>
					<article>
						<img
							src="https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							width="100%"
							height="170px"
							alt="image post"
						/>
						<h2>Lorem ipsum dolor sit amet.</h2>
						<p>by Jhon Doe</p>
					</article>
				</div>
				<aside className="right">
					<article className="top">
						<h2>Lorem ipsum dolor sit amet.</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
							expedita harum, voluptatum cumque esse labore. Eius ipsum veniam
							iure modi magni neque quas et voluptate est, velit molestias quod
							ipsa!
						</p>
						<div className="avatar-footer">
							<img
								src="https://via.placeholder.com/50"
								alt="author of article"
							/>
							<legend>
								<h6>Jhon Doe</h6>
								<p>Editor</p>
							</legend>
						</div>
					</article>
					<article className="bottom">
						<h2>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Accusantium?
						</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis.
						</p>
						<div className="avatar-footer">
							<img
								src="https://via.placeholder.com/50"
								alt="author of article"
							/>
							<legend>
								<h6>Jhon Doe</h6>
								<p>Editor</p>
							</legend>
						</div>
					</article>
				</aside>
			</section>
		</div>
	);
};

export default Home;
