import Link from "next/link";
import style from "./Register.module.scss";
import InputFrom from "../../../components/elements/input/index";
import Button from "../../../components/elements/button/index";
import { useRouter } from "next/router";
import { useState } from "react";
const RegisterViews = () => {
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const data = {
      fullName: e.target.fullname.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      e.target.reset();
      setLoading(false);
      push("/auth/login");
    } else {
      if (data.password.length < 10 || data.password === "") {
        setLoading(false);
        setError("password minimal 10 karakter");
      } else {
        setLoading(false);
        setError("email sudah terdaftarkan!!");
      }
    }
  };
  return (
    <div className={style.register}>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <InputFrom name="fullname" label="Nama Lengkap" type="text" placeholder="Nama Lengkap" />
        <InputFrom name="email" label="Email" type="email" placeholder="Email" />
        <InputFrom name="password" label="Password" type="password" placeholder="Password" />
        <Button loading={loading} type="submit">
          {loading ? "..." : "daftar"}
        </Button>
      </form>
      <p>
        sudah punya account? silahkan login di sini <Link href="/auth/login">Login</Link>
      </p>
    </div>
  );
};
export default RegisterViews;
