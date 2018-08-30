<template>
<div id="app">

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-white fixed-top" color-on-scroll="500">
        <div class="container">


            <div class="navbar-translate">
                <a class="navbar-brand" href="/#/goal" rel="tooltip" title="Designed by Invision. Coded by Creative Tim"data-placement="bottom"> 
                    Add a goal
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                </button>
            </div>

            <div class="collapse navbar-collapse" data-nav-image="./assets/img/blurred-image-1.jpg" data-color="orange">
                <ul class="navbar-nav ml-auto">


            <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdownMenu" href="#" data-toggle="dropdown">
                            <i class="now-ui-icons design_app"></i>
                            <p>Components</p>
                        </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="index-2.html">
                                <i class="now-ui-icons business_chart-pie-36"></i>
                                All Components
                            </a>
                <a class="dropdown-item" href="https://creativetimofficial.github.io/now-ui-kit-pro/#/components?ref=nuk-pro-doc">
                                <i class="now-ui-icons files_single-copy-04"></i>
                                Documentation
                            </a>
              </div>
                    </li>

                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown">
                            <i class="now-ui-icons files_paper" aria-hidden="true"></i>
                            <p>Sections</p>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="/#/">
                                <i class="now-ui-icons shopping_box"></i>
                                Home
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
                            <a class="dropdown-item" href="/#/goals">
                                <i class="now-ui-icons business_money-coins"></i>
                                Goals
                            </a>
                            <a class="dropdown-item" href="sections.html#testimonials">
                                <i class="now-ui-icons ui-2_chat-round"></i>
                                Testimonials
                            </a>
                            <a class="dropdown-item" href="sections.html#contactus">
                                <i class="now-ui-icons tech_mobile"></i>
                                Contact Us
                            </a>
                        </div>
                    </li>

                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown">
                            <i class="now-ui-icons design_image" aria-hidden="true"></i>
                            <p>Examples</p>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="examples/about-us.html">
                                <i class="now-ui-icons business_bulb-63"></i>
                                About-us
                            </a>
                            <a class="dropdown-item" href="examples/blog-post.html">
                                <i class="now-ui-icons text_align-left"></i>
                                Blog Post
                            </a>
                            <a class="dropdown-item" href="examples/blog-posts.html">
                                <i class="now-ui-icons design_bullet-list-67"></i>
                                Blog Posts
                            </a>
                            <a class="dropdown-item" href="examples/contact-us.html">
                                <i class="now-ui-icons location_pin"></i>
                                Contact Us
                            </a>
                            <a class="dropdown-item" href="examples/landing-page.html">
                                <i class="now-ui-icons education_paper"></i>
                                Landing Page
                            </a>
                            <a class="dropdown-item" href="examples/login-page.html">
                                <i class="now-ui-icons users_circle-08"></i>
                                Login Page
                            </a>
                            <a class="dropdown-item" href="examples/pricing.html">
                                <i class="now-ui-icons business_money-coins"></i>
                                Pricing
                            </a>
                            <a class="dropdown-item" href="examples/ecommerce.html">
                                <i class="now-ui-icons shopping_shop"></i>
                                Ecommerce Page
                            </a>
                            <a class="dropdown-item" href="examples/product-page.html">
                                <i class="now-ui-icons shopping_bag-16"></i>
                                Product Page
                            </a>
                            <a class="dropdown-item" href="examples/profile-page.html">
                                <i class="now-ui-icons users_single-02"></i>
                                Profile Page
                            </a>
                            <a class="dropdown-item" href="examples/signup-page.html">
                                <i class="now-ui-icons tech_mobile"></i>
                                Signup Page
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- End Navbar -->                    
    <br>
    <br>
    <br>

    <router-view/>

    <footer class="footer "  data-background-color="black">
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
            <div class="copyright">
                &copy;, Designed by <a href="http://www.invisionapp.com/">Invision</a>. Coded by <a href="https://www.creative-tim.com/">Creative Tim</a>.
            </div>
        </div>
    </footer>
    
  </div>
</template>

<style>
</style>
