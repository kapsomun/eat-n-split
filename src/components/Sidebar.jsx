/* eslint-disable react/prop-types */
import AddFriendForm from "./AddFriendForm"
import Friend from "./Friend"

export default function Sidebar({friends}) {
  return (
    <div className="sidebar">
      <ul>
      {friends.map(item => {
        return <Friend key={item.id} {...item}/>
      })}
    </ul>
    <AddFriendForm/>
    </div>
  )
}
