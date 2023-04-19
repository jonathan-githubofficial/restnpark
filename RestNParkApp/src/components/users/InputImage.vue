<template>
    <section>
    <base-card title="Upload your profile photo" >
    <div class="center">
        <input type="file" id="img" name="img" accept="image/*">
        <div class="mar1"></div>
        <router-link to="/InputLocation">
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
  margin-top: 65%;
}
.mar2 {
  margin-top: 12%;
}
</style>