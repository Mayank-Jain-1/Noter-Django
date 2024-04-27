import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { formatDate, formatDateTime, handleTextareaResize } from '../functions';
import { toast } from 'react-toastify';

const EditNote = () => {
	const { id } = useParams();
	const [initial, setInitial] = useState({});
	const [noteDetails, setNoteDetails] = useState({
		title: '',
		content: '',
		createdAt: '',
		updatedAt: '',
	});
	const navigate = useNavigate();

	useEffect(() => {
		const fetchNoteDetails = async () => {
			try {
				const response = await axios.get(
					`http://localhost:8000/api/notes/${id}`
				);
				const { title, content, created, updated } = response.data;
				setInitial({ title, content });
				setNoteDetails({
					title,
					content,
					createdAt: formatDateTime(created),
					updatedAt: formatDateTime(updated),
				});
			} catch (error) {
				console.error('Error fetching note details:', error);
				toast.error('Error Fetching Note', { theme: 'dark', autoClose: 1500 });
				navigate('/', { replace: true });
			}
		};

		fetchNoteDetails();
	}, [id]);

	const handleUpdate = async (e) => {
		e.preventDefault();

		try {
			if (
				noteDetails.title === initial.title &&
				noteDetails.content === initial.content
			) {
				toast.info('No Changes Made', { theme: 'dark', autoClose: 1500 });
				return;
			}
			if (!noteDetails.title || !noteDetails.content) {
				toast.error('Cannot be empty', { theme: 'dark', autoClose: 1500 });
				return;
			}
			const response = await axios.put(
				`http://localhost:8000/api/notes/${id}`,
				{
					title: noteDetails.title,
					content: noteDetails.content,
				}
			);
			console.log('Note updated successfully:', response.data);
			toast.success('Note Updated Successfuly!', {
				theme: 'dark',
				autoClose: 1500,
			});
			setTimeout(() => {
				navigate('/', { replace: true });
			}, 2000); // Redirect after 2 seconds
		} catch (error) {
			console.error('Error updating note:', error);
			toast.error('Error Updating Note', { theme: 'dark', autoClose: 1500 });
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNoteDetails({
			...noteDetails,
			[name]: value,
		});
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
					onClick={handleUpdate}
					className="bg-white text-lightBlack rounded-lg px-5 py-3 hover:bg-cyan-400 hover:text-black duration-300"
				>
					Update
				</button>
			</div>

			<div className="text-xs text-gray-600 flex justify-between">
				<p>Created: {noteDetails.createdAt}</p>
				<p>Updated: {noteDetails.updatedAt}</p>
			</div>
			<form onSubmit={handleUpdate} className="space-y-4">
				<div>
					<input
						type="text"
						name="title"
						value={noteDetails.title}
						onChange={handleInputChange}
						onInput={handleTextareaResize}
						className="bg-transparent text-white py-5 px-3 focus:outline-none border-b text-4xl font-bold border-b-gray-400 w-full font-sans overflow-y-hidden "
						placeholder="Enter title..."
						required
					/>
				</div>
				<div>
					<textarea
						name="content"
						value={noteDetails.content}
						onChange={handleInputChange}
						onInput={handleTextareaResize}
						className="bg-transparent text-white py-2 px-3 focus:outline-none border-b text-lg font-sans border-b-gray-400 w-full h-40 resize-none min-h-[350px]"
						placeholder="Enter content..."
						required
					/>
				</div>
			</form>
		</div>
	);
};

export default EditNote;
