import styles from "./Button.module.scss";

interface ButtonProps {
  name: string;
  onClick?: () => void;
  align?: boolean;
  type?: "submit" | "button";
}
export const Button: React.FC<ButtonProps> = ({
  name,
  onClick,
  align,
  type = "button"
}: ButtonProps) => {
  return (
    <button type={type}
      onClick={onClick}
      className={`${styles.button} 
        ${align ? styles.alignCenter : ""}
    `}
    >
      {name}
    </button>
  );
};
