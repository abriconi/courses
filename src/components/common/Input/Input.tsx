import { Control, Controller } from "react-hook-form";
import styles from "./Input.module.scss";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputType {
  placeholderText: string;
  labelText?: string;
  name: string;
  control: Control<any>;
  type?: "text" | "password";
}

export const Input: React.FC<InputType> = ({
  labelText,
  placeholderText,
  name,
  control,
  type = "text",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <label className={styles.inputWrapper}>
      {labelText && <span className={styles.title}>{labelText}</span>}
      <div className={styles.inputContainer}>
        <Controller
          control={control}
          name={name}
          defaultValue=""
          render={({ field }) => (
            <input
            type={type === "password" && !showPassword ? "password" : "text"}
              {...field}
              className={styles.input}
              placeholder={placeholderText}
            />
          )}
        />
        {type === "password" && (
          <button
            type="button"
            className={styles.eyeIcon}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </label>
  );
};
