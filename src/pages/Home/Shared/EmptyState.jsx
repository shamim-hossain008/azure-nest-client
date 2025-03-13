import React from "react";

const EmptyState = ({ message, address, label }) => {
  return (
    <div className="h-screen gap-5 flex flex-col justify-center  items-center">
      <p className="text-xl text-gray-600 lg:text-3xl">{message}</p>
      <Button label={label} />
    </div>
  );
};

export default EmptyState;
