import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Discussion.css";
import mockData from "../mock.json"; // mock 데이터 가져오기

const Discussion = () => {
  const [opinions, setOpinions] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newOpinion, setNewOpinion] = useState("");
  const [additionalContent, setAdditionalContent] = useState("");
  const [topicTitle, setTopicTitle] = useState(""); // 토픽 제목 상태 추가

  const navigate = useNavigate();
  const { id } = useParams(); // URL 파라미터에서 토픽의 ID 가져오기

  useEffect(() => {
    // id가 변할 때마다 해당 토픽의 title을 가져와 상태에 설정
    const topic = mockData.find((topic) => topic.id === parseInt(id));
    if (topic) {
      setTopicTitle(topic.title);
    }
  }, [id]);

  const handleNavigate = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleOpinionSubmit = (e) => {
    e.preventDefault();
    if (newOpinion.trim() !== "") {
      const newOpinionItem = {
        id: opinions.length + 1,
        content: newOpinion,
        additionalContent: additionalContent,
        date: new Date().toLocaleString(),
      };

      setOpinions([newOpinionItem, ...opinions]);
      setNewOpinion("");
      setAdditionalContent("");
      setShowForm(false);
    }
  };

  return (
    <div className="discussion">
      <div className="discussion-header">
        <button className="back-button" onClick={handleNavigate}>
          ←
        </button>
        <div className="centered">
          <div className="topic-title">{topicTitle}</div>
          <div>토론방</div>
        </div>
      </div>

      <button className="opinion-button" onClick={toggleForm}>
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
              <p className="additional-content">{opinion.additionalContent}</p>
            )}
            <p className="date">{opinion.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discussion;
