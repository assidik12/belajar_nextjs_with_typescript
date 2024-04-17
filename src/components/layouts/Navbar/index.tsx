import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const { data }: any = useSession();

  return (
    <nav className={styles.navbar}>
      <h1>logo</h1>
      <div className={styles.account}>
        <div className={styles.profile}>
          {data && (
            <>
              <img className={styles.image} src={data?.user?.image} alt={data.user.fullname} />
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
  );
};

export default Navbar;
