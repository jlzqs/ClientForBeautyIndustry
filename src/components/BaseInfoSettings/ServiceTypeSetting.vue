<template>
    <div class="d-flex flex-wrap justify-center">
        <div class="d-flex flex-column">
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th>编号</th>
                            <th>名称</th>
                            <th>所属部门</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in allServiceItems" :key="item.id" :class="selectedId == item.id ? 'grey' : 'white'">
                            <td>{{ item.code }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.department ? item.department.name : '' }}</td>
                            <td>
                                <v-btn @click="modify(item.id)">
                                    <v-icon>build</v-icon>修改
                                </v-btn>
                                <v-btn @click="deleteService(item.id)">
                                    <v-icon>delete</v-icon>删除
                                </v-btn>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </div>

        <v-card class="d-flex flex-column ml-10 px-10">
            <v-card-text>
                <v-row>
                    <v-text-field label="项目系列名称" title="项目系列名称" persistent-hint hint="项目系列名称； 例：美发系列" v-model="processingService.name"></v-text-field>
                </v-row>
                <v-row>
                    <v-select label="请选择此系列所属部门" :items="departments" item-value="id" item-text="name" v-model="processingService.departmentId"></v-select>
                </v-row>
                <v-row class="justify-end">
                    <v-btn class="primary mt-5" @click="save">保存</v-btn>
                </v-row>
            </v-card-text>
            
        </v-card>
        
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        const departments = this.$store.getters["departmentState/allDepartments"];

        return {
            departments,
            processingService: {
                code: '',
                name: '',
                departmentId: -1
            },
            selectedId: null,
        }
    },
    computed: {
        ...mapGetters({
            allServiceItems: 'serviceItemState/allServiceItems'
        })
    },
    methods: {
        getDepartment(departmentId) {
            const entity = this.$store.getters["departmentState/getEntity"](departmentId);

            if (entity && entity.department) {
                return entity.department;
            }

            return null;
            
        },
        save() {
            if (!this.processingService.id) {
                const newId = this.$store.getters['serviceItemState/maxId'] + 1;
                let code = ('00' + newId)

                code = code.substr(code.length - 3, 3);

                const newSerivceItem = {
                    id: newId,
                    code,
                    name: this.processingService.name,
                    departmentId: this.processingService.departmentId
                };

                return this.$store.dispatch('serviceItemState/addEntity', newSerivceItem);
            } else {
                this.$store.dispatch('serviceItemState/updateEntity', this.processingService);
            }
        },
        modify(id) {
            this.selectedId = id

            this.processingService = this.get(id).serviceItem;

        },
        deleteService(id) {
            const { index } = this.get(id);

            this.allServiceItems.splice(index, 1);
        },
        get(id) {
            const serviceItem = this.$store.getters["serviceItemState/get"](id);
            if (!serviceItem || !serviceItem.serviceItem) {
                return null;
            }

            return serviceItem;
        },
        init() {
            this.processingService = {
                id: -1,
                name: '',
                departmentId: -1
            }
        }
    }
}
</script>