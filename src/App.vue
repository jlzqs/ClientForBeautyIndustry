<template>
<div id="app">
  <v-app id="inspire">

    <v-menu :drawer="drawer"></v-menu>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Management System</v-toolbar-title>
       <v-spacer></v-spacer>
          <v-btn @click="showLogin()">Login</v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
    <v-login ref="login"></v-login>
  </v-app>
  
</div>
</template>

<script>
import OperatorLogin from './components/OperatorLogin';
let _this;
import Menu from './components/Menu';
  export default {
    components: {
      "v-login": OperatorLogin,
      "v-menu": Menu,
    },
    props: {
      source: String,
    },
    data: () => ({
      drawer: true,
      _this: null,
      o:null
    }),
    methods: {
      showLogin() {
        
        // window.scrollTo(0,0);
        this.$refs.login.show();
      },
    },
    created() {
      _this = this;
      this.$root.$on('showLogin', function() {
        _this.showLogin();
      });
      this.$root.showLogin = () => {
        _this.showLogin();
      }
    }
  }
</script>