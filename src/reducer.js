export const initialState = {
  basket: [],
  user: null,
};

function reducer(state, action) {
  let index;
  switch (action.type) {
    case "EMPTY_CART":
      return { ...state, basket: [] };
    case "GET_USER":
      return { ...state, user: action.user };
    case "ADD_TO_BASKET":
      index = state.basket.indexOf(action.item);
      if (index !== -1) {
        // basket[index].count = basket[index].count + 1; // increases by 2 coz reducer will be called 2 times
        return {
          ...state,
          basket: [
            ...state.basket.slice(0, index),
            { ...state.basket[index], count: state.basket[index].count + 1 },
            ...state.basket.slice(index + 1),
          ],
        };
      }
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      index = state.basket.indexOf(action.item);
      if (state.basket[index].count === 1) {
        return {
          ...state,
          basket: [
            ...state.basket.slice(0, index),
            ...state.basket.slice(index + 1),
          ],
        };
      }
      return {
        ...state,
        basket: [
          ...state.basket.slice(0, index),
          { ...state.basket[index], count: state.basket[index].count - 1 },
          ...state.basket.slice(index + 1),
        ],
      };

    default:
      return state;
  }
}
export default reducer;
