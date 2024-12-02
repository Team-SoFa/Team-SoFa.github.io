import React from "react";
import { Link } from "react-router-dom";
import "./footer-layout.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>서비스 메인 슬로건 코멘트</h2>
      <button className="button">시작하기</button>
      <div className="footer-contents">
        <div className="left-contents">
          <p>copyrights @sofa</p>
          <p>기타 내용1</p>
          <p>기타 내용2</p>
        </div>
        <div className="right-contents">
          <Link to="/termspage">
            <p>이용약관</p>
          </Link>
          <Link to="/privacypolicy">
            <p>개인정보처리방침</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
