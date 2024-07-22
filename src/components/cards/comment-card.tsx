import Image from "next/image";
import { Separator } from "../ui/separator";

export default function CommentCard() {
  return (
    <div className="w-full ">
      <div className="flex space-x-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full relative">
          <Image
            src="/logo.png"
            alt="avatar"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div className="flex flex-col space-y-2 w-full">
          <div>
            <p className="text-lg font-bold">John Doe</p>
            <p className="text-sm text-gray-400">2 days ago</p>
          </div>
          <p className="text-base">
            Nam et malesuada ante, in convallis libero. Aenean sollicitudin egestas ante, eget porttitor leo fringilla sit amet. Nam cursus neque
            ligula, in egestas elit porttitor vel. Vestibulum ultricies tempus orci a auctor.
          </p>
          <Separator orientation="horizontal" className="h-[2px] w-full bg-accent transition-all" />
        </div>
      </div>
    </div>
  );
}
