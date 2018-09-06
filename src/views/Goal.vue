<template>
  <div class="home">
    <div class="page-header header-filter">
        <div class="page-header-image" style="background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2) ), url('/assets/img/bg31.jpg'); z-index: 1"></div>
        <div class="content-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 ml-auto text-right">
                        <h1 class="title">Find The Joy.</h1>
                        <h4 class="description">Begin adding your goals..</h4>
<!--                         <div class="buttons">
                            <a href="/#/goals" class="btn btn-info btn-sm mr-3">
                                View goals
                            </a>
                        </div> -->
<!--     <div class="about-contact">
        <div class="container">
            <div class="row"> -->
<!--                 <div class="col-md-8 mr-auto ml-auto"> -->
<!--                     <h2 class="text-center title">Want to work with us?</h2>
                    <h4 class="text-center description">Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will get back to you in a couple of hours.</h4> -->
                    <form class="contact-form">
                        <div class="row">
                            <div class="col-md-6 text-left">
                                <label>Title</label>
                                <div class="input-group">
<!--                                   <div class="input-group-prepend">
                                    <span class="input-group-text"><i class=""></i></span>
                                  </div> -->
                                  <input type="text" class="form-control" placeholder="">
                                </div>
                            </div>
                            <div class="col-md-6 text-left">
                                <label>Description</label>
                                <div class="input-group">
                                  <input v-model="description" type="text" class="form-control" placeholder="">
                                </div>
                            </div>
                            
                            <div class="col-md-6 text-left">
                                <label>Tag</label>
                                <div class="input-group">
                                  <input v-model="tag" type="text" class="form-control" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Tip: Add commas between tags." placeholder="">
                                </div>
                            </div>                                   
                            <div class="col-md-6 text-left">
                                <div class="form-group">
                                    <label class="control-label text-left">Category</label>
                                    <select v-model="category_id" class="selectpicker" data-size="7" data-style="btn btn-default btn-round mt-0" title="Select one">
                                        <option v-for="category in categories" v-bind:value="category.id">{{ category.name }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6 text-left">
                                <label>Start Date</label>
                                <div class="input-group">
                                  <input v-model="start_date" type="date" class="form-control" placeholder="">
                                </div>
                            </div>
                             <div class="col-md-6 text-left">
                                <label>End Date</label>
                                <div class="input-group">
                                  <input v-model="end_date" type="date" class="form-control" placeholder="">
                                </div>
                            </div>
                            <div class="col-md-6 text-left">
                                <label>Image</label>
                                <div class="input-group">
                                  <input v-model="image" type="text" class="form-control" placeholder="Enter a url link">
                                </div>
                            </div>                            

                        </div>

                        <div class="row">
                            <div class="col-md-4 ml-auto mr-auto text-center">
                                <button class="btn btn-primary btn-round mt-4 btn-sm" v-on:click="createGoal()">
                                    Create
                                </button>
                            </div>
                        </div>
                                               
                    </form>
<!--                 </div> -->
<!--             </div>
        </div>
    </div> -->
                    </div>

                </div>
            </div>

        </div>

    </div>

<!--     <h1>New goal</h1>
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
      add tag: <input type="text" v-model="tag" placeholder="Tag your goals!">
      <button v-on:click="createGoal()">Create goal</button>
      <button v-on:click="createTag()">Add tags</button>
    </div> -->
<!--     <h1>Goals</h1> -->
<!--     <div v-for="goal in goals">
      <h2>{{ goal.title }}</h2>
      <h4>{{ goal.start_date }}</h4>
      <p>{{ goal.end_date }}</p>
      <p>{{ goal.description }}</p>
      <p>{{ goal.completed }}</p>
      <p>{{ goal.image }}</p>
      <p>{{ goal.category }}</p>
    </div> -->
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
      title: "Bake a cake",
      start_date: "",
      end_date: "",
      description: "",
      completed: "",
      image: "",
      category_id: "",
      tag: "",
      // tag: [],
      // name: "",
      errors: [],
      categories: []
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/categories").then(response => {
      console.log(response);
      this.categories = response.data;
      console.log(this.categories);
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
        category_id: this.category_id,
        tag: this.tag.name
      };
      // createTag: function() {
      //   var params = {
      //     name: this.name
      //   }
      axios
        .post("http://localhost:3000/api/goals", params)
        .then(response => {
          console.log("the response is", response);
          this.goals.push(response.data);
        })
        // .post("http://localhost:3000/api/tags", params)
        // .then(response => {
        //   console.log("the response is", response);
        //   this.tags.push(response.data);
        // })
        .catch(error => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
      // }
    }
  },
  computed: {}
};
</script>
