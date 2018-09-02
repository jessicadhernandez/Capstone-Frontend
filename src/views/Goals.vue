<template>
  <div class="home">
    <ul>
      <li v-for="error in errors" class="error">
        {{ error }}
      </li>
    </ul>

    <h1>Goals</h1>
    <div v-for="goal in goals">
      <h2>{{ goal.title }}</h2>
      <h4>{{ goal.start_date }}</h4>
      <p>{{ goal.end_date }}</p>
      <p>{{ goal.description }}</p>
      <p>{{ goal.completed }}</p>
      <p>{{ goal.image }}</p>
      <p>{{ goal.category }}</p>
    </div>
<!--       <input type="checkbox" id="checkbox" v-model="completeGoal(goal)">
      <span v-bind:class="{completed: goal.completed}">{{ goal.title }}</span> -->
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
      completeGoal: [],
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
    completeGoal: function(inputGoal) {
      inputGoal.completed = !inputGoal.completed;
    },
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
