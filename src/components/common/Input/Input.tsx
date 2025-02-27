import styles from "./Input.module.scss";

interface InputType {
  placeholderText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={styles.input}
      placeholder={placeholderText}
    />
  );
};
