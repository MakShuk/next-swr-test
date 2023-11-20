"use client";
import useSWR from "swr";

const fetcher = (...args: [RequestInfo, RequestInit?]) =>
  fetch(...args).then((res) => res.json());

export default function usePost(id: number) {
  const { data, error, isLoading, isValidating } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    fetcher
  );

  return {
    post: data,
    isLoading,
    isError: error,
    isValidating,
  };
}
