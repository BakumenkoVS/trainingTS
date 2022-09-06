export interface DatePickerProps {
   onChange: (value: string[]) => void;
   setNumberOfDays: (value: number) => void;
   value: string[];
}
