import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../axios-auth';
import axiosRefresh from '../axios-refresh.js' ; 
import router from '../router';

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

        login({commit,dispatch},authData){
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
                    dispatch('refreshIdToken' , response.data.refreshToken);
                }, 
                response.data.expirensIn * 1000);
                router.replace('Success');
            }
            );
        },
        logout({commit}){
            commit('updateIdToken', null) ;
            localStorage.removeItem('idToken');
            localStorage.removeItem('refreshToken');
            router.replace('login');
        },
        refreshIdToken({commit , dispatch},refreshToken){
            axiosRefresh
                .post('/token?key=AIzaSyDLYrmb4IwfoWKakEjjFUQonoJQcI1j52U',{
                    grant_type : 'refresh_token',
                    refresh_token : refreshToken
            }
        ).then(response =>{
            commit('updateIdToken', response.data.id_token);
            setTimeout(()=>{
                dispatch('refreshIdToken',response.data.refresh_token)
            },response.data.expires_in * 1000)
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
