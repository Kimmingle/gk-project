import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/login.css";

const Login = () => {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const handleInputId = (e) => {
    setId(e.target.value);
    };

    const handleInputPw = (e) => {
    setPw(e.target.value);
    };

    const onClickLogin = async () => {
    try {
        const loginData = await axios.post(
        "http://localhost:8080/api/user",
        {
          user_id: id,
          password: pw,
        }
      );
      console.log(loginData.data);
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h1 className="login-title">로그인</h1>

        <form className="login-form">
          <label htmlFor="username" className="login-label">아이디</label>
          <input
            value={id}
            onChange={handleInputId}
            type="text"
            className="login-input"
          />

          <label htmlFor="password" className="login-label">비밀번호</label>
          <input
            value={pw}
            onChange={handleInputPw}
            type="password"
            className="login-input"
          />

          <button
            type="button"
            className="login-button"
            onClick={onClickLogin}
          >
            로그인
          </button>

          <p className="signup-text">
            아직 회원이 아니신가요?{" "}
            <Link to="/signup" className="signup-link">
              회원가입
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
