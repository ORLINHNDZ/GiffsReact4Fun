import { useReducer } from "react";


const ACTIONS = {
  UPDATE_KEYWORD: "change_keyword",
  UPDATE_RATING: "change_rating",
};

const ACTIONS_REDUCERS = {
  [ACTIONS.UPDATE_KEYWORD]: (state, action) => ({
    ...state,
    times: state.times + 1,
    keyword: action.payload,
  }),
  [ACTIONS.UPDATE_RATING]: (state, action) => ({
    ...state,
    rating: action.payload,
  }),
};

const REDUCER = (state, action) => {
    const actionReducer = ACTIONS_REDUCERS[action.type];
    return actionReducer ? actionReducer(state, action): state;
}

export default function useForm  ({initialKeyword = '', initialRating = 'g'} = {}) {
    const[state, dispatch] = useReducer(REDUCER, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
    times: 0
})

const {keyword, rating, times} = state

return {
    keyword,
    rating,
    times,
    updateKeyword : keyword => 
    dispatch({type: ACTIONS.UPDATE_KEYWORD, payload: keyword}),
    updateRating : rating => 
    dispatch({type: ACTIONS.UPDATE_RATING, payload: rating})
}
}