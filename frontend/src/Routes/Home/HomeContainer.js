import React, { useEffect, useState } from "react";
import HomePresenter from "./HomePresenter";
import axios from "axios";

const HomeContainer = () => {
  const [post, setPost] = useState([]);
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  const categoryHandler = (id = "") => {
    setCategoryId(id);
    if (id === "") {
      const posts = async () => {
        const { data } = await axios.get(`/api/v1/posts/mainposts/`);
        setPost(data.posts);
      };
      posts();
    } else {
      const posts = async () => {
        const { data } = await axios.get(
          `/api/v1/posts/mainposts?category=${id}`
        );
        setPost(data.posts);
      };
      posts();
    }
  };

  useEffect(() => {
    const categories = async () => {
      const {
        data: { categories: categoryJson },
      } = await axios.get(`/api/v1/categories/`);
      setCategory(categoryJson);
    };
    categories();
    const posts = async () => {
      const { data } = await axios.get(`/api/v1/posts/mainposts/`);
      setPost(data.posts);
    };
    posts();
  }, []);
  return (
    <HomePresenter
      post={post}
      category={category}
      categoryHandler={categoryHandler}
      categoryId={categoryId}
    ></HomePresenter>
  );
};

export default HomeContainer;
