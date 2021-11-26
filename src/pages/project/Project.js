import { useParams } from "react-router";
import { useDocument } from "../../hooks/useDocument";
import ProjectSummary from "./ProjectSummary";

import "./Project.css";

const Project = () => {
  const { id } = useParams();
  const { error, document } = useDocument("projects", id);

  if (error) {
    return <div className='error'>{error}</div>;
  }

  if (!document) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <div className='project-details'>
      <ProjectSummary project={document} />
    </div>
  );
};

export default Project;
