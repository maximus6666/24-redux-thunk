export const fetchUsers = () => {
 return async function fetchUsers (dispatch) {
    const response = await fetch("http://domer.tech:9999/users");
    const users = await response.json();
    const data = users.data;
    dispatch(
      {
        type: "FETCH_USERS",
        payload: data 
      }
    )
  }
}
