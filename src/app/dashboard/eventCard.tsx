import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { Button } from "../../components/ui/button";
import Image, { StaticImageData } from "../../../node_modules/next/image";

import book_icon from ".././_images/book-open.svg";
import user_icon from ".././_images/users.svg";
import calendar_icon from ".././_images/calendar-clock.svg";
import globe from ".././_images/globe.svg";
import AlertMessage from "../../components/ui/AlertMessage";
import { useAuthContext } from "@/utils/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface EventCardProps {
  key: string;
  event: string;
  volunteerRoles: string;
  image: StaticImageData;
  setShowErrorMessage: (value: boolean) => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  event,
  volunteerRoles,
  image,
  setShowErrorMessage,
}) => {
  const eventObject = JSON.parse(event);
  const volunteerRolesObject = JSON.parse(volunteerRoles);
  const { user } = useAuthContext();
  const router = useRouter();

  const handleClick = () => {
    const query = new URLSearchParams({
      event: event,
      volunteerRoles: volunteerRoles,
    }).toString();

    router.push(`/event-signup?${query}`);
  };

  return (
    <div className="drop-shadow-[0_10px_10px_rgba(0,0,0,0.50)]">
      <Card className="border-2 h-full flex flex-col justify-between rounded-xl">
        <CardHeader className="p-0">
          <Image
            src={image}
            alt="card header image"
            className="rounded-t-xl object-cover h-full w-full"
          ></Image>
        </CardHeader>

        <CardTitle className="p-6 text-[#860E13]">
          {" "}
          {eventObject["title"]}{" "}
        </CardTitle>

        <CardContent className="rounded-none flex flex-col justify-start items-start flex-1 pl-6">
          <div className="flex items-center mb-2 pb-2">
            <Image src={book_icon} alt="description icon" className="mr-2" />
            <p className="font-bold"> Description: </p>
          </div>
          <p className="text-[#6B7280] pb-3"> {eventObject["description"]} </p>

          <div className="flex items-center mb-2 pb-2">
            <Image src={user_icon} alt="description icon" className="mr-2" />
            <p className="font-bold"> Available Positions: </p>
          </div>

          <div className="pl-4">
            <ul className="text-[#6B7280] pb-4">
              {volunteerRolesObject.map((role: any) => (
                <li key={role["volunteerRoleId"]}>
                  <span style={{ marginLeft: "-1.25em", marginRight: "0.5em" }}>
                    &#8226;
                  </span>{" "}
                  {role["title"]}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center mb-2 pb-2">
            <Image
              src={calendar_icon}
              alt="description icon"
              className="mr-2"
            />
            <p className="text-[#6B7280]">
              {" "}
              {eventObject["eventDateStart"]} - {eventObject["eventDateEnd"]}{" "}
            </p>
          </div>

          <div className="flex items-center mb-2">
            <Image src={globe} alt="description icon" className="mr-2" />
            <p className="text-[#6B7280]"> {eventObject["location"]} </p>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center items-center">
          {!user ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span tabIndex={0}>
                    <Button
                      variant="default"
                      size="default"
                      className="bg-[#ED1C24] text-white rounded-md"
                      onClick={handleClick}
                      disabled
                    >
                      Register
                    </Button>
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  You must sign in to register for this event.
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <Button
              variant="default"
              size="default"
              className="bg-[#ED1C24] text-white rounded-md"
              onClick={handleClick}
            >
              Register
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};
