import React, { useState } from "react";

const Cabin = ({ className, facultyId, cabinNumber }) => {
	const [isDetailsOpen, setIsDetailsOpen] = useState(false);

	const faculties = [
    {
      "name": "Dr. Aarushi Gupta",
      "facultyId": 10001,
      "cabinNumber": "A100",
      "timetableId": "TT001",
      "phoneNumber": "+91 1234567890"
    },
    {
      "name": "Dr. Bhuvanesh Singh",
      "facultyId": 10002,
      "cabinNumber": "A101",
      "timetableId": "TT002",
      "phoneNumber": "+91 9876543210"
    },
    {
      "name": "Dr. Chetna Patel",
      "facultyId": 10003,
      "cabinNumber": "A102",
      "timetableId": "TT003",
      "phoneNumber": "+91 9988776655"
    },
    {
      "name": "Dr. Devendra Sharma",
      "facultyId": 10004,
      "cabinNumber": "A103",
      "timetableId": "TT004",
      "phoneNumber": "+91 1122334455"
    },
    {
      "name": "Dr. Eshaan Kapoor",
      "facultyId": 10005,
      "cabinNumber": "A104",
      "timetableId": "TT005",
      "phoneNumber": "+91 6677889900"
    },
    {
      "name": "Dr. Fiza Khan",
      "facultyId": 10006,
      "cabinNumber": "A105",
      "timetableId": "TT006",
      "phoneNumber": "+91 5544332211"
    },
    {
      "name": "Dr. Gaurav Mishra",
      "facultyId": 10007,
      "cabinNumber": "A106",
      "timetableId": "TT007",
      "phoneNumber": "+91 9988776655"
    },
    {
      "name": "Dr. Harleen Kaur",
      "facultyId": 10008,
      "cabinNumber": "A107",
      "timetableId": "TT008",
      "phoneNumber": "+91 2233445566"
    },
    {
      "name": "Dr. Ishaan Verma",
      "facultyId": 10009,
      "cabinNumber": "A108",
      "timetableId": "TT009",
      "phoneNumber": "+91 7788990011"
    }
  ];
  
  


	const thisCabinFaculty = faculties.filter(faculty => faculty.cabinNumber === cabinNumber)[0]


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
						{thisCabinFaculty.cabinNumber}
					</h1>
					<hr className="bg-black my-3" />
					<div className="w-full text-lg text-left">
						<h2>
							<strong >Faculty Name: </strong>{" "}
							<span>{thisCabinFaculty.name}</span>
						</h2>
						<h2>
							<strong >Faculty Id: </strong>{" "}
							<span>{thisCabinFaculty
              .facultyId}</span>
						</h2>
						<h2>
							<strong >Phone Number</strong>{" "}
							<span>{thisCabinFaculty.phoneNumber}</span>
						</h2>
					</div>
				</div>
			</div>
			<div
				onClick={() => setIsDetailsOpen(true)}
				className={`col-span-1 border-2 border-black ${className} text-center flex items-center justify-center text-xs hover:bg-gray-400 duration-300`}
			>
				{cabinNumber}
			</div>
		</>
	);
};

export default Cabin;
