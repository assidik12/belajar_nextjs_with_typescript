import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
  const { push } = useRouter();
  const handleLogin = () => {
    push("/product");
  };
  return (
    <div>
      <button onClick={() => handleLogin()}>Login</button>
      <p>
        belum punya account? silahkan daftar di sini <Link href={"/auth/register"}>Daftar</Link>
      </p>
    </div>
  );
};

export default LoginPage;
