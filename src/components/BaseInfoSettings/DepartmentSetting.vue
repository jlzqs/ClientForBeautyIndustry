<template>
    <v-container>
        <v-row >
            <v-col cols="4">
                <v-btn @click="newDepartment()" class="float-right mx-auto" title="新增">
                    <v-icon>open_in_new</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <v-simple-table>
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
                
            </v-col>
            <v-col cols="6" class="mx-auto">
                    <v-row>
                    <v-col cols="6" class="mx-auto">
                        <v-text-field class="mt-4" label="部门名称" placeholder="请输入部门名称" v-model="processing.name"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6" class="mx-auto">
                        <v-btn color="primary" class="float-right" @click="save">保存</v-btn>
                    </v-col>
                </v-row>
                
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            departments: [
                { id: 1, code: '001', name: '美容' },
                { id: 2, code: '002', name: '美发' },
                { id: 3, code: '003', name: '推拿' }
            ],
            processing: {
                id: null,
                name: ''
            },
        }
    },
    methods: {
        remove(id) {
            let { index } = this.get(id);

            this.departments.splice(index,1);

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
            
            for(let index=0; index< this.departments.length; index++)
            {
                const d = this.departments[index];

                window.console.log(`${d.id} == ${id}, index=${index}`)
                if (d.id == id) {
                    return {
                        department: d,
                        index 
                    };
                }
            }

            return -1;
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