import { useState } from "react";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";

const ProjectComments = () => {
  const [newComment, setNewComment] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };

    console.log(commentToAdd);
  };

  return (
    <div className='project-comment'>
      <h4>Project Comments</h4>
      <form className='comments' onSubmit={handleSubmit}>
        <label>
          <span>Write Comment</span>
          <textarea
            type='text'
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
            required
          />
        </label>
        <button className='btn'>Comment</button>
      </form>
    </div>
  );
};

export default ProjectComments;
