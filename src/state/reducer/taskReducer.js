import {
  ADDTASK,
  DELETETASK,
  EDITTASK,
  FILTERTASKS,
  TOGGLEDONE,
} from "../const";

const initialState = {
  tasks: [
    { description: "complete the painting", isDone: false },
    { description: "submit redux project", isDone: true },
    { description: "do homework", isDone: false },
    { description: "watch sex education 3", isDone: false },
  ],
  filter: "none",
};

const taskReducer = (
  state = initialState,
  { type, payload, position, newTask }
) => {
  switch (type) {
    case DELETETASK:
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => index !== payload),
      };
    case ADDTASK:
      return { ...state, tasks: [...state.tasks, payload] };
    case TOGGLEDONE:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case FILTERTASKS:
      return { ...state, filter: payload };
    case EDITTASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === position ? { ...task, description: newTask } : task
        ),
      };
    default:
      return state;
  }
};
export default taskReducer;
