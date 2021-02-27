<template>
    <div class="uk-container uk-container-large uk-margin uk-margin-top">
        <!--タイトル-->
        <div class="uk-text-center">
            <img src="@/assets/logform.png" width="200" height="200" alt="">
            <p>ログイン</p>
        </div>
        <!--アラートメッセージ-->
        <div class="uk-alert-warning" uk-alert v-show="!showAlert">
            <a class="uk-alert-close" uk-close></a>
            <p>ログインできませんでした。もう一度やり直してください。</p>
        </div>
        <!--ログインフォーム-->
        <form class="uk-margin uk-text-center">
            <fieldset class="uk-fieldset">
                <input class="uk-input" id= "email" type="email" v-model="email" placeholder="メールアドレスを入力してください">
                <input class="uk-input uk-margin-top" id= "pwd" type="pwd" v-model="pwd" placeholder="パスワードを入力してください">
            </fieldset>
        </form>
        <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" @click="login">ログイン</button>
        <p><a href="/resister">新規登録はこちら</a></p>
        </div>
</template>

<script>

export default {
    data() {
        return {
        email : '',
        pwd : '',
        showAlert : true,
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
            this.showAlert = false ;
        },
    } //methodsの締め
}
</script>