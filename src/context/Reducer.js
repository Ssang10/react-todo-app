export default (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        incompleteTasks: [...state.incompleteTasks, action.payload.task],
      };
    case "move to completed":
      return {
        ...state,
        completedTasks: [
          ...state.completedTasks,
          state.incompleteTasks[action.payload.index],
        ],
        incompleteTasks: state.incompleteTasks.filter((task, index) => {
          if (index !== action.payload.index) return task;
        }),
      };
    case "delete task from incomplete list":
      return {
        ...state,
        incompleteTasks: state.incompleteTasks.filter((task, index) => {
          if (index !== action.payload.index) return task;
        }),
      };
    case "delete complete list":
      return {
        ...state,
        completedTasks: [],
      };
  }
};
