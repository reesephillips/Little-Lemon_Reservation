import Footer from "./Footer";
import BookingHero from "./BookingHero";
import BookingForm from "./BookingForm";
import { useState } from "react";
function BookingPage({ availableTimes, updateTimes, submitForm }) {
  return (
    <>
      <BookingHero />
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        submitForm={submitForm}
      />
    </>
  );
}

export default BookingPage;
