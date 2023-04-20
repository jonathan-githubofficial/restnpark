<template>
  <img class="head" src="../../assets/Logo.png" />
    <section class="center">
      <base-card title="Signup for free">
      <user-reg-form @save-data="saveData"></user-reg-form> 
      </base-card>
      <div class="cent2"></div>
    </section>
</template>

<script>
import UserRegForm from '../../components/users/UserRegForm.vue'
export default {
  components: { UserRegForm },
  methods:{
    saveData(data){
        this.$store.dispatch('userPreferences/registerUser', data);
        this.$router.replace('/');
    }
  }
}
</script>
<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  margin-top: 4.2%;
}
.head{
  display: block;
  margin-left: auto;
  margin-right: auto;
 
}
.cent2 {
  text-align: center;
}

</style>