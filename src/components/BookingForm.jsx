import React, { useState } from "react";

const BookingForm = () => {
  const [values, setValues] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: " ",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("values: ", values);
  };
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.currentTarget.dataset.type]: e.currentTarget.value,
    });
  };

  return (
    <form
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        data-type="date"
        value={values.date}
        onChange={handleChange}
        // onChange={(e) =>
        //   setValues((oldState) => ({
        //     ...oldState,
        //     date: e.currentTarget.value,
        //   }))
        // }
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        data-type="time"
        onChange={handleChange}
        // onChange={(e) =>
        //   setValues((oldState) => ({
        //     ...oldState,
        //     time: e.currentTarget.value,
        //   }))
        // }
        value={values.time}
      >
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        data-type="guests"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={values.guests}
        onChange={handleChange}
        // onChange={(e) =>
        //   setValues((oldState) => ({
        //     ...oldState,
        //     guests: e.currentTarget.value,
        //   }))
        // }
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        data-type="occasion"
        id="occasion"
        value={values.occasion}
        onChange={handleChange}
        // onChange={(e) =>
        //   setValues((oldState) => ({
        //     ...oldState,
        //     occasion: e.currentTarget.value,
        //   }))
        // }
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
