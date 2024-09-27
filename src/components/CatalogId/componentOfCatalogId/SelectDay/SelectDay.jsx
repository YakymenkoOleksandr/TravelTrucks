import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./SelectDay.module.css";

function SelectDay() {
  const [startDate, setStartDate] = useState(null);
  const [open, setOpen] = useState(false);

  const toggleCalendar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={css.inputField} onClick={toggleCalendar}>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          setOpen(false);
        }}
        placeholderText="Booking date*"
        className={css.input}
        open={open}
        onClickOutside={() => setOpen(false)}
      />
    </div>
  );
}

export default SelectDay;
