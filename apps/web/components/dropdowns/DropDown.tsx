import { DropdownMenu } from "@repo/ui/component";
import React, { use, useContext, useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { clsx } from "clsx";

interface DropdownProp {
  title: string;
  component: React.ReactNode;
}

export const Dropdown: React.FC<DropdownProp> = (prop) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu.Root
      isOpen={open}
      setIsOpen={setOpen}
      className="flex flex-col justify-center cursor-pointer h-[55px] "
    >
      <div className="relative h-[55px] flex justify-center">
        <DropdownMenu.Trigger asChild={true}>
          <div className="  text-[14px] text-[#403634] flex justify-center items-center gap-[7px]   hover:bg-[#EBE9DF] rounded-md px-[10px]  py-[7px]">
            {prop.title}
            <MdOutlineKeyboardArrowDown
              className={clsx(
                "text-black w-[20px] h-[20px] bg-transparent transition-all duration-500",
                open ? "rotate-[-180deg]" : "rotate-0"
              )}
            />
          </div>
        </DropdownMenu.Trigger>
        <div
          className={clsx(
            "",
            open &&
              "absolute bottom-0 bg-[#FF4F01] w-[80%] h-[6px] from-width-0"
          )}
        ></div>
      </div>
      <DropdownMenu.Content>{prop.component}</DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
