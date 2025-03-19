import { useQuery } from "@tanstack/react-query";
import Heading from "../../../Components/Heading/Heading";
import SpinnerLoader from "../../../Components/SpinnerLoader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import RoomCard from "./RoomCard";

const Rooms = () => {
  const axiosSecure = useAxiosSecure();

  const { data: rooms = [], isLoading } = useQuery({
    queryKey: ["rooms"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/rooms");
      return data;
    },
  });

  if (isLoading) return <SpinnerLoader />;

  return (
    <>
      {rooms && rooms.length > 0 ? (
        <div className="pt-12 grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room._id} room={room} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
          <Heading
            center={true}
            title="No Rooms Available In This Category!"
            subtitle="Please Select Other Categories."
          />
        </div>
      )}
    </>
  );
};

export default Rooms;
