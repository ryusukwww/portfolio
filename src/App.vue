<template>
  <div>
    <header>
      <!--ナビゲーションPC-->
      <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
          <nav class="uk-navbar-container uk-navbar uk-visible@m">
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
                      <li><a href="/log">LOG</a></li>
                      <li><a href="https://github.com/ryusukwww/portfolio" target="_blank" rel="noopener noreferrer">GITHUB</a></li>
                  </ul>
              </div>
          </nav>
      </div>

      <!--ナビゲーションSP-->
      <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
          <nav class="uk-navbar-container uk-navbar uk-hidden@m" >
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
                      <li><a href="/log">LOG</a></li>
                  <li><a href="https://github.com/ryusukwww/portfolio" target="_blank" rel="noopener noreferrer">GITHUB</a></li>
              </ul>
          </div>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
  
  </div>
</template>
