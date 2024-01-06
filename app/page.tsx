"use client";
import React from "react";
import { useSessionStore } from "@/store/useSession";

export default function Home() {
  const { name, email, image } = useSessionStore();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Next Auth
      <button onClick={() => console.log({ name, email, image })}>
        sshow data
      </button>
    </main>
  );
}
