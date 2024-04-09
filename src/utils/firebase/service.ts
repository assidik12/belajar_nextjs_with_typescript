import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import app from "./init";
import bycript from "bcrypt";
const firestore = getFirestore(app);

export async function getData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  return data;
}

export async function retriveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function signUp(
  userData: {
    id: string;
    email: string;
    fullName: string;
    password: string;
  },
  callback: Function
) {
  if (userData.password.length < 10 || userData.password === "") {
    return callback({ ststus: false, message: "kata sandi minimal 10 karakter" });
  } else {
    const q = query(collection(firestore, "users"), where("email", "==", userData.email));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (data.length > 0) {
      callback({ ststus: false, message: "email already exist" });
    } else {
      try {
        // Hash the password before storing
        userData.password = await bycript.hash(userData.password, 10);
        // userData.role = "user";
        await addDoc(collection(firestore, "users"), userData);
        callback({ status: true, message: "registration successful" });
      } catch (error) {
        console.error(error);
        callback({ status: false, message: error });
      }
    }
  }
}

export async function signIn(userData: { email: string }) {
  const q = query(collection(firestore, "users"), where("email", "==", userData.email));
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (data.length > 0) {
    return data[0];
  } else {
    return null;
  }
}
