import React from "react";
import ProductItem from "./ProductItem";

const placeholder =
	"https://images.unsplash.com/photo-1445282768818-728615cc910a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const ProductsList = ({ products }) => {
	return (
		<ul className="flex gap-8 flex-wrap justify-around">
			{products.map((product) => {
				return <ProductItem product={product} />;
			})}
		</ul>
	);
};

export default ProductsList;
