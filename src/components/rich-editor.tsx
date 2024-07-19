"use client";

import { Editor } from "@/components/plate-ui/editor";
import { FixedToolbar } from "@/components/plate-ui/fixed-toolbar";
import { FixedToolbarButtons } from "@/components/plate-ui/fixed-toolbar-buttons";
import { FloatingToolbar } from "@/components/plate-ui/floating-toolbar";
import { FloatingToolbarButtons } from "@/components/plate-ui/floating-toolbar-buttons";
import { plugins } from "@/lib/plate/plate-plugins";
import { CommentsProvider } from "@udecode/plate-comments";
import { Plate } from "@udecode/plate-common";
import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { CommentsPopover } from "./plate-ui/comments-popover";



type PlateNode = {
  id: string;
  type: string;
  children: { text: string }[];
};

interface PlateEditorProps {
  initialValue: any;
  onValueChange?: (value: any[]) => void;
  readOnly?: boolean;
}

export function PlateEditor({ initialValue, onValueChange, readOnly }: PlateEditorProps) {
  const [value, setValue] = useState<PlateNode[]>(initialValue);

  useEffect(() => {
    if (onValueChange) {
      onValueChange(value);
    }
  }, [value]);

  return (
    <DndProvider backend={HTML5Backend}>
      <CommentsProvider users={{}} myUserId="1">
        <Plate plugins={plugins} initialValue={value} onValueChange={setValue} readOnly={readOnly}>
          <FixedToolbar>
            <FixedToolbarButtons />
          </FixedToolbar>

          <Editor />

          <FloatingToolbar>
            <FloatingToolbarButtons />
          </FloatingToolbar>
          <CommentsPopover />
        </Plate>
      </CommentsProvider>
    </DndProvider>
  );
}
