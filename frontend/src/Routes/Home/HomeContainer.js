import React, { useEffect, useState } from "react";
import HomePresenter from "./HomePresenter";
import axios from "axios";

const HomeContainer = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const posts = async () => {
      const { data } = await axios.get(`/api/v1/posts/`);
      setPost(data.posts);
    };
    posts();
  }, []);
  return <HomePresenter post={post}></HomePresenter>;
};

export default HomeContainer;
