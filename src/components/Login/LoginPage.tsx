import { useEffect } from "react";
import { loginWithFirebase } from "../../hooks/useLogin";
import style from "./Login.module.css";
import { useUserStore } from "../Store/userStore";

export function Login() {
  const { userData, setUserData } = useUserStore();

  //로그인 시 loginWithFirebase 함수로 이동후 user 데이터 반환, 데이터 잘 반환되면 그 떄 세션 스토리지에 데이터 저장
  const handleLogin = async () => {
    const user = await loginWithFirebase();
    if (user) {
      setUserData(user);

      const { displayName, photoURL } = user;

      window.localStorage.setItem(
        "displayName",
        displayName || "사용자 이름 없음"
      );
      window.localStorage.setItem("photoURL", photoURL || "");
    }
  };

  //처음 렌더링 되었을때, 세션 스토리지에 유저 데이터 있을시 데이터를 가져옴
  useEffect(() => {
    const storageName = window.localStorage.getItem("displayName") || null;
    const storageURL = window.localStorage.getItem("photoURL") || null;

    if (storageName && storageURL) {
      setUserData({ displayName: storageName, photoURL: storageURL });
    }
  }, [setUserData]);

  //로그아웃 버튼을 클릭시 useState null로 만들고 세션 스토리지의 값도 삭제
  const handleLogOut = () => {
    setUserData(null);
    window.localStorage.removeItem("displayName");
    window.localStorage.removeItem("photoURL");
  };

  return (
    <>
      {userData ? (
        <div className={style.loginContainer}>
          <div className={style.userContainer}>
            <img
              src={userData.photoURL ? userData.photoURL : "로그인 해주세요"}
              alt="User Profile"
            />
            <p>{userData.displayName}</p>
          </div>
          <button onClick={handleLogOut}>로그아웃</button>
        </div>
      ) : (
        <button onClick={handleLogin}>로그인</button>
      )}
    </>
  );
}