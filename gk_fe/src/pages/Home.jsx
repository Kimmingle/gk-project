import '../css/Home.css'
import Headers from '../components/Header'
import Footer from '../components/Footer';
import { useState } from "react";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from "axios";

const Home = () => {
    const navigate = useNavigate();  //navigate는 훅으로 받아야 함
    const [rememberId, setRememberId] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("accessToken");

        if (token) {
            axios.get("/api/me", {
            headers: { Authorization: `Bearer ${token}` },
            }).then(res => {
            setId(sessionStorage.getItem("userId"));
            console.log("id:",id)
            
            });
        }
    }, []);

    Cookies.get('rememberId');
    console.log(rememberId);
    console.log("id:",id);

    return( 
        <>
        <div className="layout"> 
        
        <Headers/>
        <main className="main">
            <div className="inner">
                {id ? (
                <p>{id} 님 환영합니다 👋</p>
                ) : (
                <p>로그인 해주세요</p>
                )}
            <h3 className="title">간단하지만 핵심만 담은 서비스</h3>
            <p className="desc">복잡한 건 빼고, 꼭 필요한 기능만 제공합니다.</p>
            <button className="cta">시작하기</button>
            <button className="cta" onClick={() => navigate('/login')}>
                로그인
            </button>
            </div>
        </main>
        <Footer/>
        </div>
        </>
    );
}
export default Home;