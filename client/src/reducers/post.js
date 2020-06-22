import {
    GET_POSTS,
    POST_ERROR,
    ADD_POST,
    ADD_COMMENT
} from '../actions/types';

const initialState = {
    posts: [],
    error: {},
    loading: true,
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_POSTS:
            return{
                ...state,
                posts: payload,
                loading: false
            };
        case ADD_POST:
            return{
                ...state,
                posts: [payload, ...state.posts],
                loading: false
            };
        case POST_ERROR:
            return{
                ...state,
                posts: payload,
                loading: false
            };
        case ADD_COMMENT:
            return{
                ...state,
                post:{ ...state.post, comments: payload },
                loading: false
            }
        default:
            return state
    }
}