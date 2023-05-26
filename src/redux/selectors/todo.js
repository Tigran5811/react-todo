export const getTodos = (state) => state.todos;
export const getTodosCompleted = (state) => state.todos.filter((item) => item.isCompleted === true);
export const getTodosImportant = (state) => state.todos.filter((item) => item.isImportant === true);
export const getTodosNotCompleted = (state) => state.todos.filter((
  item,
) => item.isCompleted === false);
