import { FaFacebookSquare } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Layout = () => {
	return (
		<>
			<header className="flex gap-8 p-8 w-full justify-between">
				<div className="flex gap-4">
					<FaFacebookSquare className="text-4xl" />
					<p className="text-4xl font-extrabold">
						{process.env.REACT_APP_TITLE ||
							"Définir le titre dans .env..."}
					</p>
				</div>
				<Nav />
			</header>
			<Outlet />
			<footer></footer>
		</>
	);
};

export default Layout;
