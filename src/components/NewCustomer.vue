<template>
  <v-card :elevation="5" class="ml-10 mt-2 mx-auto" width="800px" >
      
    
    <v-img src="https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg" height="200px">
    <v-card-title >Add a new customer</v-card-title>
    </v-img>
    <v-avatar>
        <img src="https://cdn.vuetifyjs.com/images/john.jpg">
    </v-avatar>
    <v-row justify="end" class="mt-n8">
        <v-col cols="2">
        <v-switch v-model="notice" label="Notice"></v-switch>
        </v-col>
    </v-row>
    <v-form>
    <v-row class="mt-n">
      <v-col class="col-lg-10 ml-10">
        <v-text-field label="Name" v-model="customer.name" hint="Please entry your name" :persistent-hint="notice" clearable></v-text-field>
        <v-text-field
        label="Nick"
        hint="Please entry nick. e.g: Miss Wang"
        :persistent-hint="notice"
        clearable
        v-model="customer.nick"
        ></v-text-field>
        <v-layout>
            <span class="my-auto grey--text">Gender</span>
            <v-btn-toggle v-model="customer.gender" background-color="transparent" borderless>
                <v-btn text class="ml-5" background-color="transparent" value="1" width="110" >
                    <v-icon v-show="customer.gender==1" light left color="orange">mdi-checkbox-marked-circle</v-icon>Man
                </v-btn>
                <v-btn class="ml-5" color="transparent" value="2" width="110">
                    <v-icon v-show="customer.gender==2" light left color="orange">mdi-checkbox-marked-circle</v-icon>Women
                </v-btn>
            </v-btn-toggle>
        </v-layout>
        <v-text-field v-model="customer.birthday" v-mask="birthdayMask" label="Birthday" hint="Month-Day e.g:06/20" :persistent-hint="notice" clearable></v-text-field>
        
        <v-text-field v-model="customer.address" label="Address" hint="Please entry your address, I can be delivery to you" :persistent-hint="notice" clearable></v-text-field>
        <v-select 
            v-model="customer.referrer" 
            label="Referrer" 
            :items="servers" 
            item-text="name" 
            item-value="id" 
            hint="Please select your referrer"
            :persistent-hint="notice" 
            chips 
            return-object
            clearable>
        </v-select>
        <v-select
            v-model="customer.customerChannel"
            label="Customer channel"
            :items="customerChannels"
            item-text="text"
            item-value="id"
            hint="What way did you know us?"
            :persistent-hint="notice"
            clearable>
        </v-select>
        <v-text-field v-model="customer.identityNo" label="Identity number" hint="Customer identity card number" :persistent-hint="notice" clearable></v-text-field>
        <v-layout justify-end>
            <v-btn class="primary my-3" large @click="save();">保存</v-btn>
            <v-btn class="grey my-3 mx-5" large @click="ss = !ss">取消</v-btn>

        <transition name="fade">
            <p v-show="ss">{{ customerData }}</p>
        </transition>
            
        </v-layout>
      </v-col>
      <v-col>
      </v-col>
    </v-row>
    </v-form>
  </v-card>
</template>
<script>
export default {
    data: () => ({
        notice: false,
        gender: 0,
        birthdayMask: '##-##',
        selectedServer: [],
        servers: [
            { id:1, name: 'Yang' },
            { id:2, name: 'Li' },
            { id:3, name: 'Zhao' },
            { id:4, name: 'Zhang' },
        ],
        selectedCustomerChannel: {},
        customerChannels:[
            {id: 1, text: 'Newspaper'},
            {id: 2, text: 'TV'}
        ],
        customerData: {
            name: '',
            nick: '',
            gender: null,
            birthday: null,
            referrer: null,
            customerChannel: null,
            identityNo: '',
            address:'',
        },
        ss: false
    }),
    computed: {
        genderLable() {
            return this.gender? 'Man': 'Women';
        },
        customer() {
            return this.customerData;
        }
    },
    methods: {
        save() {
            this.initCustomer();
            this.$root.showLogin();
        },
        cancle() {
            
        },
        initCustomer() {
            this.customerData = {
                name: '',
                nick: '',
                gender: null,
                birthday: null,
                referrer: null,
                customerChannel: null,
                identityNo: '',
                address:'',
            };
        },
    },
    
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 1s
}

.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
    opacity: 0
}
</style>