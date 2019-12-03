export default {
    namespaced: true,
    state: {
        departments: [
            { id: 1, code: '001', name: '美容' },
            { id: 2, code: '002', name: '美发' },
            { id: 3, code: '003', name: '推拿' }
        ],
    },
    mutations: {
        add(state, payload) {
            state.departments.push(payload);
        },
        modify(state, payload) {
            const { id, code, name } = payload;
            const { department } = this.get(state, id);

            department.code = code;
            department.name = name;
        },
        delete(state, index) {
            state.departments.splice(index, 1);
        },
    },
    actions: {
        deleteEntity: ({ commit, getters }, id) => {
            const { index } = getters.getEntity(id);
            commit('delete', index)
        },
    },
    getters: {
        getEntity: (state) => (id) => {
            for(let i=0; i< state.departments.length; i++) {
                if (state.departments[i].id == id) {

                    return { department: state.departments[i], index: i };
                }
            }
            
            return null;
        },
        allDepartments(state) {
            return state.departments;
            
        },
    }
    
}