import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

import "./Sidebar.css";
import DashbaoardIcon from "../assets/dashboard_icon.svg";
import AddIcon from "../assets/add_icon.svg";
import Avatar from "./Avatar";

const Sidebar = () => {
  const { user } = useAuthContext();

  return (
    <div className='sidebar'>
      <div className='sidebar-content'>
        <div className='user'>
          <Avatar user={user} />
          <p>Hey {user.displayName}</p>
        </div>
        <nav className='links'>
          <ul>
            <li>
              <NavLink exact='true' to='/'>
                <img src={DashbaoardIcon} alt='dashboard icon' />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/create'>
                <img src={AddIcon} alt='add icon' />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
