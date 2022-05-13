import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import PropType from "prop-types";

import { getPosts } from "@/redux/posts/postsActions";

import Logo from "@/components/Logo.jsx";

const Post = ({ title, body }, key) => (
  <div key={key}>
    <h2>{title}</h2>
    <p>{body}</p>
  </div>
);
Post.propTypes = {
  title: PropType.string,
  body: PropType.string,
};

const Posts = () => {
  const posts = useSelector((state) => state.posts, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, getPosts]);

  return (
    <>
      <Logo />
      <div className="posts-header">
        <h1>Posts</h1>
        <div className="space-y-4">{posts?.length > 0 && posts.map(Post)}</div>
      </div>
    </>
  );
};

export default Posts;
