import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL; // 환경 변수에서 URL 가져오기

const apiClient = axios.create({
  baseURL: API_BASE_URL, // baseURL 설정
  timeout: 10000, // 요청 타임아웃 (선택 사항)
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
