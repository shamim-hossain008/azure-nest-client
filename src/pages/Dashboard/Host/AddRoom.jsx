import React from "react";
import { Helmet } from "react-helmet";
import AddRoomForm from "../../../Components/Form/AddRoomForm";

const AddRoom = () => {
  return (
    <>
      <Helmet>
        <title>Add Room | Dashboard</title>
      </Helmet>
      <h2> This is a Add room</h2>
      {/* Form */}
      <AddRoomForm />
    </>
  );
};

export default AddRoom;
