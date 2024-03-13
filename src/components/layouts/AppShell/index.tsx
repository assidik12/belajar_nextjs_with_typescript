import { useRouter } from "next/router";
import Navbar from "../Navbar";

type Props = {
  children: React.ReactNode;
};

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

const AppShell = (props: Props) => {
  const { pathname } = useRouter();
  const { children } = props;

  return (
    <main>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;
