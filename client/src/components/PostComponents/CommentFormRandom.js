import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addRandomComment } from '../../actions/post';

const CommentFormRandom = ({ postId, addRandomComment }) => {
    const [formData, setFormData] = useState({
        name: '',
        message: '',
        image: ''
    })

    const {name, message, image} = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
    return(
        <div>
        <form className="form" 
        onSubmit={e => {
            e.preventDefault()
            addRandomComment(postId, formData)
            window.location.reload(false);
        }}>
            <div className="CommentForm">
            <h4>Comment on post below</h4>
            <input type="text" placeholder="name" name="name" value={name} onChange={e => onChange(e)} required />
            <input type="text" placeholder="message" name="message" value={message} onChange={e => onChange(e)} required />
            <input type="text" placeholder="image (Not Required)" name="image" value={image} onChange={e => onChange(e)}  />
            <input  type="submit" className="btn" value="Post!" className="comment-btn" />
            </div>
        </form>
        </div>
    )
}

export default connect(null, { addRandomComment })(CommentFormRandom)


