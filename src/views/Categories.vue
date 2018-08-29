<template>
  <div class="home">
    <ul>
      <li v-for="error in errors" class="error">
        {{ error }}
      </li>
    </ul>
    <h1>Categories</h1>
    <div v-for="category in categories">
      <h2>{{ category.name }}</h2>
      <!-- <h4>{{ category.image }}</h4> -->
      <img v-bind:src="category.image" alt="" width=200>
      <div v-for="goal in category.goals">
        <p>{{ goal.title }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.error {
  color: red;
}
</style>

<script>
var axios = require("axios");
// import axios from "axios";
export default {
  data: function() {
    return {
      categories: [],
      name: "",
      image: "",
      errors: []
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/categories").then(response => {
      console.log("categories", response);
      this.categories = response.data;
    });
  },
  methods: {
    createCategory: function() {
      this.errors = [];
      var params = {
        name: this.name,
        image: this.image
      };
      axios
        .post("http://localhost:3000/api/categories", params)
        .then(response => {
          console.log("the response is", response);
          this.categories.push(response.data);
        })
        .catch(error => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    }
  },
  computed: {}
};
</script>
