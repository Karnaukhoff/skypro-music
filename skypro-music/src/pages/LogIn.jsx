import { Link } from "react-router-dom";
//import { useNavigate } from 'react-router-dom'
//import React, { useState } from "react";

export const LogIn = () => {
    return (
      <div>
        <h1>LogIn page</h1>
        <button onClick={() => {
        //handleLogin();
        //navigate('/', { replace: false })
        }
      }>Войти</button>
        <Link to="/register">
            Перейти к регистрации
        </Link>
      </div>
    );
  }