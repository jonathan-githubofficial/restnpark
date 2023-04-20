<template>
    <base-card title="My Reservations">
    <h3 v-if="isLoggendIn" class="center">You don't have any reservations</h3>
    <h3 v-else class="center">Please login first to see you reservations! </h3>
    </base-card>
    <div class="cent"></div>
</template>


<script>
export default {
    isLoggendIn(){
      return this.$store.getters.isAuthenticated;
    }
}
</script>
<style scoped>
  .center {
    text-align: center;
}
.cent{
    margin-top: 34.25%;
}
</style>
