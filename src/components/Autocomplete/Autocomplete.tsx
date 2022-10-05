import React, { FC } from "react";
import { AutocompleteProps } from "./types";
import { styles } from "./Autocomplete.styles";
import Input from "../../ui-kit/Input/Input";
import mapPin from "../../images/map-pin.svg";

const Autocomplete: FC<AutocompleteProps> = () => {
   return (
      <>
         <div>Autocomplete</div>
         <Input isDate={false} labels="Departure city" img={mapPin} />
      </>
   );
};

export default Autocomplete;
