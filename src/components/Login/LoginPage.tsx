import style from "./Login.module.css";
import { GoogleUserLogin } from "../index";

export function LoginHome() {
  return (
    <div className={style.loginContent}>
      <div className={style.loginBox}>
        <h1 className={style.loginMainTitle}>갓생살기 😎</h1>
        <h3 className={style.loginSubTitle}>로그인 해주세요</h3>
        <GoogleUserLogin />
      </div>
    </div>
  );
}
