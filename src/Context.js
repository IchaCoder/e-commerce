/** @format */

import React, { useState, useContext, useEffect } from "react";
import img from "./images/image-product-1-thumbnail.jpg";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isMenuOpened, setIsMenuOpened] = useState(false);
	const [quantity, setQuantity] = useState(0);
	const [cartItems, setCartItems] = useState([]);
	const [showCart, setShowCart] = useState(false);

	const increaseQuantity = () => {
		setQuantity(quantity + 1);
	};
	const decreaseQuantity = () => {
		setQuantity(quantity - 1);
	};

	useEffect(() => {
		if (quantity < 0) {
			setQuantity(0);
		}
	}, [quantity]);

	const addToCart = () => {
		const newItem = [{ image: img }];
		setCartItems([...newItem]);
		console.log(cartItems);
	};

	return (
		<AppContext.Provider
			value={{
				isMenuOpened,
				setIsMenuOpened,
				quantity,
				setQuantity,
				increaseQuantity,
				decreaseQuantity,
				cartItems,
				setCartItems,
				showCart,
				setShowCart,
				addToCart,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider, AppContext };
