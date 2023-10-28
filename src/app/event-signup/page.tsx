"use client";

import { CardTitle } from "@/components/ui/card";
import { Card, CardHeader, CardContent, Typography, SelectChangeEvent, InputLabel, FormControl } from "@mui/material";
import * as React from "react";
import {Select, MenuItem} from "@mui/material";
import { useState } from 'react';

interface EventData {
    eventName: string;
    eventDate: string;
    eventTime: string;
    eventLocation: string;
    volunteerRole: string;
    volunteerShifts: string; // fields to be filled in by database
    eventActive: boolean;    // used to switch between active and inactive states
  }

const volunteerRoles = ['Role 1', 'Role 2', 'Role 3', 'Role 4']; // Change based on database

export default function EventSignup(eventD: EventData) {
    const [selectedRole, setSelectedRole] = React.useState<string>('');

    const handleRoleSelection = (event: SelectChangeEvent<string>) => { 
        setSelectedRole(event.target.value);
      };

    return (
        <main className="flex min-h-screen flex-col">
        <div className="md:p-16 p-2 pt-16 text-black bold">    <h1 className="text-6xl font-bold whitespace-nowrap">Event Signup</h1>
            <h3 className="text-2xl font-bold whitespace-nowrap" style={{ display: "inline" }}>Event Name:</h3>
            <h3 style={{ display: "inline", color: "red", whiteSpace: "nowrap"}}> [Placeholder Event Name {eventD.eventName}]</h3>
            <p> [Event Description] Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Suspendisse dui lacus, hendrerit et mollis a, molestie ac turpis.
          Fusce vel ipsum quis lorem elementum feugiat a sed tellus. Curabitur
          fringilla turois ultricies maximus accumsan. Duis varius le mauris,
          vitae tristique dui sagittis nec. Integer ultrices tortor eget ipsum
          consectetur, a ullamcorper tellus finibus.
            </p>
        
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Card sx={{ width: 325, height: 300, display: "flex", flexDirection: "column", margin: "0 40px"}} className="border border-black">
                <div style={{ display: "flex", alignItems: "center", margin: "10px" }}>
                    <h3 className="text-2xl font-bold"><span style={{ color: "red" }}>Step 1:</span> Choose available volunteer roles</h3>
                </div>

                <h3 style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "5px", color: "gray", fontSize: "13px", fontStyle: "italic" }}>
                    Unavailable roles for this event are greyed-out.
                </h3>

                <FormControl>
                    <InputLabel sx = {{marginTop: 2}} htmlFor="v-roles">Volunteer Roles</InputLabel>
                    <Select
                    sx={{ marginTop: 2, marginLeft: 2, width: 200, height: 50 }}
                    labelId="v-roles"
                    id="v-roles"
                    value={selectedRole}
                    onChange={handleRoleSelection}
                    >
                    {volunteerRoles.map((role, index) => (
                        <MenuItem key={index} value={role}>
                        {role}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
            
            </Card>

            <Card
                 sx={{ width: 325, height: 300, display: "flex", flexDirection: "column", margin: "0 40px" }}
                className="border border-black"
            >
            <div style={{ display: "flex", alignItems: "center", margin: "10px" }}>
                <h3 className="text-2xl font-bold">
                <span style={{ color: "red" }}>Step 2:</span> Choose what shifts you would like to work for this event
                </h3>
            </div>
            </Card>
        </div>
        </main>

        

    );
}