import React from 'react';
import { useParams } from 'react-router-dom';

const EditNote = () => {
	const { id } = useParams();
	console.log(id);

	return <div>EditNote</div>;
};

export default EditNote;
