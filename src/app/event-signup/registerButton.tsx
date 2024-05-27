"use client";
import { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import { useAuthContext } from "@/utils/context/AuthContext";

// https://docs.strapi.io/dev-docs/integrations/next-js
// https://strapi.io/blog/using-transactions-with-strapi-v4-with-tests
// https://strapi.io/blog/using-database-transactions-to-write-queries-in-strapi
// https://docs.strapi.io/dev-docs/api/query-engine/single-operations#findwithcount

// this assumes that selectedRoleShift is the entire JSON that includes the role shift capacity
export default function RegisterButton(selectedEventRoleShift: any) {
  const { user, setUser } = useAuthContext();

  const addressUserAttends = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/user-attends`;
  const addressEventRoleShifts = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/event-role-shifts`;
  const auth = `${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`;
  const [registerEventError, setRegisterEventError] = useState(null);

  //this will check if we have met capacity for registration
  //need to check if aggregate sum is less than capacity field
  const fetcher = async (url: any) =>
    await axios.get(url).then((res) => res.data);

  let { data, error } = useSWR(addressEventRoleShifts, fetcher);

  if (error) return <div>Error loading data...</div>;
  if (!data) return <div>Loading...</div>;

  //handle submit functionality when register button is pressed
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        addressUserAttends,
        {
          //TODO: need to check whether we need to pass only id of user and event_shift_role
          data: {
            user_attend: user,
            event_role_shift: selectedEventRoleShift,
          },
        },
        {
          headers: { Authorization: `Bearer ${auth}` },
        }

        //also need to populate
      );
      console.log(response);
    } catch (error: any) {
      setRegisterEventError(error);
    }
  };

  return (
    <div>
      <button onSubmit={(e) => handleSubmit(e)}>Register</button>
      {/**TODO: show a snackbar whether or not response was successful or not */}
    </div>
  );
}
