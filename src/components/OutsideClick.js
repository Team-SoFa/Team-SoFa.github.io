import { useEffect, useState } from "react";

export const OutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(false); // 외부를 클릭하면 닫힘
      }
    };

    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};
