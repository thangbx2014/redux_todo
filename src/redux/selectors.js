import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;

export const searchTextSelector = (state) => state.filter.search;

export const statusFilterSelector = (state) => state.filter.status;

export const priorityFilterSelector = (state) => state.filter.priority;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  statusFilterSelector,
  priorityFilterSelector,
  (todoList, searchText, statusFilter, priorityFilter) => {
    return todoList.filter((todo) => {
      if (statusFilter === "All") {
        return priorityFilter.length
          ? todo.name.includes(searchText) &&
              priorityFilter.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (statusFilter === "Completed" ? todo.completed : !todo.completed) &&
        (priorityFilter.length ? priorityFilter.includes(todo.priority) : true)
      );
    });
  }
);
