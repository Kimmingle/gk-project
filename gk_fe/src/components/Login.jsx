import { useState } from "react";
import Cookies from 'js-cookie';
import axios from "axios";
import "../css/login.css";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const [rememberID, setRememberID] = useState(false);
  console.log(rememberID);
  const [error, setError] = useState("");

  const handleInputId = (e) => setId(e.target.value);
  const handleInputPw = (e) => setPw(e.target.value);

  const handleRememberChange = (e) => {
    setRememberID(e.target.checked);
  };

  const navigate = useNavigate(); 

  useEffect(() => {  //쿠키에 아이디 있으면 입력
          const savedId = Cookies.get("rememberId");
          if (savedId) {
              //setRememberId(savedId);
          }
      }, []);
  

  const onClickLogin = async () => {
    if (!id) {
      setError("아이디를 입력해 주세요.");
      return;
    }

    if (!pw) {
      setError("비밀번호를 입력해 주세요.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8080/api/user",
        {
          user_id: id,
          password: pw,
        }
      );

      // 로그인 성공 판단
      if (res.status === 200) {
        setError("");
        alert("로그인 성공!");
        localStorage.setItem("accessToken", res.data.accessToken);
        if (rememberID) {
          Cookies.set('rememberId', id, { expires: 30 });
        } else {
          Cookies.remove('rememberId');
        }
        navigate('/')
      }
    } catch (error) {
      setError("아이디/비밀번호를 확인해 주세요.");
    }
  };


  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h1 className="login-title">GK Portal</h1>

        <form className="login-form">
          <label className="login-label">ID</label>
          <input 
          value={id} 
          onChange={handleInputId} 
          type="text" 
          className="login-input" 
          maxLength={20}
          />

          <label className="login-label">Password</label>
          <input
            value={pw}
            onChange={handleInputPw}
            type="password"
            className="login-input"
            maxLength={12}
          />

          {/* 에러문구 */}
          <div className="login-fail">
            {error && <div className="fail-message" >{error}</div>}
          </div>

          {/* 아이디 기억하기 */}
          <div className="login-options">
            <label className="remember-check">
              <input type="checkbox" checked={rememberID} onChange={handleRememberChange} /> 아이디 기억
            </label>

            <button type="button" className="login-button-small" onClick={onClickLogin} >
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
