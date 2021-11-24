import { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, thumbnail, password, displayName);
  };

  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];
    console.log(selected);

    if (!selected) {
      setThumbnailError("Please select a File!");
      return;
    }

    if (!selected.type.includes("image")) {
      setThumbnailError("Please select an Image!");
      return;
    }

    if (selected.size > 99999) {
      setThumbnailError("Image file size must be less than 100kb!");
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
    console.log("Picture Updated");
  };

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label>
        <span>Email </span>
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </label>
      <label>
        <span>Password </span>
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </label>
      <label>
        <span>Display Name </span>
        <input
          type='text'
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
          required
        />
      </label>
      <label>
        <span>Display Picture </span>
        <input
          type='file'
          onChange={handleFileChange}
          value={thumbnail}
          required
        />
        {thumbnailError && <div className='error'>{thumbnailError}</div>}
      </label>
      <button className='btn'>SignUp</button>
    </form>
  );
};

export default Signup;
