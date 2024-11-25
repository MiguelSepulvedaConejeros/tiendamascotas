<template>
    <div class="general" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
      <h1>EduPets</h1>
      <div class="container">
        <!-- Pills navs -->
        <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link me-3" id="tab-login" data-mdb-pill-init href="#pills-login" role="tab"
              aria-controls="pills-login" aria-selected="true" @click="setActiveTab('login')">Login</a>
          </li>
          <li class="nav-item" role="tab">
            <a class="nav-link" id="tab-register" data-mdb-pill-init href="#pills-register" role="tab"
              aria-controls="pills-register" aria-selected="false" @click="setActiveTab('register')">Register</a>
          </li>
        </ul>
        <!-- Pills navs -->
  
        <!-- Pills content -->
        <div class="tab-content">
          <div class="tab-pane fade" :class="{ show: activeTab === 'login', active: activeTab === 'login' }" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
            <form>
              <div class="text-center mb-3 mt-2">
                <p>Sign in with:</p>
                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-facebook-f"></i>
                </button>
  
                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-google"></i>
                </button>
  
                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-twitter"></i>
                </button>
  
                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-github"></i>
                </button>
              </div>
  
              <p class="text-center">or:</p>
  
              <!-- Email input -->
              <div data-mdb-input-init class="form-outline mb-4">
                <input type="email" id="loginName" class="form-control" />
                <label class="form-label" for="loginName">Usuario</label>
              </div>
  
              <!-- Password input -->
              <div data-mdb-input-init class="form-outline mb-4">
                <input type="password" id="loginPassword" class="form-control" />
                <label class="form-label" for="loginPassword">Contraseña</label>
              </div>
  
              <!-- 2 column grid layout -->
              <div class="row mb-4">
                <div class="col-md-6 d-flex justify-content-center">
                  <!-- Checkbox -->
                  <div class="form-check mb-3 mb-md-0">
                    <input class="form-check-input" type="checkbox" value="" id="loginCheck">
                    <label class="form-check-label" for="loginCheck"> Remember me </label>
                  </div>
                </div>
  
                <div class="col-md-6 d-flex justify-content-center">
                  <!-- Simple link -->
                  <a class="forget-register" href="#!">Forget password?</a>
                </div>
              </div>
  
              <!-- Submit button -->
              <button id="btn-sign" type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">Iniciar sesion</button>
  
              <!-- Register buttons -->
              <div class="text-center">
                <p>Not a member? <a class="forget-register" href="#!" @click.prevent="setActiveTab('register')">Register</a></p>
              </div>
            </form>
          </div>
          <div class="tab-pane fade" :class="{ show: activeTab === 'register', active: activeTab === 'register' }" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
            <form>
              <div class="text-center mb-3">
                <p>Sign up with:</p>
                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn