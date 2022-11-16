import { Helmet } from "react-helmet-async";
const HomePage = () => {
	return (
		<>
			<Helmet>
				<title>Accueil</title>
				<meta name="description" value="Page d'accueil" />
			</Helmet>
			<main className="">
				<h1>Accueil</h1>
			</main>
		</>
	);
};

export default HomePage;
