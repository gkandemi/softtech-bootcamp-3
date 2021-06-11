<template>
  <div class="container">
    <router-link class="me-2" to="/">Anasayfa</router-link>
    <router-link class="me-2" to="/about">Hakkımda</router-link>
    <router-link to="/contact">İletişim</router-link>

    <div class="row">
      <div class="col-4 text-center offset-4">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
