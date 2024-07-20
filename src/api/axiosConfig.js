import axios from "axios";

// Axios 인스턴스 생성
const instance = axios.create({
  baseURL: "http://localhost:8080", // 기본 호스트 주소 설정
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

export default instance;
