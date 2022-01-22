/** @format */

import React, { useState, useEffect } from "react";
import { data } from "../data";
import Thumbnail from "./Thumbnail";

const Products = () => {
	const [index, setIndex] = useState(0);
	const [hovering, setIsHovering] = useState({ left: false, right: false });

	useEffect(() => {
		if (index > data.length - 1) {
			setIndex(0);
		}
		if (index < 0) {
			setIndex(data.length - 1);
		}
	}, [index]);

	return (
		<>
			<section className=" product-image">
				<div className="flex relative overflow-hidden img-bg">
					{data.map((item, i) => {
						let position = "nextSlide";
						if (index === i) {
							position = "activeSlide";
						}

						if (i === index - 1) {
							position = "prevSlide";
						}
						return (
							<article
								key={i}
								className={`${position} slide max-w-full absolute object-contain  md:ml-12`}
							>
								<img
									src={item.image}
									alt="productImage"
									className="product-img"
								/>
							</article>
						);
					})}
					<button
						onClick={() => setIndex(index - 1)}
						onMouseLeave={() =>
							setIsHovering({ left: false, right: false })
						}
						onMouseEnter={() =>
							setIsHovering({ left: true, right: false })
						}
						className="md:hidden z-10 btn w-10 h-10 left-2 absolute top-52 bg-gray-50 p-2 rounded-full grid place-items-center"
					>
						<svg
							width="12"
							height="18"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								className="text-re"
								d="M11 1 3 9l8 8"
								stroke={hovering.left ? "orange" : "#1D2026"}
								strokeWidth="3"
								fill="none"
								fillRule="evenodd"
							/>
						</svg>
					</button>
					<button
						onClick={() => setIndex(index + 1)}
						onMouseLeave={() =>
							setIsHovering({ left: false, right: false })
						}
						onMouseEnter={() =>
							setIsHovering({ left: false, right: true })
						}
						className="md:hidden z-10 btn w-10 h-10 absolute top-52 right-2 bg-gray-50 p-2 rounded-full grid place-items-center"
					>
						<svg
							width="13"
							height="18"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="m2 1 8 8-8 8"
								stroke={hovering.right ? "orange" : "#1D2026"}
								strokeWidth="3"
								fill="none"
								fillRule="evenodd"
							/>
						</svg>
					</button>
				</div>
				<Thumbnail setIndex={setIndex} index={index} />
			</section>
		</>
	);
};

export default Products;
