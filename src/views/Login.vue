<template>
  <div class="login">
<!--     <div class="container"> -->
                <div class="page-header" filter-color="orange">
        <!-- <div class="page-header-image" style="background-image:url(assets/img/login.jpg)"></div> -->
        <div class="page-header-image" style="background-image: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2) ), url('/assets/img/login.jpg'); z-index: 1"></div>
        <div class="content">
            <div class="container">
                <div class="col-md-5 ml-auto mr-auto">
                    <div class="card card-login card-plain">
                      <ul>
                        <li class="text-danger" v-for="error in errors">{{ error }}</li>
                      </ul>
                        <form v-on:submit.prevent="submit()" class="form" method="" action="#">
                            <div class="card-header text-center">
                                <div class="logo-container">
                                    <img src="assets/img/now-logo.png" alt="">
                                </div>
                            </div>
                            <div class="card-body">
                              <div class="input-group form-group-no-border input-lg">
                                <div class="input-group-prepend">
                                  <span class="input-group-text"><i class="now-ui-icons ui-1_email-85"></i></span>
                                </div>
                                <input type="Email" class="form-control" v-model="email">
                              </div>
                              <div class="input-group form-group-no-border input-lg">
                                <div class="input-group-prepend">
                                  <span class="input-group-text"><i class="now-ui-icons text_caps-small"></i></span>
                                </div>
                                <input type="Password" class="form-control" v-model="password">
                              </div>
                            </div>
                            <div class="card-footer text-center">
                                      <input type="submit" class="btn btn-primary btn-round" value="Get Started">
                            </div>
                            <div class="pull-left">
                                <h6><a href="#pablo" class="link footer-link">Create Account</a></h6>
                            </div>

                            <div class="pull-right">
                                <h6><a href="#pablo" class="link footer-link">Need Help?</a></h6>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
<!-- <button class="btn btn-primary" data-toggle="modal" data-target="#loginModal">
  <i class="now-ui-icons users_single-02"></i>
  Login Modal
</button>
<div class="modal fade modal-primary" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-login">
    <div class="modal-content">
      <div class="card card-login card-plain">
        <div class="modal-header justify-content-center">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
            <i class="now-ui-icons ui-1_simple-remove"></i>
          </button>

          <div class="header header-primary text-center">
                          <div class="logo-container">
                              <img src="/assets/img/now-logo.png" alt="">
                          </div>
                      </div>
        </div>
        <div class="modal-body" data-background-color>
          <form class="form" method="" action="">
            <div class="card-body">
              <div class="input-group form-group-no-border input-lg">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="now-ui-icons users_circle-08"></i></span>
                </div>
                <input type="text" class="form-control" placeholder="First Name...">
              </div>

              <div class="input-group form-group-no-border input-lg">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="now-ui-icons ui-1_lock-circle-open"></i></span>
                </div>
                <input type="text" class="form-control" placeholder="Password...">
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer text-center">
          <a href="#pablo" class="btn btn-neutral btn-round btn-lg btn-block">Get Started</a>
        </div>
      </div>
    </div>
  </div>
</div> -->
<!--       <form v-on:submit.prevent="submit()">
        <h1>Login</h1> -->
<!--         <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul> -->
<!--         <div class="form-group"> -->
<!--           <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div> -->
<!--         <input type="submit" class="btn btn-primary" value="Submit"> -->
<!--       </form> -->
    </div>
  </div>
</div>
</div>
</div>
</div>
</template>

<script>
import axios from "axios";

export default {
  template: "#login-page",
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("http://localhost:3000/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>
