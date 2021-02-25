<template>
    <div class="uk-container uk-container-large uk-margin uk-margin-top">
        <!--タイトル-->
        <div class="uk-text-center">
            <img src="@/assets/logform.png" width="200" height="200" alt="">
            <p>ログイン</p>
        </div>
        <!--ログ入力フォーム-->
        <div class="uk-text-center">
            <label for="email">Email : </label>
            <input id= "email" type="email" v-model="email">
            <br>
            <label for="pwd">Password : </label>
            <input id= "pwd" type="pwd" v-model="pwd">
            <button @click="login">ログイン</button>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
        email : '',
        pwd : '',
        }
    },
    
     methods: {
        login() {
            this.$store.dispatch('login',{
                email : this.email,
                password : this.pwd,
            });
            this.email = "";
            this.pwd = "";
        },
    } //methodsの締め
}
</script>