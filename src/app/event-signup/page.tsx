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
import { EventSignUpData } from "../_api/model";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { Progress } from "@/components/ui/progress";
import Modal from "./signupModal";
import { Earth, Users, BookOpen, CalendarClock } from "lucide-react";

export default function EventSignupPage() {
  const searchParams = useSearchParams();
  const searchParamsEvent =
    searchParams.get("event") ??
    '{"id":"This was undefined", "title":"[Event Name]", "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus dui dignissim dui pellentesque, non pellentesque dolor dictum. In vel fermentum sem. Integer tempor congue porta.", "location":"[Location]", "eventDateStart":"[Date]", "eventDateEnd":"[Date]", "eventCheckInKey":"This was undefined", "signUpOpenDate":"[Date]", "signUpEndDate":"[Date]"}'; //FIXME: Need to change default val of params
  const eventData = JSON.parse(`${searchParamsEvent}`);
  const searchParamsVolunteerRoles =
    searchParams.get("volunteerRoles") ??
    '[{"title":"[Volunteer Role]", "description":"This was undefined", "eventRoleShiftTimeStart":"[Time]", "eventRoleShiftTimeEnd":"[Time]", "eventRoleShiftDate":"[Date]", "capacity":"10", "eventRoleShiftDescription":"This was undefined", "shiftId":"This was undefined", "volunteerRoleId":"This was undefined"}, {"title":"[Volunteer Role]", "description":"This was undefined", "eventRoleShiftTimeStart":"[Time]", "eventRoleShiftTimeEnd":"[Time]", "eventRoleShiftDate":"[Date]", "capacity":"10", "eventRoleShiftDescription":"This was undefined", "shiftId":"This was undefined", "volunteerRoleId":"This was undefined"}, {"title":"[Volunteer Role]", "description":"This was undefined", "eventRoleShiftTimeStart":"[Time]", "eventRoleShiftTimeEnd":"[Time]", "eventRoleShiftDate":"[Date]", "capacity":"10", "eventRoleShiftDescription":"This was undefined", "shiftId":"This was undefined", "volunteerRoleId":"This was undefined"}]'; //FIXME: Need to change default val of params
  const volunteerRolesData = JSON.parse(`${searchParamsVolunteerRoles}`);
  const router = useRouter();
  const userAttendAddress = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/user-attends?populate=*`;
  const waitlistUserAttendAddress = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/waitlist-user-attends?populate=*`;
  const auth = `${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`;

  const [selectedRole, setSelectedRole] = React.useState<string>("");
  const [availableShifts, setAvailableShift] = useState([]);
  const [selectedRoleShift, setSelectedRoleShift] = useState("");
  const { user, setUser } = useAuthContext();

  const [showTryAgainModal, setShowTryAgainModal] = useState(false);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);

  const eventD: EventSignUpData = {
    event: eventData,
    volunteerRoles: volunteerRolesData,
  };

  const handleRoleShiftSelection = (event: SelectChangeEvent<string>) => {
    console.log(event.target.value);
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

  const fetcher = async (url: any) =>
    await axios
      .get(url, {
        headers: { Authorization: `Bearer ${auth}` },
      })
      .then((res) => res.data);

  let { data: userAttendData, error: userAttendError } = useSWR(
    userAttendAddress,
    fetcher
  );

  let { data: waitlistUserAttendData, error: waitlistUserAttendError } = useSWR(
    waitlistUserAttendAddress,
    fetcher
  );

  const handleRegisterClick = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (user) {
      const address = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/user-attends`;
      const auth = `${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`;

      var shiftCapacity = Number.MAX_VALUE;
      try {
        // Check if user is already registered
        console.log(userAttendData["data"]);
        console.log("selectedRoleShift" + selectedRoleShift);

        for (const item of userAttendData["data"]) {
          if (
            item["attributes"]["users_permissions_user"]["data"]["attributes"][
              "username"
            ] == user.username &&
            item["attributes"]["event_role_shifts"]["data"][0]["id"] ==
              selectedRoleShift
          ) {
            setShowTryAgainModal(true);
            return;
          }
        }

        // Check if user is already on waitlist
        for (const item of waitlistUserAttendData["data"]) {
          if (
            item["attributes"]["users_permissions_user"]["data"]["attributes"][
              "username"
            ] == user.username &&
            item["attributes"]["event_role_shifts"]["data"][0]["id"] ==
              selectedRoleShift
          ) {
            setShowTryAgainModal(true);
            return;
          }
        }

        const numRegisteredForShift = userAttendData["data"].reduce(
          (acc: number, item: any) => {
            if (
              item["attributes"]["event_role_shifts"]["data"][0]["id"] ===
              selectedRoleShift
            ) {
              acc += 1;
            }
            return acc;
          },
          0
        );

        for (const item of userAttendData["data"]) {
          if (
            item["attributes"]["event_role_shifts"]["data"][0]["id"] ==
            selectedRoleShift
          ) {
            shiftCapacity =
              item["attributes"]["event_role_shifts"]["data"][0]["attributes"][
                "capacity"
              ];
            break;
          }
        }

        if (numRegisteredForShift >= shiftCapacity) {
          setShowWaitlistModal(true);
          return;
        }

        await axios.post(address, {
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
        });

        router.push("/dashboard");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleAddWaitlist = async () => {
    if (user) {
      const address = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/waitlist-user-attends`;
      const auth = `${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`;

      try {
        await axios.post(address, {
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
        });

        console.log("Successfully added to waitlist.");
        router.push("/dashboard");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <main className="flex min-h-screen flex-col">
      <div
        className="flex py-20 lg:justify-center "
        style={{
          backgroundImage:
            "url(../_images/event_registration_background.jpg), linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5))",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "30vh",
          position: "relative",
        }}
      >
        <div>
          <div className=" bg-[#72090E] bg-opacity-70 p-3 my-2">
            <h1 className="pl-5 pr-5 text-neutral-50 text-5xl md:text-7xl">
              Event registration
            </h1>
          </div>
          <div className="w-fit lg:m-auto">
            <h2 className="bg-[#72090E] bg-opacity-70 text-xl text-neutral-50 md:text-4xl p-3 pl-8 pr-8 my-2">
              {eventD.event.title}
            </h2>
          </div>
        </div>
      </div>
      <h2 className="pt-3 px-3 italic">Step:</h2>
      <div className="px-6 py-3 pb-12">
        <ol className="relative border-s-8 border-[#B91920]">
          <li className="mb-10 ms-8">
            <div className="absolute w-8 h-8 bg-[#72090E] rounded-full -start-5 border border-white text-center text-neutral-200">
              <p className="py-0.5">1</p>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white my-3">
              Review Event Details
            </h3>
            <div className="w-11/12 m-auto border rounded-lg shadow-xl p-5">
              <div className="flex">
                <BookOpen />
                <div className="flex flex-col w-11/12 pl-5">
                  <h4>
                    <b>Description</b>
                  </h4>

                  <p className="mb-4 mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                    {eventD.event.description}
                  </p>
                </div>
              </div>
              <div className="flex">
                <Users />
                <div className="flex flex-col w-11/12 pl-5">
                  <h4>
                    <b>Available Positions</b>
                  </h4>
                  <ul className="mb-2">
                    {eventD.volunteerRoles.map((role, index, array) => (
                      <ul
                        key={index}
                        className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400 pl-5 list-disc list-outside"
                      >
                        <li className="mb-2 mt-2">
                          <b>Category #{index + 1}</b>
                        </li>
                        <ul className="pl-5 list-disc list-inside">
                          <li className="mt-2" key={index}>
                            {role.title}
                          </li>
                        </ul>
                      </ul>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex">
                <CalendarClock />
                <div className="flex flex-col w-11/12 pl-5">
                  <h4>
                    <b>Date & Time</b>
                  </h4>
                  <p className="mb-4 mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                    {eventD.event.eventDateStart} to {eventD.event.eventDateEnd}
                  </p>
                </div>
              </div>
              <div className="flex">
                <Earth />
                <div className="flex flex-col w-11/12 pl-5">
                  <h4>
                    <b>Location</b>
                  </h4>
                  <p className="mb-4 mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                    {eventD.event.location}
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="mb-10 ms-8 text-center">
            <div className="absolute w-8 h-8 bg-[#72090E] rounded-full -start-5 border border-white text-center text-neutral-200">
              <p className="py-0.5">2</p>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white my-3">
              Choose an available volunteer role
            </h3>
            <div className="w-11/12 m-auto border rounded-lg shadow-xl p-5">
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
            </div>
          </li>
          {selectedRole !== "" ? (
            <>
              <li className="ms-8 mb-10 text-center">
                <div className="absolute w-8 h-8 bg-[#72090E] rounded-full -start-5 border border-white text-center text-neutral-200">
                  <p className="py-0.5">3</p>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white my-3">
                  Choose what shifts you would like to work
                </h3>
                <div className="w-11/12 m-auto border rounded-lg shadow-xl p-5">
                  {availableShifts.map((shift: any) => {
                    const numRegisteredForShift = userAttendData["data"].reduce(
                      (acc: number, item: any) => {
                        if (
                          item["attributes"]["event_role_shifts"]["data"][0][
                            "id"
                          ] === shift.shiftId
                        ) {
                          acc += 1;
                        }
                        return acc;
                      },
                      0
                    );

                    return (
                      <div key={shift.shiftId} className="flex flex-col my-8">
                        <div className="flex flex-col sm:flex-row justify-between text-md sm:text-lg mb-4">
                          <div className="flex items-center mb-2 sm:mb-0">
                            <input
                              type="radio"
                              name="shift"
                              id="v-roles"
                              // checked={selectedRoleShift === shift.shiftId}
                              value={shift.shiftId}
                              onChange={handleRoleShiftSelection}
                              className="form-radio h-5 w-5 text-orange-600"
                            />
                            <label
                              htmlFor={selectedRoleShift}
                              className="ml-2 font-semibold"
                            >
                              {shift["eventRoleShiftTimeStart"]} -{" "}
                              {shift["eventRoleShiftTimeEnd"]}
                            </label>
                          </div>

                          <div className="flex flex-row pl-7">
                            <p className="font-semibold mr-4">
                              Capacity: {shift.capacity}
                            </p>
                            <p className="font-semibold">
                              Open: {shift.capacity - numRegisteredForShift}
                            </p>
                          </div>
                        </div>
                        <Progress
                          value={
                            (numRegisteredForShift || 0 / shift.capacity) * 100
                          }
                        />
                      </div>
                    );
                  })}
                </div>
              </li>
            </>
          ) : (
            ""
          )}
          {selectedRoleShift !== "" ? (
            <>
              <li className="ms-8 text-center">
                <div className="absolute w-8 h-8 bg-[#72090E] rounded-full -start-5 border border-white text-center text-neutral-200">
                  <p className="py-0.5">4</p>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white my-3">
                  Submit Registration!
                </h3>
                <Button
                  variant="default"
                  size="default"
                  className="bg-[#ED1C24] text-white rounded-md"
                  onClick={handleRegisterClick}
                >
                  Submit Signup
                </Button>
              </li>
            </>
          ) : (
            ""
          )}
        </ol>
      </div>

      <Modal
        titleText="Sign-up Failed"
        descriptionText="You have already registered for this shift."
        buttonText="Try Again"
        onConfirm={() => setShowTryAgainModal(false)}
        open={showTryAgainModal}
        onOpenChange={setShowTryAgainModal}
      ></Modal>

      <Modal
        titleText="Full Capacity"
        descriptionText="This role and shit are at full capacity. Would you like to  join the waitlist?"
        buttonText="Join Waitlist"
        onConfirm={handleAddWaitlist}
        open={showWaitlistModal}
        onOpenChange={setShowWaitlistModal}
      ></Modal>

      {/* <h3
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
              <ul
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
              </ul>
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
      )} */}
    </main>
  );
}
