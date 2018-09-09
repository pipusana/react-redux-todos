export const loadpage = () => ({
  type: 'LOAD_PAGE',
  list: ['a', 'b', 'c'],
});

export const addTodoList = list => ({
  type: 'ADD_TODO',
  list,
})

export const deleteTodoList = list => ({
  type: 'DELETE_LIST',
  list,
})

export const changeName = name => ({
  type: 'CHANGE_NAME',
  name,
})

export const changeMode = list => ({
  type: 'CHANGE_MODE',
  list,
});

export const clearName = () => ({
  type: 'CLEAR_NAME',
});