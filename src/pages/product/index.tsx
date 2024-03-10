import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const productPage = () => {
  const [login, setLogin] = useState(false);
  const { push } = useRouter();
  useEffect(() => {
    if (!login) {
      push("/auth/login");
    }
  });
  return (
    <div>
      <h1>Product Page</h1>
      <p>ini adalah halaman </p>
    </div>
  );
};

export default productPage;
