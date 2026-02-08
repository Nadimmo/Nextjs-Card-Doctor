import client from "@/lib/mongodb";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  secret: process.env.PUBLIC_NEXT_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: {
          label: "Name",
          type: "text",
          placeholder: "Enter Your Name",
          required: true,
        },
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter Your Email",
          required: true,
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Your Password",
          required: true,
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        const { email, password } = credentials;
        const currentUser = await client
          .db("CarPro")
          .collection("Users")
          .findOne({ email: email });
        // console.log(currentUser);
        if (parseInt(currentUser.password) === parseInt(password)) {
          return currentUser;
        } else {
          return null;
        }
      },
    }),
  ],

  callback: {
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, user, token }) {
      return session;
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
