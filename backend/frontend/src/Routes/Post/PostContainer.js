import React, { useState, useEffect } from "react";
import Comments from "../../components/Comments";
import PostPresenter from "./PostPresenter";
import axios from "axios";

const PostContainer = ({ match, history }) => {
  const ID = parseInt(match.params.id);
  const [post, setPost] = useState([]);
  const [photos, setPhosts] = useState([]);

  useEffect(() => {
    if (isNaN(ID)) {
      return history.push("/");
    }
    const posts = async () => {
      try {
        const {
          data: { post: p },
        } = await axios.get(`/api/v1/posts/${ID}`);
        setPost(p);
        setPhosts(p.photos);
      } catch (error) {
        return history.push("/");
      }
    };
    posts();
  }, [ID, history]);

  return (
    <>
      <PostPresenter post={post} photos={photos}></PostPresenter>
      <Comments></Comments>
    </>
  );
};

export default PostContainer;
