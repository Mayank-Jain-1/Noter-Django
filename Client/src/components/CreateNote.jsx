import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { handleTextareaResize } from '../functions';
import { toast } from 'react-toastify';

const CreateNote = () => {
	const navigate = useNavigate();
	const [noteDetails, setNoteDetails] = useState({
		title: '',
		content: '',
	});

	const handleDetailChange = (e) => {
		setNoteDetails({
			...noteDetails,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			if (!noteDetails.title || !noteDetails.content) {
				toast.error('Cannot be empty', { theme: 'dark', autoClose: 1500 });
				return;
			}
			const res = await axios.post(
				'http://localhost:8000/api/notes/',
				noteDetails
			);
			console.log('created successfully', res.data);
			toast.success('Note Created', { autoClose: 1500, theme: 'dark' });
			setTimeout(() => {
				navigate('/', { replace: true });
			}, 2000);
		} catch (err) {
			console.log(err);
			toast.error('Error, Try again', { theme: 'dark', autoClose: 1500 });
		}
	};

	return (
		<div className="max-w-2xl mx-auto p-8">
			<div className="flex items-center justify-between mb-5">
				<Link
					to="/"
					className="block bg-white text-lightBlack rounded-lg px-5 py-3 hover:bg-cyan-400 hover:text-black duration-300"
				>
					Back to Notes
				</Link>
				<button
					type="submit"
					onClick={handleSubmit}
					className="bg-white text-lightBlack rounded-lg px-5 py-3 hover:bg-cyan-400 hover:text-black duration-300"
				>
					Create
				</button>
			</div>

			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<textarea
						type="text"
						placeholder="Your Title"
						id="title"
						name="title"
						value={noteDetails.title}
						rows={1}
						onChange={handleDetailChange}
						onInput={handleTextareaResize}
						className="bg-transparent text-white py-5 px-3 focus:outline-none border-b text-4xl font-bold border-b-gray-400 w-full font-sans overflow-y-hidden"
						required
					/>
				</div>
				<div>
					<textarea
						id="content"
						name="content"
						placeholder="Your awesome story here"
						value={noteDetails.content}
						onChange={handleDetailChange}
						onInput={handleTextareaResize}
						className="bg-transparent text-white py-2 px-3 focus:outline-none border-b text-lg font-sans border-b-gray-400 w-full h-40 resize-none min-h-[350px]"
						required
					/>
				</div>
			</form>
		</div>
	);
};

export default CreateNote;
