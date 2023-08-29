/* eslint-disable react/prop-types */
import Button from './Button';

export default function Friend({ id, name, image, balance, onSetActiveFriend }) {
	return (
		<li key={id}>
			<img src={image} alt={name} />
			<h3>{name}</h3>
			<p
				className={
					balance > 0
						? `green`
						: balance < 0
						? `red`
						: ``
				}
			>
				{balance > 0
					? `${name} owes you ${balance}$`
					: balance < 0
					? `You owe ${name} ${balance * -1}$`
					: `You and ${name} are even`}
			</p>
			<Button onClick={() => onSetActiveFriend(id)}>Select</Button>
		</li>
	);
}
