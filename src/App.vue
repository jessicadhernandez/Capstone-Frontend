<template>
<div id="app">
    <!-- Navbar -->
    <!-- navbar navbar-expand-lg  navbar-absolute navbar-transparent -->
    <nav class="navbar navbar-expand-lg bg-white fixed-top navbar-transparent" color-on-scroll="500">
        <div class="container">
            <div class="navbar-translate">
                        <div class="row">
                            <form v-on:submit.prevent="onSearch()">
                                <div class="form-group">
                                    <input v-model="searchTerms" type="text" placeholder="Search for goals" class="form-control form-control" />
                                </div>
                            </form>
                        </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse" data-nav-image="./assets/img/blurred-image-1.jpg" data-color="orange">
                <ul class="navbar-nav ml-auto">                
                <a class="navbar-brand now-ui-icons ui-1_simple-add" href="/#/goal" data-placement="bottom"> 
                    Add a goal
                </a>
                    <li class="nav-item dropdown">
                                <a href="/#/" class="nav-link">
                                    <i class="now-ui-icons shopping_shop"></i>
                                    Home
                                </a>   
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown">
                            <i class="now-ui-icons design_bullet-list-67" aria-hidden="true"></i>
                            <p>Bucket List</p>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="/#/goals">
                                <i class="now-ui-icons sport_trophy"></i>
                                Inspiration
                            </a>
                            <a class="dropdown-item" href="/#/signup">
                                <i class="now-ui-icons ui-2_settings-90"></i>
                                Signup
                            </a>
                            <a class="dropdown-item" href="/#/login">
                                <i class="now-ui-icons text_align-left"></i>
                                Login
                            </a>
                            <a class="dropdown-item" href="/#/logout">
                                <i class="now-ui-icons sport_user-run"></i>
                                Logout
                            </a>
                            <a class="dropdown-item" href="/#/categories">
                                <i class="now-ui-icons education_paper"></i>
                                Categories
                            </a>    
                            <a class="dropdown-item" href="/#/profile">
                                <i class="now-ui-icons users_single-02"></i>
                                Profile Page
                            </a>
                        </div>
                    </li>
                </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- End Navbar -->

    <router-view/>
    
        <footer class="footer " >
            <div class="container">
                <nav>
                    <ul>
                        <li>
                            <a href="#creative">
                                Creative Tim
                            </a>
                        </li>
                        <li>
                            <a href="#creative">
                               About Us
                            </a>
                        </li>
                        <li>
                            <a href="#creative">
                               Blog
                            </a>
                        </li>
                        <li>
                            <a href="#creative">
                                License
                            </a>
                        </li>
                    </ul>

                </nav>

                    <ul class="social-buttons pull-right">
                            <li>
                                <a href="https://twitter.com/CreativeTim" class="btn btn-icon btn-neutral btn-twitter">
                                    <i class="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/CreativeTim" class="btn btn-icon btn-neutral btn-dribbble">
                                    <i class="fa fa-dribbble"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/CreativeTimOfficial" class="btn btn-icon btn-neutral btn-google">
                                    <i class="fa fa-google-plus"></i>
                                </a>
                            </li>
                        </ul>
            </div>
        </footer>
  </div>
</template>

<style>
</style>

<script>
export default {
    data: function() {
        return {
            searchTerms: ""
        };
    },
    methods: {
        onSearch: function() {
            console.log("you searched something...", this.searchTerms);
            var query = this.searchTerms;
            this.searchTerms = "";
            if (this.$route.path !== "/goals") {
                this.$router.push("/goals?tag=" + query);
            } else {
                this.$router.push("/goals?tag=" + query);
                window.location.reload();
            }
        }
    }
};
</script>
