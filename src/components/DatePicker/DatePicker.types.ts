export interface DatePickerProps {
   onChange?: (value: string[]) => void;
   setNumberOfDays?: (value: number) => void;
   value?: string[];
   handleChangeNumberOfDays: (value: Date[]) => void;
}
