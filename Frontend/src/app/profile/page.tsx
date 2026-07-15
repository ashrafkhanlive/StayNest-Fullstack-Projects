"use client";

import { UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/store/auth-store";

export default function ProfilePage() {
  const user = useAuthStore((state) => state.user);

  return (
    <section className="container-page max-w-3xl">
      <Card>
        <CardHeader>
          <UserRound className="h-10 w-10 text-primary" />
          <h1 className="mt-3 text-3xl font-black">Profile</h1>
          <p className="text-sm text-muted-foreground">
            Manage account information and role-based access.
          </p>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            <Label>Name</Label>
            <Input className="mt-2" defaultValue={user?.name ?? "Demo Guest"} />
          </div>
          <div>
            <Label>Email</Label>
            <Input className="mt-2" defaultValue={user?.email ?? "guest@example.com"} />
          </div>
          <div>
            <Label>Role</Label>
            <Input className="mt-2" defaultValue={user?.role ?? "GUEST"} />
          </div>
          <Button>Save changes</Button>
        </CardContent>
      </Card>
    </section>
  );
}
