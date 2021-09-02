import React, { useState, useEffect } from "react";
import axios from "axios";
import PostPresenter from "./PostPresenter";
import Pagination from "../../components/Pagination";

const PostContainer = () => {
  const [category, setCategory] = useState([]);
  const [post, setPost] = useState([]);
  const [page, setPage] = useState({
    page: "",
    pages: "",
  });
  const categoryHandler = (id = "") => {
    const posts = async () => {
      const { data } = await axios.get(`/api/v1/posts?category=${id}`);
      setPost(data.posts);
      setPage({
        page: data.page,
        pages: data.pages,
      });
    };
    posts();
  };

  const preHandle = async (p) => {
    const { data } = await axios.get(`/api/v1/posts?page=${p}`);
    setPost(data.posts);
    setPage({
      page: data.page,
      pages: data.pages,
    });
  };
  const nextHandle = async (p) => {
    console.log(p);
    const { data } = await axios.get(`/api/v1/posts?page=${p}`);
    setPost(data.posts);
    setPage({
      page: data.page,
      pages: data.pages,
    });
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
      const { data } = await axios.get(`/api/v1/posts/`);
      setPost(data.posts);
      setPage({
        page: data.page,
        pages: data.pages,
      });
    };
    posts();
  }, []);

  return (
    <PostPresenter
      categoryHandler={categoryHandler}
      category={category}
      post={post}
      page={page}
      paginator={
        <>
          <Pagination
            lastPage={page.pages}
            currentPage={page.page}
            nextHandle={(p) => nextHandle(p)}
            preHandle={(p) => preHandle(p)}
          ></Pagination>
        </>
      }
    ></PostPresenter>
  );
};

export default PostContainer;
