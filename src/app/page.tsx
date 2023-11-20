"use client";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (...args: [RequestInfo, RequestInit?]) =>
  fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:3001/posts/last-posts?limit=6",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {data.map((el: any, i: number) => {
          return <li key={i}>{el.content}</li>;
        })}
      </ul>
    </main>
  );
}
