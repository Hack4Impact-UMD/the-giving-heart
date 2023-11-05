"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Switch from '@mui/material/Switch';
import CardContent from "@mui/material/CardContent";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";

// required props; some could be optional but not sure which
interface EventData {
  eventName: string;
  eventDescription: string;
  eventDate: string;
  eventStartTime: string;
  eventEndTime: string;
  eventLocation: string;
  volunteerRole: string;
  volunteerShifts: string; // fields to be filled in by database
  eventActive: boolean;    // used to switch between active and inactive states
}

// Create a custom Material-UI theme with Open Sans font
const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif", // Use Open Sans font
  },
});

export default function BasicCard(props: EventData) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Card
      sx={{ width: 425}}
      className="px-0 flex flex-col" // mixed tailwind and material UI styles; component was made before codebase switch
      >    
        <CardContent sx={{ mb: 1, px: 3}}> 
          {/* Title */}
          <Typography
            sx={{color: "#860E13", fontSize: 28, mt: 1, mb: 1}}
            color="text.secondary"
            gutterBottom
            >
            <b>{props.eventName}</b>
          </Typography>
          
          <Typography
            sx={{color: 'black', fontSize: 20}}
            className="font-semibold"
            gutterBottom
            >
            Event Information
          </Typography>

          <div className="flex space-x-2 items-start mt-3">
            <img src="/_images/book-open.svg" alt="book-icon"/>

            <div className="flex flex-col">
              <Typography
                sx={{ color: 'black', fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                <b>Description: </b>
              </Typography>
              <Typography
                sx={{ color: 'gray  ', fontSize: 16 }}
                color="text.secondary"
                gutterBottom
                >
                {props.eventDescription}
              </Typography>
            </div>
          </div>

          <div className="flex space-x-2 items-start mt-3">
            <img src="/_images/calendar-clock.svg" alt="calendar-clock-icon"/>

            <div className="flex flex-col">
              <Typography
                sx={{ color: 'black', fontSize: 16 }}
                color="text.secondary"
                gutterBottom
                >
                <b>Date & Time: </b>
              </Typography>
              <Typography
                sx={{ color: 'gray  ', fontSize: 16 }}
                color="text.secondary"
                gutterBottom
                >
                Date: {props.eventDate} from {props.eventStartTime} - {props.eventEndTime}
              </Typography>
            </div>
          </div>

          <div className="flex space-x-2 items-start mt-3">
            <img src="/_images/globe-2.svg" alt="globe-2-icon"/>

            <div className="flex flex-col">
              <Typography
                sx={{ color: 'black', fontSize: 16 }}
                color="text.secondary"
                gutterBottom
                >
                <b>Location</b>
              </Typography>
              <Typography
                sx={{ color: 'gray  ', fontSize: 16 }}
                color="text.secondary"
                gutterBottom
                >
                {props.eventLocation}
              </Typography>
            </div>

            <hr className="border-t border-gray-300 my-4" />
          </div>

          <Typography
            sx={{color: 'black', fontSize: 20, mt: 1}}
            color="text.secondary"
            gutterBottom
            >
            <b>Role Information</b>
          </Typography>

          <div className="flex space-x-2 items-start mt-3">
            <img src="/_images/users.svg" alt="users-icon"/>

            <div className="flex flex-col">
              <Typography
                sx={{ color: 'black', fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                <b>Volunteer Role: </b>
              </Typography>
              <Typography
                sx={{ color: 'gray  ', fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                {props.volunteerRole}
              </Typography>
            </div>
          </div>

          <div className="flex space-x-2 items-start mt-3">
            <img src="/_images/trash-2.svg" alt="trash-2-icon"/>

            <div className="flex flex-col">
              <Typography
                sx={{ color: 'black', fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                <b>Drop event registration: </b>
              </Typography>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-red-500 hover:bg-red-600 text-white px-10 py-2 rounded-md mt-3 inline-block">
              <b>Drop Spot</b>
            </button>
          </div>

        </CardContent>
        <Box sx={{backgroundColor: "#860E13", px: 3, py: 3}}>
          <Typography
            sx={{color: 'white', fontSize: 20 }}
            >
            <b>Event Check-In/Out</b>
          </Typography>

          <div className="flex space-x-2 items-start mt-3">
            <img src="/_images/users.svg" alt="users-icon"/>

            <div className="flex flex-col">
              <Typography
                sx={{ color: '#E6E5E5', fontSize: 14 }}                >
                <i>When the event has started, please check in/out of the event by clicking the switches below.</i>
              </Typography>
            </div>
          </div>

          <div className="flex flex-row text-center justify-evenly my-3">
            <div className="flex flex-col items-center">
              <Typography
                sx={{color: 'white', fontSize: 18 }}
                >
                <b>Check-In</b>
              </Typography>
              <Switch />
            </div>
            <div className="flex flex-col items-center">
              <Typography
                sx={{color: 'white', fontSize: 18 }}
                >
                <b>Check-Out</b>
              </Typography>
              <Switch />
            </div>
          </div>

        </Box>
      </Card>
    </ThemeProvider>
  );
}
