// redux/actions/likeActions.js

export const addLike = (songId) => {
    return {
      type: 'ADD_LIKE',
      payload: songId
    };
  };
  
  export const removeLike = (songId) => {
    return {
      type: 'REMOVE_LIKE',
      payload: songId
    };
  };
  