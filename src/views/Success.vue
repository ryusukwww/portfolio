<template>
    <div class="uk-container uk-container-large uk-margin uk-margin-top">
        <!--タイトル-->
        <div class="uk-text-center">
            <img src="@/assets/success.png" width="200" height="200" alt="">
            <p>ログインに成功しました</p>
        </div>
        <!--ログインフォーム-->
        <div class="uk-alert-primary" uk-alert>
            <a class="uk-alert-close" uk-close></a>
            <p>新規会員登録 / ログインに成功しました。学習の記録が行えるようになっているので、ぜひ記入してみてください。</p>
            <p><a href="/logadmin">学習の記録を記入する</a></p>
            <p><a href="/logout">ログアウト</a></p>
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