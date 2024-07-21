import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./Mypage.css";

function Mypage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [registeredTopics, setRegisteredTopics] = useState([]);
  const [votedTopics, setVotedTopics] = useState([]);
  const [showAllRegisteredTopics, setShowAllRegisteredTopics] = useState(false);
  const [showAllVotedTopics, setShowAllVotedTopics] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://192.168.0.12:8000/api/v1/users/profile/', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserData(response.data.user);
        setRegisteredTopics(response.data.registered_topics);
        setVotedTopics(response.data.voted_topics);
        setLoading(false);
      } catch (error) {
        setError('데이터를 가져오는데 실패했습니다.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const registeredTopicsToDisplay = showAllRegisteredTopics
    ? registeredTopics
    : registeredTopics.slice(0, 3);
  
  const votedTopicsToDisplay = showAllVotedTopics
    ? votedTopics
    : votedTopics.slice(0, 3);

  const toggleShowAllRegisteredTopics = () => {
    setShowAllRegisteredTopics(!showAllRegisteredTopics);
  };

  const toggleShowAllVotedTopics = () => {
    setShowAllVotedTopics(!showAllVotedTopics);
  };

  const handleLogout = () => {
    // 로그아웃 로직 추가
    localStorage.removeItem('token'); // 토큰 삭제
    navigate("/");
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
            src={userData.profileImg || "/profile.png"}
            alt="프로필 이미지"
            className="profile-image"
          />
          <div className="profile-text">
            <h2>
              {userData.username}
              <button className="logout-button" onClick={handleLogout}>
                로그아웃
              </button>
            </h2>
            <span className="status">• {userData.status}</span>
          </div>
        </section>
        <section className="topic-section">
          <h2>
            내가 등록한 주제{" "}
            <span className="view-all" onClick={toggleShowAllRegisteredTopics}>
              {showAllRegisteredTopics ? "간략히 보기" : "전체 보기"}
            </span>
          </h2>
          <div>
            {registeredTopicsToDisplay.map((topic) => (
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
            ))}
          </div>
        </section>
        <section className="topic-section">
          <br />
          <h2>
            내가 투표한 주제{" "}
            <span className="view-all" onClick={toggleShowAllVotedTopics}>
              {showAllVotedTopics ? "간략히 보기" : "전체 보기"}
            </span>
          </h2>
          <div>
            {votedTopicsToDisplay.map((topic) => (
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
            ))}
          </div>
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
