<script setup>
import Header from "./components/Header.vue";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <v-app>
    <v-container fluid class="main">
      <v-container class="content">
        <v-row>
          <v-col>
            <Header />
            <Navigation />
            <v-row>
              <v-col>
                <router-view />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-footer app>
                  <Footer />
                </v-footer>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-app>
</template>

<style scoped lang="scss">
.main {
  padding: 0;
}
.v-row + .v-row {
  margin: 0;
}

.content {
  height: 100vh;
  padding: 0;
}

.v-footer {
  padding: 0;
}
</style>
