"use client";

import axios from 'axios';
import useSWR from 'swr';

import { EventCard } from "./eventCard";
import RegisterEvent from "../registerevent/page";
import AlertMessage from "../alert/AlertMessage";
import Image from "../../../node_modules/next/image";
import warning_icon from ".././_images/warning.svg";
import header_image from ".././_images/header-image.jpg";

interface OrganizedData {
  [eventId: string]: {
    event: {
      id: string; 
      title: string;
      description: string;
      location: string;
      date: string;
    };
    volunteerRoles: {
      title: string;
      description: string;
    }[];
  };
}

// organize the data to relate Events and Volunteer Roles
const organizeData = (eventRoleShifts: any) => {
  const organizedData: OrganizedData = {};

  eventRoleShifts["data"].forEach((eventRoleShift: any) => {
    const eventId = eventRoleShift["attributes"]["event"]["data"]["id"];

    if (!organizedData[eventId]) {
      organizedData[eventId] = {
        event: {
          id: eventId,
          title: eventRoleShift["attributes"]["event"]["data"]["attributes"]["title"],
          description: eventRoleShift["attributes"]["event"]["data"]["attributes"]["description"],
          location: eventRoleShift["attributes"]["event"]["data"]["attributes"]["location"],
          date: eventRoleShift["attributes"]["event"]["data"]["attributes"]["eventDateStart"],
        },
        volunteerRoles: [],
      };
    }

    organizedData[eventId].volunteerRoles.push({
      title: eventRoleShift["attributes"]["volunteer_role"]["data"]["attributes"]["title"],
      description: eventRoleShift["attributes"]["volunteer_role"]["data"]["attributes"]["description"],
    });
  });

  return organizedData;
};

const generateVolunteerRolesString = (volunteerRoles: any) => {
  return volunteerRoles.map((role: any) => `${role.title}`).join(', ');
};

export default function Dashboard() { 
  const address = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/event-role-shifts?populate=*`;
  const auth = `${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`;

  const fetcher = async (url: any) =>
    await axios
      .get(url, {
        headers: { Authorization: `Bearer ${auth}` },
      })
      .then((res) => res.data);

  let { data, error } = useSWR(address, fetcher);
  
  if (error) return <div>Error loading data...</div>;
  if (!data) return <div>Loading...</div>;

  const organizedData = organizeData(data);
  console.log(organizedData);

  return (
    <div className="bg-[#860E13] pt-16">
      <h1 className="pb-4 font-medium font-openSans text-5xl mb-4 text-white flex items-center justify-center"> Welcome! </h1>

      <div className="drop-shadow-[0_10px_10px_rgba(0,0,0,0.30)] bg-white w-full flex flex-col items-center justify-center p-6 mt-6 mb-10">
        <h2 className="font-semibold text-3xl mb-2 text-center"> Upcoming Events Information </h2>
        <div className="flex flex-row items-center justify-center m-4">
          <Image src={warning_icon} alt="description icon" width={40} height={40} className="mr-2" />
          <p className="text-[#9D5425] self-center italic text-lg"> <strong> Note:</strong> You must register for an event to volunteer for it. </p>
        </div>
        <div className="border-2 border-[#838383] text-[#838383] py-2 px-4 rounded-full inline-block mb-4 min-w-min"> Account Type: Volunteer </div>
      </div>

      <main className="flex min-h-screen flex-col justify-center px-16">
        <div className="lg:m-10">
          <div className="w-full self-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-10">
            {Object.keys(organizedData).map((eventId) => {
              const event = organizedData[eventId].event;
              const volunteerRolesString = generateVolunteerRolesString(organizedData[eventId].volunteerRoles);

              return (
                <EventCard
                  key={eventId}
                  image={header_image}
                  title={event.title}
                  description={event.description}
                  roles={volunteerRolesString}
                  date={event.date}
                  location={event.location}
                />
              );
            })}
          </div>
        </div>
        {/* for testing RegisterEvent component; shouldn't be here in actual product */}
        <RegisterEvent></RegisterEvent>
      </main>
      {/* for testing AlertMessage component */}
      <AlertMessage success={false}></AlertMessage> 
    </div>
  );
}
