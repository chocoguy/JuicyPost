import React, {useEffect } from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostFormAnime from './PostComponents/PostFormAnime'
import CommentFormAnime from './PostComponents/CommentFormAnime'
import Nav from '../Nav';
import { getAnimePosts} from '../actions/post'

const Anime = ({ getAnimePosts, post: { posts, loading, post }, match }) => {
    useEffect(() => {
        getAnimePosts();
    }, [getAnimePosts]);
 
    return loading ? (<p>Loading..</p>) :( <div className="main">
        <Nav />
        <div className="main-2">
        <h1 className="text-center">/Anime</h1>
        <div className="content">
        <PostFormAnime />
        <div className="posts">
            {posts.map(post => (
                <div>
                <CommentFormAnime postId={post._id} />
                <PostItem key={post._id} post={post} />
                </div>
            ))}
        </div>
        </div>
    </div>
    </div>
    );
}

const mapStateToProps = state => ({
    post: state.post
  });
  

export default connect( mapStateToProps, { getAnimePosts })(Anime);
