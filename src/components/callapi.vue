<template>
    <div>
      <button @click="getData">Lấy dữ liệu từ Backend</button>
      <p>{{ responseData }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        responseData: ''
      };
    },
    methods: {
      getData() {
        axios.get('http://localhost:3000/api/data')
          .then(response => {
            this.responseData = response.data;
          })
          .catch(error => {
            console.error('Lỗi khi lấy dữ liệu từ backend:', error);
          });
      }
    }
  };
  </script>