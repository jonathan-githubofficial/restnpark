<script setup>
import BaseButton from './UI/BaseButton.vue'
</script>

<template>
  <img class="center" src="../assets/Logo.png" />
  <br />
  <router-link to="/Login">
    <base-button class="center spaceBtn"> Login</base-button>
  </router-link>
  <div>
    <router-link to="/register">
      <base-button class="center spaceBtn"> Signup </base-button>
    </router-link>
   
  </div>
</template>

<style scoped>

.spaceBtn {
  margin-top: 5%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
 
}
</style>
