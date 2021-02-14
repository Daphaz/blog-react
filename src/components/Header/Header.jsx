import React from "react";
import Logo from "../../../assets/images/logo.png";

const Header = () => {
	return (
		<header className="header">
			<a href="/">
				<img src={Logo} alt="logo" />
			</a>
			<div className="links-menu">
				<a href="/">Login</a>
				<a href="/">
					<p>Menu</p>
					<div className="burger">
						<span></span>
						<span></span>
					</div>
				</a>
			</div>
		</header>
	);
};

export default Header;
