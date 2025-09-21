import "next-auth";

declare module "next-auth" {
  interface User {
    role?: Role;
    id: string;
  }

  interface Session {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: Role;
    id?: string;
  }
}
