import { create } from "zustand";
import { userType } from "../../type/type";

//userData와 업데이트 userData를 업데이트 하는 함수 타입을 지정함
type UserState = {
  userData: userType | null;
  setUserData: (user: userType | null) => void;
};

//zustand의 set을 통해 상태를 업데이트함
//setUserData는 user 파라미터를 받아 set을 통해 userData를 업데이트하는 함수다
export const useUserStore = create<UserState>((set) => ({
  userData: null,
  setUserData: (user) => set({ userData: user }),
}));
