import produce from "immer";
import postsConstant from "./postsConstant";

const initialState = {
  posts: [],
};

const postsReducer = produce((state, action) => {
  switch (action.type) {
    case postsConstant.fetch_Posts:
      state = action.data;
      return state;

    default:
      break;
  }
}, initialState);

export default postsReducer;
