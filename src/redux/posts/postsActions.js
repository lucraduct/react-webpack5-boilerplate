import apiEndPoints from '../../apiEndPoints';
import httpReq from '../../services/http';
import postsConstant from './postsConstant';

export function getPosts() {
  return async function action(dispatch) {
    const { data } = await httpReq({
      method: 'get',
      url: apiEndPoints.FETCH_POSTS,
    });
    return dispatch({ type: postsConstant.fetch_Posts, data });
  };
}
