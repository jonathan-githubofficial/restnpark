<template>
<div class="card">
<base-card title="Parking details">
<img style="width: 100%;" src="../../assets/parking_details.png">
<br/><br/>
<img style="left: -20px;" src="../../assets/Contact.png">
<br/><br/>
<img src="../../assets/details2.png">
<base-button class="center" @click="reserve">Reserve</base-button>
</base-card>
</div>
</template>

<script>
export default {
    methods:{
        reserve(){
            this.$router.replace('/Reserved');
        }
    }
}
</script>
<style scoped>
.card{
margin-top: -4%;
}
.center{
    text-align: center;
}
</style>