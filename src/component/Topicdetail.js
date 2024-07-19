import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Topicdetail.css";
import mockData from "../mock.json";

function Topicdetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showDiscussion, setShowDiscussion] = useState(false);

  const topic = mockData.find((topic) => topic.id === parseInt(id));

  if (!topic) {
    return <div>해당하는 토픽을 찾을 수 없습니다.</div>;
  }

  // 토론방으로 이동 버튼을 클릭할 때 실행될 함수
  const handleNavigateToDiscussion = () => {
    navigate(`/discussion/${topic.id}`); // 해당 토픽의 ID를 이용해 URL 생성
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
          <textarea
            placeholder="국룰 제시하기"
            className="input-description"
          ></textarea>
        </div>
      </main>

      {/* 토론방으로 이동 버튼을 클릭하면 Discussion 페이지로 이동 */}
      <button
        className="discussion-button"
        onClick={handleNavigateToDiscussion}
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
