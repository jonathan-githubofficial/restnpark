<template>
    <footer class="ftr center">
        <nav>
            <h1>
              <router-link to="/"><img src="../../assets/home.png">&nbsp;&nbsp;&nbsp;&nbsp;</router-link>
              <router-link to="/Reservations"><img src="../../assets/reservs.png">&nbsp;&nbsp;&nbsp;&nbsp;</router-link>
              <router-link to="/profile"><img src="../../assets/Icon Profile.png">&nbsp;&nbsp;&nbsp;&nbsp;</router-link>
              <router-link v-if="isLoggendIn" to="/" @click="logout" style="color: #138E5A;">Logout</router-link>
            </h1>
        </nav>
    </footer>
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
footer {
  width: 100%;
  height: 4rem;
  background-color: #252525;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

footer a {
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
footer nav {
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
  margin-top: 5%;
  font-size: calc(10px + 0.25vw);

}
@media (max-width: 768px) {
  footer nav{
    font-size: calc(10px + 0.25vw);

  }
}
@media (max-width: 360px) {
  footer nav center{
    font-size: calc(7.2px + 0.25vw);
    
  }
}
</style>