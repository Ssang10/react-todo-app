import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import "./list.css";

const CompletedList = () => {
  const { completedTasks, dispatch } = useContext(GlobalContext);

  return (
    <main className="main main-completed">
      <div>
        {completedTasks.map((task, index) => (
          <div key={index} className="task-row-completed">
            <p>{task}</p>
          </div>
        ))}
      </div>
      <div className="footer">
        <button onClick={() => dispatch({ type: "delete complete list" })}>
          Delete All
        </button>
      </div>
    </main>
  );
};

export default CompletedList;
