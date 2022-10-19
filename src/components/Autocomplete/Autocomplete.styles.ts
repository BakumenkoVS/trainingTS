import { createStyles } from "../../types/emotion-styles";

export const styles = createStyles({
   box: {},
   container: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#bbbbbb",
      position: "absolute",
      zIndex: "9999",
      top: "271px",

      margin: "0",
   },
   subtitle: {
      margin: "0px",
      border: "0,5px, solid, red",
      "&: hover": {
         backgroundColor: "red",
      },
   },
});
