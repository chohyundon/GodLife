import { FirebaseGoogleLogin } from "../lib/googleAuth";

export const loginWithFirebase = async () => {
  try {
    const result = await FirebaseGoogleLogin();
    if (result) {
      return result.user;
    }
  } catch (error) {
    console.error("로그인 실패:", error);
  }
};
