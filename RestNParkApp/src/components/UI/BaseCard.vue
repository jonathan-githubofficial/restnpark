<template>
    <div class="card center">
      <div class="card-content center">
        <h3 class="card-title">{{ title }}</h3>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        default: 'Card Title'
      },
    }
  };
  </script>
  
  <style scoped>
  .card {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
  }
  
  .card:hover {
    transform: scale(1.02);
  }
  
  .card-content {
    padding: 1rem;
  }
  
  .card-title {
    width: 100%;
    margin: 0;
    font-size: 1.45rem;
    color: #ffffff;
    text-align: center;
  }
  
  .card-description {
    margin: 0.5rem 0;
    font-size: 1rem;
    color: #777;
  }
  .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  margin-top: 5%;
}
@media (max-width: 768px) {
  .card {
    font-size: 12px; /* Adjust font size for smaller screens */
    top: 20px; /* Adjust top position for smaller screens */
    width: calc(100% - 32px); /* Adjust width for smaller screens */
    left: 16px; /* Adjust left position for smaller screens */
  }
  .center{
    display: block;
    width: calc(100% - 32px); 
  margin-right: auto;

  }
}
  </style>
  