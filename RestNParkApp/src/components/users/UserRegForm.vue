<template>
    <div class="center">
    <form @submit.prevent="submitForm">
        <div>
            <input-field id="my-input" placeholder="Username" type="text" v-model.trim="userName"/>
        </div>
        <div>
            <input-field id="my-input" placeholder="Email" type="email" v-model.trim="email"/>
        </div>
        <div>
            <input-field id="my-input" placeholder="Password" type="password" v-model.trim="password"/>
        </div>  
        <base-button type="submit">Create Account</base-button>
    </form>
</div>

</template>

<script>

export default {

  data(){
        return {
            userName: '',
            email: '',
            password: '',
            error: '',
            // formIsValid: true,
        };
    },
    methods: {
        async submitForm(){
            // this.formIsValid = true;
            if (this.email === '' ||
             !this.email.includes('@') ||
              this.password.length <8)
            {
                // this.formIsValid = false;
                return;
            }

            this.isLoading = true;
        try{
               await this.$store.dispatch('signup', {
                email: this.email,
                password: this.password, 
                });
                {const redirectUrl = '/UserBio';
            this.$router.replace(redirectUrl);}
                
        }catch(err){
            this.error = err.message || 'Authentication failed, try again later.';
            console.log(this.error);
        }
            // this.isLoading = false;
        },
        handleError(){
            this.error = null;
        }
    }
}
</script>
