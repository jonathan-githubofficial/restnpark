export default {
    registerUser(state, payload){
        state.userData = payload;
    },
    setUserData(state, payload){
       state.userData = payload;
    }
};