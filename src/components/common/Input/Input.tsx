import styles from "./Input.module.scss";

interface InputType {
  placeholderText: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  labelText?: string;
}

export const Input: React.FC<InputType> = ({
  labelText,
  placeholderText,
  onChange,
  value,
}) => {
  return (
      <label className={styles.inputWrapper}>
        {labelText && <span className={styles.title}>{labelText}</span>}
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={styles.input}
          placeholder={placeholderText}
        />
      </label>
  );
};
