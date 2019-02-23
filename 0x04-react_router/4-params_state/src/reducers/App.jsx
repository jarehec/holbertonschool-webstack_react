const AppReducers = (state = {}, action = []) => {
  switch (action.type) {
    case 'INIT_CURRICULUMS':
      return {
        ...state,
        curriculums: action.curriculums
      }
    default:
      return state
  }
}

export default AppReducers
