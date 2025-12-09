import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/login.css";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleInputId = (e) => setId(e.target.value);
  const handleInputPw = (e) => setPw(e.target.value);

  const onClickLogin = async () => {
    try {
      const loginData = await axios.post("http://localhost:8080/api/user", {
        user_id: id,
        password: pw,
      });
      console.log(loginData.data);
      console.log("로그인 성공!");
    } catch (error) {
      console.error("로그인 실패~:", error);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h1 className="login-title">GK Portal</h1>

        <form className="login-form">
          <label className="login-label">ID</label>
          <input value={id} onChange={handleInputId} type="text" className="login-input" />

          <label className="login-label">Password</label>
          <input
            value={pw}
            onChange={handleInputPw}
            type="password"
            className="login-input"
          />

          {/* 아래 영역: 체크박스 + 로그인 버튼 */}
          <div className="login-options">
            <label className="remember-check">
              <input type="checkbox" /> 아이디 기억
            </label>

            <button type="button" className="login-button-small" onClick={onClickLogin}>
              로그인
            </button>
          </div>

          {/* 아이디/비밀번호 찾기 */}
          <div className="find-links">
            <span className="find-link">아이디 찾기</span>
            <span className="divider">|</span>
            <span className="find-link">비밀번호 찾기</span>
          </div>

          {/* <p className="signup-text">
            아직 회원이 아니신가요?{" "}
            <Link to="/signup" className="signup-link">
              회원가입
            </Link>
          </p> */}
          
        </form>
      </div>
    </div>
  );
};

export default Login;
