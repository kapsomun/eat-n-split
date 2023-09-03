/* eslint-disable react/prop-types */
import Button from "./Button";

export default function Friend({ friend, onSetActiveFriend, activeFriend }) {
  const isSelected = activeFriend?.id === friend.id;
  return (
    <li key={friend.id}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p
        className={
          friend.balance > 0 ? `green` : friend.balance < 0 ? `red` : ``
        }
      >
        {friend.balance > 0
          ? `${friend.name} owes you ${friend.balance}$`
          : friend.balance < 0
          ? `You owe ${friend.name} ${friend.balance * -1}$`
          : `You and ${friend.name} are even`}
      </p>
      <Button onClick={() => onSetActiveFriend(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
