// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Router를 index.js에서 사용
import App from './App';
import './styles/Typography/Typography.css';

// 애플리케이션이 호스팅되는 서브디렉토리에 맞게 basename 설정
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}> {/* basename 설정 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
