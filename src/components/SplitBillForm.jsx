/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from './Button';

export default function SplitBillForm({ activeFriend, setBalance }) {
	const [bill, setBill] = useState('');
	const [yourExpense, setYourExpense] = useState('');
	const [friendExpense, setFriendExpense] = useState('');
	const [whoPays, setWhoPays] = useState('you');
	const { id, name, balance } = activeFriend;

	function handleChangeBalanceFriend(e) {
		e.preventDefault();
		let expense;
		if (whoPays === name) {
			expense = balance + -(parseFloat(bill) - parseFloat(friendExpense));
		} else {
			expense = balance + parseFloat(bill) - parseFloat(yourExpense);
		}
		console.log(expense);
		setBalance(id, expense);

	}

	return (
		<form className="form-split-bill">
			<label>💰 Bill value</label>
			<input type="text" value={bill} onChange={(e) => setBill(e.target.value)} />

			<label>🙆‍♂️Your expense</label>
			<input type="text" value={yourExpense} onChange={(e) => setYourExpense(e.target.value)} />

			<label>🤼 {name} expense</label>
			<input type="text" value={friendExpense} onChange={(e) => setFriendExpense(e.target.value)} />

			<label>👀 Who is paying the bill ?</label>
			<select value={whoPays} onChange={(e) => setWhoPays(e.target.value)}>
				<option value="you">You</option>
				<option value={name}>{name ? name : 'Friend'}</option>
			</select>

			<Button onClick={handleChangeBalanceFriend}>Split bill</Button>
		</form>
	);
}
