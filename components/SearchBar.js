import React from "react";

const SearchBar = ({ setSearchTerm }) => {
  const handleDateChange = (e) => {
    let selectedDate = e.target.value; // Default format is YYYY-MM-DD
    console.log("Selected date:", selectedDate); // Debugging log
    setSearchTerm(selectedDate); // Send the correct format
  };

  return (
    <div>
      <label htmlFor="searchDate">Search by Date:</label>
      <input id="searchDate" type="date" onChange={handleDateChange} />
    </div>
  );
};

export default SearchBar;
