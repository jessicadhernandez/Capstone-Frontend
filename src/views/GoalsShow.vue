<template>
  <div class="goals-show">


<div class="page-header page-header-small">


    <div class="page-header-image" data-parallax="true" style="background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2) ), url('/assets/img/marathon.jpg'); z-index: 1">
    </div>


    <div class="content-center">
        <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
                <h2 class="title">{{ goal.title }}</h2>
<!--                 <h4>{{ goal.description }}</h4> -->
            </div>
        </div>
    </div>


</div>



<div class="section">
    <div class="container">
        <div class="row">
<!--             <div class="col-md-12">
                <div class="button-container">
                    <a href="#pablo" class="btn btn-primary btn-round btn-lg">
                        <i class="now-ui-icons text_align-left"></i> Read Article
                    </a>

                    <a href="#pablo" class="btn btn-icon btn-lg btn-twitter btn-round">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#pablo" class="btn btn-icon btn-lg btn-facebook btn-round">
                        <i class="fa fa-facebook-square"></i>
                    </a>
                    <a href="#pablo" class="btn btn-icon btn-lg btn-google btn-round">
                        <i class="fa fa-google"></i>
                    </a>
                </div>
            </div> -->
        </div>
    </div>
    <div class="section">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto">
                    <h3 class="title">Description...</h3>
                    <p>{{goal.description}}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="section section-blog-info">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto">

                    <div class="row">
                        <div class="col-md-6">
                            <div class="blog-tags">
                                Tags:
                                <div class="media-body">
                                  <textarea input type="text" v-model="inputTag" class="form-control" placeholder="Hint, add commas" rows="4"></textarea>
                                  <div class="media-footer">
                                      <button v-on:click="addTag()" class="btn btn-primary btn-round pull-right">
                                          <i class="now-ui-icons ui-1_send"></i> Create
                                      </button>
                                  </div>
                          </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <a href="#pablo" class="btn btn-google btn-round pull-right">
                                <i class="fa fa-google"></i> 232
                            </a>
                            <a href="#pablo" class="btn btn-twitter btn-round pull-right">
                                <i class="fa fa-twitter"></i> 910
                            </a>
                            <a href="#pablo" class="btn btn-facebook btn-round pull-right">
                                <i class="fa fa-facebook-square"></i> 872
                            </a>

                        </div>
                    </div>

                    <hr />

<!--                     <div class="card card-profile card-plain">
                        <div class="row">
                            <div class="col-md-2">
                                <div class="card-avatar">
                                    <a href="#pablo">
                                        <img class="img img-raised" src="/assets/img/mike.jpg">
                                    </a>
                                <div class="ripple-container"></div></div>
                            </div>
                            <div class="col-md-8">
                                <h4 class="card-title">Alec Thompson</h4>
                                <p class="description">I've been trying to figure out the bed design for the master bedroom at our Hidden Hills compound...I like good music from Youtube.</p>
                            </div>
                            <div class="col-md-2">
                                <button type="button" class="btn btn-default pull-right btn-round">Follow</button>
                            </div>
                        </div>
                    </div> -->

                </div>
            </div>
        </div>
    </div>

    <div class="section section-comments">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto">
                    <div class="media-area">
                        <h3 class="title text-center">{{ goal.messages.length}} Comments</h3>
                        <div v-for="comment in goal.messages" class="media">
                            <a class="pull-left" href="#pablo">
                                <div class="avatar">
                                    <img class="media-object img-raised" src="/assets/img/jessica.jpg" alt="..." width="200" />
                                </div>
                            </a>
                            <div class="media-body">
                                <h5 class="media-heading">{{comment.name}} <small class="text-muted">&middot; {{comment.created_at}}</small></h5>

                                <p>{{comment.message}}</p>
                                <br>
                                <br>

                                <!-- <div class="media-footer">
                                    <a href="#pablo" class="btn btn-primary btn-neutral pull-right" rel="tooltip" title="Reply to Comment">
                                        <i class="now-ui-icons ui-1_send"></i> Reply
                                    </a>
                                    <a href="#pablo" class="btn btn-danger btn-neutral pull-right">
                                        <i class="now-ui-icons ui-2_favourite-28"></i> 243
                                    </a>
                                </div> -->
                            </div>
                        </div>
                    </div>
                      <h3 class="title text-center">Post your comment</h3>
                      <div class="media media-post">
                          <a class="pull-left author" href="#pablo">
                              <div class="avatar">
                                  <img class="media-object img-raised" alt="64x64" src="/assets/img/jessica.jpg">
                              </div>
                          </a>
                          <div class="media-body">
                                  <textarea input type="text" v-model="inputComment" class="form-control" placeholder="Write a nice reply or go home..." rows="4"></textarea>
                                  <div class="media-footer">
                                      <button v-on:click="addComment()" class="btn btn-primary pull-right">
                                          <i class="now-ui-icons ui-1_send"></i> Reply
                                      </button>
                                  </div>
                          </div>
                      </div> <!-- end media-post -->
                </div>
            </div>
        </div>
    </div>
</div>

      <a href="/#/goals">Back to all goals</a>
    </div>
</template>

<script>
var axios = require("axios");
// import axios from "axios";
export default {
  data: function() {
    return {
      goal: { messages: [] },
      inputComment: "",
      inputTag: "",
      errors: []
    };
  },
  created: function() {
    axios
      .get("http://localhost:3000/api/goals/" + this.$route.params.id)
      .then(response => {
        console.log("goal", response.data);
        this.goal = response.data;
      });
  },
  methods: {
    searchTag: function(tag) {
      this.$router.push("/goals?tag=" + tag);
    },
    addComment: function(message) {
      var params = {
        message: this.inputComment,
        goal_id: this.$route.params.id
      };
      axios.post("http://localhost:3000/api/messages", params).then(
        function(response) {
          this.goal.messages.push(response.data);
          this.inputComment = "";
        }.bind(this)
      );
    },
    addTag: function(name) {
      var params = {
        name: this.inputTag,
        goal_id: this.$route.params.id
      };
      axios.post("http://localhost:3000/api/tags", params).then(
        function(response) {
          this.goal.tag.push(response.data);
          this.inputTag = "";
        }.bind(this)
      );
    }
  }
};
</script>
