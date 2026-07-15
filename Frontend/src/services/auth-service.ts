import { apiClient } from "@/services/api-client";
import { defaultSignupRole, demoAccounts, type DemoAccount } from "@/constants/auth";
import type { User } from "@/types";

export type AuthResponse = {
  token: string;
  user: User;
};

const localUsersKey = "staynest-local-users";

function toUser(account: DemoAccount): User {
  return {
    id: account.id,
    name: account.name,
    email: account.email,
    avatar: account.avatar,
    phone: account.phone,
    role: account.role,
  };
}

function getLocalUsers(): DemoAccount[] {
  if (typeof window === "undefined") return demoAccounts;
  const stored = window.localStorage.getItem(localUsersKey);
  if (!stored) return demoAccounts;
  try {
    const parsed = JSON.parse(stored) as DemoAccount[];
    const merged = [...demoAccounts];
    parsed.forEach((user) => {
      if (!merged.some((item) => item.email === user.email)) {
        merged.push(user);
      }
    });
    return merged;
  } catch {
    return demoAccounts;
  }
}

function saveLocalUsers(users: DemoAccount[]) {
  if (typeof window === "undefined") return;
  const customUsers = users.filter(
    (user) => !demoAccounts.some((demo) => demo.email === user.email),
  );
  window.localStorage.setItem(localUsersKey, JSON.stringify(customUsers));
}

function createLocalToken(user: User) {
  return `local-demo-token-${user.role.toLowerCase()}-${user.id}`;
}

function localLogin(payload: { email: string; password: string }): AuthResponse {
  const user = getLocalUsers().find(
    (account) =>
      account.email.toLowerCase() === payload.email.toLowerCase() &&
      account.password === payload.password,
  );
  if (!user) {
    throw new Error("Invalid email or password");
  }
  const safeUser = toUser(user);
  return {
    token: createLocalToken(safeUser),
    user: safeUser,
  };
}

function localSignup(payload: {
  name: string;
  email: string;
  password: string;
}): AuthResponse {
  const users = getLocalUsers();
  const exists = users.some(
    (account) => account.email.toLowerCase() === payload.email.toLowerCase(),
  );
  if (exists) {
    throw new Error("An account with this email already exists");
  }
  const account: DemoAccount = {
    id: `local-${Date.now()}`,
    name: payload.name,
    email: payload.email,
    password: payload.password,
    role: defaultSignupRole,
  };
  const nextUsers = [...users, account];
  saveLocalUsers(nextUsers);
  const user = toUser(account);
  return {
    token: createLocalToken(user),
    user,
  };
}

function localBecomeHost(user: User): User {
  const updatedUser: User = {
    ...user,
    role: "HOST",
  };

  const users = getLocalUsers().map((account) =>
    account.email.toLowerCase() === user.email.toLowerCase()
      ? { ...account, role: "HOST" as const }
      : account,
  );
  saveLocalUsers(users);

  return updatedUser;
}

export const authService = {
  async login(payload: { email: string; password: string }) {
    try {
      const { data } = await apiClient.post<AuthResponse>("/auth/login", payload);
      return data;
    } catch {
      return localLogin(payload);
    }
  },

  async signup(payload: { name: string; email: string; password: string }) {
    try {
      const { data } = await apiClient.post<AuthResponse>("/auth/signup", payload);
      return data;
    } catch {
      return localSignup(payload);
    }
  },

  async forgotPassword(payload: { email: string }) {
    try {
      const { data } = await apiClient.post<{ message: string }>(
        "/auth/forgot-password",
        payload,
      );
      return data;
    } catch {
      const exists = getLocalUsers().some(
        (account) => account.email.toLowerCase() === payload.email.toLowerCase(),
      );
      return {
        message: exists
          ? "Local reset instructions generated for demo account"
          : "If this email exists, reset instructions will be sent",
      };
    }
  },

  async becomeHost(user: User) {
    try {
      const { data } = await apiClient.post<User>("/auth/become-host");
      return data;
    } catch {
      return localBecomeHost(user);
    }
  },

  async me() {
    const { data } = await apiClient.get<User>("/auth/me");
    return data;
  },
};
