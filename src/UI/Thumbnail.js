/** @format */

import React from "react";
import { thumbdata } from "../data";

const Thumbnail = ({ setIndex, index }) => {
	const changeProductImage = (id) => {
		setIndex(id);
	};
	return (
		<div
			className="hidden md:flex m-auto "
			style={{ width: "300px", justifyContent: "space-between" }}
		>
			{thumbdata.map((item, i) => {
				return (
					<div
						key={i}
						className={`cursor-pointer thumbnail rounded transition-all duration-100 ease-linear ${
							i === index && "thumb"
						}`}
						onClick={() => changeProductImage(i)}
					>
						<img
							src={item.image}
							alt="thumbnail"
							width="60px"
							height="60px"
							className="rounded"
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Thumbnail;
