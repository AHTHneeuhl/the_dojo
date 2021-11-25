import "./Avatar.css";

const Avatar = ({ user }) => {
  return (
    <div className='avatar'>
      <img src={user.photoURL} alt={user.displayName} />
    </div>
  );
};

export default Avatar;
