import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import './CreatePost.css'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

const CreatePost = () => {

    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [content, setContent] = useState('')
    const [files, setFiles] = useState('');

    const navigate = useNavigate();

    const handleForm = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        e.preventDefault();
        const response = await fetch('http://localhost:4000/post', {
            method: 'POST',
            body: data,
            credentials: 'include',
        });
        if (response.ok) {
            toast.success('Post Created Successfully!')
            navigate('/')
        }
    }

    return (
        <main className='pd-inline'>
            <Navbar />
            <section className="create-post">
                <h2 className="page-title">Create New Post</h2>
                <form method="POST" onSubmit={handleForm}>
                    <div className="input-field cp">
                        <label htmlFor="title">Title</label>
                        <input
                            value={title}
                            type="text"
                            id='title'
                            name='title'
                            onChange={e => setTitle(e.target.value)}
                            placeholder='Title'
                            required />
                    </div>
                    <div className="input-field cp">
                        <label htmlFor="summary">Summary</label>
                        <input
                            value={summary}
                            type="text"
                            id='summary'
                            name='summary'
                            onChange={e => setSummary(e.target.value)}
                            placeholder='Summary'
                            required />
                    </div>
                    <div className="input-field cp">
                        <label htmlFor="image">Image</label>
                        <input
                            type="file"
                            id='image'
                            name='image'
                            onChange={e => setFiles(e.target.files)}       
                            required />
                    </div>
                    <ReactQuill onChange={newValue => setContent(newValue)} value={content} />
                    
                    <button type='submit' className="btn cp">Create Post</button>
                </form>
            </section>
        </main>
    )
}

export default CreatePost