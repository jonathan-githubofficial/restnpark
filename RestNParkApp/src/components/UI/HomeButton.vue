<template>
    <button v-if="!link" :class="mode">
        <img src="../../assets/Home.png">
        <slot></slot>
    </button>
    <router-link v-else :to="to" :class="mode">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            required: false,
            default: null,
        },
        link: {
            type: Boolean,
            required: false,
            default: false,
        },
        to: {
            type: String,
            required: false,
            default: '/',
        }
    }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #138E5A;
  border: 1px solid #138E5A;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #284837;
  border-color: #284837;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.outline {
  background-color: transparent;
  background-color: #284837;
  color: #284837;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
</style>