<template>
        <section>
    <base-card title="Payment" >
    <div class="center">
    <transparent-button :class="{ 'selected': selected1 }" @click="selected1=!selected1">Visa</transparent-button><br/><br/>
    <transparent-button :class="{ 'selected': selected2 }" @click="selected2=!selected2">Master Card</transparent-button><br/><br/>
    <transparent-button :class="{ 'selected': selected3 }" @click="selected3=!selected3">Paypal</transparent-button><br/>
    <router-link to="/InputImage">
      <base-button>Next</base-button>
    </router-link>
    
</div>
    </base-card>
    <div class="cent2"></div>
    </section>
</template>

<script>
export default {
  data() {
  return {
    selected1: false,
    selected2: false,
    selected3: false,
  }
},
watch: {
  selected1(){
    if (this.selected1)
    {
      this.selected2 = false;
      this.selected3 = false;
    }
  },
  selected2(){
    if (this.selected2)
    {
      this.selected1 = false;
      this.selected3 = false;
    }
  },
  selected3(){
    if (this.selected3)
    {
      this.selected1 = false;
      this.selected2 = false;
    }
    
  }
}
}
</script>
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
.selected {
    color: #001F3F;
    background-color: #fff;
}
</style>