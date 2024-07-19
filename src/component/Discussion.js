import React, { useState } from "react";
import "./Discussion.css";

const Discussion = () => {
  const [opinions, setOpinions] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newOpinion, setNewOpinion] = useState("");
  const [additionalContent, setAdditionalContent] = useState("");

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
