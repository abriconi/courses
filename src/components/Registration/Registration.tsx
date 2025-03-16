import styles from "./Registration.module.scss";
import { Input } from "../common/Input/Input";
import { Button } from "../common/Button/Button";
import {
  BUTTON_TEXT,
  MAIN_URL,
  PLACEHOLDER,
  REGISTRATION_LABEL,
  ROUTES,
} from "../../helpers/constants";
import { RegistrationType } from "../../helpers/interfaces";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const Registration = () => {
  const { handleSubmit, control } = useForm<RegistrationType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: RegistrationType) => {
    const newUser = {
      name: data.name,
      password: data.password,
      email: data.email,
    };

    const response = await fetch(`${MAIN_URL}register`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (result) {
      console.log("result", result);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h1 className={styles.header}>Registration</h1>
        <Input
          placeholderText={PLACEHOLDER.enterName}
          labelText={REGISTRATION_LABEL.name}
          name="name"
          control={control}
        />
        <Input
          placeholderText={PLACEHOLDER.enterEmail}
          labelText={REGISTRATION_LABEL.email}
          name="email"
          control={control}
        />
        <Input
          placeholderText={PLACEHOLDER.enterPassword}
          labelText={REGISTRATION_LABEL.password}
          name="password"
          control={control}
          type="password"
        />
        <Button type="submit" name={BUTTON_TEXT.registration} />
      </form>
      <p>
        If you have an account you could{" "}
        <Link to={ROUTES.login} className={styles.link}>
          Login
        </Link>
      </p>
    </div>
  );
};
