<template>
<div id="app">
  <v-app id="inspire">

    <v-menu :drawer="drawer"></v-menu>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>荣耀美业管理系统</v-toolbar-title>
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
    <v-dialog ref="dialog" isShow="true" title="执行成功" description="范德萨发三十范德萨发三十范德萨发三十范德萨发三十范德萨发三十范德萨发三十范德萨发三十范德萨发三十范德萨发三十范德萨发三十范德萨发三十范德萨发三十范德萨发三十范德萨发三十范德萨发三十范德萨发三十范德萨发三十范德萨发三十"></v-dialog>
  </v-app>
  
</div>
</template>

<script>
import OperatorLogin from './components/OperatorLogin';
import Dialog from './components/Dialog';

let _this;
import Menu from './components/Menu';
  export default {
    components: {
      "v-login": OperatorLogin,
      "v-menu": Menu,
      "v-dialog": Dialog,
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
      showDialog(title, description) {
        this.$refs.dialog.show(title, description);
      }
    },
    created() {
      _this = this;
      this.$root.$on('showLogin', function() {
        _this.showLogin();
      });
      this.$root.showLogin = () => {
        _this.showLogin();
      }

      this.$root.showDialog = (title, description) => {
        _this.showDialog(title, description);
      }
    }
  }
</script>