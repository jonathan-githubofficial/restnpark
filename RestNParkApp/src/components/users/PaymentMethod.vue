<template>
        <section>
    <base-card title="Payment" >
    <div class="center">
    <transparent-button>Visa</transparent-button><br/><br/>
    <transparent-button>Master Card</transparent-button><br/><br/>
    <transparent-button>Paypal</transparent-button><br/>
    <router-link to="/InputImage">
      <base-button>Next</base-button>
    </router-link>
    
</div>
    </base-card>
    <div class="cent2"></div>
    </section>
</template>

<style scoped>
.center {
  margin-top: 15%;
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