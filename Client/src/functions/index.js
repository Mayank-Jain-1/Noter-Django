export const formatDate = (dateString) => {
	const date = new Date(dateString);
	const options = { month: 'long', day: 'numeric', year: 'numeric' };
	return date.toLocaleDateString('en-US', options);
};

export const formatDateTime = (dateTimeString) => {
	const dateTime = new Date(dateTimeString);

	const options = {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
	};

	return dateTime.toLocaleDateString('en-US', options);
};

export const handleTextareaResize = (e) => {
	e.target.style.height = 'auto';
	e.target.style.height = e.target.scrollHeight + 'px';
};
