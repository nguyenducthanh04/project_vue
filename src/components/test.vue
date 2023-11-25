<template>
    <div id="app">
      <div>
        <input type="number" v-model="a" placeholder="Nhap a">
      </div>
      <div>
        <input type="number" v-model="b" placeholder="Nhap b">
      </div>
      <button @click="Tong">Tong</button>
      <p>Tong: {{ tong }}</p>
      <button @click="Tich"> Tich</button>
      <p>Tich: {{ tich }}</p>
      <p>Max: {{  max }}</p>
    </div>
    <div v-if="a < b">
        <p>Max = {{ b }}</p>
    </div>
    <div v-else>
        <p>Max = {{ a }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        a: 0,
        b: 0,
        tong: 0,
        tich: 0
      };
    },
    methods: {
      Tong() {
        let A = parseInt(this.a);
        let B = parseInt(this.b);
        let tongBanDau = 0;
  
        if (!isNaN(A) && !isNaN(B)) {
          for (let i = A; i <= B; i++) {
            tongBanDau += i;
          }
          this.tong = tongBanDau;
        } else {
          this.tong = 0;
        }
      },
      Tich() {
        let A = parseInt(this.a);
        let B = parseInt(this.b);
        let tichBanDau = 1;
  
        if (!isNaN(A) && !isNaN(B)) {
          for (let i = A; i <= B; i++) {
            tichBanDau *= i;
          }
          this.tich = tichBanDau;
        } else {
          this.tich = 0;
        }
      },
    },
  };
  </script>
  