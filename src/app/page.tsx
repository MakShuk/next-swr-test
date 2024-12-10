"use client";
import { myMiddleware } from "@/lib/get-post";
import useSWRInfinite from "swr/infinite";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const getKey = (pageIndex: any, previousPageData: any) => {
  if (previousPageData && !previousPageData.length) return null; // достигнут конец
  return `https://jsonplaceholder.typicode.com/posts?_page=${pageIndex}&_limit=10`; // ключ SWR
};

export default function Home() {
  const { data, size, setSize } = useSWRInfinite(getKey, fetcher, {
    initialSize: 2,
    use: [myMiddleware],
  });
  if (!data) return "loading";

  console.log(`Текущий размер: ${size}`);

  let totalPost = 0;
  for (let i = 0; i < data.length; i++) {
    totalPost += data[i].length;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p>{totalPost} users listed</p>
        {data.map((post, index) => {
          return post.map((user:any) => <div key={user.id}>{user.title}</div>);
        })}
        <button onClick={() => setSize(size + 1)}>Загрузить ещё</button>
      </div>
    </main>
  );
}
