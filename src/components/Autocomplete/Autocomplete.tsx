import React, { FC, useEffect, useState } from "react";
import { AutocompleteProps } from "./types";
import { styles } from "./Autocomplete.styles";
import Input from "../../ui-kit/Input/Input";
import mapPin from "../../images/map-pin.svg";

const Autocomplete: FC<AutocompleteProps> = ({ onChange }) => {
   const [value, setValue] = useState<string>("");
   const [name, setName] = useState<[]>();
   debugger;
   const [visible, setVisible] = useState<boolean>(false);

   type Name = {
      id: number;
      name: string;
      weight: number;
   };

   useEffect(() => {
      debugger;

      console.log(22, filter(City, value));
      setName(filter(City, value));
      onChange(value);
   }, [value]);

   const City = [
      { id: 1, name: "Москва", weight: 100 },
      { id: 2, name: "СПБ", weight: 99 },
      { id: 3, name: "Казань", weight: 98 },
      { id: 4, name: "Старый оскол", weight: 4 },
      { id: 5, name: "Воронеж", weight: 5 },
      { id: 6, name: "Курск", weight: 6 },
      { id: 7, name: "Минск", weight: 7 },
      { id: 8, name: "Омск", weight: 8 },
      { id: 9, name: "Балашиха", weight: 9 },
      { id: 10, name: "Белгород", weight: 10 },
      { id: 11, name: "Тула", weight: 11 },
      { id: 12, name: "Дмитров", weight: 13 },
      { id: 13, name: "Рязань", weight: 14 },
      { id: 14, name: "Орел", weight: 15 },
      { id: 15, name: "Анапа", weight: 16 },
      { id: 16, name: "Коломна", weight: 17 },
      { id: 17, name: "Тамбов", weight: 18 },
      { id: 18, name: "Пенза", weight: 19 },
      { id: 19, name: "Липецк", weight: 20 },
      { id: 20, name: "Кзань", weight: 21 },
      { id: 21, name: "Брянск", weight: 22 },
      { id: 22, name: "Абакан", weight: 23 },
      { id: 23, name: "Саранск", weight: 24 },
      { id: 24, name: "Муром", weight: 25 },
      { id: 26, name: "Чита", weight: 26 },
      { id: 27, name: "Пермь", weight: 27 },
      { id: 28, name: "Грозный", weight: 28 },
      { id: 29, name: "Магадан", weight: 29 },
      { id: 30, name: "Киров", weight: 30 },
   ];

   function filter(Data: any, v: any) {
      debugger;
      if (value) {
         debugger;
         return Data.filter((item: any) => {
            console.log(12, item);
            return item.name.toLowerCase().includes(`${v.toLowerCase()}`);
         });
      }
   }

   function filterWeight(Data: Name[]) {
      if (value.length === 0) {
         return Data.sort((a, b) => {
            if (a.weight > b.weight) {
               return -1;
            }
            if (a.weight < b.weight) {
               return 1;
            }
            return 0;
         }).slice(0, 3);
      }
   }

   const x = () => {
      if (value?.length === 0) {
         console.log(1);
         debugger;
         return (filterWeight(City) as Name[]).map((item) => {
            return (
               <p
                  css={styles.subtitle}
                  key={item.id}
                  onClick={() => {
                     setVisible(false);
                     setValue(item.name);
                  }}
               >
                  {item.name}
               </p>
            );
         });
      } else {
         debugger;
         if (name) {
            debugger;
            return (name as Name[]).map((item) => {
               console.log(77, item);
               return (
                  <p
                     css={styles.subtitle}
                     key={item.id}
                     onClick={() => {
                        setVisible(false);
                        setValue(item.name);
                     }}
                  >
                     {item.name}
                  </p>
               );
            });
         }
      }
   };

   // useEffect(() => {
   //    setVisible(false);
   // }, [value]);

   const focusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
      setVisible(true);
   };

   return (
      <>
         <Input
            isDate={false}
            value={value}
            labels="Departure city"
            img={mapPin}
            onChange={(e) => setValue(e.target.value)}
            onFocus={focusHandler}
         />
         {visible && <h2 css={styles.container}>{x()}</h2>}
      </>
   );
};

export default Autocomplete;
