import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import Navigation from './Navigation'
import Appointments from './Appointments';

let date = new Date();
let singleUser = {
  name: "Mr. Jerry",
  todaysDate: date.toDateString(),
};
let allCustomers = [
  {
    firstName: "Shawn",
    lastName: "Lennon",
    appointmentTime: "1:00PM",
  },
  {
    firstName: "Jewel",
    lastName: "Ronnie",
    appointmentTime: "2:00PM",
  },
  {
    firstName: "Martie",
    lastName: "Francis",
    appointmentTime: "3:00PM",
  },
];

// App component
const App = () => {

  
  return (
    <div className="App">
      <Navigation />
      <section className="welcomeSection">
        <h1>Welcome, {singleUser.name}</h1>
        <p>Todays date is: {singleUser.todaysDate}</p>
      </section>
      <Appointments customers= {allCustomers} />
      <LoginForm />
    </div>
  );
};

export default App;
