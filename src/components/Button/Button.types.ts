export interface ButtonProps {
   width?: string;
   height?: string;
   name: string;
   type?: "submit" | "button";
   onClick?: () => void;
   loading?: boolean;
   children?: React.ReactNode;
   design: "outlined" | "primary";
}


