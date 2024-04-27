import React from 'react';

const Navbar = () => {
	return (
		<nav className="border-b-2 p-4 flex justify-between items-center max-w-5xl mx-auto">
			<div className="flex items-center">
				<div className="text-white text-5xl">Noter</div>
				<div className="text-gray-300 text-sm ml-2"></div>
			</div>
			<div className="flex items-center space-x-7">
				<p>Mayank Jain</p>
				<img
					src="https://img.freepik.com/free-photo/portrait-young-student-with-book-education-day_23-2150980024.jpg"
					alt="User"
					className="h-12 aspect-square rounded-full object-cover 
          cursor-pointer"
				/>
			</div>
		</nav>
	);
};

export default Navbar;
