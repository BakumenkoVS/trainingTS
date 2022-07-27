import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

const App = () => {
   return (
      <div className="App">
         <Button
            type="submit"
            name="Кнопка 1"
            design="outlined"
            width="300px"
            height="300px"
            onClick={() => console.log("Кнопка 1")}
            loading={true}
         >
            <div>children</div>
         </Button>
         <Button
            type="button"
            name="Кнопка 2"
            design="primary"
            width="100px"
            height="100px"
            onClick={() => console.log("Кнопка 2")}
            loading={false}
         />
         <Input
            value="имя"
            onChange={() => console.log(1)}
            placeholder="привет1"
            label="password"
         />
      </div>
   );
};

export default App;
