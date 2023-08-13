import { useState } from "react";
import "./Calender.css";
import { CaretLeft, CaretRight, ArrowLeft, ArrowRight } from "phosphor-react";

const Calender = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [year, setYear] = useState(2023); // Initial year
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [monthIndex, setMonthIndex] = useState(1); // Initial month index (February)
  const firstDayOfMonth = new Date(year, monthIndex, 1).getDay(); // Get the day of the week the month starts on
  console.log(firstDayOfMonth);
  const startingDay = (firstDayOfMonth + 6) % 7; // Adjust the starting day to account for Sunday being the start of the week

  const handlePrevMonth = () => {
    if (monthIndex === 0) {
      setYear(year - 1);
      setMonthIndex(11); // Set to December
    } else {
      setMonthIndex(monthIndex - 1);
    }
  };

  const handleNextMonth = () => {
    if (monthIndex === 11) {
      setYear(year + 1);
      setMonthIndex(0); // Set to January
    } else {
      setMonthIndex(monthIndex + 1);
    }
  };

  const handlePrevYear = () => {
    setYear(year - 1);
  };

  const handleNextYear = () => {
    setYear(year + 1);
  };

  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate(); // Get days in current month

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1); // Create an array of days
  return (
    <section className="calender_container">
      <div className="calender_header">
        <div className="calender_month">
          <ArrowLeft
            className="calender_icon"
            weight="bold"
            onClick={handlePrevMonth}
          />
          <h3>{months[monthIndex]}</h3>
          <ArrowRight
            className="calender_icon"
            weight="bold"
            onClick={handleNextMonth}
          />
        </div>
        <div className="calender_year">
          <CaretLeft
            className="calender_icon"
            weight="bold"
            onClick={handlePrevYear}
          />
          <h3>{year}</h3>
          <CaretRight
            className="calender_icon"
            weight="bold"
            onClick={handleNextYear}
          />
        </div>
      </div>
      <div className="calender_monthly_container">
        <div className="calender_days_of_week space_between">
          {daysOfWeek.map((day) => (
            <h4 key={day} className="calender_item">
              {day}
            </h4>
          ))}
        </div>
        <div className="calender_days_of_month space_between">
          {Array(startingDay)
            .fill(null)
            .map((_, index) => (
              <div key={`empty-${index}`} className="calender_item"></div>
            ))}
          {daysArray.map((day) => (
            <p className="calender_item">{day}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Calender;
