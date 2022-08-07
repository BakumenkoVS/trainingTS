import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import InputList from "./components/InputList/InputList";
import Promo from "./components/Promo/Promo";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


const App = () => {
   const [date , setDate] = useState(new Date())
   console.log(date)
   
   return (
      <div className="App">
         <Header />
         <InputList />
         <Promo />
         <Calendar allowPartialRange={true} returnValue='range' selectRange={true} onChange={setDate} />
         <input    type='date' />
      </div>
   );
};
 
export default App;
