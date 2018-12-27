const AppReducers = (state = {}, action) => {
  console.log(state, action)
  switch (action.type) {
    case 'FETCHING':
      return {...state, is_fetching: true, status: "OK"}
    case 'RECEIVED':
      return {...state, is_fetching: false, status: action.status}
    default:
      return state
  }
}

export default AppReducers
