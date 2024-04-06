import { useRouter } from "next/router";
import Link from "next/link";
import style from "./Login.module.scss";
import InputFrom from "../../../components/elements/input/index";
import Button from "../../../components/elements/button/index";
const LoginViews = () => {
  const { push } = useRouter();
  const handleLogin = () => {
    push("/product");
  };
  return (
    <div className={style.login}>
      {/* <button onClick={() => handleLogin()}>Login</button> */}
      <form>
        <InputFrom name="email" label="Email" type="email" placeholder="Email" />
        <InputFrom name="password" label="Password" type="password" placeholder="Password" />
        <Button>masuk</Button>
      </form>
      <p style={{ textAlign: "center", color: "red" }}>
        belum punya account? silahkan daftar di sini <Link href={"/auth/register"}>Daftar</Link>
      </p>
    </div>
  );
};
export default LoginViews;
