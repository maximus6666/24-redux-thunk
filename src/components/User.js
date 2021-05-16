export const User = (props) => {
  const {id, name, username, avatar} = props
  return (
    <div className='user-block flex-center'>
      <img className="user-img" src={avatar} alt="avatar"/>
      <div className="user-info flex-center">
        <div>Id: {id}</div>
        <div>Name: {name}</div>
        <div>User name: {username}</div>
      </div>
    </div>
  )
}
