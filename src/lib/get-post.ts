"use client";
import useSWR from "swr";

const fetcher = (...args: [RequestInfo, RequestInit?]) =>
  fetch(...args).then((res) => res.json());

export function myMiddleware(
  useSWRNext: (arg0: any, arg1: any, arg2: any) => any
) {
  return (key: any, fetcher: any, config: any) => {
    // До выполнения хука...
  //  console.log("SWR запрос:", config);
    // Обработка следующего ППО, или хука `useSWR`, если это последнее.
    const swr = useSWRNext(key, fetcher, config);
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
