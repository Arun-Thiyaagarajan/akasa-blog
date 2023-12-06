import './Posts.css'
import {formatISO9075} from "date-fns";

const Posts = ({_id,title,summary,cover,content,createdAt,author}) => {

    return (
        <>
            <div className="post">
                <div className="post-img">
                    <img src={'http://localhost:4000/'+cover} alt="plant" className='img' />
                </div>
                <div className="texts">
                    <h2 className='post-title'>{title}</h2>
                    <p className="info">
                        <a href="" className="author title-case">{ author.username }</a>
                        <span>{formatISO9075(new Date(createdAt))}</span>
                    </p>
                    <p className='post-summary'>{summary}</p>
                </div>
            </div>
        </>
    )
}

export default Posts