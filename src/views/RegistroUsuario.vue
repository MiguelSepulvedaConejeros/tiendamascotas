<template>
  <div class="general" :style="{ backgroundImage: 'url(' + imageFondo + ')' }">
    <img class="imageLogo" :src="imageLogo" alt="logo">
    <h1 class="titulo">EduPets</h1>
    <div class="container">
     <div class="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
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
            <input type="text" id="registerName" class="form-control" v-model="register.name"/>
            <label class="form-label" for="registerName">Nombre</label>
          </div>

          <!-- Email input -->
          <div data-mdb-input-init class="form-outline mb-4">
            <input type="email" id="registerEmail" class="form-control"
            v-model="register.email"/>
            <label class="form-label" for="registerEmail">Email</label>
          </div>

          <!-- Username input -->
          <div data-mdb-input-init class="form-outline mb-4">
            <input type="text" id="registerNumber" class="form-control" 
            v-model="register.phone"/>
            <label class="form-label" for="registerUsername">Telefono</label>
          </div>

          <!-- Password input -->
          <div data-mdb-input-init class="form-outline mb-4">
            <input type="password" id="registerPassword" class="form-control" 
            v-model="register.password"/>
            <label class="form-label" for="registerPassword">Contraseña</label>
          </div>

          <!-- Repeat Password input -->
          <div data-mdb-input-init class="form-outline mb-4">
            <input type="password" id="registerRepeatPassword" class="form-control" v-model="register.password"/>
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
          <button id="btn-sign-register" type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-3" @click="confimaUsuario">Registrate</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'RegistroUsuario',
  data() {
    return {
      imageFondo:'https://media.istockphoto.com/id/1417882544/es/foto/gran-grupo-de-gatos-y-perros-mirando-a-la-c%C3%A1mara-sobre-fondo-azul.jpg?s=1024x1024&w=is&k=20&c=M_QTdfV5N9isysghP0VhE_y63omRrkUjwOvLIScbThE=',
      imageLogo:'https://img.freepik.com/vector-gratis/logo-animal-perro-dibujado-mano_23-2148910632.jpg',
      register:{
        name: '',
        email: '',
        phone: '',
        password: '',
      }
      };
    },
    mounted() {
      axios.get('https://raw.githubusercontent.com/shaka0241/tiendaMascotaApi/main/registroreq.json')
      .then(resp => {
        this.register = resp.data.registerUser; 
      })
      .catch(error => {
      console.error('Error al obtener los datos:', error);
      });
    },
    methods: {
      confimaUsuario(){
        this.$router.push('/confirmacionusuario')
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

  border-radius:10px;
  Margin-top: 20px;
  padding: 30px;
}
.btn-link{
  color: black;
}
.text-center{
  color: rgb(250, 239, 218);
  font-size: 20px
}
.form-label{
  color: rgb(250, 239, 218)
}
.form-check-label{
  color: rgb(250, 239, 218)
}
.btn-link{
  color: black;
}
#registerCheck:checked{
  background-color:black;
  border: 2px solid gray;
}
#btn-sign-register{
  background-color:black;
}
</style>