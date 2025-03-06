import { useForm } from "react-hook-form";
import {
  BUTTON_TEXT,
  LABEL_TEXT,
  PLACEHOLDER,
} from "../../../helpers/constants";
import { AuthorType } from "../../../helpers/interfaces";
import { Input } from "../../common/Input/Input";
import { Button } from "../../common/Button/Button";
import styles from "./CreateAuthor.module.scss";

interface CreateAuthor {
  onAddAuthor: (author: AuthorType) => void;
}

export const CreateAuthor: React.FC<CreateAuthor> = ({ onAddAuthor }) => {
  const { control, getValues, reset } = useForm<AuthorType>();

  const handleAddAuthor = () => {
    const newAuthor = {
      id: "123",
      name: getValues("name"),
    };

    if (!newAuthor.name.trim()) return;

    onAddAuthor(newAuthor);
    reset();
  };
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>{BUTTON_TEXT.addAuthor}</h1>
      <Input
        labelText={LABEL_TEXT.authorName}
        placeholderText={PLACEHOLDER.enterAuthor}
        control={control}
        name="name"
      />
      <Button
        type="button"
        name={BUTTON_TEXT.createAuthor}
        onClick={handleAddAuthor}
        align
      />
    </div>
  );
};
