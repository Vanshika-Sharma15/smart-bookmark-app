"use client";

import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <button
        onClick={loginWithGoogle}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg"
      >
        Login with Google
      </button>
    </div>
  );
}
