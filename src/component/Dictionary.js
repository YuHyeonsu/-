import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dictionary.css";
import mockData from "../mock.json";

function Dictionary() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const topics = mockData.map((topic) => (
    <div
      key={topic.id}
      className="topic-item"
      onClick={() => handleNavigate(`/topicdetail/${topic.id}`)}
    >
      <div>
        <img src={topic.imgUrl} alt={topic.title} className="topic-image" />
      </div>
      <div className="topic-info">
        <p className="topic-title">{topic.title}</p>
        <p className="opinions-number">
          {topic.opinionsNumber}개의 국룰 제시됨
        </p>
      </div>
    </div>
  ));

  return (
    <div className="dictionary-page">
      <header className="header">
        <img src="/logo2.png" alt="로고" className="logo2" />
        <h3>국룰대백과</h3>
        <div className="icons">
          <span
            className="search-icon"
            onClick={() => handleNavigate("/search")}
          >
            🔍
          </span>
          <span className="profile-icon">🔔</span>
        </div>
      </header>
      <main className="main-content">
        <section className="topic-section">
          <div className="dictionary-category">
            <h4>카테고리</h4>
            <span className="dictionary-category-item">문학, 책</span>
            <span className="dictionary-category-item">영화</span>
            <span className="dictionary-category-item">미술, 디자인</span>
            <span className="dictionary-category-item">공연, 전시</span>
            <span className="dictionary-category-item">음악</span>
            <span className="dictionary-category-item">일상, 생각</span>
            <span className="dictionary-category-item">게임</span>
            <span className="dictionary-category-item">스포츠</span>
            <span className="dictionary-category-item">기타</span>
          </div>
          <br />
          <div>{topics}</div>
        </section>
      </main>
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

export default Dictionary;
