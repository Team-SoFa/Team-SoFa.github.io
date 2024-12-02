import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TextField from "../Textfield/Textfield";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import Modal from "../Modal/Modal"; // Modal 컴포넌트 import

import "./HeaderStyle.css";
import MenuIcon from "../../assets/icon/MenuIcon";
import DownIcon from "../../assets/icon/DownIcon";
import SearchIcon from "../../assets/icon/SearchIcon";
import AlarmLineIcon from "../../assets/icon/AlarmLineIcon";
import AlarmFilledIcon from "../../assets/icon/AlarmFilledIcon";

const Header = ({ type, toggleMenu }) => {
  const location = useLocation();
  const [alarmOption, setAlarmOption] = useState("");
  const [folderOption, setFolderOption] = useState("폴더선택");
  const [tagOption, setTagOption] = useState("태그선택");
  const [searchValue, setSearchValue] = useState(""); //검색창 최근검색어 임시 값
  const [isHovered, setIsHovered] = useState(false);

  // ================ 임시 데이터 =====================
  const [recentSearches, setRecentSearches] = useState([
    { img: "example.png", content: "React" },
    { img: "example.png", content: "JavaScript" },
    { img: "example.png", content: "Frontend" },
    { img: "example.png", content: "CSS" },
    { img: "example.png", content: "개발자 꿀팁" },
    { img: "example.png", content: "html은 무엇인가" },
  ]);

  const folderOpt = ["폴더1", "폴더2", "폴더3"].map((item) => ({
    label: item,
    content: item,
  }));
  const tagsOpt = ["Documents", "Pictures", "Music", "태그어쩌구1"].map(
    (item) => ({
      label: item,
      content: item,
    })
  );
  const alarmOptions = [
    {
      img: "example.png",
      label: "리마인드",
      content: "3일 후 휴지통에서 n개의 링크들이 영원히 빛을 잃게 됩니다.",
    },
    {
      img: "example.png",
      label: "어쩌구",
      content: "또 어떤 알람이 있을까요",
    },
    {
      img: "example.png",
      label: "리마인드",
      content: "새로운 업데이트가 있습니다.",
    },
    {
      img: "example.png",
      label: "리마인드",
      content: "새로운 업데이트가 있습니다.",
    },
    {
      img: "example.png",
      label: "리마인드",
      content: "새로운 업데이트가 있습니다.",
    },
    {
      img: "example.png",
      label: "리마인드",
      content: "새로운 업데이트가 있습니다.",
    },
  ].map((item) => ({
    ...item,
  }));
  const profileImg = "example.png";

  // ================ 임시 데이터 =====================

  const handleAlarmSelect = (option) => {
    setAlarmOption(option.content);
  };
  const handleFolderSelect = (option) => {
    setFolderOption(option.content);
  };
  const handleTagSelect = (option) => {
    setTagOption(option.content);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  // 검색어 삭제 처리 함수
  const handleSearchDelete = (searchToDelete) => {
    const updatedSearches = recentSearches.filter(
      (search) => search.content !== searchToDelete
    );
    setRecentSearches(updatedSearches); // 상태 업데이트
  };

  const headerStyle =
    type === "ONBOARDING"
      ? { backgroundColor: "#F1F1F1", paddingTop: "1rem" }
      : {};
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가

  // 모달 open/close 함수
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  //마우스 호버 이벤트 함수
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <header className="header" style={headerStyle}>
      {/* ========== LINK CARD PAGES ========== */}
      {location.pathname !== "/" && (
        <>
          <Button
            className="menu-img"
            onClick={toggleMenu}
            Icon={MenuIcon}
            imgAlt="menu"
          />
          <div className="searchers">
            <Dropdown
              className="dropdown-folder-select"
              options={folderOpt}
              label="폴더 전체"
              Icon={DownIcon}
              onSelect={handleFolderSelect}
            />
            <Dropdown
              className="dropdown-tag-select"
              options={tagsOpt}
              label="태그선택"
              Icon={DownIcon}
              onSelect={handleTagSelect}
            />
            <TextField
              className="text_field"
              placeholder="검색어를 입력하세요."
              Icon={SearchIcon}
              value={searchValue}
              onChange={handleSearchChange}
              recentSearches={recentSearches} // 최근 검색어 전달
              onSearchSelect={
                (selected) => setSearchValue(selected) // 선택된 검색어를 검색창에 반영
              }
              onSearchDelete={handleSearchDelete}
            />
            <Button className="search" label="검색" />
            <Button label="초기화" />
          </div>
          <div className="user_info">
            <Dropdown
              className="alarm"
              options={alarmOptions}
              Icon={isHovered ? AlarmFilledIcon : AlarmLineIcon}
              onSelect={handleAlarmSelect}
              onMouseEnter={handleMouseEnter} // 마우스 오버 시 상태 변경
              onMouseLeave={handleMouseLeave} // 마우스 아웃 시 상태 변경
            />
            <Button
              className="user-info"
              imgSrc="example.png"
              imgAlt="user-info"
              onClick={openModal}
            />
            <Modal isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </>
      )}

      {/* ========== Landing PAGE ========== */}
      {location.pathname === "/" && (
        <>
          <img
            className="logo"
            src="example.png"
            alt="logo"
            onClick={() => window.location.reload()}
          />
          <div className="buttons">
            <Button label="확장 프로그램 추가하기" />
            <Link to="/homepage">
              <Button label="[임시]홈P" />
            </Link>
            <Link to="/signpage">
              <Button label="[임시]SignP" />
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
