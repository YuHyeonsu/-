import React from "react";
import { useNavigate, useParams } from "react-router-dom"; // useParams 추가
import "./Topicdetail.css";
import mockData from "../mock.json";

function Topicdetail() {
  const navigate = useNavigate();
  const { id } = useParams(); // URL 파라미터에서 id 가져오기

  const handleNavigate = (path) => {
    navigate(path);
  };

  // id에 해당하는 토픽 데이터 찾기
  const topic = mockData.find((topic) => topic.id === parseInt(id));

  if (!topic) {
    return <div>해당하는 토픽을 찾을 수 없습니다.</div>; // 예외 처리: 토픽이 없는 경우
  }

  return (
    <div className="Topicdetail-page">
      <header className="Topicdetail-header">
        <button className="back-button" onClick={() => handleNavigate("/home")}>
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
            <span className="author">작성일 ✿ {topic.author}</span> {topic.name}
            <span className="meta-info">👁 156 💬 16</span> {/* 가상의 데이터 */}
          </div>
          <p className="Topicdetail-category">카테고리 : {topic.category}</p>
          <h3>상황 설명</h3>
          <p className="description">{topic.explanation}</p> {/* 설명 추가 */}
          <textarea
            placeholder="국룰 제시하기"
            className="input-description"
          ></textarea>
        </div>
      </main>
      <button
        className="discussion-button"
        onClick={() => handleNavigate("/discussion")}
      >
        토론방으로 이동
      </button>
      <footer className="footer">
        <button
          className="nav-button"
          onClick={() => handleNavigate("/dictionary")}
        >
          📚
        </button>
        <button className="nav-button" onClick={() => handleNavigate("/home")}>
          🏠
        </button>
        <button
          className="nav-button"
          onClick={() => handleNavigate("/mypage")}
        >
          👤
        </button>
      </footer>
    </div>
  );
}

export default Topicdetail;
