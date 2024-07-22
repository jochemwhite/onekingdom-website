"use client";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CommentSchema } from "@/schema/comment-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "../ui/textarea";
import BasicButton from "../buttons/basic-button";

interface CommentFormProps {
  post_id: string;
  user_id: string;
}

export default function CommentForm({ post_id, user_id }: CommentFormProps) {
  // const { data, status } = useSession();

  // if (!data || !data.user) {
  //   return (
  //     <div>
  //       <p>Sign in to comment</p>
  //     </div>
  //   );
  // }

  const form = useForm<z.infer<typeof CommentSchema>>({
    resolver: zodResolver(CommentSchema),
    defaultValues: {
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      post_id: post_id,
      content: "",
      user_id: user_id,
    },
  });

  async function onSubmit(values: z.infer<typeof CommentSchema>) {
    // handle create
    // toast.promise(createRoadmap(values), {
    //   loading: "posting comment...",
    //   success(data) {
    //     return "comment posted";
    //   },
    //   error(error) {
    //     console.log(error);
    //     return error.message;
    //   },
    // });
  }

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, (e) => {
          console.log(e);
        })}
        className="space-y-8"
      >
        <div className="flex items-center w-full justify-between">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Comment</FormLabel>
                <FormControl>
                  <Textarea placeholder="Comment" {...field} className="min-h-[150px] !border-accent border-2 !bg-[#181818]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <BasicButton innerText="Post Comment" href="" />
      </form>
    </Form>
  );
}
