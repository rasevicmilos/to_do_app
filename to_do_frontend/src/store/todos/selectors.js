export function todoByIdSelector(state) {
    return function(id) {
      return state.todos.find(todo => todo.id === parseInt(id, 10));
    };
}