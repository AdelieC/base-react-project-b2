import { useEffect, useState } from "react";
import ProductsList from "../lists/ProductsList";

const oldProducts = [
	{
		name: "Carottes",
		price: 1000,
		description: "Carottes non lavées bio...",
	},
	{
		name: "Tomates",
		price: 1200,
		description: "Tomates bio...",
	},
	{
		name: "Courge butternut",
		price: 1000,
		description: "Une délicieuse courge très chère...",
	},
	{
		name: "Carottes",
		price: 1000,
		description: "Carottes non lavées bio...",
		imageSrc:
			"https://images.unsplash.com/photo-1445282768818-728615cc910a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
	},
	{
		name: "Tomates",
		price: 1200,
		description: "Tomates bio...",
	},
	{
		name: "Courge butternut",
		price: 1000,
		description: "Une délicieuse courge très chère...",
	},
];

const CatalogSection = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {}, []);

	if (!products?.length) return <div>Chargement...</div>;
	return (
		<section>
			<ProductsList products={products} />
		</section>
	);
};

export default CatalogSection;
