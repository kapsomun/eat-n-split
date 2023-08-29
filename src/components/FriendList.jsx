/* eslint-disable react/prop-types */
import Friend from './Friend';

export default function FriendList({ friends, onSetActiveFriend }) {
	return (
		<ul>
			{friends.map((item) => {
				return <Friend key={item.id} {...item} onSetActiveFriend={onSetActiveFriend} />;
			})}
		</ul>
	);
}
