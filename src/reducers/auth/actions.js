import * as types from './actiontypes';

// redux-thunk
// export const checkToken = (token) => (dispatch) => {
//     let p = new Promise((resolve)=>{
//         setTimeout(function(){
//             resolve();
//         }, 0);
//     }); 
//     p.then(()=>{
//         dispatch({
//             type: types.CHECK_TOKEN,
//             payload: { token }
//         }); 
//     });
// };

export const checkToken = (token) => {
    return {
        type: types.CHECK_TOKEN,
        payload: { token }
    };
};