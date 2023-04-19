<template>
    <section>
    <form @submit.prevent="submitForm">
    <base-card title="Fill in your bio to get started" >
    <div class="center">
    <input-field id="my-input" type="text" placeholder="Firstname" v-model="firstName"/>
    <input-field id="my-input" type="text" placeholder="Lastname" v-model="lastName"/>
    <input-field id="my-input" type="text" placeholder="Mobile Number" v-model="mobile"/>
    <base-button type="submit">
    Next
    </base-button>
</div>
    </base-card>
    <div class="cent2"></div>
  </form>
    </section>
</template>
<script>

export default {

    data() {
        return {
            firstName:'',
            lastName:'',
            mobile:'',
            uploadedFile: null,
        }
    },
    methods: {
        submitForm(){
            const formData = {
                firstN: this.firstName,
                lastN: this.lastName,
                mobile: this.mobile, 
                profileImg: this.uploadedFile,
            };
            console.log("formData", formData);
            this.$store.dispatch('userPreferences/registerUser', formData);
            this.$router.replace('/PaymentMethod');
        },
    },
}
</script>
<style scoped>
.center {
  margin-top: 23%;
  text-align: center;
}
.cent2 {
  margin-top: 13%;
  text-align: center;
}
@media (max-width: 768px) {
  .cent2{
margin-top: calc(100% - 32px); 

  }
}
@media (max-width: 360px) {
  footer nav{
    font-size: calc(7.2px + 0.25vw);

  }
}
</style>