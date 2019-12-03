export default {
    namespaced: true,
    state: {
        serviceItems: [ 
            { id: 1, code: '001', name: '净肤系列', departmentId: 1,  },
            { id: 2, code: '002', name: '美肤系列', departmentId: 1,  },
            { id: 3, code: '003', name: '洗发系列', departmentId: 2,  },
            { id: 4, code: '004', name: '烫发系列',  },
        ]
    },
    getters: {
        allServiceItems(state, getters, rootState, rootGetters) {
            let gotDepartment = null;

            state.serviceItems.forEach(serviceItem => {
                gotDepartment = rootGetters["departmentState/getEntity"](serviceItem.departmentId);

                if (gotDepartment && gotDepartment.department) {
                    serviceItem.department = gotDepartment.department;
                }
            });

            return state.serviceItems;
        },
        maxId(state) {
            if (!state || !state.serviceItems || state.serviceItems.length === 0) {
                return 0;
            }
            return state.serviceItems[state.serviceItems.length - 1].id;
        },
        get: (state) => (id) => {
            if (!state.serviceItems || state.serviceItems.length <=0) {
                return null;
            }
            for(let i=0;i< state.serviceItems.length;i++) {
                const serviceItem = state.serviceItems[i];

                if (serviceItem.id == id) {

                    return {
                        index: i,
                        serviceItem
                    };
                }
            }
        }
    },
    mutations: {
        add(state, payload) {
            state.serviceItems.push(payload);
        },
        update(state, { index, serviceItem }) {
            state.serviceItems[index] = serviceItem;
            
        }
    },
    actions: {
        addEntity({ commit },{ id, code, name, departmentId }) {
            commit('add', { id, code, name, departmentId })
        },
        updateEntity({ commit, getters}, { id, code, name, departmentId }) {
            const { index, serviceItem } = getters.get(id);
            if (!serviceItem) {
                return null;
            }
            serviceItem.code = code;
            serviceItem.name = name;
            serviceItem.departmentId = departmentId;

            commit('update', { index, serviceItem })
        },
    }
    
}