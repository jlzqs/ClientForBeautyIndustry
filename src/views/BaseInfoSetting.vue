<template>
    <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-header>
                店资料设置
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-shopInfo></v-shopInfo>
            </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
            <v-expansion-panel-header>
                部门设置
            </v-expansion-panel-header>
            <v-expansion-panel-content>
               <v-departmentInfo></v-departmentInfo> 
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>
<script>
import ShopSetting from '../components/BaseInfoSettings/ShopSetting';
import DepartmentSetting from '../components/BaseInfoSettings/DepartmentSetting';

export default {
    components: {
        'v-shopInfo': ShopSetting,
        'v-departmentInfo': DepartmentSetting
    },
    

}
</script>