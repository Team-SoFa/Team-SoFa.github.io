import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Layout/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import ShowLinkCard from "../components/LinkCard/ShowLinkCard";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
// import Tagcard from "../components/Tagcard/Tagcard";

import "../components/Layout/main-layout.css";
import RemovedItemsPage from "./RemovedItemsPage";
import FolderPage from "./FolderPage";
import BookmarkDetail from "../components/LinkCard/BookmarkDetail"; // 상세 정보 컴포넌트 import

const HomePage = ({ bookmarks, onAddBookmark, onDeleteBookmark }) => {
  const location = useLocation();
  const [username, setUsername] = useState(""); //사용자 이름
  const [mostPopularTags, setMostPopularTags] = useState("");
  const [loading, setLoading] = useState(true); //로딩 상태
  const [isMenuOpen, setIsMenuOpen] = useState(false); //사이드메뉴 열림 상태
  // const [sortingOption, setSortingOption] = useState("");
  // const [selectedTags, setSelectedTags] = useState([]);

  // 북마크 선택 상태 추가
  const [selectedBookmark, setSelectedBookmark] = useState(null);

  const renderSection = () => {
    switch (location.pathname) {
      case "/removeditemspage":
        return <RemovedItemsPage />;
      case "/folderpage":
        return (
          <FolderPage bookmarks={bookmarks} onAddBookmark={handleAddBookmark} />
        );
      default:
        return (
          <div className="main-box">
            <h3>안녕하세요, {username}님!</h3>

            <div className="link-set">
              <div className="_text">
                <p className="_title">{username}님께 추천하는 링크</p>
                <Link to="/homepage" className="more">
                  더보기&gt;
                </Link>
              </div>
              <ShowLinkCard
                bookmarks={bookmarks}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onLinkCardClick={handleBookmarkClick} // 북마크 클릭 핸들러 전달
                sideMenuOpen={isMenuOpen}
                bookmarkDetailOpen={selectedBookmark}
                // sortingOption={sortingOption}
              />
            </div>
            <div className="link-set">
              <div className="_text">
                <p className="_title">최근에 방문한 링크</p>
                <Link to="/homepage" className="more">
                  더보기&gt;
                </Link>
              </div>
              <ShowLinkCard
                bookmarks={bookmarks}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onLinkCardClick={handleBookmarkClick}
                sideMenuOpen={isMenuOpen}
                bookmarkDetailOpen={selectedBookmark}
                // sortingOption={sortingOption}
              />
            </div>
            <div className="link-set">
              <div className="_text">
                <p className="_title">
                  {username}님의 최다 태그
                  <Button label={mostPopularTags} className="tag" />를 포함한
                  링크
                </p>
                <Link to="/homepage" className="more">
                  더보기&gt;
                </Link>
              </div>
              <ShowLinkCard
                bookmarks={bookmarks}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onLinkCardClick={handleBookmarkClick}
                sideMenuOpen={isMenuOpen}
                bookmarkDetailOpen={selectedBookmark}
                // sortingOption={sortingOption}
              />
            </div>
          </div>
        );
    }
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // USER INFO
        //const userResponse = await fetch("/api/user");
        //const userData = await userResponse.json();
        const userData = { nickname: "000" };
        setUsername(userData.nickname);

        // MOST_POPULAR_TAGS
        // const topTagsResponse = await fetch("/api/tags/top");
        // const topTagsData = await topTagsResponse.json();
        const topTagsData = { label: "탑태그" };
        setMostPopularTags(topTagsData.label);

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
  const handleAddBookmark = (newBookmark) => {
    onAddBookmark(newBookmark);
  };

  const handleBookmarkClick = (bookmark) => {
    console.log("Clicked bookmark:", bookmark);
    setSelectedBookmark(bookmark); // 클릭된 북마크 상태 저장
  };

  const handleBookmarkClose = () => {
    setSelectedBookmark(null); // 상세 정보를 닫기
  };

  // TAG
  // const handleTagSelect = (tag) => {
  //   if (!selectedTags.includes(tag)) {
  //     setSelectedTags([...selectedTags, tag]); //태그 추가
  //   }
  // };
  // const handleTagRemove = (tag) => {
  //   setSelectedTags(selectedTags.filter((t) => t !== tag)); //태그 제거
  // };

  // SORTING
  // const handleSortingSelect = (option) => {
  //   setSortingOption(option);
  // };

  //SideMenu Toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`main-page 
        ${isMenuOpen ? "menu-open" : ""} 
        ${selectedBookmark ? "show-detail" : ""}`}
    >
      <Header toggleMenu={toggleMenu} />
      <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <section>{renderSection()}</section>

      {/* 상세 정보 */}
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

export default HomePage;
