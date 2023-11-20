"use client";
import Post, { PostBody } from "@/components/card";
import PostTitle from '@/components/title';

export default function Home() {
  const id = [12, 43, 52, 61];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span> TITLE: </span>
      <PostTitle id={id[0]}></PostTitle>
      <span> BODY: </span>

      <PostBody id={id[0]}></PostBody>
    </main>
  );
}
