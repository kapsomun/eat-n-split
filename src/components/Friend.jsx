/* eslint-disable react/prop-types */
import Button from "./Button";

export default function Friend({ id, name, image, balance }) {
  return (
    <li key={id}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>
        {balance > 0
          ? `${name} owes you ${balance}$`
          : balance < 0
          ? `You owe ${name} ${balance * -1}$`
          : `You and ${name} are even`}
      </p>
      <Button>Select</Button>
    </li>
  );
}
