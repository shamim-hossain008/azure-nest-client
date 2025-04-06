import React from "react";
import { Helmet } from "react-helmet";
import AddRoomForm from "../../../Components/Form/AddRoomForm";

const AddRoom = () => {
  return (
    <>
      <Helmet>
        <title>Add Room | Dashboard</title>
      </Helmet>

      {/* Form */}
      <AddRoomForm
        dates={dates}
        handleDates={handleDates}
        handleSubmit={handleSubmit}
        setImagePreview={setImagePreview}
        imagePreview={imagePreview}
        handleImage={handleImage}
        imageText={imageText}
        loading={loading}
      />
    </>
  );
};

export default AddRoom;
