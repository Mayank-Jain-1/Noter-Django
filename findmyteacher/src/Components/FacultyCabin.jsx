import React from "react";
import Cabin from "./Cabin";

const FacultyCabin = ({ className }) => {
	return (
		<div
			className={`${className} grid gap-1 bg-gray-300 grid-cols-4 grid-rows-3 `}
		>
			<Cabin cabinNumber={"A100"} />
			<Cabin cabinNumber={"A101"} />
			<Cabin cabinNumber={"A102"} />
			<Cabin cabinNumber={"A103"} />
			<Cabin cabinNumber={"A104"} />
			<div className="col-span-3"></div>
			<Cabin cabinNumber={"A105"} />
			<Cabin cabinNumber={"A106"} />
			<Cabin cabinNumber={"A107"} />
			<Cabin cabinNumber={"A108"} />
		</div>
	);
};

export default FacultyCabin;
