<template>
  <div>
    <h2>User Info:</h2>
      <section v-if="isLoggendIn">
      <li>Full name: {{ fullName }}</li>
      <li>Mobile: {{ mobileNumber }}</li>
      </section>
  </div>

</template>

<script>
export default {
  props: ['id','firstName', 'lastName', 'mobileNumber'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    isLoggendIn(){
      return this.$store.getters.isAuthenticated;
    }
  },

};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}

</style>