"use client";

import { CardTitle } from "@/components/ui/card";
import "./event_signup.css";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  SelectChangeEvent,
  InputLabel,
  FormControl,
} from "@mui/material";
import * as React from "react";
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "../../components/ui/button";
import axios from "axios";
import { useAuthContext } from "@/utils/context/AuthContext";

interface EventData {
  event: {
    id: string;
    title: string;
    description: string;
    location: string;
    eventDateStart: string;
    eventDateEnd: string;
    eventCheckInKey: string;
    signUpOpenDate: string;
    signUpEndDate: string;
  };
  volunteerRoles: {
    title: string;
    description: string;
    eventRoleShiftTimeStart: string;
    eventRoleShiftTimeEnd: string;
    eventRoleShiftDate: string;
    capacity: number;
    eventRoleShiftDescription: string;
    shiftId: string;
    volunteerRoleId: string;
  }[];
}

export default function EventSignupPage() {
  const searchParams = useSearchParams();

  const searchParamsEvent = searchParams.get("event") ?? "This was undefined"; //FIXME: Need to change default val of params
  const eventData = JSON.parse(`${searchParamsEvent}`);

  const searchParamsVolunteerRoles =
    searchParams.get("volunteerRoles") ?? "This was undefined - event data"; //FIXME: Need to change default val of params
  const volunteerRolesData = JSON.parse(`${searchParamsVolunteerRoles}`);

  const [selectedRole, setSelectedRole] = React.useState<string>("");

  const [availableShifts, setAvailableShift] = useState([]);
  const [selectedRoleShift, setSelectedRoleShift] = useState("");
  const handleRoleShiftSelection = (event: SelectChangeEvent<string>) => {
    setSelectedRoleShift(event.target.value);
  };

  const handleRoleSelection = (event: SelectChangeEvent<string>) => {
    setSelectedRole(event.target.value);
    setAvailableShift(
      volunteerRolesData.filter(
        (x: any) => x["volunteerRoleId"] === event.target.value
      )
    );
  };

  const eventD: EventData = {
    event: eventData,
    volunteerRoles: volunteerRolesData,
  };

  const { user, setUser } = useAuthContext();

  //TODO: need to make sure that users haven't already registered for event
  const handleRegisterClick = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (user) {
      console.log(user);
      const address = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/user-attends`;
      const auth = `${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`;

      console.log({
        users_permissions_user: {
          id: user.id,
        },
        event_role_shifts: {
          id: selectedRoleShift,
        },
        checkIn: false,
        checkOut: false,
      });

      try {
        await axios
          .post(address, {
            headers: {
              Authorization: `Bearer ${auth}`,
            },
            data: {
              users_permissions_user: {
                id: user.id,
              },
              event_role_shifts: {
                id: selectedRoleShift,
              },
              checkIn: false,
              checkOut: false,
            },
          })
          .then((res) => console.log(res));
      } catch (error) {
        console.log(error);
      }
    }
    // TODO: show error message if not logged in

    // else {
    // setShowErrorMessage(true);
    // }
  };

  return (
    <main className="flex min-h-screen flex-col">
      <div
        className="flex md:p-16 p-2 pt-16"
        style={{
          backgroundImage:
            "url(https://s3-alpha-sig.figma.com/img/4077/24e8/d2ceb9dcfeb6b305b7a653ac2d098c9e?Expires=1699833600&Signature=ELKLUbvN~tmYQCv9Krx5Hy8QvOm8gPfSuCVZ6M4k8R~uTaqV-Au2iNoHSEc0N2kNwNmDywilDftRjnvwIAq0fh6AVPkbfjFZ7tHzjmNgqfqRi5CzcIpW2dOoMpqdtN8-gF~weXAQZN21vW1Kt3B72QAGWVodX-NWzBghKrA01k7bw-VwkcDQKn6lv~0cCHmhUjYNr3usvFfksFzXCz5-ftA~CmBfjRqWIDdlLzDdulZhWfZTy5NzWYskzKNwgDp3dtjxR3zcx3HR~q~kpwHDEjqvgDUbEVubUokSg5lIAuASgxTQQ0jHX-RRlUPvwyG2pvLGixcVHcYfTMypYpIdGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "40vh",
          position: "relative",
        }}
      >
        <div>
          <p
            className="text-center text-sm pt-3 pb-3 font-bold"
            style={{
              background: "rgba(114, 9, 14, 0.80)",
              color: "white",
              fontFamily: "Open Sans",
              fontSize: "64px",
              margin: "10px 0",
              paddingLeft: "30px",
              position: "relative",
            }}
          >
            Event Registration
            <span className="background-element" />
          </p>

          <p
            className="text-center text-sm pt-3 pb-3 font-bold"
            style={{
              background: "rgba(114, 9, 14, 0.80)",
              color: "white",
              fontFamily: "Open Sans",
              fontSize: "48px",
              margin: "10px 0",
              paddingLeft: "30px",
              position: "relative",
            }}
          >
            {eventD.event.title}
            <span className="background-element" />
          </p>
        </div>
      </div>

      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
          fontFamily: "Open Sans",
          fontSize: "48px",
          fontWeight: "600",
        }}
      >
        Review event details
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            lineHeight: "2",
            width: 500,
            height: 650,
            display: "flex",
            flexDirection: "column",
            margin: "0 40px",
          }}
          className="border border-black"
        >
          <div style={{ marginLeft: "10px", marginTop: "10px" }}>
            <h3>Event Description</h3>
            <p
              style={{
                color: "var(--components-card-secondary-text-color, #6B7280)",
              }}
            >
              {" "}
              {eventD.event.description}
            </p>
          </div>

          <div style={{ marginLeft: "10px", marginTop: "20px" }}>
            <h3>Available Positions</h3>
            {eventD.volunteerRoles.map((role, index) => (
              <li
                key={index}
                style={{
                  color: "var(--components-card-secondary-text-color, #6B7280)",
                  fontWeight: "bold",
                }}
              >
                Category #{index + 1}
                <li
                  style={{
                    marginLeft: "20px",
                    color:
                      "var(--components-card-secondary-text-color, #6B7280)",
                  }}
                >
                  {role.title}
                  <ul></ul>
                </li>
              </li>
            ))}
          </div>

          <div style={{ marginLeft: "10px", marginTop: "20px" }}>
            <h3>Date and Time</h3>
            <p
              style={{
                color: "var(--components-card-secondary-text-color, #6B7280)",
              }}
            >
              {" "}
              {eventD.event.eventDateStart} - {eventD.event.eventDateEnd}
            </p>
          </div>

          <div style={{ marginLeft: "10px", marginTop: "20px" }}>
            <h3>Location</h3>
            <p
              style={{
                color: "var(--components-card-secondary-text-color, #6B7280)",
              }}
            >
              {" "}
              {eventD.event.location}{" "}
            </p>
          </div>
        </Card>
      </div>

      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
          fontFamily: "Open Sans",
          fontSize: "48px",
          fontWeight: "600",
          paddingTop: "30px",
        }}
      >
        Choose an available volunteer role
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            width: 500,
            height: 170,
            display: "flex",
            flexDirection: "column",
            margin: "0 40px",
          }}
          className="border border-black"
        >
          <h3
            style={{
              fontStyle: "italic",
              fontFamily: "Open Sans",
              color: "#9D5425",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "5px",
              fontSize: "13px",
            }}
          >
            Roles already at full-capacity for this event appear gray.
          </h3>
          <FormControl>
            <InputLabel sx={{ marginTop: 2 }} htmlFor="v-roles">
              Click to choose role
            </InputLabel>
            <Select
              sx={{ marginTop: 2, marginLeft: 2, width: 200, height: 50 }}
              labelId="v-roles"
              id="v-roles"
              value={selectedRole}
              onChange={handleRoleSelection}
            >
              {eventD.volunteerRoles.map((role, index) => (
                <MenuItem key={index} value={role.volunteerRoleId}>
                  {role.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Card>
      </div>
      {selectedRole !== "" ? (
        <div>
          <h3
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
              fontFamily: "Open Sans",
              fontSize: "48px",
              fontWeight: "600",
              paddingTop: "30px",
            }}
          >
            Choose what shifts you would like to work
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              sx={{
                width: 500,
                height: 170,
                display: "flex",
                flexDirection: "column",
                margin: "0 40px",
              }}
              className="border border-black"
            >
              <div style={{ paddingLeft: "30px" }}>
                <div key="shiftkey">
                  <Select
                    sx={{
                      marginTop: 2,
                      marginLeft: 2,
                      width: 200,
                      height: 50,
                    }}
                    labelId="v-roles"
                    id="v-roles"
                    value={selectedRoleShift}
                    onChange={handleRoleShiftSelection}
                  >
                    {availableShifts.map((shift: any) => (
                      <MenuItem key={shift.shiftId} value={shift.shiftId}>
                        {shift["eventRoleShiftTimeStart"]} -
                        {shift["eventRoleShiftTimeEnd"]}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              </div>
            </Card>
          </div>
          {selectedRoleShift !== "" ? (
            <div>
              <h3
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "black",
                  fontFamily: "Open Sans",
                  fontSize: "48px",
                  fontWeight: "600",
                  paddingTop: "30px",
                }}
              >
                Submit Registration
              </h3>
              <Button
                variant="default"
                size="default"
                className="bg-[#ED1C24] text-white rounded-md"
                onClick={handleRegisterClick}
              >
                Register
              </Button>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </main>
  );
}
