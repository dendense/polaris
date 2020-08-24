import React from "react";
import propTypes from "prop-types";

export default function PostsType(props) {
  const className = [props.className];

  if (props.postsType === "iklan-tag") {
    return (
      <div className="card" style={{ width: "15rem" }}>
        <div className="">This is Iklan</div>
      </div>
    );
  }

  if (props.postsType === "posts") {
    if (props.newestPosts) {
      return <div className="newest"></div>;
    } else if (props.topPosts) {
      return <div className="top"></div>;
    } else {
      return <div className="hot"></div>;
    }
  }

  return (
    <div
      className={className.join(" ")}
      id={props.id}
      postsType={props.postsType}
      newestPosts={props.newestPosts}
      hotPosts={props.hotPosts}
      topPosts={props.topPosts}
      followedPosts={props.followedPosts}
    >
      {props.children}
    </div>
  );
}

PostsType.propTypes = {
  className: propTypes.string,
  postsType: propTypes.oneOf(["posts", "iklan-tag"]),
  newestPosts: propTypes.bool,
  hotPosts: propTypes.bool,
  topPosts: propTypes.bool,
  followedPosts: propTypes.bool,
};
