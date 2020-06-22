import axios from 'axios';
import{
    GET_POSTS,
    POST_ERROR,
    ADD_POST,
    ADD_COMMENT
} from './types';

//Get posts /pets
export const getPetPosts = () => async dispatch => {
    try{
        const res = await axios.get('/api/pets/posts');

        dispatch({
            type: GET_POSTS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
};

//add post /pets
export const addPetPost = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };
    try{
        const res = await axios.post('/api/pets', formData, config);

        dispatch({
            type: ADD_POST,
            payload: res.data
        })
    } catch (err){
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}


//add comment /pets
export const addPetComment = (postId, formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    };
    try{
        const res = await axios.post(`/api/pets/comment/${postId}`, formData, config);

        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        })
    } catch (err){
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}






//Get posts /anime
export const getAnimePosts = () => async dispatch => {
    try{
        const res = await axios.get('/api/anime/posts');

        dispatch({
            type: GET_POSTS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
};

//add post /anime
export const addAnimePost = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };
    try{
        const res = await axios.post('/api/anime', formData, config);

        dispatch({
            type: ADD_POST,
            payload: res.data
        })
    } catch (err){
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}


//add comment /anime
export const addAnimeComment = (postId, formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    };
    try{
        const res = await axios.post(`/api/anime/comment/${postId}`, formData, config);

        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        })
    } catch (err){
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}





//Get posts /Current
export const getCurrentPosts = () => async dispatch => {
    try{
        const res = await axios.get('/api/current/posts');

        dispatch({
            type: GET_POSTS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
};

//add post /current
export const addCurrentPost = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };
    try{
        const res = await axios.post('/api/current', formData, config);

        dispatch({
            type: ADD_POST,
            payload: res.data
        })
    } catch (err){
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}


//add comment /current
export const addCurrentComment = (postId, formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    };
    try{
        const res = await axios.post(`/api/current/comment/${postId}`, formData, config);

        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        })
    } catch (err){
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}





//Get posts /gaming
export const getGamingPosts = () => async dispatch => {
    try{
        const res = await axios.get('/api/gaming/posts');

        dispatch({
            type: GET_POSTS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
};

//add post /gaming
export const addGamingPost = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };
    try{
        const res = await axios.post('/api/gaming', formData, config);

        dispatch({
            type: ADD_POST,
            payload: res.data
        })
    } catch (err){
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}


//add comment /gaming
export const addGamingComment = (postId, formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    };
    try{
        const res = await axios.post(`/api/gaming/comment/${postId}`, formData, config);

        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        })
    } catch (err){
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}





//Get posts /gardening
export const getGardeningPosts = () => async dispatch => {
    try{
        const res = await axios.get('/api/gardening/posts');

        dispatch({
            type: GET_POSTS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
};

//add post /gardening
export const addGardeningPost = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };
    try{
        const res = await axios.post('/api/gardening', formData, config);

        dispatch({
            type: ADD_POST,
            payload: res.data
        })
    } catch (err){
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}


//add comment /gardening
export const addGardeningComment = (postId, formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    };
    try{
        const res = await axios.post(`/api/gardening/comment/${postId}`, formData, config);

        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        })
    } catch (err){
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}






//Get posts /programing
export const getProgramingPosts = () => async dispatch => {
    try{
        const res = await axios.get('/api/programing/posts');

        dispatch({
            type: GET_POSTS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
};

//add post /programing
export const addProgramingPost = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };
    try{
        const res = await axios.post('/api/programing', formData, config);

        dispatch({
            type: ADD_POST,
            payload: res.data
        })
    } catch (err){
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}


//add comment /programing
export const addProgramingComment = (postId, formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    };
    try{
        const res = await axios.post(`/api/programing/comment/${postId}`, formData, config);

        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        })
    } catch (err){
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}





//Get posts /random
export const getRandomPosts = () => async dispatch => {
    try{
        const res = await axios.get('/api/random/posts');

        dispatch({
            type: GET_POSTS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
};

//add post /random
export const addRandomPost = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };
    try{
        const res = await axios.post('/api/random', formData, config);

        dispatch({
            type: ADD_POST,
            payload: res.data
        })
    } catch (err){
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}


//add comment /random
export const addRandomComment = (postId, formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    };
    try{
        const res = await axios.post(`/api/random/comment/${postId}`, formData, config);

        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        })
    } catch (err){
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}