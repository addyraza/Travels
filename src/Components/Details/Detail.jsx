import React from 'react'
import { useState } from 'react';
import './Detail.css';
import { BsCalendar2Date, BsGeoAlt } from 'react-icons/bs';

export default function Detail() {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const changeLocation = (event) => {
    setLocation(event.target.value);
  }
  const changeCheckIn = (event) => {
    setCheckIn(event.target.value);
  }
  const changeCheckOut = (event) => {
    setCheckOut(event.target.value);
  }
  const search = () => {
    console.log(location);
    console.log(checkIn);
    console.log(checkOut);
  }
  return (
    <div className='detail'>
          <div className="data">
            <h1 className='h'>Your world of joy</h1>
            <p id='p'>Find what makes you happy anytime, anywhere</p>
          </div>
            <div className="info">
              <div className='input-info'>
                <BsGeoAlt/>
                <label htmlFor="Location">Location : </label><br />
                <input type="text" value={location} placeholder='Where are you going?' onChange={changeLocation}/>
              </div>
              <div className='input-info'>
                <BsCalendar2Date/>
                <label htmlFor="checkin">Checkin : </label><br />
                <input type="date" value={checkIn} placeholder='Add Date' onChange={changeCheckIn}/>
              </div>
              <div className='input-info'>
              <BsCalendar2Date/>
                <label htmlFor="checkout">Checkout : </label><br />
                <input type="date" value={checkOut} placeholder='Add Date' onChange={changeCheckOut}/>
              </div>
              <button onClick={search}className='search'>Search</button>
            </div>
        </div>
      )}
    // </div>
  // )
// }
// import React, { useState } from 'react';

// function SearchForm() {
//   // State to store input values
//   const [searchText, setSearchText] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');

//   // Function to handle text input change
//   const handleTextChange = (e) => {
//     setSearchText(e.target.value);
//   };

//   // Function to handle start date input change
//   const handleStartDateChange = (e) => {
//     setStartDate(e.target.value);
//   };

//   // Function to handle end date input change
//   const handleEndDateChange = (e) => {
//     setEndDate(e.target.value);
//   };

//   // Function to handle search button click
//   const handleSearchClick = () => {
//     // Perform the search using the input values (you can add your logic here)
//     console.log('Search Text:', searchText);
//     console.log('Start Date:', startDate);
//     console.log('End Date:', endDate);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter text"
//         value={searchText}
//         onChange={handleTextChange}
//       />
//       <input
//         type="date"
//         placeholder="Start Date"
//         value={startDate}
//         onChange={handleStartDateChange}
//       />
//       <input
//         type="date"
//         placeholder="End Date"
//         value={endDate}
//         onChange={handleEndDateChange}
//       />
//       <button onClick={handleSearchClick}>Search</button>
//     </div>
//   );
// }

// export default SearchForm;
