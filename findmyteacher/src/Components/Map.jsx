import React from "react";
import FacultyCabin from "./FacultyCabin";
import ClassRoom from "./ClassRoom";
import Auditorium from "./Auditorium";

const Map = () => {
	return (
		<div className="text-center p-2 w-full mt-20 ">
			<h1 className="text-5xl my-10 text-white font-semibold">Academic Block</h1>
			<div className="flex items-center justify-center w-full h-full ">
				<div className="bg-gray-300 grid w-[500px] h-[500px] gap-1 grid-cols-3 p-1">
					<FacultyCabin className="col-span-1" />
					<div className=" col-span-1"></div>
					<Auditorium />
					<ClassRoom className="bg-red-300" classNumber={"AB104"} 
					/>
					<div className=" col-span-1"></div>
					<ClassRoom className={"bg-green-300"} classNumber={"AB103"} />
					<div className=" col-span-1"></div>
					<ClassRoom className={"bg-red-300"} classNumber={"AB102"} />
				</div>
			</div>
		</div>
	);
};

export default Map;
