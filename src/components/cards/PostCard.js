import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="col-sm-12 col-md-11 col-lg-5 border-bottom h-100 py-3 ">
      <h5 className="fw-bold">{post.title}</h5>
      <span className="text-muted"> {post.date}</span>
      <p className="py-2 fs-6">{post.desciption}</p>
    </div>
  );
};

export default PostCard;
