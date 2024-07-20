import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./DictionaryDetail.css";
import mockData from "../mock.json"; // mock 데이터 가져오기

const DictionaryDetail = () => {
  const [topicTitle, setTopicTitle] = useState(""); // 토픽 제목 상태 추가
  const [explanation, setExplanation] = useState(""); // 설명 상태 추가

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

  return (
    <div className="dictionarydetail">
      <div className="dictionarydetail-header">
        <button className="back-button" onClick={handleNavigate}>
          ←
        </button>
      </div>
      <div className="dictionarydetail-page">
        <div className="dictionarydetail-img-container">
          <div className="logo-container">
            <img src="/logo3.png" alt="이미지 설명" className="logo-image" />
            <div className="logo-text">
              {topicTitle}
              <br />
              <br />
              {explanation}
            </div>
          </div>
          <div className="logo-container">
            <img src="/logo4.png" alt="이미지 설명" className="logo-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DictionaryDetail;
