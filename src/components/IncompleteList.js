import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { BsCheckCircle } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

import "./list.css";

const IncompleteList = () => {
  const { dispatch, incompleteTasks } = useContext(GlobalContext);

  return (
    <main className="main">
      {incompleteTasks.map((task, index) => (
        <div key={index} className="task-row-incomplete">
          <BsCheckCircle
            className="icon"
            onClick={() =>
              dispatch({ type: "move to completed", payload: { index } })
            }
          />
          <p>{task}</p>
          <MdDeleteForever
            className="icon del"
            onClick={() =>
              dispatch({
                type: "delete task from incomplete list",
                payload: { index },
              })
            }
          />
        </div>
      ))}
    </main>
  );
};

export default IncompleteList;
