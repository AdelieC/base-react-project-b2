import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getProducts, getProductsByCategory } from "../../utils/api/products";
import ProductsList from "../lists/ProductsList";

const CatalogSection = () => {
	const [products, setProducts] = useState([]);
	const { handleSubmit, register } = useForm();

	const onSubmit = async (data) => {
		const q = data.searchText;
		if (q?.length) {
			const filteredProducts = await getProductsByCategory(
				data.searchText
			);
			setProducts(filteredProducts);
		} else {
			const allProducts = await getProducts();
			setProducts(allProducts);
		}
	};

	useEffect(() => {
		const fetchProducts = async () => {
			const data = await getProducts();
			setProducts(data);
		};
		fetchProducts();
	}, []);

	if (!products?.length) return <div>Chargement...</div>;
	return (
		<section>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type="text"
					name="searchText"
					{...register("searchText")}
				/>
				<button className="btn btn-primary">Rechercher</button>
			</form>

			<button>Rechercher</button>
			<ProductsList products={products} />
		</section>
	);
};

export default CatalogSection;
