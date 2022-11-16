import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<nav className="">
			<ul className="flex gap-4 text-xl">
				<li>
					<NavLink
						to={"/"}
						className={({ isActive }) =>
							isActive ? "text-accent" : ""
						}
					>
						Accueil
					</NavLink>
					<NavLink
						to={"/a-propos"}
						className={({ isActive }) =>
							isActive ? "text-accent" : ""
						}
					>
						A propos
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
