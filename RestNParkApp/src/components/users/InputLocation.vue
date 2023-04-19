<template>
    <section>
    <base-card title="Location Access" >
    <p>This allows us to find you the best parking.</p>
    <div class="center">
        <input-field placeholder="Set location" des></input-field>
        <div class="mar1"></div>
    <router-link to="/ProfileReady">
        <base-button>Next</base-button>
    </router-link>
    
</div>
    </base-card>
    <div class="mar2"></div>
    </section>
</template>

<style scoped>
.center {
  margin-top: 8.6%;
  text-align: center;
}
.mar1 {
  margin-top: 50%;
}
.mar2 {
  margin-top: 12%;
}
</style>