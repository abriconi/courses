import styles from "./Login.module.scss";
import { Input } from "../common/Input/Input";
import { Button } from "../common/Button/Button";
import {
  BUTTON_TEXT,
  MAIN_URL,
  MESSAGE_TEXT,
  PLACEHOLDER,
  REGISTRATION_LABEL,
  ROUTES,
  TOKEN,
} from "../../helpers/constants";
import { RegistrationType } from "../../helpers/interfaces";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
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
          setSuccessMessage(MESSAGE_TEXT.LOGIN_SUCCESS);
          setErrorMessage(null);
          navigate(ROUTES.home);
        } else {
          setErrorMessage(MESSAGE_TEXT.LOGIN_ERROR);
          setSuccessMessage(null);
        }
      } else {
        setErrorMessage(MESSAGE_TEXT.LOGIN_FAILED);
        setSuccessMessage(null);
      }
    } catch (error) {
      setErrorMessage(MESSAGE_TEXT.NETWORK_ERROR);
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
          type={showPassword ? "text" : "password"}
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
