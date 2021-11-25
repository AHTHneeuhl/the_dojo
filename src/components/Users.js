import { useCollection } from "../hooks/useCollection";
import Avatar from "../components/Avatar";

import "./Users.css";

const Users = () => {
  const { error, documents } = useCollection("users");

  return (
    <div className='user-list'>
      <h2>All Users</h2>
      {documents &&
        documents.map((user) => (
          <div key={user.id} className='user-list__item'>
            <span>{user.displayName}</span>
            <Avatar user={user} />
          </div>
        ))}
      {error && <div className='error'>{error}</div>}
    </div>
  );
};

export default Users;
