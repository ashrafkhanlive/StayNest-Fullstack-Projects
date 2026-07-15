import type { User, UserRole } from "@/types";

export type DemoAccount = User & {
  password: string;
};

export const demoAccounts: DemoAccount[] = [
  {
    id: "demo-guest",
    name: "Demo Guest",
    email: "guest@staynest.dev",
    password: "guest123",
    role: "GUEST",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "demo-host",
    name: "Demo Host",
    email: "host@staynest.dev",
    password: "host123",
    role: "HOST",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "demo-admin",
    name: "Demo Admin",
    email: "admin@staynest.dev",
    password: "admin123",
    role: "ADMIN",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
  },
];

export const defaultSignupRole: UserRole = "GUEST";
