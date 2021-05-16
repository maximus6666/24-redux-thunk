import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../actions";
import { User } from "../components/User";


export const Users = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {dispatch(fetchUsers())}, [dispatch]);

  return (
    <div className="users-wrapper flex-center">
      {
        users.map((user) => <User {...user}/>)
      }
    </div>
  )
}
