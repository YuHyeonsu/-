import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Mypage.css";
import mockData from "../mock.json";

function Mypage() {
  const navigate = useNavigate();
  const [showAllRegisteredTopics, setShowAllRegisteredTopics] = useState(false);
  const [showAllVotedTopics, setShowAllVotedTopics] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
  };

  // 모든 등록 주제 데이터
  const allRegisteredTopics = mockData.map((topic) => (
    <div
      key={topic.id}
      className="topic-item"
      onClick={() => handleNavigate(`/topicdetail/${topic.id}`)}
    >
      <img src={topic.imgUrl} alt={topic.title} className="topic-image" />
      <div className="topic-info">
        <p className="topic-title">{topic.title}</p>
        <p className="opinions-number">
          {topic.opinionsNumber}개의 국룰 제시됨
        </p>
      </div>
    </div>
  ));

  // 최대 3개의 등록 주제 데이터
  const limitedRegisteredTopics = mockData.slice(0, 3).map((topic) => (
    <div
      key={topic.id}
      className="topic-item"
      onClick={() => handleNavigate(`/topicdetail/${topic.id}`)}
    >
      <img src={topic.imgUrl} alt={topic.title} className="topic-image" />
      <div className="topic-info">
        <p className="topic-title">{topic.title}</p>
        <p className="opinions-number">
          {topic.opinionsNumber}개의 국룰 제시됨
        </p>
      </div>
    </div>
  ));

  // 모든 투표 주제 데이터
  const allVotedTopics = mockData.map((topic) => (
    <div
      key={topic.id}
      className="topic-item"
      onClick={() => handleNavigate(`/topicdetail/${topic.id}`)}
    >
      <img src={topic.imgUrl} alt={topic.title} className="topic-image" />
      <div className="topic-info">
        <p className="topic-title">{topic.title}</p>
        <p className="opinions-number">
          {topic.opinionsNumber}개의 국룰 제시됨
        </p>
      </div>
    </div>
  ));

  // 최대 3개의 투표 주제 데이터
  const limitedVotedTopics = mockData.slice(0, 3).map((topic) => (
    <div
      key={topic.id}
      className="topic-item"
      onClick={() => handleNavigate(`/topicdetail/${topic.id}`)}
    >
      <img src={topic.imgUrl} alt={topic.title} className="topic-image" />
      <div className="topic-info">
        <p className="topic-title">{topic.title}</p>
        <p className="opinions-number">
          {topic.opinionsNumber}개의 국룰 제시됨
        </p>
      </div>
    </div>
  ));

  const registeredTopicsToDisplay = showAllRegisteredTopics
    ? allRegisteredTopics
    : limitedRegisteredTopics;
  const votedTopicsToDisplay = showAllVotedTopics
    ? allVotedTopics
    : limitedVotedTopics;

  const toggleShowAllRegisteredTopics = () => {
    setShowAllRegisteredTopics(!showAllRegisteredTopics);
  };

  const toggleShowAllVotedTopics = () => {
    setShowAllVotedTopics(!showAllVotedTopics);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="my-page">
      <header className="header">
        <img src="/logo2.png" alt="로고" className="logo2" />
        <h3>마이페이지</h3>
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
        <section className="profile-section">
          <img
            src="/profile.png"
            alt="프로필 이미지"
            className="profile-image"
          />
          <div className="profile-text">
            <h2>
              홍길동
              <button className="logout-button" onClick={handleLogout}>
                로그아웃
              </button>
            </h2>
            <span className="status">• 전설</span>
          </div>
        </section>
        <section className="topic-section">
          <h2>
            내가 등록한 주제{" "}
            <span className="view-all" onClick={toggleShowAllRegisteredTopics}>
              {showAllRegisteredTopics ? "간략히 보기" : "전체 보기"}
            </span>
          </h2>
          <div>{registeredTopicsToDisplay}</div>
        </section>
        <section className="topic-section">
          <br />
          <h2>
            내가 투표한 주제{" "}
            <span className="view-all" onClick={toggleShowAllVotedTopics}>
              {showAllVotedTopics ? "간략히 보기" : "전체 보기"}
            </span>
          </h2>
          <div>{votedTopicsToDisplay}</div>
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

export default Mypage;
