import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostFormPets from './PostComponents/PostFormPets'
import CommentFormPets from './PostComponents/CommentFormPets'
import { getPetPosts } from '../actions/post'
import Nav from '../Nav';

const Pets = ({ getPetPosts, post: { posts, loading, post }, match }) => {
    useEffect(() => {
        getPetPosts();
    }, [getPetPosts]);
 
    return loading ? (<p>Loading..</p>) :( <div className="main">
        <Nav />
        <div className="main-2">
        <h1 className="text-center">/Pets</h1>
        <div className="content">
        <h1 className="border-bottom">Puppies and hamsters</h1>
        <PostFormPets />
        <div className="posts">
            {posts.map(post => (
                <div>
                <CommentFormPets postId={post._id} />
                <PostItem key={post._id} post={post} />
                </div>
            ))}
            <div className="comments">
                {console.log(posts)}
            </div>
        </div>
        </div>
        </div>
    </div>
    );
}

const mapStateToProps = state => ({
    post: state.post
  });
  

export default connect( mapStateToProps, { getPetPosts })(Pets);


