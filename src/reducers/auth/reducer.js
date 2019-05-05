import * as types from './actiontypes';

const initToken = {
    token: 'initToken',
    haveCheckedTime: 0 
};

export const token = (state = initToken, action) => {
    switch(action.type){
        case types.CHECK_TOKEN:
            return {...state, token: action.payload.token, haveCheckedTime: state.haveCheckedTime+1};
        default:
            return state;
    }
};

const initUser = {
    name: 'huangzp',
    age: 30
};

export const user = (state = initUser, action) => {
    switch(action.type){
        default:
            return state;
    }
};