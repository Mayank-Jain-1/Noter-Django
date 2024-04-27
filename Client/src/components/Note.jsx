import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Note = ({ id, title, dateModified, onDelete }) => {
	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const options = { month: 'long', day: 'numeric', year: 'numeric' };
		return date.toLocaleDateString('en-US', options);
	};

	const formattedDate = formatDate(dateModified);

	const availableColors = [
		'#80deea',
		'#82ccc5',
		'#ffab91',
		'#e6ee9b',
		'#cf93d9',
		'#ffcc80',
		'#f48fb1',
	];

	const bgColor = availableColors[id % availableColors.length];

	// State to manage the visibility of the delete confirmation modal
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	const handleDelete = () => {
		setShowDeleteModal(true);
	};

	const confirmDelete = () => {
    onDelete(id)
		setShowDeleteModal(false);
	};

	const cancelDelete = () => {
		setShowDeleteModal(false);
	};

	return (
		<div>
			<Link
				style={{ background: bgColor }}
				className="rounded-lg p-4 block hover:scale-[101%] duration-100"
			>
				<h2 className="text-2xl text-lightBlack font-bold">{title}</h2>
				<div className="flex items-center justify-between w-full">
					<p className="text-xs text-gray-600">{formattedDate}</p>
					<button
						className="bg-neutral-100 border border-black hover:bg-red-600 text-black py-2 px-4 rounded-lg text-sm duration-200"
						onClick={handleDelete}
					>
						Delete
					</button>
				</div>
			</Link>

			{showDeleteModal && (
				<div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
					<div className="bg-white p-6 rounded-lg text-lightBlack">
						<p className="text-lg mb-4">
							Are you sure you want to delete this note?
						</p>
						<div className="flex justify-start">
							<button
								className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg mr-4"
								onClick={confirmDelete}
							>
								Yes, Delete
							</button>
							<button
								className="bg-gray-400 hover:bg-gray-500 text-gray-800 py-2 px-4 rounded-lg"
								onClick={cancelDelete}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Note;
