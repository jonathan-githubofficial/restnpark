<template>
  <input v-model="inputValue" :type="type" :placeholder="placeholder" @input="onInput" />
</template>

<script>
export default {
  props: {
    type:'',
    placeholder:''
    
  },

  methods: {
    onInput(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>
<style scoped>

input {
  position: relative;
  margin-bottom: 10px; 
  border: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #f2f2f2;
  padding: 12px;
  border-radius: 3px;
  width: auto;
  font-size: 14px;
}

input .placeholder {
  position: absolute;
  left: 12px;
  bottom: 50%;
  top: 22px;
  transform: translateY(-50%);
  width: calc(100% - 24px);
  color: #aaa;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* Media query for smaller screens */
@media (max-width: 768px) {
 input{
    font-size: 12px; /* Adjust font size for smaller screens */
    top: 20px; /* Adjust top position for smaller screens */
    width: calc(100% - 32px); /* Adjust width for smaller screens */
    left: 12px; /* Adjust left position for smaller screens */
  }
}
@media (max-width: 360px) {
input{
    font-size: 12px; /* Adjust font size for smaller screens */
    top: 20px; /* Adjust top position for smaller screens */
    width: 100%; /* Adjust width for smaller screens */
    left: 12px; /* Adjust left position for smaller screens */
  }
}

</style>