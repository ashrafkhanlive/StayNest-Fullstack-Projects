"use client";

import {
  Bell,
  Briefcase,
  Heart,
  Menu,
  Moon,
  Search,
  Sun,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/store/auth-store";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/wishlist", label: "Wishlist", icon: Heart },
  { href: "/my-trips", label: "Trips", icon: Briefcase },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const canHost = user?.role === "HOST" || user?.role === "ADMIN";
  const canAdmin = user?.role === "ADMIN";

  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50">
      <nav className="container-page flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-black tracking-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
            S
          </span>
          <span className="hidden text-xl sm:inline">StayNest</span>
        </Link>

        <form
          action="/search"
          className="hidden min-w-0 flex-1 justify-center md:flex"
        >
          <div className="flex w-full max-w-xl items-center rounded-full border border-border bg-card p-1 shadow-sm">
            <Input
              name="destination"
              className="border-0 bg-transparent shadow-none focus-visible:ring-0"
              placeholder="Search destinations"
            />
            <Button size="icon" aria-label="Search">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </form>

        <div className="hidden items-center gap-1 lg:flex">
          {canHost ? (
            <Button asChild variant="ghost">
              <Link href="/host/dashboard">Host Dashboard</Link>
            </Button>
          ) : (
            <Button asChild variant="ghost">
              <Link href="/host/dashboard">Become a Host</Link>
            </Button>
          )}
          {navLinks.map((item) => (
            <Button key={item.href} asChild variant="ghost" size="icon" aria-label={item.label}>
              <Link href={item.href}>
                <item.icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            {resolvedTheme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" className="pl-3">
                <Menu className="h-4 w-4" />
                <UserRound className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {user ? (
                <>
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  {canHost ? (
                    <DropdownMenuItem asChild>
                      <Link href="/host/hotels">Manage hotels</Link>
                    </DropdownMenuItem>
                  ) : null}
                  {canAdmin ? (
                    <DropdownMenuItem asChild>
                      <Link href="/admin/dashboard">Admin dashboard</Link>
                    </DropdownMenuItem>
                  ) : null}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem asChild>
                    <Link href="/login">Login</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/signup">Sign up</Link>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Button
          variant="secondary"
          size="icon"
          className="lg:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((value) => !value)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </nav>

      <div
        className={cn(
          "container-page grid gap-3 overflow-hidden transition-all lg:hidden",
          open ? "max-h-96 pb-4" : "max-h-0",
        )}
      >
        <form action="/search" className="flex items-center gap-2">
          <Input name="destination" placeholder="Search destinations" />
          <Button size="icon" aria-label="Search">
            <Search className="h-4 w-4" />
          </Button>
        </form>
        <div className="grid grid-cols-2 gap-2">
          {[
            [canHost ? "Host Dashboard" : "Become a Host", "/host/dashboard"],
            ["Wishlist", "/wishlist"],
            ["Trips", "/my-trips"],
            ["Profile", "/profile"],
            ...(canAdmin ? [["Admin", "/admin/dashboard"]] : []),
          ].map(([label, href]) => (
            <Button key={href} asChild variant="secondary">
              <Link href={href}>{label}</Link>
            </Button>
          ))}
          <Button
            variant="secondary"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            {resolvedTheme === "dark" ? "Light mode" : "Dark mode"}
          </Button>
          <Button asChild variant="secondary">
            <Link href={user ? "/profile" : "/login"}>{user ? "Account" : "Login"}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
