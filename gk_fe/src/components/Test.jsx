import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../css/login.css';

const Test = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginCheck, setLoginCheck] = useState(false); // 로그인 상태 체크(로그인 실패시에 메세지 표시하려고?)

    const navigate = useNavigate(); //페이지 이동 기능

    const handleLogin = async (event) => { //로그인 버튼 클릭시 실행

        event.preventDefault(); // 기본 form 제출 방지? 새로고침 막음
        await new Promise((r) => setTimeout(r, 1000)); // 테스트용 지연

        const response = await fetch("로그인 서버 주소", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();

        if (response.status === 200) {
            setLoginCheck(false);
            // Store token and user info in sessionStorage
            sessionStorage.setItem("token", result.token);
            sessionStorage.setItem("email", result.email);
            sessionStorage.setItem("role", result.role);
            sessionStorage.setItem("storeid", result.storeId);
            console.log("로그인 성공, 이메일주소:" + result.email);
            navigate("/"); // 로그인 성공 시 홈으로 이동
        } else {
            setLoginCheck(true); // 로그인 실패 시 메시지 표시
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h1>GK로그인</h1>

                <label htmlFor="username">이메일</label>
                <input
                    type="text"
                    id="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">비밀번호</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {loginCheck && (
                    <label style={{ color: "red" }}>
                        이메일 혹은 비밀번호가 틀렸습니다.
                    </label>
                )}

                <button onClick={handleLogin}>로그인</button>

                <p className="signup-link">
                    아직 회원이 아니신가요? 회원가입
                </p>
            </form>
        </div>
    );
};

export default Test;
