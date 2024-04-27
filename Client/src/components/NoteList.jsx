import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Note from './Note';

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
			console.log(res);
		} catch (err) {
			console.log(err);
		} finally {
			getNotes();
		}
	};

	useEffect(() => {
		getNotes();
	}, []);

	return (
		<div className="max-w-5xl mx-auto p-8 space-y-5">
			<div className="relative ">
				<input
					type="text"
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
					}}
					placeholder="Search..."
					className="bg-transparent text-white py-1 px-3  focus:outline-none w-full border-b border-b-gray-400"
				/>
			</div>
			{notes
				.filter((note) => {
					if (!search) return true;
					return note.title.toLowerCase().includes(search.toLowerCase());
				})
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
