import { signIn, signInWithGoogle } from "@/utils/firebase/service";
import nextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";

const nextOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials: any) {
        const { email, password } = credentials as {
          email: string;
          password: string;
          fullname: string;
        };
        const user: any = await signIn({ email });
        if (user) {
          const passwordConfirm = await bcrypt.compare(password, user.password);
          if (passwordConfirm) {
            return user;
          }
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SCREET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }: any) {
      if (account?.provider === "credentials") {
        token.email = user.email;
        token.role = user.role;
        token.fullname = user.fullname;
      }
      if (account?.provider === "google") {
        const data = {
          fullname: user.name,
          email: user.email,
          image: user.image,
          type: "google",
        };

        await signInWithGoogle(data, (result: any) => {
          if (result.status) {
            token.email = result.data.email;
            token.fullname = result.data.fullname;
            token.type = result.data.type;
            token.image = result.data.image;
            token.role = result.data.role;
          }
        });
      }

      return token;
    },
    async session({ session, token }: any) {
      if (token.email) {
        session.user.email = token.email;
      }
      if (token.fullname) {
        session.user.fullname = token.fullname;
      }
      if (token.role) {
        session.user.role = token.role;
      }
      if (token.image) {
        session.user.image = token.image;
      }

      return session;
    },
  },

  pages: {
    signIn: "/auth/login",
  },
};

export default nextAuth(nextOptions);
