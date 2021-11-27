import { useState } from "react";
import ProjectList from "../../components/ProjectList";
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
import Filter from "./Filter";

import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("projects");
  const [currentFilter, setCurrentFilter] = useState("All");

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  const filteredProjects = documents
    ? documents.filter((document) => {
        switch (currentFilter) {
          case "All":
            return true;
          case "Mine":
            let assignedToMe = false;
            document.assignedUsersList.forEach((u) => {
              if (user.uid === u.id) {
                assignedToMe = true;
              }
            });
            return assignedToMe;
          case "Development":
          case "Design":
          case "Marketing":
          case "Sales":
            return document.category === currentFilter.toLocaleLowerCase();
          default:
            return true;
        }
      })
    : null;

  return (
    <div className='dashboard'>
      <h2 className='page-title'>Dashboard</h2>
      {error && <p className='error'>{error}</p>}
      {documents && (
        <Filter currentFilter={currentFilter} changeFilter={changeFilter} />
      )}
      {filteredProjects && <ProjectList projects={filteredProjects} />}
    </div>
  );
};

export default Dashboard;
