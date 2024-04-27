import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Note from './Note';
import { toast } from 'react-toastify';

const NotesList = () => {
	const [notes, setNotes] = useState([]);

	const [search, setSearch] = useState('');

	const getNotes = async () => {
		try {
			const res = await axios.get('http://localhost:8000/api/notes/');
			setNotes(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	const deleteFromNotes = async (id) => {
		try {
			const res = await axios.delete('http://localhost:8000/api/notes/' + id);
			toast.success('Successfuly deleted!', { theme: 'dark', autoClose: 1500 });
			console.log(res);
		} catch (err) {
			console.log(err);
			toast.error('Error Deleting', { theme: 'dark', autoClose: 1500 });
		} finally {
			getNotes();
		}
	};

	useEffect(() => {
		getNotes();
	}, []);

	return (
		<div className="max-w-5xl mx-auto p-8 space-y-5">
			<div className="flex space-x-10 justify-between">
				<input
					type="text"
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
					}}
					placeholder="Search..."
					className="bg-transparent text-white py-1 px-3  focus:outline-none  border-b border-b-gray-400 w-full"
				/>
				<Link
					to="/create"
					className="block bg-white text-lightBlack rounded-lg px-5 py-3 shrink-0 hover:bg-cyan-400 hover:text-black duration-300"
				>
					Add Note +
				</Link>
			</div>
			{notes
				.filter((note) => {
					if (!search) return true;
					return note.title.toLowerCase().includes(search.toLowerCase());
				})
				.sort((a, b) => Date(b.updated) - Date(a.updated))
				.reverse()
				.map((note) => (
					<Note
						key={note.id}
						id={note.id}
						title={note.title}
						dateModified={note.updated}
						onDelete={deleteFromNotes}
					/>
				))}
		</div>
	);
};

export default NotesList;
