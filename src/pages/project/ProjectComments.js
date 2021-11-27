import { useState } from "react";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import Avatar from "../../components/Avatar";

const ProjectComments = ({ project }) => {
  const { updateDocument, response } = useFirestore("projects");
  const [newComment, setNewComment] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };

    await updateDocument(project.id, {
      comments: [...project.comments, commentToAdd],
    });

    if (!response.error) {
      setNewComment("");
    }
  };

  return (
    <div className='project-comment'>
      <h4>Project Comments</h4>
      <ul>
        {project.comments.length > 0 &&
          project.comments.map((comment) => (
            <li key={comment.id}>
              <div className='comment-author'>
                <Avatar user={comment} />
              </div>
              <div className='comment-date'>
                <p>date here</p>
              </div>
              <div className='comment-content'>
                <p>{comment.content}</p>
              </div>
            </li>
          ))}
      </ul>
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
