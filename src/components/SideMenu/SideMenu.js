import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SideMenu.css";
import Accordion from "../Accordion/Accordion";
import Dropdown from "../Dropdown/Dropdown";

const SideMenu = ({ isOpen }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = (path) => currentPath === path;

  const folderEdit = [
    { img: "example.png", content: "폴더 이름 수정" },
    { img: "example.png", content: "폴더 삭제" },
  ].map((item) => ({
    ...item,
  }));

  return (
    <div>
      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <Link
          to="/homepage"
          className={`home ${isActive("/homepage") ? "active" : ""}`}
        >
          <img className="icon" src="example.png" alt="icon" />
          <p>홈</p>
        </Link>
        <div className="folder">
          <Accordion
            type="SIDE_MENU"
            title="폴더"
            content={
              <>
                <Link
                  to="/folderpage"
                  className={`folder-item ${
                    isActive("/folderpage") ? "active" : ""
                  }`}
                >
                  폴더 1
                </Link>
                <Link
                  to="/folder2"
                  className={`folder-item ${
                    isActive("/folderpage") ? "active" : ""
                  }`}
                >
                  폴더 2
                </Link>
                <Link
                  to="/folder3"
                  className={`folder-item ${
                    isActive("/folderpage") ? "active" : ""
                  }`}
                >
                  폴더 3
                </Link>
              </>
            }
          />
        </div>
        <Link
          to="/remindpage"
          className={`reminditems ${isActive("/remindpage") ? "active" : ""}`}
        >
          <img className="icon" src="example.png" alt="icon" />
          <p>리마인드함</p>
        </Link>
        <Link
          to="/removeditemspage"
          className={`removeditems ${
            isActive("/removeditemspage") ? "active" : ""
          }`}
        >
          <img className="icon" src="example.png" alt="icon" />
          <p>휴지통</p>
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
