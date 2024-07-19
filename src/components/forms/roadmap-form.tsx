"use client";
import { createRoadmap, createTeamMember, getRoadmapById, updateRoadmap, updateTeamMember } from "@/actions/supabase";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { roadmapSchema } from "@/schema/roadmap-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import FileVault from "../globals/file-vault";
import Modal from "../globals/modal";
import { Switch } from "../ui/switch";
import { Textarea } from "../ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "../ui/label";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "../ui/calendar";
import Image from "next/image";
import { FileUploader } from "../globals/file-uploader";
import { PlateEditor } from "../rich-editor";
import Loading from "../globals/loading";

export default function RoadmapForm() {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const roadmap_id = searchParams.get("roadmap_id");
  const [loading, setLoading] = React.useState<boolean>(true);
  const router = useRouter();

  const form = useForm<z.infer<typeof roadmapSchema>>({
    resolver: zodResolver(roadmapSchema),
    defaultValues: {
      title: "",
      short_description: "",
      content: "",
      date: new Date().toISOString(),
      author: "",
      published: false,
      images: [],
    },
  });

  useEffect(() => {
    if (roadmap_id) {
      const fetchRoadmap = async () => {
        const roadmap = await getRoadmapById(roadmap_id);
        form.setValue("title", roadmap.title);
        form.setValue("short_description", roadmap.short_description);
        form.setValue("content", roadmap.content as string);
        form.setValue("date", roadmap.date);
        form.setValue("author", roadmap.author);
        form.setValue("published", roadmap.published);
        form.setValue("images", roadmap.images ? roadmap.images : []);

        setLoading(false);
      };
      fetchRoadmap();
    } else {
      setLoading(false);
    }
  }, [roadmap_id]);

  useEffect(() => {
    console.log(form.watch());
  }, [form.watch()]);

  async function onSubmit(values: z.infer<typeof roadmapSchema>) {
    if (roadmap_id) {
      // handle update
      toast.promise(updateRoadmap(values, roadmap_id), {
        loading: "Updating Team Member...",
        success: "Roadmap",
        error(error) {
          return error.message;
        },
      });
    } else {
      // handle create
      toast.promise(createRoadmap(values), {
        loading: "Creating new Roadmap...",
        success(data) {
          router.push(`${pathname}?roadmap_id=` + data.id);
          return "Roadmap Created";
        },
        error(error) {
          console.log(error);
          return error.message;
        },
      });
    }
  }

  const handleImages = (files: string[]) => {
    // console.log(files);

    form.setValue("images", files);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Form {...form}>
      {
        <Modal onClose={() => setModalOpen(false)} open={modalOpen}>
          <div className="mt-4">
            <FileVault onSelectedFilesChange={handleImages} bucket_id="onekingdom-public" folder_name="roadmaps" initalFiles={form.watch("images")} />
            <FileUploader maxFiles={10} bucket_id="onekingdom-public" folder_name="roadmaps" />
          </div>
        </Modal>
      }

      <form
        onSubmit={form.handleSubmit(onSubmit, (e) => {
          console.log(e);
        })}
        className="space-y-8"
      >
        <div className="flex items-center w-full justify-between">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-1/2">
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
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of event</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button variant={"outline"} className={cn("w-[240px] pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={new Date(field.value)}
                      onSelect={(date) => {
                        field.onChange(date?.toISOString());
                      }}
                      disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* socails */}
        <FormField
          name="short_description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <label htmlFor="shortDescription" className="block font-semibold mb-1">
                Short Description
              </label>
              <FormControl className="">
                <Textarea {...field} className="min-h-40" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* images */}
        {form.watch("images") && form.watch("images").length > 0 && (
          <div>
            <Label>Images</Label>
            <div className="grid grid-cols-3 w-1/2 ">
              {form.watch("images").map((image, index) => (
                <div className="relative w-44 h-44">
                  <Image
                    key={index}
                    src={image}
                    alt="image"
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex space-x-4 justify-end">
          <FormField
            control={form.control}
            name="published"
            render={({ field }) => (
              <FormItem className="flex items-center flex-col">
                <FormLabel>Published</FormLabel>
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="max-w-[1336px] rounded-lg border bg-background shadow">
          <PlateEditor
            initialValue={JSON.parse(form.getValues("content"))}
            onValueChange={(value) => form.setValue("content", JSON.stringify(value))}
          />
        </div>

        <Button type="button" variant="outline" onClick={() => setModalOpen(true)}>
          Select Image
        </Button>

        <Button type="submit" variant="outline">
          Save
        </Button>
      </form>
    </Form>
  );
}
