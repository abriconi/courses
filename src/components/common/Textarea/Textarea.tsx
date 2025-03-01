import styles from "./Textarea.module.scss";

interface TextareaType {
    name: string;
    placeholder: string;
    labelText: string;
}

export const Textarea: React.FC<TextareaType> = ({name, placeholder, labelText }) => {
  return (
    <label className={styles.wrapper}>
      <span className={styles.title}>{labelText}</span>
      <textarea name={name} rows={4} className={styles.textarea} placeholder={placeholder}/>
    </label>
  );
};
