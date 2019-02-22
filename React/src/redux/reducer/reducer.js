const defaultState = {
    name:"史国雄",
    age:12
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
    let age12=state.age;
    return Object.assign({}, state, {
           age:++age12
      })
    case 'DELETE':
     age12=state.age;
    return Object.assign({}, state, {
           age:--age12
    })
    default: 
      return state;
  }
};
export default reducer
// const state = reducer(1, {
//   type: 'ADD',
//   payload: 2
// })