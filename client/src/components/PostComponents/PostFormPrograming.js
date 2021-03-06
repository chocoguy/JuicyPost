import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addProgramingPost } from '../../actions/post';

const PostFormPrograming = ({ addProgramingPost }) => {
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
            e.preventDefault();
            addProgramingPost(formData)
        }}>

            <div className="PostForm">
            <h2>Name:</h2>
            <input type="text" placeholder="Can be Anonymous" name="name" value={name} onChange={e => onChange(e)} required />
            <h2>Message:</h2>
            <input type="text" placeholder="Text" name="message" value={message} onChange={e => onChange(e)} required />
            <h2>Image Link:</h2>
            <input type="text" placeholder="image Required" name="image" value={image} onChange={e => onChange(e)} required />
            <h2>Submit:</h2>
            <input type="submit" className="btn" value="Post!" className="post-btn" />
            </div>
        </form>
        </div>
    )
}

export default connect(null, { addProgramingPost })(PostFormPrograming)