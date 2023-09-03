/* eslint-disable no-undef */
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import SplitBillForm from "./components/SplitBillForm";
import FriendList from "./components/FriendList";
import AddFriendForm from "./components/AddFriendForm";
import Friend from "./components/Friend";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [activeFriend, setActiveFriend] = useState(null);
  function handleAddFriend(friend) {
    setFriends((prev) => [...prev, friend]);
  }
  function handleSetActiveFriend(friend) {
    setActiveFriend((cur) => (cur?.id === friend.id ? null : friend));
    
  }

  function setBalance(id, balance) {
    setFriends((prevFriends) =>
      prevFriends.map((f) => (f.id === id ? { ...f, balance: balance } : f))
    );
  }
  return (
    <div className="app">
      <Sidebar>
        <FriendList>
          {friends.map((friend) => {
            return (
              <Friend
                key={friend.id}
								friend = {friend}
								activeFriend={activeFriend}
                onSetActiveFriend={handleSetActiveFriend}
              />
            );
          })}
        </FriendList>

        <AddFriendForm onAddFriend={handleAddFriend} />
      </Sidebar>

      {activeFriend && (
        <SplitBillForm
          key={activeFriend.id}
          activeFriend={activeFriend}
          setBalance={setBalance}
        />
      )}
    </div>
  );
}

export default App;
