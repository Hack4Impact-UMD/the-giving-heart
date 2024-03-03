import { useState } from "react";
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
import warning_icon from ".././_images/warning.svg";
import Image from "../../../node_modules/next/image";

interface DropSpotProps {
  onDropSpot: () => void;
}
export default function DropSpot({ onDropSpot }: DropSpotProps) {

  // call passed in drop spot function and close modal when confirm is pressed
  const handleConfirm = () => {
    onDropSpot();
  };

  return (
      <Dialog>
      {/* DialogTrigger is the button that triggers the dialog */}
      <DialogTrigger asChild>
        <Button variant="default"
          size="default"
          className="bg-[#ED1C24] text-white rounded-md">
            Drop Spot
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[75%] lg:max-w-[25%]  px-12 bg-[#F5F5F5]">
        <DialogHeader className="items-center">
          <Image
            src={warning_icon}
            alt="description icon"
            width={60}
            height={60}
            className="mr-2 pt-10 pb-5"
          />
          <DialogTitle className="text-2xl text-black">Drop Spot</DialogTitle>
          <DialogDescription className="py-3 text-[#817F7F] text-center">
            Are you sure you would like to drop your registered spot for this event? If you change your mind, you will have to register again.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="space-y-2 flex flex-col flex-grow mb-3">

            <DialogClose asChild>
              <Button className="bg-inherit hover:bg-neutral-200 hover:border-[#beb2b2] border hover:border-collapse text-black" onClick={handleConfirm}>          
                Confirm
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
