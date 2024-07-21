import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 임포트
import "./Signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [first_name, setFirst_name] = useState("");

  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "password2":
        setPassword2(value);
        break;
      case "first_name":
        setFirst_name(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기서 회원가입 로직을 구현
  };

  const handleGoBack = () => {
    navigate(-1); // 뒤로가기 기능
  };

  return (
    <div className="signup-page">
      {/* 뒤로가기 버튼 */}
      <header className="Signup-header">
        <button className="back-button" onClick={handleGoBack}>
          ←
        </button>
      </header>
      <div className="img-container">
        <img src="/logo.png" alt="이미지 설명" />
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="username"
            placeholder="아이디"
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <input
            type="email"
            name="email"
            placeholder="이메일"
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            name="password2"
            placeholder="비밀번호 재확인"
            value={password2}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="first_name"
            placeholder="이름"
            value={first_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <div className="container">
          <button type="submit" className="signbutton">
            회원가입 완료
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
