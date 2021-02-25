<template>
    <div class="uk-container uk-container-large uk-margin uk-margin-top">
        <!--タイトル-->
        <div class="uk-text-center">
            <img src="@/assets/logform.png" width="200" height="200" alt="">
            <p>登録</p>
        </div>
        <!--ログ入力フォーム-->
        <div class="uk-text-center">
            <label for="email">Email : </label>
            <input id= "email" type="email" v-model="email">
            <br>
            <label for="pwd">Password : </label>
            <input id= "pwd" type="pwd" v-model="password">
            <button @click="register">登録する</button>
        </div>
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