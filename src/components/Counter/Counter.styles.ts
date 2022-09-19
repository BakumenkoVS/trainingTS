import { createStyles } from "../../types/emotion-styles";

export const styles = createStyles({
   box: {
      display: "flex",
      flexDirection: "row",
      width: "400px",
      alignItems: "center",
      justifyContent: "space-between",
   },
   button: {
      backgroundColor: "#98ff98",
      borderRadius: "50%",
      width: "50px",
      height: "50px",
      border: "0",
      "&: disabled": {
         backgroundColor: "red",
      },
   },
});
