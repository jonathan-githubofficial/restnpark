<template>
    <div class="center">
    <base-card title="Login">
    <form @submit.prevent="submitForm">
        <div>
            <input-field id="my-input" placeholder="Email" type="email" v-model.trim="email"/>
        </div>
        <div>
            <input-field id="my-input" placeholder="Password" type="password" v-model.trim="password"/>
        </div> 
        <div class="cent2">
        <base-button type="submit">Login</base-button>
        </div>
    </form>
</base-card>
<div class="cent2"></div>
</div>
</template>

<script>
export default {
    data(){
        return {
            email: '',
            password: '',
            formIsValid: true,
            isLoading: false,
            error: null,
        };
    },
    methods: {
       async submitForm(){
            if (this.email === '' ||
             !this.email.includes('@') ||
              this.password.length <8)
            {
                return;
            }
        try{
                await this.$store.dispatch('login', {
                    email: this.email,
                    password: this.password,
                })
                {const redirectUrl = '/Parkings';
            this.$router.replace(redirectUrl);
            }

        }catch(err){
            this.error = err.message || 'Authentication failed, try again later.';
        }
            this.isLoading = false;
        },
        handleError(){
            this.error = null;
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
    margin-top: 5%;
  }
  .cent2 {
  margin-top: 24%;
  text-align: center;
}
</style>
