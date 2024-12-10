import usePost from "@/lib/get-post";
import { FC } from "react";

interface PostProps {
  id: number;
}

export const PostBody: FC<PostProps> = ({ id }) => {
  const { post, isLoading, isError, isValidating } = usePost(id);
   if (isValidating) return <div>isValidating</div>;
  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return <>{post.body}</>;
};

export default PostBody;
