<template>
    <button v-if="!link" :class="mode">
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
body {
    background-color: #111111;
    background-image: url('http://placekitten.com/1000/1000');
}
button {
    transition: all .5s ease;
    color: #fff;
    border: 3px solid white;
    font-family:'Montserrat', sans-serif;
    text-transform: uppercase;
    text-align: center;
    line-height: 1;
    font-size: 17px;
    background-color : transparent;
    padding: 10px;
    outline: none;
    border-radius: 4px;
    cursor: pointer;
}
button:hover {
    color: #001F3F;
    background-color: #fff;
}
</style>
