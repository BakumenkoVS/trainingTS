import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import InputList from "./components/InputList/InputList";

const App = () => {
   return (
      <div className="App">
        <Header/>
        <InputList />
      </div>
   );
};

export default App;
