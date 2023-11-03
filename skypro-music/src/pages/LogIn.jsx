import { Link } from "react-router-dom";

export const LogIn = ({ user, setUser }) => {
  const handleLogin = () => {
    localStorage.setItem("user", "test");
    const userData = localStorage.getItem("user");
    setUser(userData);
  };
    return (
      <div>
        <h1>LogIn page</h1>
        <button onClick={user === null && handleLogin}>
          <Link to="/">
            Войти
          </Link>
        </button>
        <Link to="/register">
            Перейти к регистрации
        </Link>
      </div>
    );
  }