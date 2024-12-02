// BookmarkList.js

import React, { useState, useEffect } from "react";
import LinkCard from "./LinkCard.js";
import "./ShowLinkCard.css";

//bookmarks : 북마크 데이터 배열(id, title, url 포함)
//onDelete : 북마크 삭제 함수
//북마크 목록 길이가 0보다 길면 렌더링
const ShowLinkCard = ({
  bookmarks,
  sideMenuOpen,
  bookmarkDetailOpen,
  onDelete,
  onEdit,
  onLinkCardClick,
  sortingOption,
  sortingDirOption,
}) => {
  const [gridColumns, setGridColumns] = useState(6); // 기본적으로 6개 열
  // 화면 크기와 메뉴 상태에 따라 그리드 열 개수를 동적으로 설정하는 함수
  const calculateGridColumns = () => {
    const windowWidth = window.innerWidth;
    let columns = 6; // 기본 열 개수

    // 메뉴가 열렸을 경우 화면 길이를 빼고 계산
    if (sideMenuOpen && bookmarkDetailOpen) {
      columns = Math.floor(
        (windowWidth -
          20 *
            parseFloat(getComputedStyle(document.documentElement).fontSize)) /
          200
      ); // sideMenu와 bookmarkDetail이 열렸을 때
    } else if (sideMenuOpen || bookmarkDetailOpen) {
      columns = Math.floor(
        (windowWidth -
          10 *
            parseFloat(getComputedStyle(document.documentElement).fontSize)) /
          200
      ); // 하나만 열렸을 때
    } else {
      columns = Math.floor(windowWidth / 200); // 기본적으로 윈도우 창 크기에 맞춰
    }

    setGridColumns(columns);
  };

  // 화면 크기 변경 시 그리드 열 개수 재계산
  useEffect(() => {
    window.addEventListener("resize", calculateGridColumns);
    calculateGridColumns(); // 최초 렌더링 시 한 번 호출

    // 이벤트 리스너 정리
    return () => {
      window.removeEventListener("resize", calculateGridColumns);
    };
  }, [sideMenuOpen, bookmarkDetailOpen]); // 메뉴 상태가 변경될 때마다 호출

  //Sorting
  const sortBookmarks = (bookmarks, sortingOption, sortingDir) => {
    let sorted = [...bookmarks];

    if (sortingOption === "최근저장") {
      sorted = sorted.sort((a, b) => b.id - a.id);
    } else if (sortingOption === "오래된저장") {
      sorted = sorted.sort((a, b) => a.id - b.id);
    } else if (sortingOption === "이름순") {
      sorted = sorted.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sortingDir === "내림차순") {
      sorted = sorted.reverse();
    }
    return sorted;
  };
  const sortedBookmarks = sortBookmarks(
    bookmarks,
    sortingOption,
    sortingDirOption
  );

  return (
    <div
      className="bookmark-grid"
      style={{ gridTemplateColumns: `repeat(${gridColumns}, 1fr)` }}
    >
      {sortedBookmarks.length > 0 ? (
        sortedBookmarks.map((bookmark) => (
          <LinkCard
            key={bookmark.id} //리스트에서 고유 식별자 사용
            bookmark={bookmark} //각 북마크 데이터를 BookmarkItem에 전달
            onDelete={onDelete} //삭제 기능을 BookmarkItem에 전달
            onEdit={onEdit}
            onClick={() => {
              console.log("Card clicked:", bookmark);
              onLinkCardClick(bookmark); // 안전하게 호출
            }}
          />
        ))
      ) : (
        <p>...</p>
      )}
    </div>
  );
};

export default ShowLinkCard;
