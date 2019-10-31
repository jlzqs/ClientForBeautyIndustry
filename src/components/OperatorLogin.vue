<template>
<v-container >
    <v-container @click="hide();">

    <v-overlay :value="isShow" z-index=50>
    </v-overlay>
        
    </v-container>
    <v-container v-show="isShow" style="width: 600px; position: fixed; display: block; top:10%; left: 0; right:0; margion: 0 auto;z-index:100">
    <v-form>
            <v-card class="text-no-wrap" outlined>
                <v-card-title>Login</v-card-title>   
                <v-text-field
                    class="px-10 mt-8"
                    label="User name"
                    hint="Please type your name"
                    persistent-hint
                    outlined
                >
                </v-text-field>
                <v-text-field
                    class="px-10 mt-8"
                    type="password"
                    label="Password"
                    hint="Please type the password"
                    persistent-hint
                    outlined
                >
                </v-text-field>
                <v-row
                    align="center"
                    juestify="end"
                >
                <v-col class="col-lg-7"></v-col>
                    <v-col lg="2">
                        <v-btn
                            class="mt-4"
                            color="success"
                            @click="hide();">Login</v-btn>
                    </v-col>
                    <v-col lg="2">
                        <v-btn
                            class="mt-4"
                            color="secondry"
                            @click="hide();">Cancle</v-btn>
                            <!-- <v-btn color="primary" >登录</v-btn> -->
                    </v-col>
                </v-row>
            </v-card>
        </v-form>
</v-container>
</v-container>
</template>
<script>
export default {
    data() {
        return {
            isShow: false
        };
    },
    methods: {
        hide() {
            this.isShow = false;
            
        },
        show() {
            this.isShow = true;
        }
    },
}
</script>