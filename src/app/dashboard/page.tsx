"use client";

import axios from "axios";
import useSWR from "swr";
import { EventCard } from "./eventCard";
import AlertMessage from "../../components/ui/AlertMessage";
import Image from "../../../node_modules/next/image";
import warning_icon from ".././_images/warning.svg";
import header_image from ".././_images/header-image.jpg";
import { useState } from "react";
import { StrapiEventData, UserAttendsData } from "../_api/model";
import { useAuthContext } from "@/utils/context/AuthContext";
import RegisteredEventCard from "./registeredEventCard";

//FIXME: need to optimize/refactor
//TODO: filter by events that are still available! (i.e. signUpOpenDate/SignUpEndDate is in the future)
// organize the data to relate Events and Volunteer Roles
const organizeData = (eventRoleShifts: any) => {
  const organizedData: StrapiEventData = {};

  eventRoleShifts["data"].forEach((eventRoleShift: any) => {
    const eventId = eventRoleShift["attributes"]["event"]["data"]["id"];
    if (!organizedData[eventId]) {
      organizedData[eventId] = {
        event: {
          id: eventId,
          title:
            eventRoleShift["attributes"]["event"]["data"]["attributes"][
              "title"
            ],
          description:
            eventRoleShift["attributes"]["event"]["data"]["attributes"][
              "description"
            ],
          location:
            eventRoleShift["attributes"]["event"]["data"]["attributes"][
              "location"
            ],
          eventDateStart:
            eventRoleShift["attributes"]["event"]["data"]["attributes"][
              "eventDateStart"
            ],
          eventDateEnd:
            eventRoleShift["attributes"]["event"]["data"]["attributes"][
              "eventDateEnd"
            ],
          eventCheckInKey:
            eventRoleShift["attributes"]["event"]["data"]["attributes"][
              "eventCheckInKey"
            ],
          signUpOpenDate:
            eventRoleShift["attributes"]["event"]["data"]["attributes"][
              "signUpOpenDate"
            ],
          signUpEndDate:
            eventRoleShift["attributes"]["event"]["data"]["attributes"][
              "signUpEndDate"
            ],
        },
        volunteerRoles: [],
      };
    }

    organizedData[eventId].volunteerRoles.push({
      title:
        eventRoleShift["attributes"]["volunteer_role"]["data"]["attributes"][
          "title"
        ],
      description:
        eventRoleShift["attributes"]["volunteer_role"]["data"]["attributes"][
          "description"
        ],
      eventRoleShiftTimeStart:
        eventRoleShift["attributes"]["eventRoleShiftTimeStart"],
      eventRoleShiftTimeEnd:
        eventRoleShift["attributes"]["eventRoleShiftTimeEnd"],
      eventRoleShiftDate: eventRoleShift["attributes"]["eventRoleShiftDate"],
      capacity: eventRoleShift["attributes"]["capacity"],
      eventRoleShiftDescription:
        eventRoleShift["attributes"]["eventRoleShiftDescription"],
      shiftId: eventRoleShift["id"],
      volunteerRoleId:
        eventRoleShift["attributes"]["volunteer_role"]["data"]["id"],
    });
  });

  return organizedData;
};

const organizeUserAttendData = (userAttendStrapiData: any, user: any) => {
  const organizedData: UserAttendsData = { userAttend: [] };

  userAttendStrapiData["data"].forEach((item: any) => {
    const attr = item["attributes"];
    if (
      attr["users_permissions_user"]["data"]["attributes"]["username"] ===
      user.username
    ) {
      organizedData.userAttend.push({
        id: item["id"],
        checkIn: attr["checkIn"],
        checkOut: attr["checkOut"],
        users_permissions_user: {
          data: {
            id: attr["users_permissions_user"]["data"]["id"],
            attributes: {
              username:
                attr["users_permissions_user"]["data"]["attributes"][
                  "username"
                ],
            },
          },
        },
        event_role_shifts: {
          data: {
            id: attr["event_role_shifts"]["data"][0]["id"],
          },
        },
      });
    }
  });

  return organizedData;
};

const generateVolunteerRolesString = (volunteerRoles: any) => {
  return volunteerRoles.map((role: any) => `${role.title}`).join(", ");
};

