<template>
    <v-container>
        <v-row >
            <v-col cols="4">
                <v-btn @click="newDepartment()" class="float-right mx-auto" title="新增">
                    <v-icon>open_in_new</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row class="d-flex  justify-center">
            
                <v-simple-table class="flex-column">
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th>编号</th>
                                <th>名称</th>
                                <th class="text-center">操 作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr  v-for="department in departments" :key="department.id">
                                <td>{{ department.code }}</td>
                                <td>{{ department.name }}</td>
                                <td>
                                    <v-btn @click="modify(department.id)" title="修改">
                                        <v-icon>build</v-icon>
                                    </v-btn>
                                    <v-btn @click="remove(department.id)" title="删除">
                                        <v-icon>delete</v-icon>
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
                
            
                <div class="flex-column ml-5">
                    <v-text-field class="mt-4" label="部门名称" placeholder="请输入部门名称" v-model="processing.name"></v-text-field>
                    <v-btn color="primary" class="float-right" @click="save">保存</v-btn>
                </div>
                <!-- <v-row>
                    <v-col cols="102" class="mx-left">
                        <v-text-field class="mt-4" label="部门名称" placeholder="请输入部门名称" v-model="processing.name"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" class="mx-right">
                        <v-btn color="primary" class="float-right" @click="save">保存</v-btn>
                        
                    </v-col>
                </v-row> -->

        </v-row>
    </v-container>
</template>
<script>
export default {
    data() {
        const departments = this.$store.state.departmentState.departments;

        return {
            departments,
            processing: {
                id: null,
                name: ''
            },
        }
    },
    methods: {
        remove(id) {
            this.$store.dispatch('departmentState/deleteEntity', id);

            if (id == this.processing.id) {
                this.initProcess();
            }
            this.$root.showDialog('删除成功！', `id=${id} 已删除！`);
        },
        modify(id) {
            let { index } = this.get(id);

            this.processing = this.departments[index]
        },
        newDepartment() {
            this.initProcess();
        },
        get(id) {
            const departments = this.$store.getters["departmentState/allDepartments"];

            for(let i=0; i< departments.length; i++) {
                if (departments[i].id == id) {
                    return { department: departments[i], index: i };
                }
            }

            return null;
        },
        initProcess() {
            this.processing = {
                id: null,
                name: ''
            };
        },
        save() {
            const newId = this.departments[this.departments.length - 1].id + 1;

            let code = ('00' + newId)

            code = code.substr(code.length - 3, 3);

            if (!this.processing.id) {
                this.departments.push({
                    id: newId,
                    code,
                    name: this.processing.name,
                });
            }

            this.initProcess();
            this.$root.showDialog('操作成功！', '保存成功！')
        }
    },
    computed: {
        processingDepartment() {
            return this.processing;
        }
    }
}
</script>