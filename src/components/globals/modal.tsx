import React from "react";
import { IoClose } from "react-icons/io5";

interface Props {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

export default function Modal({ children, open, onClose }: Props) {
  if (!open) return null;

  const HandleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClose();
  }


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-25" onClick={onClose} />
      <div className=" z-50 bg-primary  w-1/2 h-fit p-8 ">
        <div className="flex justify-between ">
          <h4>Select Image</h4>
          <button onClick={HandleClose}>
            <IoClose size={25} />
          </button>
        </div>
        <hr className="border-accent" />
        {children}
      </div>
    </div>
  );
}
