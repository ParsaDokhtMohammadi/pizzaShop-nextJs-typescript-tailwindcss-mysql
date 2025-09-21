import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "@/utils/auth";
import { db } from "@/utils/db";
import { IUser } from "@/types/types";

export const authOptions: AuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials ?? {};
        if (!username || !password) throw new Error("Incomplete data");

        const [rows] = await db.query<IUser[]>(
          "SELECT * FROM users WHERE username = ? LIMIT 1",
          [username] 
        );

        const user = rows[0];
        if (!user) throw new Error("User does not exist");

        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error("Invalid credentials");
        return { id: user.id.toString(), role: user.role, username: user.username };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as any).id;
        token.role = (user as any).role;
        token.username = (user as any).username;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.username = token.username as string;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
