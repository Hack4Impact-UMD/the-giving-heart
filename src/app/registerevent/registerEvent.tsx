"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// required props; some could be optional but not sure which
interface EventData {
  eventName: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  volunteerRole: string;
  volunteerShifts: string; // fields to be filled in by database
  eventActive: boolean;    // used to switch between active and inactive states
}

export default function BasicCard(props: EventData) {
  return (
    <Card
      sx={{ minWidth: 350, maxWidth: "65%", display: "flex"}}
      className="border border-black" // mixed tailwind and material UI styles; component was made before codebase switch
    >
      <CardContent sx={{ mb: 5 }}>
        {/* Title */}
        <Typography
          sx={{ color: "red", fontSize: 28, mt: 2 }}
          color="text.secondary"
          gutterBottom
        >
          <b>{props.eventName}</b>
        </Typography>

        {/* Main Content */}
        <Typography variant="body2">
          <b>Date:</b> {props.eventDate} - {props.eventTime}
          <br />
          <b>Location:</b> {props.eventLocation}
          <br />
          <b>Volunteer Role:</b> {props.volunteerRole}
          <br />
          <b>Shifts:</b> {props.volunteerShifts}
          <br />
        </Typography>

        {/* Card Actions */}
        <CardContent
          sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px", p: 0 }}
          className="md:flex-row"
        >
          {/* left/top side actions */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flex: 1,
              p: 0,
              mt: 3,
              color: "red",
            }}
          >
            <Typography variant="body1">
              <b>
                If you would like to drop your registration for this event,
                please click the button below.
              </b>
            </Typography>
            <Box sx={{ mt: 1 }}>
              {/* ADD ONCLICK BEHAVIOR HERE */}
              <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md">
                Check In
              </button>
            </Box>
          </Box>
          {/* right/bottom side actions */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flex: 1,
              p: 0,
              mt: 3,
              color: "red",
            }}
          >
            <Typography variant="body1">
              <b>
                When the event is active, please check in/out of the event using these buttons.
              </b>
            </Typography>

            <Box sx={{ display: "flex", mt: 1 }}>
              {/* ADD CHECK IN ONCLICK BEHAVIOR */}
              <button
                className={`${
                  props.eventActive ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-500 hover:bg-gray-600 shadow-none'
                } text-white px-4 py-2 mr-4 rounded-md`} // change color based on active event
              >
                Check In
              </button>
              {/* ADD CHECK OUT ONCLICK BEHAVIOR */}
              <button
                className={`${
                  props.eventActive ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-500 hover:bg-gray-600 shadow-none'
                } text-white px-4 py-2 rounded-md`} // change color based on active event
              >
                Check Out
              </button>
            </Box>
          </Box>
        </CardContent>
      </CardContent>
    </Card>
  );
}
