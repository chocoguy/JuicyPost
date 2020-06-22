import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostFormRandom from './PostComponents/PostFormRandom'
import CommentFormRandom from './PostComponents/CommentFormRandom'
import { getRandomPosts} from '../actions/post'
import Nav from '../Nav'

const Random = ({ getRandomPosts, post: { posts, loading, post }, match }) => {
    useEffect(() => {
        getRandomPosts();
    }, [getRandomPosts]);
 
    return loading ? (<p>Loading..</p>) :( <div className="main">
        <Nav />
        <div className="main-2">
        <h1 className="text-center">/Random</h1>
        <div className="content">
        <h1 className="border-bottom">Not a good board</h1>
        <PostFormRandom />
        <div className="posts">
            {posts.map(post => (
                <div>
                <CommentFormRandom postId={post._id} />
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
  

export default connect( mapStateToProps, { getRandomPosts })(Random);