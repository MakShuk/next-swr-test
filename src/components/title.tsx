import usePost from "@/lib/get-post";
import { FC } from "react";

interface PostProps {
  id: number;
}

export const PostTitle: FC<PostProps> = ({ id }) => {
  const { post, isLoading, isError } = usePost(id);
  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return <>{post.title}</>;
};

export default PostTitle;
