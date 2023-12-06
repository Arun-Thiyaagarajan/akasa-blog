import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Authentication from './pages/Auth/Authentication'
import './index.css'
import Home from './pages/Home/Home'
import ForgotPassword from './pages/Auth/Registration'
import Registration from './pages/Auth/Registration'
import { ToastContainer } from 'react-toastify'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Authentication />} />
                    <Route path='/register' element={<Registration />} />
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer position="top-center" />
        </>
    )
}

export default App