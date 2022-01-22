/** @format */

import React from "react";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import pic from "../images/image-avatar.png";
import menuBtn from "../images/icon-menu.svg";
import { useGlobalContext } from "../Context";
import Cartitems from "./CartItems";

const Nav = () => {
	const { setIsMenuOpened, setShowCart, showCart, cartItems } =
		useGlobalContext();

	return (
		<>
			<nav className="grid grid-cols-3 mt-4 h-14">
				<img
					src={menuBtn}
					className="absolute md:hidden top-7 left-8 cursor-pointer"
					alt="menu-btn"
					onClick={() => setIsMenuOpened(true)}
				/>
				<img src={logo} alt="logo" className="mt-2 ml-24" />
				<ul className="hidden md:flex -ml-12">
					<li className="mx-2 p-2 cursor-pointer">Collections</li>
					<li className="mx-2 p-2 cursor-pointer">Men</li>
					<li className="mx-2 p-2 cursor-pointer">Women</li>
					<li className="mx-2 p-2 cursor-pointer">About</li>
					<li className="mx-2 p-2 cursor-pointer">Contact</li>
				</ul>
				<div className="flex ml-40  w-16 relative">
					<div className="absolute cart-quantity w-4 h-3 grid place-items-center left-2 top-1">
						{cartItems.length}
					</div>
					<img
						src={cart}
						alt="logo"
						className="w-5 h-5 cursor-pointer mt-2"
						title="cart"
						onClick={() => setShowCart(!showCart)}
					/>
					<img
						src={pic}
						alt="logo"
						className="w-10 h-10 ml-4 md:ml-8 profile-img rounded-full cursor-pointer transition-all duration-100 ease-linear"
					/>
				</div>
				<Cartitems />
			</nav>
		</>
	);
};

export default Nav;
