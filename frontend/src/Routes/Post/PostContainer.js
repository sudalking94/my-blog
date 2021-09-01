import React from "react";
import axios from "axios";
import PostPresenter from "./PostPresenter";

const PostContainer = () => {
  const categories = async () => {
    const { data } = await axios.get();
  };

  const categoryHandler = () => {
    console.log("categoryHandler");
  };
  return <PostPresenter categoryHandler={categoryHandler}></PostPresenter>;
};

export default PostContainer;
