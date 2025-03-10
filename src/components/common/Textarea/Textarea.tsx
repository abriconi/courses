import { Control, Controller } from "react-hook-form";
import styles from "./Textarea.module.scss";

interface TextareaType {
    name: string;
    placeholder: string;
    labelText: string;
    control: Control<any>;
}

export const Textarea: React.FC<TextareaType> = ({name, placeholder, labelText, control }) => {
  return (
    <label className={styles.wrapper}>
      <span className={styles.title}>{labelText}</span>
      <Controller
        control={control}
        name={name}
        defaultValue=""
        render={({ field }) => (
          <textarea
            {...field}
            rows={4}
            className={styles.textarea}
            placeholder={placeholder}
          />
        )}
      />
    </label>
  );
};
