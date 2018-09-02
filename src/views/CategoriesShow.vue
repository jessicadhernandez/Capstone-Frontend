<template>
  <div class="categories-show">

    <div class="page-header page-header-small">


        <div class="page-header-image" data-parallax="true" style="background-image: url('/assets/img/bg44.jpg') ;">
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



<div class="main">

    <div class="container">
        <div class="section">
            <h3 class="title text-center">Goals</h3>
            <br />
            <div class="row">
                <div v-for="goal in category.goals" class="col-md-4">
                    <div class="card card-plain card-blog">
                        <div class="card-image">
                            <a href="#pablo">
                                <img class="img rounded img-raised" v-bind:src="goal.image" />
                            </a>
                        </div>

                        <div class="card-body">
                            <h6 class="category text-info">{{ category.name }}</h6>
                            <h4 class="card-title">
                                <a href="#pablo">{{ goal.title }}</a>
                            </h4>
                            <p class="card-description">
                                {{ goal.description }}<a href="#pablo"> Read More </a>

                                <div class="author">
                                    <img src="/assets/img/olivia.jpg" alt="..." class="avatar img-raised">
                                    <span>Anna Spark</span>
                                <div id="textareaTags">
                                  <div class="row">
                                    <div class="col-md-6">
                                      <div class="title">
                                        <h4>Tags</h4>
                                      </div>
                                      <input type="text" value="travel" class="tagsinput" data-role="tagsinput" data-color="success"/>

                                      <!-- You can change data-color="rose" with one of our colors primary | warning | info | danger | success -->
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>


      <div v-for="goal in category.goals">
        <h4>{{ goal.title }}</h4>
      </div>
      <a href="/#/categories">Back to all categories</a>
    </div>
  </div>
</template>

<script>
var axios = require("axios");
// import axios from "axios";
export default {
  data: function() {
    return {
      category: {},
      errors: []
    };
  },
  created: function() {
    axios
      .get("http://localhost:3000/api/categories/" + this.$route.params.id)
      .then(response => {
        console.log(response);
        this.category = response.data;
      });
  }
};
</script>
