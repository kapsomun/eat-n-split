/* eslint-disable react/prop-types */
import AddFriendForm from './AddFriendForm';
import FriendList from './FriendList';

export default function Sidebar({ friends, onAddFriend, onSetActiveFriend,onOpenSplitForm }) {
	return (
		<div className="sidebar">
			<FriendList friends={friends} onSetActiveFriend={onSetActiveFriend} onOpenSplitForm={onOpenSplitForm} />
			<AddFriendForm onAddFriend={onAddFriend} />
		</div>
	);
}
