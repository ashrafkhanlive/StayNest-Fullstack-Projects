"use client";

import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { authService } from "@/services/auth-service";
import { useAuthStore } from "@/store/auth-store";

export function useAuthActions() {
  const setAuth = useAuthStore((state) => state.setAuth);
  const setUser = useAuthStore((state) => state.setUser);
  const logout = useAuthStore((state) => state.logout);

  const login = useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      setAuth(data.token, data.user);
      toast.success("Welcome back");
    },
    onError: () => toast.error("Login failed"),
  });

  const signup = useMutation({
    mutationFn: authService.signup,
    onSuccess: (data) => {
      setAuth(data.token, data.user);
      toast.success("Account created");
    },
    onError: () => toast.error("Signup failed"),
  });

  const forgotPassword = useMutation({
    mutationFn: authService.forgotPassword,
    onSuccess: () => toast.success("Reset instructions sent"),
    onError: () => toast.error("Could not send reset email"),
  });

  const becomeHost = useMutation({
    mutationFn: authService.becomeHost,
    onSuccess: (user) => {
      setUser(user);
      toast.success("Host access enabled");
    },
    onError: () => toast.error("Could not enable host access"),
  });

  return { login, signup, forgotPassword, becomeHost, logout };
}
