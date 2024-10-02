"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuthContext } from "@/utils/context/AuthContext";
import { BookOpen, CalendarClock, Globe } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import axios from "axios";
import useSWR from "swr";
import { useEffect, useState } from "react";

export default function Waitlist() {
  const eventRoleShiftsAddress = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/event-role-shifts?populate=*`;
  const waitlistUserAttendAddress = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/waitlist-user-attends?populate=*`;
  const { user, setUser } = useAuthContext();

  const fetcher = async (url: any) =>
    await axios.get(url).then((res) => res.data);

  const [
    { data: waitlistUserAttendData, error: waitlistUserAttendError },
    { data: eventRoleShiftData, error: eventRoleShiftError },
  ] = [
    useSWR(waitlistUserAttendAddress, fetcher),
    useSWR(eventRoleShiftsAddress, fetcher),
  ];

  const [userWaitlistData, setUserWaitlistData] = useState([]);

  useEffect(() => {
    if (user && waitlistUserAttendData && waitlistUserAttendData.data) {
      const filteredData = waitlistUserAttendData.data.filter((item: any) => {
        const userPermissionsUser = item.attributes.users_permissions_user;
        const userId =
          userPermissionsUser && userPermissionsUser.data
            ? userPermissionsUser.data.id
            : null;
        return (
          userId === user.id &&
          item.attributes.event_role_shifts.data.length > 0
        );
      });
      setUserWaitlistData(filteredData);
    }
  }, [waitlistUserAttendData, user]);

  if (eventRoleShiftError) return <div>Error loading data...</div>;
  if (waitlistUserAttendError) return <div>Error loading data...</div>;
  if (!waitlistUserAttendData) return <div>Loading...</div>;
  if (!eventRoleShiftData) return <div>Loading...</div>;

  function findWaitlistPosition(eventRoleShiftId: any) {
    let position = 0;
    waitlistUserAttendData.data.forEach((item: any) => {
      const eventRoleShifts = item.attributes.event_role_shifts.data;
      const userPermissionsUser = item.attributes.users_permissions_user.data;

      const isSameEventRoleShift = eventRoleShifts[0].id == eventRoleShiftId;
      const isDifferentUser = userPermissionsUser.id != user.id;
      const isSameUser = userPermissionsUser.id == user.id;

      if (isSameEventRoleShift) {
        if (isDifferentUser) {
          position++;
        } else if (isSameUser) {
          position++;
          return;
        }
      }
    });
    return position;
  }

  function dropWaitlistEntry(waitlistId: any) {
    const address = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/waitlist-user-attends/${waitlistId}`;
    const auth = `${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`;

    const dropWaitlistEntry = async () => {
      try {
        await axios.delete(address, {
          headers: {
            Authorization: `Bearer ${auth}`,
          },
        });
        setUserWaitlistData(
          userWaitlistData.filter((item: any) => item.id != waitlistId)
        );
      } catch (error) {
        console.error(error);
      }
    };

    return dropWaitlistEntry;
  }

  return user ? (
    <div className="bg-[#860E13] pt-16">
      <h1 className="pb-4 font-medium font-openSans text-5xl mb-4 text-white flex items-center justify-center">
        {" "}
        Waitlist{" "}
      </h1>

      <div className="drop-shadow-[0_10px_10px_rgba(0,0,0,0.30)] bg-white w-full flex flex-col items-center justify-center p-6 mt-6 mb-10">
        <h2 className="font-semibold text-3xl mb-2 text-center"></h2>
        <div className="w-full">
          {userWaitlistData && userWaitlistData.length > 0 ? (
            userWaitlistData.map((item: any) => {
              let associatedEvent = eventRoleShiftData.data.find(
                (shift: any) =>
                  shift.id === item.attributes.event_role_shifts.data[0].id
              );

              return (
                <div key={item.id} className="py-5">
                  <a
                    href="#"
                    className="h-full w-full md:max-w-lg flex flex-row items-center justify-between space-x-4 border-none block max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="w-full">
                      <h5 className="mb-2 text-sm md:text-xl font-sans tracking-tight text-gray-900 dark:text-white">
                        {associatedEvent.attributes.event.data.attributes.title}
                      </h5>
                      <p className="font-sans mb-2 text-gray-700 font-light text-xs dark:text-gray-400">
                        <b>Date: </b>
                        {associatedEvent.attributes.eventRoleShiftDate}
                      </p>
                      <p className="font-sans mb-2 text-gray-700 font-light text-xs dark:text-gray-400">
                        <b>Role: </b>
                        {
                          associatedEvent.attributes.volunteer_role.data
                            .attributes.title
                        }
                      </p>
                      <p className="font-sans mb-2 text-gray-700 font-light text-xs dark:text-gray-400">
                        <b>Shift: </b>
                        {
                          associatedEvent.attributes.eventRoleShiftTimeStart
                        } - {associatedEvent.attributes.eventRoleShiftTimeEnd}
                      </p>
                      <p className="font-sans mb-2 text-gray-700 font-light text-xs dark:text-gray-400">
                        Your position on the waitlist:{" "}
                        {findWaitlistPosition(
                          item.attributes.event_role_shifts.data[0].id
                        )}
                      </p>
                      <Button
                        variant="default"
                        size="default"
                        className="bg-[#ED1C24] text-white rounded-md"
                        onClick={dropWaitlistEntry(item.id)}
                      >
                        Drop Spot
                      </Button>
                    </div>
                  </a>
                </div>
              );
            })
          ) : (
            <p>You are not on the waitlist for any events.</p>
          )}
        </div>
      </div>

      <main className="flex min-h-screen flex-col justify-center px-16">
        <div className="lg:m-10">
          <div className="w-full self-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-10"></div>
          <div className="w-full self-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-10"></div>
        </div>
      </main>
    </div>
  ) : (
    <div>
      <h1>Please log in to view this page</h1>
    </div>
  );
}
