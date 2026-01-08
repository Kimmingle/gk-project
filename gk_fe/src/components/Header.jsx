import '../css/Home.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header className="header">
        <div className="inner">
        <h1 className="logo">MyService</h1>
        <nav className="nav">
        <a href="#">소개</a>
        <a href="#">기능</a>
        <a href="#">문의</a>
        <Link to="/login">로그인</Link>
        </nav>
        </div>
        </header>

    );
}
export default Header;