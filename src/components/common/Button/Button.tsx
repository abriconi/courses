import styles from "./Button.module.scss";
interface ButtonProps {
  name: string;
  size: "small" | "large";
  onClick: () => void;
  align?: boolean;
}
export const Button: React.FC<ButtonProps> = ({
  name,
  size,
  onClick,
  align,
}: ButtonProps) => {
  return (
    <button type="submit"
      onClick={onClick}
      className={`${styles.button} 
        ${size === "small" ? styles.small : styles.large}
        ${align ? styles.alignCenter : ""}
    `}
    >
      {name}
    </button>
  );
};
