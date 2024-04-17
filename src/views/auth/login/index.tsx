import Link from "next/link";
import style from "./Login.module.scss";
import InputFrom from "../../../components/elements/input/index";
import Button from "../../../components/elements/button/index";
import { useRouter } from "next/router";
import { useState } from "react";
import { signIn } from "next-auth/react";
const LoginViews = () => {
  const { push, query } = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const callbackUrl = (query.callbackUrl as string) || "/";

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const res: any = await signIn("credentials", {
      redirect: false,
      email: e.target.email.value,
      password: e.target.password.value,
      callbackUrl,
    });
    if (!res?.error) {
      setLoading(false);
      push(callbackUrl);
    } else {
      setLoading(false);
      setError(res.error);
    }
  };
  return (
    <div className={style.login}>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <InputFrom name="email" label="Email" type="email" placeholder="Email" />
        <InputFrom name="password" label="Password" type="password" placeholder="Password" />
        <Button loading={loading} type="submit">
          {loading ? "..." : "masuk"}
        </Button>
      </form>
      <div>
        <Button
          // loading={loading}
          onclick={() => {
            signIn("google", {
              callbackUrl,
              redirect: false,
            });
          }}
        >
          login dengan google
        </Button>
        <p>
          sudah punya account? silahkan login di sini <Link href="/auth/register">register</Link>
        </p>
      </div>
    </div>
  );
};
export default LoginViews;
