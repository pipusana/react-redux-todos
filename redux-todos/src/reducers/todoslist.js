const initialState = {
  list: [],
  itemName: '',
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        itemName: action.name
      }
    case 'DELETE_LIST':
      return {
        ...state,
        list: [ ...action.list ]
      }
    case 'CHANGE_MODE':
      return {
        ...state,
        list: [ ...action.list ]
      }
    case 'CLEAR_NAME':
      return {
        ...state,
        itemName: ''
      }
    case 'ADD_TODO':
      return {
        ...state,
        list: [ ...action.list ]
      }
    default:
      return state
  }
}

export default todos