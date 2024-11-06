import { create } from "zustand";
import { userType } from "../../type/type";

type UserState = {
  userData: userType | null;
  setUserData: (user: userType | null) => void;
};

export const useUserStore = create<UserState>((set) => ({
  userData: JSON.parse(localStorage.getItem("userData") || "null"), // 초기값
  setUserData: (data) => {
    localStorage.setItem("userData", JSON.stringify(data)); // 로컬 스토리지에 저장
    set({ userData: data }); // 상태 업데이트
  },
}));
