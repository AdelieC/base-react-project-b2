import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import routes from "./utils/routes/routes.json";
import { PAGES } from "./utils/routes/pages-index";
import { Helmet } from "react-helmet-async";

const renderPageElement = (pageData) => {
	const Element = PAGES[pageData.element];
	return (
		<>
			<Helmet>
				<title>{pageData.title}</title>
				<meta name="description" value={pageData.description} />
			</Helmet>
			<Element />
		</>
	);
};

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{routes.map((route) => {
					return route.path ? (
						<Route
							key={"route-" + route.label}
							path={route.path}
							element={renderPageElement(route)}
						/>
					) : (
						<Route
							key={"route-" + route.label}
							index
							element={renderPageElement(route)}
						/>
					);
				})}
			</Route>
		</Routes>
	);
}

export default App;
