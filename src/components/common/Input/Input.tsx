import { Control, Controller } from "react-hook-form";
import styles from "./Input.module.scss";

interface InputType {
  placeholderText: string;
  labelText?: string;
  name: string;
  control: Control<any>;
}

export const Input: React.FC<InputType> = ({
  labelText,
  placeholderText,
  name,
  control,
}) => {
  return (
    <label className={styles.inputWrapper}>
      {labelText && <span className={styles.title}>{labelText}</span>}
      <Controller
        control={control}
        name={name}
        defaultValue=""
        render={({ field }) => (
          <input
            type="text"
            {...field}
            className={styles.input}
            placeholder={placeholderText}
          />
        )}
      />
    </label>
  );
};
