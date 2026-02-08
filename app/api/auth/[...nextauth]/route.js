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
        const currentUser = await users.find(
          (user) => parseInt(user.password) === parseInt(password),
        );
        console.log(currentUser);
        if (currentUser) {
          return currentUser;
        } else {
          return null;
        }
      },
    }),
  ],
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
const users = [
  {
    name: "nadim mostofa",
    password: 1969120,
    email: "nadimmostafa334@gmail.com",
  },
  { name: "mostofa", password: 1969120, email: "n@gmail.com" },
];
