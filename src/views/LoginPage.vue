<template>
  <div class="general" :style="{ backgroundImage: 'url(' + imageFondo + ')' }">
    <img class="imageLogo" :src="imageLogo" alt="logo">
    <h1 class="titulo">EduPets</h1>
    <div class="container">
      <!-- Pills navs -->
      <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li class="nav-item" role="presentation">
          <a class="nav-link me-3" id="tab-login" data-mdb-pill-init href="#pills-login" role="tab"
            aria-controls="pills-login" aria-selected="true" @click="cambiarLogin">Login</a>
        </li>
        <li class="nav-item" role="tab">
          <a class="nav-link" id="tab-register" data-mdb-pill-init href="#pills-register" role="tab"
            aria-controls="pills-register" aria-selected="false" @click="cambiaregistro">Register</a>
        </li>
      </ul>
  <!-- Pills navs -->

  <!-- Pills content -->
    <div class="tab-content">
      <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
        <form @submit.prevent="loginUser">
          <div class="text-center mb-3 mt-2">
            <p>Conectate</p>
            <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
              <i class="fab fa-google"></i>
            </button>

            <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
              <i class="fab fa-github"></i>
            </button>
          </div>

          <p class="text-center">o</p>

          <!-- Email input -->
          <div data-mdb-input-init class="form-outline mb-4">
            <input type="email" id="loginName" class="form-control" v-model="user.email"/>
            <label class="form-label" for="loginName">Email</label>
          </div>

          <!-- Password input -->
          <div data-mdb-input-init class="form-outline mb-4">
            <input type="password" id="loginPassword" class="form-control" v-model="user.password"/>
            <label class="form-label" for="loginPassword">Contraseña</label>
          </div>

          <!-- 2 column grid layout -->
          <div class="row mb-4">
            <div class="col-md-6 d-flex justify-content-center">
              <!-- Checkbox -->
              <div class="form-check mb-3 mb-md-0">
                <input class="form-check-input" type="checkbox" value="" id="loginCheck">
                <label class="form-check-label" for="loginCheck"> Recuerdame </label>
              </div>
            </div>

            <div class="col-md-6 d-flex justify-content-center">
              <!-- Simple link -->
              <a class="forget-register" href="#!">Olvidaste contraseña?</a>
            </div>
          </div>

          <!-- Submit button -->
          <button id="btn-sign" type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">Iniciar sesion</button>
        </form>
      </div>
      <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
        <form>
          <div class="text-center mb-3">
            <p>Conectate</p>
            <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
              <i class="fab fa-google"></i>
            </button>

            <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
              <i class="fab fa-github"></i>
            </button>
          </div>

          <p class="text-center">o:</p>

          <!-- Name input -->
          <div data-mdb-input-init class="form-outline mb-4">
            <input type="text" id="registerName" class="form-control" />
            <label class="form-label" for="registerName">Nombre</label>
          </div>

          <!-- Username input -->
          <div data-mdb-input-init class="form-outline mb-4">
            <input type="text" id="registerUsername" class="form-control" />
            <label class="form-label" for="registerUsername">Usuario</label>
          </div>

          <!-- Email input -->
          <div data-mdb-input-init class="form-outline mb-4">
            <input type="email" id="registerEmail" class="form-control" />
            <label class="form-label" for="registerEmail">Email</label>
          </div>

          <!-- Password input -->
          <div data-mdb-input-init class="form-outline mb-4">
            <input type="password" id="registerPassword" class="form-control" />
            <label class="form-label" for="registerPassword">Contraseña</label>
          </div>

          <!-- Repeat Password input -->
          <div data-mdb-input-init class="form-outline mb-4">
            <input type="password" id="registerRepeatPassword" class="form-control" />
            <label class="form-label" for="registerRepeatPassword">Repite Contraseña</label>
          </div>

          <!-- Checkbox -->
          <div class="form-check d-flex justify-content-center mb-4">
            <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck"
              aria-describedby="registerCheckHelpText" />
            <label class="form-check-label" for="registerCheck">
              Acepta terminos y condiciones
            </label>
          </div>

          <!-- Submit button -->
          <button id="btn-sign-register" type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-3">Registrate</button>
        </form>
      </div>
    </div>
  </div>
<!-- Pills content -->
</div>
</template>
  
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        user: {
          email: '',
          password: '',
        },
        imageFondo:'https://media.istockphoto.com/id/1417882544/es/foto/gran-grupo-de-gatos-y-perros-mirando-a-la-c%C3%A1mara-sobre-fondo-azul.jpg?s=1024x1024&w=is&k=20&c=M_QTdfV5N9isysghP0VhE_y63omRrkUjwOvLIScbThE=',
        imageLogo:'https://img.freepik.com/vector-gratis/logo-animal-perro-dibujado-mano_23-2148910632.jpg',
      };
    },
    methods: {
      cambiaregistro(){
        var registroTab = document.getElementById('pills-register');
        var loginTab = document.getElementById('pills-login');
        registroTab.classList.add('show', 'active');
        loginTab.classList.remove('show', 'active');
      },
      cambiarLogin(){
        var registroTab = document.getElementById('pills-register');
        var loginTab = document.getElementById('pills-login');
        registroTab.classList.remove('show', 'active');
        loginTab.classList.add('show', 'active');
      },
      loginUser() {
        if (!this.user.email || !this.user.password) {
          alert('Debes llenar todos los campos')
        }
        else {
          axios.get('https://raw.githubusercontent.com/shaka0241/tiendaMascotaApi/main/login.json').then((resp) => {
            if (this.user.email === resp.data.loginRequest.email && this.user.password === resp.data.loginRequest.password) {
              console.log('logueado');
              this.$router.push('/home');
            } else {
              console.log('no logueado')
              }
            })
          .catch((error) => {
            console.log("error en la solicitud", error)
            })
          }
        }
      },
    }
</script>
  
<style scoped>
.general{
  position: absolute;
  background-repeat: no-repeat; 
  background-size: cover; 
  background-position: center; 
  width: 100%;
  height: 100%;
  overflow:auto;
}
.imageLogo{
  display: flex;
  justify-self: center;
  width:120px;
  height:120px;
  margin-top:10px;
}
.titulo{
  text-align: center;
  margin-top: 10px;
  font-size: 30px;
}
.container {
  background-color:rgb(64, 147, 150, 0.7);
  width: 400px;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius:10px;
  Margin-top: 20px;
  padding: 30px;
}
.btn-link{
  color: black;
}
.nav-item{
  background-color:black;
  border-radius: 10px;
  margin-right: 5px;
  margin-left: 5px;
}
.nav-link{
  color: white;
}
.text-center{
  color: rgb(250, 239, 218);
}
.form-label{
  color: rgb(250, 239, 218)
}
.form-check-label{
  color: rgb(250, 239, 218)
}
.forget-register{
  color: rgb(14, 67, 83);
  text-decoration:none;
}
#btn-sign-register{
  background-color:black;
}
#btn-sign{
  background-color:black;
}
#loginCheck:checked{
  background-color:black;
  border: 2px solid gray;
}
#registerCheck:checked{
  background-color:black;
  border: 2px solid gray;
}
</style>