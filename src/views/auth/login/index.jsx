import { useRouter } from "next/router";
import Link from "next/link";
import style from "./Login.module.scss";

const LoginViews = () => {
  const { push } = useRouter();
  const handleLogin = () => {
    push("/product");
  };
  return (
    <div className={style.login}>
      <button onClick={() => handleLogin()}>Login</button>
      <p style={{ textAlign: "center", color: "red" }}>
        belum punya account? silahkan daftar di sini <Link href={"/auth/register"}>Daftar</Link>
      </p>
    </div>
  );
};
export default LoginViews;
