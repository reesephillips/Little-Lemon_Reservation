import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import HomePage from "./Components/HomePage";
import { Routes, Route } from "react-router-dom";
import BookingPage from "./Components/BookingPage";
import { useReducer } from "react";
import bookingReducer from "./Reducer/bookingReducer";
import ConfirmedBooking from "./Components/ConfirmedBooking";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "./Utils/api";

function App() {
  const navigate = useNavigate();

  const initializeTimes = () => {
    const currentDate = new Date();
    return fetchAPI(currentDate);
  };

  const [availableTimes, dispatch] = useReducer(
    bookingReducer,
    initializeTimes()
  );

  const updateTimes = (date) => {
    dispatch({ type: "update-times", payload: date });
  };

  const submitForm = (formData) => {
    const result = submitAPI(formData);
    if (result === true) {
      //store data in loca storage
      let existingBookings = JSON.parse(
        localStorage.getItem("charles-little-lemon-bookings-data")
      );
      if (existingBookings) {
        existingBookings.unshift(formData);
        localStorage.setItem(
          "charles-little-lemon-bookings-data",
          JSON.stringify(existingBookings)
        );
      } else {
        localStorage.setItem(
          "charles-little-lemon-bookings-data",
          JSON.stringify([formData])
        );
      }
      navigate("/booking-confirmation");
    }
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              updateTimes={updateTimes}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/booking-confirmation" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
