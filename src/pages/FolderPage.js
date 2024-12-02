import React, { useState, useEffect } from "react";
import Header from "../components/Layout/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import ShowLinkCard from "../components/LinkCard/ShowLinkCard";
import Dropdown from "../components/Dropdown/Dropdown";
import BookmarkDetail from "../components/LinkCard/BookmarkDetail";

import "../components/Layout/main-layout.css";

const FolderPage = ({ bookmarks, onDeleteBookmark }) => {
  const [folderName, setFolderName] = useState(""); //폴더명
  const [loading, setLoading] = useState(true); //로딩 상태
  const [sortingOption, setSortingOption] = useState("최근저장"); //정렬 기준
  const [sortingDirOption, setSortingDirOption] = useState("오름차순"); //정렬 방향
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedBookmark, setSelectedBookmark] = useState(null);

  const sortingOpt = ["최근저장", "오래된저장", "이름순"].map((item) => ({
    label: item,
    content: item,
  }));
  const sortingDirOpt = ["오름차순", "내림차순"].map((item) => ({
    label: item,
    content: item,
  }));

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // 폴더명 API 받아오기
        const folderNameData = { label: "폴더명" };
        setFolderName(folderNameData.label);

        setLoading(false);
      } catch (error) {
        console.error("Fail to get user information", error);
        setLoading(false);
      }
    };
    fetchUserInfo();
  }, []);

  const handleDelete = (id) => onDeleteBookmark(id);
  const handleEdit = (id) => {
    //추후 수정 기능 코드 추가
  };

  // SORTING
  const handleSortingSelect = (option) => {
    setSortingOption(option.content);
  };
  const handleSortingDirSelect = (option) => {
    setSortingDirOption(option.content);
  };

  const handleBookmarkClick = (bookmark) => {
    console.log("Clicked bookmark:", bookmark);
    setSelectedBookmark(bookmark); // 클릭된 북마크 상태 저장
  };

  const handleBookmarkClose = () => {
    setSelectedBookmark(null); // 상세 정보를 닫기
  };

  return (
    <div
      className={`main-page ${isMenuOpen ? "menu-open" : ""} ${
        selectedBookmark ? "show-detail" : ""
      }`}
    >
      <Header toggleMenu={toggleMenu} />
      <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <section className="main-box">
        <h3>{folderName}</h3>

        <div className="sorting-options">
          <Dropdown
            className="sorting"
            label="최근저장"
            options={sortingOpt}
            onSelect={handleSortingSelect}
          />
          <Dropdown
            className="sorting"
            label="오름차순"
            options={sortingDirOpt}
            onSelect={handleSortingDirSelect}
          />
        </div>

        <ShowLinkCard
          bookmarks={bookmarks}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onLinkCardClick={handleBookmarkClick} // 북마크 클릭 핸들러 전달
          sideMenuOpen={isMenuOpen}
          bookmarkDetailOpen={selectedBookmark}
          sortingOption={sortingOption}
          sortingDirOption={sortingDirOption}
        />
      </section>
      {selectedBookmark && (
        <div className="bookmark-detail-container">
          <BookmarkDetail
            bookmark={selectedBookmark}
            onEdit={() => console.log("Edit clicked")}
            onDelete={() => console.log("Delete clicked")}
            onClose={handleBookmarkClose}
          />
        </div>
      )}
    </div>
  );
};

export default FolderPage;
