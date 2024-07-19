import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import mockData from "../mock.json";

function Home() {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("");

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleSortByLatest = () => {
    setSortBy("latest");
  };

  const handleSortByPopularity = () => {
    setSortBy("popularity");
  };

  const sortByLatest = (data) => {
    return [...data].sort(
      (a, b) => new Date(b.uploadDate) - new Date(a.uploadDate)
    );
  };

  const sortByPopularity = (data) => {
    return [...data].sort((a, b) => b.opinionsNumber - a.opinionsNumber);
  };

  const sortedTopics =
    sortBy === "latest"
      ? sortByLatest(mockData)
      : sortBy === "popularity"
      ? sortByPopularity(mockData)
      : mockData;

  const topics = sortedTopics.map((topic) => (
    <div
      key={topic.id}
      className="topic-item"
      onClick={() => handleNavigate(`/topicdetail/${topic.id}`)}
    >
      <img src={topic.imgUrl} alt={topic.title} className="topic-image" />
      <p>{topic.title}</p>
    </div>
  ));

  return (
    <div className="home-page">
      <header className="header">
        <img src="/logo2.png" alt="로고" className="logo2" />
        <h3>홈</h3>
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
          <h2>토론중인 주제</h2>
          <h4>
            정렬순서
            <span className="view-all" onClick={handleSortByPopularity}>
              {" "}
              · 인기순
            </span>{" "}
            <span className="view-all" onClick={handleSortByLatest}>
              {" "}
              · 최신순
            </span>
          </h4>
          <div className="home-category">
            <h4>
              카테고리
              <span className="home-category-item">문학, 책</span>
              <span className="home-category-item">영화</span>
              <span className="home-category-item">미술, 디자인</span>
              <span className="home-category-item">공연</span>
            </h4>
          </div>
          <div>{topics}</div>
        </section>
      </main>
      <button
        className="register-button"
        onClick={() => handleNavigate("/register")}
      >
        + 주제 등록하기
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

export default Home;
