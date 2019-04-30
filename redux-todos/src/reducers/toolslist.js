const initialState = {
  name: ""
};

const tools = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NAME_TOOLS":
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};

export default tools;
