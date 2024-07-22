import React from "react";

interface IProps {
  date: string;
  author: string;
}

export default function MiniItems({ author, date }: IProps) {
  return (
    <div className="flex space-x-5 mb-5">
      <div
        className="relative list-none flex justify-center items-center bg-[#252525] py-1 min-h-10  px-4           
      after:absolute after:border-transparent after:border-l-[#252525] after:border-solid after:border-t-[40px] after:border-b-0 after:border-l-[12px]  after:left-full "
      >
        {date}
      </div>
      <div
        className="relative list-none flex justify-center items-center bg-[#252525] py-1 min-h-10 px-4 
before:absolute before:border-transparent before:border-r-[#252525] before:border-solid before:border-b-[40px] before:border-r-[12px] before:left-[-12px]
after:absolute after:border-transparent after:border-l-[#252525] after:border-solid after:border-t-[40px] after:border-b-0 after:border-l-[12px] after:right-[-12px]"
      >
        By {author}
      </div>

      <div
        className="relative list-none flex justify-center items-center bg-[#252525] py-1  min-h-10   px-4          
      before:absolute before:border-transparent before:border-r-[#252525] before:border-solid before:border-b-[40px] before:border-r-[12px] before:left-[-12px]"
      >
        comments 3
      </div>
    </div>
  );
}
