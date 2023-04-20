<template>
    <div class="hamburger-menu">
      <div class="hamburger-icon"  @click="toggleMenu">
      <img src="../../assets/home button.png">
      </div>

      <ul v-show="isMenuOpen" class="menu-list">
        <router-link class="menu-item" to="/" @click="closeMenu">
            Login/signup
        </router-link>
        <router-link class="menu-item" to="/Reservations" @click="closeMenu">
            Reservations
        </router-link>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      closeMenu() {
        this.isMenuOpen = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .hamburger-menu {
    position: relative;
    display: flex;
    align-items: center;
    right: 35%;
    margin-top: 2%;
  }
  
  .hamburger-icon {
    cursor: pointer;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  
  }
  
  .menu-list {
    position: absolute;
    top: 100%;
    left: 0;
    display: flex;
    flex-direction: column;
    border: 1px solid #296a4e;
    background-color: #252525;
    padding: 16px;
    margin-top: 4px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    min-width: 150px;
    z-index: 10;
  }
  
  .menu-item {
    margin-bottom: 8px;
  }
  
  .menu-link {
    color: #333;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }
  
  .menu-link:hover {
    color: #666;
  }
  </style>
  