import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import InputList from "./components/InputList/InputList";
import Promo from "./components/Promo/Promo";
import 'react-calendar/dist/Calendar.css';
import { PeopleCounter } from './components/PeopleCounter/PeopleCounter';


const App = () => {
   const [date , setDate] = useState(new Date())
   console.log(date)
   
   return (
      <div className="App">
         <Header />
         <InputList />
         <Promo />
         <PeopleCounter />
      </div>
   );
};
 
export default App;
