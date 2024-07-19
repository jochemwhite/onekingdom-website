"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createSupabaseClient } from "@/lib/supabase/client";
import { formatBytes } from "@/lib/utils";
import { FileObject } from "@supabase/storage-js";
import "ldrs/ring";
import { MoreHorizontal } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import Loading from "./loading";
import { Checkbox } from "@/components/ui/checkbox";

interface FileVaultProps {
  bucket_id: string;
  folder_name?: string;

  onSelectedFilesChange: (files: string[]) => void;
  initalFiles?: string[];
}

export default function FileVault({ bucket_id, folder_name, onSelectedFilesChange, initalFiles }: FileVaultProps) {
  const session = useSession();
  const supabase = createSupabaseClient(session?.data?.supabaseAccessToken as string);
  const [loading, setLoading] = useState(true);
  const [selectedFiles, setSelectedFiles] = useState<string[]>(initalFiles ? initalFiles : []);
  const [files, setFiles] = useState<FileObject[]>([]);

  const path = folder_name ? `${folder_name}/` : "";

  useEffect(() => {
    const fetchFiles = async () => {
      const { data, error } = await supabase.storage.from("onekingdom-public").list(folder_name, {
        limit: 100,
      });
      if (error) {
        console.log(error);
        return;
      }
      setFiles(
        data.filter((file) => file.id !== null)
      );
      setLoading(false);
    };

    fetchFiles();
  }, []);

  useEffect(() => {

    
    onSelectedFilesChange(selectedFiles);
  }, [selectedFiles]);

  const handleDownload = async (file: FileObject) => {
    const { data, error } = await supabase.storage.from("onekingdom-public").download(`${path}${file.name}`);
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

  const handleSelect = (fileName: string) => {
    if (selectedFiles.includes(fileName)) {
      setSelectedFiles(selectedFiles.filter((f) => f !== fileName));
    } else {
      setSelectedFiles([...selectedFiles, fileName]);
    }
  };

  const handleDelete = async () => {
    let newArray: string[] = selectedFiles;

    if (selectedFiles.length === 0) {
      toast.error("Please select files to delete");
      return;
    }

    if (folder_name) {
      newArray = selectedFiles.map((file) => `${folder_name}/${file}`);
    }

    const { data, error } = await supabase.storage.from("onekingdom-public").remove(newArray);
    if (error) {
      console.log(error);
      return;
    }
    // Remove deleted files from the list
    setFiles(files.filter((file) => !selectedFiles.includes(file.name)));
    setSelectedFiles([]);

    toast.success("Files deleted successfully");
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
      <div className="flex items-center justify-between py-4">
        <h4>File Vault</h4>

        {selectedFiles.length > 0 && (
          <div className="flex items-center flex-col">
            <p>{selectedFiles.length} files selected</p>
            <Button variant="destructive" onClick={handleDelete}>
              Delete Selected
            </Button>
          </div>
        )}
      </div>

      {loading ? (
        <Loading />
      ) : (
        <>
          {files.length === 0 ? (
            <p>No files found</p>
          ) : (
            <div className="grid grid-cols-3  gap-4 xl:grid-col-span-4  2xl:grid-cols-4">
              {files.map((file) => {
                const { data } = supabase.storage.from("onekingdom-public").getPublicUrl(`${path}${file.name}`);

                return (
                  <div>
                    <div key={file.id} className="relative h-52 w-52 rounded-xl overflow-hidden">
                      <div className="z-50 absolute right-0 top-0 p-2">
                        <Checkbox
                          onCheckedChange={(e) => {
                            handleSelect(data.publicUrl);
                          }}
                          checked={selectedFiles.includes(data.publicUrl)}
                        />
                      </div>
                      <Image
                        src={data.publicUrl}
                        alt={file.name}
                        fill
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        onClick={() => onSelectedFilesChange([data.publicUrl])}
                      />
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <p>{file.name}</p>
                        <p>{formatBytes(file.metadata.size)}</p>
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
        </>
      )}
    </div>
  );
}
