import React from "react";
import Avatar from "../img/anonymous_avatar.png";
function Header() {
	return (
		<header>
			<div className="wrapper">
				<h1 className="header__title">Bookstore</h1>
				<div className="header__profile">
					<div className="header__profile_avatar">
						<img src={Avatar} alt="avatar" />
					</div>
					<p className="header__profile_name">John Doe</p>
				</div>
			</div>
		</header>
	);
}

export default Header;
