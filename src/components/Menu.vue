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
            <v-list-item-title>概览</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="redirectTo('/baseInfoSetting')">
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>收银</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- <v-list-item @click="redirectTo('/about')">
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
        <v-list-item @click="redirectTo('/newCustomer')">
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>开客</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="redirectTo('/baseInfoSetting')">
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>基本设置</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-action>
              <v-icon>mdi-settings</v-icon>
            </v-list-item-action>
            <v-list-item-title>运营设置</v-list-item-title>
          </template>
          <v-list-item @click="redirectTo('/baseInfoSetting')">
            <v-list-item-title class="text-left ml-12 pl-8">会员卡设置</v-list-item-title>
        </v-list-item> 
        <v-list-item @click="redirectTo('/baseInfoSetting')">
          <v-list-item-title class="text-left ml-12 pl-8 ">次卡设置</v-list-item-title>
        </v-list-item>
        </v-list-group>

        
      <v-list-group>
          <template v-slot:activator>
            <v-list-item-action>
              <v-icon>mdi-settings</v-icon>
            </v-list-item-action>
            <v-list-item-title>报表</v-list-item-title>
          </template>
          <v-list-item @click="redirectTo('/baseInfoSetting')">
            <v-list-item-title class="text-left ml-12 pl-8">日报</v-list-item-title>
        </v-list-item> 
        <v-list-item @click="redirectTo('/baseInfoSetting')">
          <v-list-item-title class="text-left ml-12 pl-8 ">客户明细</v-list-item-title>
        </v-list-item>
        <v-list-item @click="redirectTo('/baseInfoSetting')">
          <v-list-item-title class="text-left ml-12 pl-8 ">收银明细</v-list-item-title>
        </v-list-item>
        </v-list-group>



        <v-list-group>
          <template v-slot:activator>
            <v-list-item-action>
              <v-icon>mdi-settings</v-icon>
            </v-list-item-action>
            <v-list-item-title>系统设置</v-list-item-title>
          </template>
          <v-list-item @click="redirectTo('/baseInfoSetting')">
            <v-list-item-title class="text-left ml-12 pl-8">权限设置</v-list-item-title>
        </v-list-item> 
        </v-list-group>
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