/** @format */

import React from "react";
import { RiDeleteBin5Line } from "react-icons/all";
import { useGlobalContext } from "../Context";

const Cartitems = () => {
	const { cartItems, setCartItems, quantity, showCart } = useGlobalContext();
	const price = 125.0;

	const deleteItem = (id) => {
		const newCartItem = cartItems.filter((item, i) => id !== i);
		setCartItems(newCartItem);
	};

	if (cartItems.length < 1) {
		return (
			<>
				{showCart && (
					<div className=" cart-items bg-white h-60 w-96 absolute z-20 shadow-lg top-20 right-0">
						<h3 className="font-bold p-4 ">Cart</h3>
						<div className="grid place-items-center mt-14 opacity-60">
							Your cart is empty
						</div>
					</div>
				)}
			</>
		);
	}

	return (
		<>
			{showCart && (
				<div className="cart-items bg-white w-96 absolute z-20 shadow-lg top-20 right-0">
					<h3 className="font-bold p-4 text-xl title">Cart</h3>
					<div className="mt-4">
						{cartItems.map((item, index) => {
							return (
								<div className="cart-grid p-4" key={index}>
									<img
										src={item.image}
										alt="ordered item img"
										className="cart-img rounded-lg"
										width="50px"
										height="50px"
									/>
									<div className="ml-4">
										<h4>Fall limited edition</h4>
										<h4>
											${price} x {quantity}{" "}
											<span className="font-bold text-black">
												{price * quantity}
											</span>
										</h4>
									</div>
									<RiDeleteBin5Line
										onClick={() => deleteItem(index)}
										className="cursor-pointer"
									/>
								</div>
							);
						})}
					</div>
					<button className="add-cart  m-auto text-white h-12 p-2 mt-4 mb-8">
						Checkout
					</button>
				</div>
			)}
		</>
	);
};

export default Cartitems;
