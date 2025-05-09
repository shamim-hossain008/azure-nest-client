import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";
import SpinnerLoader from "../../../Components/SpinnerLoader";
import RoomDataRow from "../../../Components/TableRows/RoomDataRow";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyListings = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Fetch room data
  const {
    data: rooms = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-listings", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/my-listings/${user?.email}`);
      return data;
    },
  });

  // Delete from server
  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/room/${id}`);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      refetch();
      toast.success("Your room has been deleted");
    },
  });

  // Handle delete
  const handleDelete = async (id) => {
    try {
      await mutateAsync(id);
    } catch (error) {
      console.log(error.message);
    }
  };
  // Handle Update
  if (isLoading) return <SpinnerLoader />;
  return (
    <div>
      <h2>MyListings</h2>
      <>
        <Helmet>
          <title>My Listings | Dashboard</title>
        </Helmet>

        <div className="container mx-auto  px-4 sm:px-8">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-auto shadow rounded-lg overflow-hidden">
                <table className="min-w-full  leading-normal">
                  <thead>
                    <tr className="text-black font-bold bg-[#2A80B9]">
                      <th
                        scope="col"
                        className="px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Location
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        From
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        To
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Delete
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Update
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {/* Room row data */}
                    {rooms.map((room) => (
                      <RoomDataRow
                        key={room._id}
                        room={room}
                        refetch={refetch}
                        handleDelete={handleDelete}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default MyListings;
