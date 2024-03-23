"use client";
import { useState } from "react";
import { Post } from "@/app/types/index";

const Post = (props: Post) => {
  const [isActive, setIsActive] = useState(false);
  const { title, content, created, author } = props;
  const date = new Date(created).toDateString();
  const toggle = () => setIsActive(!isActive);

  return (
    <li className="post">
      <h3>{title}</h3>
      <div className="details">
        <small>
          Posted by <i>{author}</i>
        </small>
        <small>{date}</small>
      </div>
      <div
        className="description"
        style={{ display: isActive ? "block" : "none" }}
      >
        <p>{content}</p>
      </div>
      <a
        className="toggle-btn"
        onClick={toggle}
        style={{ display: isActive ? "none" : "block" }}
      >
        See more...
      </a>
      <a
        className="toggle-btn"
        onClick={toggle}
        style={{ display: isActive ? "block" : "none" }}
      >
        See less...
      </a>
    </li>
  );
};

export default Post;
