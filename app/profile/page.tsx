import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  if (!session?.user) return redirect("/api/auth/signin?callbackUrl=/profile");
  console.log(session.user);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      my profile
      <pre> {JSON.stringify(session.user, null, 2)}</pre>
    </div>
  );
}
