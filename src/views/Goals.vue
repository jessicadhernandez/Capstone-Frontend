<template>
  <div class="home">
    <div class="page-header page-header-small">


        <div class="page-header-image" data-parallax="true" style="background-image: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2) ), url('/assets/img/project1.jpg'); z-index: 1">>
        </div>

        <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">A Place to Create and Discover New Goals</h2>
              <a href="/#/goal" class="btn btn-primary btn-round">
                   <i class="now-ui-icons ui-2_favourite-28"></i>
                   New Goal
               </a>
          </div>
        </div>
      </div>
    </div>

              <ul>
                <li v-for="error in errors" class="error">
                  {{ error }}
                </li>
              </ul>
              Search: <input type="text" v-model="searchFilter" list="titles">
              <datalist id="titles">
                <option v-for="goal in goals">{{ goal.title }} 
                </option>
              </datalist>

              <div v-for="goal in orderBy(filterBy(goals, searchFilter, 'title'), 'title')" v-on:click="completeGoal(inputGoal)">
<!--               <span v-bind:class="{completed: goal.completed}">{{ goal.title }}</span>                
                <h2>{{ goal.id }}</h2>
                <h2>{{ goal.title }}</h2>
                <h4>{{ goal.start_date }}</h4>
                <p>{{ goal.end_date }}</p>
                <p>{{ goal.description }}</p>
                <p>{{ goal.completed }}</p>
                <p>{{ goal.image }}</p>
                <p>{{ goal.category }}</p>    -->                                      
<!--                 <a v-bind:href=" '/#/goals/' + goal.id ">View details</a> -->
              </div>
  <div class="blogs-2" id="blogs-2">

      <div class="container">
          <div class="row">
              <div class="col-md-10 ml-auto mr-auto">
                  <h2 class="title">Goals</h2>

                  <br />

                  <div class="row justify-content-center">
                      <div v-for="goal in goals" class="col-md-5">
                          <div class="card card-plain card-blog">
                              <div class="card-image">
                                  <a href="#pablo">
                                      <img class="img img-raised rounded" v-bind:src="goal.image" />
                                  </a>
                              </div>

                              <div class="card-body">
                                  <h6 class="category text-info">{{ goal.title }}</h6>
                                  <h5 class="card-title">
                                      <a href="#pablo">Alexa brings hands-free TV to more devices</a>
                                  </h5>
                                  <p class="card-description">
                                      Alexa’s latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward, rewind and more, without having to first invoke a specific skill, or even press a button on their remote. <a href="#pablo">Read More </a>
                                  </p>
                              </div>
                          </div>
                      </div>


                  </div>

              </div>

          </div>
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
      goals: [],
      title: "",
      start_date: "",
      end_date: "",
      description: "",
      completed: "",
      image: "",
      category: "",
      inputGoal: "",
      searchFilter: "",
      errors: []
    };
  },
  created: function() {
    console.log("Query parameters", this.$route.query);
    var url = "http://localhost:3000/api/goals";
    if (this.$route.query.tag) {
      url += "?tag=" + this.$route.query.tag;
    }
    axios.get(url).then(response => {
      console.log(response);
      this.goals = response.data;
    });
  },
  methods: {
    completeGoal: function(goal) {
      // var index = this.goals.indexOf(inputGoal);
      // this.goals.splice(index, 1);
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
  }
};
</script>
