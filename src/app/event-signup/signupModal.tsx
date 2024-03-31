import { Dispatch, SetStateAction } from 'react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import warning_icon from "../_images/warning.svg";
import Image from "next/image";

interface ModalProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  onConfirm: () => void;
  titleText: string;
  descriptionText: string;
  buttonText: string;
}
export default function ModalProps({ open, onOpenChange, onConfirm, titleText, descriptionText, buttonText}: ModalProps) {

  // call function parameter and close modal when button is pressed
  const handleConfirm = () => { onConfirm(); };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[75%] lg:max-w-[25%]  px-12 bg-[#F5F5F5]">
        <DialogHeader className="items-center">
          <Image
            src={warning_icon}
            alt="description icon"
            width={60}
            height={60}
            className="mr-2 pt-10 pb-5"
          />
          <DialogTitle className="text-2xl text-black">{titleText}</DialogTitle>
          <DialogDescription className="py-3 text-[#817F7F] text-center">
            {descriptionText}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="space-y-2 flex flex-col flex-grow mb-3">

            <DialogClose asChild>
              <Button className="bg-inherit hover:bg-neutral-200 hover:border-[#beb2b2] border hover:border-collapse text-black" onClick={handleConfirm}>          
                {buttonText}
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button variant="default"
                size="default"
                className="bg-[#ED1C24] text-white rounded-md">
                  Cancel
              </Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
