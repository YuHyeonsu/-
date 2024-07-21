import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstname, setFirstname] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "id":
        setId(value);
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
      case "firstname":
        setFirstname(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기서 회원가입 로직을 구현하면 됩니다.
  };

  return (
    <div className="signup-page">
      <div className="img-container">
        <img src="/logo.png" alt="이미지 설명" />
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="id"
            placeholder="아이디"
            value={id}
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
            type="firstname"
            name="firstname"
            placeholder="이름"
            value={firstname}
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
