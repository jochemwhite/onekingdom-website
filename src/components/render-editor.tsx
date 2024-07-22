"use client";
import { Editor } from "@/components/plate-ui/editor";
import { RenderPlugins } from "@/lib/plate/plate-render-plugins";
import { Plate } from "@udecode/plate-common";

export default function RenderContent({ content }: { content: string }) {
  

  return (
    <Plate plugins={RenderPlugins} initialValue={JSON.parse(content)} readOnly >
      <Editor className="!bg-transparent font-primary text-lg text-text-primary " variant="ghost"  />

    </Plate>
  );
}
