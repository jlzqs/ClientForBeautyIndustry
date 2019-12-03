<template>
    <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-header>
                店资料设置
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-shopInfoSetting></v-shopInfoSetting>
            </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
            <v-expansion-panel-header>
                部门设置
            </v-expansion-panel-header>
            <v-expansion-panel-content>
               <v-departmentInfoSetting></v-departmentInfoSetting>
            </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
            <v-expansion-panel-header>
                项目系列设置
            </v-expansion-panel-header>
            <v-expansion-panel-content>
               <v-serviceTypeSetting></v-serviceTypeSetting>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>
<script>
import ShopSetting from '../components/BaseInfoSettings/ShopSetting';
import DepartmentSetting from '../components/BaseInfoSettings/DepartmentSetting';
import ServiceTypeSetting from '../components/BaseInfoSettings/ServiceTypeSetting';

export default {
    components: {
        'v-shopInfoSetting': ShopSetting,
        'v-departmentInfoSetting': DepartmentSetting,
        'v-serviceTypeSetting': ServiceTypeSetting,
    },
    

}
</script>