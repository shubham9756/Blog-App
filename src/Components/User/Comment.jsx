import React, { useEffect, useState } from "react";
import socket from "../../socket";

const Comment = ({ blogId, user }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  /* 🔹 Load old comments */
  useEffect(() => {
    fetch(`http://localhost:1000/comments/${blogId}`, {
      credentials: "include",
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setComments(data.comments);
        }
      });
  }, [blogId]);

  /* 🔹 Socket events */
  useEffect(() => {
    socket.emit("join-blog", blogId);

    socket.on("new-comment", (newComment) => {
      setComments(prev => [...prev, newComment]);
    });

    socket.on("delete-comment", (id) => {
      console.log("id", id)
      setComments(prev => prev.filter(c => c._id !== id));
    });

    socket.on("like-comment", ({ id }) => {
      setComments(prev =>
        prev.map(c =>
          c._id === id ? { ...c, likes: c.likes + 1 } : c
        )
      );
    });

    return () => {
      socket.off("new-comment");
      socket.off("delete-comment");
      socket.off("like-comment");
    };
  }, [blogId]);

  /* 🔹 Add comment */
  const handleComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    socket.emit("send-comment", {
      blogId,
      userId: user,
      text: comment,
    });

    setComment("");
  };

  /* 🔹 Like */
  const handleLike = (id) => {
      socket.emit("like-comment", { id });
  };

  /* 🔹 Delete */
  const handleDelete = (id) => {
    socket.emit("delete-comment", { id });
  };

  return (
    <section className="card shadow-sm mt-5">
      <div className="card-body p-4">

        <h5 className="fw-semibold mb-4">Comments</h5>

        {/* 🔹 Comment list */}
        <div className="d-flex flex-column gap-3">

          {comments.map((c, i) => {
            const isMyComment =
              c.userId?._id?.toString() === user?._id.toString();
            return (
              <div
                key={c._id}
                className={`d-flex p-2 ${isMyComment ? "justify-content-end" : "justify-content-start"}`}
              >
                <div
                  className={`p-4 rounded-4 shadow ${isMyComment ? "bg-secondary text-white" : "bg-info text-dark"
                    }`}
                  style={{ maxWidth: "70%" }}
                >
                  <p className="fw-semibold mb-1 ">
                    {isMyComment ? "You" : c.userId?.username || "User"}
                  </p>

                  <p className="mb-2 small">{c.comment}</p>

                  <div className="d-flex align-items-center gap-3">
                    {/* Like */}
                    {/* <button
                      className={`btn btn-sm ${isMyComment ? "btn-outline-light" : "btn-outline-secondary"
                        }`}
                      onClick={() => handleLike(c._id)}
                    >
                      👌 {c.likes || 0}
                    </button> */}

                    {/* Delete (only owner) */}
                    {isMyComment && (
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(c._id)}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

        </div>

        <hr />

        {/* 🔹 Add comment */}
        {user ? (
          <form onSubmit={handleComment}>
            <textarea
              className="form-control mb-2"
              rows="3"
              placeholder="Write your comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit" className="btn btn-dark btn-sm">
              Post Comment
            </button>
          </form>
        ) : (
          <p className="text-muted">Login to add comment</p>
        )}

      </div>
    </section>
  );
};

export default Comment;
