import { auth } from "@/auth";
import { PlateEditor } from "@/components/rich-editor";
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { createPlugins, Plate, RenderAfterEditable, PlateLeaf } from "@udecode/plate-common";
import { Editor } from "@/components/plate-ui/editor";
import { plugins } from "@/lib/plate/plate-plugins";
import { TooltipProvider } from "@/components/plate-ui/tooltip";

export default async function Page({ params }: { params: { slug: string } }) {
  const session = await auth();

  const supabase = createClient(session?.supabaseAccessToken as string);

  const { data, error } = await supabase.from("roadmap_blog").select().eq("slug", params.slug).single();

  if (error) {
    if (error.code === "PGRST116") {
      return notFound();
    }

    throw error;
  }

  if (!data || !data.content) {
    return notFound();
  }

  return (
    <TooltipProvider disableHoverableContent delayDuration={500} skipDelayDuration={0}>
      <PlateEditor initialValue={JSON.parse(data.content as string)} readOnly />
    </TooltipProvider>
  );
}
