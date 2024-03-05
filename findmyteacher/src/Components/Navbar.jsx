import React, { useEffect, useState } from "react";
import LogoBlue from "../assets/FullLogoBlue.png";
import LogoWhite from "../assets/FullLogoWhite.png";
import AWhite from "../assets/AWhite.png";
import ABlue from "../assets/ABlue.png";

const Navbar = () => {
	const [isTop, setIsTop] = useState(true);

	const updateIsTop = () => {
		// if (window.scrollY > 20) setIsTop(false);
		// else setIsTop(true);
	};
	useEffect(() => {
		window.addEventListener("scroll", updateIsTop);

		return () => {
			window.removeEventListener("scroll", updateIsTop);
		};
	}, []);

	return (
		<div
			className="w-full  flex flex-row justify-center top-0 fixed z-[100] duration-500 bg-white"
			// className={`w-full  flex flex-row justify-center top-0 fixed z-30 duration-500 ${
			// 	isTop
			// 		? "bg-transparent text-white md:py-5"
			// 		: "bg-white text-black font-medium"
			// }`}
		>
			<div className="flex flex-row items-center justify-between p-5 w-full max-w-[1440px] shrink-0">
				<div className="shrink-0">
					{isTop ? (
						<>
							<img src={ABlue} alt="" className="w-[60px] md:hidden" />
							<img
								src={LogoBlue}
								alt=""
								className={`w-[100px] hidden md:block`}
							/>
						</>
					) : (
						<>
							<img src={ABlue} alt="" className="w-[60px] md:hidden" />
							<img
								src={LogoWhite}
								alt=""
								className={`w-[100px] hidden md:block`}
							/>
						</>
					)}
				</div>
				<ul className="flex flex-row items-center h-full space-x-5 md:space-x-10 px-5 md:px-10 font-montserrat text-xs sm:text-base ">
					<li>
						<a href="#Home">Home</a>
					</li>
					<li>
						<a href="#About">Admin Login</a>
					</li>
					<li>
						<a href="#Team">Student Login</a>
					</li>
					<li>
						<a href="#Contact">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
