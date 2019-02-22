const initialState={
    name:123
}
const person2 =(state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE':
        return state
       // return { ...state, themeColor: action.themeColor }
      default:
        return state
    }
}
export default person2