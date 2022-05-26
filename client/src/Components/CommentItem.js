import React, { useState } from "react";
import Moment from "react-moment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCommentAction,
  editCommentAction
} from "../redux/Actions/commentAction";

const CommentItem = ({ comment }) => {
  const userReducer = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [showEditComment, setShowEditComment] = useState(false);
  const [editComment, setEditComment] = useState({
    description: ""
  });
  const handleDelete = (id) => {
    dispatch(deleteCommentAction(id));
  };
  const handleEditComment = (description) => {
    setShowEditComment(true);
    setEditComment({
      description: description
    });
  };
  const cancelEditComment = () => {
    setShowEditComment(false);
  };
  const handleChangeEditComment = (e) => {
    setEditComment({
      ...editComment,
      [e.target.name]: e.target.value
    });
  };
  const EditComment = (id) => {
    dispatch(editCommentAction(id, editComment));
    setShowEditComment(false);
  };
  return (
    <div class="d-flex justify-content-center py-2">
      <div class="second px-2">
        {showEditComment ? (
          <>
            <div className="comment-icons">
              <button
                class="btn btn-sm shadow-none add-comment-button"
                type="button"
                onClick={() => EditComment(comment._id)}
              >
                Edit comment
              </button>
              <button
                class="btn btn-sm ml-1 shadow-none cancel-cooment-button"
                type="button"
                onClick={cancelEditComment}
              >
                Cancel
              </button>
            </div>
            <div class="d-flex justify-content-center pt-3 pb-2">
              <input
                type="text"
                name="description"
                value={editComment.description}
                placeholder="Update your comment"
                class="commnet-form-control addtxt"
                onChange={handleChangeEditComment}
              />
            </div>
          </>
        ) : (
          <>
            {userReducer.user?._id === comment.ownerId._id ? (
              <>
                <div className="comment-icons">
                  <IconButton
                    onClick={() => handleEditComment(comment.description)}
                  >
                    <EditIcon style={{ color: "#4C959E" }} />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(comment._id)}>
                    <DeleteIcon style={{ color: "#f6416c" }} />
                  </IconButton>
                </div>
              </>
            ) : null}

            <span class="text1">{comment.description}</span>
            <div class="d-flex justify-content-between py-1 pt-2">
              <div>
                <Tooltip
                  title={
                    <>
                      <p
                        style={{
                          marginBottom: 5,
                          display: "inline-block",
                          color: "#f6416c",
                          fontSize: 14,
                          marginRight: 5
                        }}
                      >
                        Adress:
                      </p>
                      <span
                        style={{
                          fontSize: 14
                        }}
                      >
                        {comment.ownerId.address}
                      </span>
                      <br />
                      <p
                        style={{
                          marginBottom: 5,
                          display: "inline-block",
                          color: "#f6416c",
                          fontSize: 14,
                          marginRight: 5
                        }}
                      >
                        Phone:
                      </p>
                      <span
                        style={{
                          fontSize: 14
                        }}
                      >
                        {comment.ownerId.proNumber
                          ? comment.ownerId.proNumber
                          : comment.ownerId.phone}
                      </span>
                    </>
                  }
                  arrow
                  placement="left"
                >
                  <img
                    src={comment.ownerId.avatar}
                    width="36"
                    height="36"
                    style={{ objectFit: "cover", borderRadius: "50%" }}
                  />
                </Tooltip>

                <span class="text2">{comment.ownerId.name}</span>
              </div>
              <div>
                <Moment fromNow>{comment.create__at}</Moment>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
