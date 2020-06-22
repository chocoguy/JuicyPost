import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostFormCurrent from './PostComponents/PostFormCurrent'
import CommentFormCurrent from './PostComponents/CommentFormCurrent'
import { getCurrentPosts  } from '../actions/post'
import Nav from '../Nav';

const Current = ({ getCurrentPosts, post: { posts, loading, post }, match }) => {
    useEffect(() => {
        getCurrentPosts();
    }, [getCurrentPosts]);
 
    return loading ? (<p>Loading..</p>) :( <div className="main">
        <Nav />
        <div className="main-2">
        <h1 className="text-center">/Current</h1>
        <div className="content">
        <h1 className="border-bottom">What is going on today?</h1>
        <PostFormCurrent />
        <div className="posts">
            {posts.map(post => (
                <div>
                <CommentFormCurrent postId={post._id} />
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
  

export default connect( mapStateToProps, { getCurrentPosts })(Current);