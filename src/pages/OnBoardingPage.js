import React, { useState } from "react";
import "../components/Layout/header-layout.css";
import "./onBoarding-layout.css";
import Button from "../components/Button/Button";

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

const OnBoardingPage = () => {
  const [step, setStep] = useState(1); // 단계를 관리하는 상태

  // 다음 단계로 이동
  const handleNextClick = () => {
    if (step < 3) {
      // 단계가 2일 때까지 허용
      setStep(step + 1);
    }
  };

  // 이전 단계로 이동
  const handlePrevClick = () => {
    if (step > 1) {
      // 첫 번째 단계를 벗어나지 않도록 제한
      setStep(step - 1);
    }
  };

  return (
    <div className="onBoardingPage">
      <header className="header">
        <img
          className="logo"
          src="example.png"
          alt="logo"
          onClick={() => window.location.reload()}
        />
      </header>
      <main className="onBoarding-main-style">
        {/* 첫 번째 화면 */}
        {step === 1 && (
          <>
            <div className="image-section">
              <ImagePlaceholder width={362} height={320} />{" "}
              {/* 여기서 크기 설정 */}
            </div>
            <div className="text-section">
              <h1 className="slogan">기능 소개 멘트</h1>
              <p>
                해당 기능에 대한 간단한 설명 및 소개해당 기능에 대한 간단한 설명
                및 소개해당 기능에 대한 간단한 설명
              </p>
              <div className="text-button-wrapper">
                <Button label="다음 버튼" onClick={handleNextClick} />
              </div>
            </div>
          </>
        )}

        {/* 두 번째 화면 */}
        {step === 2 && (
          <>
            <div className="image-section">
              <ImagePlaceholder width={362} height={320} />{" "}
              {/* 여기서 크기 설정 */}
            </div>
            <div className="text-section">
              <h1 className="slogan">기능 소개 멘트 2</h1>
              <p>
                이전 기능에 대한 설명에 이어 새로운 기능에 대한 설명을 여기에
                넣을 수 있습니다. 간단한 멘트와 함께 기능을 소개하는 내용을
                추가합니다.
              </p>
              <div className="text-button-wrapper">
                <Button label="이전 버튼" onClick={handlePrevClick} />
                <Button label="다음 버튼" onClick={handleNextClick} />
              </div>
            </div>
          </>
        )}

        {/* 마지막 화면 (선택적 단계) */}
        {step === 3 && (
          <>
            <div className="image-section">
              <ImagePlaceholder width={362} height={320} />{" "}
              {/* 여기서 크기 설정 */}
            </div>
            <div className="text-section">
              <h1 className="slogan">GREETING 코멘트</h1>
              <p>추가적인 GREETING 코멘트 & 시작하기 설명 멘트</p>
              <div className="text-button-wrapper">
                <Button label="시작하기" onClick={() => alert("시작합니다!")} />
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default OnBoardingPage;
