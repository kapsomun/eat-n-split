/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from './Button';

export default function AddFriendForm({ onAddFriend }) {
	const [name, setName] = useState('');
	const [url, setUrl] = useState('');
	const [isOpen, setIsOpen] = useState(false);
	function handleCreateFriend(e) {
		e.preventDefault();
		const newFriend = {
			id: new Date().toISOString(),
			name: name,
			image: url,
			balance: 0,
		};
		if (!name.length && !url.length) {
			return;
		}
		onAddFriend(newFriend);
		setName('');
		setUrl('');
	}
	return (
		<>
			{isOpen && (
				<form className="form-add-friend" >
					<label>🙍Friend name</label>
					<input value={name} onChange={(e) => setName(e.target.value)} type="text" />

					<label>🖼️ Image URL</label>
					<input value={url} onChange={(e) => setUrl(e.target.value)} type="text" />

					<Button onClick={handleCreateFriend}>Add </Button>
				</form>
			)}
			<Button onClick={() => setIsOpen((prev) => !prev)}>{isOpen ? 'Close' : 'Add Friend'}</Button>
		</>
	);
}
