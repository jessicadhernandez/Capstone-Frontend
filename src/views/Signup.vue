<template>
    <div class="signup">
        <div class="container">
          <form v-on:submit.prevent="submit()">
            <h1>Signup</h1>
            <ul>
              <li class="text-danger" v-for="error in errors">{{ error }}</li>
            </ul>
            <div class="form-group">
              <label>Name:</label> 
              <input type="text" class="form-control" v-model="name">
            </div>
            <div class="form-group">
              <label>Email:</label>
              <input type="email" class="form-control" v-model="email">
            </div>
            <div class="form-group">
              <label>Password:</label>
              <input type="password" class="form-control" v-model="password">
            </div>
            <div class="form-group">
              <label>Password confirmation:</label>
              <input type="password" class="form-control" v-model="passwordConfirmation">
            </div>
            <input type="submit" class="btn btn-primary" value="Submit">
          </form>
        </div>
      </div>
</template>


