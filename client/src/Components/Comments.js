import React, { useState } from "react";
import "../styles/comments.css";
import { useDispatch, useSelector } from "react-redux";
import { addCommentAction } from "../redux/Actions/commentAction";

import CommentItem from "./CommentItem";

const Comments = ({ id }) => {
  const dispatch = useDispatch();
  const commentReducer = useSelector((state) => state.commentReducer);
  const userReducer = useSelector((state) => state.userReducer);

  const [addComment, setAddComment] = useState({
    description: ""
  });

  const handleChangeComment = (e) => {
    setAddComment({
      ...addComment,
      [e.target.name]: e.target.value
    });
  };
  const handleAddComment = () => {
    dispatch(addCommentAction(id, addComment));
    setAddComment({
      description: ""
    });
  };
  const cancelComment = () => {
    setAddComment({
      description: ""
    });
  };

  return (
    <div style={{ marginTop: 60, marginBottom: 50 }}>
      <div class="commnets-container justify-content-center mt-5 border-left border-right">
        {userReducer.auth ? (
          <>
            <div class="d-flex justify-content-center pt-3 pb-2">
              <input
                type="text"
                name="description"
                value={addComment.description}
                placeholder="+ Add comment"
                class="commnet-form-control addtxt"
                onChange={handleChangeComment}
              />
            </div>
            <div class="d-flex justify-content-center pb-2 comments-button-container">
              <button
                class="btn btn-sm shadow-none add-comment-button"
                type="button"
                onClick={handleAddComment}
              >
                Post comment
              </button>
              <button
                class="btn btn-sm ml-1 shadow-none cancel-cooment-button"
                type="button"
                onClick={cancelComment}
              >
                Cancel
              </button>
            </div>
          </>
        ) : null}

        {commentReducer.comments?.map((el, i) => (
          <CommentItem key={i} comment={el} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
