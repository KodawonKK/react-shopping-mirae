import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import "./App.css";

// 쇼핑몰 프로젝트
// 메인 페이지
// 상품 디테일 페이지

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
