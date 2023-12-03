"use client";

import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Switch } from "@/components/ui/switch";
import CardContent from "@mui/material/CardContent";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import axios from "axios";
import DropSpot from "./dropSpot"
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
}

// Create a custom Material-UI theme with Open Sans font
const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif", // Use Open Sans font
  },
});

export default function RegisteredEventCard(props: EventData) {
  // stuff to change the check in value created from the checkin button
  const [isCheckedIn, setIsCheckedIn] = useState(props.checkIn ?? false);
  const checkInStyles = {
    backgroundColor: isCheckedIn ? "green" : "", // Change 'initialColor' to your desired initial background color
  };
  // stuff to change the check out value created from the check out button
  const [isCheckedOut, setIsCheckedOut] = useState(props.checkOut ?? false);
  const checkOutStyles = {
    backgroundColor: isCheckedOut ? "green" : "", // Change 'initialColor' to your desired initial background color
  };

  const address = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/user-attends/${props.userAttendId}`;
  const auth = `${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`;
  // const router = useRouter();

  const handleCheckInToggle = async () => {
    const newToggleValue = !isCheckedIn;
    setIsCheckedIn(newToggleValue);

    try {
      await axios
        .put(address, {
          headers: {
            Authorization: `Bearer ${auth}`,
          },
          data: {
            checkIn: newToggleValue,
          },
        })
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckOutToggle = async () => {
    const newToggleValue = !isCheckedOut;
    setIsCheckedOut(newToggleValue);

    try {
      await axios
        .put(address, {
          headers: {
            Authorization: `Bearer ${auth}`,
          },
          data: {
            checkOut: newToggleValue,
          },
        })
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDropSpot = async (event: { preventDefault: () => void }) => {
    try {
      await axios
        .delete(address, {
          headers: {
            Authorization: `Bearer ${auth}`,
          },
        })
        .then((res) => {
          console.log(res);
          // router.reload(); //FIXME: need to refresh dashboard once we drop a spot 
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Card
        sx={{ width: 425 }}
        className="px-0 flex flex-col" // mixed tailwind and material UI styles; component was made before codebase switch
      >
        <CardContent sx={{ mb: 1, px: 3 }}>
          {/* Title */}
          <Typography sx={{ color: "#860E13", fontSize: 28, mt: 1, mb: 1 }}>
            <b>{props.name}</b>
          </Typography>

          <div className="flex space-x-2 items-start mt-3">
            <img src="/_images/calendar-clock.svg" alt="calendar-clock-icon" />

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
            <img src="/_images/globe-2.svg" alt="globe-2-icon" />

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
            <img src="/_images/users.svg" alt="users-icon" />

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
            <img src="/_images/trash-2.svg" alt="trash-2-icon" />

            <div className="flex flex-col">
              <Typography sx={{ color: "black", fontSize: 16 }}>
                <b>Drop event registration: </b>
              </Typography>
            </div>
          </div>

          {/* dropping spot on backend should be handled in DropSpot */}
          <div className="mt-3 text-center">
            <DropSpot></DropSpot>
          </div>
        </CardContent>

        {/* CHECK IN/OUT SECTION (RED PART) */}

        <Box sx={{ backgroundColor: "#860E13", px: 3, py: 3 }}>
          <Typography sx={{ color: "white", fontSize: 20 }}>
            <b>Event Check-In/Out</b>
          </Typography>

          <div className="flex space-x-2 items-start mt-3">
            <img src="/_images/badge-info.svg" alt="badge-info-icon" />

            <div className="flex flex-col">
              <Typography sx={{ color: "#E6E5E5", fontSize: 14 }}>
                <i>
                  When the event has started, please check in/out of the event
                  by clicking the switches below.
                </i>
              </Typography>
            </div>
          </div>

          <div className="flex flex-row text-center justify-evenly my-3">
            <div className="flex flex-col items-center">
              <Typography sx={{ color: "white", fontSize: 18 }}>
                <b>Check-In</b>
              </Typography>
              <Switch
                checked={isCheckedIn}
                onCheckedChange={handleCheckInToggle}
                style={checkInStyles}
              />
            </div>
            <div className="flex flex-col items-center">
              <Typography sx={{ color: "white", fontSize: 18 }}>
                <b>Check-Out</b>
              </Typography>
              <Switch
                checked={isCheckedOut}
                onCheckedChange={handleCheckOutToggle}
                style={checkOutStyles}
              />
            </div>
          </div>
        </Box>
      </Card>
    </ThemeProvider>
  );
}
