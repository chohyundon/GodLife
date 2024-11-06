import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, LoginHome } from "./components/index";
import { useUserStore } from "./components/Store/userStore";

export default function App() {
  const isUserData = useUserStore();
  const isUser = isUserData.userData?.displayName;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={isUser ? <HomePage /> : <LoginHome />}
          />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
