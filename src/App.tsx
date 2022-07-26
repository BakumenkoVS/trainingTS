import { log } from "console";
import React from "react";
import "./App.css";
import Button, { ButtonVariant } from "./components/Button/Button";

const App = () => {
   return (
      <div className="App">
         <Button
            type="submit"
            name="Кнопка 1"
            variant={ButtonVariant.outlined}
            width="300px"
            height="300px"
            onClick={() => console.log("Кнопка 1")}
            loading={true}
         />
         <Button
            type="button"
            name="Кнопка 2"
            variant={ButtonVariant.primary}
            width="100px"
            height="100px"
            onClick={() => console.log("Кнопка 2")}
            loading={false}
         />
      </div>
   );
};

export default App;
