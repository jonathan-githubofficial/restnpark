<template>
    <section>
        <base-card title="Profile Information">
            <user-info v-if="isLoggendIn"
            :key="userData.id"
            :first-name="userData.firstName"
            :last-name="userData.lastName"
            :mobile-number="userData.mobileNumber"
            ></user-info>
            <h3 v-else>Please Sign in first</h3>
        </base-card>
    </section>
    <div v-if="isLoggendIn" class="cent"></div>
    <div v-else class=" cent2"></div>
</template>

<script>
import UserInfo from '../../components/users/UserInfo.vue';
export default {
  components: { UserInfo },
    computed:{
        userData(){
            return this.$store.getters['userPreferences/userData'];
        },
        isLoggendIn(){
      return this.$store.getters.isAuthenticated;
    }
    },
    created(){
        this.loadUserPrefs();
    },
    methods: {
        loadUserPrefs(){
            this.$store.dispatch('userPreferences/loadUserData')
        }
    }
}
</script>
<style scoped>
  .center {
    text-align: center;
}
.cent{
    margin-top: 19.5%;
}
.cent2{
    margin-top: 34.25%;
}
</style>