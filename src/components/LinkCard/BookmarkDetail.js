// src/components/Bookmark/BookmarkDetail.js
import React from "react";
import "./BookmarkDetail.css";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";

const BookmarkDetail = ({ isOpen, bookmark, onEdit, onDelete, onClose }) => {
  if (!bookmark) return <p>북마크를 선택하세요.</p>;

  // 예시 데이터 추가
  const exampleTags = ["React", "JavaScript", "Frontend", "CSS"];
  const folderOpt = ["폴더1", "폴더2", "폴더3"];

  return (
    <div className={`bookmark-detail ${isOpen ? "open" : ""}`}>
      {/* 상단 이미지 및 제목 */}
      <div className="bookmark-detail-header">
        <img src="example.png" alt={bookmark.title} className="detail-image" />
        <div className="detail-info">
          <div className="row">
            <Button label="링크 바로가기" />
            <Dropdown className="folder" options={folderOpt} label="폴더선택" />
          </div>
          <div className="detail-title-container">
            <h2 className="detail-title">{bookmark.title}</h2>
            <Button className="detail-edit" label="수정" />
          </div>
        </div>
      </div>

      {/* 자동 요약 */}
      <h4>자동 요약</h4>
      <div className="detail-summary">
        <h3>자동 요약</h3>
        <p className="summary-text">
          AI가 생성한 요약 텍스트가 여기에 표시됩니다. 요약 내용을 넣을 수
          있습니다.
        </p>
        <Button className="detail-edit" label="수정" />
      </div>

      {/* 추가 설명 */}
      <h4>추가 설명</h4>
      <div className="detail-description">
        <h3>추가 설명</h3>
        <p className="description-text">
          추가 설명이 여기에 들어갑니다. 필요에 따라 더 많은 설명을 표시할 수
          있습니다.
        </p>
        <Button className="detail-edit" label="수정" />
      </div>

      {/* 태그 섹션 */}
      <div className="detail-tags">
        <h3>태그</h3>
        <div className="tags-container">
          {exampleTags.map((tag, index) => (
            <span key={index} className="tag-item">
              {tag}
            </span>
          ))}
          <button className="add-tag-btn">+</button>
        </div>
      </div>

      {/* 닫기 버튼 */}
      <button className="close-button" onClick={onClose}>
        닫기
      </button>
    </div>
  );
};

export default BookmarkDetail;
