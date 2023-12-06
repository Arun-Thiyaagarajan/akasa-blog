import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Dash from '../../components/Dash'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { plant, rubik } from '../../assets';
import Posts from '../../components/Post/Posts';

const Home = () => {

    const handleOptions = () => {
        toast.success("Will Be Implemented")
    }

    return (
        <main className='pd-inline'>
            <Navbar />
            <section className="home-section">
                <div className="posts-conatiner">
                    <h2 className='posts-box-title'>Your Feeds</h2>
                    <article className="posts">
                        <Posts />
                    </article>
                </div>
                <article className="options-container">
                    <ul className='options'>
                        <Link to='/create_post'>
                            <li className='option'>
                                <i className="fa-regular fa-square-plus fa-xl" style={{ color: "#ff6300" }}></i>
                                <p style={{ fontWeight: "400" }}>New Post</p>
                            </li>
                        </Link>
                        <li className='option' onClick={handleOptions}>
                            <i className="fa-regular fa-heart fa-xl" style={{ color: "#ff6300" }}></i>
                            <p style={{ fontWeight: "400" }}>Favourites</p>
                        </li>
                    </ul>
                </article>
            </section>
        </main>
    )
}

export default Home