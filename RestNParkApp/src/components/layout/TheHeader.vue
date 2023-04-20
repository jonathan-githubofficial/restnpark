<template>
    <header class="center">
        <nav>
            <h1>
              <router-link to="/Reservations"><img src="../../assets/home button.png">&nbsp;&nbsp;&nbsp;&nbsp;</router-link>
              <router-link v-if="!isLoggendIn" style="top: -5%;" to="/"><img src="../../assets/logo2.png">&nbsp;&nbsp;&nbsp;&nbsp;</router-link>
              <router-link v-else style="top: -5%;" to="/Parkings"><img src="../../assets/logo2.png">&nbsp;&nbsp;&nbsp;&nbsp;</router-link>
              <router-link class="imgCent2" to="/profile"><img src="../../assets/Profile.png">&nbsp;&nbsp;&nbsp;&nbsp;</router-link>
              <router-link class="imgCent" v-if="isLoggendIn" to="/" @click="logout" style="color: #138E5A;">Logout</router-link>
            </h1>
        </nav>
    </header>
</template>
<script>

export default {
  computed: {
    isLoggendIn(){
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logout(){
      this.$store.dispatch('logout');
      this.$router.replace('/');
    }
  }
}
</script>
<style scoped>
header {
  width: 100%;
  height: 4rem;
  background-color: #252525;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

header a {
  text-decoration: none;
  color: #252525;
  display: inline-block;
  padding: 0.75rem 1rem;
  border: 1px solid transparent;
  
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #296a4e;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}
header nav {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  justify-content: center;
  
}
  .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  margin-top: -2%;
  font-size: calc(10px + 0.25vw);

}
.imgCent{
  top: -18%;
}
.imgCent2{
  top: -7%;
}
@media (max-width: 768px) {
  header nav{
    font-size: calc(10px + 0.25vw);

  }
}
@media (max-width: 360px) {
  header nav center{
    font-size: calc(7.2px + 0.25vw);
    
  }
}
</style>