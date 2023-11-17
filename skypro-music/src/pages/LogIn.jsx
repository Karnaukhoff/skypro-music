import { Link } from "react-router-dom";
import * as S from "./styles/LogIn.styled";
import { useEffect, useState } from "react";
import { signIn } from "../api/api";

export default function AuthPage({setUser}) {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [loading, setLoading] = useState(false)

  const handleLogin = async ({ email, password }) => {
    setLoading(true)
    if (email === ""){
      setError("Укажите почту")
      setLoading(false)
      return
    }
    if (password === ""){
      setError("Укажите пароль")
      setLoading(false)
      return
    }
    
    signIn({email, password})
    .then((user) => {
      if (user.detail === "Пользователь с таким email или паролем не найден"){
        setError(user.detail)
        return
      }
      setUser(user.username)
      localStorage.setItem("user", JSON.stringify(user.username));
      window.location.href="/"
      })
      .finally(() => {
        setLoading(false)
      })
  };

  const handleRegister = async () => {
    alert(`Выполняется регистрация: ${email} ${password}`); //сделать регистрацию
    setError("Неизвестная ошибка регистрации");
  };

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login" onClick={() => setIsLoginMode(true)}>
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
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
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton disabled={loading} onClick={() => handleLogin({ email, password })}>
                Войти
              </S.PrimaryButton>
              <S.SecondaryButton onClick={() => setIsLoginMode(!isLoginMode)}>Зарегистрироваться</S.SecondaryButton>
            </S.Buttons>
          </>
        ) : (
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
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}