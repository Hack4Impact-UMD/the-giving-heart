//TODO: need to check if current date is within event/shift date!
const handleCheckInToggle = async (event: { preventDefault: () => void }) => {
  event.preventDefault();

  const address = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/user-attends/${userAttendsId}`;
  const auth = `${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`;

  try {
    await axios
      .put(address, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
        data: {
          checkIn: event.target.value,
        },
      })
      .then((res) => console.log(res));
  } catch (error) {
    console.log(error);
  }
};

const handleCheckOutToggle = async (event: { preventDefault: () => void }) => {
  event.preventDefault();

  const address = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/user-attends/${userAttendsId}`;
  const auth = `${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`;

  try {
    await axios
      .put(address, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
        data: {
          checkOut: event.target.value,
        },
      })
      .then((res) => console.log(res));
  } catch (error) {
    console.log(error);
  }
};
