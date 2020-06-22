import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostFormGardening from './PostComponents/PostFormGardening'
import CommentFormGardening from './PostComponents/CommentFormGardening'
import { getGardeningPosts } from '../actions/post'
import Nav from '../Nav';

const Gardening = ({ getGardeningPosts, post: { posts, loading, post }, match }) => {
    useEffect(() => {
        getGardeningPosts();
    }, [getGardeningPosts]);
 
    return loading ? (<p>Loading..</p>) :( <div className="main">
        <Nav />
        <div className="main-2">
        <h1 className="text-center">/Gardening</h1>
        <div className="content">
        <h1 className="border-bottom">Grow a tomato ye?</h1>
        <PostFormGardening />
        <div className="posts">
            {posts.map(post => (
                <div>
                <CommentFormGardening postId={post._id} />
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
  

export default connect( mapStateToProps, { getGardeningPosts })(Gardening);