import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../axios-auth';
import axiosRefresh from '../axios-refresh.js' ; 

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        idToken : null,
    },
    getters : {
        idToken: state => state.idToken
    },
    mutations : {
        updateIdToken(state,idToken){
            state.idToken = idToken;
        }
    },
    actions : {
        autoLogin({commit}){
            const idToken = localStorage.getItem('idToken');
            if(!idToken) return ; 
            commit('updateIdToken', idToken); 
        },

        login({commit},authData){
            axios.post('/accounts:signInWithPassword?key=AIzaSyDLYrmb4IwfoWKakEjjFUQonoJQcI1j52U',
            {
                email : authData.email,
                password : authData.password,
                returnSecureToken : true
            })
            .then(response=>{
                commit('updateIdToken',response.data.idToken);
                localStorage.setItem('idToken',response.data.idToken);
                setTimeout(()=>{
                    axiosRefresh.post('/token?key=AIzaSyDLYrmb4IwfoWKakEjjFUQonoJQcI1j52U',{
                        grant_type : 'refresh_token',
                        refresh_token : response.data.refreshToken
                    }
                ).then(response =>{
                    commit('updateIdToken', response.data.id_token);
                }); 
                }, response.data.expirensIn * 1000);
            });
        },
        register({commit},authData){
            axios.post('accounts:signUp?key=AIzaSyDLYrmb4IwfoWKakEjjFUQonoJQcI1j52U',
            {
                email : authData.email,
                password : authData.password,
                returnSecureToken : true
            })
            .then(response => {
                commit('updateIdToken',response.data.idToken)
            });
        }
        },
});
