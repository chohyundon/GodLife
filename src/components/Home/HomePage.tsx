import { Title } from "../HomeTitle/Title";
import { LoginHome } from "../index";
import style from "./Home.module.css";

export function HomePage() {
  return (
    <div className={style.HomeContainer}>
      <Title />
      <LoginHome />
    </div>
  );
}
