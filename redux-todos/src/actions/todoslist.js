export const loadpage = () => ({
  type: 'LOAD_PAGE',
  list: ['a', 'b', 'c'],
});

export const updateList = list => ({
  type: 'UPDATE_LIST',
  list,
})

export const changeName = name => ({
  type: 'CHANGE_NAME',
  name,
})

export const clearName = () => ({
  type: 'CLEAR_NAME',
});