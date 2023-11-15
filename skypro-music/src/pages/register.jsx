import * as S from "./styles/LogIn.styled";
import { useState } from "react";

export const Register = () => {
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleRegister = async () => {
    alert(`Выполняется регистрация: ${email} ${password}`);
    setError("Неизвестная ошибка регистрации");
  };

    return (
      <>
      <S.Inputs>
        <S.ModalInput
          type="text"
          name="login"
          placeholder="Почта"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <S.ModalInput
          type="password"
          name="password"
          placeholder="Пароль"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <S.ModalInput
          type="password"
          name="repeat-password"
          placeholder="Повторите пароль"
          value={repeatPassword}
          onChange={(event) => {
            setRepeatPassword(event.target.value);
          }}
        />
      </S.Inputs>
      {error && <S.Error>{error}</S.Error>}
      <S.Buttons>
        <S.PrimaryButton onClick={handleRegister}>
          Зарегистрироваться
        </S.PrimaryButton>
      </S.Buttons>
    </>
    );
  }