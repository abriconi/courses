import styles from "./Button.module.scss";
interface ButtonProps {
  name: string;
  variant: "contained" | "outlined";
  size: "small" | "large";
}
export const Button: React.FC<ButtonProps> = ({
  name,
  variant,
  size
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} 
        ${variant === "contained" ? styles.contained : styles.outlined}
        ${size === "small" ? styles.small : styles.large}
    `}
    >
      {name}
    </button>
  );
};