export default function Dashboard() {
  const address = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/event-role-shifts?populate=*`;
  const userAttendAddress = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/user-attends?populate=*`;
  const auth = `${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`;
  const { user, setUser } = useAuthContext();
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const fetcher = async (url: any) =>
    await axios
      .get(url, {
        headers: { Authorization: `Bearer ${auth}` },
      })
      .then((res) => res.data);

  let { data, error } = useSWR(address, fetcher);
  let { data: userAttendData, error: userAttendError } = useSWR(
    userAttendAddress,
    fetcher
  );

  if (error) return <div>Error loading data...</div>;
  if (userAttendError) return <div>Error loading data...</div>;
  if (!data) return <div>Loading...</div>;
  if (!userAttendData) return <div>Loading...</div>;

  const organizedData = organizeData(data);
  const organizedUserAttendsData = user
    ? organizeUserAttendData(userAttendData, user)
    : { userAttend: [] };

  return (
    <div className="bg-[#860E13] pt-16">
      <h1 className="pb-4 font-medium font-openSans text-5xl mb-4 text-white flex items-center justify-center">
        {" "}
        Welcome!{" "}
      </h1>

      <div className="drop-shadow-[0_10px_10px_rgba(0,0,0,0.30)] bg-white w-full flex flex-col items-center justify-center p-6 mt-6 mb-10">
        <h2 className="font-semibold text-3xl mb-2 text-center">
          {" "}
          Upcoming Events Information{" "}
        </h2>
        {!user ? (
          <div className="flex flex-row items-center justify-center m-4">
            <Image
              src={warning_icon}
              alt="description icon"
              width={40}
              height={40}
              className="mr-2"
            />
            <p className="text-[#9D5425] self-center italic text-lg">
              {" "}
              <strong> Note:</strong> You must register for an event to
              volunteer for it.{" "}
            </p>
          </div>
        ) : (
          ""
        )}
        {user ? (
          <div className="border-2 border-[#838383] text-[#838383] py-2 px-4 rounded-full inline-block mb-4 min-w-min">
            {" "}
            Account Type: Volunteer
          </div>
        ) : (
          ""
        )}
      </div>

      <main className="flex min-h-screen flex-col justify-center px-16">
        <div className="lg:m-10">
          <div className="w-full self-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-10">
            {organizedUserAttendsData["userAttend"].map((userAttend: any) => {
              let associatedEvent: any = {};
              let associatedEventRoleShift: any = {};

              Object.keys(organizedData).forEach((event: any) => {
                organizedData[event].volunteerRoles.forEach((role: any) => {
                  if (
                    role["shiftId"] ===
                    userAttend["event_role_shifts"]["data"]["id"]
                  ) {
                    associatedEvent = organizedData[event]["event"];
                    associatedEventRoleShift = role;
                  }
                });
              });

              return (
                <RegisteredEventCard
                  key={userAttend["id"]}
                  name={associatedEvent["title"]}
                  location={associatedEvent["location"]}
                  eventRoleShiftDate={
                    associatedEventRoleShift["eventRoleShiftDate"]
                  }
                  eventRoleShiftTimeStart={
                    associatedEventRoleShift["eventRoleShiftTimeStart"]
                  }
                  eventRoleShiftTimeEnd={
                    associatedEventRoleShift["eventRoleShiftTimeEnd"]
                  }
                  title={associatedEventRoleShift["title"]}
                  checkIn={userAttend["checkIn"]}
                  checkOut={userAttend["checkOut"]}
                  userAttendId={userAttend["id"]}
                />
              );
            })}
          </div>
          <div className="w-full self-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-10">
            {Object.keys(organizedData).map((eventId) => {
              const event = organizedData[eventId].event;
              const volunteerRolesString = generateVolunteerRolesString(
                organizedData[eventId].volunteerRoles
              );

              return (
                <EventCard
                  key={eventId}
                  event={JSON.stringify(event)}
                  volunteerRoles={JSON.stringify(
                    organizedData[eventId].volunteerRoles
                  )}
                  image={header_image}
                  setShowErrorMessage={setShowErrorMessage}
                />
              );
            })}
          </div>
        </div>
      </main>
      {showErrorMessage && (
        <AlertMessage
          success={false}
          description="Please sign in and try again."
        ></AlertMessage>
      )}
    </div>
  );
}
