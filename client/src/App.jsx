import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Authentication from './pages/Auth/Authentication'
import './index.css'
import Home from './pages/Home/Home'
import ForgotPassword from './pages/Auth/Registration'
import Registration from './pages/Auth/Registration'
import { ToastContainer } from 'react-toastify'
import CreatePost from './pages/CreatePost/CreatePost'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/login" element={<Authentication />} />
                    <Route path='/register' element={<Registration />} />
                    <Route path='/create_post' element={<CreatePost />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer position="top-center" />
        </>
    )
}

export default App