"use client";

import { TeamMemberSchema } from "@/schema/team-member-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { use, useEffect } from "react";
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
import { useSearchParams } from "next/navigation";
import { createTeamMember, getTeamMemberById, updateTeamMember } from "@/actions/supabase";
import { toast } from "sonner";

export default function TeamMemberForm() {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const searchParams = useSearchParams();
  const member_id = searchParams.get("member_id");

  const form = useForm<z.infer<typeof TeamMemberSchema>>({
    resolver: zodResolver(TeamMemberSchema),
    defaultValues: {
      name: "",
      description: "",
      img_url: "",
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

  async function onSubmit(values: z.infer<typeof TeamMemberSchema>) {
    if (member_id) {
      // handle update
      toast.promise(updateTeamMember(values, member_id), {
        loading: "Updating Team Member...",
        success: "Team Member Updated",
        error(error) {
          return error.message;
        },
      });

    } else {
      // handle create
      toast.promise(createTeamMember(values), {
        loading: "Creating Team Member...",
        success: "Team Member Created",
        error(error) {
          // console.log(data);
          return error.message;
        },
      });
    }
  }

  useEffect(() => {
    if (member_id) {
      const fetchMember = async () => {
        const teamMember = await getTeamMemberById(member_id);

        form.setValue("name", teamMember.name);
        form.setValue("description", teamMember.description);
        form.setValue("img_url", teamMember.img_url);
        // form.setValue("socialMedia", teamMember.);
        form.setValue("patherdstreamer", teamMember.patherdstreamer);
        form.setValue("staff", teamMember.staff);
      };
      fetchMember();
    }
  }, [member_id]);

  return (
    <div className="flex justify-between">
      <Form {...form}>
        {
          <Modal onClose={() => setModalOpen(false)} open={modalOpen}>
            <div className="mt-4">
              <FileUploader maxFiles={10} bucket_id="onekingdom-public" folder_name="team_members" />
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
