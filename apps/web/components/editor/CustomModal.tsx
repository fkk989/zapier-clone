import { Modal } from "@repo/ui/component";
import React from "react";

interface DropdownProp {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  component: React.ReactNode;
}

export const CustomModal: React.FC<DropdownProp> = (prop) => {
  return (
    <Modal.Root
      isOpen={prop.open}
      setIsOpen={prop.setOpen}
      className="fixed flex flex-col justify-center cursor-pointer h-[55px] z-[2] "
    >
      <Modal.Content>{prop.component}</Modal.Content>
    </Modal.Root>
  );
};
