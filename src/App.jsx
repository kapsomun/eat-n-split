/* eslint-disable no-undef */
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import SplitBillForm from './components/SplitBillForm';

const initialFriends = [
	{
		id: 118836,
		name: 'Clark',
		image: 'https://i.pravatar.cc/48?u=118836',
		balance: -7,
	},
	{
		id: 933372,
		name: 'Sarah',
		image: 'https://i.pravatar.cc/48?u=933372',
		balance: 20,
	},
	{
		id: 499476,
		name: 'Anthony',
		image: 'https://i.pravatar.cc/48?u=499476',
		balance: 0,
	},
];

function App() {
	const [friends, setFriends] = useState(initialFriends);
	const [activeFriend, setActiveFriend] = useState({});
	const [isOpenSplitForm, setIsOpenSplitForm] = useState(false);
	function handleAddFriend(friend) {
		setFriends((prev) => [...prev, friend]);
	}
	function handleSetActiveFriend(id) {
		const activeF = friends.find((friend) => friend.id === id);
		setActiveFriend(activeF);
		if (activeF.id !== activeFriend.id) setIsOpenSplitForm(true);

	}

	function setBalance(id, balance) {
		setFriends((prevFriends) =>
			prevFriends.map((f) => (f.id === id ? { ...f, balance: balance } : f)),
		);
	}
	return (
		<div className="app">
			<Sidebar
				friends={friends}
				onAddFriend={handleAddFriend}
				onSetActiveFriend={handleSetActiveFriend}
			/>
			{isOpenSplitForm && (
				<SplitBillForm
					activeFriend={activeFriend}
					setIsOpenSplitForm={setIsOpenSplitForm}
					setBalance={setBalance}
				/>
			)}
		</div>
	);
}

export default App;
