import { auth, provider } from "../firebase-config.js"
import { signInWithPopup} from "firebase/auth";

export const Auth = () => {
    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
    };

    return (
        <div className="auth">
            <p>구글로 로그인하세요.</p>
            <button onClick={signInWithGoogle}>구글로 로그인</button>
        </div>
    )
}