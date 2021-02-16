import React, { useState } from "react";
import Logo from "../../../assets/images/logo.png";
import animjs from "animejs";

const Header = ({ dimensions }) => {
	const [toggle, setToggle] = useState(false);
	const handleMenu = () => {
		const ovMenu = document.querySelector(".ov-menu");
		const menu = document.querySelector(".menu");

		let size = dimensions.width <= 425 ? 100 : 200;

		const bodyOverflow = () => {
			document.body.classList.toggle("menu-open");
		};

		const tl = animjs.timeline({
			duration: 450,
			easing: "easeOutExpo",
			begin: bodyOverflow,
		});

		const displayMenu = () => {
			if (!toggle) {
				menu.style.display = "flex";
			} else {
				menu.style.display = "none";
			}
		};

		const translateEl = (el) => {
			el.style.transform = "translate(-50%,-50%)";
		};

		tl.add({
			targets: ovMenu,
			scale: size,
			complete: displayMenu,
			begin: translateEl(ovMenu),
		}).add({
			targets: ovMenu,
			scale: 0.001,
			begin: translateEl(ovMenu),
		});

		setToggle(!toggle);
	};

	return (
		<header className="header">
			<a href="/" className="logo">
				<img src={Logo} alt="logo" />
			</a>
			<div className="links-menu">
				<a href="/">Login</a>
				<div className="btn-menu">
					<p>Menu</p>
					<div className="burger" onClick={handleMenu}>
						<div className="ov-menu"></div>
						<div className="icon-menu">
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
