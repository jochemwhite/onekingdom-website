"use client";

import { TeamMemberSchema } from "@/schema/team-member-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import SocialIcon from "../globals/social-icon";
import { Socialmedia } from "@/types/global";
import TeamMemberCard from "../cards/team-member-card";
import { FileUploader } from "../globals/file-uploader";
import Modal from "../globals/modal";

export default function TeamMemberForm() {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  const form = useForm<z.infer<typeof TeamMemberSchema>>({
    resolver: zodResolver(TeamMemberSchema),
    defaultValues: {
      name: "",
      description: "",
      img: {
        src: "",
        alt: "",
      },
      socialMedia: [],
      patherdstreamer: false,
      staff: false,
    },
  });

  const handleSocialMediaChange = (value: string, href: string) => {
    const prev = form.getValues("socialMedia");
    const index = prev.find((item) => item.value === value);

    if (!href || href === "" || href.length === 0) {
      form.setValue(
        "socialMedia",
        prev.filter((item) => item.value !== value)
      );
      return;
    }

    if (index) {
      const newSocialMedia = prev.map((item) => {
        if (item.value === value) {
          return {
            ...item,
            value,
            href,
          };
        }
        return item;
      });
      form.setValue("socialMedia", newSocialMedia);
    } else {
      form.setValue("socialMedia", [...prev, { value, href }]);
    }
  };

  function onSubmit(values: z.infer<typeof TeamMemberSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex justify-between">
      <Form {...form}>
        {
          <Modal onClose={() => setModalOpen(false)} open={modalOpen}>
            <div className="mt-4">
              <FileUploader
                maxFiles={10}
                onUpload={async (files) => {
                  console.log(files);
                }}
              />
            </div>
          </Modal>
        }

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="One Kingdom Streamer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* socails */}
          <FormField
            name="socialMedia"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <label htmlFor="shortDescription" className="block font-semibold mb-1">
                  Social Media
                </label>
                <FormControl className="">
                  <ul>
                    {Object.entries(Socialmedia)
                      .reverse()
                      .map(([key, value]) => (
                        <li key={key} className="my-2 flex items-center">
                          <SocialIcon value={value} />
                          <Input
                            className="w-96 ml-4"
                            onChange={(e) => {
                              handleSocialMediaChange(key, e.target.value);
                            }}
                            value={field.value.find((item) => item.value === key)?.href || ""}
                          />
                        </li>
                      ))}
                  </ul>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="button" variant="outline" onClick={() => setModalOpen(true)}>
            Select Image
          </Button>

          <Button type="submit" variant="outline">
            Save
          </Button>
        </form>
      </Form>
      <div className="w-1/2">
        <TeamMemberCard member={form.watch()} />
      </div>
    </div>
  );
}
