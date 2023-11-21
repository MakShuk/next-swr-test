"use client";
import { createKey } from "next/dist/shared/lib/router/router";
import useSWR from "swr";

const fetcher = (...args: [RequestInfo, RequestInit?]) =>
  fetch(...args).then((res) => res.json());

function myMiddleware(useSWRNext: (arg0: any, arg1: any, arg2: any) => any) {
  return (key: any, fetcher: any, config: any) => {
    // До выполнения хука...
    console.log(" До выполнения хука");
     console.log("SWR запрос:", key);
    // Обработка следующего ППО, или хука `useSWR`, если это последнее.
    const swr = useSWRNext(key, fetcher, config);
    console.log("После выполнения хука");
    // После выполнения хука...
    return swr;
  };
}


export default function usePost(id: number) {
  const { data, error, isLoading, isValidating } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    fetcher,
    {
      use: [myMiddleware],
    }
  );

  return {
    post: data,
    isLoading,
    isError: error,
    isValidating,
  };
}
