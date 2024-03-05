import React, { useState } from "react";

const ClassRoom = ({ className, classId, classNumber }) => {
	const [isDetailsOpen, setIsDetailsOpen] = useState(false);
	const classDesc = [
		{
			classId: "001",
			className: "Mathematics",
			classNumber: "AB103",
			classTime: "9:00 AM - 10:30 AM",
			classLocation: "Room 101",
			classCapacity: "30",
			isFree: true,
		},
		{
			classId: "002",
			className: "Physics",
			classNumber: "AB102",
			classTime: "11:00 AM - 12:30 PM",
			classLocation: "Room 102",
			classCapacity: "25",
			isFree: false,
		},
		{
			classId: "003",
			className: "Chemistry",
			classNumber: "AB104",
			classTime: "2:00 PM - 3:30 PM",
			classLocation: "Room 103",
			classCapacity: "20",
			isFree: false,
		},
	];

	const thisClassDetails = classDesc.filter(
		(clas) => clas.classNumber === classNumber
	)[0];

	console.log(thisClassDetails);

	return (
		<>
			<div
				onClick={() => {
					console.log("clicked");
					setIsDetailsOpen(false);
				}}
				className={`fixed left-0 z-50 top-0 h-full w-full flex justify-center items-center bg-neutral-400 bg-opacity-20 ${
					!isDetailsOpen && "hidden"
				}`}
			>
				<div className="w-1/2 bg-white rounded-2xl px-5 py-10 ">
					<h1 className="text-center text-2xl font-bold">
						{thisClassDetails.classNumber}
					</h1>
					<hr className="bg-black my-3" />
					<div className="w-full text-lg text-left">
						<h2>
							<strong>Class Id: </strong>{" "}
							<span>{thisClassDetails.classId}</span>
						</h2>
						<h2>
							<strong>Class Name </strong>{" "}
							<span>{thisClassDetails.className}</span>
						</h2>
						<h2>
							<strong>Class Time:</strong>{" "}
							<span>{thisClassDetails.classTime}</span>
						</h2>
						<h2>
							<strong>Is free (Can book)</strong>{" "}
							<span
								className={`${
									thisClassDetails.isFree ? "text-green-600" : "text-red-600"
								} font-semibold`}
							>
								{thisClassDetails.isFree ? "Free" : "Not Free"}
							</span>
						</h2>
					</div>
						{thisClassDetails.isFree && (
							<button className="bg-green-400 text-white rounded-lg p-2 self-start mt-6">
								Book Slot
							</button>
						)}
				</div>
			</div>
			<div
				onClick={() => {
					setIsDetailsOpen(true);
				}}
				className={` ${className} flex items-center justify-center text-xl border-2 border-black hover:bg-gray-400 duration-300`}
			>
				{classNumber}
			</div>
		</>
	);
};

export default ClassRoom;
