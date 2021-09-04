import { useEffect } from "react";

const Page = (props) => {
  useEffect(() => {
    document.title = props.title || "J-Blog";
  }, [props.title]);
  return props.children;
};

export default Page;
