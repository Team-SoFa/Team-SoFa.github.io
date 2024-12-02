import React from "react";
import Header from "../components/Layout/Header.js";
import Footer from "../components/Layout/Footer.js";
import Accordion from "../components/Accordion/Accordion.js";

import "./LandingPage.css";

const LandingPage = () => {
  const answer1 =
    "A. Chrome Extension에서 확장 프로그램을 다운받아 사용합니다.";
  const answer2 =
    "A. 오늘 저녁은 아직 알 수가 없는데요, 집에 참치와 무 무침이 있어서 그걸 먹을 수도 있고 그냥 라면을 먹을 수도 있지만 불닭은 안먹을 겁니다. 어제 먹었기 때문입니다.?";
  const answer3 = "blah blah";

  return (
    <div className="landing-page">
      <Header type="ONBOARDING" />
      <main className="main-style">
        <section className="SLOGAN_SEC main-style">
          <h1 className="slogan">당신의 시간을 절약하는 최고의 서비스</h1>
          <p>확장 프로그램을 추가하고 더 많은 기능을 경험하세요</p>
          <a
            className="button"
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noreferrer"
          >
            Chrome Web Store 바로가기
          </a>
        </section>
        <section className="MAIN_FEAT_SEC  main-style">
          <img className="service-icon" src="example.png" alt="icon" />
          <h2 className="title">주요 서비스 기능, 장점 소개</h2>
          <div className="content-img  main-style">
            <img src="example.png" width={"200px"} alt="main content1" />
            <img src="example.png" width={"200px"} alt="main content2" />
            <img src="example.png" width={"200px"} alt="main content3" />
          </div>
        </section>

        <section className="OTHER_FEAT_SEC  main-style">
          <img className="service-icon" src="example.png" alt="icon" />
          <h2 className="title">기타 추가 서비스 소개</h2>
          <div className="grid">
            <div className="card">
              <img src="example.png" alt="icon" />
              <p>당신만의 북마크 폴더를 공유하고 팀원들과 협업하세요</p>
            </div>
            <div className="card">
              <img src="example.png" alt="icon" />
              <p>폴더와 태그별로 북마크를 관리하세요</p>
            </div>
            <div className="card">
              <img src="example.png" alt="icon" />
              <p>
                이것은 다섯줄짜리 텍스트를 보기 위함입니다. 이것은 다섯줄짜리
                텍스트를 보기 위함입니다. 이것은 다섯줄짜리
              </p>
            </div>
            <div className="card">
              <img src="example.png" alt="icon" />
              <p>
                이것은 네줄짜리 텍스트를 보기 위함입니다. 이것은 네줄짜리
                텍스트를 보기 위함입니다.
              </p>
            </div>
            <div className="card">
              <img src="example.png" alt="icon" />
              <p>description for feature5</p>
            </div>
            <div className="card">
              <img src="example.png" alt="icon" />
              <p>description for feature6</p>
            </div>
          </div>
        </section>

        <section className="FAQ_SEC  main-style">
          <img className="service-icon" src="example.png" alt="icon" />
          <h2 className="title">자주 묻는 질문 / FAQ</h2>
          <Accordion
            title="Q1. 어떻게 사용하나요?"
            content={answer1}
            type="FAQ"
          />
          <Accordion
            title="Q2. 오늘 저녁은 뭔가요?"
            content={answer2}
            type="FAQ"
          />
          <Accordion
            title="Q3. 자주 묻는 질문이 뭔가요?"
            content={answer3}
            type="FAQ"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
