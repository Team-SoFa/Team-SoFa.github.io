import React, { useState } from "react";
import "../components/Layout/HeaderStyle.css";
import "./onBoarding-layout.css";
import Button from "../components/Button/Button";
import { getGoogleLoginUrl } from "../services/loginService"; // Google 로그인 서비스 호출

const ImagePlaceholder = ({ width, height }) => {
  const placeholderStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div className="image-placeholder" style={placeholderStyle}>
      이미지 자리 표시지
    </div>
  );
};

const SignPage = () => {
  const handleGoogleLogin = async () => {
    try {
      // 백엔드에서 Google 로그인 URL 가져오기
      const googleLoginUrl = await getGoogleLoginUrl();

      console.log("Google 로그인 URL:", googleLoginUrl);
      // Google 로그인 페이지로 리디렉션
      // window.location.href = googleLoginUrl;
    } catch (error) {
      console.error("Google 로그인 URL 가져오기 실패:", error);
      alert("Google 로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="signpage">
      <header className="header">
        <img
          className="logo"
          src="example.png"
          alt="logo"
          onClick={() => window.location.reload()}
        />
      </header>
      <main className="sign-main-style">
        <div className="image-section">
          <ImagePlaceholder width={362} height={320} /> {/* 여기서 크기 설정 */}
        </div>
        <div className="text-section">
          <h1 className="sign-slogan">서비스 메인 슬로건 코멘트</h1>
          <p>서비스 서브 슬로건 및 기타 설명</p>
          <div className="sign-text-button-wrapper">
            <Button
              label="Google 계정으로 로그인"
              onClick={handleGoogleLogin} // Google 로그인 핸들러 연결
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignPage;
