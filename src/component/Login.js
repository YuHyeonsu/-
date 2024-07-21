import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 가상 로그인
    const isLoggedIn = email === "multi@naver.com" && password === "12345";

    if (isLoggedIn) {
      // alert('로그인 성공!');
      navigate("/start"); // 로그인 후 이동할 페이지 경로
    } else {
      // alert('로그인 실패. 다시 시도해주세요.');
    }
  };

  const handleSignUp = () => {
    // 회원가입 페이지로 이동
    navigate("/signup");
  };

  return (
    <div className="login-page">
      <div className="img-container">
        <img src="/logo.png" alt="이미지 설명" />
      </div>
      {/* <h1>국룰대백과</h1> */}
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="email"
            name="email"
            placeholder="아이디"
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
        <div className="container">
          <button type="submit" className="loginbutton">
            로그인
          </button>
          <button type="button" className="signbutton" onClick={handleSignUp}>
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
