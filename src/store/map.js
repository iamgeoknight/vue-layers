import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            map: null
        }
    },
    mutations: {
        setMap (state, map) {
            state.map = map
        }
    }
});

export default store;
