<template>
    <v-navigation-drawer
      v-model="show"
      app
      clipped
    >
      <v-list dense>
        <v-list-item @click="redirectTo('/dashboard')">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>仪表盘</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="redirectTo('/about')">
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="redirectTo('/newCustomer')">
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>开客</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>
<script>
export default {
    props:[
        "drawer"
    ],
    data() {
        return {
            show: true
        }
    },
    methods: {
        redirectTo(pageLocation) {
        this.$router.push(pageLocation);
      }
    },
    watch: {
        drawer() {
            this.show = this.$props.drawer;
        }
    }
}
</script>