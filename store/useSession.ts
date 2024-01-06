import { create } from "zustand";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

interface ISession {
  name: string;
  email: string;
  image: string;
  postUser: (userData: { name: string; email: string; image: string }) => void;
}

async function getSession() {
  try {
    const session = await auth();
    if (session) {
      return {
        name: session.user?.name || "",
        email: session.user?.email || "",
        image: session.user?.image || "",
      };
    } else {
      redirect("/api/auth/signin");
      return {
        name: "",
        email: "",
        image: "",
      };
    }
  } catch (error) {
    console.error("Error while getting session:", error);
    // Handle the error as needed, e.g., redirect to an error page.
    return {
      name: "",
      email: "",
      image: "",
    };
  }
}

export const useSessionStore = create<ISession>((set) => {
  getSession().then((sessionData) => {
    set({
      name: sessionData.name,
      email: sessionData.email,
      image: sessionData.image,
    });
  });

  return {
    name: "",
    email: "",
    image: "",
    postUser: (userData) =>
      set((state) => ({
        ...state,
        name: userData.name,
        email: userData.email,
        image: userData.image,
      })),
  };
});

// Note: You may want to handle the initial session data setting more robustly,
// such as using useEffect or initializing the store in a component.
