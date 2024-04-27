import React from 'react';
import NotesList from './components/NoteList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<NotesList />} />
				<Route path="/create" element={<CreateNote />} />
				<Route path="/edit/:id" element={<EditNote />} />
			</Routes>
		</Router>
	);
};

export default App;
