import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      userId: number;
      userAuthToken?: string;
      imageUrl?: string;
      name?: string;
    };
  }
  interface User {
    login: string;
    avatar_url: string;
    id: number;
    name: string;
    email: string;
    authType: string;
    password: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId: number;
    userAuthToken?: string;
    imageUrl?: string;
  }
}

export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SALT: string;
      NEXT_AUTH_SECRET: string;
      GITHUB_ID: string;
      GITHUB_SECRET: string;
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
    }
  }
}
