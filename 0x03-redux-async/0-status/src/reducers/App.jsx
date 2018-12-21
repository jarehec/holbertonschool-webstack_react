const AppReducers = (state = {}, action) => {
  switch (action.type) {
    case 'FETCHING':
      return {...state, is_fetching: true, status: "OK"}
    case 'RECEIVED':
      return {...state, is_fetching: false}
    default:
      return state
  }
}

export default AppReducers
