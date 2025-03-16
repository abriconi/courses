import styles from "./Login.module.scss";
import { Input } from "../common/Input/Input";
import { Button } from "../common/Button/Button";
import {
  BUTTON_TEXT,
  MAIN_URL,
  PLACEHOLDER,
  REGISTRATION_LABEL,
  ROUTES,
  TOKEN,
} from "../../helpers/constants";
import { RegistrationType } from "../../helpers/interfaces";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const { handleSubmit, control } = useForm<RegistrationType>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: RegistrationType) => {
    const user = {
      password: data.password,
      email: data.email,
    };

    try {
      const response = await fetch(`${MAIN_URL}login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        if (result && result.result) {
          window.localStorage.setItem(TOKEN, result.result);
          setSuccessMessage("You have successfully logged in!");
          setErrorMessage(null);
        } else {
          console.error("Invalid response from the server");
          setErrorMessage("Invalid login credentials");
          setSuccessMessage(null);
        }
      } else {
        setErrorMessage("Login failed. Please try again.");
        setSuccessMessage(null);
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please check your connection.");
      setSuccessMessage(null);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h1 className={styles.header}>Login</h1>

        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        {successMessage && <p className={styles.success}>{successMessage}</p>}

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
        />
        <Button type="submit" name={BUTTON_TEXT.login} />
      </form>
      <p>
        If you have an account you could{" "}
        <Link to={ROUTES.registration} className={styles.link}>
          Register
        </Link>
      </p>
    </div>
  );
};
