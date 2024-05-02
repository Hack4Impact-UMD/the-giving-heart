"use client";

import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { Card, CardTitle } from "../../components/ui/card";
import { Switch } from "@/components/ui/switch";
import CardContent from "@mui/material/CardContent";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import axios from "axios";
import DropSpot from "./dropSpot";
import { useToast } from "@/components/ui/use-toast";
import Image from "../../../node_modules/next/image";

import { Progress } from "@/components/ui/progress";

import calendarClockIcon from "../../app/_images/calendar-clock.svg";
import globeIcon from "../../app/_images/globe.svg";
import usersIcon from "../../app/_images/users.svg";
import trashIcon from "../../app/_images/trash.svg";
import badgeIcon from "../../app/_images/badge-info.svg";
// import { useRouter } from "next/router";

//FIXME: need to match regular eventcard
// required props; some could be optional but not sure which
interface EventData {
  name: string;
  location: string;
  eventRoleShiftDate: string;
  eventRoleShiftTimeStart: string;
  eventRoleShiftTimeEnd: string;
  title: string;
  checkIn: boolean;
  checkOut: boolean;
  userAttendId: number;
  shiftId: number;
  onDropSpot: () => void;
}

// Create a custom Material-UI theme with Open Sans font
const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif", // Use Open Sans font
  },
});

export default function RegisteredEventCard(props: EventData) {
  const address = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/user-attends/${props.userAttendId}`;
  const auth = `${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`;
  const { toast } = useToast();

  const handleDropSpot = async () => {
    try {
      await axios
        .delete(address, {
          headers: {
            Authorization: `Bearer ${auth}`,
          },
        })
        .then((res) => {
          console.log(res);
          props.onDropSpot();
        });

      // Move a user off the waitlist if there are users on the waitlist
      const waitlistEntryResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/waitlist-user-attends?populate=*`,
        {
          headers: {
            Authorization: `Bearer ${auth}`,
          },
        }
      );

      // Filter the entries to find the one with matching event_role_shifts
      const waitlistEntry = waitlistEntryResponse.data.data.find(
        (entry: any) =>
          entry.attributes.event_role_shifts.data[0].id === props.shiftId
      );

      if (waitlistEntry) {
        // add logic to send an email to this user
        const address = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/user-attends`;
        // Add the fetched entry to UserAttends
        await axios.post(address, {
          headers: {
            Authorization: `Bearer ${auth}`,
          },
          data: {
            users_permissions_user: {
              id: waitlistEntry.attributes.users_permissions_user.data.id,
            },
            event_role_shifts: {
              id: waitlistEntry.attributes.event_role_shifts.data[0].id,
            },
            checkIn: false,
            checkOut: false,
          },
        });

        // Delete the fetched entry from WaitlistUserAttends
        await axios.delete(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/waitlist-user-attends/${waitlistEntry.id}`,
          {
            headers: {
              Authorization: `Bearer ${auth}`,
            },
          }
        );
        console.log("Successfully moved from waitlist to attends.");
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Oops!",
        description: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <Card className="border-2 px-0 flex flex-col drop-shadow-[0_10px_10px_rgba(0,0,0,0.50)] rounded-xl mb-3">
      <CardContent sx={{ mb: 1, px: 3 }}>
        <CardTitle className="p-6 text-[#860E13] mt-1 mb-1 text-start ml-0 pl-0 pt-1 pb-3">
          {" "}
          {props.name}{" "}
        </CardTitle>
        <div className="flex space-x-2 items-start mt-3">
          <Image src={calendarClockIcon} alt="calendar-clock-icon" />

          <div className="flex flex-col">
            <Typography sx={{ color: "black", fontSize: 16 }}>
              <b>Date & Time: </b>
            </Typography>
            <Typography sx={{ color: "gray  ", fontSize: 16 }}>
              Date: {props.eventRoleShiftDate} from{" "}
              {props.eventRoleShiftTimeStart} - {props.eventRoleShiftTimeEnd}
            </Typography>
          </div>
        </div>

        <div className="flex space-x-2 items-start mt-3">
          <Image src={globeIcon} alt="globe-2-icon" />

          <div className="flex flex-col justify-end">
            <Typography sx={{ color: "black", fontSize: 16 }}>
              <b>Location</b>
            </Typography>
            <Typography sx={{ color: "gray  ", fontSize: 16 }}>
              {props.location}
            </Typography>
          </div>

          <hr className="border-t border-gray-300 my-4" />
        </div>

        <Typography
          sx={{ color: "black", fontSize: 20, mt: 1 }}
          color="text.secondary"
          gutterBottom
        >
          <b>Role Information</b>
        </Typography>

        <div className="flex space-x-2 items-start mt-3">
          <Image src={usersIcon} alt="users-icon" />

          <div className="flex flex-col">
            <Typography sx={{ color: "black", fontSize: 16 }}>
              <b>Volunteer Role: </b>
            </Typography>
            <Typography sx={{ color: "gray  ", fontSize: 16 }}>
              {props.title}
            </Typography>
          </div>
        </div>

        <div className="flex space-x-2 items-start mt-3">
          <Image src={trashIcon} alt="trash-2-icon" />

          <div className="flex flex-col">
            <Typography sx={{ color: "black", fontSize: 16 }}>
              <b>Drop event registration: </b>
            </Typography>
          </div>
        </div>

        {/* dropping spot on backend should be handled in DropSpot */}
        <div className="mt-3 text-center">
          <DropSpot onDropSpot={handleDropSpot}></DropSpot>
        </div>
      </CardContent>
    </Card>
  );
}
