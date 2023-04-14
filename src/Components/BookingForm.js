import "./BookingForm.css";
import { useEffect, useState } from "react";
import validateEmail from "../Utils/validateEmail";

function BookingForm({ availableTimes, updateTimes, submitForm }) {
  const [valid, setValid] = useState(false);
  const [date, setDate] = useState({
    value: "",
    error: true,
    errorMsg: "",
    focused: false,
  });
  const [time, setTime] = useState({
    value: "",
    error: true,
    errorMsg: "",
    focused: false,
  });
  const [dinners, setDinners] = useState({
    value: "",
    error: true,
    errorMsg: "",
    focused: false,
  });
  const [occasion, setOccasion] = useState({
    value: "",
    error: true,
    errorMsg: "",
    focused: false,
  });
  const [seatOption, setSeatOption] = useState("Standard");
  const [request, setRequest] = useState("");
  const [name, setName] = useState({
    value: "",
    error: true,
    errorMsg: "",
    focused: false,
  });
  const [email, setEmail] = useState({
    value: "",
    error: true,
    errorMsg: "",
    focused: false,
  });
  const today = new Date().toISOString().split("T")[0];

  const [numDinners] = useState([
    "Choose number of dinners",
    "2 persons",
    "4 persons",
    "6 persons",
    "8 persons",
    "10 persons",
  ]);

  const [events] = useState([
    "Choose the occasion",
    "Birthday",
    "Engagement",
    "Anniversary",
    "Other",
  ]);

  useEffect(() => {
    if (email.error === true) {
      setValid(false);
    } else if (email.focused === false) {
      setValid(false);
    } else if (name.error === true) {
      setValid(false);
    } else if (name.focused === false) {
      setValid(false);
    } else if (occasion.error === true) {
      setValid(false);
    } else if (occasion.focused === false) {
      setValid(false);
    } else if (dinners.error === true) {
      setValid(false);
    } else if (dinners.focused === false) {
      setValid(false);
    } else if (date.error === true) {
      setValid(false);
    } else if (date.focused === false) {
      setValid(false);
    } else if (time.error === true) {
      setValid(false);
    } else if (time.focused === false) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [date, time, occasion, dinners, name, email]);

  const handleFormSubmission = (e) => {
    e.preventDefault();

    if (valid !== true) {
      return;
    }

    //submit form
    const formData = {
      date: date.value,
      time: time.value,
      dinners: dinners.value,
      occasion: occasion.value,
      seatOption: seatOption,
      name: name.value,
      email: email.value,
      request: request,
    };
    submitForm(formData);
  };

  const handleDateChange = (e) => {
    const dateObj = { ...date, value: e.target.value };
    setDate(dateObj);
  };

  const handleNameChange = (e) => {
    const nameObj = { ...name, value: e.target.value };
    setName(nameObj);
  };

  const handleEmailChange = (e) => {
    const emailObj = { ...email, value: e.target.value };
    setEmail(emailObj);
  };

  const handleTimeChange = (e) => {
    const timeObj = { ...time, value: e.target.value };
    setTime(timeObj);
  };

  const handleOccasionChange = (e) => {
    const occasionObj = { ...occasion, value: e.target.value };
    setOccasion(occasionObj);
  };

  const handleDinnerChange = (e) => {
    const dinnerObj = { ...dinners, value: e.target.value };
    setDinners(dinnerObj);
  };

  const handleOccasionFocusedOut = () => {
    if (occasion.value === "Choose the occasion") {
      const occasionObj = {
        ...occasion,
        errorMsg: "Please select the occasion.",
        error: true,
        focused: true,
      };
      setOccasion(occasionObj);
    } else {
      const occasionObj = {
        ...occasion,
        errorMsg: "",
        error: false,
        focused: true,
      };
      setOccasion(occasionObj);
    }
  };

  const handleTimeFocusedOut = () => {
    if (time.value === "Choose the booking time") {
      const timeObj = {
        ...time,
        errorMsg: "Please select the booking time",
        error: true,
        focused: true,
      };
      setTime(timeObj);
    } else {
      const timeObj = {
        ...time,
        errorMsg: "",
        error: false,
        focused: true,
      };
      setTime(timeObj);
    }
  };

  const handleDinnerFocusedOut = () => {
    if (dinners.value === "Choose number of dinners") {
      const dinnerObj = {
        ...dinners,
        errorMsg: "Please select the number of dinners",
        error: true,
        focused: true,
      };
      setDinners(dinnerObj);
    } else {
      const dinnerObj = {
        ...dinners,
        errorMsg: "",
        error: false,
        focused: true,
      };
      setDinners(dinnerObj);
    }
  };

  const handleEmailFocusedOut = (e) => {
    if (validateEmail(email.value) === null) {
      const emailObj = {
        ...email,
        errorMsg: "Please a valid email address",
        error: true,
        focused: true,
      };
      setEmail(emailObj);
    } else if (email.value === "") {
      const emailObj = {
        ...email,
        errorMsg: "Email cannot be blank.",
        error: true,
        focused: true,
      };
      setEmail(emailObj);
    } else {
      const emailObj = { ...email, errorMsg: "", error: false, focused: true };
      setEmail(emailObj);
    }
  };

  const handleNameFocusedOut = (e) => {
    if (name.value === "") {
      const nameObj = {
        ...name,
        errorMsg: "Name cannot be blank.",
        error: true,
        focused: true,
      };
      setName(nameObj);
    } else {
      const nameObj = { ...name, errorMsg: "", error: false, focused: true };
      setName(nameObj);
    }
  };

  const handleDateFocusedOut = (e) => {
    if (date.value === "") {
      const dateObj = {
        ...date,
        errorMsg: "Please select a valid date.",
        error: true,
        focused: true,
      };
      setDate(dateObj);
    } else if (new Date(date.value) <= new Date()) {
      const dateObj = {
        ...date,
        errorMsg: "Booking date must be greater than current date.",
        error: true,
        focused: true,
        value: date.value,
      };
      setDate(dateObj);
    } else {
      const dateObj = { ...date, errorMsg: "", error: false, focused: true };
      setDate(dateObj);
      updateTimes(e.target.value);
    }
  };

  return (
    <section className="wrapper">
      <div className="booking-form-heading">
        <h3>Book a Table</h3>
        <p></p>
      </div>
      <form className="booking-form" onSubmit={handleFormSubmission}>
        <div>
          <div className="form-div">
            <label htmlFor="res-date">Date</label>
            <input
              data-testid="res-date"
              type="date"
              id="res-date"
              name="date"
              min={today}
              value={date.value}
              onChange={handleDateChange}
              onBlur={handleDateFocusedOut}
            />
            {date.error === true && date.focused === true && (
              <small>{date.errorMsg}</small>
            )}
          </div>

          <div className="form-div">
            <label htmlFor="res-time">Time</label>
            <select
              data-testid="res-time"
              id="res-time "
              name="time"
              value={time.value}
              onChange={handleTimeChange}
              onBlur={handleTimeFocusedOut}
            >
              <option key="default" value="Choose the booking time">
                Choose the booking time
              </option>
              {availableTimes.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {time.error === true && time.focused === true && (
              <small>{time.errorMsg}</small>
            )}
          </div>
        </div>
        <div>
          <div className="form-div">
            <label htmlFor="res-dinners">Number of dinners</label>
            <select
              id="res-dinners"
              name="dinners"
              value={dinners.value}
              onChange={handleDinnerChange}
              onBlur={handleDinnerFocusedOut}
            >
              {numDinners.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {dinners.error === true && dinners.focused === true && (
              <small>{dinners.errorMsg}</small>
            )}
          </div>
          <div className="form-div">
            <label htmlFor="res-occasion">Occasion</label>
            <select
              id="res-occasion"
              name="occasion"
              value={occasion.value}
              onChange={handleOccasionChange}
              onBlur={handleOccasionFocusedOut}
            >
              {events.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {occasion.error === true && occasion.focused === true && (
              <small>{occasion.errorMsg}</small>
            )}
          </div>
        </div>

        <div>
          <div className="form-div seating-option">
            <label htmlFor="res-seat">Seating option</label>
            <div>
              <input
                checked
                type="radio"
                id="standard"
                name="seat"
                value="Standard"
                onChange={(e) => setSeatOption(e.target.value)}
              />
              <label htmlFor="standard">Standard</label>
            </div>
            <div>
              <input
                type="radio"
                id="outside"
                name="seat"
                value="Outside"
                onChange={(e) => setSeatOption(e.target.value)}
              />
              <label htmlFor="outside">Outside</label>
            </div>
            {/*<small>Seating option is required</small> */}
          </div>
          <div className="form-div">
            <label htmlFor="res-name">Name</label>
            <input
              id="res-name"
              type="text"
              value={name.value}
              required
              onChange={handleNameChange}
              placeholder="Enter your full name"
              onBlur={handleNameFocusedOut}
            />
            {name.error === true && name.focused === true && (
              <small>{name.errorMsg}</small>
            )}
          </div>
          <div className="form-div">
            <label htmlFor="res-email">Email</label>
            <input
              type="email"
              id="res-email"
              value={email.value}
              required
              onChange={handleEmailChange}
              placeholder="Enter your email"
              onBlur={handleEmailFocusedOut}
            />
            {email.error === true && email.focused === true && (
              <small>{email.errorMsg}</small>
            )}
          </div>

          <div className="form-div">
            <label htmlFor="res-comment">Optional request</label>
            <textarea
              rows="8"
              id="res-comment"
              placeholder="Type in additional request here"
              onChange={(e) => setRequest(e.target.value)}
            />
          </div>
        </div>

        <input
          type="submit"
          value="Submit"
          aria-label="On Click"
          disabled={!valid}
          className={valid === true ? "submit-btn" : "submit-btn-disabled"}
        />
      </form>
    </section>
  );
}

export default BookingForm;
