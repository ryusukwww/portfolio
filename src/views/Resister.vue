<template>
    <div class="uk-container uk-container-large uk-margin uk-margin-top">
        <!--タイトル-->
        <div class="uk-text-center">
            <img src="@/assets/logform.png" width="200" height="200" alt="">
            <p>新規登録</p>
        </div>
        <!--ログ入力フォーム-->
        <form class="uk-margin uk-text-center">
            <fieldset class="uk-fieldset">
                <input class="uk-input" id= "email" type="email" v-model="email" placeholder="メールアドレスを入力してください">
                <input class="uk-input uk-margin-top" id= "pwd" type="pwd" v-model="pwd" placeholder="パスワードを入力してください">
            </fieldset>
        </form>
        <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" @click="register">新規登録する</button>
      </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    register() {
      this.$store.dispatch('register', {
        email: this.email,
        password: this.password
      });
      this.email = '';
      this.password = '';
    }
  }
};
</script>