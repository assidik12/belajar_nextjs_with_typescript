import Link from "next/link";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      sudah punya account? silahkan login di sini <Link href="/auth/login">Login</Link>
    </div>
  );
};

export default RegisterPage;
