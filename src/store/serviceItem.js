import axios from 'axios';

export default {
    namespaced: true,
    state: {
        serviceItems: [ 
            // { id: 1, code: '001', name: '净肤系列', departmentId: 1,  },
            // { id: 2, code: '002', name: '美肤系列', departmentId: 1,  },
            // { id: 3, code: '003', name: '洗发系列', departmentId: 2,  },
            // { id: 4, code: '004', name: '烫发系列',  },
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
                    return serviceItem;
                    // return {
                    //     index: i,
                    //     serviceItem
                    // };
                }
            }
        },
    },
    mutations: {
        add(state, payload) {
            state.serviceItems.push(payload);
        },
        update(state, serviceItem) {
            for(let i=0;i< state.serviceItems.length;i++) {
                const item = state.serviceItems[i];

                if (item.id == serviceItem.id) {
                    state.serviceItems[i] = serviceItem;
                }
            }
            // state.serviceItems[index] = serviceItem;
            
        },
        delete: (state, id) => {
            for(let i=0;i< state.serviceItems.length;i++) {
                const item = state.serviceItems[i];

                if (item.id == id) {
                    state.serviceItems.splice(i, 1);
                }
            }
        }
    },
    actions: {
        addEntity({ commit },{ id, code, name, departmentId }) {
            commit('add', { id, code, name, departmentId })
        },
        updateEntity({ commit, getters}, { id, code, name, departmentId }) {
            const serviceItem = getters.get(id);
            if (!serviceItem) {
                return null;
            }
            serviceItem.code = code;
            serviceItem.name = name;
            serviceItem.departmentId = departmentId;

            commit('update', serviceItem)
        },
        deleteEntity({ commit }, id) {
            commit('delete', id);
        },
        load({ state }) {
            window.console.log('-----get all service items')
            axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
            
            axios.get('http://localhost:5000/api/1.0/UnitType').then((resp) => {
                window.console.log('----got items', resp)
                state.serviceItems = resp.data;
                
            })
            .catch(err => {
                window.console.log('----get servie items error', err)
            })
        }
    }
    
}