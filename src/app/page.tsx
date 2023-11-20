"use client";
import Post from "@/components/card";

export default function Home() {
  const id = [12, 43, 52, 61];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {id.map((postId, index) => (
        <Post key={index} id={postId}></Post>
      ))}
    </main>
  );
}
