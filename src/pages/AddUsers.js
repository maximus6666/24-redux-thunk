import { useState } from "react"
import { useDispatch } from "react-redux";

export const AddUsers = () => {
  const [userName, setUserName] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const dispatch = useDispatch();

  const addUser = () => {
    return async function addUser (dispatch) {
      try {
        const data = {
          name: userName,
          username: userNickname,
          avatar: userAvatar
        }
        const {name, username} = data;

        if (name.length > 2 
            && username.length > 2 
            && username.startsWith("@")) {
          const response = await fetch("http://domer.tech:9999/users", 
          {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
          });
        const user = await response.json();
        console.log('Успіх:', JSON.stringify(user));
        dispatch(
          {
            type: "ADD_USER",
            payload: user 
          }
        )
        setUserName("");
        setUserNickname("");
        setUserAvatar("");

      } else {
        alert ("Enter correct fields");
      } 
      
      } catch (error) {
        console.error('Ошибка:', error);
      }
     }
   }

  return (
    <div className='form flex-center'>
      <div className="input-wrapper">
        <label>Name:</label>
        <input 
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          type="text"
          placeholder="Enter user name"
        >
        </input>
      </div>
      <div className="input-wrapper">
        <label>User nickname: </label>
        <input 
          value={userNickname}
          onChange={(event) => setUserNickname(event.target.value)}
          type="text"
          placeholder="Enter nickname (starts with @)"
        >
        </input>
      </div>
      <div className="input-wrapper">
        <label>User avatar: </label>
        <input 
          value={userAvatar}
          onChange={(event) => setUserAvatar(event.target.value)}
          type="text"
          placeholder="Enter image src"
        >
        </input>
      </div>
      <button onClick={() => {dispatch(addUser())}} className='add-user-btn'>Add user</button>
    </div>
  )
}
