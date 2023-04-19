
export default {
  
   async registerUser(context, data){
    const userId = context.rootGetters.userId;      
        const userData = {
            firstName: data.firstN,
            lastName: data.lastN,
            mobile: data.mobile,
        }
        console.log("UserData", userData);
        const token = context.rootGetters.token;
        const response = await fetch(
            `https://restnpark-default-rtdb.firebaseio.com/users/${userId}.json?auth=` + token,
            {
              method: 'PUT',
              body: JSON.stringify(userData)
            }
          );

          if(!response){
            //error
          }
        context.commit('registerUser',
        { 
        ...userData, 
        id: userId}
        );
    },
   async loadUserData(context){
    const userId = context.rootGetters.userId;
    const response = await fetch(`https://restnpark-default-rtdb.firebaseio.com/users/${userId}.json`);
    const responseData = await response.json();
    if (!response.ok){
        //error
    }
    console.log(responseData);
    const userInfo = {
        id: userId,
        firstName: responseData.firstName,
        lastName: responseData.lastName,
        mobileNumber: responseData.mobile,
    }
    console.log("UserInfo",userInfo);
    context.commit('setUserData', userInfo);
    }
};
