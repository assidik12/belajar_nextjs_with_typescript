import { useRouter } from "next/router";
import Navbar from "../Navbar";
import { Roboto } from "next/font/google";

type Props = {
  children: React.ReactNode;
};

const disableNavbar = ["/auth/login", "/auth/register", "/404"];
const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});

const AppShell = (props: Props) => {
  const { pathname } = useRouter();
  const { children } = props;

  return (
    <main className={roboto.className}>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;
