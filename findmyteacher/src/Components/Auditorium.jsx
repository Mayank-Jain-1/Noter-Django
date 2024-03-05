import React from "react";
import Poster from "../assets/poster.png";

const Auditorium = ({ className }) => {
	return (
		<div
			className={`${className} relative  cols-span-1 row-span-2 flex items-center justify-center text-xl border-2 border-black `}
		>
			<img src={Poster} alt="" className="h-full object-cover absolute left-0 top-0 opacity-60 hover:opacity-100 hover:z-30 duration-300" />
			<h1 className="z-20 font-semibold">Auditorium</h1>

		</div>
	);
};

export default Auditorium;
