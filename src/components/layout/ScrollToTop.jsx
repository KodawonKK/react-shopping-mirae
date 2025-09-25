import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // 현재 경로

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 바뀔 때마다 맨 위로 이동
  }, [pathname]);

  return null;
};

export default ScrollToTop;
