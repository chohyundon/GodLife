import style from "./Login.module.css";
import { GoogleUserLogin } from "../../index";

export function LoginHome() {
  const inputData = [
    { name: "id", placeholder: "아이디를 입력해주새요" },
    { name: "password", placeholder: "비밀번호를 입력해주새요" },
  ];

  return (
    <div className={style.loginContent}>
      <div className={style.loginBox}>
        <h1 className={style.loginMainTitle}>갓생살기 😎</h1>
        <h3 className={style.loginSubTitle}>로그인 해주세요</h3>
        <form className={style.formContainer}>
          {inputData.map((inputData) => (
            <input
              name={inputData.name}
              placeholder={inputData.placeholder}
              className={style.inputBox}
            />
          ))}
          <button className={style.loginButton}>LOGIN</button>
        </form>
        <GoogleUserLogin />
      </div>
    </div>
  );
}
