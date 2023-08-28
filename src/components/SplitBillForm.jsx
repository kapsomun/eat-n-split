import Button from "./Button";

export default function SplitBillForm() {
  return (
    <form className="form-split-bill">
       <label>💰💰 Bill value</label>
      <input type="text" />

      <label>🙆‍♂️Your expense</label>
      <input type="text" />

      <label>🤼 X expense</label>
      <input type="text" />

      <Button>Split bill</Button>
    </form>
  )
}
