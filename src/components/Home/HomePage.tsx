import { Title } from "../HomeTitle/Title";
import { useUserStore } from "../Store/userStore";
import style from "./Home.module.css";

export function HomePage() {
  const { userData } = useUserStore();
  const isUserData = userData?.displayName;

  return (
    <div className={style.HomeContainer}>
      <Title />
      <div>
        <p>{isUserData ? "로그인" : "로그아웃"}</p>
      </div>
    </div>
  );
}
