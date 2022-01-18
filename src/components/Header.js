import { Route, Routes, Link } from "react-router-dom";

import "./header.css";
import AddTask from "./header-components/AddTask";

const Header = () => {
  return (
    <nav className="nav-bar">
      <Routes>
        <Route path="/" element={<AddTask />} />
        <Route path="/completed-list" element={<h2>Completed tasks</h2>} />
      </Routes>

      <div className="nav-links">
        <Routes>
          <Route
            path="/completed-list"
            element={
              <Link to="/" className="link">
                Incomplete Tasks
              </Link>
            }
          />
          <Route
            path="/"
            element={
              <Link to="/completed-list" className="link">
                Completed Tasks
              </Link>
            }
          />
        </Routes>
      </div>
    </nav>
  );
};

export default Header;
