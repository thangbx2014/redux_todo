import { combineReducers } from "redux";
import filterReducer from "../components/Filters/filterSlice";
import todolistReducer from "../components/TodoList/todoSlice";

// const rootReducer = (state = {}, action) => {
//   return {
//     filter: filterReducer(),
//     todoList: todolistReducer(),
//   };
// };

const rootReducer = combineReducers({
  filter: filterReducer,
  todoList: todolistReducer,
});
export default rootReducer;
