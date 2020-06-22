import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostFormGaming from './PostComponents/PostFormGaming'
import CommentFormGaming from './PostComponents/CommentFormGaming'
import { getGamingPosts } from '../actions/post'
import Nav from '../Nav';

const Gaming = ({ getGamingPosts, post: { posts, loading, post }, match }) => {
    useEffect(() => {
        getGamingPosts();
    }, [getGamingPosts]);
 
    return loading ? (<p>Loading..</p>) :( <div className="main">
        <Nav />
        <div className="main-2">
        <h1 className="text-center">/Gaming</h1>
        <div className="content">
        <h1 className="border-bottom">Anything about gaming goes in here!</h1>
        <PostFormGaming />
        <div className="posts">
            {posts.map(post => (
                <div>
                <CommentFormGaming postId={post._id} />
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
  

export default connect( mapStateToProps, { getGamingPosts })(Gaming);