import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Topicdetail.css";
import mockData from "../mock.json";

function Topicdetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const topic = mockData.find((topic) => topic.id === parseInt(id));

  const [opinions, setOpinions] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newOpinion, setNewOpinion] = useState("");
  const [additionalContent, setAdditionalContent] = useState("");
  const [newCommentText, setNewCommentText] = useState(""); // New state for comment text

  if (!topic) {
    return <div>해당하는 토픽을 찾을 수 없습니다.</div>;
  }

  const handleOpinionSubmit = (e) => {
    e.preventDefault();
    if (newOpinion.trim() !== "") {
      const newOpinionItem = {
        id: opinions.length + 1,
        content: newOpinion,
        additionalContent: additionalContent,
        date: new Date().toLocaleString(),
        comments: [],
      };

      setOpinions([newOpinionItem, ...opinions]);
      setNewOpinion("");
      setAdditionalContent("");
    }
  };

  const handleToggleComments = (opinionId) => {
    const updatedOpinions = opinions.map((opinion) => {
      if (opinion.id === opinionId) {
        return {
          ...opinion,
          showComments: !opinion.showComments,
        };
      }
      return opinion;
    });

    setOpinions(updatedOpinions);
  };

  const handleCommentSubmit = (opinionId, commentText) => {
    const updatedOpinions = opinions.map((opinion) => {
      if (opinion.id === opinionId) {
        return {
          ...opinion,
          comments: [
            ...opinion.comments,
            {
              id: opinion.comments.length + 1,
              content: commentText,
              date: new Date().toLocaleString(),
            },
          ],
        };
      }
      return opinion;
    });

    setOpinions(updatedOpinions);
    setNewCommentText("");
  };

  return (
    <div className="Topicdetail-page">
      <header className="Topicdetail-header">
        <button className="back-button" onClick={() => navigate("/home")}>
          ←
        </button>
      </header>

      <main className="main-content">
        <img
          src={topic.imgUrl}
          alt={topic.title}
          className="Topicdetail-image"
        />
        <div className="Topicdetail-details">
          <h2>{topic.title}</h2>
          <div className="Topicdetail-meta">
            <span className="author">작성일 ✿ {topic.uploadDate}</span> 작성자 :{" "}
            {topic.name}
            <span className="meta-info">👁 156 💬 {topic.opinionsNumber}</span>
          </div>
          <p className="Topicdetail-category">카테고리 : {topic.category}</p>
          <h3>상황 설명</h3>
          <p className="description">{topic.explanation}</p>
          <button
            className="rule-button"
            onClick={() => setShowForm(!showForm)}
          >
            + 국룰 제시하기
          </button>
          {showForm && (
            <form onSubmit={handleOpinionSubmit}>
              <input
                type="text"
                value={newOpinion}
                onChange={(e) => setNewOpinion(e.target.value)}
                placeholder="의견을 입력하세요."
                className="opinion-input"
              />
              <textarea
                value={additionalContent}
                onChange={(e) => setAdditionalContent(e.target.value)}
                placeholder="내용을 입력하세요"
                rows={4}
                cols={50}
                className="additional-content-textarea"
              />
              <button className="opinionregister-button" type="submit">
                등록하기
              </button>
            </form>
          )}
          <div className="opinions">
            {opinions.map((opinion) => (
              <div key={opinion.id} className="opinion-box">
                <p>{opinion.content}</p>
                {opinion.additionalContent && (
                  <p className="additional-content">
                    {opinion.additionalContent}
                  </p>
                )}
                <p className="date">{opinion.date}</p>
                <button onClick={() => handleToggleComments(opinion.id)}>
                  댓글 보기
                </button>
                {opinion.showComments && opinion.comments.length > 0 && (
                  <div className="comments">
                    {opinion.comments.map((comment) => (
                      <div key={comment.id} className="comment">
                        <p>{comment.content}</p>
                        <p className="date">{comment.date}</p>
                      </div>
                    ))}
                  </div>
                )}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleCommentSubmit(opinion.id, newCommentText);
                  }}
                >
                  <input
                    type="text"
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    placeholder="댓글을 입력하세요."
                    className="comment-input"
                  />
                  <button type="submit">등록하기</button>
                </form>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 토론방으로 이동 버튼을 클릭하면 Discussion 페이지로 이동 */}
      <button
        className="discussion-button"
        onClick={() => navigate(`/discussion/${topic.id}`)}
      >
        토론방으로 이동
      </button>

      <footer className="footer">
        <button className="nav-button" onClick={() => navigate("/dictionary")}>
          📚
        </button>
        <button className="nav-button" onClick={() => navigate("/home")}>
          🏠
        </button>
        <button className="nav-button" onClick={() => navigate("/mypage")}>
          👤
        </button>
      </footer>
    </div>
  );
}

export default Topicdetail;
