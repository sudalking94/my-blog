import React, { useState, useEffect } from "react";
import Comments from "../../components/Comments";
import PostPresenter from "./PostPresenter";
import axios from "axios";

const PostContainer = ({ match }) => {
  const ID = match.params.id;
  const [post, setPost] = useState([]);

  useEffect(() => {
    const posts = async () => {
      const {
        data: { post: p },
      } = await axios.get(`/api/v1/posts/${ID}`);
      setPost(p);
    };
    posts();
  }, [ID]);

  return (
    <>
      <PostPresenter post={post}></PostPresenter>
      <Comments></Comments>
    </>
  );
};

export default PostContainer;
