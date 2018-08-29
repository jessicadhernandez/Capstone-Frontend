<template>
  <div class="home">
    <h1>New goal</h1>
    <ul>
      <li v-for="error in errors" class="error">
        {{ error }}
      </li>
    </ul>
    <div>
      title: <input type="text" v-model="title">
      start_date: <input type="text" v-model="start_date">
      end_date: <input type="text" v-model="end_date">
      description: <input type="text" v-model="description">
      completed: <input type="text" v-model="completed">
      category: <input type="text" v-model="category">
      image: <input type="text" v-model="image">
      <button v-on:click="createGoal()">Create goal</button>
    </div>
<!--     <h1>Goals</h1> -->
    <div v-for="goal in goals">
      <h2>{{ goal.title }}</h2>
      <h4>{{ goal.start_date }}</h4>
      <p>{{ goal.end_date }}</p>
      <p>{{ goal.description }}</p>
      <p>{{ goal.completed }}</p>
      <p>{{ goal.image }}</p>
      <p>{{ goal.category }}</p>
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
      goals: [],
      title: "",
      start_date: "",
      end_date: "",
      description: "",
      completed: "",
      image: "",
      category: "",
      errors: []
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/goals").then(response => {
      console.log(response);
      this.goals = response.data;
    });
  },
  methods: {
    createGoal: function() {
      this.errors = [];
      var params = {
        title: this.title,
        start_date: this.start_date,
        end_date: this.end_date,
        description: this.description,
        completed: this.completed,
        image: this.image,
        category_id: this.category
      };
      axios
        .post("http://localhost:3000/api/goals", params)
        .then(response => {
          console.log("the response is", response);
          this.goals.push(response.data);
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
