import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";

const AddTask = () => {
  const [task, setTask] = useState("");

  const { dispatch } = useContext(GlobalContext);

  const handleAdd = (e) => {
    e.preventDefault();
    if (task) {
      dispatch({ type: "add", payload: { task } });
      setTask("");
    }
  };

  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="add-task">
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
