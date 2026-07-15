"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { demoAccounts } from "@/constants/auth";
import { useAuthActions } from "@/hooks/use-auth-actions";

const authSchema = z.object({
  name: z.string().optional(),
  email: z.string().email(),
  password: z.string().optional(),
});

type Mode = "login" | "signup" | "forgot";
type FormValues = z.infer<typeof authSchema>;

export function AuthCard({ mode }: { mode: Mode }) {
  const router = useRouter();
  const { login, signup, forgotPassword } = useAuthActions();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(authSchema),
  });

  async function submit(values: FormValues) {
    if (mode === "login") {
      if (!values.password || values.password.length < 6) return;
      await login.mutateAsync({ email: values.email, password: values.password });
      router.push("/");
    }
    if (mode === "signup") {
      if (!values.name || !values.password || values.password.length < 6) return;
      await signup.mutateAsync({
        name: values.name,
        email: values.email,
        password: values.password,
      });
      router.push("/");
    }
    if (mode === "forgot") {
      await forgotPassword.mutateAsync({ email: values.email });
    }
  }

  const title =
    mode === "login"
      ? "Welcome back"
      : mode === "signup"
        ? "Create your account"
        : "Reset your password";

  return (
    <section className="container-page flex min-h-[70vh] items-center justify-center">
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          <h1 className="text-3xl font-black">{title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Uses Spring Boot JWT auth first, with local demo login when the
            backend is offline.
          </p>
          {mode === "login" ? (
            <div className="mt-5 grid gap-2 rounded-[20px] bg-muted p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Demo accounts
              </p>
              <div className="grid gap-2 sm:grid-cols-3">
                {demoAccounts.map((account) => (
                  <Button
                    key={account.id}
                    type="button"
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setValue("email", account.email);
                      setValue("password", account.password);
                    }}
                  >
                    {account.role.toLowerCase()}
                  </Button>
                ))}
              </div>
            </div>
          ) : null}
          <form className="mt-6 grid gap-4" onSubmit={handleSubmit(submit)}>
            {mode === "signup" ? (
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" className="mt-2" {...register("name")} />
                {errors.name ? (
                  <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
                ) : null}
              </div>
            ) : null}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" className="mt-2" type="email" {...register("email")} />
              {errors.email ? (
                <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
              ) : null}
            </div>
            {mode !== "forgot" ? (
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  className="mt-2"
                  type="password"
                  {...register("password")}
                />
                {errors.password ? (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.password.message}
                  </p>
                ) : null}
              </div>
            ) : null}
            <Button
              type="submit"
              disabled={login.isPending || signup.isPending || forgotPassword.isPending}
            >
              {mode === "forgot" ? "Send reset link" : "Continue"}
            </Button>
          </form>
          <div className="mt-5 flex justify-between text-sm text-muted-foreground">
            {mode !== "login" ? <Link href="/login">Login</Link> : null}
            {mode !== "signup" ? <Link href="/signup">Sign up</Link> : null}
            {mode !== "forgot" ? <Link href="/forgot-password">Forgot password</Link> : null}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
