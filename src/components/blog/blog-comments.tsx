import { auth } from "@/auth";
import CommentCard from "../cards/comment-card";
import CommentForm from "../forms/comment-form";
import Link from "next/link";

interface BlogCommentsProps {
  postId: string;
  comments: any[];
}

export default async function BlogComments({ postId, comments }: BlogCommentsProps) {
  const session = await auth();

  return (
    <>
      <h2 className="text-3xl font-blog-title mb-8">3 Comments</h2>
      <CommentCard />

      <div className="my-4 ">
        <h4 className="uppercase text-2xl font-blog-title">leave a reply</h4>
        {session ? (
          <p>Logged in as {session.user.name}. Log out?</p>
        ) : (
          <p>
            You must be <Link href="/login">logged in</Link> to post a comment.
          </p>
        )}
      </div>

      {session ? <CommentForm post_id={postId} user_id={session.user.id!} /> : <p>Sign in to comment</p>}
    </>
  );
}
