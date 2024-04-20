import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { SessionProvider } from "next-auth/react";
const Navbar = () => {
  const { data }: any = useSession();

  return (
    <SessionProvider session={data}>
      <nav className={styles.navbar}>
        <h1>logo</h1>
        <div className={styles.account}>
          <div className={styles.profile}>
            {data && (
              <>
                <Image className={styles.image} src={data?.user?.image} width={60} height={60} alt={data?.user?.fullname} />
                <h3>{data.user?.fullname}</h3>
              </>
            )}
          </div>
          <div>
            {!data ? (
              <button onClick={() => signIn()} className={styles.btn}>
                login
              </button>
            ) : (
              <button onClick={() => signOut()} className={styles.btn}>
                logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </SessionProvider>
  );
};

export default Navbar;
