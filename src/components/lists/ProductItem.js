import React from "react";

const ProductItem = ({ product }) => {
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<figure className="px-10 pt-10 h-56 object-cover">
				{product.imageSrc ? (
					<img
						src={product.imageSrc}
						alt="Shoes"
						className="rounded-xl"
					/>
				) : (
					<p>Pas d'image disponible</p>
				)}
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title">{product.name}</h2>
				<p>{product.description}</p>
				<div className="card-actions">
					<button className="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
