import React, { Fragment } from 'react';
import Moment from 'react-moment';


const PostItem = ({ post: {_id, name, message, image, comments, date}, showActions }) => {

 

    return(
        <div className="indy-post">
        <h1 className="large-font">{name}</h1>
        <p className="large-comment">{message}</p>
        <img src={image} className="post-image" alt="an image" />
        <p className="large-date">Posted on <Moment format='MMMM Do YYYY, h:mm:ss a'>{date}</Moment></p>
        <h1>Comments:</h1>
        <div className="indy-comment-post">
        {comments.map(commentp => (
            <div>
            <h4 className="comment-text">{commentp.name}</h4>
            <p>{commentp.message}</p>
            { commentp.image === '' ? (<Fragment></Fragment>) : (<img src={commentp.image} className="comment-post-image" alt="Comment image" />) }
            <p className="margin-bottom">POSTed on <Moment format='MMMM Do YYYY, h:mm:ss a'>{commentp.date}</Moment></p>
            </div>
        ))}
        </div>
        </div>
    )
}

//  {posts.map(post => (
//    <PostItem key={post._id} post={post} />
//    ))}
// /pets/1.jpg
export default PostItem;

