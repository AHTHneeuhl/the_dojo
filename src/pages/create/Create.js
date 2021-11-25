import { useEffect, useState } from "react";
import Select from "react-select";
import { useCollection } from "../../hooks/useCollection";

import "./Create.css";

const categories = [
  { value: "development", label: "Development" },
  { value: "design", label: "Design" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
];

const Create = () => {
  const { documents } = useCollection("users");
  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(null);

    if (!category) {
      setFormError("Please select project category!");
      return;
    }

    if (assignedUsers.length < 1) {
      setFormError("Please assign project to users!");
      return;
    }

    console.log(name, details, dueDate, category.value, assignedUsers);
  };

  return (
    <div className='create-form'>
      <h2 className='page-title'>Create New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project Name</span>
          <input
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </label>
        <label>
          <span>Project Details</span>
          <textarea
            type='text'
            onChange={(e) => setDetails(e.target.value)}
            value={details}
            required
          />
        </label>
        <label>
          <span>Project Due Date</span>
          <input
            type='date'
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
            required
          />
        </label>
        <label>
          <span>Project Category</span>
          <Select
            options={categories}
            onChange={(option) => setCategory(option)}
          />
        </label>
        <label>
          <span>Assigned To</span>
          <Select
            options={users}
            onChange={(option) => setAssignedUsers(option)}
            isMulti
          />
        </label>
        <button className='btn'>Add Project</button>
        {formError && <div className='error'>{formError}</div>}
      </form>
    </div>
  );
};

export default Create;
