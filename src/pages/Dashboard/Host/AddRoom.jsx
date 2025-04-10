import React, { useState } from "react";
import { Helmet } from "react-helmet";
import AddRoomForm from "../../../Components/Form/AddRoomForm";
import useAuth from "../../../hooks/useAuth";

const AddRoom = () => {
  const { user } = useAuth();
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: null,
    key: "selection",
  });

  // Date range handler
  const handleDates = (item) => {
    console.log(item);
    setDates(item.selection);
  };

  // Form handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const to = "";
    const from = "";
    const price = form.price.value;
    const guests = form.total_guests.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;
    const bedrooms = form.bedrooms.value;
    const image = form.image.files[0];
    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };
  };
  return (
    <>
      <Helmet>
        <title>Add Room | Dashboard</title>
      </Helmet>
      <h2> This is a Add room</h2>
      {/* Form */}
      <AddRoomForm
        dates={dates}
        handleDates={handleDates}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default AddRoom;
