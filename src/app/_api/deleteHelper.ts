const handleDeleteRegistration = async (event: {
  preventDefault: () => void;
}) => {
  event.preventDefault();

  const userAttendAddress = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/user-attends/${userAttendsId}`;
  const eventRoleShiftAddress = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/event-role-shifts/${shiftId}`;
  const auth = `${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`;

  try {
    await axios
      .put(userAttendAddress, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      })
      .then((res) => console.log(res));
  } catch (error) {
    console.log(error);
  }
};
