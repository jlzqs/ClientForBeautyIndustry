<template>
<v-container v-show="isShow">
    <v-container @click="hide()">
        <v-overlay z-index=50 ></v-overlay>
    </v-container>
    <v-container style="width: 600px; position: fixed; display: block; top:10%; left: 0; right:0; margion: 0 auto;z-index:100">
    <v-card>
        <v-card-title class="indigo darken-2 white--text title">
            <span>{{ title }}</span>
        </v-card-title>
        <v-row>
        <v-card-text class="ma-2">
            <span class="ml-6 title">{{ description }}</span>
        </v-card-text>
        </v-row>
    </v-card>
    </v-container>
</v-container>
</template>
<script>
export default {
    data() {
        return {
            isShow: false,
            title: '',
            description: '',
        }
    },
    methods: {
        hide() {
            this.isShow = false;
        },
        show(title, description) {
            this.title = title;
            this.description = description;
            this.isShow = true;
        }
    }
}
</script>