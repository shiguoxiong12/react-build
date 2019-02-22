const initialState={
    name:12344
}
const person =(state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_COLOR':
      return state
       // return { ...state, themeColor: action.themeColor }
      default:
        return state
    }
}
export default person