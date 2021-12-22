export default function manageTodo(state = {
  todos: [],
}, action) {

  console.log("reducer received this action:", action);
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload.text]
    default:
      return state;
  }
}
