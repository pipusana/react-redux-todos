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
    case 'UPDATE_LIST':
      return {
        ...state,
        list: [ ...action.list ]
      }
    case 'CLEAR_NAME':
      return {
        ...state,
        itemName: ''
      }
    default:
      return state
  }
}

export default todos