// import './App.css'
// import Navigation from '_/Nav'

// function App(){
//     return (
//         <div className="App">
//             <Navigation></Navigation>
        
//         </div>
//     )
// }

// export default 

// import './App.css'
// import Navigation from './Nav'

// let date = new Date()

// let singleUser = {
//     nae:m 'Jerry',
//     time: date.toDateString(),
// }

// function App() {
//     return (
//         <div className="App">
//             <div className="App">
//                 <Navigation></Navigation>
//             </div>
//             <section className="welcomeSection">
//                 <h1>Welcome, {singleUser.name}</h1>
//                 <p>Todays date is: {singleUser.time}</p>
//             </section>
//         </div>
//     )
// }



// export default App

import React from 'react';
import './App.css';

// LoginForm component
const LoginForm = () => {
  return (
    <div className="login-form">
      <h3 className="login-header">Log In</h3>
      <form>
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button type="submit" className="login-button">Log In</button>
      </form>
    </div>
  );
};

// Navigation component
const Navigation = () => {
  return (
    <nav className="navbar">
      <a href="/" className="nav-link">Home</a>
      <a href="/" className="nav-link">Portfolio</a>
      <a href="/" className="nav-link">Contact</a>
    </nav>
  );
};

// App component
const App = () => {
  return (
    <div className="App">
      <Navigation />
      <LoginForm />
    </div>
  );
};

export default App;
