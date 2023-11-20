import { FC } from "react";
import useSWR from "swr";
const fetcher = (...args: [RequestInfo, RequestInit?]) =>
  fetch(...args).then((res) => res.json());

interface PostProps {
  id: number;
}

export const Post: FC<PostProps> = ({ id }) => {
  const { data, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return <>{data.body}</>;
};

export default Post;
