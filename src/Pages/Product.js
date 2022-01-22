/** @format */

import React from "react";
import Nav from "../UI/Nav";
import Productinfo from "../UI/ProductInfo";
import Products from "../UI/Products";

const Product = () => {
	return (
		<div>
			<Nav />
			<div className="avatar">
				<Products />
				<Productinfo />
			</div>
		</div>
	);
};

export default Product;
