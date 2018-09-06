<template>
  <div class="home wrapper">
      <div class="page-header page-header">
        <div class="page-header-image" data-parallax="true" style="background-image: url('/assets/img/bg44.jpg'); z-index: 1;">
        </div>
        <div class="content-center">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Categories</h2>
            <h3 class="h3-description rellax-text" data-rellax-speed="-1">What is important in your life?</h3>
            <br>
            <br>
              <a href="/#/category" class="btn btn-primary btn-round">
                   <i class="now-ui-icons"></i>
                   Create a category!
               </a>
            </div>
          </div>
        </div>
      </div>
      <div class="projects-4" style="padding: 0">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 px-0" v-for="category in categories">
                    <div class="card card-fashion card-background" v-bind:style="'background-image: url(' + category.image + ')'">
                        <div class="card-body">
                            <div class="card-title text-left">
                                <h2>
                                    <a v-bind:href="'/#/categories/' + category.id">
                                        {{ category.name }}
                                    </a>
                                </h2>
                            </div>

                            <div class="card-footer text-left">
                                <div class="stats">
                                    <span>
                                        <i class="now-ui-icons users_circle-08"></i>Jessica Hernandez
                                    </span>

                                    <span>
                                        <i class="now-ui-icons tech_watch-time"></i> September 2, 2018
                                    </span>
                                </div>

<!--                                 <div class="stats-link pull-right">
                                    <a href="#pablo" class="footer-link">Yachts</a>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
              </div>
        </div>
      </div>

 
      <!-- <ul>
        <li v-for="error in errors" class="error">
          {{ error }}
        </li>
      </ul> -->
<!--       <div v-for="category in categories">
        <h2>{{ category.name }}</h2>
        <img v-bind:src="category.image" alt="" width=200>
        <div v-for="goal in category.goals">
          <p>{{ goal.title }}</p>
          <img v-bind:src="goal.image" alt="" width="200">
        </div>
      </div> -->
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
    axios
      .get("http://localhost:3000/api/categories")
      .then(response => {
        console.log("categories", response);
        this.categories = response.data;
      })
      .catch(error => this.$router.push("/login"));
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
