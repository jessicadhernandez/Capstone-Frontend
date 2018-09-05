<template>
  <div class="home">
    <div class="page-header header-filter">
        <div class="page-header-image" style="background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/assets/img/bg45.jpg'); z-index: 1"></div>
            <div class="content-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h1 class="title">Create a category!</h1>
                        <h5 class="description">Orangize your goals by creating categories.</h5>
                    </div>
                    <div class="col-md-10 ml-auto mr-auto">
                        <div class="card card-raised card-form-horizontal card-plain" data-background-color>
                            <div class="card-body">
                                <form method="" action="/#/categories">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <input type="text" v-model="name" value="" placeholder="Name" class="form-control" />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <input type="text" v-model="image" value="" placeholder="Enter a url link" class="form-control" />
                                            </div>
                                        </div>
<!--                                         <div class="col-md-3">
                                            <div class="form-group">
                                                <input type="password" value="" placeholder="Password" class="form-control" />
                                            </div>
                                        </div> -->
                                        <div class="col-md-4">
                                            <button class="btn btn-primary btn-round btn-block" v-on:click="createCategory()">Create category</button>                                          
<!--                                             <button type="button" class="btn btn-primary btn-round btn-block">Join Us</button> -->
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>    
<!--     <h1>New category</h1>
    <ul>
      <li v-for="error in errors" class="error">
        {{ error }}
      </li>
    </ul>
    <div>
      name: <input type="text" v-model="name">
      image: <input type="text" v-model="image" placeholder="Enter a url link">
      </div> -->

<!--       <div class="fileinput fileinput-new text-center" data-provides="fileinput">
          <div class="fileinput-new thumbnail img-circle img-raised">
        <img src="https://epicattorneymarketing.com/wp-content/uploads/2016/07/Headshot-Placeholder-1.png" alt="...">
          </div>
          <div class="fileinput-preview fileinput-exists thumbnail img-circle img-raised"></div>
          <div>
          <span class="btn btn-raised btn-round btn-default btn-file">
              <span class="fileinput-new">Add Photo</span>
        <span class="fileinput-exists">Change</span>
        <input type="file" name="..." /></span>
              <br />
              <a href="#pablo" class="btn btn-danger btn-round fileinput-exists" data-dismiss="fileinput"><i class="fa fa-times"></i> Remove</a>
          </div>
      </div> -->
<!--       <button v-on:click="createCategory()">Create category</button>
    </div> -->
<!--     <h1>Categories</h1>
    <div v-for="category in categories">
      <h2>{{ category.name }}</h2>
      <h4>{{ category.image }}</h4>
    </div> -->
<!--   </div> -->
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
          this.categories = { name: "", image: "" };
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
