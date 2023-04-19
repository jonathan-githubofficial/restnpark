export default {
  async login(context, payload) {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDWgqSDdsDwLueeiA0fCVwWsU8O88_dFmY',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      const error = new Error(
        responseData.message || 'Authentication failed!'
      );
      throw error;
    }

    console.log(responseData);
    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    });
  },
  async signup(context, payload) {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDWgqSDdsDwLueeiA0fCVwWsU8O88_dFmY',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      const error = new Error(
        responseData.message || 'Authentication faild!'
      );
      throw error;
    }

    console.log(responseData);
    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    });
  },
  logout(context) {
    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null
    });
  }
};
