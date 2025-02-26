import styles from "./Button.module.scss";
interface ButtonProps {
  name: string;
  size: "small" | "large";
  onClick: () => void;
}
export const Button: React.FC<ButtonProps> = ({
  name,
  size,
  onClick,
}: ButtonProps) => {

  return (
    <button
      onClick={onClick}
      className={`${styles.button} 
        ${size === "small" ? styles.small : styles.large}
    `}
    >
      {name}
    </button>
  );
};
