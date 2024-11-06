import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebaseconig";

export async function FirebaseGoogleLogin() {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    return result;
  } catch (error) {
    console.error("Google 로그인 에러:", error);
    throw error;
  }
}
