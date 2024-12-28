"use client";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { contactSchema } from "@/schema/contact-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "../ui/textarea";

export function ContactForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      discord: "",
      twitch: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactSchema>) {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, (error) => {
          console.error(error);
        })}
      >
        <div className="space-y-4">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Title</FormLabel> */}
                <FormControl>
                  <Input
                    id="name"
                    placeholder="name"
                    type="name"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Title</FormLabel> */}
                <FormControl>
                  <Input id="email" placeholder="email" type="email" disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex w-full justify-between space-x-2 ">
            <FormField
              name="discord"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  {/* <FormLabel>Title</FormLabel> */}
                  <FormControl>
                    <Input id="email" placeholder="Discord Username" type="text" disabled={isLoading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="discord"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  {/* <FormLabel>Title</FormLabel> */}
                  <FormControl>
                    <Input id="email" placeholder="Twitch name" type="text" disabled={isLoading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            name="message"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                {/* <FormLabel>Title</FormLabel> */}
                <FormControl className="w-full">
                  <Textarea id="email" placeholder="Your message" disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        <Button type="submit" variant="outline" disabled={isLoading}>Submit</Button>
        </div>
      </form>
    </Form>
  );
}
