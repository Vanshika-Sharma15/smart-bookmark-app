"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [bookmarks, setBookmarks] = useState<any[]>([]);

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (user) fetchBookmarks();
  }, [user]);

  // REALTIME SUBSCRIPTION
  useEffect(() => {
    if (!user) return;

    const channel = supabase
      .channel("bookmarks-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "bookmarks" },
        () => fetchBookmarks()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user]);



  // GET USER
  const getUser = async () => {
    const { data } = await supabase.auth.getUser();
    setUser(data.user);
  };

  // LOGOUT
  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  // FETCH BOOKMARKS
  const fetchBookmarks = async () => {
    const { data } = await supabase
      .from("bookmarks")
      .select("*")
      .order("created_at", { ascending: false });

    setBookmarks(data || []);
  };

  // ADD BOOKMARK
  const addBookmark = async () => {
    if (!title || !url) return alert("Fill all fields");

    await supabase.from("bookmarks").insert({
      title,
      url,
      user_id: user.id,
    });

    setTitle("");
    setUrl("");

    fetchBookmarks();
  };

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <a
          href="/login"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg"
        >
          Go to Login
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-10 gap-4">
      <h1 className="text-2xl font-bold">Logged in ✅</h1>
      <p>{user.email}</p>

      {/* ADD BOOKMARK FORM */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="text"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        onClick={addBookmark}
        className="bg-green-500 text-white px-6 py-2 rounded"
      >
        Add Bookmark
      </button>

      {/* BOOKMARK LIST */}
      <div className="mt-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-2">Your Bookmarks</h2>

        {bookmarks.length === 0 && <p>No bookmarks yet</p>}

        {bookmarks.map((b) => (
          <div
            key={b.id}
            className="border p-3 rounded mb-2 flex justify-between items-center"
          >
            <div>
              <p className="font-bold">{b.title}</p>
              <a href={b.url} target="_blank" className="text-blue-500">
                {b.url}
              </a>
            </div>

            <button
              onClick={async () => {
                await supabase.from("bookmarks").delete().eq("id", b.id);
                fetchBookmarks();
              }}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-6 py-3 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}
