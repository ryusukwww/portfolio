<template>
  <div id="app">
    <header>
      <!--ナビゲーションPC-->
      <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
          <nav class="uk-navbar-container uk-visible@m " uk-navbar="mode:click">
              <div class="uk-navbar-left">
                  <ul class="uk-navbar-nav uk-margin-right">
                      <li><a href="/">NAKAMURA RYUSUKE</a></li>
                  </ul>
              </div>
              <div class="uk-navbar-right">
                  <ul class="uk-navbar-nav uk-margin-right">
                      <li><a href="./profile">PROFILE</a></li>
                      <li><a href="./work">WORK</a></li>
                      <li><a href="/portfolio">PORTFOLIO</a></li>
                      <li>
                        <a href="#">▼APP</a>
                            <div class="uk-navbar-dropdown">
                                <ul class="uk-nav uk-navbar-dropdown-nav">
                                    <li><a href="/log">LOG</a></li>
                                    <li><a href="/calender">CALENDER</a></li>
                                </ul>
                            </div>
                      </li>  
                      <li><a href="https://github.com/ryusukwww/portfolio" target="_blank" rel="noopener noreferrer">GITHUB</a></li>
                      <li v-if="!isAuthenticated"><a href="/login">LOGIN</a></li>
                      <li v-if="isAuthenticated"><a @click="logout">LOGOUT</a></li>
                  </ul>
              </div>
          </nav>
      </div>

      <!--ナビゲーションSP-->
      <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
          <nav class="uk-navbar-container uk-navbar uk-hidden@m">
              <div class="uk-navbar-left">
                  <ul class="uk-navbar-nav uk-margin-right">
                      <li><a href="/">NAKAMURA RYUSUKE</a></li>
                  </ul>
              </div>
              <div class="uk-navbar-right">
                  <ul class="uk-navbar-nav uk-margin-right uk-navbar-toggle" uk-navbar-toggle-icon uk-toggle="target: #offcanvas-nav">
                  </ul>
              </div>
          </nav>
      </div>

      <!--オフキャンバス-->
      <div id="offcanvas-nav" uk-offcanvas="flip: true">
          <div class="uk-offcanvas-bar">
              <ul class="uk-nav uk-nav-default">
                  <li class="uk-nav-header">MENU</li>
                      <li><a href="./profile">PROFILE</a></li>
                      <li><a href="./work">WORK</a></li>
                      <li><a href="/portfolio">PORTFOLIO</a></li>
                      <li><a href="https://github.com/ryusukwww/portfolio" target="_blank" rel="noopener noreferrer">GITHUB</a></li>
                      <li v-if="!isAuthenticated"><a href="/login">LOGIN</a></li>
                      <li v-if="isAuthenticated"><a  @click="logout">LOOUT</a></li>
                    <li class ="uk-nav-header">APP</li>
                      <li><a href="/log">LOG</a></li>
                      <li><a href="/calender">Clender</a></li> 
              </ul>
          </div>
      </div>
    </header>
        <main>
        <transition appear>
            <div>
                <router-view></router-view>
            </div>
        </transition>
    </main>
  
  </div>
</template>

<script>
export default {
    computed : {
        isAuthenticated(){
            return this.$store.getters.idToken !== null ; 
        }
    },
    methods : {
        logout(){
            this.$store.dispatch('logout');
        }
    }
}
</script>

<style scoped>

    .uk-offcanvas-bar {
    background: #003e7f;
    }

    .pointer{
        cursor: pointer;
    }

    .v-enter-active, .v-leave-active {
    transition: opacity 1s;
    }
    .v-enter, .v-leave-to {
    opacity: 0;
}
</style>