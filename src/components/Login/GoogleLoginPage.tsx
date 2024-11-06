import { useEffect } from "react";
import style from "./Login.module.css";
import { useUserStore } from "../Store/userStore";
import {
  setLocalStorageData,
  getLocalStorageData,
  // removeLocalStorage,
  loginWithFirebase,
} from "../index";

import { FaGoogle } from "react-icons/fa";

export function GoogleUserLogin() {
  const { setUserData } = useUserStore();

  //로그인 시 loginWithFirebase 함수로 이동후 user 데이터 반환, 데이터 잘 반환되면 그 떄 세션 스토리지에 데이터 저장
  const handleGoogleLogin = async () => {
    const user = await loginWithFirebase();
    if (user) {
      setUserData(user);

      const userDisplayName = user.displayName ?? "로그인 해주세요!";
      const userPhotoURL = user.photoURL ?? "로그인 해주세요!";

      setLocalStorageData("displayName", userDisplayName);
      setLocalStorageData("photoURL", userPhotoURL);
    }
  };

  //처음 렌더링 되었을때, 세션 스토리지에 유저 데이터 있을시 데이터를 가져옴
  useEffect(() => {
    const storageName = getLocalStorageData("displayName");
    const storageURL = getLocalStorageData("photoURL");

    if (storageName && storageURL) {
      setUserData({ displayName: storageName, photoURL: storageURL });
    }
  }, [setUserData]);

  return (
    <>
      <div className={style.googleLoginBox} onClick={handleGoogleLogin}>
        <FaGoogle />
        <p>Sign in With Google</p>
      </div>
    </>
  );
}
