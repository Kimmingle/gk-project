import Login from '../components/Login';
import Home from '../pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';


const AppRouter = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                
                <Route path='/' element={<Home />} />
                <Route path="/login" element={<Login />} />

            </Routes>
        </BrowserRouter>
        </>
    );
};

export default AppRouter;