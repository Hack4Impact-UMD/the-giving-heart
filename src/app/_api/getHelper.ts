//code to get user attends data
const address = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/user-attends?populate=*`;
const auth = `${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`;
const [showErrorMessage, setShowErrorMessage] = useState(false);

const fetcher = async (url: any) =>
  await axios
    .get(url, {
      headers: { Authorization: `Bearer ${auth}` },
    })
    .then((res) => res.data);

let { data, error } = useSWR(address, fetcher);

if (error) return <div>Error loading data...</div>;
if (!data) return <div>Loading...</div>;