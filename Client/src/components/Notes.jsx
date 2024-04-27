import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Notes = () => {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		const getNotes = async () => {
			try {
				const res = await axios.get('http://localhost:8000/api/notes/', {
          title: 'new',
          text: 'test'
        });
				// setNotes(res.data);
				console.log(res);
			} catch (err) {
				console.error(err);
			}
		};
		getNotes();
	}, []);

	return (
		<div>
			{notes.map((note) => (
				<div className='border-2 border-black m-5' key={note.id}>
					<h2>{note.title}</h2>
					<p>{note.text}</p>
				</div>
			))}
		</div>
	);
};

export default Notes;
