import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import InputList from "./components/InputList/InputList";
import Promo from './components/Promo/Promo';

const App = () => {
   return (
      <div className="App">
        <Header/>
        <InputList />
        <Promo />
      </div>
   );
};

export default App;
