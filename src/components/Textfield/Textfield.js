// src/components/TextField.js
import React, { useRef, forwardRef } from "react";
import "./Textfield.css"; // 스타일 파일 (선택)
import Dropdown from "../Dropdown/Dropdown";
import { OutsideClick } from "../OutsideClick";

const TextField = forwardRef(({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  Icon,
  recentSearches = [],
  onSearchSelect,
  onSearchDelete,
}, ref) => {
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = OutsideClick(dropdownRef, false);

  const handleFocus = () => {
    setIsDropdownOpen(true);
  };

  const handleClick = () => {
    setIsDropdownOpen(true); // 입력 필드 클릭 시 항상 드롭다운 열기
  };
  
  const handleSelectSearch = (selected) => {
    onSearchSelect(selected.content); // 부모 컴포넌트로 선택된 값을 전달
    setIsDropdownOpen(false); // 선택 시 드롭다운 닫기
  };

  return (
    <div className="text-field" ref={dropdownRef}>
      {label && <label className="text-field-label">{label}</label>}
      <div className="text-filed-wrapper">
        {Icon && (
          <span className="text-field-img" aria-label="Field Icon">
            {" "}
            <Icon />{" "}
          </span>
        )}
        <input
          className="text-field-input"
          type={type}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onClick={handleClick} // 클릭 이벤트 추가
          placeholder={placeholder}
          required={required}
          ref={ref}
        />
      </div>
      {isDropdownOpen && recentSearches.length > 0 && (
        <Dropdown
          className="search-dropdown"
          options={recentSearches}
          label="최근검색"
          onSelect={handleSelectSearch}
          onDelete={onSearchDelete}
        />
      )}
    </div>
  );
});

export default TextField;
