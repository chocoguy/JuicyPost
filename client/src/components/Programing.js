import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostFormPrograming from './PostComponents/PostFormPrograming'
import CommentFormPrograming from './PostComponents/CommentFormPrograming'
import { getProgramingPosts } from '../actions/post'
import Nav from '../Nav';
const Programing = ({ getProgramingPosts, post: { posts, loading, post }, match }) => {
    useEffect(() => {
        getProgramingPosts();
    }, [getProgramingPosts]);
 
    return loading ? (<p>Loading..</p>) :( <div className="main">
        <Nav />
        <div className="main-2">
        <h1 className="text-center">/Programing</h1>
        <div className="content">
        <h1 className="border-bottom">Code</h1>
        <PostFormPrograming />
        <div className="posts">
            {posts.map(post => (
                <div>
                <CommentFormPrograming postId={post._id} />
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
  

export default connect( mapStateToProps, { getProgramingPosts })(Programing);