"use client";
import { createSupabaseClient } from "@/lib/supabase/client";
import { FileObject } from "@supabase/storage-js";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "ldrs/ring";
import Loading from "./loading";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
export default function FileVault() {
  const session = useSession();
  const supabase = createSupabaseClient(session?.data?.supabaseAccessToken as string);
  const [loading, setLoading] = useState(true);

  const [files, setFiles] = useState<FileObject[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const { data, error } = await supabase.storage.from("onekingdom-public").list("team_members", {
        limit: 100,
      });
      if (error) {
        console.log(error);
        return;
      }
      setFiles(data);
      setLoading(false);
      console.log(data);
    };

    fetchFiles();
  }, []);

  const handleDownload = async (file: FileObject) => {
    const { data, error } = await supabase.storage.from("onekingdom-public").download(`/team_members/${file.name}`);
    if (error) {
      console.log(error);
      return;
    }
    const url = window.URL.createObjectURL(data);
    const a = document.createElement("a");
    a.href = url;
    a.download = file.name;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="max-h-[500px] flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="max-h-[500px] overflow-y-scroll">
      <h1>File Vault</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-5 gap-4">
          {files.map((file) => {
            const { data } = supabase.storage.from("onekingdom-public").getPublicUrl(`/team_members/${file.name}`);

            return (
              <div>
                <div key={file.id} className="relative h-52 w-52 rounded-xl overflow-hidden">
                  <Image
                    src={data.publicUrl}
                    alt={file.name}
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
                <div className="flex justify-between">
                  <div>
                    <p>{file.name}</p>
                    <p>{file.metadata.size}</p>
                  </div>
                  <div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0 text-right">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    
                        <DropdownMenuItem onClick={() => handleDownload(file)}>Download Image</DropdownMenuItem>
                        <DropdownMenuItem>Delete Image</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => {
                            navigator.clipboard.writeText(file.id.toString());
                            toast.info("Image ID copied to clipboard");
                          }}
                        >
                          Copy Image ID
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
