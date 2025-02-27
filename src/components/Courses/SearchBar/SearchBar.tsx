import React from "react";
import { Button } from "../../common/Button/Button";
import styles from "./SearchBar.module.scss";
import { Input } from "../../common/Input/Input";
import { BUTTON_TEXT, TEXTAREA } from "../../../helpers/constants";

interface SearchBarType {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  onClick: () => void;
}

export const SearchBar: React.FC<SearchBarType> = ({
  searchQuery,
  setSearchQuery,
  onClick,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <Input
        placeholderText={TEXTAREA.enterTitle}
        onChange={handleChange}
        value={searchQuery}
      />
      <Button name={BUTTON_TEXT.search} size="large" onClick={onClick} />
    </div>
  );
};
