import { Link } from "react-router-dom";

export const LogIn = ({onAuthButtonClick}) => {
    return (
      <div>
        <h1>LogIn page</h1>
        <Link onClick={onAuthButtonClick} to="/main">
          Войти
        </Link>
        <Link to="/register">
            Перейти к регистрации
        </Link>
      </div>
    );
  }