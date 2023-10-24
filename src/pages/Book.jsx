import React from "react";
import BookingForm from "../components/BookingForm";

const Book = ({ availableTimes, setAvailableTimes }) => {
  return (
    <>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      />
    </>
  );
};

export default Book;
