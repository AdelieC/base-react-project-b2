import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../utils/routes/routes.json";

const MISSING_ROUTES_DATA_TEXT =
	"Aucune donnée de navigation trouvée dans utils > routes.json...";

const Nav = () => {
	if (!routes?.length)
		return <p className="text-warning">{MISSING_ROUTES_DATA_TEXT}</p>;
	return (
		<nav className="">
			<ul className="flex gap-4 text-xl">
				{routes?.map((route) => {
					return (
						<li key={"navlink-" + route.label}>
							<NavLink
								to={route.path}
								className={({ isActive }) =>
									isActive ? "text-accent" : ""
								}
							>
								{route.label}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Nav;
